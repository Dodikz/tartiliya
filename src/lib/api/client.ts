const BASE_URL = 'https://api.myquran.com/v3';

const MAX_CONCURRENT = 3;
const DELAY_BETWEEN_MS = 350;
const MAX_RETRIES = 4;
const BASE_BACKOFF_MS = 1500;

export class ApiClientError extends Error {
  status?: boolean;
  statusCode?: number;

  constructor(message: string, statusCode?: number, status?: boolean) {
    super(message);
    this.name = 'ApiClientError';
    this.statusCode = statusCode;
    this.status = status;
  }
}

const responseCache = new Map<string, any>();

let activeRequests = 0;
let lastRequestTime = 0;
const pendingQueue: Array<{
  resolve: (value: any) => void;
  reject: (reason: any) => void;
  fn: () => Promise<any>;
}> = [];

function enqueue<T>(fn: () => Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    pendingQueue.push({ resolve, reject, fn });
    processQueue();
  });
}

async function processQueue() {
  if (activeRequests >= MAX_CONCURRENT || pendingQueue.length === 0) return;

  const item = pendingQueue.shift();
  if (!item) return;

  activeRequests++;

  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < DELAY_BETWEEN_MS) {
    await sleep(DELAY_BETWEEN_MS - elapsed);
  }
  lastRequestTime = Date.now();

  try {
    const result = await item.fn();
    item.resolve(result);
  } catch (err) {
    item.reject(err);
  } finally {
    activeRequests--;
    if (pendingQueue.length > 0) {
      setTimeout(() => processQueue(), 50);
    }
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchWithRetry(url: string, options: RequestInit, attempt: number = 0): Promise<Response> {
  const response = await fetch(url, options);

  if ((response.status === 429 || response.status >= 500) && attempt < MAX_RETRIES) {
    const backoff = BASE_BACKOFF_MS * Math.pow(2, attempt) + Math.random() * 500;
    const retryAfter = response.headers.get('Retry-After');
    const waitMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : backoff;

    console.warn(
      `[API] ${response.status} on ${url} — retry ${attempt + 1}/${MAX_RETRIES} in ${Math.round(waitMs)}ms`
    );

    await sleep(waitMs);
    return fetchWithRetry(url, options, attempt + 1);
  }

  return response;
}

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  const cacheKey = `${(options.method || 'GET').toUpperCase()}:${url}`;
  if (responseCache.has(cacheKey)) {
    return responseCache.get(cacheKey) as T;
  }

  return enqueue<T>(async () => {
    if (responseCache.has(cacheKey)) {
      return responseCache.get(cacheKey) as T;
    }

    const defaultHeaders: HeadersInit = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetchWithRetry(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
      });

      if (!response.ok) {
        let errorMessage = `HTTP Error ${response.status}: ${response.statusText}`;
        try {
          const errorJson = await response.json();
          if (errorJson?.message) {
            errorMessage = errorJson.message;
          }
        } catch (_) {
        }
        throw new ApiClientError(errorMessage, response.status, false);
      }

      const json = await response.json();

      if (typeof json === 'object' && json !== null && 'status' in json && json.status === false) {
        throw new ApiClientError(json.message || 'API request failed', response.status, false);
      }

      responseCache.set(cacheKey, json);

      return json as T;
    } catch (error) {
      if (error instanceof ApiClientError) {
        throw error;
      }
      throw new ApiClientError(
        (error as Error)?.message || 'Koneksi gagal atau jaringan bermasalah',
        0,
        false
      );
    }
  });
}

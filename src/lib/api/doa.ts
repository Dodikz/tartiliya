export interface DoaItem {
  id: number;
  grup: string;
  nama: string;
  ar: string;
  tr: string;
  idn: string;
  tentang: string;
  tag: string[];
}

let cachedDoas: DoaItem[] | null = null;
const CACHE_TTL = 1000 * 60 * 60;

export const DoaService = {
  async getAll(): Promise<DoaItem[]> {
    const now = Date.now();
    if (cachedDoas && (now - cacheTimestamp < CACHE_TTL)) {
      return cachedDoas;
    }

    try {
      const res = await fetch('https://equran.id/api/doa', {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch doa: ${res.status} ${res.statusText}`);
      }

      const data: DoaItem[] = await res.json();
      cachedDoas = data;
      cacheTimestamp = now;
      return data;
    } catch (err) {
      console.error('[DoaService] Error fetching doas:', err);
      if (cachedDoas) return cachedDoas;
      return [];
    }
  },

  async getById(id: number): Promise<DoaItem | null> {
    try {
      const res = await fetch(`https://equran.id/api/doa/${id}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!res.ok) return null;
      const data: DoaItem = await res.json();
      return data;
    } catch (err) {
      console.error(`[DoaService] Error fetching doa ${id}:`, err);
      return null;
    }
  },

  async search(query: string): Promise<DoaItem[]> {
    const all = await this.getAll();
    if (!query.trim()) return all;

    const q = query.toLowerCase().trim();
    return all.filter(item => 
      item.nama.toLowerCase().includes(q) ||
      item.idn.toLowerCase().includes(q) ||
      item.grup.toLowerCase().includes(q) ||
      item.tentang?.toLowerCase().includes(q) ||
      item.tag?.some(t => t.toLowerCase().includes(q))
    );
  }
};

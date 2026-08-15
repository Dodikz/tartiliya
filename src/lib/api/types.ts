export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  status: false;
  message: string;
}

export interface SholatInfo {
  name: string;
  desc: string;
  lang: string;
  last_update: string;
  source: string;
}

export interface KotaLocation {
  id: string;
  lokasi: string;
}

export interface JadwalEntry {
  tanggal: string;
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
}

export interface JadwalData {
  id: string;
  kabko: string;
  prov: string;
  jadwal: Record<string, JadwalEntry> | JadwalEntry;
}

export interface CalendarDateInfo {
  today: string;
  day: number;
  dayName: string;
  month: number;
  monthName: string;
  year: number;
}

export interface CalendarData {
  method: 'standar' | 'islamic-umalqura' | 'islamic-civil';
  adjustment: number;
  ce: CalendarDateInfo;
  hijr: CalendarDateInfo;
}

export interface QiblaData {
  latitude: number;
  longitude: number;
  direction: number;
}

export interface HadisEncMeta {
  name: string;
  desc: string;
  lang: string;
  ver: string;
  last_update: string;
  source: string;
}

export interface HadisEncText {
  ar: string;
  id: string;
}

export interface HadisEncDetail {
  id: number;
  text: HadisEncText;
  grade: string | null;
  takhrij: string | null;
  hikmah: string | null;
  prev: number | null;
  next: number | null;
}

export interface HadisEncPaging {
  current: number;
  per_page: number;
  total_data: number;
  total_pages: number;
  has_prev: boolean;
  has_next: boolean;
  next_page: number | null;
  prev_page: number | null;
  first_page: number | null;
  last_page: number | null;
}

export interface HadisEncExploreData {
  paging: HadisEncPaging;
  hadis: HadisEncDetail[];
}

export interface HadisSearchHit {
  id: number;
  text: string;
  focus: string[];
}

export interface HadisSearchData {
  keyword: string;
  paging: HadisEncPaging;
  hadis: HadisSearchHit[];
}

export interface GeocodeEntry {
  place_id: number;
  class: string;
  type: string;
  lat: string;
  lon: string;
  name?: string;
  display_name: string;
  address?: Record<string, string>;
  boundingbox?: {
    south: string;
    north: string;
    west: string;
    east: string;
  };
}

export interface IpInfo {
  ip: string;
  agent: string;
}

export interface HealthData {
  serverTime: string;
  startedAt: string;
  uptimeSeconds: number;
  env: string;
  timezone: string;
}

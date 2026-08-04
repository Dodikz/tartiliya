import { fetchApi } from './client';
import type { ApiResponse, QiblaData } from './types';

/**
 * Service untuk Perhitungan Arah Kiblat
 */
export const QiblaService = {
  /**
   * Menghitung arah kiblat berdasarkan koordinat latitude & longitude
   * @param lat Latitude (contoh: -6.2)
   * @param lon Longitude (contoh: 106.816666)
   */
  async getQiblaDirection(lat: number, lon: number): Promise<ApiResponse<QiblaData>> {
    return fetchApi<ApiResponse<QiblaData>>(`/qibla/${encodeURIComponent(lat)}/${encodeURIComponent(lon)}`);
  }
};

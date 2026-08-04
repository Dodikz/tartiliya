import { fetchApi } from './client';
import type { 
  ApiResponse, 
  SholatInfo, 
  KotaLocation, 
  JadwalData 
} from './types';

export const SholatService = {
  async getSholatInfo(): Promise<ApiResponse<SholatInfo>> {
    return fetchApi<ApiResponse<SholatInfo>>('/sholat');
  },

  async getAllKota(): Promise<ApiResponse<KotaLocation[]>> {
    return fetchApi<ApiResponse<KotaLocation[]>>('/sholat/kabkota/semua');
  },

  async getKotaById(id: string): Promise<ApiResponse<KotaLocation[]>> {
    return fetchApi<ApiResponse<KotaLocation[]>>(`/sholat/kabkota/${encodeURIComponent(id)}`);
  },

  async searchKota(keyword: string): Promise<ApiResponse<KotaLocation[]>> {
    const trimmed = keyword.trim();
    if (!trimmed) {
      return { status: true, message: 'success', data: [] };
    }
    return fetchApi<ApiResponse<KotaLocation[]>>(`/sholat/kabkota/cari/${encodeURIComponent(trimmed)}`);
  },

  async getJadwalToday(
    cityId: string, 
    tz: string = 'Asia/Jakarta'
  ): Promise<ApiResponse<JadwalData>> {
    const query = tz ? `?tz=${encodeURIComponent(tz)}` : '';
    return fetchApi<ApiResponse<JadwalData>>(`/sholat/jadwal/${encodeURIComponent(cityId)}/today${query}`);
  },

  async getJadwalByPeriod(
    cityId: string, 
    period: string
  ): Promise<ApiResponse<JadwalData>> {
    return fetchApi<ApiResponse<JadwalData>>(`/sholat/jadwal/${encodeURIComponent(cityId)}/${encodeURIComponent(period)}`);
  }
};

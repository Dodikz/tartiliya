import { fetchApi } from './client';
import type { ApiResponse, CalendarData } from './types';

export const KalenderService = {
  async convertCEToHijri(
    date: string,
    method: 'standar' | 'islamic-umalqura' | 'islamic-civil' = 'standar'
  ): Promise<ApiResponse<CalendarData>> {
    return fetchApi<ApiResponse<CalendarData>>(`/cal/ce2hijr/${encodeURIComponent(date)}?method=${encodeURIComponent(method)}`);
  },

  async getHijriToday(
    method: 'standar' | 'islamic-umalqura' | 'islamic-civil' = 'standar'
  ): Promise<ApiResponse<CalendarData>> {
    const today = new Date().toISOString().split('T')[0];
    return this.convertCEToHijri(today, method);
  }
};

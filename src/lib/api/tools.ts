import { fetchApi } from './client';
import type { ApiResponse, GeocodeEntry, IpInfo, HealthData } from './types';

/**
 * Service untuk Tools, Geocode, IP Info & Health Check
 */
export const ToolsService = {
  /**
   * Mendapatkan koordinat & geocode lokasi dari alamat/nama tempat
   */
  async geocode(query: string): Promise<ApiResponse<GeocodeEntry>> {
    return fetchApi<ApiResponse<GeocodeEntry>>(`/tools/geocode/${encodeURIComponent(query)}`);
  },

  /**
   * Mendapatkan informasi IP & User Agent client
   */
  async getIpInfo(): Promise<ApiResponse<IpInfo>> {
    return fetchApi<ApiResponse<IpInfo>>('/tools/ip');
  },

  /**
   * Check status & uptime server API
   */
  async getHealth(): Promise<ApiResponse<HealthData>> {
    return fetchApi<ApiResponse<HealthData>>('/health');
  }
};

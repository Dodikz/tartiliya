import { fetchApi } from './client';
import type { 
  ApiResponse, 
  HadisEncMeta, 
  HadisEncDetail, 
  HadisEncExploreData, 
  HadisSearchData 
} from './types';

export const HadisService = {
  async getMeta(): Promise<ApiResponse<HadisEncMeta>> {
    return fetchApi<ApiResponse<HadisEncMeta>>('/hadis/enc/meta');
  },

  async getById(id: number | string): Promise<ApiResponse<HadisEncDetail>> {
    return fetchApi<ApiResponse<HadisEncDetail>>(`/hadis/enc/${encodeURIComponent(id)}`);
  },

  async explore(page: number = 1, perPage: number = 10): Promise<ApiResponse<HadisEncExploreData>> {
    return fetchApi<ApiResponse<HadisEncExploreData>>(`/hadis/enc/explore?page=${page}&per_page=${perPage}`);
  },

  async search(keyword: string, page: number = 1): Promise<ApiResponse<HadisSearchData>> {
    return fetchApi<ApiResponse<HadisSearchData>>(`/hadis/enc/search?keyword=${encodeURIComponent(keyword)}&page=${page}`);
  }
};

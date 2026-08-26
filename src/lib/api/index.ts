export * from './types';
export * from './client';
export { SholatService } from './sholat';
export { KalenderService } from './kalender';
export { QiblaService } from './qibla';
export { HadisService } from './hadis';
export { ToolsService } from './tools';
export { QuranService } from './quran';
export { DoaService } from './doa';
export { HadisIdService } from './hadis-id';

import { SholatService } from './sholat';
import { KalenderService } from './kalender';
import { QiblaService } from './qibla';
import { HadisService } from './hadis';
import { ToolsService } from './tools';
import { QuranService } from './quran';

export const MyQuranAPI = {
  sholat: SholatService,
  kalender: KalenderService,
  qibla: QiblaService,
  hadis: HadisService,
  tools: ToolsService,
  quran: QuranService,
};

export default MyQuranAPI;

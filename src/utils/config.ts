import { AppConfig } from '../types';

export function getAppConfig(): AppConfig {
  return require(`../../config.${process.env.NODE_ENV}.json`);
}

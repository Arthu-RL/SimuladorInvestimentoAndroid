import { MODE, BASE_URL, PROD, DEV, SSR, CURRENCY_API_URL } from '@env';
import { envSchema } from './lib/schemas/env.schema';


export const env = envSchema.parse({
  MODE: MODE,
  BASE_URL: BASE_URL,
  PROD: PROD === 'true',
  DEV: DEV === 'true',
  SSR: SSR === 'true',
  CURRENCY_API_URL: CURRENCY_API_URL,
});
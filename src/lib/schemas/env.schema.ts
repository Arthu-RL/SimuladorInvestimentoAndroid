import { z } from 'zod';

export const envSchema = z.object({
  MODE: z.string(),
  BASE_URL: z.string().url(),
  PROD: z.union([z.boolean(), z.string().transform(val => val === 'true')]).optional(),
  DEV: z.union([z.boolean(), z.string().transform(val => val === 'true')]).optional(),
  SSR: z.union([z.boolean(), z.string().transform(val => val === 'true')]).optional(),
  CURRENCY_API_URL: z.string().url(),
});
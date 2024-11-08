import { getCurrentEnvironment } from '@/utils/environment';

export const IS_DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true'; // Enables logging, etc.

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; // Enables analytics, etc.
// export const IS_PRODUCTION =  process.env.NEXT_PUBLIC_ENV === 'production'; // Enables analytics, etc.

// export const PUBLIC_URL = envRequired(process.env.NEXT_PUBLIC_PUBLIC_URL); // Variant 1 - value is required
export const PUBLIC_URL = process.env.NEXT_PUBLIC_PUBLIC_URL ?? 'http://localhost:3000'; // Variant 2 - value is optional

export const APP_NAME = 'TODO: Add Name';
export const APP_SHORT_NAME = 'TODO: Add Short Name';

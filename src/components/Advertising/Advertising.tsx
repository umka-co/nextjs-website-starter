import { IS_PRODUCTION } from '@/config';
import GoogleAdsense from './GoogleAdsense';
import { Suspense } from 'react';

/**
 * Add supporting scripts for Google Adsense, and other advertising services.
 * @injector Advertising
 */
const Advertising = () => {
  if (!IS_PRODUCTION) {
    console.log(`Advertising scripts WERE NOT installed due to NEXT_PUBLIC_ENV == "${process.env.NEXT_PUBLIC_ENV}"`);
    return null; // Don't render advertising scripts on development and test environments
  }

  return (
    <Suspense>
      <GoogleAdsense />
    </Suspense>
  );
};

export default Advertising;

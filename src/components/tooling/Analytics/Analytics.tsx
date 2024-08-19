import { Suspense } from 'react';
import { IS_PRODUCTION } from '@/config';
import GoogleAnalytics from './GoogleAnalytics';
import AmplitudeAnalytics from './AmplitudeAnalytics';

/**
 * Add supporting scripts for Google Tag Manager, Google Analytics, Amplitude and other analytics services.
 * @injector Analytics
 */
const Analytics = () => {
  if (!IS_PRODUCTION) {
    console.log(`Analytics scripts WERE NOT installed due to NEXT_PUBLIC_ENV == "${process.env.NEXT_PUBLIC_ENV}"`);
    return null; // Don't render analytics scripts on development and test environments
  }

  return (
    <>
      <GoogleAnalytics />
      <Suspense>
        <AmplitudeAnalytics />
      </Suspense>
    </>
  );
};

export default Analytics;

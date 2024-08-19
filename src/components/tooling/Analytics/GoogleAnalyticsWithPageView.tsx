'use client';
import { Suspense, useLayoutEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gaPageView } from '@/lib/ga';
import GoogleAnalytics from './GoogleAnalytics';

/**
 * Adds supporting scripts for Google Analytics, also tracks each page view.
 * @injector GoogleAnalyticsWithPageView
 */
const GoogleAnalyticsWithPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    if (pathname) {
      gaPageView(pathname); // Track each page view with Google Analytics
    }
  }, [
    pathname,
    searchParams, // Also track all search params changes even when the page remain the same
  ]);

  return (
    <Suspense>
      {/* Note: Suspense is needed due to direct rendering of default exported <GoogleAnalytics/> in Layout(s) */}
      <GoogleAnalytics />
    </Suspense>
  );
};

export default GoogleAnalyticsWithPageView;

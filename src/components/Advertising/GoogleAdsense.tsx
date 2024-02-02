// import Script from 'next/script';
// import { SCRIPT_STRATEGY } from '@/layout/config';

const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

/**
 * Adds Google Adsense script and configuration
 * @injector GoogleAdsense
 */
const GoogleAdsense = () => {
  return (
    <script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
    />
  );

  // Using of <Script/> shows the following error: AdSense head tag doesn't support data-nscript attribute.
  // return (
  //   <Script
  //     async
  //     crossOrigin="anonymous"
  //     strategy={SCRIPT_STRATEGY}
  //     src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
  //   />
  // );
};

export default GoogleAdsense;

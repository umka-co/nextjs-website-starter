import { GA_ID } from '@/lib/ga';

/**
 * Adds supporting scripts for Google Analytics, also tracks each page view.
 * @injector GoogleAnalytics
 */
const GoogleAnalytics = () => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;

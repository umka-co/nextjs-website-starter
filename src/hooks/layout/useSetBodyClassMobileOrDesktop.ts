'use client';
import { useEffect } from 'react';
import useIsMobileByMediaQuery from './useIsMobileByMediaQuery';

/**
 * Hook to apply "isMobile" vs. "isDesktop" class to document.body depending on screen size.
 * Due to SSR/SSG we can not set 'app-layout isMobile' or 'app-layout isDesktop' on the server
 * If we modify className using JS, we will got Warning:
 *   Prop `className` did not match. Server: "app-layout" Client: "app-layout isDesktop"
 * So we have to apply document.body.class using the hook :)
 * Note: Use this hook one time only! In main App or Layout component
 */
function useSetBodyClassMobileOrDesktop() {
  const isMobile = useIsMobileByMediaQuery();

  useEffect(() => {
    if (isMobile) {
      document.body.classList.remove('isDesktop');
      document.body.classList.add('isMobile');
    } else {
      document.body.classList.remove('isMobile');
      document.body.classList.add('isDesktop');
    }
  }, [isMobile]);
}

export default useSetBodyClassMobileOrDesktop;

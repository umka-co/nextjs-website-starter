'use client';
import { useEffect } from 'react';
import useOnMobileByMediaQuery from './useOnMobileByMediaQuery';

/**
 * Hook to apply "onMobile" vs. "onDesktop" class to document.body depending on screen size.
 * Due to SSR/SSG we can not set 'app-layout onMobile' or 'app-layout onDesktop' on the server
 * If we modify className using JS, we will got Warning: Prop `className` did not match. Server: "app-layout" Client: "app-layout onDesktop"
 * So we have to apply document.body.class using the hook :)
 * Note: Use this hook one time only! In main App or Layout component
 */
function useSetBodyClassMobileOrDesktop() {
  const onMobile = useOnMobileByMediaQuery();

  useEffect(() => {
    if (onMobile) {
      document.body.classList.remove('onDesktop');
      document.body.classList.add('onMobile');
    } else {
      document.body.classList.remove('onMobile');
      document.body.classList.add('onDesktop');
    }
  }, [onMobile]);
}

export default useSetBodyClassMobileOrDesktop;

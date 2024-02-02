'use client';
import { useEffect, useState } from 'react';
import { MOBILE_SCREEN_MAX_WIDTH, SERVER_SIDE_MOBILE_FIRST } from '@/layout/config';
import useOnMobileByMediaQuery from './useOnMobileByMediaQuery';

/**
 * Hook to detect onMobile vs. onDesktop with Next.js workaround
 * @param {number} [maxWidth] - max width for mobile screen, default is MOBILE_SCREEN_MAX_WIDTH
 * @returns {boolean} true when on onMobile, false when on onDesktop
 */
function useOnMobileForNextJs(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
  const onMobile = useOnMobileByMediaQuery(maxWidth);
  const [onMobileDelayed, setOnMobileDelayed] = useState(SERVER_SIDE_MOBILE_FIRST);

  useEffect(() => {
    setOnMobileDelayed(onMobile); // Next.js don't allow to use useOnMobileXxx() directly, so we need to use this workaround
  }, [onMobile]);

  return onMobileDelayed;
}

export default useOnMobileForNextJs;

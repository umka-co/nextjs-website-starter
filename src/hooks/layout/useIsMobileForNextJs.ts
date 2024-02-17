'use client';
import { useEffect, useState } from 'react';
import { MOBILE_SCREEN_MAX_WIDTH, SERVER_SIDE_MOBILE_FIRST } from '@/style';
import useIsMobileByMediaQuery from './useIsMobileByMediaQuery';

/**
 * Hook to detect isMobile vs. isDesktop with Next.js workaround
 * @param {number} [maxWidth] - max width for mobile screen, default is MOBILE_SCREEN_MAX_WIDTH
 * @returns {boolean} true when the screen size is matching isMobile criteria
 */
function useIsMobileForNextJs(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
  const isMobile = useIsMobileByMediaQuery(maxWidth);
  const [isMobileDelayed, setIsMobileDelayed] = useState(SERVER_SIDE_MOBILE_FIRST);

  useEffect(() => {
    setIsMobileDelayed(isMobile); // Next.js don't allow to use useIsMobileXxx() directly, so we need to use this workaround
  }, [isMobile]);

  return isMobileDelayed;
}

export default useIsMobileForNextJs;

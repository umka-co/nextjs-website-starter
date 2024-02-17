import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_MAX_WIDTH } from '@/style';

/**
 * Hook to detect isMobile vs. isDesktop using Media Query
 * @param {number} [maxWidth] - max width for mobile screen, default is MOBILE_SCREEN_MAX_WIDTH
 * @returns {boolean} true when the screen size is matching isMobile criteria
 */
function useIsMobileByMediaQuery(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
  const isMobile = useMediaQuery({ maxWidth });
  return isMobile;
}

export default useIsMobileByMediaQuery;

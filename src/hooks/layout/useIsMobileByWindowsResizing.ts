import { MOBILE_SCREEN_MAX_WIDTH } from '@/style';
import useWindowsSize from './useWindowSize';

/**
 * Hook to detect isMobile vs. isDesktop using "resize" event listener
 * @param {number} [maxWidth] - max width for mobile screen, default is MOBILE_SCREEN_MAX_WIDTH
 * @returns {boolean} true when the screen size is matching isMobile criteria
 */
function useIsMobileByWindowsResizing(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
  const { width } = useWindowsSize();
  const isMobile = width <= maxWidth;
  return isMobile;
}

export default useIsMobileByWindowsResizing;

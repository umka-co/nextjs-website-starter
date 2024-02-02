import { MOBILE_SCREEN_MAX_WIDTH } from '@/layout/config';
import useWindowsSize from './useWindowSize';

/**
 * Hook to detect onMobile vs. onDesktop using "resize" event listener
 * @param {number} [maxWidth] - max width for mobile screen, default is MOBILE_SCREEN_MAX_WIDTH
 * @returns {boolean} true when on onMobile, false when on onDesktop
 */
function useOnMobileByWindowsResizing(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
  const { width } = useWindowsSize();
  const onMobile = width <= maxWidth;
  return onMobile;
}

export default useOnMobileByWindowsResizing;

import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_MAX_WIDTH } from '@/layout/config';

/**
 * Hook to detect onMobile vs. onDesktop using Media Query
 * @param {number} [maxWidth] - max width for mobile screen, default is MOBILE_SCREEN_MAX_WIDTH
 * @returns {boolean} true when on onMobile, false when on onDesktop
 */
function useOnMobileByMediaQuery(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
  const onMobile = useMediaQuery({ maxWidth });
  return onMobile;
}

export default useOnMobileByMediaQuery;

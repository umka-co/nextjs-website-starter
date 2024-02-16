import { IS_SERVER } from '@/utils/environment';
import { SERVER_SIDE_MOBILE_FIRST } from '@/style';
import useIsMobileForNextJs from './useIsMobileForNextJs';
import useSetBodyClassMobileOrDesktop from './useSetBodyClassMobileOrDesktop';

/**
 * We need "smart export wrappers", because we can not use hooks on the server side
 */
export const useIsMobile = IS_SERVER ? () => SERVER_SIDE_MOBILE_FIRST : useIsMobileForNextJs;
export const useModifyBodyClassMobileOrDesktop = IS_SERVER ? () => undefined : useSetBodyClassMobileOrDesktop;

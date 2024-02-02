import { IS_SERVER } from '@/utils/environment';
import { SERVER_SIDE_MOBILE_FIRST } from '@/layout/config';
import useOnMobileForNextJs from './useOnMobileForNextJs';
import useSetBodyClassMobileOrDesktop from './useSetBodyClassMobileOrDesktop';

/**
 * We need "smart export wrappers", because we can not use hooks on the server side
 */
export const useOnMobile = IS_SERVER ? () => SERVER_SIDE_MOBILE_FIRST : useOnMobileForNextJs;
export const useModifyBodyClassOnMobile = IS_SERVER ? () => undefined : useSetBodyClassMobileOrDesktop;

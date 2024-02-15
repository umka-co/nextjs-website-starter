'use client';
import { useModifyBodyClassMobileOrDesktop } from '@/hooks/layout';

/**
 * Injects a hook to change the body class depending on screen size: isMobile vs. isDesktop
 * @injector MobileOrDesktop
 */
const MobileOrDesktop = () => {
  useModifyBodyClassMobileOrDesktop();
  return null; // No need to render anything
};

export default MobileOrDesktop;

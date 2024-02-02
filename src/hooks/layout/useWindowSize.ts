'use client';
import { useLayoutEffect, useState } from 'react';
import { SERVER_SIDE_MOBILE_FIRST } from '@/layout/config';
import { IS_SERVER } from '@/utils/environment';

type WindowSize = {
  width: number;
  height: number;
};

const MOBILE_WINDOW_SIZE = { width: 720, height: 1280 };
const DESKTOP_WINDOW_SIZE = { width: 1920, height: 1080 };
const DEFAULT_WINDOW_SIZE: WindowSize = SERVER_SIDE_MOBILE_FIRST ? MOBILE_WINDOW_SIZE : DESKTOP_WINDOW_SIZE;

/**
 * Hook to monitor Window (actually Browser) Size using "resize" event listener
 * @returns {WindowSize} current window size as {width, height} object
 */
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>(DEFAULT_WINDOW_SIZE);

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Get initial/current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * The hook will really work in Browser only, so or Server Side Rendering (SSR) we just return DEFAULT_WINDOWS_SIZE
 */
export default IS_SERVER ? () => DEFAULT_WINDOW_SIZE : useWindowSize;

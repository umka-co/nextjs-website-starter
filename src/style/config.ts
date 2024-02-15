// Style config

export const MOBILE_SCREEN_MAX_WIDTH = 800; // 640
export const SERVER_SIDE_MOBILE_FIRST = true; // true - for mobile, false - for desktop

/**
 * Theme colors for the website, applied in CSS as `var(--color-nameOfColorObjectProperty)`
 */
export const COLORS = {
  // TODO: Put your theme color here
  text: '#222222', // rgb(34, 34, 34)
  background: '#FFFFFF',
  headerAndFooter: '#fff5ed', // rgb(255, 245, 237)
  primary: '#BF2A1D', // rgb(191, 42, 29)
  secondary: '#404040', // rgb(64, 64, 64)
  success: '#00FF00',
  warning: '#FFFF00',
  error: '#FF0000',
};

export * from './fonts'; // NOTE: Manage fonts outside this file

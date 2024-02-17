import { APP_NAME } from '@/config';
import { PictureProps } from '@/utils';

export const PICTURE_MULTIPLIER_MOBILE = 0.75; // Set 1.0 if you want to use the same size for mobile and desktop
export const PICTURE_MULTIPLIER_DESKTOP = 1; // Set 1.5 if you want bigger pictures for desktop

const DEFAULT_PICTURE: PictureProps = {
  src: '/img/social/umka-1200-630.png', // TODO: Replace with your own image
  width: 1200,
  height: 630,
};

export const PICTURES = {
  // TODO: add more pictures here
  default: DEFAULT_PICTURE, // Default picture is a must
  first: {
    ...DEFAULT_PICTURE,
    alt: `TODO: Picture 1 of ${APP_NAME}`,
  },
  second: {
    src: '/img/social/screenshot-400x600.png', // TODO: Replace with your own image
    width: 400,
    height: 600,
  },
  third: {
    src: '/_TODO_PICTURE_THIRD_.png',
    width: 600,
    height: 400,
    alt: `TODO: Picture 3 of ${APP_NAME}`,
    title: `TODO: Picture 3 of ${APP_NAME}`,
  },
};

import { APP_NAME } from '@/config';
import { PictureProps } from '@/utils';

const DEFAULT_PICTURE: PictureProps = {
  src: '/_TODO_PICTURE_FIRST_.png',
  width: 400,
  height: 300,
};

export const PICTURES = {
  // TODO: add more pictures here
  default: DEFAULT_PICTURE, // Default picture is a must
  first: {
    ...DEFAULT_PICTURE,
    alt: `TODO: Picture1 of ${APP_NAME}`,
  },
  second: {
    src: '/_TODO_PICTURE_SECOND_.png', // Note: Only this prop is required
  },
  windowsTrayMuted: {
    src: '/_TODO_PICTURE_THIRD_.png',
    width: 600,
    height: 400,
    alt: `TODO: Picture1 of ${APP_NAME}`,
    title: `TODO: Picture1 of ${APP_NAME}`,
  },
};

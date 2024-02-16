import type { Metadata } from 'next';
import { APP_NAME, PUBLIC_URL } from '@/config';

export const OPEN_GRAPH_DEFAULT: Metadata['openGraph'] = {
  url: PUBLIC_URL,

  // TODO: Put your texts here
  siteName: `${APP_NAME} Website`,
  title: APP_NAME,
  description: `TODO: OpenGraph description for ${APP_NAME}, put nice Promo here`,

  // TODO: Replace with your own images and dimensions
  images: [
    {
      url: `${PUBLIC_URL}/img/social/umka-1200-630.png`,
      width: 1200,
      height: 630,
    },
    {
      url: `${PUBLIC_URL}/img/social/icon-256x256.png`,
      width: 256,
      height: 256,
    },
    {
      url: `${PUBLIC_URL}/img/social/screenshot-400x600.png`,
      width: 400,
      height: 600,
    },
  ],
};

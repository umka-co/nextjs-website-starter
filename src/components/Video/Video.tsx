'use client';
import { FunctionComponent } from 'react';
import { useOnMobile } from '@/hooks';

const VIDEOS = {
  // TODO: put all known videos here, as YouTube embed URL or other iframe source.
  default: 'https://www.youtube.com/embed/xxx?si=xxx',
  demo: 'https://www.youtube.com/embed/yyy?si=yyy',
};

const SIZES = {
  '4x3': {
    multiplier: 4 / 3,
    divider: 3 / 4,
  },
  '16x9': {
    multiplier: 16 / 9,
    divider: 9 / 16,
  },
};

interface Props {
  video?: keyof typeof VIDEOS;
  size?: keyof typeof SIZES;
}

/**
 * Renders iframe with Video by given variant
 * Size of iframe depends on screen size
 * @component Video
 * @param {string} [size] - size/proportion of the video to render, default is '16x9'
 * @param {string} [video] - variant of the video to render, default is 'default'
 */
const Video: FunctionComponent<Props> = ({ size = '16x9', video = 'default' }) => {
  const onMobile = useOnMobile();
  const onNarrowScreen = useOnMobile(1024);

  const src = VIDEOS[video];
  const width = onMobile ? 320 : onNarrowScreen ? 560 : 720;
  const height = width * SIZES[size].divider;

  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
      frameBorder={0}
      height={height}
      loading="lazy"
      src={src}
      title="Video player"
      width={width}
    />
  );
};

export default Video;

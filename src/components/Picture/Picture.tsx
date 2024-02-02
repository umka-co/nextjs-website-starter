'use client';
import { FunctionComponent } from 'react';
import Image, { ImageProps } from 'next/image';
import { APP_NAME } from '@/config';
import { useOnMobile } from '@/hooks';
import Link from '../Link';

export const PICTURES = {
  // TODO: put all known pictures/images/screenshot here, as relative path or URL
  default: '/_PICTURE_DEFAULT_.png',
  second: '/_PICTURE_SECOND_.png',
  third: '/_PICTURE_THIRD_.png',
};

interface Props extends Partial<ImageProps> {
  href?: string;
  variant?: keyof typeof PICTURES;
}

/**
 * Renders single Picture by given variant
 * The size of rendered image depends on screen size
 * @component Picture
 * @param {string} [alt] - alt text for the image
 * @param {string} [href] - when set, the image will be wrapped in a link to this URL
 * @param {string} [src] - path or URL of the image
 * @param {string} [title] - title for the image
 * @param {string} [variant] - variant of the image to render, default is 'default'
 */
const Picture: FunctionComponent<Props> = ({ alt, href, src, title, variant = 'default', ...restOfProps }) => {
  const onMobile = useOnMobile();
  const altToRender = alt ?? `${APP_NAME} Image`;
  const srcToRender = src ?? PICTURES[variant];
  const titleToRender = title ?? `Picture of ${APP_NAME}`;

  // TODO: set own dimensions
  const width = onMobile ? 320 : 400;
  const height = onMobile ? 480 : 600;

  const imageToRender = (
    <Image alt={altToRender} height={height} src={srcToRender} title={titleToRender} width={width} {...restOfProps} />
  );

  if (href) {
    return <Link href={href}>{imageToRender}</Link>;
  }

  return imageToRender;
};

export default Picture;

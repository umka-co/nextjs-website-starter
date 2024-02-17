'use client';
import { FunctionComponent } from 'react';
import Image, { ImageProps } from 'next/image';
import { useIsMobile } from '@/hooks';
import { PictureProps } from '@/utils';
import Link from '../Link';
import { PICTURES, PICTURE_MULTIPLIER_DESKTOP, PICTURE_MULTIPLIER_MOBILE } from './config';

interface Props extends Partial<ImageProps> {
  href?: string;
  variant?: keyof typeof PICTURES;
}

/**
 * Renders single Picture by given variant
 * The size of rendered image is multiplied depending on the device type
 * @component Picture
 * @param {string} [alt] - alt text for the image
 * @param {string} [href] - when set, the image will be wrapped in a link to this URL
 * @param {string} [src] - path or URL of the image
 * @param {string} [title] - title for the image
 * @param {string} [variant] - variant of the image to render, default is 'default'
 */
const Picture: FunctionComponent<Props> = ({ alt, href, src, title, variant = 'default', ...restOfProps }) => {
  const isMobile = useIsMobile();
  const sizeMultiplier = isMobile ? PICTURE_MULTIPLIER_MOBILE : PICTURE_MULTIPLIER_DESKTOP;

  const picture: PictureProps = PICTURES[variant] ?? PICTURES.default;
  const altToRender: string = alt ?? String(picture.alt);
  const srcToRender = src ?? picture.src;
  const titleToRender = title ?? picture.title;
  const propsToRender: Props = {
    width: Number(picture.width) * sizeMultiplier,
    height: Number(picture.height) * sizeMultiplier,
    ...restOfProps, // Override with incoming props
  };

  const imageToRender = <Image alt={altToRender} src={srcToRender} title={titleToRender} {...propsToRender} />;

  if (href) {
    return <Link href={href}>{imageToRender}</Link>;
  }

  return imageToRender;
};

export default Picture;

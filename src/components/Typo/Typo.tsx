// 'use client';
import { FunctionComponent, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react';
import { useOnMobile } from '@/hooks/layout';
import { FONTS } from '@/style/config';
import HtmlTag from '../HtmlTag';
import styles from './Typo.module.css';

type TypoColor = 'dark' | 'light' | 'primary' | 'secondary' | string;
type TypoVariant = 'text' | 'paragraph' | 'header1' | 'header2' | 'header3' | 'list';
type TypoAlign = 'center' | 'left' | 'right' | 'justify';

function getTagByVariant(variant: TypoVariant): keyof JSX.IntrinsicElements {
  // TODO: Synch with Figma
  switch (variant) {
    case 'header1':
      return 'h1';
    case 'header2':
      return 'h2';
    case 'header3':
      return 'h3';
    case 'paragraph':
      return 'p';
    case 'list':
      return 'ul';
    default:
      return 'span'; // 'text' variant and any other unknown variants
  }
}

function getFontByVariant(variant: TypoVariant): string {
  // TODO: If we will use single font, we can remove this function
  switch (variant) {
    case 'header1':
    case 'header2':
    case 'header3':
      return FONTS.poppins.className;
    default:
      return FONTS.inter.className;
  }
}

export interface TypoProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  align?: TypoAlign;
  bold?: boolean;
  capitalize?: boolean;
  className?: string;
  children: ReactNode;
  color?: TypoColor;
  tag?: keyof JSX.IntrinsicElements;
  variant?: TypoVariant;
  underline?: boolean;
  uppercase?: boolean;
}

/**
 * Renders text content with given variant
 * @component Typo
 * @param {TypoAlign} [align] - way to align text, defaults to 'left'
 * @param {boolean} [bold] - whether to render bold text or not
 * @param {boolean} [capitalize] - whether to render capitalize text or not
 * @param {TypoColor} [color] - color to render, defaults to 'dark'
 * @param {string} [tag] - HTML tag to render, defaults to 'span'
 * @param {string} [variant] - variant to render, defaults to 'text'
 * @param {boolean} [underline] - whether to render underline text or not
 * @param {boolean} [uppercase] - whether to render uppercase text or not
 */
const Typo: FunctionComponent<TypoProps> = ({
  align = 'left',
  bold,
  capitalize,
  children,
  className,
  color = 'dark',
  style,
  variant = 'text',
  tag = getTagByVariant(variant), // Must be defined after .variant property!!!
  underline,
  uppercase,
  ...restOfProps
}) => {
  const onMobile = useOnMobile();

  const classToRender = useMemo((): string | undefined => {
    const resultAsArray = [
      onMobile ? styles.mobile : styles.desktop,
      getFontByVariant(variant),
      styles[variant],
      styles[color],
      align && styles[align],
      bold && styles.bold,
      capitalize && styles.capitalize,
      underline && styles.underline,
      uppercase && styles.uppercase,
      className,
    ];
    const resultAsString: string = resultAsArray.filter(Boolean).join(' ');
    return Boolean(resultAsString) ? resultAsString : undefined;
  }, [align, bold, color, capitalize, className, onMobile, variant, underline, uppercase]);

  const styleToRender = useMemo(
    () => ({
      ...(!styles?.[color] && { color }), // if exact color is not defined in stylesShared, pass the color as style
      ...style,
    }),
    [color, style]
  );

  return (
    <HtmlTag className={classToRender} style={styleToRender} tag={tag} {...restOfProps}>
      {children}
    </HtmlTag>
  );
};

export default Typo;

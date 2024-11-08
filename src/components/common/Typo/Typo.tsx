'use client';
import { FunctionComponent, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react';
import { useIsMobile } from '@/hooks/layout';
import HtmlTag from '../HtmlTag';
import { TypoAlign, TypoColor, TypoVariant } from './types';
import { getFontByVariant, getTagByVariant } from './utlils';
import styles from './Typo.module.css';

export interface TypoProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  align?: TypoAlign;
  bold?: boolean;
  capitalize?: boolean;
  className?: string;
  children: ReactNode;
  color?: TypoColor;
  htmlTag?: keyof JSX.IntrinsicElements;
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
  htmlTag = getTagByVariant(variant), // Must be defined after .variant property!!!
  underline,
  uppercase,
  ...restOfProps
}) => {
  const isMobile = useIsMobile();

  const classToRender = useMemo((): string | undefined => {
    const resultAsArray = [
      isMobile ? styles.mobile : styles.desktop,
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
  }, [align, bold, color, capitalize, className, isMobile, variant, underline, uppercase]);

  const styleToRender = useMemo(
    () => ({
      ...(!styles?.[color] && { color }), // if exact color is not defined in stylesShared, pass the color as style
      ...style,
    }),
    [color, style]
  );

  return (
    <HtmlTag className={classToRender} style={styleToRender} tag={htmlTag} {...restOfProps}>
      {children}
    </HtmlTag>
  );
};

export default Typo;

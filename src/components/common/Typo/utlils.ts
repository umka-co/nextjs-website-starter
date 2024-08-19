import { FONTS } from '../../../style';
import { TypoVariant } from './types';

/**
 * Returns the HTML Tag for given Variant of Typography
 * @param {TypoVariant} variant - Typo variant
 * @returns {string} HTML tag as string
 */
export function getTagByVariant(variant: TypoVariant): keyof JSX.IntrinsicElements {
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

/**
 * Returns the font's CSS Class for given Variant of Typography
 * @param {TypoVariant} variant - Typo variant
 * @returns {string} Font class as string
 */
export function getFontByVariant(variant: TypoVariant): string {
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

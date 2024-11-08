/**
 * Custom fonts management, without NextJS magic
 * Note: Better use standard NextJS font management with next/font package
 */
import './non-next-fonts.css'; // Important! In this file, we define families and classes for fonts

type Font = {
  family: string;
  className: string;
  variable: string;
};

const fontRoboto: Font = {
  family: 'Roboto',
  className: 'font-roboto',
  variable: '--font-roboto',
};

const fontOpenSans: Font = {
  family: 'Open Sans',
  className: 'font-open-sans',
  variable: '--font-open-sans',
};

const FONT_DEFAULT = fontRoboto;

export const FONTS = {
  default: FONT_DEFAULT, // The default font is used for <body/>, so it should be set here
  roboto: fontRoboto,
  openSans: fontOpenSans,
};

export default FONTS;

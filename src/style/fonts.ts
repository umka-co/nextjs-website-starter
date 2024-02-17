import { Inter, Poppins } from 'next/font/google';

// Font 1
const fontPoppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins', // This set a CSS variable for the font, so we don't need to set it manually in the Main layout
  display: 'swap',
});

// Font 2
const fontInter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter', // This set a CSS variable for the font, so we don't need to set it manually in the Main layout
  display: 'swap',
});

export const FONTS = {
  default: fontPoppins, // The default font is used for <body/>, so it should be set here
  poppins: fontPoppins,
  inter: fontInter,
};

export default FONTS;

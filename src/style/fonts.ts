import { Inter, Poppins } from 'next/font/google';

// Font 1
const fontPoppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Font 2
const fontInter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const FONTS = {
  default: fontPoppins,

  // Headers and titles
  poppins: fontPoppins,
  // header: fontPoppins,
  // title: fontPoppins,
  // button: fontPoppins,

  // Text and body
  inter: fontInter,
  // body: fontInter,
  // text: fontInter,
};

export default FONTS;

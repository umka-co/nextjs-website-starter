import { Inter, Poppins } from 'next/font/google';

// Typography from: https://www.figma.com/file/ab4AHDtL6zrf6VsIAejzbm/SaaS-%26-App-Website-I-Saasto-(Community)?node-id=1707%3A7833&mode=dev
const fontPoppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// const fontNunitoSans = Nunito_Sans({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   variable: '--font-nunito-sans',
//   display: 'swap',
// });

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

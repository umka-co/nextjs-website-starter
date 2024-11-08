import { FunctionComponent, PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { APP_NAME, PUBLIC_URL } from '@/config';
import { OPEN_GRAPH_DEFAULT } from '@/app/config';
import { FONTS } from '@/style';
import Analytics from '@/components/tooling/Analytics';
import Advertising from '@/components/tooling/Advertising';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileOrDesktop from '@/components/tooling/MobileOrDesktop';
import StylesInjector from '@/components/tooling/StylesInjector';
import './main.css';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  manifest: '/site.webmanifest',
  openGraph: OPEN_GRAPH_DEFAULT,

  // TODO: put your texts here
  title: APP_NAME, // 'Some Public Website',
  description: 'TODO: Cool description for the website, this is used for SEO, so make it good!',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF', // TODO: put your theme color here
};

/**
 * Layout for `(main)` styled pages, renders head and body tags.
 * Applies colors and font(s) to the global CSS variables.
 * @layout Main
 */
const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <StylesInjector />
        <Analytics />
        <Advertising />
      </head>

      <body className={FONTS.default.className}>
        <Header />
        <div className="content">{children}</div>
        <Footer />

        <MobileOrDesktop
        // TODO: Remove this injector if you don't use .isMobile and .isDesktop classes in your CSS styles
        />
      </body>
    </>
  );
};

export default MainLayout;

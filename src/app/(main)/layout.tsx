import { APP_NAME, PUBLIC_URL } from '@/config';
import { FunctionComponent, PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { OPEN_GRAPH_DEFAULT } from '@/app/config';
import { FONTS } from '@/layout/fonts';
import { Advertising, Analytics, Footer, Header, MobileOrDesktop } from '@/layout/components';
import './main.css';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  manifest: '/site.webmanifest',
  openGraph: OPEN_GRAPH_DEFAULT,

  // TODO: put your texts here
  title: APP_NAME, // 'Some Public Website',
  description: 'Cool description for the website, this is used for SEO, so make it good!',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF', // TODO: put your theme color here
};

/**
 * Layout for `(main)` styled pages, renders head and body tags
 * @layout Main
 */
const StyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <Analytics />
        <Advertising />
      </head>

      <body className={FONTS.default.className}>
        <Header />
        <div className="content">{children}</div>
        <Footer />

        <MobileOrDesktop
        // Remove this injector if you don't use selectors .onMobile and .onDesktop in CSS styles
        />
      </body>
    </>
  );
};

export default StyledLayout;

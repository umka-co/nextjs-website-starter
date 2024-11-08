import { FunctionComponent, PropsWithChildren } from 'react';
import Analytics from '@/components/tooling/Analytics';
import './unstyled.css';
import StylesInjector from '../../components/tooling/StylesInjector';

/**
 * Layout for (unstyled) pages, renders head and body tags
 * @layout Unstyled
 */
const UnstyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <StylesInjector />
        <Analytics />
      </head>
      <body>
        <div className="content">{children}</div>
      </body>
    </>
  );
};

export default UnstyledLayout;

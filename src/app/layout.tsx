import { FunctionComponent, PropsWithChildren } from 'react';
import './default.css';

/**
 * Root layout, renders only the <html> tag!
 * @layout Root
 */
const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <html lang="en">{children}</html>;
};

export default RootLayout;

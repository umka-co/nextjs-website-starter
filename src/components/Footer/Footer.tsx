'use client';
import { useMemo } from 'react';
import { APP_NAME } from '@/config';
import { useIsMobile } from '@/hooks';
import Link from '../Link';
import Logo from '../Logo';
import SocialMedia from '../SocialMedia';
import styles from './Footer.module.css';

/**
 * Renders "Footer" composition.
 * @component Footer
 */
const Footer = () => {
  const isSmallScreen = useIsMobile(320);
  const isMobile = useIsMobile();
  const isNarrowScreen = useIsMobile(1024);
  const logoTextHidden = isSmallScreen || (!isMobile && isNarrowScreen);

  const className = useMemo(
    () => [styles.footer, isMobile ? styles.mobile : styles.desktop].filter(Boolean).join(' '),
    [isMobile]
  );

  const copyrightHolder = useMemo(() => <Link href="https://TODO-domain-name.com">TODO: Add company name</Link>, []);

  return (
    <footer className={className} id="footer">
      <div className={styles.logo}>
        <Logo href="/" noText={logoTextHidden} size="small" />
        {isMobile && (
          // Mobile version of the footer, no copyright
          <span className={styles.text}>
            {APP_NAME}
            <br />
            by {copyrightHolder}
          </span>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/download/">Download</Link>
          <Link href="/contact/">Contacts</Link>
        </div>
        <div className={styles.menu}>
          <Link href="/legal/privacy-policy/">Privacy Policy</Link>
          <Link href="/legal/terms-conditions/">Terms of Use</Link>
          <Link href="/sitemap/">Site Map</Link>
        </div>
        {!isMobile && (
          // Desktop version of the footer with copyright
          <div className={styles.copyright}>
            <div>
              Copyright &copy; TODO: 2020-{new Date().getFullYear()} {copyrightHolder}
            </div>
          </div>
        )}
      </div>
      <div className={styles.social}>
        <SocialMedia variant="footer" />
      </div>
    </footer>
  );
};

export default Footer;

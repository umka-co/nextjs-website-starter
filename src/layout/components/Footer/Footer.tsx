'use client';
import { useMemo } from 'react';
import { APP_NAME } from '@/config';
import { useOnMobile } from '@/hooks';
import { Link, Logo, SocialMedia } from '@/components';
import styles from './Footer.module.css';

/**
 * Renders "Footer" composition.
 * @component Footer
 */
const Footer = () => {
  const onSmallScreen = useOnMobile(320);
  const onMobile = useOnMobile();
  const onNarrowScreen = useOnMobile(1024);
  const logoTextHidden = onSmallScreen || (!onMobile && onNarrowScreen);

  const className = useMemo(
    () => [styles.footer, onMobile ? styles.mobile : styles.desktop].filter(Boolean).join(' '),
    [onMobile]
  );

  return (
    <footer className={className} id="footer">
      <div className={styles.logo}>
        <Logo href="/" noText={logoTextHidden} size="small" />
        {onMobile && (
          // Mobile version of the footer, no copyright
          <span className={styles.text}>
            {APP_NAME}
            <br />
            by <Link href="https://domain-name.com">TODO: Add company name</Link>
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
        {!onMobile && (
          // Desktop version of the footer with copyright
          <div className={styles.copyright}>
            <div>
              Copyright &copy; 2020-{new Date().getFullYear()}{' '}
              <Link href="https://domain-name.com">TODO: Add company name</Link>
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

'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useIsMobile } from '@/hooks';
import { IS_BROWSER } from '@/utils';
import Button from '../../common/Button';
import Logo from '../../Logo';
import TopMenuContent from './TopMenuContent';
import styles from './Header.module.css';

// TODO: Animation of header is cool, but brakes the Web Vitals rules. So enable it on the own risk.
const RESIZE_HEADER_ON_SCROLL_AND_LOADING = true; // When "true" the header will be resized on scroll and loading

// Note: Sync values with "Header.module.css"
const HEIGHT_BIG = 192;
const HEIGHT_SMALL = 96;

/**
 * Renders the "Header" composition with Logo and Menu
 * @component Header
 */
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [small, setSmall] = useState(
    !RESIZE_HEADER_ON_SCROLL_AND_LOADING ||
      (global?.window && window?.scrollY) || // Scrolling is already in progress
      (global?.document && document?.documentElement?.scrollTop) > HEIGHT_BIG // Content is scrolled down for more than "HEIGHT_BIG"
  );

  console.log('Header: small', small);
  const isMobile = useIsMobile();
  const isNarrowScreen = useIsMobile(1024);

  const toggleMenu = useCallback(() => {
    setOpenMenu((oldValue) => !oldValue);
  }, []);

  const doCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollDistance = window?.scrollY || document?.documentElement?.scrollTop;
      // Variant 1
      // if (scrollDistance > HEIGHT_BIG) {
      //   RESIZE_HEADER_ON_SCROLL && setSmall(true);
      // }
      // // if (scrollDistance < HEIGHT_SMALL) {
      //   RESIZE_HEADER_ON_SCROLL && setSmall(false);
      // }

      // Variant 2
      if (scrollDistance > HEIGHT_SMALL) {
        if (RESIZE_HEADER_ON_SCROLL_AND_LOADING) {
          setSmall(true);
        }
      }
      if (scrollDistance <= 0) {
        if (RESIZE_HEADER_ON_SCROLL_AND_LOADING) {
          setSmall(false);
        }
      }
    };
    if (RESIZE_HEADER_ON_SCROLL_AND_LOADING && IS_BROWSER) {
      window.addEventListener('scroll', onScroll, true);
    }
    return () => {
      if (RESIZE_HEADER_ON_SCROLL_AND_LOADING && IS_BROWSER) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  const classHeader = useMemo(
    () =>
      [styles.header, isMobile ? styles.mobile : styles.desktop, small ? styles.small : styles.big]
        .filter(Boolean)
        .join(' '),
    [isMobile, small]
  );

  const classMenu = useMemo(
    () =>
      [styles.menu, isMobile ? styles.mobile : styles.desktop, openMenu ? styles.open : styles.close]
        .filter(Boolean)
        .join(' '),
    [isMobile, openMenu]
  );

  const logoSize = isMobile || small ? 'small' : isNarrowScreen ? 'medium' : 'large';
  const menuButtonIcon = openMenu ? 'close' : 'menu';

  return (
    <div className={styles.wrapper}>
      <header className={classHeader} id="header">
        <Logo href="/" size={logoSize} />
        {isMobile ? (
          <>
            <div className={styles.spacer} onClick={toggleMenu} />
            <Button
              className={styles.menuToggleButton}
              icon={menuButtonIcon}
              title="Toggle menu in Header"
              variant="icon"
              onClick={toggleMenu}
            />
          </>
        ) : (
          <nav className={classMenu}>
            <TopMenuContent activeClassName={styles.activeLink} />{' '}
          </nav>
        )}
      </header>
      {isMobile && (
        // Must be rendered outside the <header/> to "slide" under the "sticky" header
        <nav className={classMenu} onClick={doCloseMenu}>
          <TopMenuContent activeClassName={styles.activeLink} />
        </nav>
      )}
    </div>
  );
};

export default Header;

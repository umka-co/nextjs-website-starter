'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@/components';
import { useOnMobile } from '@/hooks';
import { IS_BROWSER } from '@/utils/environment';
import Logo from '../../../components/Logo';
import TopMenuContent from './TopMenuContent';
import styles from './Header.module.css';

const HEIGHT_BIG = 192;
const HEIGHT_SMALL = 96;

/**
 * Renders the "Header" composition with Logo and Menu
 * @component Header
 */
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [small, setSmall] = useState(
    (global?.window && window?.scrollY) || (global?.document && document?.documentElement?.scrollTop) > HEIGHT_BIG
  );
  const onMobile = useOnMobile();
  const onNarrowScreen = useOnMobile(1024);

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
      //   setSmall(true);
      // }
      // // if (scrollDistance < HEIGHT_SMALL) {
      //   setSmall(false);
      // }

      // Variant 2
      if (scrollDistance > HEIGHT_SMALL) {
        setSmall(true);
      }
      if (scrollDistance <= 0) {
        setSmall(false);
      }
    };
    if (IS_BROWSER) {
      window.addEventListener('scroll', onScroll, true);
    }
    return () => {
      if (IS_BROWSER) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  const classHeader = useMemo(
    () =>
      [styles.header, onMobile ? styles.mobile : styles.desktop, small ? styles.small : styles.big]
        .filter(Boolean)
        .join(' '),
    [onMobile, small]
  );

  const classMenu = useMemo(
    () =>
      [styles.menu, onMobile ? styles.mobile : styles.desktop, openMenu ? styles.open : styles.close]
        .filter(Boolean)
        .join(' '),
    [onMobile, openMenu]
  );

  const logoSize = onMobile || small ? 'small' : onNarrowScreen ? 'medium' : 'large';
  const menuButtonIcon = openMenu ? 'close' : 'menu';

  return (
    <div className={styles.wrapper}>
      <header className={classHeader} id="header">
        <Logo href="/" size={logoSize} />
        {onMobile ? (
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
            <TopMenuContent activeClassName={styles.activeLink} />
          </nav>
        )}
      </header>
      {onMobile && (
        // Rendered outside the <header/> to "slide" under the "sticky" header
        <nav className={classMenu} onClick={doCloseMenu}>
          <TopMenuContent activeClassName={styles.activeLink} />
        </nav>
      )}
    </div>
  );
};

export default Header;

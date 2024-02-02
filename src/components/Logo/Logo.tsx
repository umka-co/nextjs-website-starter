import { FunctionComponent, HTMLAttributes, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

type LogoSize = 'small' | 'medium' | 'large';
type LogoVariant = 'default' | 'light' | 'dark';

const VARIANT_TO_SRC: Record<LogoVariant, string> = {
  default: '/img/logo/logo-256.png',
  light: '/img/logo/logo-256.png',
  dark: '/img/logo/logo-256.png',
};

const SIZE_TO_PROPS: Record<LogoSize, object> = {
  small: { width: 64, height: 64 },
  medium: { width: 96, height: 96 },
  large: { width: 128, height: 128 },
};

interface Props extends HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  href?: string;
  noText?: boolean;
  size?: LogoSize;
  variant?: LogoVariant;
}

/**
 * Renders the Logo in desired size, colors and so on
 * @component Logo
 * @param {string} [href] - optional link to navigate to when clicking on the logo.
 * @param {boolean} [noText] - optional flag to hide the text part of the logo.
 * @param {LogoSize} [size] - The size of the logo: 'small' | 'medium' | 'large'. Defaults to 'medium'.
 * @param {LogoVariant} [variant] - The variant of the logo: 'default' | 'light' | 'dark'. Defaults to 'default'.
 */
const Logo: FunctionComponent<Props> = ({ href, noText, size = 'medium', variant = 'default', ...restOfProps }) => {
  const imageToRender = useMemo(() => {
    const propsToRender = SIZE_TO_PROPS[size] ?? SIZE_TO_PROPS.medium ?? {};
    const imageSource = VARIANT_TO_SRC[variant] ?? VARIANT_TO_SRC.default;
    const classImage = [styles.image, styles[size]].filter(Boolean).join(' ');
    return (
      <Image
        alt="Logo"
        className={classImage}
        loading="eager" // Load immediately
        src={imageSource}
        {...propsToRender}
      />
    );
  }, [variant, size]);

  const textToRender = useMemo(
    () =>
      // TODO: Add real text here
      noText ? null : (
        <div className={`${styles.text} ${styles[size]}`}>
          <span className={styles.primary}>Logo</span>
          Type
        </div>
      ),
    [noText, size]
  );

  const contentToRender = useMemo(
    () => (
      <div className={styles.container}>
        {imageToRender}
        {textToRender}
      </div>
    ),
    [imageToRender, textToRender]
  );

  const currentClassName = [styles.logo, styles[size]].filter(Boolean).join(' ');

  if (href) {
    // Render logo as link
    return (
      <Link className={currentClassName} href={href} {...restOfProps}>
        {contentToRender}
      </Link>
    );
  }

  // Render logo as div
  return (
    <div className={currentClassName} {...restOfProps}>
      {contentToRender}
    </div>
  );
};

export default Logo;

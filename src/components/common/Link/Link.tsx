'use client';
import { FunctionComponent, PropsWithChildren, useMemo, KeyboardEvent, useCallback, AnchorHTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export interface LinkProps extends PropsWithChildren<NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> {
  activeClassName?: string;
  className?: string;
  href: string;
}

/**
 * Extends <Link/> component with .activeClassName property, opens external links in new tab.
 * @component Link
 */
const Link: FunctionComponent<LinkProps> = ({
  activeClassName = 'active',
  children,
  className,
  href,
  rel,
  target,
  onKeyDown,
  ...restOfProps
}) => {
  const pathname = usePathname();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>) => {
      if (event.key === 'Spacebar' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click(); // Emulate click by Spacebar
      }
      onKeyDown?.(event);
    },
    [onKeyDown]
  );

  const isActive = useMemo(
    () => pathname === href || `${pathname}/` === href || pathname === `${href}/`,
    [href, pathname]
  );

  const isExternal = useMemo(
    () => href.startsWith('http') || href.startsWith('mailto') || href.startsWith('//'),
    [href]
  );

  const linkClassName = useMemo(
    () => [className, isActive && activeClassName].filter(Boolean).join(' ') || undefined,
    [className, activeClassName, isActive]
  );

  const propsToRender = useMemo(() => {
    const relAsArray = [rel];
    if (isExternal) {
      relAsArray.push('noopener', 'noreferrer');
    }
    const relAsString = relAsArray.filter(Boolean).join(' ');
    return {
      target: target ? target : isExternal ? '_blank' : undefined,
      rel: relAsString ? relAsString : undefined,
    };
  }, [isExternal, rel, target]);

  return (
    <NextLink className={linkClassName} href={href} {...propsToRender} onKeyDown={handleKeyDown} {...restOfProps}>
      {children}
    </NextLink>
  );
};

export default Link;

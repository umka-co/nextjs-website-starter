'use client';
import { FunctionComponent, useEffect } from 'react';
import { COLORS } from '@/style';

/**
 * Adds JavaScript variables form COLORS and other configs into root element style.
 * @injector StylesInjector
 */
const StylesInjector: FunctionComponent = () => {
  useEffect(() => {
    const root = document.documentElement;
    // Note: Fonts are managed by NextJS Font manager, so CSS variables are configured in the FONT object definition.
    // Apply colors
    for (const [name, value] of Object.entries(COLORS)) {
      root.style.setProperty(`--color-${name}`, value);
      console.log(`--color-${name}: ${value}`);
    }
  }, []);

  return null; // This component does not render anything
};

export default StylesInjector;

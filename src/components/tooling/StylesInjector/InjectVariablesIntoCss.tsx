/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';
import { FunctionComponent, useEffect } from 'react';
import { COLORS } from '@/style';
import { IS_DEBUG } from '@/config';

/**
 * Adds JavaScript variables form COLORS and other configs into root element style.
 * @injector InjectVariablesIntoCss
 */
const InjectVariablesIntoCss: FunctionComponent = () => {
  useEffect(() => {
    const root = document.documentElement;
    // Note: Fonts are managed by NextJS Font manager, so CSS variables are configured in the FONT object definition.
    // If you are using custom fonts, uncomment code below and import your custom fonts as .css in non-next-fonts.ts
    /*
    for (const [name, font] of Object.entries(FONTS)) {
      root.style.setProperty(`--font-${name}`, font.family);
      IS_DEBUG &&
        console.log(
          `--font-${name}: family: "${font.family}", class: .${font.className}, variable: var(${font.variable})`
        );
    }
    */

    // Apply colors
    for (const [name, color] of Object.entries(COLORS)) {
      root.style.setProperty(`--color-${name}`, color);
      IS_DEBUG && console.log(`--color-${name}: ${color}, variable: var(--color-${name})`);
    }
  }, []);

  return null; // This component does not render anything
};

export default InjectVariablesIntoCss;

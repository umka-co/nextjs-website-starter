import { FunctionComponent, SVGAttributes } from 'react';
import { ICON_COLOR_NORMAL, ICON_SIZE } from '@/components/config';
import { ICONS } from './icons';

/**
 * How to use:
 * 1. Import all required React, MUI or other SVG icons into ./icons/index.tsx file.
 * 2. Add icons with "unique lowercase names" into shared ICONS object. Lowercase is a must!
 * 3. Use icons everywhere in the App by their names in <Icon icon="xxx" /> component
 * Important: properties of ICONS object MUST be lowercase!
 * Note: You can use camelCase or UPPERCASE in the <Icon icon="someIconByName" /> component
 */

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  icon?: string;
  size?: string | number;
  title?: string;
}

/**
 * Renders SVG icon by given Icon name
 * @component Icon
 * @param {string} [color] - color of the Icon to render, defaults to ICON_COLOR_NORMAL
 * @param {string} [icon] - name of the Icon to render, defaults to "default"
 * @param {string|number} [size] - size of the Icon to render, defaults to ICON_SIZE
 * @param {object} [style] - CSS style to apply to the Icon
 * @param {string} [title] - optional title of the Icon to render
 */
const Icon: FunctionComponent<IconProps> = ({
  color = ICON_COLOR_NORMAL,
  icon = 'default',
  size = ICON_SIZE,
  style,
  ...restOfProps
}) => {
  const iconName = (icon || 'default').trim().toLowerCase();

  let ComponentToRender = ICONS[iconName];
  if (!ComponentToRender) {
    console.warn(`Icon: icon "${iconName}" is not found!`);
    ComponentToRender = ICONS['default'];
  }

  const propsToRender = {
    height: size,
    color,
    fill: color ? 'currentColor' : undefined,
    size,
    style: { ...style, color },
    width: size,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={iconName} {...propsToRender} />;
};

export default Icon;

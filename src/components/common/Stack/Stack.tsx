import { FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from 'react';
import HtmlTag from '../HtmlTag';
import styles from './Stack.module.css';

export interface StackProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  gap?: number | string;
  htmlTag?: keyof JSX.IntrinsicElements;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  margin?: number | string;
  padding?: number | string;
}

/**
 * Flexbox container that stacks its children in a row or column.
 * @param {string} [alignContent] - align-content CSS property
 * @param {string} [alignItems] - align-items CSS property
 * @param {string} [alignSelf] - align-self CSS property
 * @param {string} [direction] - row, column or reversed, defaults to 'column'
 * @param {number | string} [gap] - controls space between children elements
 * @param {string} [htmlTag] - HTML tag to render, defaults to 'div'
 * @param {string} [justifyContent] - justify-content CSS property
 * @param {number | string} [margin] - margin around the container
 * @param {number | string} [padding] - padding inside the container
 */
export const Stack: FunctionComponent<StackProps> = ({
  alignContent,
  alignItems,
  alignSelf,
  children,
  className,
  direction = 'column',
  gap,
  htmlTag = 'div',
  justifyContent,
  margin,
  padding,
  style,
  ...restOfProps
}) => {
  const classToRender = useMemo(
    () => [styles.stack, styles[direction], className].filter(Boolean).join(' '),
    [className, direction]
  );

  const styleToRender = useMemo(() => {
    const gapToRender = typeof gap === 'number' ? `${gap}px` : gap;
    const marginToRender = typeof margin === 'number' ? `${margin}px` : margin;
    const paddingToRender = typeof padding === 'number' ? `${padding}px` : padding;
    return {
      alignContent,
      alignItems,
      alignSelf,
      gap: gapToRender,
      justifyContent,
      margin: marginToRender,
      padding: paddingToRender,
      ...style,
    };
  }, [alignContent, alignItems, alignSelf, gap, justifyContent, margin, padding, style]);

  return (
    <HtmlTag className={classToRender} tag={htmlTag} style={styleToRender} {...restOfProps}>
      {children}
    </HtmlTag>
  );
};

export default Stack;

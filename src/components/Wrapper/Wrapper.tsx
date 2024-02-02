import { FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from 'react';
import HtmlTag from '../HtmlTag';
import styles from './Wrapper.module.css';

export interface WrapperProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  fullWidth?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  width?: number | string;
}

/**
 * Multifunctional "wrapper" component to make content restricted by width
 * @component Wrapper
 * @prop {boolean} [fullWidth] - if true, wrapper will be 100% width
 * @prop {string} [tag] - HTML tag to render
 * @prop {number} [width] - .width style override
 */
const Wrapper: FunctionComponent<WrapperProps> = ({
  className,
  children,
  fullWidth,
  style,
  tag = 'div',
  width,
  ...restOfProps
}) => {
  const classToRender = useMemo(
    () => [styles.wrapper, fullWidth && styles.fullWidth, className].filter(Boolean).join(' '),
    [className, fullWidth]
  );

  const styleToRender = useMemo(() => {
    const widthToRender = typeof width === 'number' ? `${width}px` : width;
    return { ...(width && { maxWidth: widthToRender, width: widthToRender }), ...style };
  }, [width, style]);

  return (
    <HtmlTag tag={tag} className={classToRender} style={styleToRender} {...restOfProps}>
      {children}
    </HtmlTag>
  );
};

export default Wrapper;

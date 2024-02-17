import { FunctionComponent, HTMLAttributes, createElement } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  tag: keyof JSX.IntrinsicElements;
}

/**
 * Renders the HTML tag by given tag name
 * @component HtmlTag
 * @param {string} tag - tag name to render
 */
const HtmlTag: FunctionComponent<Props> = ({ tag, children, ...restOfProps }) =>
  createElement(tag, restOfProps, children);

export default HtmlTag;

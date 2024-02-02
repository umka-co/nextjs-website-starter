import { FunctionComponent, HTMLAttributes, createElement } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  tag: keyof JSX.IntrinsicElements;
}

const HtmlTag: FunctionComponent<Props> = ({ tag, children, ...restOfProps }) =>
  createElement(tag, restOfProps, children);

export default HtmlTag;

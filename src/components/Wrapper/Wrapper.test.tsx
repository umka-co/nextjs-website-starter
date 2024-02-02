import { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import Wrapper, { WrapperProps } from './Wrapper';
import { randomText } from '../../utils/text';

/**
 * Composition of component(s) to test
 */
const ComponentToTest: FunctionComponent<WrapperProps> = (props) => {
  return <Wrapper {...props} />;
};

describe('<Wrapper/> component', () => {
  //   beforeEach(() => {});

  it('renders itself', () => {
    let text = 'sample text';
    render(<ComponentToTest>{text}</ComponentToTest>);
    let div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveTextContent(text);
  });

  it('supports .className property', () => {
    let text = 'div with specific class';
    let className = 'someClassName';
    render(<ComponentToTest className={className}>{text}</ComponentToTest>);
    let div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass(className);
  });

  it('supports .fullWidth property', () => {
    let text, div;

    text = 'property .fullWidth is not set (default)';
    render(<ComponentToTest>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).not.toHaveClass('fullWidth');

    text = 'property .fullWidth is true';
    render(<ComponentToTest fullWidth={true}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass('fullWidth');

    text = 'property .fullWidth is false';
    render(<ComponentToTest fullWidth={false}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).not.toHaveClass('fullWidth');
  });

  it('supports .tag property', () => {
    let text, element, testId;

    text = 'property .tag is not set (default)';
    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>{text}</ComponentToTest>);
    element = screen.getByTestId(testId);
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe('div');

    const tagsToVerify: WrapperProps['tag'][] = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    for (const tag of tagsToVerify) {
      text = `property .tag is ${tag}`;
      testId = randomText(8);
      render(
        <ComponentToTest data-testid={testId} tag={tag}>
          {text}
        </ComponentToTest>
      );
      element = screen.getByTestId(testId);
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe(tag);
    }
  });

  it('supports .width property', () => {
    let text, div;

    text = 'property .with is not set (default)';
    render(<ComponentToTest>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).not.toHaveStyle({ width: expect.anything(), maxWidth: expect.anything() });

    text = 'Property .width is number';
    const withAsNumber = 123;
    render(<ComponentToTest width={withAsNumber}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle({ width: `${withAsNumber}px`, maxWidth: `${withAsNumber}px` });

    text = 'Property .width is text';
    const withAsText = '123rem';
    render(<ComponentToTest width={withAsText}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle({ width: withAsText, maxWidth: withAsText });
    // style = window.getComputedStyle(div);
    // expect(style.width).toBe(withAsText);
    // expect(style.maxWidth).toBe(withAsText);
  });
});

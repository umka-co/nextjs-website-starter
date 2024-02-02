import { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import { randomText } from '../../utils/text';
import Typo, { TypoProps } from './Typo';

/**
 * Composition of component(s) to test
 */
const ComponentToTest: FunctionComponent<TypoProps> = (props) => {
  return <Typo {...props} />;
};

describe('<Typo/> component', () => {
  //   beforeEach(() => {});

  it('renders itself', () => {
    let text = 'sample text';
    render(<ComponentToTest>{text}</ComponentToTest>);
    let span = screen.getByText(text);
    expect(span).toBeDefined();
    expect(span.tagName.toLowerCase()).toBe('span');
    expect(span).toHaveTextContent(text);
    // expect(span).toHaveClass('text');
    // expect(span).toHaveClass('dark');
  });

  it('supports .className property', () => {
    let text = 'span with specific class';
    let className = 'someClassName';
    render(<ComponentToTest className={className}>{text}</ComponentToTest>);
    let span = screen.getByText(text);
    expect(span).toBeDefined();
    expect(span).toHaveClass(className);
  });

  it('supports .tag property', () => {
    let text, element, testId;

    text = 'property .tag is not set (default)';
    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>{text}</ComponentToTest>);
    element = screen.getByTestId(testId);
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe('span');

    const tagsToVerify: TypoProps['tag'][] = ['div', 'span', 'p', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
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

  it('supports .variant property', () => {
    let text, element, testId;

    text = 'property .variant is not set (default)';
    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>{text}</ComponentToTest>);
    element = screen.getByTestId(testId);
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe('span');

    const variantsToVerify: TypoProps['variant'][] = ['header1', 'header2', 'header3', 'paragraph', 'list', 'text'];
    const tagsToVerify = ['h1', 'h2', 'h3', 'p', 'ul', 'span'];
    for (let i = 0; i < variantsToVerify.length; i++) {
      const variant = variantsToVerify[i];
      const tag = tagsToVerify[i];
      text = `property .variant is ${variant}`;
      testId = randomText(8);
      render(
        <ComponentToTest data-testid={testId} variant={variant}>
          {text}
        </ComponentToTest>
      );
      element = screen.getByTestId(testId);
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe(tag);
    }
  });
});

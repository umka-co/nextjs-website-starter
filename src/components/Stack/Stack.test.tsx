import { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import Stack, { StackProps } from './Stack';
import { randomText } from '@/utils';

/**
 * Composition of component(s) to test
 */
const ComponentToTest: FunctionComponent<StackProps> = (props) => {
  return <Stack {...props} />;
};

describe('<Stack/> component', () => {
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

  it('supports .direction property', () => {
    let text, div;

    text = 'property .direction is not set (default)';
    render(<ComponentToTest>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass('column');

    text = 'property direction is "column"';
    render(<ComponentToTest direction="column">{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass('column');

    text = 'property direction is "row"';
    render(<ComponentToTest direction="row">{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass('row');
  });

  it('supports .gap property', () => {
    let text, div;

    text = 'property .gap is not set (default)';
    render(<ComponentToTest>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).not.toHaveStyle({ gap: expect.anything() });
    // expect(div).toHaveStyle({ gap: undefined });

    text = 'property .gap is string';
    const gapAsString = '13rem';
    render(<ComponentToTest gap={gapAsString}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle(`gap: ${gapAsString}`);

    text = 'property .gap is number';
    const gapAsNumber = 42;
    render(<ComponentToTest gap={gapAsNumber}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle(`gap: ${gapAsNumber}px`);
  });

  it('supports .padding property', () => {
    let text, div;

    text = 'property .padding is not set (default)';
    render(<ComponentToTest>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    // expect(div).not.toHaveStyle({ padding: expect.anything() });
    expect(div).toHaveStyle({ padding: undefined });

    text = 'property .padding is string';
    const paddingAsString = '3rem';
    render(<ComponentToTest padding={paddingAsString}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle(`padding: ${paddingAsString}`);

    text = 'property .padding is number';
    const paddingAsNumber = 32;
    render(<ComponentToTest padding={paddingAsNumber}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle(`padding: ${paddingAsNumber}px`);
  });

  it('supports .margin property', () => {
    let text, div;

    text = 'property .margin is not set (default)';
    render(<ComponentToTest>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    // expect(div).not.toHaveStyle({ margin: expect.anything() });
    expect(div).toHaveStyle({ margin: undefined });

    text = 'property .margin is string';
    const marginAsString = '13rem';
    render(<ComponentToTest margin={marginAsString}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle(`margin: ${marginAsString}`);

    text = 'property .margin is number';
    const marginAsNumber = 42;
    render(<ComponentToTest margin={marginAsNumber}>{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle(`margin: ${marginAsNumber}px`);
  });

  it('supports .tag property', () => {
    let text, element, testId;

    text = 'property .tag is not set (default)';
    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>{text}</ComponentToTest>);
    element = screen.getByTestId(testId);
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe('div');

    const tagsToVerify: StackProps['tag'][] = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
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
});

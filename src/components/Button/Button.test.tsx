import { render, screen } from '@testing-library/react';
import { randomText } from '@/utils/text';
import { BUTTON_MARGIN, BUTTON_VARIANT } from '@/components/config';
import Button, { ButtonVariant } from './Button';
import { ICONS } from '../Icon/icons';

const ComponentToTest = Button;

/**
 * Tests for <Button/> component
 */
describe('<Button/> component', () => {
  it('renders itself', () => {
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} />);
    const button = screen.getByTestId(testId);
    expect(button).toBeDefined();
    expect(button.tagName.toLowerCase()).toBe('button');
  });

  it('supports .className property', () => {
    let text = 'Button with className';
    let className = 'someClassName';
    render(<ComponentToTest className={className}>{text}</ComponentToTest>);
    let button = screen.getByText(text);
    expect(button).toBeDefined();
    expect(button).toHaveClass(className);
  });

  it('supports .href property', () => {
    let testId, text, href, link;

    // Internal link
    testId = randomText(8);
    text = 'Button with "internal" .href property';
    href = '/relative-link';
    render(
      <ComponentToTest data-testid={testId} href={href}>
        {text}
      </ComponentToTest>
    );
    link = screen.getByTestId(testId);
    expect(link).toBeDefined();
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveAttribute('href', href);

    // External link
    testId = randomText(8);
    text = 'Button with "external" .href property';
    href = 'https://sample.com';
    render(
      <ComponentToTest data-testid={testId} href={href}>
        {text}
      </ComponentToTest>
    );
    link = screen.getByTestId(testId);
    expect(link).toBeDefined();
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
  });

  const testId = randomText(8);
  render(<ComponentToTest data-testid={testId}>Default Variant</ComponentToTest>);
  const button = screen.getByTestId(testId);
  expect(button).toBeDefined();
  expect(button).toHaveAttribute('class', expect.stringContaining(BUTTON_VARIANT));

  it('supports .iconLeft property', () => {
    // Verify that all icons are supported
    for (const icon of Object.keys(ICONS)) {
      const testId = randomText(8);
      render(
        <ComponentToTest data-testid={testId} iconLeft={icon}>
          Button with iconLeft {icon}
        </ComponentToTest>
      );
      const button = screen.getByTestId(testId);
      expect(button).toBeDefined();
      // // Stack for Icon and Title
      // const container = button.firstChild;
      // expect(container).toBeDefined();
      // // Icon
      // const svg = container?.firstChild;
      const svg = button.querySelector('svg');
      expect(svg).toHaveAttribute('data-icon', icon.toLowerCase());
    }
  });

  it('supports .iconRight property', () => {
    // Verify that all icons are supported
    for (const icon of Object.keys(ICONS)) {
      const testId = randomText(8);
      render(
        <ComponentToTest data-testid={testId} iconRight={icon}>
          Button with iconRight {icon}
        </ComponentToTest>
      );
      const button = screen.getByTestId(testId);
      expect(button).toBeDefined();
      // // Stack for Icon and Title
      // const container = button.firstChild;
      // expect(container).toBeDefined();
      // // Icon
      // const svg = container?.lastChild;
      const svg = button.querySelector('svg');
      expect(svg).toHaveAttribute('data-icon', icon.toLowerCase());
    }
  });

  it('supports .margin property', () => {
    let testId, margin, button;

    // Margin not set
    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>Button with margin is not set (default)</ComponentToTest>);
    button = screen.getByTestId(testId);
    expect(button).toBeDefined();
    expect(button).toHaveStyle({ margin: typeof BUTTON_MARGIN === 'number' ? `${BUTTON_MARGIN}px` : BUTTON_MARGIN });

    // Margin as text
    testId = randomText(8);
    margin = '256rem 128rem 64rem 32rem';
    render(
      <ComponentToTest data-testid={testId} margin={margin}>
        Button with margin as string
      </ComponentToTest>
    );
    button = screen.getByTestId(testId);
    expect(button).toBeDefined();
    expect(button).toHaveStyle({ margin: margin });

    // Margin as number
    testId = randomText(8);
    margin = 123;
    render(
      <ComponentToTest data-testid={testId} margin={margin}>
        Button with margin as number
      </ComponentToTest>
    );
    button = screen.getByTestId(testId);
    expect(button).toBeDefined();
    expect(button).toHaveStyle({ margin: `${margin}px` });
  });

  it('supports .variant property', () => {
    const VARIANTS: ButtonVariant[] = ['contained', 'outlined', 'text'];
    // Verify that variants are supported
    for (const variant of VARIANTS) {
      const testId = randomText(8);
      render(
        <ComponentToTest data-testid={testId} variant={variant}>
          {variant}
        </ComponentToTest>
      );
      const button = screen.getByTestId(testId);
      expect(button).toBeDefined();
      expect(button).toHaveAttribute('class', expect.stringContaining(variant));
    }
  });
});

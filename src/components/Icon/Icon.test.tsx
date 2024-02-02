import { render, screen } from '@testing-library/react';
import { randomColor, randomText } from '@/utils/text';
import { ICON_SIZE } from '@/components/config';
import { ICONS } from './icons';
import Icon from './Icon';

const ComponentToTest = Icon;

/**
 * Tests for <Icon/> component
 */
describe('<Icon/> component', () => {
  it('renders itself', () => {
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} />);
    const svg = screen.getByTestId(testId);
    expect(svg).toBeDefined();
    expect(svg).toHaveAttribute('data-icon', 'default');
    expect(svg).toHaveAttribute('height', String(ICON_SIZE)); // default size when .size is not set
    expect(svg).toHaveAttribute('width', String(ICON_SIZE)); // default size when .size is not set
  });

  it('supports .color property', () => {
    const testId = randomText(8);
    const color = randomColor(); // Note: 'rgb(255, 128, 0)' format is used by react-icons npm, so tests may fail
    render(<ComponentToTest data-testid={testId} color={color} />);
    const svg = screen.getByTestId(testId);
    expect(svg).toHaveAttribute('data-icon', 'default');
    // expect(svg).toHaveAttribute('color', color); // TODO: Looks like MUI Icons exclude .color property from <svg> rendering
    expect(svg).toHaveStyle(`color: ${color}`);
    expect(svg).toHaveAttribute('fill', 'currentColor'); // .fill must be 'currentColor' when .color property is set
  });

  it('supports .icon property', () => {
    // Verify that all icons are supported
    for (const icon of Object.keys(ICONS)) {
      const testId = randomText(8);
      render(<ComponentToTest data-testid={testId} icon={icon} />);
      const svg = screen.getByTestId(testId);
      expect(svg).toBeDefined();
      expect(svg).toHaveAttribute('data-icon', icon.toLowerCase());
    }
  });

  it('supports .size property', () => {
    const testId = randomText(8);
    const size = Math.floor(Math.random() * 128) + 1;
    render(<ComponentToTest data-testid={testId} size={size} />);
    const svg = screen.getByTestId(testId);
    expect(svg).toHaveAttribute('height', String(size));
    expect(svg).toHaveAttribute('width', String(size));
  });
});

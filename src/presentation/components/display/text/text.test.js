import React from 'react';

import Text from './text';
import { renderWithTheme } from '@test/utils';
import { theme } from '@style-tokens';

const makeComponent = (props = {}) =>
  renderWithTheme(
    <Text data-testid="text" {...props}>
      Basic text
    </Text>
  );

describe('Text', () => {
  it('should render component correctly', () => {
    const { getByTestId } = makeComponent();

    expect(getByTestId('text')).toHaveStyle(`
      font-size: ${theme.fontSizes[1]}px;
      color: ${theme.colors.gray800};
    `);
  });

  it('should render a custom font-size', () => {
    const { getByTestId } = makeComponent({
      fontSize: '24px',
    });

    expect(getByTestId('text')).toHaveStyle('font-size: 24px;');
  });

  it('should render a custom color', () => {
    const { getByTestId } = makeComponent({
      color: 'purple200',
    });

    expect(getByTestId('text')).toHaveStyle(
      `color: ${theme.colors.purple200};`
    );
  });

  it('should render a other element', () => {
    const { container } = makeComponent({
      as: 'h1',
    });

    expect(container.querySelector('h1').tagName).toBe('H1');
  });
});

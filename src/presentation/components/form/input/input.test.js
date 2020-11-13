import React from 'react';
import { fireEvent } from '@testing-library/react';

import Input from './input';
import { renderWithTheme } from '@test/utils';
import { theme } from '@style-tokens';

const makeComponent = (props = {}) => renderWithTheme(<Input {...props} />);

describe('Input', () => {
  it('should render component correctly', () => {
    const { container } = makeComponent({
      label: 'test',
      id: 'test-id',
    });
    const label = container.querySelector('label');
    const input = container.querySelector('input');

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
    expect(label).toHaveStyle(`
      transform: translate(12px,13px) scale(1);
      background-color: transparent;
    `);
  });

  it('should change label position when input changed', () => {
    const { container } = makeComponent({
      label: 'test',
      id: 'test-id',
    });
    const label = container.querySelector('label');
    const input = container.querySelector('input');

    fireEvent.change(input, { target: { value: 'testing' } });

    expect(label).toHaveStyle(`
      transform: translate(0,-7px) scale(1);
      background-color: ${theme.colors.white};
    `);
  });

  it('should change label position when input has initial value', () => {
    const { container } = makeComponent({
      label: 'test',
      id: 'test-id',
      initialValue: 'testing',
    });
    const label = container.querySelector('label');

    expect(label).toHaveStyle(`
      transform: translate(0,-7px) scale(1);
      background-color: ${theme.colors.white};
    `);
  });
});

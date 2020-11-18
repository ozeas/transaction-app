import React from 'react';
import { fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';

import Input from './input';
import { renderWithTheme } from '@test/utils';
import { theme } from '@style-tokens';

const makeComponent = (props = {}) => renderWithTheme(<Input {...props} />);

const getElement = (testid) => screen.getByTestId(testid);

describe('Input', () => {
  it('should render component correctly', () => {
    makeComponent({
      label: 'test',
      id: 'test-id',
    });
    const label = getElement('label');
    const input = getElement('input');

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
    expect(label).toHaveStyle(`
      transform: translate(12px,13px) scale(1);
      background-color: transparent;
    `);
  });

  it('should change label position when input changed', () => {
    makeComponent({
      label: 'test',
      id: 'test-id',
    });
    const label = getElement('label');
    const input = getElement('input');

    fireEvent.change(input, { target: { value: 'testing' } });

    expect(label).toHaveStyle(`
      transform: translate(0,-7px) scale(1);
      background-color: ${theme.colors.white};
    `);
  });

  it('should change label position when input has initial value', () => {
    makeComponent({
      label: 'test',
      id: 'test-id',
      initialValue: 'testing',
    });
    const label = getElement('label');

    expect(label).toHaveStyle(`
      transform: translate(0,-7px) scale(1);
      background-color: ${theme.colors.white};
    `);
  });
});

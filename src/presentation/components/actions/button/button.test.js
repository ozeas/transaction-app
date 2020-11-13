import React from 'react';
import { fireEvent } from '@testing-library/react';

import Button from './button';
import { renderWithTheme } from '@test/utils';
import { theme } from '@style-tokens';

const makeComponent = (props = {}) =>
  renderWithTheme(
    <Button data-testid="button" {...props}>
      Basic Button
    </Button>
  );

describe('Button', () => {
  it('should render component correctly', () => {
    const { getByTestId } = makeComponent();

    expect(getByTestId('button')).toHaveStyle(`
      color: ${theme.colors.white};
      background-color: ${theme.colors.purple200};
      cursor: pointer;
    `);
  });

  it('should render button with icon', () => {
    const { container } = makeComponent({ icon: 'add-fill' });

    expect(container.querySelector('svg').tagName).toBe('svg');
  });

  it('should render button as disabled', () => {
    const { container } = makeComponent({ disabled: true });
    const button = container.querySelector('button');

    expect(button.disabled).toBeTruthy();
    expect(button).toHaveStyle(`
      background-color: ${theme.colors.gray20};
      color: ${theme.colors.gray300};
      box-shadow: none;
    `);
  });

  it('should not call function on onClick with disabled button', () => {
    const onClick = jest.fn();
    const { getByText } = makeComponent({ onClick, disabled: true });
    fireEvent.click(getByText(/Basic Button/));

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should call function on onClick event button', () => {
    const onClick = jest.fn();
    const { getByText } = makeComponent({ onClick });
    fireEvent.click(getByText(/Basic Button/));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { fireEvent } from '@testing-library/react';

import Button from './button';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@test/utils';
import { theme } from '@style-tokens';

const makeComponent = (props = {}) =>
  renderWithTheme(<Button {...props}>Basic Button</Button>);

describe('Button', () => {
  it('should render component correctly', () => {
    makeComponent();

    expect(screen.getByRole('button')).toHaveStyle(`
      color: ${theme.colors.white};
      background-color: ${theme.colors.purple200};
      cursor: pointer;
    `);
  });

  it('should render button with icon', () => {
    makeComponent({ icon: 'add-fill' });

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render button as disabled', () => {
    makeComponent({ disabled: true });
    const button = screen.getByRole('button');

    expect(button.disabled).toBeTruthy();
    expect(button).toHaveStyle(`
      background-color: ${theme.colors.gray20};
      color: ${theme.colors.gray300};
      box-shadow: none;
    `);
  });

  it('should not call function on onClick with disabled button', () => {
    const onClick = jest.fn();
    makeComponent({ onClick, disabled: true });
    fireEvent.click(screen.getByText(/Basic Button/));

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should call function on onClick event button', () => {
    const onClick = jest.fn();
    makeComponent({ onClick });
    fireEvent.click(screen.getByText(/Basic Button/));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

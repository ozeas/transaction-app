import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from '@test/utils';
import NetworkWarning from './network-warning';

describe('NetworkWarning', () => {
  const networkGetter = Object.defineProperty(window, 'navigator', {
    writable: true,
    value: { onLine: jest.fn() },
  });

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render warning when network is offline', () => {
    networkGetter.navigator.onLine = false;
    renderWithTheme(<NetworkWarning />);

    expect(screen.getByText(/Ops...você está offline!/)).toBeInTheDocument();
  });

  it('should not render warning when network is online', () => {
    networkGetter.navigator.onLine = true;
    renderWithTheme(<NetworkWarning />);

    expect(screen.queryByText(/Ops...você está offline!/i)).toBeNull();
  });
});

import React from 'react';

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
    const { getByText } = renderWithTheme(<NetworkWarning />);

    expect(getByText(/Ops...você está offline!/)).toBeInTheDocument();
  });

  it('should not render warning when network is online', () => {
    networkGetter.navigator.onLine = true;
    const { queryByText } = renderWithTheme(<NetworkWarning />);

    expect(queryByText(/Ops...você está offline!/i)).toBeNull();
  });
});

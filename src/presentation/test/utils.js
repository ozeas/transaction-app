import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../style-tokens/theme';

export const renderWithTheme = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../src/presentation/style-tokens';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import faker from 'faker';

import theme from '@presentation/style-tokens/theme';

export const renderWithTheme = (component) =>
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>{component}</MemoryRouter>
    </ThemeProvider>
  );

export const generateSequence = (length) => {
  const sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(faker.random.number({ min: 0, max: 9 }));
  }

  return sequence.join('');
};

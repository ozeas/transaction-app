import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import faker from 'faker';
import { RecoilRoot } from 'recoil';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import theme from '@presentation/style-tokens/theme';

export const renderWithTheme = (component) =>
  render(
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <MemoryRouter>{component}</MemoryRouter>
      </ThemeProvider>
    </RecoilRoot>
  );

export const generateSequence = (length) => {
  const sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(faker.random.number({ min: 0, max: 9 }));
  }

  return sequence.join('');
};

export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...renderWithTheme(<Router history={history}>{ui}</Router>),
    history,
  };
};

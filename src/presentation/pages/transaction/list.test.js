import React from 'react';
import { act, waitForElement, screen } from '@testing-library/react';

import { renderWithTheme } from '@test/utils';
import List from './list';
import { useLoadTransactionsMock } from './test/mock';

const makeComponent = (props) => renderWithTheme(<List {...props} />);

describe('List', () => {
  it('should show warning message when transactions prop is empty', () => {
    makeComponent({
      loadTransactionList: jest.fn().mockResolvedValue([]),
    });

    expect(screen.queryByTestId(/transactions-list/i)).toBeNull();
    expect(
      screen.getByText(/Não há transações cadastradas!/)
    ).toBeInTheDocument();
  });

  it('should show transactions list when transactions props is filled', async () => {
    await act(
      async () =>
        await makeComponent({
          loadTransactionList: jest
            .fn()
            .mockResolvedValue(useLoadTransactionsMock.transactions),
        })
    );

    expect(screen.queryAllByTestId(/transactions-list/i).length).toBe(2);
    expect(screen.queryByText(/Não há transações cadastradas!/i)).toBeNull();
  });

  it('should show warning message when error load transactions', async () => {
    makeComponent({
      loadTransactionList: jest.fn().mockRejectedValue(),
    });

    const message = await waitForElement(
      () => screen.getByText(/Houve erro ao carregar os dados/),
      {
        timeout: 10,
      }
    );

    expect(message).toBeInTheDocument();
  });
});

import React from 'react';
import { act } from '@testing-library/react';

import { renderWithTheme } from '@test/utils';
import List from './list';
import { useLoadTransactionsMock } from './test/mock';

const makeComponent = (props) => renderWithTheme(<List {...props} />);

describe('List', () => {
  it('should show warning message when transactions prop is empty', () => {
    const { getByText, queryByTestId } = makeComponent({
      loadTransactionList: jest.fn().mockResolvedValue([]),
    });

    expect(queryByTestId(/transactions-list/i)).toBeNull();
    expect(getByText(/Não há transações cadastradas!/)).toBeInTheDocument();
  });

  it('should show transactions list when transactions props is filled', async () => {
    let element;
    await act(
      async () =>
        (element = await makeComponent({
          loadTransactionList: jest
            .fn()
            .mockResolvedValue(useLoadTransactionsMock.transactions),
        }))
    );
    const { queryByText, queryAllByTestId } = element;

    expect(queryAllByTestId(/transactions-list/i).length).toBe(2);
    expect(queryByText(/Não há transações cadastradas!/i)).toBeNull();
  });
});

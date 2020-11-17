import React from 'react';

import { renderWithTheme } from '@test/utils';
import List from './list';
import { transactionsMock } from './test/mock';

const makeComponent = (props) => renderWithTheme(<List {...props} />);

describe('List', () => {
  it('should show warning message when transactions prop is empty', () => {
    const { getByText, queryByTestId } = makeComponent({
      amount: 0,
      amountTransactions: 0,
      transactions: [],
    });

    expect(queryByTestId(/transactions-list/i)).toBeNull();
    expect(getByText(/Não há transações cadastradas!/)).toBeInTheDocument();
  });

  it('should show transactions list when transactions props is filled', () => {
    const { queryByText, queryByTestId } = makeComponent({
      amount: transactionsMock.amount,
      amountTransactions: transactionsMock.amountTransactions,
      transactions: transactionsMock.list,
    });

    expect(queryByTestId(/transactions-list/i)).toBeInTheDocument();
    expect(queryByText(/Não há transações cadastradas!/i)).toBeNull();
  });
});

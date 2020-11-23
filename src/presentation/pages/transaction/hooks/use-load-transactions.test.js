import { renderRecoilHook } from 'react-recoil-hooks-testing-library';

import useLoadTransactions from './use-load-transactions';

import { useLoadTransactionsMock } from '@presentation/pages/transaction/test/mock';

describe('useLoadTransactions', () => {
  it('should return empty states', () => {
    const loadTransactions = jest.fn().mockResolvedValue([]);
    const { result } = renderRecoilHook(() =>
      useLoadTransactions(loadTransactions)
    );

    expect(result.current.transactionsList.length).toBe(0);
  });

  it('should return filled status', async () => {
    const loadTransactions = jest
      .fn()
      .mockResolvedValue(useLoadTransactionsMock.transactions);

    const { result, waitForNextUpdate } = renderRecoilHook(() =>
      useLoadTransactions(loadTransactions)
    );

    await waitForNextUpdate();

    expect(result.current.transactionsList.length).toBe(
      useLoadTransactionsMock.amountTransactions
    );
  });

  it('should not call loadTransaction when transactionList is filled', async () => {
    const loadTransactions = jest
      .fn()
      .mockResolvedValue(useLoadTransactionsMock.transactions);

    const { rerender, waitForNextUpdate } = renderRecoilHook(() =>
      useLoadTransactions(loadTransactions)
    );

    await waitForNextUpdate();

    rerender();

    expect(loadTransactions).toHaveBeenCalledTimes(1);
  });
});

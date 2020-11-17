import { renderHook } from '@testing-library/react-hooks';
import useLoadTransactions from './use-load-transactions';

import { useLoadTransactionsMock } from '@presentation/pages/transaction/test/mock';

describe('useLoadTransactions', () => {
  it('should return empty states', () => {
    const loadTransactions = jest.fn().mockResolvedValue([]);
    const { result } = renderHook(() => useLoadTransactions(loadTransactions));

    expect(result.current.amount).toEqual(0);
    expect(result.current.amountTransactions).toEqual(0);
    expect(result.current.transactions).toEqual([]);
  });

  it('should return filled status', async () => {
    const loadTransactions = jest
      .fn()
      .mockResolvedValue(useLoadTransactionsMock.transactions);

    const { result, waitForNextUpdate } = renderHook(() =>
      useLoadTransactions(loadTransactions)
    );

    await waitForNextUpdate();

    const {
      amount,
      amountTransactions,
      transactions,
    } = useLoadTransactionsMock;

    expect(result.current.amount).toEqual(amount);
    expect(result.current.amountTransactions).toEqual(amountTransactions);
    expect(result.current.transactions).toEqual(transactions);
  });
});

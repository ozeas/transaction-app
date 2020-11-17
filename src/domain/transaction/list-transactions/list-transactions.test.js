import ListTransactions from './list-transactions';

describe('ListTransactions', () => {
  const request = {
    getList: jest.fn(),
  };

  it('should call getList requests method', async () => {
    const instance = new ListTransactions(request);
    await instance.getList();

    expect(request.getList).toHaveBeenCalled();
  });
});

import { createTransactionParamsMock } from '@domain/transaction/test/mock';
import CreateTransaction from './create-transaction';

describe('CreateTransaction', () => {
  const request = {
    createTransaction: jest.fn(),
  };

  it('should call getList requests method', async () => {
    const instance = new CreateTransaction(request);
    await instance.create(createTransactionParamsMock);

    expect(request.createTransaction).toHaveBeenCalled();
  });
});

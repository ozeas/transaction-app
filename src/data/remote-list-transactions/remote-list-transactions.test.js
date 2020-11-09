import faker from 'faker';

import RemoteListTransactions from './remote-list-transactions';
import { httpGetClientMock } from '../test/remote-list-transactions-mock';

describe('RemoteListTransactions', () => {
  const url = faker.internet.url;

  it('should config url and httpGetClient', () => {
    const instance = new RemoteListTransactions(url, httpGetClientMock());

    expect(instance.url).toBe(url);
    expect(typeof instance.httpGetClient).toBe('function');
  });

  it('should return body when status response is 200', async () => {
    const instance = new RemoteListTransactions(url, httpGetClientMock());

    const result = await instance.getList();

    expect(result.length).toBeGreaterThan(0);
  });

  test.each([
    [500, 'internal_error'],
    [400, 'notfound_error'],
    [408, 'timeout_error'],
  ])(
    '%#: should throw error when has status error response %s',
    async (status, resultError) => {
      const instance = new RemoteListTransactions(
        url,
        httpGetClientMock(status)
      );

      await expect(instance.getList()).rejects.toThrow(resultError);
    }
  );
});

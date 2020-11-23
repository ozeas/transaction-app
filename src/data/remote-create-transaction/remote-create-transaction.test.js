import faker from 'faker';

import RemoteCreateTransaction from './remote-create-transaction';
import {
  httpGetClientCreateMock,
  payload,
  completePayload,
} from '@data/test/remote-transactions-mock';

describe('RemoteCreateTransaction', () => {
  const url = faker.internet.url();

  it('should config url and httpGetClient', () => {
    const instance = new RemoteCreateTransaction(
      url,
      httpGetClientCreateMock()
    );

    expect(instance.url).toBe(url);
    expect(typeof instance.httpGetClient).toBe('function');
  });

  it('should return data when status response is 201', async () => {
    const instance = new RemoteCreateTransaction(
      url,
      httpGetClientCreateMock(201)
    );
    const result = await instance.createTransaction(payload);

    expect(result).toEqual({
      url,
      ...completePayload,
    });
  });

  test.each([
    [500, 'internal_error'],
    [400, 'notfound_error'],
    [408, 'timeout_error'],
  ])(
    '%#: should throw error when has status error response %s',
    async (status, resultError) => {
      const instance = new RemoteCreateTransaction(
        url,
        httpGetClientCreateMock(status)
      );

      await expect(instance.createTransaction()).rejects.toThrow(resultError);
    }
  );
});

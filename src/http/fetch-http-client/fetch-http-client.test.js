import {
  mockHttpResponse,
  mockHttpRequestError,
  mockHttpRequestTimeoutError,
  mockHttpRequest,
  mockFetchHttpClient,
} from '@http/test/mock-fetch';

describe('FetchHttpClient', () => {
  jest.spyOn(window, 'fetch');

  it('should call fetch with correct values', async () => {
    window.fetch.mockResolvedValueOnce(mockHttpResponse);

    const instance = mockFetchHttpClient();

    const params = {
      method: mockHttpRequest.method,
      signal: {},
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    await instance.request({ url: mockHttpRequest.url, ...params });

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(mockHttpRequest.url, params);
  });

  it('should return correct response', async () => {
    window.fetch.mockResolvedValueOnce(mockHttpResponse);

    const instance = mockFetchHttpClient();
    const responseMock = await instance.request(mockHttpRequest);

    expect(responseMock).toEqual(mockHttpResponse.result);
  });

  it('should return correct error', async () => {
    window.fetch.mockResolvedValueOnce(Promise.reject({ status: 500 }));

    const instance = mockFetchHttpClient();
    const responseMock = await instance.request(mockHttpRequest);
    expect(responseMock).toEqual(mockHttpRequestError);
  });

  it('should return correct error when timeout', async () => {
    window.fetch.mockResolvedValueOnce(Promise.reject({ status: 408 }));

    const instance = mockFetchHttpClient();
    const responseMock = await instance.request(mockHttpRequest);
    expect(responseMock).toEqual(mockHttpRequestTimeoutError);
  });
});

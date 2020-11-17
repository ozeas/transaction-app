import {
  mockHttpResponse,
  mockHttpRequestError,
  mockHttpRequest,
  mockFetchHttpClient,
} from '@http/test/mock-fetch';

describe('FetchHttpClient', () => {
  jest.spyOn(window, 'fetch');

  it('should call fetch with correct values', async () => {
    window.fetch.mockResolvedValueOnce(mockHttpResponse);

    const instance = mockFetchHttpClient();
    const params = {
      url: mockHttpRequest.url,
      method: mockHttpRequest.method,
    };

    await instance.request(params);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(mockHttpRequest.url, {
      mode: 'cors',
      method: params.method,
    });
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
});

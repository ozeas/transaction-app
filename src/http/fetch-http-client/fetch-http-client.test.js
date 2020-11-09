import {
  mockHttpResponse,
  mockHttpRequestError,
  mockHttpRequest,
  mockFetchHttpClient,
} from '../test/mock-fetch';

describe('FetchHttpClient', () => {
  jest.spyOn(window, 'fetch');

  it('should call fetch with correct values', async () => {
    window.fetch.mockResolvedValueOnce(mockHttpResponse);

    const instance = mockFetchHttpClient();
    await instance.request(mockHttpRequest);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(mockHttpRequest);
  });

  it('should return correct response', async () => {
    window.fetch.mockResolvedValueOnce(mockHttpResponse);

    const instance = mockFetchHttpClient();
    const responseMock = await instance.request(mockHttpRequest);

    expect(responseMock).toEqual(mockHttpResponse);
  });

  it('should return correct error', async () => {
    window.fetch.mockResolvedValueOnce(mockHttpRequestError);

    const instance = mockFetchHttpClient();
    const responseMock = await instance.request(mockHttpRequest);
    expect(mockHttpRequestError).toEqual(responseMock);
  });
});

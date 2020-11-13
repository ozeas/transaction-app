import faker from 'faker';

import FetchHttpClient from '@http/fetch-http-client/fetch-http-client';

export const mockHttpResponse = {
  body: faker.random.objectElement(),
  status: faker.random.number(),
};

export const mockHttpRequestError = {
  status: 500,
};

export const mockHttpRequest = {
  url: faker.internet.url(),
  method: faker.random.word(),
};

export const mockFetchHttpClient = () => new FetchHttpClient();

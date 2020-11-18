import faker from 'faker';

import FetchHttpClient from '@http/fetch-http-client/fetch-http-client';

const status = faker.random.number({ min: 200, max: 599 });
const body = faker.random.objectElement();

export const mockHttpResponse = {
  status,
  json: () => ({
    status,
    body,
  }),
  result: {
    status,
    body: {
      status,
      body,
    },
  },
};

export const mockHttpRequestError = {
  status: 500,
  body: undefined,
};

export const mockHttpRequestTimeoutError = {
  status: 408,
  body: undefined,
};

export const mockHttpRequest = {
  url: faker.internet.url(),
  method: faker.random.word(),
};

export const mockFetchHttpClient = () => new FetchHttpClient();

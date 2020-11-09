import faker from 'faker';

export const httpGetClientMock = (status = 200) => (url, params) => ({
  url,
  params,
  body: faker.random.arrayElements(),
  status,
});

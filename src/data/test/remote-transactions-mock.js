import faker from 'faker';

export const payload = {
  buyer_document: faker.random.number(),
  credit_card_holder_name: faker.name.firstName(),
  credit_card_number: faker.finance.creditCardNumber(),
  credit_card_expiration_date: faker.date.future(),
  credit_card_cvv: faker.finance.creditCardCVV(),
  amount: faker.finance.amount(),
};

export const completePayload = {
  ...payload,
  id: faker.random.number(),
  status: faker.random.alphaNumeric(),
};

export const httpGetClientMock = (status = 200) => (url, params) => ({
  url,
  params,
  body: faker.random.arrayElements(),
  status,
});

export const httpGetClientCreateMock = (status = 200) => (params) => {
  return Promise.resolve({
    body: {
      ...params,
      id: completePayload.id,
      status: completePayload.status,
    },
    status,
  });
};

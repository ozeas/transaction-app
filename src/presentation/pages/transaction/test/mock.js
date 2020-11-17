import faker from 'faker';

import { generateSequence } from '@test/utils';

export const transactionsMock = {
  amount: faker.random.number(),
  amountTransactions: faker.random.number(),
  list: [
    {
      id: generateSequence(4),
      credit_card_holder_name: faker.name.firstName(),
      amount: faker.finance.amount(),
      status: 'paid',
      credit_card_cvv: faker.finance.creditCardCVV(),
    },
  ],
};

export const useLoadTransactionsMock = {
  amount: 20000,
  amountTransactions: 2,
  transactions: [
    {
      id: 1,
      buyer_document: '12345678912',
      credit_card_holder_name: 'JOAO S SAURO',
      credit_card_number: '4111111111111111',
      credit_card_expiration_date: '0121',
      credit_card_cvv: '123',
      amount: 10000,
      status: 'paid',
    },
    {
      id: 2,
      buyer_document: '12345678912',
      credit_card_holder_name: 'JOAO S SAURO',
      credit_card_number: '4111111111111111',
      credit_card_expiration_date: '0121',
      credit_card_cvv: '123',
      amount: 10000,
      status: 'paid',
    },
  ],
};

import faker from 'faker';

import { generateSequence } from '@test/utils';

export const transactionsMock = {
  amount: faker.random.number(),
  amountTransactions: faker.random.number(),
  list: [
    {
      id: generateSequence(4),
      creditCardHolderName: faker.name.firstName(),
      amount: faker.finance.amount(),
      translatedStatus: 'paid',
    },
  ],
};

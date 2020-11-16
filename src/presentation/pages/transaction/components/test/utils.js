import { generateSequence } from '@test/utils';
import faker from 'faker';

export const inputNames = [
  'credit_card_holder_name',
  'buyer_document',
  'credit_card_number',
  'credit_card_expiration_date',
  'credit_card_cvv',
  'amount',
];

export const randomInputName =
  inputNames[Math.floor(Math.random() * inputNames.length)];

export const [
  holderName,
  document,
  cardNumber,
  expirationDate,
  cardCVV,
  amount,
] = inputNames;

export const fieldsInputs = {
  [holderName]: faker.name.firstName(),
  [document]: generateSequence(11),
  [cardNumber]: generateSequence(16),
  [expirationDate]: generateSequence(4),
  [cardCVV]: faker.finance.creditCardCVV(),
  [amount]: generateSequence(6),
};

export const queryByName = (name, container) =>
  container.querySelector(`[name="${name}"]`);

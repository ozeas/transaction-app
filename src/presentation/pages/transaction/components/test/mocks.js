import { generateSequence } from '@test/utils';
import faker from 'faker';

import {
  inputNames,
  HOLDER_NAME_FIELD,
  BUYER_DOCUMENT_FIELD,
  CARD_NUMBER_FIELD,
  EXPIRATION_DATE_FIELD,
  CARD_CVV_FIELD,
  AMOUNT_FIELD,
} from '../utils';

export const randomInputName =
  inputNames[Math.floor(Math.random() * inputNames.length)];

export const fieldsWitchInputsValues = {
  [HOLDER_NAME_FIELD]: faker.name.firstName(),
  [BUYER_DOCUMENT_FIELD]: generateSequence(11),
  [CARD_NUMBER_FIELD]: generateSequence(16),
  [EXPIRATION_DATE_FIELD]: generateSequence(4),
  [CARD_CVV_FIELD]: faker.finance.creditCardCVV(),
  [AMOUNT_FIELD]: generateSequence(6),
};

export const queryByName = (name, container) =>
  container.querySelector(`[name="${name}"]`);

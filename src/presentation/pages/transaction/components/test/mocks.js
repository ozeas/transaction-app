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

export const inputValuesMock = {
  [BUYER_DOCUMENT_FIELD]: {
    input: '383.938.838-83',
    output: '38393883883',
  },
  [CARD_NUMBER_FIELD]: {
    input: '3838 3383 3383 3838',
    output: '3838338333833838',
  },
  [EXPIRATION_DATE_FIELD]: {
    input: '12/20',
    output: '1220',
  },
  [AMOUNT_FIELD]: {
    input: 'R$ 833.8373.838,83',
    output: '8338373838.83',
  },
};

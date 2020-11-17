import {
  unmaskFieldsFunctions,
  BUYER_DOCUMENT_FIELD,
  CARD_NUMBER_FIELD,
  EXPIRATION_DATE_FIELD,
  AMOUNT_FIELD,
} from './utils';

const fieldNames = Object.keys(unmaskFieldsFunctions);
const values = {
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

describe('utils', () => {
  for (let field of fieldNames) {
    it(`should return correct format ${field}`, () => {
      const rgexFunc = unmaskFieldsFunctions[field];
      const value = values[field].input;
      expect(rgexFunc(value)).toBe(values[field].output);
    });
  }
});

import { unmaskFieldsFunctions } from './utils';
import { inputValuesMock } from './test/mocks';

const fieldNames = Object.keys(unmaskFieldsFunctions);

describe('utils', () => {
  for (let field of fieldNames) {
    it(`should return correct format ${field}`, () => {
      const rgexFunc = unmaskFieldsFunctions[field];
      const { input, output } = inputValuesMock[field];
      expect(rgexFunc(input)).toBe(output);
    });
  }
});

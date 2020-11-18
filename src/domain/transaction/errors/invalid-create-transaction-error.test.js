import InvalidCreateTransactionError from './invalid-create-transaction-error';

const makeError = (code = 400) => () => {
  throw new InvalidCreateTransactionError(code);
};

describe('InvalidCreateTransactionError', () => {
  it('should throw notfound_error as default', () => {
    expect(makeError()).toThrow('notfound_error');
  });

  test.each([
    [400, 'notfound_error'],
    [500, 'internal_error'],
    [408, 'timeout_error'],
  ])('%#: should %s throw %s exception', (codeError, typeError) => {
    expect(makeError(codeError)).toThrow(typeError);
  });
});

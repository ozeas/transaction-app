import errorsType from './errors-type';

class InvalidCreateTransactionError extends Error {
  constructor(errorCode = 400) {
    super(errorsType[errorCode]);
    this.name = 'InvalidCreateTransactionError';
  }
}

export default InvalidCreateTransactionError;

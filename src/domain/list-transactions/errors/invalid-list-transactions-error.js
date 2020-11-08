import errorsType from './errors-type';

class InvalidListTransactionsError extends Error {
  constructor(errorCode = 400) {
    super(errorsType[errorCode]);
    this.name = 'InvalidListTransactionsError';
  }
}

export default InvalidListTransactionsError;

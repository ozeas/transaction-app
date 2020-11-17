import InvalidListTransactionsError from '@domain/transaction/list-transactions/errors/invalid-list-transactions-error';
import httpStatusCode from '@data/http/http-status-code';

class RemoteCreateTransaction {
  constructor(url, httpGetClient) {
    this.url = url;
    this.httpGetClient = httpGetClient;
  }

  async createTransaction(params) {
    const response = await this.httpGetClient({
      url: this.url,
      ...params,
    });

    switch (response.status) {
      case httpStatusCode.created:
        return response.body;
      default:
        throw new InvalidListTransactionsError(response.status);
    }
  }
}

export default RemoteCreateTransaction;

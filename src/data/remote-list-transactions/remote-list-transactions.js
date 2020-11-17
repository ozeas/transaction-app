import InvalidListTransactionsError from '@domain/transaction/list-transactions/errors/invalid-list-transactions-error';
import httpStatusCode from '@data/http/http-status-code';

class RemoteListTransactions {
  constructor(url, httpGetClient) {
    this.url = url;
    this.httpGetClient = httpGetClient;
  }

  async getList(method) {
    const response = await this.httpGetClient({
      url: this.url,
      method,
    });

    switch (response.status) {
      case httpStatusCode.ok:
        return response.body;
      default:
        throw new InvalidListTransactionsError(response.status);
    }
  }
}

export default RemoteListTransactions;

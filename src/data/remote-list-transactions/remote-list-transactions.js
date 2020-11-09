import InvalidListTransactionsError from '../../domain/list-transactions/errors/invalid-list-transactions-error';
import httpStatusCode from '../http/http-status-code';

class RemoteListTransactions {
  constructor(url, httpGetClient) {
    this.url = url;
    this.httpGetClient = httpGetClient;
  }

  async getList(params) {
    const response = await this.httpGetClient(this.url, params);

    switch (response.status) {
      case httpStatusCode.ok:
        return response.body;
      default:
        throw new InvalidListTransactionsError(response.status);
    }
  }
}

export default RemoteListTransactions;

import { InvalidCreateTransactionError } from '@domain/transaction/errors';
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
        throw new InvalidCreateTransactionError(response.status);
    }
  }
}

export default RemoteCreateTransaction;

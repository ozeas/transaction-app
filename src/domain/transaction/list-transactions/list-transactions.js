class ListTransactions {
  constructor(requester) {
    this.requester = requester;
  }

  async getList() {
    return await this.requester.getList('get');
  }
}

export default ListTransactions;

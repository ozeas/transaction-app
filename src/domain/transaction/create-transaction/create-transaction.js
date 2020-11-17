class CreateTransaction {
  constructor(requester) {
    this.requester = requester;
  }

  async create(params) {
    return await this.requester.createTransaction({
      method: 'post',
      body: JSON.stringify(params),
    });
  }
}

export default CreateTransaction;

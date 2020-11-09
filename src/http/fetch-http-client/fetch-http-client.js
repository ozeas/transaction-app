class FetchHttpClient {
  async request({ url, method }) {
    let response;
    try {
      response = await fetch({
        url,
        method,
      });
    } catch (error) {
      response = error;
    }

    return {
      status: response.status,
      body: response.body,
    };
  }
}

export default FetchHttpClient;

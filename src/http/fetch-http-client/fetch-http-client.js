class FetchHttpClient {
  async request({ url, method }) {
    let response;
    let body;
    try {
      const result = await fetch(url, {
        method,
        mode: 'cors',
      });
      response = await result;
      body = await response.json();
    } catch (error) {
      response = error;
    }

    return {
      status: response.status,
      body,
    };
  }
}

export default FetchHttpClient;

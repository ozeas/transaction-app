class FetchHttpClient {
  async request({ url, method, ...props }) {
    let response;
    let body;
    try {
      const { timeout = 8000 } = props;

      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      const result = await fetch(url, {
        method,
        mode: 'cors',
        signal: controller.signal,
        ...props,
      });
      clearTimeout(id);

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

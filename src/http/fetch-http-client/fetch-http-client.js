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
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        ...props,
      });
      clearTimeout(id);

      response = await result;
      body = await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        response = {
          status: 408,
        };
      } else {
        response = error;
      }
    }

    return {
      status: response.status,
      body,
    };
  }
}

export default FetchHttpClient;

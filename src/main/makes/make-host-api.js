console.log(process.env);
export const makeHostApi = (path) => `${process.env.REACT_APP_API_URL}/${path}`;

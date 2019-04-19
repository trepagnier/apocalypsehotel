export default (host, endpoint, params) => {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&");
  return `${host}${endpoint}?${query}`;
};

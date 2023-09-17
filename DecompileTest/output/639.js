function t(t) {
  if ((t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)) throw new (require('./640'))();
}

module.exports = function (n) {
  t(n);
  n.headers = n.headers || {};
  n.data = require('./641').call(n, n.data, n.headers, n.transformRequest);
  n.headers = require('./633').merge(n.headers.common || {}, n.headers[n.method] || {}, n.headers);

  require('./633').forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
    delete n.headers[t];
  });

  return (n.adapter || require('./642').adapter)(n).then(
    function (s) {
      t(n);
      s.data = require('./641').call(n, s.data, s.headers, n.transformResponse);
      return s;
    },
    function (s) {
      if (!require('./657')(s)) {
        t(n);
        if (s && s.response) s.response.data = require('./641').call(n, s.response.data, s.response.headers, n.transformResponse);
      }

      return Promise.reject(s);
    }
  );
};

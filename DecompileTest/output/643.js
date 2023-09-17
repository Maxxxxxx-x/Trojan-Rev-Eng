module.exports = function (n) {
  return new Promise(function (t, o) {
    var s,
      u = n.data,
      l = n.headers,
      c = n.responseType;

    function p() {
      if (n.cancelToken) n.cancelToken.unsubscribe(s);
      if (n.signal) n.signal.removeEventListener('abort', s);
    }

    if (require('./633').isFormData(u) && require('./633').isStandardBrowserEnv()) delete l['Content-Type'];
    var f = new XMLHttpRequest();

    if (n.auth) {
      var E = n.auth.username || '',
        T = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : '';
      l.Authorization = 'Basic ' + btoa(E + ':' + T);
    }

    var module644 = require('./644')(n.baseURL, n.url);

    function R() {
      if (f) {
        var module648 = 'getAllResponseHeaders' in f ? require('./648')(f.getAllResponseHeaders()) : null,
          u = {
            data: c && 'text' !== c && 'json' !== c ? f.response : f.responseText,
            status: f.status,
            statusText: f.statusText,
            headers: module648,
            config: n,
            request: f,
          };

        require('./649')(
          function (n) {
            t(n);
            p();
          },
          function (n) {
            o(n);
            p();
          },
          u
        );

        f = null;
      }
    }

    if (
      (f.open(n.method.toUpperCase(), require('./647')(module644, n.params, n.paramsSerializer), true),
      (f.timeout = n.timeout),
      'onloadend' in f
        ? (f.onloadend = R)
        : (f.onreadystatechange = function () {
            if (f && 4 === f.readyState && (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf('file:')))) setTimeout(R);
          }),
      (f.onabort = function () {
        if (f) {
          o(new (require('./638'))('Request aborted', require('./638').ECONNABORTED, n, f));
          f = null;
        }
      }),
      (f.onerror = function () {
        o(new (require('./638'))('Network Error', require('./638').ERR_NETWORK, n, f, f));
        f = null;
      }),
      (f.ontimeout = function () {
        var t = n.timeout ? 'timeout of ' + n.timeout + 'ms exceeded' : 'timeout exceeded',
          module650 = n.transitional || require('./650');

        if (n.timeoutErrorMessage) t = n.timeoutErrorMessage;
        o(new (require('./638'))(t, module650.clarifyTimeoutError ? require('./638').ETIMEDOUT : require('./638').ECONNABORTED, n, f));
        f = null;
      }),
      require('./633').isStandardBrowserEnv())
    ) {
      var module652 = (n.withCredentials || require('./651')(module644)) && n.xsrfCookieName ? require('./652').read(n.xsrfCookieName) : undefined;
      if (module652) l[n.xsrfHeaderName] = module652;
    }

    if ('setRequestHeader' in f)
      require('./633').forEach(l, function (n, t) {
        if (undefined === u && 'content-type' === t.toLowerCase()) delete l[t];
        else f.setRequestHeader(t, n);
      });
    if (!require('./633').isUndefined(n.withCredentials)) f.withCredentials = !!n.withCredentials;
    if (c && 'json' !== c) f.responseType = n.responseType;
    if ('function' == typeof n.onDownloadProgress) f.addEventListener('progress', n.onDownloadProgress);
    if ('function' == typeof n.onUploadProgress && f.upload) f.upload.addEventListener('progress', n.onUploadProgress);

    if (n.cancelToken || n.signal) {
      s = function (n) {
        if (f) {
          o(!n || (n && n.type) ? new (require('./640'))() : n);
          f.abort();
          f = null;
        }
      };

      if (n.cancelToken) n.cancelToken.subscribe(s);
      if (n.signal) n.signal.aborted ? s() : n.signal.addEventListener('abort', s);
    }

    if (!u) u = null;

    var module653 = require('./653')(module644);

    if (module653 && -1 === ['http', 'https', 'file'].indexOf(module653)) o(new (require('./638'))('Unsupported protocol ' + module653 + ':', require('./638').ERR_BAD_REQUEST, n));
    else f.send(u);
  });
};

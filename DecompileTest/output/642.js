var t = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

function e(t, e) {
  if (!require('./633').isUndefined(t) && require('./633').isUndefined(t['Content-Type'])) t['Content-Type'] = e;
}

function n(t, e, n) {
  if (require('./633').isString(t))
    try {
      (e || JSON.parse)(t);
      return require('./633').trim(t);
    } catch (t) {
      if ('SyntaxError' !== t.name) throw t;
    }
  return (n || JSON.stringify)(t);
}

var o,
  module656 = {
    transitional: require('./650'),
    adapter:
      ('undefined' != typeof XMLHttpRequest
        ? (o = require('./643'))
        : 'undefined' != typeof process && '[object process]' === Object.prototype.toString.call(process) && (o = require('./643')),
      o),
    transformRequest: [
      function (t, o) {
        if (
          (require('./654')(o, 'Accept'),
          require('./654')(o, 'Content-Type'),
          require('./633').isFormData(t) ||
            require('./633').isArrayBuffer(t) ||
            require('./633').isBuffer(t) ||
            require('./633').isStream(t) ||
            require('./633').isFile(t) ||
            require('./633').isBlob(t))
        )
          return t;
        if (require('./633').isArrayBufferView(t)) return t.buffer;

        if (require('./633').isURLSearchParams(t)) {
          e(o, 'application/x-www-form-urlencoded;charset=utf-8');
          return t.toString();
        }

        var s,
          module655 = require('./633').isObject(t),
          c = o && o['Content-Type'];

        if ((s = require('./633').isFileList(t)) || (module655 && 'multipart/form-data' === c)) {
          var p = this.env && this.env.FormData;
          return require('./655')(
            s
              ? {
                  'files[]': t,
                }
              : t,
            p && new p()
          );
        }

        if (module655 || 'application/json' === c) {
          e(o, 'application/json');
          return n(t);
        } else return t;
      },
    ],
    transformResponse: [
      function (t) {
        var e = this.transitional || module656.transitional,
          n = e && e.silentJSONParsing,
          o = e && e.forcedJSONParsing,
          f = !n && 'json' === this.responseType;
        if (f || (o && require('./633').isString(t) && t.length))
          try {
            return JSON.parse(t);
          } catch (t) {
            if (f) {
              if ('SyntaxError' === t.name) throw require('./638').from(t, require('./638').ERR_BAD_RESPONSE, this, null, this.response);
              throw t;
            }
          }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: require('./656'),
    },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
      },
    },
  };

require('./633').forEach(['delete', 'get', 'head'], function (t) {
  module656.headers[t] = {};
});

require('./633').forEach(['post', 'put', 'patch'], function (e) {
  module656.headers[e] = require('./633').merge(t);
});

module.exports = module656;

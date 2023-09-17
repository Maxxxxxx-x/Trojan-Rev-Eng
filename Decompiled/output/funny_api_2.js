exports.get = function (n, u) {
  var d = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2],
    f = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0,
    module662 = o() + '/api/' + require('./662').MD5(n).toString();

  if (u) {
    u = l(u);
    var h = [];
    Object.keys(u).forEach(function (t) {
      if (u[t] instanceof Object && null != u[t])
        Object.keys(u[t]).forEach(function (n) {
          if (null != u[t][n]) h.push(t + '[' + n + ']=' + u[t][n]);
        });
      else if (null != u[t]) h.push(t + '=' + u[t]);
    });
    if (-1 === module662.search(/\?/)) module662 += '?' + h.join('&');
    else module662 += '&' + h.join('&');
  }

  return module621.default(
    module662,
    {
      method: 'GET',
    },
    d,
    f
  );
};

exports.post = function (n, u) {
  var d = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2],
    f = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0,
    c = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : null,
    h = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : null,
    module662 = o() + '/api/' + require('./662').MD5(n).toString();

  return module621.default(
    module662,
    {
      method: 'POST',
      data: l(u),
      retry: c,
      retryDelay: h,
    },
    d,
    f
  );
};

exports.upload = function (n, u) {
  var o = u.url + '/api/' + n;
  return module621.default(
    o,
    {
      method: 'POST',
      data: u.data,
      headers: {
        uniqueId: u.uniqueId,
      },
    },
    false
  );
};

var module621 = require('@babel/runtime/helpers/interopRequireDefault')(require('./621')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432')),
  module661 = require('@babel/runtime/helpers/interopRequireDefault')(require('./661'));

function o() {
  return module432.default.getUrl() ? module432.default.getUrl() : require('./460').hosts[0];
}

function l(t) {
  var n = {
      data: t,
      timestamp: Date.parse(new Date()) / 1e3,
    },
    o = JSON.stringify(n);
  return {
    text: module661.default.aesEncrypt(o, 'A1h0DG' + require('./662').MD5(require('./460').account).toString().substring(2, 12)),
  };
}

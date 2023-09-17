exports.default = function (t, n) {
  for (var f of ['validAttributes', 'bubblingEventTypes', 'directEventTypes']) {
    var u = Object.keys(o(t[f], n[f]));

    if (u.length > 0) {
      var s,
        c = null != (s = n.uiViewClassName) ? s : t.uiViewClassName;
      console.error("'" + c + "' has a view config that does not match native. '" + f + "' is missing: " + u.join(', '));
    }
  }
};

exports.getConfigWithoutViewProps = function (n, o) {
  if (!n[o]) return {};
  return Object.keys(n[o])
    .filter(function (n) {
      return !module165.default[o][n];
    })
    .reduce(function (t, f) {
      t[f] = n[o][f];
      return t;
    }, {});
};

exports.stringifyViewConfig = function (t) {
  return JSON.stringify(
    t,
    function (t, n) {
      return 'function' == typeof n ? '\u0192 ' + n.name : n;
    },
    2
  );
};

var module165 = require('@babel/runtime/helpers/interopRequireDefault')(require('./165')),
  n = ['transform', 'hitSlop'];

function o(t, f) {
  var u = {};

  function s(t, n, f) {
    if (typeof t == typeof n || null == t) {
      if ('object' != typeof t) t === n || (u[f] = n);
      else {
        var s = o(t, n);
        if (Object.keys(s).length > 1) u[f] = s;
      }
    } else u[f] = n;
  }

  for (var c in t) n.includes(c) || (f ? t.hasOwnProperty(c) && s(t[c], f[c], c) : (u[c] = {}));

  return u;
}

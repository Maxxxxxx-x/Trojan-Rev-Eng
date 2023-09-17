var t = {
  configure: true,
  fetch: true,
  refresh: true,
  addEventListener: true,
  useNetInfo: true,
};
exports.addEventListener = w;
exports.configure = b;
exports.fetch = h;
exports.refresh = j;
exports.useNetInfo = P;

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = require('./125'),
  ReactNative = require('react-native'),
  module423 = require('@babel/runtime/helpers/interopRequireDefault')(require('./423')),
  module424 = require('@babel/runtime/helpers/interopRequireDefault')(require('./424')),
  module426 = require('@babel/runtime/helpers/interopRequireDefault')(require('./426')),
  module429 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = p(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = o ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(f, c, l);
        else f[c] = t[c];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./429'));

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

Object.keys(module429).forEach(function (n) {
  if ('default' !== n && '__esModule' !== n)
    Object.prototype.hasOwnProperty.call(t, n) ||
      (n in exports && exports[n] === module429[n]) ||
      Object.defineProperty(exports, n, {
        enumerable: true,
        get: function () {
          return module429[n];
        },
      });
});

var v = module423.default,
  y = null,
  O = function () {
    return new module426.default(v);
  };

function b(t) {
  v = Object.assign({}, module423.default, t);

  if (y) {
    y.tearDown();
    y = O();
  }

  if ('ios' === ReactNative.Platform.OS) module424.default.configure(t);
}

function h(t) {
  if (!y) y = O();
  return y.latest(t);
}

function j() {
  if (!y) y = O();
  return y._fetchCurrentState();
}

function w(t) {
  if (!y) y = O();
  y.add(t);
  return function () {
    if (y) y.remove(t);
  };
}

function P(t) {
  if (t) b(t);
  var f = module125.useState({
      type: module429.NetInfoStateType.unknown,
      isConnected: null,
      isInternetReachable: null,
      details: null,
    }),
    o = module25.default(f, 2),
    c = o[0],
    l = o[1];
  module125.useEffect(function () {
    return w(l);
  }, []);
  return c;
}

var _ = {
  configure: b,
  fetch: h,
  refresh: j,
  addEventListener: w,
  useNetInfo: P,
};
exports.default = _;

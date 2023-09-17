c(
  ['\n          ReactNative.NativeModules.', '.', ' did not have a corresponding prop defined\n          in the mock provided to SafeModule.\n        '],
  ['\n          ReactNative.NativeModules.', '.', ' did not have a corresponding prop defined\n          in the mock provided to SafeModule.\n        ']
);

var n,
  t =
    Object.assign ||
    function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];

        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
      }

      return n;
    },
  o = c(['\n      SafeModule.module(...) was invoked without any options parameter.\n    '], ['\n      SafeModule.module(...) was invoked without any options parameter.\n    ']),
  i = c(
    ['\n      SafeModule.module(...) requires a moduleName property to be specified.\n    '],
    ['\n      SafeModule.module(...) requires a moduleName property to be specified.\n    ']
  ),
  u = c(['\n      Missing a "mock" parameter.\n    '], ['\n      Missing a "mock" parameter.\n    ']),
  ReactNative = require('react-native'),
  module746 =
    (n = require('./746')) && n.__esModule
      ? n
      : {
          default: n,
        };

function c(n, t) {
  return Object.freeze(
    Object.defineProperties(n, {
      raw: {
        value: Object.freeze(t),
      },
    })
  );
}

Object.prototype.hasOwnProperty;

var v = {
    addListener: function () {},
    removeListeners: function () {},
  },
  l = function (n, t) {
    for (var o = undefined, i = 0; i < n.length; i++) if ((o = t(n[i]))) return o;

    return null;
  },
  p = function n(t) {
    return t ? (Array.isArray(t) ? l(t, n) : ReactNative.NativeModules[t]) : null;
  },
  h = function n(t) {
    return Array.isArray(t) ? n(t[0]) : t;
  },
  w = function (n, o, i) {
    var u = p(n);
    return u || (i ? t({}, o, v) : o);
  },
  y = function (n) {
    return n.VERSION;
  };

module.exports = function (n) {
  if (!n) throw new Error(module746.default(o));
  var c = n.moduleName,
    v = n.mock,
    l = n.isEventEmitter,
    p = n.versionOverrides,
    M = n.getVersion;
  if ((M || (M = y), !c)) throw new Error(module746.default(i));
  h(c);
  if (!v) throw new Error(module746.default(u));
  var O = {},
    N = w(c, v, l),
    b = M(N);
  if (l) O.emitter = new ReactNative.NativeEventEmitter(N);
  var E = undefined,
    k = undefined;

  if (p) {
    E = p[b];
    k = {};
    if (E)
      Object.keys(E).forEach(function (n) {
        if ('function' == typeof E[n]) k[n] = E[n](N[n], N);
        else k[n] = E[n];
      });
  }

  t(O, v, N, k);
  return O;
};

exports.clearMemo = function () {
  f = {};
};

exports.getSupportedPlatformInfoAsync = s;

exports.getSupportedPlatformInfoFunctions = function (n) {
  var u = n.syncGetter,
    f = module96.default(n, o);
  return [
    function () {
      return s(f);
    },
    function () {
      return l(
        Object.assign({}, f, {
          getter: u,
        })
      );
    },
  ];
};

exports.getSupportedPlatformInfoSync = l;

var module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  ReactNative = require('react-native'),
  o = ['syncGetter'],
  f = {};

function c(t, n, o) {
  var f = {};
  t.filter(function (t) {
    return ReactNative.Platform.OS == t;
  }).forEach(function (t) {
    return (f[t] = n);
  });
  return ReactNative.Platform.select(
    Object.assign({}, f, {
      default: o,
    })
  );
}

function l(t) {
  var n = t.getter,
    u = t.supportedPlatforms,
    o = t.defaultValue,
    l = t.memoKey;
  if (l && undefined != f[l]) return f[l];
  var s = c(u, n, function () {
    return o;
  })();
  if (l) f[l] = s;
  return s;
}

function s(t) {
  return p.apply(this, arguments);
}

function p() {
  return (p = module271.default(function* (t) {
    var n = t.getter,
      u = t.supportedPlatforms,
      o = t.defaultValue,
      l = t.memoKey;
    if (l && undefined != f[l]) return f[l];
    var s = yield c(u, n, function () {
      return Promise.resolve(o);
    })();
    if (l) f[l] = s;
    return s;
  })).apply(this, arguments);
}

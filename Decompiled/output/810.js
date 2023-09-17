exports.default = function (l) {
  var c = l.style,
    p = module96.default(l, f),
    module463 = require('./463').useTheme().colors;

  return module125.createElement(
    ReactNative.View,
    module178.default({}, p, {
      style: [
        {
          flex: 1,
          backgroundColor: module463.background,
        },
        c,
      ],
    })
  );
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./125')),
  ReactNative = require('react-native'),
  f = ['style'];

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

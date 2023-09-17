exports.default = function (f) {
  var c = f.to,
    l = f.action,
    s = module96.default(f, u),
    p = module465.default({
      to: c,
      action: l,
    }),
    P = function (e) {
      if ('onPress' in s) null == s.onPress || s.onPress(e);
      p.onPress(e);
    };

  return module125.createElement(
    ReactNative.Text,
    Object.assign(
      {},
      p,
      s,
      ReactNative.Platform.select({
        web: {
          onClick: P,
        },
        default: {
          onPress: P,
        },
      })
    )
  );
};

var module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = f(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in e)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var l = u ? Object.getOwnPropertyDescriptor(e, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
        else o[c] = e[c];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module465 = require('@babel/runtime/helpers/interopRequireDefault')(require('./465')),
  u = ['to', 'action'];

function f(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (f = function (e) {
    return e ? n : t;
  })(e);
}

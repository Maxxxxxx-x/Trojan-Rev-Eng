exports.default = function () {
  var u = module125.useState(false),
    f = module25.default(u, 2),
    c = f[0],
    l = f[1];
  module125.useEffect(function () {
    var module25,
      n = function () {
        return l(true);
      },
      u = function () {
        return l(false);
      };

    module25 =
      'ios' === ReactNative.Platform.OS
        ? [ReactNative.Keyboard.addListener('keyboardWillShow', n), ReactNative.Keyboard.addListener('keyboardWillHide', u)]
        : [ReactNative.Keyboard.addListener('keyboardDidShow', n), ReactNative.Keyboard.addListener('keyboardDidHide', u)];
    return function () {
      module25.forEach(function (t) {
        return t.remove();
      });
    };
  }, []);
  return c;
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var y = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (y && (y.get || y.set)) Object.defineProperty(f, l, y);
        else f[l] = t[l];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('./125')),
  ReactNative = require('react-native');

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

require('@babel/runtime/helpers/interopRequireDefault')(require('./96'));

(function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var f = n(o);
  if (f && f.has(t)) return f.get(t);
  var u = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (p && (p.get || p.set)) Object.defineProperty(u, l, p);
      else u[l] = t[l];
    }

  u.default = t;
  if (f) f.set(t, u);
})(require('./125'));

var ReactNative = require('react-native');

require('@babel/runtime/helpers/interopRequireDefault')(require('./336'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    f = new WeakMap();
  return (n = function (t) {
    return t ? f : o;
  })(t);
}

var o = ReactNative.View;
exports.default = o;

exports.default = function () {
  var u = module125.useContext(module475.default),
    f = module125.useContext(module476.default);
  if (undefined === f && undefined === u) throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
  return null != f ? f : u;
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
        else f[c] = t[c];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('./125')),
  module475 = require('@babel/runtime/helpers/interopRequireDefault')(require('./475')),
  module476 = require('@babel/runtime/helpers/interopRequireDefault')(require('./476'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

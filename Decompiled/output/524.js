exports.default = function (o) {
  var u = o.state,
    f = o.navigation,
    c = o.descriptors,
    p = module125.useContext(module498.default);
  if (p && f.isFocused()) p.options = c[u.routes[u.index].key].options;
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, p, s);
        else f[p] = t[p];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./125')),
  module498 = require('@babel/runtime/helpers/interopRequireDefault')(require('./498'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var f = l(n);
    if (f && f.has(t)) return f.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, c, p);
        else o[c] = t[c];
      }

    o.default = t;
    if (f) f.set(t, o);
    return o;
  })(require('./125')),
  module805 = require('@babel/runtime/helpers/interopRequireDefault')(require('./805')),
  u = ['edges'];

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    f = new WeakMap();
  return (l = function (t) {
    return t ? f : n;
  })(t);
}

var c = module125.forwardRef(function (l, c) {
  var p = l.edges,
    s = module96.default(l, u);
  return module125.createElement(
    module805.default,
    module178.default({}, s, {
      edges: null != p ? p : ['bottom', 'left', 'right', 'top'],
      ref: c,
    })
  );
});
exports.SafeAreaView = c;

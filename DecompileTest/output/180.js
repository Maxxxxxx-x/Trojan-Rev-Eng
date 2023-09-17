var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module181 = require('@babel/runtime/helpers/interopRequireDefault')(require('./181')),
  module182 = require('@babel/runtime/helpers/interopRequireDefault')(require('./182')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var f = o(n);
    if (f && f.has(t)) return f.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = t[c];
      }

    u.default = t;
    if (f) f.set(t, u);
    return u;
  })(require('./125'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    f = new WeakMap();
  return (o = function (t) {
    return t ? f : n;
  })(t);
}

var l = module125.forwardRef(function (o, l) {
  return module125.createElement(
    module182.default.Provider,
    {
      value: false,
    },
    module125.createElement(
      module181.default,
      module178.default({}, o, {
        ref: l,
      })
    )
  );
});
l.displayName = 'View';
module.exports = l;

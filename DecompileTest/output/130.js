var module131 = require('@babel/runtime/helpers/interopRequireDefault')(require('./131')),
  module132 = require('@babel/runtime/helpers/interopRequireDefault')(require('./132')),
  module139 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
        else f[c] = t[c];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./139'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var f = module131.default({
  supportedCommands: ['focus', 'blur', 'setTextAndSelection'],
});
exports.Commands = f;
var l = Object.assign(
  {
    uiViewClassName: 'RCTSinglelineTextInputView',
  },
  module132.default
);
exports.__INTERNAL_VIEW_CONFIG = l;
var c = module139.get('RCTSinglelineTextInputView', function () {
  return l;
});
exports.default = c;

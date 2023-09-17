exports.default = function (u) {
  var f = u.navigation,
    o = u.focusedListeners,
    l = module125.useContext(module474.default).addListener,
    c = module125.useCallback(
      function (t) {
        if (f.isFocused()) {
          for (var n of o) {
            var u = n(t),
              l = u.handled,
              c = u.result;
            if (l)
              return {
                handled: l,
                result: c,
              };
          }

          return {
            handled: true,
            result: t(f),
          };
        }

        return {
          handled: false,
          result: null,
        };
      },
      [o, f]
    );
  module125.useEffect(
    function () {
      return null == l ? undefined : l('focus', c);
    },
    [l, c]
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var f = u(n);
    if (f && f.has(t)) return f.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, c, s);
        else o[c] = t[c];
      }

    o.default = t;
    if (f) f.set(t, o);
    return o;
  })(require('./125')),
  module474 = require('@babel/runtime/helpers/interopRequireDefault')(require('./474'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    f = new WeakMap();
  return (u = function (t) {
    return t ? f : n;
  })(t);
}

exports.default = function (f) {
  var l = f.getState,
    c = f.getStateListeners,
    s = module125.useContext(module474.default).addKeyedListener,
    p = module125.useContext(module477.default),
    y = p ? p.key : 'root',
    v = module125.useCallback(
      function () {
        var t = l(),
          u = t.routes.map(function (t) {
            var n,
              u = null == (n = c[t.key]) ? undefined : n.call(c);
            return t.state === u
              ? t
              : Object.assign({}, t, {
                  state: u,
                });
          });
        return module521.default(t.routes, u)
          ? t
          : Object.assign({}, t, {
              routes: u,
            });
      },
      [l, c]
    );
  module125.useEffect(
    function () {
      return null == s ? undefined : s('getState', y, v);
    },
    [s, v, y]
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = f(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, c, s);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./125')),
  module521 = require('@babel/runtime/helpers/interopRequireDefault')(require('./521')),
  module474 = require('@babel/runtime/helpers/interopRequireDefault')(require('./474')),
  module477 = require('@babel/runtime/helpers/interopRequireDefault')(require('./477'));

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

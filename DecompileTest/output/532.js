exports.default = function (u) {
  var i = u.router,
    f = u.getState,
    c = u.setState,
    s = u.key,
    l = u.actionListeners,
    v = u.beforeRemoveListeners,
    p = u.routerConfigOptions,
    y = u.emitter,
    b = module125.useContext(module474.default),
    O = b.onAction,
    h = b.onRouteFocus,
    k = b.addListener,
    j = b.onDispatchAction,
    P = module125.useRef(p);
  module125.useEffect(function () {
    P.current = p;
  });
  var w = module125.useCallback(
    function (t) {
      var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : new Set(),
        u = f();
      if (n.has(u.key)) return false;

      if ((n.add(u.key), 'string' != typeof t.target || t.target === u.key)) {
        var p = i.getStateForAction(u, t, P.current);

        if (null !== (p = null === p && t.target === u.key ? u : p)) {
          if ((j(t, u === p), u !== p)) {
            var b = module533.shouldPreventRemove(y, v, u.routes, p.routes, t);
            if (b) return true;
            c(p);
          }

          if (undefined !== h) {
            var k = i.shouldActionChangeFocus(t);
            if (k && undefined !== s) h(s);
          }

          return true;
        }
      }

      if (undefined !== O && O(t, n)) return true;

      for (var w = l.length - 1; w >= 0; w--) {
        var _ = l[w];
        if (_(t, n)) return true;
      }

      return false;
    },
    [l, v, y, f, s, O, j, h, i, c]
  );
  module533.default({
    getState: f,
    emitter: y,
    beforeRemoveListeners: v,
  });
  module125.useEffect(
    function () {
      return null == k ? undefined : k('action', w);
    },
    [k, w]
  );
  return w;
};

var module125 = i(require('./125')),
  module474 = require('@babel/runtime/helpers/interopRequireDefault')(require('./474')),
  module533 = i(require('./533'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

function i(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = u(n);
  if (o && o.has(t)) return o.get(t);
  var i = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(i, c, s);
      else i[c] = t[c];
    }

  i.default = t;
  if (o) o.set(t, i);
  return i;
}

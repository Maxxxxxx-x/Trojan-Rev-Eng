exports.default = function (t) {
  var f = t.getState,
    l = t.emitter,
    v = t.beforeRemoveListeners,
    s = module125.useContext(module474.default).addKeyedListener,
    y = module125.useContext(module477.default),
    p = null == y ? undefined : y.key;
  module125.useEffect(
    function () {
      if (p)
        return null == s
          ? undefined
          : s('beforeRemove', p, function (t) {
              var n = f();
              return c(l, v, n.routes, [], t);
            });
    },
    [s, v, l, f, p]
  );
};

var module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module125 = (function (t, n) {
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
        var v = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (v && (v.get || v.set)) Object.defineProperty(o, c, v);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./125')),
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

var l = Symbol('VISITED_ROUTE_KEYS'),
  c = function (n, u, o, f, c) {
    var v,
      s = f.map(function (t) {
        return t.key;
      }),
      y = o
        .filter(function (t) {
          return !s.includes(t.key);
        })
        .reverse(),
      p = null != (v = c[l]) ? v : new Set(),
      b = Object.assign({}, c, module241.default({}, l, p));

    for (var O of y) {
      var k;

      if (!p.has(O.key)) {
        if (null == (k = u[O.key]) ? undefined : k.call(u, b)) return true;
        if (
          (p.add(O.key),
          n.emit({
            type: 'beforeRemove',
            target: O.key,
            data: {
              action: b,
            },
            canPreventDefault: true,
          }).defaultPrevented)
        )
          return true;
      }
    }

    return false;
  };

exports.shouldPreventRemove = c;

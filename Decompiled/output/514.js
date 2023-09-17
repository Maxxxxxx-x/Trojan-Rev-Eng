exports.default = function (c) {
  var s = c.children,
    module489 = module125.useState(function () {
      return require('./489').nanoid();
    }),
    w = module25.default(module489, 1)[0],
    k = module125.useState(new Map()),
    O = module25.default(k, 2),
    P = O[0],
    R = O[1],
    M = module125.useContext(module512.default),
    b = module125.useContext(module477.default),
    j = module125.useContext(module513.default),
    h = null == j ? undefined : j.setPreventRemove,
    _ = module515.default(function (t, n, u) {
      if (
        u &&
        (null == M ||
          (null != M &&
            M.getState().routes.every(function (t) {
              return t.key !== n;
            })))
      )
        throw new Error("Couldn't find a route with the key " + n + '. Is your component inside NavigationContent?');
      R(function (o) {
        var f, l;
        if (n === (null == (f = o.get(t)) ? undefined : f.routeKey) && u === (null == (l = o.get(t)) ? undefined : l.preventRemove)) return o;
        var v = new Map(o);
        if (u)
          v.set(t, {
            routeKey: n,
            preventRemove: u,
          });
        else v.delete(t);
        return v;
      });
    }),
    C = module36.default(P.values()).some(function (t) {
      var n = t.preventRemove;
      return n;
    });

  module125.useEffect(
    function () {
      if (undefined !== (null == b ? undefined : b.key) && undefined !== h) {
        h(w, b.key, C);
        return function () {
          h(w, b.key, false);
        };
      }
    },
    [w, C, null == b ? undefined : b.key, h]
  );
  var x = module125.useMemo(
    function () {
      return {
        setPreventRemove: _,
        preventedRoutes: p(P),
      };
    },
    [_, P]
  );
  return module125.createElement(
    module513.default.Provider,
    {
      value: x,
    },
    s
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = c(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var v = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (v && (v.get || v.set)) Object.defineProperty(o, l, v);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./125')),
  module515 = require('@babel/runtime/helpers/interopRequireDefault')(require('./515')),
  module512 = require('@babel/runtime/helpers/interopRequireDefault')(require('./512')),
  module477 = require('@babel/runtime/helpers/interopRequireDefault')(require('./477')),
  module513 = require('@babel/runtime/helpers/interopRequireDefault')(require('./513'));

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (c = function (t) {
    return t ? u : n;
  })(t);
}

var p = function (t) {
  return module36.default(t.values()).reduce(function (t, n) {
    var u,
      o = n.routeKey,
      f = n.preventRemove;
    t[o] = {
      preventRemove: (null == (u = t[o]) ? undefined : u.preventRemove) || f,
    };
    return t;
  }, {});
};

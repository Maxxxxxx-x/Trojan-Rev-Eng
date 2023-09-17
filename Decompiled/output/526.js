exports.default = function (c) {
  var f = c.screen,
    l = c.route,
    s = c.navigation,
    p = c.routeState,
    v = c.getState,
    y = c.setState,
    k = c.options,
    b = c.clearOptions,
    O = module125.useRef(),
    j = module125.useCallback(function () {
      return O.current;
    }, []),
    C = module483.default({
      key: l.key,
      options: k,
      navigation: s,
    }).addOptionsGetter,
    P = module125.useCallback(function (t) {
      O.current = t;
    }, []),
    E = module125.useCallback(
      function () {
        var t = v(),
          n = t.routes.find(function (t) {
            return t.key === l.key;
          });
        return n ? n.state : undefined;
      },
      [v, l.key]
    ),
    M = module125.useCallback(
      function (t) {
        var n = v();
        y(
          Object.assign({}, n, {
            routes: n.routes.map(function (n) {
              return n.key === l.key
                ? Object.assign({}, n, {
                    state: t,
                  })
                : n;
            }),
          })
        );
      },
      [v, l.key, y]
    ),
    _ = module125.useRef(true);

  module125.useEffect(function () {
    _.current = false;
  });
  module125.useEffect(function () {
    return b;
  }, []);
  var h = module125.useCallback(function () {
      return _.current;
    }, []),
    w = module125.useMemo(
      function () {
        return {
          state: p,
          getState: E,
          setState: M,
          getKey: j,
          setKey: P,
          getIsInitial: h,
          addOptionsGetter: C,
        };
      },
      [p, E, M, j, P, h, C]
    ),
    S = f.getComponent ? f.getComponent() : f.component;
  return module125.createElement(
    module478.default.Provider,
    {
      value: w,
    },
    module125.createElement(
      module472.default,
      null,
      module125.createElement(
        module527.default,
        {
          name: f.name,
          render: S || f.children,
          navigation: s,
          route: l,
        },
        undefined !== S
          ? module125.createElement(S, {
              navigation: s,
              route: l,
            })
          : undefined !== f.children
          ? f.children({
              navigation: s,
              route: l,
            })
          : null
      )
    )
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var r = c(n);
    if (r && r.has(t)) return r.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, f, l);
        else u[f] = t[f];
      }

    u.default = t;
    if (r) r.set(t, u);
    return u;
  })(require('./125')),
  module472 = require('@babel/runtime/helpers/interopRequireDefault')(require('./472')),
  module478 = require('@babel/runtime/helpers/interopRequireDefault')(require('./478')),
  module527 = require('@babel/runtime/helpers/interopRequireDefault')(require('./527')),
  module483 = require('@babel/runtime/helpers/interopRequireDefault')(require('./483'));

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    r = new WeakMap();
  return (c = function (t) {
    return t ? r : n;
  })(t);
}

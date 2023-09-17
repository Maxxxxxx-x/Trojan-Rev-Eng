exports.__esModule = true;

require('@babel/runtime/helpers/interopRequireDefault')(require('./578'));

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module97 = require('@babel/runtime/helpers/interopRequireDefault')(require('./97')),
  module573 = require('@babel/runtime/helpers/interopRequireDefault')(require('./573')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = f(t);
    if (n && n.has(e)) return n.get(e);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var a in e)
      if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
        var c = o ? Object.getOwnPropertyDescriptor(e, a) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, a, c);
        else u[a] = e[a];
      }

    u.default = e;
    if (n) n.set(e, u);
    return u;
  })(require('./125')),
  module576 = require('@babel/runtime/helpers/interopRequireDefault')(require('./576')),
  module579 = require('@babel/runtime/helpers/interopRequireDefault')(require('./579')),
  c = ['reactReduxForwardedRef'];

function f(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (f = function (e) {
    return e ? n : t;
  })(e);
}

var module567 = require('./567').notInitialized;

exports.initializeConnect = function (e) {
  module567 = e;
};

var l = [null, null];

function p(e, t, n, u, o, a) {
  e.current = u;
  n.current = false;

  if (o.current) {
    o.current = null;
    a();
  }
}

function v(e, t, n, u, o, a, c, f, s, l, p) {
  if (!e) return function () {};

  var v = false,
    y = null,
    h = function () {
      if (!v && f.current) {
        var e,
          n,
          h = t.getState();

        try {
          e = u(h, o.current);
        } catch (e) {
          n = e;
          y = e;
        }

        if (!n) y = null;
        if (e === a.current) {
          if (!c.current) l();
        } else {
          a.current = e;
          s.current = e;
          c.current = true;
          p();
        }
      }
    };

  n.onStateChange = h;
  n.trySubscribe();
  h();
  return function () {
    if (((v = true), n.tryUnsubscribe(), (n.onStateChange = null), y)) throw y;
  };
}

function y(e, t) {
  return e === t;
}

var module571 = function (f, module571, M) {
  var P = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {},
    S = P.areStatesEqual,
    C = undefined === S ? y : S,
    R = P.areOwnPropsEqual,
    b = undefined === R ? module579.default : R,
    w = P.areStatePropsEqual,
    E = undefined === w ? module579.default : w,
    O = P.areMergedPropsEqual,
    x = undefined === O ? module579.default : O,
    q = P.forwardRef,
    N = undefined !== q && q,
    j = P.context,
    module562 = undefined === j ? require('./562').ReactReduxContext : j,
    module580 = require('./580').mapStateToPropsFactory(f),
    module585 = require('./585').mapDispatchToPropsFactory(module571),
    module587 = require('./587').mergePropsFactory(M),
    T = Boolean(f);

  return function (a) {
    var f = a.displayName || a.name || 'Component',
      y = 'Connect(' + f + ')',
      module571 = {
        shouldHandleStateChanges: T,
        displayName: y,
        wrappedComponentName: f,
        WrappedComponent: a,
        initMapStateToProps: module580,
        initMapDispatchToProps: module585,
        initMergeProps: module587,
        areStatesEqual: C,
        areStatePropsEqual: E,
        areOwnPropsEqual: b,
        areMergedPropsEqual: x,
      };

    function M(n) {
      module125.useRef(false);

      var f = module125.useMemo(
          function () {
            var e = n.reactReduxForwardedRef,
              u = module97.default(n, c);
            return [n.context, e, u];
          },
          [n]
        ),
        module25 = require('./25')(f, 3),
        M = module25[0],
        P = module25[1],
        S = module25[2],
        module589 = module125.useMemo(
          function () {
            return M && M.Consumer && require('./589').isContextConsumer(module125.default.createElement(M.Consumer, null)) ? M : module562;
          },
          [M, module562]
        ),
        R = module125.useContext(module589),
        b = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch),
        w = Boolean(R) && Boolean(R.store),
        E = b ? n.store : R.store,
        O = w ? R.getServerState : E.getState,
        x = module125.useMemo(
          function () {
            return module576.default(E.dispatch, module571);
          },
          [E]
        ),
        q = module125.useMemo(
          function () {
            if (!T) return l;

            var module569 = require('./569').createSubscription(E, b ? undefined : R.subscription);

            return [module569, module569.notifyNestedSubs.bind(module569)];
          },
          [E, b, R]
        ),
        module25 = require('./25')(q, 2),
        j = module25[0],
        F = module25[1],
        W = module125.useMemo(
          function () {
            return b
              ? R
              : module178.default({}, R, {
                  subscription: j,
                });
          },
          [b, R, j]
        ),
        _ = module125.useRef(),
        k = module125.useRef(S),
        D = module125.useRef(),
        I = module125.useRef(false),
        z = module125.useRef(false),
        L = module125.useRef();

      require('./571').useIsomorphicLayoutEffect(function () {
        z.current = true;
        return function () {
          z.current = false;
        };
      }, []);

      var H,
        U,
        A,
        G,
        J = module125.useMemo(
          function () {
            return function () {
              return D.current && S === k.current ? D.current : x(E.getState(), S);
            };
          },
          [E, S]
        ),
        K = module125.useMemo(
          function () {
            return function (e) {
              return j ? v(T, E, j, x, k, _, I, z, D, F, e) : function () {};
            };
          },
          [j]
        );
      H = p;
      U = [k, _, I, S, D, F];

      require('./571').useIsomorphicLayoutEffect(function () {
        return H.apply(undefined, require('./36')(U));
      }, A);

      try {
        G = module567(
          K,
          J,
          O
            ? function () {
                return x(O(), S);
              }
            : J
        );
      } catch (e) {
        throw (L.current && (e.message += '\nThe error may be correlated with this previous error:\n' + L.current.stack + '\n\n'), e);
      }

      require('./571').useIsomorphicLayoutEffect(function () {
        L.current = undefined;
        D.current = undefined;
        _.current = G;
      });

      var Q = module125.useMemo(
        function () {
          return module125.default.createElement(
            a,
            module178.default({}, G, {
              ref: P,
            })
          );
        },
        [P, a, G]
      );
      return module125.useMemo(
        function () {
          return T
            ? module125.default.createElement(
                module589.Provider,
                {
                  value: W,
                },
                Q
              )
            : Q;
        },
        [module589, Q, W]
      );
    }

    var P = module125.default.memo(M);

    if (((P.WrappedComponent = a), (P.displayName = M.displayName = y), N)) {
      var S = module125.default.forwardRef(function (t, n) {
        return module125.default.createElement(
          P,
          module178.default({}, t, {
            reactReduxForwardedRef: n,
          })
        );
      });
      S.displayName = y;
      S.WrappedComponent = a;
      return module573.default(S, a);
    }

    return module573.default(P, a);
  };
};

exports.default = module571;

exports.default = function (u, y) {
  var G = module536.default(),
    A = module125.useContext(module477.default),
    _ = y.children,
    F = y.screenListeners,
    x = module96.default(y, R),
    J = module125.useRef(
      u(
        Object.assign(
          {},
          x,
          null != A && A.params && null == A.params.state && false !== A.params.initial && 'string' == typeof A.params.screen
            ? {
                initialRouteName: A.params.screen,
              }
            : null
        )
      )
    ).current,
    V = M(_),
    W = V.reduce(function (e, t) {
      if (t.props.name in e) throw new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + t.props.name + "')");
      e[t.props.name] = t;
      return e;
    }, {}),
    D = V.map(function (e) {
      return e.props.name;
    }),
    T = D.reduce(function (e, t) {
      e[t] = W[t].keys
        .map(function (e) {
          return null != e ? e : '';
        })
        .join(':');
      return e;
    }, {}),
    H = D.reduce(function (e, t) {
      var n = W[t].props.initialParams;
      e[t] = n;
      return e;
    }, {}),
    q = D.reduce(function (e, n) {
      return Object.assign(e, module241.default({}, n, W[n].props.getId));
    }, {});
  if (!D.length) throw new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
  var z = module125.useCallback(
      function (e) {
        return undefined === e.type || e.type === J.type;
      },
      [J.type]
    ),
    B = module125.useCallback(
      function (e) {
        return undefined !== e && false === e.stale && z(e);
      },
      [z]
    ),
    Q = module125.useContext(module478.default),
    U = Q.state,
    X = Q.getState,
    Y = Q.setState,
    Z = Q.setKey,
    $ = Q.getKey,
    ee = Q.getIsInitial,
    te = module125.useRef(false),
    ne = module125.useCallback(
      function () {
        Y(undefined);
        te.current = true;
      },
      [Y]
    ),
    re = module125.useCallback(
      function (e) {
        if (!te.current) Y(e);
      },
      [Y]
    ),
    ae = module125.useMemo(
      function () {
        var e,
          t,
          n,
          o = D.reduce(function (e, t) {
            var n,
              o,
              i,
              u = W[t].props.initialParams,
              s =
                null == (null == A ? undefined : null == (n = A.params) ? undefined : n.state) &&
                false !== (null == A ? undefined : null == (o = A.params) ? undefined : o.initial) &&
                (null == A ? undefined : null == (i = A.params) ? undefined : i.screen) === t
                  ? A.params.params
                  : undefined;
            e[t] = undefined !== u || undefined !== s ? Object.assign({}, u, s) : undefined;
            return e;
          }, {});
        return (undefined !== U && z(U)) || null != (null == A ? undefined : null == (e = A.params) ? undefined : e.state)
          ? [
              J.getRehydratedState(null != (t = null == A ? undefined : null == (n = A.params) ? undefined : n.state) ? t : U, {
                routeNames: D,
                routeParamList: o,
                routeGetIdList: q,
              }),
              false,
            ]
          : [
              J.getInitialState({
                routeNames: D,
                routeParamList: o,
                routeGetIdList: q,
              }),
              true,
            ];
      },
      [U, J, z]
    ),
    oe = module25.default(ae, 2),
    ie = oe[0],
    ue = oe[1],
    se = module125.useRef(T);
  module125.useEffect(function () {
    se.current = T;
  });
  var le = se.current,
    pe = B(U) ? U : ie,
    fe = pe;
  if (!(module521.default(pe.routeNames, D) && module522.default(T, le)))
    fe = J.getStateForRouteNamesChange(pe, {
      routeNames: D,
      routeParamList: H,
      routeGetIdList: q,
      routeKeyChanges: Object.keys(T).filter(function (e) {
        return le.hasOwnProperty(e) && T[e] !== le[e];
      }),
    });
  var ce = module125.useRef(null == A ? undefined : A.params);

  if (
    (module125.useEffect(
      function () {
        ce.current = null == A ? undefined : A.params;
      },
      [null == A ? undefined : A.params]
    ),
    null != A && A.params)
  ) {
    var de,
      me = ce.current;
    if ('object' == typeof A.params.state && null != A.params.state && A.params !== me) de = require('./486').CommonActions.reset(A.params.state);
    else if ('string' == typeof A.params.screen && ((false === A.params.initial && ue) || A.params !== me))
      de = require('./486').CommonActions.navigate({
        name: A.params.screen,
        params: A.params.params,
        path: A.params.path,
      });
    var ve = de
      ? J.getStateForAction(fe, de, {
          routeNames: D,
          routeParamList: H,
          routeGetIdList: q,
        })
      : null;
    fe =
      null !== ve
        ? J.getRehydratedState(ve, {
            routeNames: D,
            routeParamList: H,
            routeGetIdList: q,
          })
        : fe;
  }

  var ye = pe !== fe;
  module494.default(function () {
    if (ye) re(fe);
  });
  pe = fe;
  module125.useEffect(function () {
    Z(G);
    if (!ee()) re(fe);
    return function () {
      setTimeout(function () {
        if (undefined !== X() && $() === G) ne();
      }, 0);
    };
  }, []);
  var ge = module125.useRef();
  ge.current = ie;
  var he = module125.useCallback(
      function () {
        var e = X();
        return B(e) ? e : ge.current;
      },
      [X, B]
    ),
    Oe = module481.default(function (e) {
      var t,
        n,
        i,
        u = [];

      if (e.target) {
        n = pe.routes.find(function (t) {
          return t.key === e.target;
        });
        if (null != (i = n) && i.name) u.push(n.name);
      } else {
        n = pe.routes[pe.index];
        u.push.apply(
          u,
          module36.default(
            Object.keys(W).filter(function (e) {
              var t;
              return (null == (t = n) ? undefined : t.name) === e;
            })
          )
        );
      }

      if (null != n) {
        var s = Ie[n.key].navigation,
          l = (t = []).concat
            .apply(
              t,
              module36.default(
                [F]
                  .concat(
                    module36.default(
                      u.map(function (e) {
                        var t = W[e].props.listeners;
                        return t;
                      })
                    )
                  )
                  .map(function (t) {
                    var o =
                      'function' == typeof t
                        ? t({
                            route: n,
                            navigation: s,
                          })
                        : t;
                    return o
                      ? Object.keys(o)
                          .filter(function (t) {
                            return t === e.type;
                          })
                          .map(function (e) {
                            return null == o ? undefined : o[e];
                          })
                      : undefined;
                  })
              )
            )
            .filter(function (e, t, n) {
              return e && n.lastIndexOf(e) === t;
            });
        l.forEach(function (t) {
          return null == t ? undefined : t(e);
        });
      }
    });
  module530.default({
    state: pe,
    emitter: Oe,
  });
  module125.useEffect(
    function () {
      Oe.emit({
        type: 'state',
        data: {
          state: pe,
        },
      });
    },
    [Oe, pe]
  );
  var Se = module480.default(),
    be = Se.listeners,
    Le = Se.addListener,
    ke = module482.default(),
    we = ke.keyedListeners,
    Pe = ke.addKeyedListener,
    je = module532.default({
      router: J,
      getState: he,
      setState: re,
      key: null == A ? undefined : A.key,
      actionListeners: be.action,
      beforeRemoveListeners: we.beforeRemove,
      routerConfigOptions: {
        routeNames: D,
        routeParamList: H,
        routeGetIdList: q,
      },
      emitter: Oe,
    }),
    Ce = module535.default({
      router: J,
      key: null == A ? undefined : A.key,
      getState: he,
      setState: re,
    }),
    Ee = module531.default({
      id: y.id,
      onAction: je,
      getState: he,
      emitter: Oe,
      router: J,
    });
  module529.default({
    navigation: Ee,
    focusedListeners: be.focus,
  });
  module534.default({
    getState: he,
    getStateListeners: we.getState,
  });
  var Ie = module525.default({
    state: pe,
    screens: W,
    navigation: Ee,
    screenOptions: y.screenOptions,
    defaultScreenOptions: y.defaultScreenOptions,
    onAction: je,
    getState: he,
    setState: re,
    onRouteFocus: Ce,
    addListener: Le,
    addKeyedListener: Pe,
    router: J,
    emitter: Oe,
  });
  module524.default({
    state: pe,
    navigation: Ee,
    descriptors: Ie,
  });
  var Ke = module523.default(function (e) {
    return module125.createElement(
      module512.default.Provider,
      {
        value: Ee,
      },
      module125.createElement(module514.default, null, e)
    );
  });
  return {
    state: pe,
    navigation: Ee,
    descriptors: Ie,
    NavigationContent: Ke,
  };
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = G(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in e)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var s = i ? Object.getOwnPropertyDescriptor(e, u) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, u, s);
        else o[u] = e[u];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  module496 = require('@babel/runtime/helpers/interopRequireDefault')(require('./496')),
  module521 = require('@babel/runtime/helpers/interopRequireDefault')(require('./521')),
  module522 = require('@babel/runtime/helpers/interopRequireDefault')(require('./522')),
  module512 = require('@babel/runtime/helpers/interopRequireDefault')(require('./512')),
  module477 = require('@babel/runtime/helpers/interopRequireDefault')(require('./477')),
  module478 = require('@babel/runtime/helpers/interopRequireDefault')(require('./478')),
  module514 = require('@babel/runtime/helpers/interopRequireDefault')(require('./514')),
  module497 = require('@babel/runtime/helpers/interopRequireDefault')(require('./497')),
  module480 = require('@babel/runtime/helpers/interopRequireDefault')(require('./480')),
  module523 = require('@babel/runtime/helpers/interopRequireDefault')(require('./523')),
  module524 = require('@babel/runtime/helpers/interopRequireDefault')(require('./524')),
  module525 = require('@babel/runtime/helpers/interopRequireDefault')(require('./525')),
  module481 = require('@babel/runtime/helpers/interopRequireDefault')(require('./481')),
  module529 = require('@babel/runtime/helpers/interopRequireDefault')(require('./529')),
  module530 = require('@babel/runtime/helpers/interopRequireDefault')(require('./530')),
  module482 = require('@babel/runtime/helpers/interopRequireDefault')(require('./482')),
  module531 = require('@babel/runtime/helpers/interopRequireDefault')(require('./531')),
  module532 = require('@babel/runtime/helpers/interopRequireDefault')(require('./532')),
  module534 = require('@babel/runtime/helpers/interopRequireDefault')(require('./534')),
  module535 = require('@babel/runtime/helpers/interopRequireDefault')(require('./535')),
  module536 = require('@babel/runtime/helpers/interopRequireDefault')(require('./536')),
  module494 = require('@babel/runtime/helpers/interopRequireDefault')(require('./494')),
  R = ['children', 'screenListeners'];

function G(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (G = function (e) {
    return e ? n : t;
  })(e);
}

require('./516').PrivateValueStore;

var A = function (e) {
    return undefined === e || ('string' == typeof e && '' !== e);
  },
  M = function e(t, n, s) {
    return module125.Children.toArray(t).reduce(function (t, l) {
      var p, f;

      if (module125.isValidElement(l)) {
        if (l.type === module497.default) {
          if (!A(l.props.navigationKey))
            throw new Error(
              "Got an invalid 'navigationKey' prop (" +
                JSON.stringify(l.props.navigationKey) +
                ") for the screen '" +
                l.props.name +
                "'. It must be a non-empty string or 'undefined'."
            );
          t.push({
            keys: [n, l.props.navigationKey],
            options: s,
            props: l.props,
          });
          return t;
        }

        if (l.type === module125.Fragment || l.type === module496.default) {
          if (!A(l.props.navigationKey))
            throw new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(l.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
          t.push.apply(
            t,
            module36.default(
              e(
                l.props.children,
                l.props.navigationKey,
                l.type !== module496.default ? s : null != s ? [].concat(module36.default(s), [l.props.screenOptions]) : [l.props.screenOptions]
              )
            )
          );
          return t;
        }
      }

      throw new Error(
        "A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " +
          (module125.isValidElement(l)
            ? "'" +
              ('string' == typeof l.type ? l.type : null == (p = l.type) ? undefined : p.name) +
              "'" +
              (null != (f = l.props) && f.name ? " for the screen '" + l.props.name + "'" : '')
            : 'object' == typeof l
            ? JSON.stringify(l)
            : "'" + String(l) + "'") +
          "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'."
      );
    }, []);
  };

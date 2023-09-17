require('@babel/runtime/helpers/interopRequireDefault')(require('./470'));

require('@babel/runtime/helpers/interopRequireDefault')(require('./471'));

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = E(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, l, s);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./125')),
  module472 = require('@babel/runtime/helpers/interopRequireDefault')(require('./472')),
  module473 = require('@babel/runtime/helpers/interopRequireDefault')(require('./473')),
  module474 = require('@babel/runtime/helpers/interopRequireDefault')(require('./474')),
  module475 = require('@babel/runtime/helpers/interopRequireDefault')(require('./475')),
  module476 = require('@babel/runtime/helpers/interopRequireDefault')(require('./476')),
  module477 = require('@babel/runtime/helpers/interopRequireDefault')(require('./477')),
  module478 = require('@babel/runtime/helpers/interopRequireDefault')(require('./478')),
  module479 = require('@babel/runtime/helpers/interopRequireDefault')(require('./479')),
  module480 = require('@babel/runtime/helpers/interopRequireDefault')(require('./480')),
  module481 = require('@babel/runtime/helpers/interopRequireDefault')(require('./481')),
  module482 = require('@babel/runtime/helpers/interopRequireDefault')(require('./482')),
  module483 = require('@babel/runtime/helpers/interopRequireDefault')(require('./483')),
  module484 = require('@babel/runtime/helpers/interopRequireDefault')(require('./484')),
  R = ['key', 'routeNames'];

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (E = function (t) {
    return t ? u : n;
  })(t);
}

var _ = function t(u) {
    if (undefined !== u) {
      var o = module96.default(u, R);
      return Object.assign({}, o, {
        stale: true,
        routes: u.routes.map(function (n) {
          return undefined === n.state
            ? n
            : Object.assign({}, n, {
                state: t(n.state),
              });
        }),
      });
    }
  },
  P = module125.forwardRef(function (n, R) {
    var E = n.initialState,
      P = n.onStateChange,
      w = n.onUnhandledAction,
      S = n.independent,
      j = n.children;
    if (!module125.useContext(module478.default).isDefault && !S)
      throw new Error(
        "Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them."
      );
    var I = module484.default(function () {
        return _(null == E ? undefined : E);
      }),
      M = module25.default(I, 5),
      N = M[0],
      A = M[1],
      L = M[2],
      D = M[3],
      G = M[4],
      K = module125.useRef(true),
      T = module125.useRef(),
      U = module125.useCallback(function () {
        return T.current;
      }, []),
      x = module125.useCallback(function (t) {
        T.current = t;
      }, []),
      W = module480.default(),
      B = W.listeners,
      Z = W.addListener,
      F = module482.default(),
      H = F.keyedListeners,
      q = F.addKeyedListener,
      module486 = module125.useCallback(
        function (t) {
          if (null == B.focus[0]) console.error(require('./485').NOT_INITIALIZED_ERROR);
          else
            B.focus[0](function (n) {
              return n.dispatch(t);
            });
        },
        [B.focus]
      ),
      J = module125.useCallback(
        function () {
          if (null == B.focus[0]) return false;
          var t = B.focus[0](function (t) {
              return t.canGoBack();
            }),
            n = t.result;
          return !!t.handled && n;
        },
        [B.focus]
      ),
      module486 = module125.useCallback(
        function (t) {
          var n,
            u = null != (n = null == t ? undefined : t.key) ? n : null == H.getState.root ? undefined : H.getState.root().key;
          if (null == u) console.error(require('./485').NOT_INITIALIZED_ERROR);
          else
            B.focus[0](function (n) {
              return n.dispatch(
                Object.assign({}, require('./486').CommonActions.reset(t), {
                  target: u,
                })
              );
            });
        },
        [H.getState, B.focus]
      ),
      V = module125.useCallback(
        function () {
          return null == H.getState.root ? undefined : H.getState.root();
        },
        [H.getState]
      ),
      X = module125.useCallback(
        function () {
          var t = V();
          if (null != t) return module473.default(t);
        },
        [V]
      ),
      Y = module481.default(),
      $ = module483.default({}),
      ee = $.addOptionsGetter,
      te = $.getCurrentOptions,
      module486 = module125.useMemo(
        function () {
          return Object.assign(
            {},
            Object.keys(require('./486').CommonActions).reduce(function (t, n) {
              t[n] = function () {
                return module486(require('./486').CommonActions[n].apply(require('./486').CommonActions, arguments));
              };

              return t;
            }, {}),
            Y.create('root'),
            {
              dispatch: module486,
              resetRoot: module486,
              isFocused: function () {
                return true;
              },
              canGoBack: J,
              getParent: function () {},
              getState: function () {
                return pe.current;
              },
              getRootState: V,
              getCurrentRoute: X,
              getCurrentOptions: te,
              isReady: function () {
                return null != B.focus[0];
              },
            }
          );
        },
        [J, module486, Y, te, X, V, B.focus, module486]
      );
    module125.useImperativeHandle(
      R,
      function () {
        return module486;
      },
      [module486]
    );
    var re = module125.useCallback(
        function (t, n) {
          Y.emit({
            type: '__unsafe_action__',
            data: {
              action: t,
              noop: n,
              stack: oe.current,
            },
          });
        },
        [Y]
      ),
      ue = module125.useRef(),
      ae = module125.useCallback(
        function (t) {
          if (ue.current !== t) {
            ue.current = t;
            Y.emit({
              type: 'options',
              data: {
                options: t,
              },
            });
          }
        },
        [Y]
      ),
      oe = module125.useRef(),
      ie = module125.useMemo(
        function () {
          return {
            addListener: Z,
            addKeyedListener: q,
            onDispatchAction: re,
            onOptionsChange: ae,
            stackRef: oe,
          };
        },
        [Z, q, re, ae]
      ),
      ce = module125.useMemo(
        function () {
          return {
            scheduleUpdate: D,
            flushUpdates: G,
          };
        },
        [D, G]
      ),
      le = module125.useRef(true),
      se = module125.useCallback(function () {
        return le.current;
      }, []),
      fe = module125.useMemo(
        function () {
          return {
            state: N,
            getState: A,
            setState: L,
            getKey: U,
            setKey: x,
            getIsInitial: se,
            addOptionsGetter: ee,
          };
        },
        [N, A, L, U, x, se, ee]
      ),
      de = module125.useRef(P),
      pe = module125.useRef(N);
    module125.useEffect(function () {
      le.current = false;
      de.current = P;
      pe.current = N;
    });
    module125.useEffect(
      function () {
        var t = V();
        Y.emit({
          type: 'state',
          data: {
            state: N,
          },
        });
        if (!K.current && de.current) de.current(t);
        K.current = false;
      },
      [V, Y, N]
    );
    var ve = module125.useCallback(function (t) {}, []),
      module494 = module125.createElement(
        module475.default.Provider,
        {
          value: module486,
        },
        module125.createElement(
          require('./494').ScheduleUpdateContext.Provider,
          {
            value: ce,
          },
          module125.createElement(
            module474.default.Provider,
            {
              value: ie,
            },
            module125.createElement(
              module478.default.Provider,
              {
                value: fe,
              },
              module125.createElement(
                module479.default.Provider,
                {
                  value: null != w ? w : ve,
                },
                module125.createElement(module472.default, null, j)
              )
            )
          )
        )
      );
    if (S)
      module494 = module125.createElement(
        module477.default.Provider,
        {
          value: undefined,
        },
        module125.createElement(
          module476.default.Provider,
          {
            value: undefined,
          },
          module494
        )
      );
    return module494;
  });

exports.default = P;

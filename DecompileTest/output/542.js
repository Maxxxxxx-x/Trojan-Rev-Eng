var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = b(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('./125')),
  module466 = require('@babel/runtime/helpers/interopRequireDefault')(require('./466')),
  module543 = require('@babel/runtime/helpers/interopRequireDefault')(require('./543')),
  module544 = require('@babel/runtime/helpers/interopRequireDefault')(require('./544')),
  module546 = require('@babel/runtime/helpers/interopRequireDefault')(require('./546')),
  module547 = require('@babel/runtime/helpers/interopRequireDefault')(require('./547')),
  module548 = require('@babel/runtime/helpers/interopRequireDefault')(require('./548')),
  module550 = require('@babel/runtime/helpers/interopRequireDefault')(require('./550')),
  S = ['theme', 'linking', 'fallback', 'documentTitle', 'onReady'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (b = function (t) {
    return t ? l : n;
  })(t);
}

globals.REACT_NAVIGATION_DEVTOOLS = new WeakMap();
var module468 = module125.forwardRef(function (b, module468) {
  var y = b.theme,
    h = undefined === y ? module543.default : y,
    E = b.linking,
    _ = b.fallback,
    j = undefined === _ ? null : _,
    k = b.documentTitle,
    A = b.onReady,
    F = module96.default(b, S),
    T = !!E && false !== E.enabled;
  if (null != E && E.config) require('./468').validatePathConfig(E.config);
  var w = module125.useRef(null);
  module546.default(w);
  module547.default(w, k);
  var M = module548.default(
    w,
    Object.assign(
      {
        independent: F.independent,
        enabled: T,
        prefixes: [],
      },
      E
    )
  ).getInitialState;
  module125.useEffect(function () {
    if (w.current)
      REACT_NAVIGATION_DEVTOOLS.set(w.current, {
        get linking() {
          var t, n, l, u;
          return Object.assign({}, E, {
            enabled: T,
            prefixes: null != (t = null == E ? undefined : E.prefixes) ? t : [],
            getStateFromPath: null != (n = null == E ? undefined : E.getStateFromPath) ? n : require('./468').getStateFromPath,
            getPathFromState: null != (l = null == E ? undefined : E.getPathFromState) ? l : require('./468').getPathFromState,
            getActionFromState: null != (u = null == E ? undefined : E.getActionFromState) ? u : require('./468').getActionFromState,
          });
        },
      });
  });
  var R = module550.default(M),
    I = module25.default(R, 2),
    N = I[0],
    C = I[1];
  module125.useImperativeHandle(module468, function () {
    return w.current;
  });
  var D = module125.useMemo(
      function () {
        return {
          options: E,
        };
      },
      [E]
    ),
    V = null != F.initialState || !T || N,
    W = module125.useRef(A);
  module125.useEffect(function () {
    W.current = A;
  });
  module125.useEffect(
    function () {
      if (V) null == W.current || W.current();
    },
    [V]
  );
  return V
    ? module125.createElement(
        module466.default.Provider,
        {
          value: D,
        },
        module125.createElement(
          module544.default,
          {
            value: h,
          },
          module125.createElement(
            require('./468').BaseNavigationContainer,
            module178.default({}, F, {
              initialState: null == F.initialState ? C : F.initialState,
              ref: w,
            })
          )
        )
      )
    : j;
});
exports.default = module468;

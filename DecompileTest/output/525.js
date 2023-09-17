exports.default = function (v) {
  var O = v.state,
    b = v.screens,
    k = v.navigation,
    j = v.screenOptions,
    P = v.defaultScreenOptions,
    S = v.onAction,
    h = v.getState,
    w = v.setState,
    M = v.addListener,
    _ = v.addKeyedListener,
    E = v.onRouteFocus,
    A = v.router,
    D = v.emitter,
    L = module125.useState({}),
    R = module25.default(L, 2),
    C = R[0],
    W = R[1],
    F = module125.useContext(module474.default),
    K = F.onDispatchAction,
    x = F.onOptionsChange,
    B = F.stackRef,
    N = module125.useMemo(
      function () {
        return {
          navigation: k,
          onAction: S,
          addListener: M,
          addKeyedListener: _,
          onRouteFocus: E,
          onDispatchAction: K,
          onOptionsChange: x,
          stackRef: B,
        };
      },
      [k, S, M, _, E, K, x, B]
    ),
    T = module528.default({
      state: O,
      getState: h,
      navigation: k,
      setOptions: W,
      router: A,
      emitter: D,
    });
  return module501.default(O.routes).reduce(function (o, l, p) {
    var v = b[l.name],
      k = v.props,
      S = T[l.key],
      M = [j].concat(module36.default(v.options ? v.options.filter(Boolean) : []), [k.options, C[l.key]]),
      _ = M.reduce(function (t, n) {
        return Object.assign(
          t,
          'function' != typeof n
            ? n
            : n({
                route: l,
                navigation: S,
              })
        );
      }, {}),
      E = Object.assign(
        {},
        'function' == typeof P
          ? P({
              route: l,
              navigation: S,
              options: _,
            })
          : P,
        _
      ),
      A = function () {
        return W(function (n) {
          if (l.key in n) {
            var o = l.key,
              i = module96.default(n, [o].map(y));
            return i;
          }

          return n;
        });
      };

    o[l.key] = {
      route: l,
      navigation: S,
      render: function () {
        return module125.createElement(
          module474.default.Provider,
          {
            key: l.key,
            value: N,
          },
          module125.createElement(
            module476.default.Provider,
            {
              value: S,
            },
            module125.createElement(
              module477.default.Provider,
              {
                value: l,
              },
              module125.createElement(module526.default, {
                navigation: S,
                route: l,
                screen: k,
                routeState: O.routes[p].state,
                getState: h,
                setState: w,
                options: E,
                clearOptions: A,
              })
            )
          )
        );
      },
      options: E,
    };
    return o;
  }, {});
};

var module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(n);
    if (o && o.has(t)) return o.get(t);
    var i = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(i, f, c);
        else i[f] = t[f];
      }

    i.default = t;
    if (o) o.set(t, i);
    return i;
  })(require('./125')),
  module474 = require('@babel/runtime/helpers/interopRequireDefault')(require('./474')),
  module476 = require('@babel/runtime/helpers/interopRequireDefault')(require('./476')),
  module477 = require('@babel/runtime/helpers/interopRequireDefault')(require('./477')),
  module526 = require('@babel/runtime/helpers/interopRequireDefault')(require('./526')),
  module528 = require('@babel/runtime/helpers/interopRequireDefault')(require('./528')),
  module501 = require('@babel/runtime/helpers/interopRequireDefault')(require('./501'));

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

function y(t) {
  var n = O(t, 'string');
  return 'symbol' == typeof n ? n : String(n);
}

function O(t, n) {
  if ('object' != typeof t || null === t) return t;
  var o = t[Symbol.toPrimitive];

  if (undefined !== o) {
    var i = o.call(t, n || 'default');
    if ('object' != typeof i) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }

  return ('string' === n ? String : Number)(t);
}

exports.default = function (f) {
  module125.useContext(module474.default).stackRef;
  var s = f.state,
    y = f.getState,
    l = f.navigation,
    p = f.setOptions,
    O = f.router,
    k = f.emitter,
    v = module125.useMemo(
      function () {
        return {
          current: {},
        };
      },
      [y, l, p, O, k]
    ),
    module486 = Object.assign({}, O.actionCreators, require('./486').CommonActions);
  v.current = s.routes.reduce(function (u, o) {
    var f = v.current[o.key];
    if (f) u[o.key] = f;
    else {
      l.emit;

      var s = module96.default(l, c),
        O = function (t) {
          var n = 'function' == typeof t ? t(y()) : t;
          if (null != n)
            l.dispatch(
              Object.assign(
                {
                  source: o.key,
                },
                n
              )
            );
        },
        j = function (t) {
          try {
            t();
          } finally {
          }
        },
        P = Object.keys(module486).reduce(function (t, n) {
          t[n] = function (...args) {
            return j(function () {
              return O(module486[n].apply(module486, args));
            });
          };

          return t;
        }, {});

      u[o.key] = Object.assign({}, s, P, k.create(o.key), {
        dispatch: function (t) {
          return j(function () {
            return O(t);
          });
        },
        getParent: function (t) {
          return undefined !== t && t === s.getId() ? u[o.key] : s.getParent(t);
        },
        setOptions: function (n) {
          return p(function (u) {
            return Object.assign({}, u, module241.default({}, o.key, Object.assign({}, u[o.key], n)));
          });
        },
        isFocused: function () {
          var t = y();
          return t.routes[t.index].key === o.key && (!l || l.isFocused());
        },
      });
    }
    return u;
  }, {});
  return v.current;
};

var module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = f(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var y = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (y && (y.get || y.set)) Object.defineProperty(o, s, y);
        else o[s] = t[s];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./125')),
  module474 = require('@babel/runtime/helpers/interopRequireDefault')(require('./474')),
  c = ['emit'];

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

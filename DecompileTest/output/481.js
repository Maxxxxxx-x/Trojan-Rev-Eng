exports.default = function (u) {
  var c = module125.useRef(u);
  module125.useEffect(function () {
    c.current = u;
  });
  var f = module125.useRef(Object.create(null)),
    i = module125.useCallback(function (t) {
      var n = function (n, u) {
        var c = f.current[n] ? f.current[n][t] : undefined;

        if (c) {
          var i = c.indexOf(u);
          if (i > -1) c.splice(i, 1);
        }
      };

      return {
        addListener: function (u, c) {
          f.current[u] = f.current[u] || {};
          f.current[u][t] = f.current[u][t] || [];
          f.current[u][t].push(c);
          var i = false;
          return function () {
            if (!i) {
              i = true;
              n(u, c);
            }
          };
        },
        removeListener: n,
      };
    }, []),
    o = module125.useCallback(function (n) {
      var u,
        i,
        o = n.type,
        l = n.data,
        p = n.target,
        v = n.canPreventDefault,
        s = f.current[o] || {},
        b =
          undefined !== p
            ? null == (u = s[p])
              ? undefined
              : u.slice()
            : (i = []).concat
                .apply(
                  i,
                  module36.default(
                    Object.keys(s).map(function (t) {
                      return s[t];
                    })
                  )
                )
                .filter(function (t, n, u) {
                  return u.lastIndexOf(t) === n;
                }),
        y = {
          get type() {
            return o;
          },
        };

      if (
        (undefined !== p &&
          Object.defineProperty(y, 'target', {
            enumerable: true,
            get: function () {
              return p;
            },
          }),
        undefined !== l &&
          Object.defineProperty(y, 'data', {
            enumerable: true,
            get: function () {
              return l;
            },
          }),
        v)
      ) {
        var O = false;
        Object.defineProperties(y, {
          defaultPrevented: {
            enumerable: true,
            get: function () {
              return O;
            },
          },
          preventDefault: {
            enumerable: true,
            value: function () {
              O = true;
            },
          },
        });
      }

      if (!(null == c.current)) c.current(y);
      if (!(null == b))
        b.forEach(function (t) {
          return t(y);
        });
      return y;
    }, []);
  return module125.useMemo(
    function () {
      return {
        create: i,
        emit: o,
      };
    },
    [i, o]
  );
};

var module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var c = u(n);
    if (c && c.has(t)) return c.get(t);
    var f = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var l = i ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (l && (l.get || l.set)) Object.defineProperty(f, o, l);
        else f[o] = t[o];
      }

    f.default = t;
    if (c) c.set(t, f);
    return f;
  })(require('./125'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    c = new WeakMap();
  return (u = function (t) {
    return t ? c : n;
  })(t);
}

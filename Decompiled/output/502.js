exports.default = function (t, f) {
  if (null == t) throw Error("Got 'undefined' for the navigation state. You must pass a valid state object.");
  if (f) module509.default(f);

  var p = null != f && f.screens ? y(null == f ? undefined : f.screens) : {},
    v = '/',
    h = t,
    b = {},
    j = function () {
      for (
        var s,
          f,
          y = 'number' == typeof h.index ? h.index : 0,
          j = h.routes[y],
          O = c(t),
          w = p,
          x = [],
          P = true,
          W = function () {
            if (((s = w[j.name].pattern), x.push(j.name), j.params)) {
              var t,
                o,
                c = null == (t = w[j.name]) ? undefined : t.stringify,
                p = module508.default(
                  Object.entries(j.params).map(function (t) {
                    var o = module25.default(t, 2),
                      u = o[0],
                      s = o[1];
                    return [u, null != c && c[u] ? c[u](s) : String(s)];
                  })
                );

              if ((s && Object.assign(b, p), O === j)) {
                f = Object.assign({}, p);
                if (!(null == (o = s)))
                  o.split('/')
                    .filter(function (t) {
                      return t.startsWith(':');
                    })
                    .forEach(function (t) {
                      var n = l(t);
                      if (f) delete f[n];
                    });
              }
            }

            if (w[j.name].screens && undefined !== j.state) {
              y = 'number' == typeof j.state.index ? j.state.index : j.state.routes.length - 1;
              var v = j.state.routes[y],
                h = w[j.name].screens;

              if (h && (v.name in h)) {
                j = v;
                w = h;
              } else P = false;
            } else P = false;
          };
        j.name in w && P;

      )
        W();

      if (
        (undefined === s && (s = x.join('/')),
        undefined !== w[j.name]
          ? (v += s
              .split('/')
              .map(function (t) {
                var n = l(t);
                if ('*' === t) return j.name;

                if (t.startsWith(':')) {
                  var o = b[n];
                  return undefined === o && t.endsWith('?') ? '' : encodeURIComponent(o);
                }

                return encodeURIComponent(t);
              })
              .join('/'))
          : (v += encodeURIComponent(j.name)),
        f || (f = O.params),
        j.state)
      )
        v += '/';
      else if (f) {
        for (var _ in f) 'undefined' === f[_] && delete f[_];

        var M = module503.stringify(f, {
          sort: false,
        });
        if (M) v += '?' + M;
      }
      h = j.state;
    };

  for (; h; ) j();

  v = (v = v.replace(/\/+/g, '/')).length > 1 ? v.replace(/\/$/, '') : v;
  return v;
};

var module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module503 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./503')),
  module508 = require('@babel/runtime/helpers/interopRequireDefault')(require('./508')),
  module509 = require('@babel/runtime/helpers/interopRequireDefault')(require('./509'));

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

var c = function t(n) {
  var o = 'number' == typeof n.index ? n.routes[n.index] : n.routes[n.routes.length - 1];
  return o.state ? t(o.state) : o;
};

var l = function (t) {
    return t.replace(/^:/, '').replace(/\?$/, '');
  },
  p = function (...args) {
    return (n = []).concat
      .apply(
        n,
        module36.default(
          args.map(function (t) {
            return t.split('/');
          })
        )
      )
      .filter(Boolean)
      .join('/');
  },
  v = function (t, n) {
    var o, u;
    if ('string' == typeof t)
      return {
        pattern: n ? p(n, t) : t,
      };
    if (t.exact && undefined === t.path)
      throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
    u = true !== t.exact ? p(n || '', t.path || '') : t.path || '';
    var s = t.screens ? y(t.screens, u) : undefined;
    return {
      pattern: null == (o = u) ? undefined : o.split('/').filter(Boolean).join('/'),
      stringify: t.stringify,
      screens: s,
    };
  },
  y = function (t, o) {
    return module508.default(
      Object.entries(t).map(function (t) {
        var u = module25.default(t, 2),
          s = u[0],
          f = u[1];
        return [s, v(f, o)];
      })
    );
  };

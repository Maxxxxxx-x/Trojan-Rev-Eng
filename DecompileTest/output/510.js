exports.default = function (a, i) {
  var u;
  if (i) module509.default(i);
  var s = [];
  if (null != i && i.initialRouteName)
    s.push({
      initialRouteName: i.initialRouteName,
      parentScreens: [],
    });
  var f = null == i ? undefined : i.screens,
    c = a.replace(/\/+/g, '/').replace(/^\//, '').replace(/\?.*$/, '');

  if (((c = c.endsWith('/') ? c : c + '/'), undefined === f)) {
    var h = c
      .split('/')
      .filter(Boolean)
      .map(function (t) {
        var n = decodeURIComponent(t);
        return {
          name: n,
        };
      });
    return h.length ? b(a, h, s) : undefined;
  }

  var v,
    y,
    j = (u = []).concat
      .apply(
        u,
        module36.default(
          Object.keys(f).map(function (t) {
            return p(t, f, [], s, []);
          })
        )
      )
      .sort(function (t, n) {
        if (t.pattern === n.pattern) return n.routeNames.join('>').localeCompare(t.routeNames.join('>'));
        if (t.pattern.startsWith(n.pattern)) return -1;
        if (n.pattern.startsWith(t.pattern)) return 1;

        for (var a = t.pattern.split('/'), i = n.pattern.split('/'), u = 0; u < a.length ** i.length; u++) {
          if (null == a[u]) return 1;
          if (null == i[u]) return -1;
          var o = '*' === a[u] || a[u].startsWith(':'),
            s = '*' === i[u] || i[u].startsWith(':');

          if (!o || !s) {
            if (o) return 1;
            if (s) return -1;
          }
        }

        return i.length - a.length;
      });

  if (
    (j.reduce(function (n, a) {
      if (n[a.pattern]) {
        var i = n[a.pattern].routeNames,
          u = a.routeNames;
        if (
          !(i.length > u.length
            ? u.every(function (t, n) {
                return i[n] === t;
              })
            : i.every(function (t, n) {
                return u[n] === t;
              }))
        )
          throw new Error(
            "Found conflicting screens with the same pattern. The pattern '" +
              a.pattern +
              "' resolves to both '" +
              i.join(' > ') +
              "' and '" +
              u.join(' > ') +
              "'. Patterns must be unique and cannot resolve to more than one screen."
          );
      }

      return Object.assign(n, module241.default({}, a.pattern, a));
    }, {}),
    '/' === c)
  ) {
    var O = j.find(function (t) {
      return (
        '' === t.path &&
        t.routeNames.every(function (t) {
          var n;
          return !(
            null !=
              (n = j.find(function (n) {
                return n.screen === t;
              })) && n.path
          );
        })
      );
    });
    return O
      ? b(
          a,
          O.routeNames.map(function (t) {
            return {
              name: t,
            };
          }),
          s,
          j
        )
      : undefined;
  }

  var N = l(
      c,
      j.map(function (t) {
        return Object.assign({}, t, {
          regex: t.regex ? new RegExp(t.regex.source + '$') : undefined,
        });
      })
    ),
    w = N.routes,
    x = N.remainingPath;

  if (undefined !== w) {
    y = b(a, w, s, j);
    c = x;
    v = y;
  }

  if (null == y || null == v) return;
  return v;
};

var module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module511 = require('@babel/runtime/helpers/interopRequireDefault')(require('./511')),
  module503 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var a = s(n);
    if (a && a.has(t)) return a.get(t);
    var i = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (f && (f.get || f.set)) Object.defineProperty(i, o, f);
        else i[o] = t[o];
      }

    i.default = t;
    if (a) a.set(t, i);
    return i;
  })(require('./503')),
  module473 = require('@babel/runtime/helpers/interopRequireDefault')(require('./473')),
  module509 = require('@babel/runtime/helpers/interopRequireDefault')(require('./509'));

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    a = new WeakMap();
  return (s = function (t) {
    return t ? a : n;
  })(t);
}

var f = function (...args) {
    return (t = []).concat
      .apply(
        t,
        module36.default(
          args.map(function (t) {
            return t.split('/');
          })
        )
      )
      .filter(Boolean)
      .join('/');
  },
  l = function (n, a) {
    var module503,
      module473 = n,
      o = function () {
        if (!s.regex) return 'continue';
        var n = module473.match(s.regex);

        if (n) {
          var o,
            f =
              null == (o = s.pattern)
                ? undefined
                : o
                    .split('/')
                    .filter(function (t) {
                      return t.startsWith(':');
                    })
                    .reduce(function (a, i, u) {
                      return Object.assign(a, module241.default({}, i, n[2 * (u + 1)].replace(/\//, '')));
                    }, {});
          module503 = s.routeNames.map(function (t) {
            var n,
              i = a.find(function (n) {
                return n.screen === t;
              }),
              u =
                null == i
                  ? undefined
                  : null == (n = i.path)
                  ? undefined
                  : n
                      .split('/')
                      .filter(function (t) {
                        return t.startsWith(':');
                      })
                      .reduce(function (t, n) {
                        var a = f[n];

                        if (a) {
                          var u,
                            o = n.replace(/^:/, '').replace(/\?$/, '');
                          t[o] = null != (u = i.parse) && u[o] ? i.parse[o](a) : a;
                        }

                        return t;
                      }, {});
            return u && Object.keys(u).length
              ? {
                  name: t,
                  params: u,
                }
              : {
                  name: t,
                };
          });
          module473 = module473.replace(n[1], '');
          return 'break';
        }
      };

    for (var s of a) {
      var f = o();
      if ('continue' !== f && 'break' === f) break;
    }

    return {
      routes: module503,
      remainingPath: module473,
    };
  },
  p = function t(a, i) {
    var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [],
      o = arguments.length > 3 ? arguments[3] : undefined,
      s = arguments.length > 4 ? arguments[4] : undefined,
      l = arguments.length > 5 ? arguments[5] : undefined,
      p = [];
    u.push(a);
    s.push(a);
    var h = i[a];

    if ('string' == typeof h) {
      var v = l ? f(l, h) : h;
      p.push(c(a, u, v, h));
    } else if ('object' == typeof h) {
      var y;

      if ('string' == typeof h.path) {
        if (h.exact && undefined === h.path)
          throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
        y = true !== h.exact ? f(l || '', h.path || '') : h.path || '';
        p.push(c(a, u, y, h.path, h.parse));
      }

      if (h.screens) {
        if (h.initialRouteName)
          o.push({
            initialRouteName: h.initialRouteName,
            parentScreens: s,
          });
        Object.keys(h.screens).forEach(function (a) {
          var i,
            f = t(a, h.screens, u, o, module36.default(s), null != (i = y) ? i : l);
          p.push.apply(p, module36.default(f));
        });
      }
    }

    u.pop();
    return p;
  },
  c = function (t, i, u, o, s) {
    return {
      screen: t,
      regex: (u = u.split('/').filter(Boolean).join('/'))
        ? new RegExp(
            '^(' +
              u
                .split('/')
                .map(function (t) {
                  return t.startsWith(':') ? '(([^/]+\\/)' + (t.endsWith('?') ? '?' : '') + ')' : ('*' === t ? '.*' : module511.default(t)) + '\\/';
                })
                .join('') +
              ')'
          )
        : undefined,
      pattern: u,
      path: o,
      routeNames: module36.default(i),
      parse: s,
    };
  },
  h = function (t, n) {
    for (var a of n) if (t === a.routeNames[a.routeNames.length - 1]) return a.parse;
  },
  v = function (t, n, a) {
    for (var i of a)
      if (n.length === i.parentScreens.length) {
        for (var u = true, o = 0; o < n.length; o++)
          if (0 !== n[o].localeCompare(i.parentScreens[o])) {
            u = false;
            break;
          }

        if (u) return t !== i.initialRouteName ? i.initialRouteName : undefined;
      }
  },
  y = function (t, n, a) {
    if (a)
      return t
        ? {
            index: 1,
            routes: [
              {
                name: t,
              },
              n,
            ],
          }
        : {
            routes: [n],
          };
    else
      return t
        ? {
            index: 1,
            routes: [
              {
                name: t,
              },
              Object.assign({}, n, {
                state: {
                  routes: [],
                },
              }),
            ],
          }
        : {
            routes: [
              Object.assign({}, n, {
                state: {
                  routes: [],
                },
              }),
            ],
          };
  },
  b = function (t, n, a, i) {
    var o,
      s = n.shift(),
      f = [],
      l = v(s.name, f, a);
    if ((f.push(s.name), (o = y(l, s, 0 === n.length)), n.length > 0))
      for (var p = o; (s = n.shift()); ) {
        l = v(s.name, f, a);
        var c = p.index || p.routes.length - 1;
        p.routes[c].state = y(l, s, 0 === n.length);
        if (n.length > 0) p = p.routes[c].state;
        f.push(s.name);
      }
    (s = module473.default(o)).path = t;
    var b = j(t, i ? h(s.name, i) : undefined);
    if (b) s.params = Object.assign({}, s.params, b);
    return o;
  },
  j = function (t, n) {
    var a = t.split('?')[1],
      u = module503.parse(a);
    if (n)
      Object.keys(u).forEach(function (t) {
        if (Object.hasOwnProperty.call(n, t) && 'string' == typeof u[t]) u[t] = n[t](u[t]);
      });
    return Object.keys(u).length ? u : undefined;
  };

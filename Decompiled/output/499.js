exports.default = function (n, l) {
  var s,
    o,
    u = l ? t(l) : {},
    v = null != n.index ? n.routes.slice(0, n.index + 1) : n.routes;
  if (0 === v.length) return;
  if (
    !(
      (1 === v.length && undefined === v[0].key) ||
      (2 === v.length && undefined === v[0].key && v[0].name === (null == u ? undefined : u.initialRouteName) && undefined === v[1].key)
    )
  )
    return {
      type: 'RESET',
      payload: n,
    };
  var c = n.routes[null != (s = n.index) ? s : n.routes.length - 1],
    p = null == c ? undefined : c.state,
    f = null == u ? undefined : null == (o = u.screens) ? undefined : o[null == c ? undefined : c.name],
    h = Object.assign({}, c.params),
    y = c
      ? {
          name: c.name,
          path: c.path,
          params: h,
        }
      : undefined;

  for (; p; ) {
    var b, k, j;
    if (0 === p.routes.length) return;
    var x = null != p.index ? p.routes.slice(0, p.index + 1) : p.routes,
      N = x[x.length - 1];

    if (
      (Object.assign(h, {
        initial: undefined,
        screen: undefined,
        params: undefined,
        state: undefined,
      }),
      1 === x.length && undefined === x[0].key)
    ) {
      h.initial = true;
      h.screen = N.name;
    } else {
      if (2 !== x.length || undefined !== x[0].key || x[0].name !== (null == (b = f) ? undefined : b.initialRouteName) || undefined !== x[1].key) {
        h.state = p;
        break;
      }

      h.initial = false;
      h.screen = N.name;
    }

    if (N.state) {
      h.params = Object.assign({}, N.params);
      h = h.params;
    } else {
      h.path = N.path;
      h.params = N.params;
    }

    p = N.state;
    f = null == (k = f) ? undefined : null == (j = k.screens) ? undefined : j[N.name];
  }

  if (!y) return;
  return {
    type: 'NAVIGATE',
    payload: y,
  };
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25'));

var t = function (n) {
    return 'object' == typeof n && null != n
      ? {
          initialRouteName: n.initialRouteName,
          screens: null != n.screens ? l(n.screens) : undefined,
        }
      : {};
  },
  l = function (l) {
    return Object.entries(l).reduce(function (l, s) {
      var o = module25.default(s, 2),
        u = o[0],
        v = o[1];
      l[u] = t(v);
      return l;
    }, {});
  };

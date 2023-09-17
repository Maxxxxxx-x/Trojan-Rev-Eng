exports.default = function () {
  var module468 = module125.useContext(require('./468').NavigationHelpersContext),
    f = module125.useContext(module466.default);
  return module125.useCallback(
    function (t, n) {
      var l = f.options;

      if (false !== (null == l ? undefined : l.enabled)) {
        var c = module468
            ? u(module468, {
                index: 0,
                routes: [
                  {
                    name: t,
                    params: n,
                  },
                ],
              })
            : {
                index: 0,
                routes: [
                  {
                    name: t,
                    params: n,
                  },
                ],
              },
          module468 =
            null != l && l.getPathFromState ? l.getPathFromState(c, null == l ? undefined : l.config) : require('./468').getPathFromState(c, null == l ? undefined : l.config);
        return module468;
      }
    },
    [f, module468]
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, c, s);
        else f[c] = t[c];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./125')),
  module466 = require('@babel/runtime/helpers/interopRequireDefault')(require('./466'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var u = function t(n, o) {
  var u = n.getParent();

  if (u) {
    var f = u.getState();
    return t(u, {
      index: 0,
      routes: [
        Object.assign({}, f.routes[f.index], {
          state: o,
        }),
      ],
    });
  }

  return o;
};

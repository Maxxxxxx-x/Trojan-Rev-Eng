var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./125')),
  module552 = require('@babel/runtime/helpers/interopRequireDefault')(require('./552'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var u = module125.forwardRef(function (o, module468) {
  var f = o.children,
    c = o.location;
  module125.useEffect(function () {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  var l = {};

  if (module468) {
    var p = {
      getCurrentOptions: function () {
        return l.options;
      },
    };
    if ('function' == typeof module468) module468(p);
    else module468.current = p;
  }

  return module125.createElement(
    module552.default.Provider,
    {
      value: {
        location: c,
      },
    },
    module125.createElement(
      require('./468').CurrentRenderContext.Provider,
      {
        value: l,
      },
      f
    )
  );
});
exports.default = u;

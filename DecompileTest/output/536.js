exports.default = function () {
  var module489 = module125.useState(function () {
      return require('./489').nanoid();
    }),
    u = module25.default(module489, 1)[0],
    module472 = module125.useContext(require('./472').SingleNavigatorContext);
  if (undefined === module472)
    throw new Error(
      "Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed."
    );
  module125.useEffect(
    function () {
      var t = module472.register,
        n = module472.unregister;
      t(u);
      return function () {
        return n(u);
      };
    },
    [module472, u]
  );
  return u;
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (l && (l.get || l.set)) Object.defineProperty(f, p, l);
        else f[p] = t[p];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./125'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

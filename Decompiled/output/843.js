exports.default = function (o) {
  var u,
    f = module125.useState(null),
    s = module25.default(f, 2),
    l = s[0],
    c = s[1],
    p = l
      ? null ==
        (u = o.routes.find(function (t) {
          return t.key === l;
        }))
        ? undefined
        : u.name
      : null;
  module125.useEffect(
    function () {
      if (p) {
        var t =
          "The screen '" +
          p +
          "' was removed natively but didn't get removed from JS state. This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.\n\nConsider using a 'usePreventRemove' hook with 'headerBackButtonMenuEnabled: false' to prevent users from natively going back multiple screens.";
        console.error(t);
      }
    },
    [p]
  );
  return {
    setNextDismissedKey: c,
  };
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
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, l, c);
        else f[l] = t[l];
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

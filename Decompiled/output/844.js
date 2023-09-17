exports.default = function (n) {
  var o,
    u,
    module463 = require('./463').usePreventRemoveContext().preventedRoutes,
    f = Object.keys(module463)[0],
    c = n[f],
    s = null == c ? undefined : null == (o = c.options) ? undefined : o.headerBackButtonMenuEnabled,
    p = null == c ? undefined : null == (u = c.route) ? undefined : u.name;

  module125.useEffect(
    function () {
      if (null != f && s) {
        var t =
          'The screen ' +
          p +
          " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\nConsider removing 'headerBackButtonMenuEnabled: true' from " +
          p +
          ' screen to get rid of this error.';
        console.error(t);
      }
    },
    [f, s, p]
  );
};

var module125 = (function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = n(o);
  if (u && u.has(t)) return u.get(t);
  var l = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
      else l[c] = t[c];
    }

  l.default = t;
  if (u) u.set(t, l);
  return l;
})(require('./125'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

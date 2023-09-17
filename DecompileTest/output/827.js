exports.default = function (o) {
  var c = o.color,
    f = o.size,
    l = o.style;
  return module125.createElement(
    ReactNative.Text,
    {
      style: [
        u.icon,
        {
          color: c,
          fontSize: f,
        },
        l,
      ],
    },
    '\u23f7'
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
    var c = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(c, l, p);
        else c[l] = t[l];
      }

    c.default = t;
    if (u) u.set(t, c);
    return c;
  })(require('./125')),
  ReactNative = require('react-native');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var u = ReactNative.StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
  },
});

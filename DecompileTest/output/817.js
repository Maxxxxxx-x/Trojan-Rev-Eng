exports.default = function (u) {
  var s = u.tintColor,
    p = u.style,
    y = module96.default(u, f),
    module463 = require('./463').useTheme().colors;

  return module125.createElement(
    ReactNative.Animated.Text,
    module178.default(
      {
        accessibilityRole: 'header',
        'aria-level': '1',
        numberOfLines: 1,
      },
      y,
      {
        style: [
          c.title,
          {
            color: undefined === s ? module463.text : s,
          },
          p,
        ],
      }
    )
  );
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('./125')),
  ReactNative = require('react-native'),
  f = ['tintColor', 'style'];

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

var c = ReactNative.StyleSheet.create({
  title: ReactNative.Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600',
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    default: {
      fontSize: 18,
      fontWeight: '500',
    },
  }),
});

exports.default = function (f) {
  var s = f.style,
    h = module96.default(f, u),
    module463 = require('./463').useTheme().colors;

  return module125.createElement(
    ReactNative.Animated.View,
    module178.default(
      {
        style: [
          c.container,
          {
            backgroundColor: module463.card,
            borderBottomColor: module463.border,
            shadowColor: module463.border,
          },
          s,
        ],
      },
      h
    )
  );
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = f(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('./125')),
  ReactNative = require('react-native'),
  u = ['style'];

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (f = function (t) {
    return t ? n : o;
  })(t);
}

var c = ReactNative.StyleSheet.create({
  container: Object.assign(
    {
      flex: 1,
    },
    ReactNative.Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: ReactNative.StyleSheet.hairlineWidth,
        },
      },
      default: {
        borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      },
    })
  ),
});

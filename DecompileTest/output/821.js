exports.default = function (l) {
  var c = l.onPressIn,
    O = l.onPressOut,
    y = l.android_ripple,
    P = l.pressColor,
    v = l.pressOpacity,
    b = undefined === v ? 0.3 : v,
    _ = l.style,
    j = module96.default(l, s),
    module463 = require('./463').useTheme().dark,
    M = module125.useState(function () {
      return new ReactNative.Animated.Value(1);
    }),
    k = module25.default(M, 1)[0],
    A = function (e, t) {
      if (!p)
        ReactNative.Animated.timing(k, {
          toValue: e,
          duration: t,
          easing: ReactNative.Easing.inOut(ReactNative.Easing.quad),
          useNativeDriver: true,
        }).start();
    };

  return module125.createElement(
    f,
    module178.default(
      {
        onPressIn: function (e) {
          A(b, 0);
          if (!(null == c)) c(e);
        },
        onPressOut: function (e) {
          A(1, 200);
          if (!(null == O)) O(e);
        },
        android_ripple: p
          ? Object.assign(
              {
                color: undefined !== P ? P : module463 ? 'rgba(255, 255, 255, .32)' : 'rgba(0, 0, 0, .32)',
              },
              y
            )
          : undefined,
        style: [
          {
            opacity: p ? 1 : k,
          },
          _,
        ],
      },
      j
    )
  );
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = l(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in e)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
        var f = u ? Object.getOwnPropertyDescriptor(e, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
        else o[s] = e[s];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  s = ['onPressIn', 'onPressOut', 'android_ripple', 'pressColor', 'pressOpacity', 'style'];

function l(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (l = function (e) {
    return e ? n : t;
  })(e);
}

var f = ReactNative.Animated.createAnimatedComponent(ReactNative.Pressable),
  p = 'android' === ReactNative.Platform.OS && ReactNative.Platform.Version >= 21;

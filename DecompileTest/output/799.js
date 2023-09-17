exports.default = function (p) {
  var h = p.children,
    y = p.style,
    b = p.visible,
    O = undefined === b || b,
    w = p.size,
    S = undefined === w ? 18 : w,
    j = module96.default(p, c),
    k = module125.useState(function () {
      return new ReactNative.Animated.Value(O ? 1 : 0);
    }),
    M = module25.default(k, 1)[0],
    P = module125.useState(O),
    _ = module25.default(P, 2),
    A = _[0],
    z = _[1],
    module463 = require('./463').useTheme();

  if (
    (module125.useEffect(
      function () {
        if (A) {
          ReactNative.Animated.timing(M, {
            toValue: O ? 1 : 0,
            duration: 150,
            useNativeDriver: true,
          }).start(function (t) {
            if (t.finished && !O) z(false);
          });
          return function () {
            return M.stopAnimation();
          };
        }
      },
      [M, A, O]
    ),
    !A)
  ) {
    if (!O) return null;
    z(true);
  }

  var x = ReactNative.StyleSheet.flatten(y) || {},
    C = x.backgroundColor,
    D = undefined === C ? module463.colors.notification : C,
    R = module96.default(x, s),
    E = module790.default(D).isLight() ? 'black' : 'white',
    H = S / 2,
    L = Math.floor((3 * S) / 4);
  return module125.createElement(
    ReactNative.Animated.Text,
    module178.default(
      {
        numberOfLines: 1,
        style: [
          {
            transform: [
              {
                scale: M.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
            color: E,
            lineHeight: S - 1,
            height: S,
            minWidth: S,
            opacity: M,
            backgroundColor: D,
            fontSize: L,
            borderRadius: H,
          },
          v.container,
          R,
        ],
      },
      j
    ),
    h
  );
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module790 = require('@babel/runtime/helpers/interopRequireDefault')(require('./790')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./125')),
  ReactNative = require('react-native'),
  c = ['children', 'style', 'visible', 'size'],
  s = ['backgroundColor'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var v = ReactNative.StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    paddingHorizontal: 4,
    overflow: 'hidden',
  },
});

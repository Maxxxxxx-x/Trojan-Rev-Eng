exports.SafeAreaProvider = function (s) {
  var p,
    w,
    S,
    y,
    C,
    A = s.children,
    x = s.initialMetrics,
    b = s.initialSafeAreaInsets,
    P = s.style,
    E = module96.default(s, f),
    O = module125.useContext(c),
    M = module125.useContext(v),
    j = module125.useState(null != (p = null != (w = null != (S = null == x ? undefined : x.insets) ? S : b) ? w : O) ? p : null),
    I = module25.default(j, 2),
    _ = I[0],
    k = I[1],
    D = module125.useState(
      null != (y = null != (C = null == x ? undefined : x.frame) ? C : M)
        ? y
        : {
            x: 0,
            y: 0,
            width: ReactNative.Dimensions.get('window').width,
            height: ReactNative.Dimensions.get('window').height,
          }
    ),
    F = module25.default(D, 2),
    W = F[0],
    N = F[1],
    R = module125.useCallback(
      function (t) {
        var n = t.nativeEvent,
          l = n.frame,
          o = n.insets;
        if (!(!l || (l.height === W.height && l.width === W.width && l.x === W.x && l.y === W.y))) N(l);
        if (!(_ && o.bottom === _.bottom && o.left === _.left && o.right === _.right && o.top === _.top)) k(o);
      },
      [W, _]
    );
  return module125.createElement(
    require('./802').NativeSafeAreaProvider,
    module178.default(
      {
        style: [h.fill, P],
        onInsetsChange: R,
      },
      E
    ),
    null != _
      ? module125.createElement(
          v.Provider,
          {
            value: W,
          },
          module125.createElement(
            c.Provider,
            {
              value: _,
            },
            A
          )
        )
      : null
  );
};

exports.useSafeArea = function () {
  return w();
};

exports.useSafeAreaFrame = function () {
  var t = module125.useContext(v);
  if (null == t) throw new Error(p);
  return t;
};

exports.useSafeAreaInsets = w;

exports.withSafeAreaInsets = function (n) {
  return module125.forwardRef(function (l, u) {
    return module125.createElement(c.Consumer, null, function (f) {
      if (null == f) throw new Error(p);
      return module125.createElement(
        n,
        module178.default({}, l, {
          insets: f,
          ref: u,
        })
      );
    });
  });
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = s(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  f = ['children', 'initialMetrics', 'initialSafeAreaInsets', 'style'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (s = function (t) {
    return t ? l : n;
  })(t);
}

var c = module125.createContext(null);
exports.SafeAreaInsetsContext = c;
var v = module125.createContext(null);
exports.SafeAreaFrameContext = v;
var h = ReactNative.StyleSheet.create({
  fill: {
    flex: 1,
  },
});
var p = 'No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.';

function w() {
  var t = module125.useContext(c);
  if (null == t) throw new Error(p);
  return t;
}

var S = c.Consumer;
exports.SafeAreaConsumer = S;
var y = c;
exports.SafeAreaContext = y;

exports.default = function (f) {
  var module800 = require('./800').useSafeAreaFrame(),
    module800 = require('./800').useSafeAreaInsets(),
    y = module125.useContext(module815.default),
    h = module125.useContext(module825.default),
    b = f.focused,
    P = f.modal,
    E = undefined !== P && P,
    O = f.header,
    w = f.headerShown,
    j = undefined === w || w,
    x = f.headerTransparent,
    S = f.headerStatusBarHeight,
    _ = undefined === S ? (y ? 0 : module800.top) : S,
    M = f.navigation,
    C = f.route,
    k = f.children,
    A = f.style,
    D = module125.useState(function () {
      return module811.default(module800, E, _);
    }),
    W = module25.default(D, 2),
    F = W[0],
    H = W[1];

  return module125.createElement(
    module810.default,
    {
      accessibilityElementsHidden: !b,
      importantForAccessibility: b ? 'auto' : 'no-hide-descendants',
      style: [s.container, A],
    },
    module125.createElement(
      ReactNative.View,
      {
        style: s.content,
      },
      module125.createElement(
        module815.default.Provider,
        {
          value: y || false !== j,
        },
        module125.createElement(
          module825.default.Provider,
          {
            value: j ? F : null != h ? h : 0,
          },
          k
        )
      )
    ),
    j
      ? module125.createElement(
          require('./463').NavigationContext.Provider,
          {
            value: M,
          },
          module125.createElement(
            require('./463').NavigationRouteContext.Provider,
            {
              value: C,
            },
            module125.createElement(
              ReactNative.View,
              {
                onLayout: function (e) {
                  var t = e.nativeEvent.layout.height;
                  H(t);
                },
                style: x ? s.absolute : null,
              },
              O
            )
          )
        )
      : null
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = f(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in e)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(e, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = e[u];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module810 = require('@babel/runtime/helpers/interopRequireDefault')(require('./810')),
  module811 = require('@babel/runtime/helpers/interopRequireDefault')(require('./811')),
  module825 = require('@babel/runtime/helpers/interopRequireDefault')(require('./825')),
  module815 = require('@babel/runtime/helpers/interopRequireDefault')(require('./815'));

function f(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (f = function (e) {
    return e ? n : t;
  })(e);
}

var s = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  content: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

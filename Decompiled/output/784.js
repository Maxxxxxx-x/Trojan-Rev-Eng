exports.default = function (v) {
  var p = v.tabBar,
    h =
      undefined === p
        ? function (t) {
            return module125.createElement(module787.default, t);
          }
        : p,
    S = v.state,
    b = v.navigation,
    O = v.descriptors,
    P = v.safeAreaInsets,
    w = v.detachInactiveScreens,
    k = undefined === w ? 'web' === ReactNative.Platform.OS || 'android' === ReactNative.Platform.OS || 'ios' === ReactNative.Platform.OS : w,
    E = v.sceneContainerStyle,
    M = S.routes[S.index].key,
    j = module125.useState([M]),
    B = module25.default(j, 2),
    C = B[0],
    x = B[1];
  if (!C.includes(M)) x([].concat(module36.default(C), [M]));

  var module809 = require('./809').SafeAreaProviderCompat.initialMetrics.frame,
    module809 = module125.useState(function () {
      return module787.getTabBarHeight({
        state: S,
        descriptors: O,
        dimensions: module809,
        layout: {
          width: module809.width,
          height: 0,
        },
        insets: Object.assign({}, require('./809').SafeAreaProviderCompat.initialMetrics.insets, v.safeAreaInsets),
        style: O[S.routes[S.index].key].options.tabBarStyle,
      });
    }),
    H = module25.default(module809, 2),
    I = H[0],
    T = H[1],
    z = S.routes;

  return module125.createElement(
    require('./809').SafeAreaProviderCompat,
    null,
    module125.createElement(
      require('./832').MaybeScreenContainer,
      {
        enabled: k,
        hasTwoStates: true,
        style: y.container,
      },
      z.map(function (n, o) {
        var s = O[n.key],
          c = s.options,
          v = c.lazy,
          p = undefined === v || v,
          y = c.unmountOnBlur,
          h = S.index === o;
        if (y && !h) return null;
        if (p && !C.includes(n.key) && !h) return null;
        var b = s.options,
          P = b.freezeOnBlur,
          w = b.header,
          module809 =
            undefined === w
              ? function (o) {
                  var u = o.layout,
                    s = o.options;
                  return module125.createElement(
                    require('./809').Header,
                    module178.default({}, s, {
                      layout: u,
                      title: require('./809').getHeaderTitle(s, n.name),
                    })
                  );
                }
              : w,
          j = b.headerShown,
          B = b.headerStatusBarHeight,
          x = b.headerTransparent;
        return module125.createElement(
          require('./832').MaybeScreen,
          {
            key: n.key,
            style: [
              ReactNative.StyleSheet.absoluteFill,
              {
                zIndex: h ? 0 : -1,
              },
            ],
            visible: h,
            enabled: k,
            freezeOnBlur: P,
          },
          module125.createElement(
            module786.default.Provider,
            {
              value: I,
            },
            module125.createElement(
              require('./809').Screen,
              {
                focused: h,
                route: s.route,
                navigation: s.navigation,
                headerShown: j,
                headerStatusBarHeight: B,
                headerTransparent: x,
                header: module809({
                  layout: module809,
                  route: s.route,
                  navigation: s.navigation,
                  options: s.options,
                }),
                style: E,
              },
              s.render()
            )
          )
        );
      })
    ),
    module125.createElement(
      module785.default.Provider,
      {
        value: T,
      },
      module125.createElement(require('./800').SafeAreaInsetsContext.Consumer, null, function (t) {
        var n, o, l, u, s, f, c, v;
        return h({
          state: S,
          descriptors: O,
          navigation: b,
          insets: {
            top: null != (n = null != (o = null == P ? undefined : P.top) ? o : null == t ? undefined : t.top) ? n : 0,
            right: null != (l = null != (u = null == P ? undefined : P.right) ? u : null == t ? undefined : t.right) ? l : 0,
            bottom: null != (s = null != (f = null == P ? undefined : P.bottom) ? f : null == t ? undefined : t.bottom) ? s : 0,
            left: null != (c = null != (v = null == P ? undefined : P.left) ? v : null == t ? undefined : t.left) ? c : 0,
          },
        });
      })
    )
  );
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = p(require('./125')),
  ReactNative = require('react-native'),
  module785 = require('@babel/runtime/helpers/interopRequireDefault')(require('./785')),
  module786 = require('@babel/runtime/helpers/interopRequireDefault')(require('./786')),
  module787 = p(require('./787'));

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

function p(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = v(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var f = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (f && (f.get || f.set)) Object.defineProperty(l, s, f);
      else l[s] = t[s];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}

var y = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});

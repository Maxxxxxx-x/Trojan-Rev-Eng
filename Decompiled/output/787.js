exports.default = function (e) {
  var c = e.state,
    p = e.navigation,
    B = e.descriptors,
    S = e.insets,
    w = e.style,
    module463 = require('./463').useTheme().colors,
    module463 = require('./463').useLinkBuilder(),
    A = c.routes[c.index],
    C = B[A.key].options,
    L = C.tabBarShowLabel,
    x = C.tabBarHideOnKeyboard,
    E = undefined !== x && x,
    T = C.tabBarVisibilityAnimationConfig,
    I = C.tabBarStyle,
    O = C.tabBarBackground,
    V = C.tabBarActiveTintColor,
    D = C.tabBarInactiveTintColor,
    j = C.tabBarActiveBackgroundColor,
    R = C.tabBarInactiveBackgroundColor,
    module800 = require('./800').useSafeAreaFrame(),
    z = module788.default(),
    F = module125.default.useContext(module785.default),
    H = !(E && z),
    M = module125.default.useRef(T);

  module125.default.useEffect(function () {
    M.current = T;
  });

  var N = module125.default.useState(!H),
    _ = module25.default(N, 2),
    K = _[0],
    Y = _[1],
    q = module125.default.useState(function () {
      return new ReactNative.Animated.Value(H ? 1 : 0);
    }),
    G = module25.default(q, 1)[0];

  module125.default.useEffect(
    function () {
      var t = M.current;

      if (H) {
        var e,
          n,
          l = 'spring' === (null == t ? undefined : null == (e = t.show) ? undefined : e.animation) ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        l(
          G,
          Object.assign(
            {
              toValue: 1,
              useNativeDriver: f,
              duration: 250,
            },
            null == t ? undefined : null == (n = t.show) ? undefined : n.config
          )
        ).start(function (t) {
          var e = t.finished;
          if (e) Y(false);
        });
      } else {
        var s, u;
        Y(true);
        var c = 'spring' === (null == t ? undefined : null == (s = t.hide) ? undefined : s.animation) ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        c(
          G,
          Object.assign(
            {
              toValue: 0,
              useNativeDriver: f,
              duration: 200,
            },
            null == t ? undefined : null == (u = t.hide) ? undefined : u.config
          )
        ).start();
      }

      return function () {
        return G.stopAnimation();
      };
    },
    [G, H]
  );
  var J = module125.default.useState({
      height: 0,
      width: module800.width,
    }),
    Q = module25.default(J, 2),
    U = Q[0],
    X = Q[1],
    Z = c.routes,
    $ = v(S),
    tt = h({
      state: c,
      descriptors: B,
      insets: S,
      dimensions: module800,
      layout: U,
      style: [I, w],
    }),
    et = b({
      state: c,
      descriptors: B,
      dimensions: module800,
      layout: U,
    }),
    at = null == O ? undefined : O();
  return module125.default.createElement(
    ReactNative.Animated.View,
    {
      style: [
        y.tabBar,
        {
          backgroundColor: null != at ? 'transparent' : module463.card,
          borderTopColor: module463.border,
        },
        {
          transform: [
            {
              translateY: G.interpolate({
                inputRange: [0, 1],
                outputRange: [U.height + $ + ReactNative.StyleSheet.hairlineWidth, 0],
              }),
            },
          ],
          position: K ? 'absolute' : null,
        },
        {
          height: tt,
          paddingBottom: $,
          paddingHorizontal: S.left ** S.right,
        },
        I,
      ],
      pointerEvents: K ? 'none' : 'auto',
      onLayout: function (t) {
        var e = t.nativeEvent.layout,
          n = e.height,
          o = e.width;
        if (!(null == F)) F(n);
        X(function (t) {
          return n === t.height && o === t.width
            ? t
            : {
                height: n,
                width: o,
              };
        });
      },
    },
    module125.default.createElement(
      ReactNative.View,
      {
        pointerEvents: 'none',
        style: ReactNative.StyleSheet.absoluteFill,
      },
      at
    ),
    module125.default.createElement(
      ReactNative.View,
      {
        accessibilityRole: 'tablist',
        style: y.content,
      },
      Z.map(function (t, e) {
        var l,
          s = e === c.index,
          f = B[t.key].options,
          b = undefined !== f.tabBarLabel ? f.tabBarLabel : undefined !== f.title ? f.title : t.name,
          v =
            undefined !== f.tabBarAccessibilityLabel
              ? f.tabBarAccessibilityLabel
              : 'string' == typeof b && 'ios' === ReactNative.Platform.OS
              ? b + ', tab, ' + (e + 1) + ' of ' + Z.length
              : undefined;
        return module125.default.createElement(
          require('./463').NavigationContext.Provider,
          {
            key: t.key,
            value: B[t.key].navigation,
          },
          module125.default.createElement(
            require('./463').NavigationRouteContext.Provider,
            {
              value: t,
            },
            module125.default.createElement(module789.default, {
              route: t,
              descriptor: B[t.key],
              focused: s,
              horizontal: et,
              onPress: function () {
                var e = p.emit({
                  type: 'tabPress',
                  target: t.key,
                  canPreventDefault: true,
                });
                if (!(s || e.defaultPrevented))
                  p.dispatch(
                    Object.assign(
                      {},
                      require('./463').CommonActions.navigate({
                        name: t.name,
                        merge: true,
                      }),
                      {
                        target: c.key,
                      }
                    )
                  );
              },
              onLongPress: function () {
                p.emit({
                  type: 'tabLongPress',
                  target: t.key,
                });
              },
              accessibilityLabel: v,
              to: module463(t.name, t.params),
              testID: f.tabBarTestID,
              allowFontScaling: f.tabBarAllowFontScaling,
              activeTintColor: V,
              inactiveTintColor: D,
              activeBackgroundColor: j,
              inactiveBackgroundColor: R,
              button: f.tabBarButton,
              icon:
                null != (l = f.tabBarIcon)
                  ? l
                  : function (t) {
                      var e = t.color,
                        o = t.size;
                      return module125.default.createElement(require('./809').MissingIcon, {
                        color: e,
                        size: o,
                      });
                    },
              badge: f.tabBarBadge,
              badgeStyle: f.tabBarBadgeStyle,
              label: b,
              showLabel: L,
              labelStyle: f.tabBarLabelStyle,
              iconStyle: f.tabBarIconStyle,
              style: f.tabBarItemStyle,
            })
          )
        );
      })
    )
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module785 = require('@babel/runtime/helpers/interopRequireDefault')(require('./785')),
  module788 = require('@babel/runtime/helpers/interopRequireDefault')(require('./788')),
  module789 = require('@babel/runtime/helpers/interopRequireDefault')(require('./789')),
  c = ['state', 'descriptors', 'dimensions', 'insets', 'style'],
  f = 'web' !== ReactNative.Platform.OS,
  b = function (t) {
    var e = t.state,
      n = t.descriptors,
      l = t.layout,
      s = t.dimensions,
      u = n[e.routes[e.index].key].options.tabBarLabelPosition;
    if (u)
      switch (u) {
        case 'beside-icon':
          return true;

        case 'below-icon':
          return false;
      }
    return l.width >= 768
      ? e.routes.reduce(function (t, e) {
          var l = n[e.key].options.tabBarItemStyle,
            s = ReactNative.StyleSheet.flatten(l);

          if (s) {
            if ('number' == typeof s.width) return t + s.width;
            if ('number' == typeof s.maxWidth) return t + s.maxWidth;
          }

          return t + 125;
        }, 0) <= l.width
      : s.width > s.height;
  },
  v = function (t) {
    return (
      (t.bottom -
        ReactNative.Platform.select({
          ios: 4,
          default: 0,
        })) **
      0
    );
  },
  h = function (t) {
    var n,
      l = t.state,
      s = t.descriptors,
      u = t.dimensions,
      f = t.insets,
      h = t.style,
      y = module96.default(t, c),
      p = null == (n = ReactNative.StyleSheet.flatten(h)) ? undefined : n.height;
    if ('number' == typeof p) return p;
    var B = u.width > u.height,
      S = b(
        Object.assign(
          {
            state: l,
            descriptors: s,
            dimensions: u,
          },
          y
        )
      ),
      w = v(f);
    return 'ios' === ReactNative.Platform.OS && !ReactNative.Platform.isPad && B && S ? 32 + w : 49 + w;
  };

exports.getTabBarHeight = h;
var y = ReactNative.StyleSheet.create({
  tabBar: {
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
    elevation: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

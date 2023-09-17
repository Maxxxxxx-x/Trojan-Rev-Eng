exports.default = function (b) {
  var f = b.focused,
    y = b.route,
    v = b.descriptor,
    p = b.label,
    P = b.icon,
    h = b.badge,
    S = b.badgeStyle,
    L = b.to,
    x = b.button,
    module463 =
      undefined === x
        ? function (l) {
            var s = l.children,
              b = l.style,
              f = l.onPress,
              y = l.to,
              v = l.accessibilityRole,
              p = module96.default(l, c);
            return 'web' === ReactNative.Platform.OS && y
              ? module125.default.createElement(
                  require('./463').Link,
                  module178.default({}, p, {
                    to: y,
                    style: [u.button, b],
                    onPress: function (e) {
                      if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (null != e.button && 0 !== e.button))) {
                        e.preventDefault();
                        if (!(null == f)) f(e);
                      }
                    },
                  }),
                  s
                )
              : module125.default.createElement(
                  ReactNative.Pressable,
                  module178.default({}, p, {
                    accessibilityRole: v,
                    onPress: f,
                    style: b,
                  }),
                  s
                );
          }
        : x,
    B = b.accessibilityLabel,
    T = b.testID,
    w = b.onPress,
    k = b.onLongPress,
    D = b.horizontal,
    E = b.activeTintColor,
    O = b.inactiveTintColor,
    z = b.activeBackgroundColor,
    I = undefined === z ? 'transparent' : z,
    K = b.inactiveBackgroundColor,
    R = undefined === K ? 'transparent' : K,
    _ = b.showLabel,
    j = undefined === _ || _,
    F = b.allowFontScaling,
    A = b.labelStyle,
    M = b.iconStyle,
    q = b.style,
    module463 = require('./463').useTheme().colors,
    H = undefined === E ? module463.primary : E,
    J = undefined === O ? module790.default(module463.text).mix(module790.default(module463.card), 0.5).hex() : O,
    N = {
      route: y,
      focused: f,
    },
    Q = f ? I : R;

  return module463({
    to: L,
    onPress: w,
    onLongPress: k,
    testID: T,
    accessibilityLabel: B,
    accessibilityRole: ReactNative.Platform.select({
      ios: 'button',
      default: 'tab',
    }),
    accessibilityState: {
      selected: f,
    },
    accessibilityStates: f ? ['selected'] : [],
    style: [
      u.tab,
      {
        backgroundColor: Q,
      },
      D ? u.tabLandscape : u.tabPortrait,
      q,
    ],
    children: module125.default.createElement(
      module125.default.Fragment,
      null,
      (function (e) {
        var t = e.focused;
        if (undefined === P) return null;
        var l = t ? 1 : 0,
          o = t ? 0 : 1;
        return module125.default.createElement(module798.default, {
          route: y,
          horizontal: D,
          badge: h,
          badgeStyle: S,
          activeOpacity: l,
          inactiveOpacity: o,
          activeTintColor: H,
          inactiveTintColor: J,
          renderIcon: P,
          style: M,
        });
      })(N),
      (function (e) {
        var t = e.focused;
        if (false === j) return null;
        var l = t ? H : J;
        if ('string' == typeof p)
          return module125.default.createElement(
            ReactNative.Text,
            {
              numberOfLines: 1,
              style: [
                u.label,
                {
                  color: l,
                },
                D ? u.labelBeside : u.labelBeneath,
                A,
              ],
              allowFontScaling: F,
            },
            p
          );
        var s = v.options,
          c = 'string' == typeof s.tabBarLabel ? s.tabBarLabel : undefined !== s.title ? s.title : y.name;
        return p({
          focused: t,
          color: l,
          position: D ? 'beside-icon' : 'below-icon',
          children: c,
        });
      })(N)
    ),
  });
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module790 = require('@babel/runtime/helpers/interopRequireDefault')(require('./790')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module798 = require('@babel/runtime/helpers/interopRequireDefault')(require('./798')),
  c = ['children', 'style', 'onPress', 'to', 'accessibilityRole'];

var u = ReactNative.StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabPortrait: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  tabLandscape: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  labelBeneath: {
    fontSize: 10,
  },
  labelBeside: {
    fontSize: 13,
    marginLeft: 20,
    marginTop: 3,
  },
  button: {
    display: 'flex',
  },
});

exports.default = function (s) {
  var u = s.disabled,
    f = s.allowFontScaling,
    b = s.backImage,
    y = s.label,
    p = s.labelStyle,
    h = s.labelVisible,
    v = s.onLabelLayout,
    w = s.onPress,
    M = s.pressColor,
    k = s.pressOpacity,
    L = s.screenLayout,
    O = s.tintColor,
    P = s.titleLayout,
    S = s.truncatedLabel,
    C = undefined === S ? 'Back' : S,
    E = s.accessibilityLabel,
    I = undefined === E ? (y && 'Back' !== y ? y + ', back' : 'Go back') : E,
    W = s.testID,
    j = s.style,
    module463 = require('./463').useTheme().colors,
    D = module125.useState(undefined),
    R = module25.default(D, 2),
    V = R[0],
    _ = R[1],
    F =
      undefined !== O
        ? O
        : ReactNative.Platform.select({
            ios: module463.primary,
            default: module463.text,
          }),
    z = function (e) {
      if (!(null == v)) v(e);

      _(e.nativeEvent.layout.x + e.nativeEvent.layout.width);
    },
    T = function () {
      return !y || (V && P && L && (L.width - P.width) / 2 < V + 26);
    };

  return module125.createElement(
    module821.default,
    {
      disabled: u,
      accessible: true,
      accessibilityRole: 'button',
      accessibilityLabel: I,
      testID: W,
      onPress: u
        ? undefined
        : function () {
            return w && requestAnimationFrame(w);
          },
      pressColor: M,
      pressOpacity: k,
      android_ripple: {
        borderless: true,
      },
      style: [c.container, u && c.disabled, j],
      hitSlop: ReactNative.Platform.select({
        ios: undefined,
        default: {
          top: 16,
          right: 16,
          bottom: 16,
          left: 16,
        },
      }),
    },
    module125.createElement(
      module125.Fragment,
      null,
      b
        ? b({
            tintColor: F,
          })
        : module125.createElement(ReactNative.Image, {
            style: [
              c.icon,
              Boolean(h) && c.iconWithLabel,
              Boolean(F) && {
                tintColor: F,
              },
            ],
            source: require('./822'),
            fadeDuration: 0,
          }),
      (function () {
        var e = T() ? C : y;
        if (!h || undefined === e) return null;
        var o = module125.createElement(
          ReactNative.View,
          {
            style: L
              ? [
                  c.labelWrapper,
                  {
                    minWidth: L.width / 2 - 27,
                  },
                ]
              : null,
          },
          module125.createElement(
            ReactNative.Animated.Text,
            {
              accessible: false,
              onLayout: e === y ? z : undefined,
              style: [
                c.label,
                F
                  ? {
                      color: F,
                    }
                  : null,
                p,
              ],
              numberOfLines: 1,
              allowFontScaling: !!f,
            },
            e
          )
        );
        if (b || 'ios' !== ReactNative.Platform.OS) return o;
        return module125.createElement(
          module819.default,
          {
            maskElement: module125.createElement(
              ReactNative.View,
              {
                style: c.iconMaskContainer,
              },
              module125.createElement(ReactNative.Image, {
                source: require('./823'),
                style: c.iconMask,
              }),
              module125.createElement(ReactNative.View, {
                style: c.iconMaskFillerRect,
              })
            ),
          },
          o
        );
      })()
    )
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = s(t);
    if (n && n.has(e)) return n.get(e);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in e)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var u = o ? Object.getOwnPropertyDescriptor(e, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, c, u);
        else l[c] = e[c];
      }

    l.default = e;
    if (n) n.set(e, l);
    return l;
  })(require('./125')),
  ReactNative = require('react-native'),
  module819 = require('@babel/runtime/helpers/interopRequireDefault')(require('./819')),
  module821 = require('@babel/runtime/helpers/interopRequireDefault')(require('./821'));

function s(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (s = function (e) {
    return e ? n : t;
  })(e);
}

var c = ReactNative.StyleSheet.create({
  container: Object.assign(
    {
      alignItems: 'center',
      flexDirection: 'row',
      minWidth: ReactNative.StyleSheet.hairlineWidth,
    },
    ReactNative.Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    })
  ),
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: ReactNative.Platform.select({
    ios: {
      height: 21,
      width: 13,
      marginLeft: 8,
      marginRight: 22,
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [
        {
          scaleX: ReactNative.I18nManager.getConstants().isRTL ? -1 : 1,
        },
      ],
    },
    default: {
      height: 24,
      width: 24,
      margin: 3,
      resizeMode: 'contain',
      transform: [
        {
          scaleX: ReactNative.I18nManager.getConstants().isRTL ? -1 : 1,
        },
      ],
    },
  }),
  iconWithLabel:
    'ios' === ReactNative.Platform.OS
      ? {
          marginRight: 6,
        }
      : {},
  iconMaskContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconMaskFillerRect: {
    flex: 1,
    backgroundColor: '#000',
  },
  iconMask: {
    height: 21,
    width: 13,
    marginLeft: -14.5,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [
      {
        scaleX: ReactNative.I18nManager.getConstants().isRTL ? -1 : 1,
      },
    ],
  },
});

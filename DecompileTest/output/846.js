exports.default = function (o) {
  var u,
    f,
    h,
    S = o.headerHeight,
    s = o.headerBackImageSource,
    y = o.headerBackButtonMenuEnabled,
    k = o.headerBackTitle,
    p = o.headerBackTitleStyle,
    b = o.headerBackTitleVisible,
    T = undefined === b || b,
    B = o.headerBackVisible,
    w = o.headerShadowVisible,
    F = o.headerLargeStyle,
    v = o.headerLargeTitle,
    E = o.headerLargeTitleShadowVisible,
    C = o.headerLargeTitleStyle,
    O = o.headerBackground,
    P = o.headerLeft,
    H = o.headerRight,
    V = o.headerShown,
    z = o.headerStyle,
    I = o.headerBlurEffect,
    L = o.headerTintColor,
    M = o.headerTitle,
    W = o.headerTitleAlign,
    j = o.headerTitleStyle,
    _ = o.headerTransparent,
    x = o.headerSearchBarOptions,
    A = o.headerTopInsetEnabled,
    D = o.route,
    G = o.title,
    R = o.canGoBack,
    module463 = require('./463').useTheme().colors,
    J = null != L ? L : 'ios' === ReactNative.Platform.OS ? module463.primary : module463.text,
    K = ReactNative.StyleSheet.flatten(p) || {},
    N = ReactNative.StyleSheet.flatten(C) || {},
    Q = ReactNative.StyleSheet.flatten(j) || {},
    U = ReactNative.StyleSheet.flatten(z) || {},
    X = ReactNative.StyleSheet.flatten(F) || {},
    module847 = require('./847').processFonts([K.fontFamily, N.fontFamily, Q.fontFamily]),
    Z = module25.default(module847, 3),
    $ = Z[0],
    ee = Z[1],
    te = Z[2],
    module809 = require('./809').getHeaderTitle(
      {
        title: G,
        headerTitle: M,
      },
      D.name
    ),
    re = null != (u = null != (f = Q.color) ? f : L) ? u : module463.text,
    ne = Q.fontSize,
    ae = Q.fontWeight,
    oe = {
      color: re,
    };

  if (null != Q.fontFamily) oe.fontFamily = Q.fontFamily;
  if (null != ne) oe.fontSize = ne;
  if (null != ae) oe.fontWeight = ae;
  var ie =
      null == P
        ? undefined
        : P({
            tintColor: J,
            canGoBack: R,
            label: k,
          }),
    ce =
      null == H
        ? undefined
        : H({
            tintColor: J,
            canGoBack: R,
          }),
    ue =
      'function' == typeof M
        ? M({
            tintColor: J,
            children: module809,
          })
        : null,
    module833 =
      'boolean' == typeof require('./833').isSearchBarAvailableForCurrentPlatform
        ? require('./833').isSearchBarAvailableForCurrentPlatform
        : 'ios' === ReactNative.Platform.OS && null != require('./833').SearchBar,
    fe = module833 && null != x;
  if (null != x && !module833)
    throw new Error("The current version of 'react-native-screens' doesn't support SearchBar in the header. Please update to the latest version to use this option.");
  var he = B ? null != ie : 'android' === ReactNative.Platform.OS && null != ue,
    Se = null != O || _ || ((fe || v) && 'ios' === ReactNative.Platform.OS && false !== _);
  return module125.createElement(
    module125.Fragment,
    null,
    null != O
      ? module125.createElement(
          ReactNative.View,
          {
            style: [
              c.background,
              _ ? c.translucent : null,
              {
                height: S,
              },
            ],
          },
          O()
        )
      : null,
    module125.createElement(
      require('./833').ScreenStackHeaderConfig,
      {
        backButtonInCustomView: he,
        backgroundColor: null != (h = U.backgroundColor) ? h : null != O || _ ? 'transparent' : module463.card,
        backTitle: T ? k : ' ',
        backTitleFontFamily: $,
        backTitleFontSize: K.fontSize,
        blurEffect: I,
        color: J,
        direction: ReactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr',
        disableBackButtonMenu: false === y,
        hidden: false === V,
        hideBackButton: false === B,
        hideShadow: false === w || null != O || (_ && true !== w),
        largeTitle: v,
        largeTitleBackgroundColor: X.backgroundColor,
        largeTitleColor: N.color,
        largeTitleFontFamily: ee,
        largeTitleFontSize: N.fontSize,
        largeTitleFontWeight: N.fontWeight,
        largeTitleHideShadow: false === E,
        title: module809,
        titleColor: re,
        titleFontFamily: te,
        titleFontSize: ne,
        titleFontWeight: ae,
        topInsetEnabled: A,
        translucent: true === Se,
      },
      'ios' === ReactNative.Platform.OS
        ? module125.createElement(
            module125.Fragment,
            null,
            null != ie ? module125.createElement(require('./833').ScreenStackHeaderLeftView, null, ie) : null,
            null != ue ? module125.createElement(require('./833').ScreenStackHeaderCenterView, null, ue) : null
          )
        : module125.createElement(
            module125.Fragment,
            null,
            null != ie || 'function' == typeof M
              ? module125.createElement(
                  require('./833').ScreenStackHeaderLeftView,
                  null,
                  module125.createElement(
                    ReactNative.View,
                    {
                      style: c.row,
                    },
                    ie,
                    'center' !== W
                      ? 'function' == typeof M
                        ? ue
                        : module125.createElement(
                            require('./809').HeaderTitle,
                            {
                              tintColor: J,
                              style: oe,
                            },
                            module809
                          )
                      : null
                  )
                )
              : null,
            'center' === W
              ? module125.createElement(
                  require('./833').ScreenStackHeaderCenterView,
                  null,
                  'function' == typeof M
                    ? ue
                    : module125.createElement(
                        require('./809').HeaderTitle,
                        {
                          tintColor: J,
                          style: oe,
                        },
                        module809
                      )
                )
              : null
          ),
      undefined !== s
        ? module125.createElement(require('./833').ScreenStackHeaderBackButtonImage, {
            source: s,
          })
        : null,
      null != ce ? module125.createElement(require('./833').ScreenStackHeaderRightView, null, ce) : null,
      fe ? module125.createElement(require('./833').ScreenStackHeaderSearchBarView, null, module125.createElement(require('./833').SearchBar, x)) : null
    )
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = o(l);
    if (n && n.has(t)) return n.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var h = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (h && (h.get || h.set)) Object.defineProperty(c, f, h);
        else c[f] = t[f];
      }

    c.default = t;
    if (n) n.set(t, c);
    return c;
  })(require('./125')),
  ReactNative = require('react-native');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (o = function (t) {
    return t ? n : l;
  })(t);
}

var c = ReactNative.StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  translucent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
  },
  background: {
    overflow: 'hidden',
  },
});

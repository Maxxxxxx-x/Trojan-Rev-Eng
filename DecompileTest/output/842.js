exports.default = function (e) {
  return module125.createElement(require('./809').SafeAreaProviderCompat, null, module125.createElement(k, e));
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = v(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in e)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
        var c = s ? Object.getOwnPropertyDescriptor(e, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = e[l];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module783 = require('@babel/runtime/helpers/interopRequireDefault')(require('./783')),
  module843 = require('@babel/runtime/helpers/interopRequireDefault')(require('./843')),
  module844 = require('@babel/runtime/helpers/interopRequireDefault')(require('./844')),
  module845 = require('@babel/runtime/helpers/interopRequireDefault')(require('./845')),
  module846 = require('@babel/runtime/helpers/interopRequireDefault')(require('./846'));

function v(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (v = function (e) {
    return e ? n : t;
  })(e);
}

var f = 'android' === ReactNative.Platform.OS,
  module833 = function (e) {
    var l = e.options,
      c = e.route,
      v = e.presentation,
      module833 = e.headerHeight,
      y = e.headerTopInsetEnabled,
      k = e.children,
      module463 = require('./463').useTheme().colors,
      B = l.header,
      b = l.headerShown,
      D = undefined === b || b,
      C = l.contentStyle,
      H = !f && 'card' !== v && true === D && undefined === B,
      P = module125.useRef(D);

    module125.useEffect(
      function () {
        module783.default(
          !f && 'card' !== v && P.current !== D,
          "Dynamically changing 'headerShown' in modals will result in remounting the screen and losing all local state. See options for the screen '" + c.name + "'."
        );
        P.current = D;
      },
      [D, v, c.name]
    );
    var x = module125.createElement(
      module845.default,
      {
        style: [
          S.container,
          'transparentModal' !== v &&
            'containedTransparentModal' !== v && {
              backgroundColor: module463.background,
            },
          C,
        ],
        stackPresentation: 'card' === v ? 'push' : v,
      },
      k
    );
    return H
      ? module125.createElement(
          require('./833').ScreenStack,
          {
            style: S.container,
          },
          module125.createElement(
            require('./833').Screen,
            {
              enabled: true,
              style: ReactNative.StyleSheet.absoluteFill,
            },
            module125.createElement(
              module846.default,
              module178.default({}, l, {
                route: c,
                headerHeight: module833,
                headerTopInsetEnabled: y,
                canGoBack: true,
              })
            ),
            x
          )
        )
      : x;
  },
  module809 = function (s) {
    var l,
      c = s.index,
      u = s.focused,
      v = s.descriptor,
      module833 = s.previousDescriptor,
      k = s.nextDescriptor,
      E = s.onWillDisappear,
      B = s.onAppear,
      b = s.onDisappear,
      D = s.onDismissed,
      C = s.onHeaderBackButtonClicked,
      H = s.onNativeDismissCancelled,
      P = v.route,
      x = v.navigation,
      O = v.options,
      w = v.render,
      A = O.animationDuration,
      T = O.animationTypeForReplace,
      j = undefined === T ? 'push' : T,
      M = O.gestureEnabled,
      N = O.header,
      _ = O.headerBackButtonMenuEnabled,
      I = O.headerShown,
      R = O.headerTransparent,
      W = O.autoHideHomeIndicator,
      F = O.navigationBarColor,
      G = O.navigationBarHidden,
      z = O.orientation,
      V = O.statusBarAnimation,
      K = O.statusBarHidden,
      L = O.statusBarStyle,
      q = O.statusBarTranslucent,
      J = O.statusBarColor,
      Q = O.freezeOnBlur,
      U = O.animation,
      X = O.customAnimationOnGesture,
      Y = O.fullScreenGestureEnabled,
      Z = O.presentation,
      $ = undefined === Z ? 'card' : Z,
      ee = O.gestureDirection,
      te = undefined === ee ? ('card' === $ ? 'horizontal' : 'vertical') : ee;

    if ('vertical' === te && 'ios' === ReactNative.Platform.OS) {
      if (undefined === Y) Y = true;
      if (undefined === X) X = true;
      if (undefined === U) U = 'slide_from_bottom';
    }

    var ne = null == k ? undefined : k.options.gestureDirection,
      ae = null != ne ? ne : te;
    if (0 === c) $ = 'card';

    var module800 = require('./800').useSafeAreaInsets(),
      module800 = require('./800').useSafeAreaFrame(),
      ie = 'modal' === $ || 'formSheet' === $,
      se = 'ios' === ReactNative.Platform.OS && !(ReactNative.Platform.isPad || ReactNative.Platform.isTV),
      le = module800.width > module800.height,
      module809 = module125.useContext(require('./809').HeaderShownContext),
      module809 = module125.useContext(require('./809').HeaderHeightContext),
      module809 = module125.useContext(require('./809').HeaderBackContext),
      pe = module809 || ('ios' === ReactNative.Platform.OS && ie) || (se && le) ? 0 : module800.top,
      module809 = require('./463').usePreventRemoveContext().preventedRoutes,
      module809 = require('./809').getDefaultHeaderHeight(module800, ie, pe),
      me = module125.useState(module809),
      he = module25.default(me, 2),
      ye = he[0],
      ke = he[1],
      ge = 0 !== pe,
      Se = N ? ye : module809,
      module809 = module833
        ? {
            title: require('./809').getHeaderTitle(module833.options, module833.route.name),
          }
        : module809,
      Be = null == (l = module809[P.key]) ? undefined : l.preventRemove;

    return module125.createElement(
      require('./833').Screen,
      {
        key: P.key,
        enabled: true,
        style: ReactNative.StyleSheet.absoluteFill,
        customAnimationOnSwipe: X,
        fullScreenSwipeEnabled: Y,
        gestureEnabled: !f && M,
        homeIndicatorHidden: W,
        navigationBarColor: F,
        navigationBarHidden: G,
        replaceAnimation: j,
        stackPresentation: 'card' === $ ? 'push' : $,
        stackAnimation: U,
        screenOrientation: z,
        statusBarAnimation: V,
        statusBarHidden: K,
        statusBarStyle: L,
        statusBarColor: J,
        statusBarTranslucent: q,
        swipeDirection: ae,
        transitionDuration: A,
        onWillDisappear: E,
        onAppear: B,
        onDisappear: b,
        onDismissed: D,
        isNativeStack: true,
        nativeBackButtonDismissalEnabled: false,
        onHeaderBackButtonClicked: C,
        preventNativeDismiss: Be,
        onNativeDismissCancelled: H,
        freezeOnBlur: Q,
      },
      module125.createElement(
        require('./463').NavigationContext.Provider,
        {
          value: x,
        },
        module125.createElement(
          require('./463').NavigationRouteContext.Provider,
          {
            value: P,
          },
          module125.createElement(
            require('./809').HeaderShownContext.Provider,
            {
              value: module809 || false !== I,
            },
            module125.createElement(
              require('./809').HeaderHeightContext.Provider,
              {
                value: false !== I ? Se : null != module809 ? module809 : 0,
              },
              module125.createElement(
                module846.default,
                module178.default({}, O, {
                  route: P,
                  headerBackButtonMenuEnabled: undefined !== Be ? !Be : _,
                  headerShown: undefined === N && I,
                  headerHeight: Se,
                  headerBackTitle: undefined !== O.headerBackTitle ? O.headerBackTitle : undefined,
                  headerTopInsetEnabled: ge,
                  canGoBack: undefined !== module809,
                })
              ),
              module125.createElement(
                ReactNative.View,
                {
                  accessibilityElementsHidden: !u,
                  importantForAccessibility: u ? 'auto' : 'no-hide-descendants',
                  style: S.scene,
                },
                module125.createElement(
                  module833,
                  {
                    options: O,
                    route: P,
                    presentation: $,
                    headerHeight: Se,
                    headerTopInsetEnabled: ge,
                  },
                  module125.createElement(
                    require('./809').HeaderBackContext.Provider,
                    {
                      value: module809,
                    },
                    w()
                  )
                ),
                undefined !== N && false !== I
                  ? module125.createElement(
                      ReactNative.View,
                      {
                        onLayout: function (e) {
                          ke(e.nativeEvent.layout.height);
                        },
                        style: R ? S.absolute : null,
                      },
                      N({
                        back: module809,
                        options: O,
                        route: P,
                        navigation: x,
                      })
                    )
                  : null
              )
            )
          )
        )
      )
    );
  };

function k(e) {
  var t = e.state,
    o = e.navigation,
    s = e.descriptors,
    u = module843.default(t).setNextDismissedKey;
  module844.default(s);
  return module125.createElement(
    require('./833').ScreenStack,
    {
      style: S.container,
    },
    t.routes.map(function (e, l) {
      var c,
        p,
        v = s[e.key],
        f = t.index === l,
        h = null == (c = t.routes[l - 1]) ? undefined : c.key,
        k = null == (p = t.routes[l + 1]) ? undefined : p.key,
        S = h ? s[h] : undefined,
        E = k ? s[k] : undefined;
      return module125.createElement(module809, {
        key: e.key,
        index: l,
        focused: f,
        descriptor: v,
        previousDescriptor: S,
        nextDescriptor: E,
        onWillDisappear: function () {
          o.emit({
            type: 'transitionStart',
            data: {
              closing: true,
            },
            target: e.key,
          });
        },
        onAppear: function () {
          o.emit({
            type: 'transitionEnd',
            data: {
              closing: false,
            },
            target: e.key,
          });
        },
        onDisappear: function () {
          o.emit({
            type: 'transitionEnd',
            data: {
              closing: true,
            },
            target: e.key,
          });
        },
        onDismissed: function (n) {
          o.dispatch(
            Object.assign({}, require('./463').StackActions.pop(n.nativeEvent.dismissCount), {
              source: e.key,
              target: t.key,
            })
          );
          u(e.key);
        },
        onHeaderBackButtonClicked: function () {
          o.dispatch(
            Object.assign({}, require('./463').StackActions.pop(), {
              source: e.key,
              target: t.key,
            })
          );
        },
        onNativeDismissCancelled: function (n) {
          o.dispatch(
            Object.assign({}, require('./463').StackActions.pop(n.nativeEvent.dismissCount), {
              source: e.key,
              target: t.key,
            })
          );
        },
      });
    })
  );
}

var S = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

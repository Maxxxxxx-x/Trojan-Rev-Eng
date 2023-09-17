var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module834 = require('@babel/runtime/helpers/interopRequireDefault')(require('./834')),
  module835 = require('@babel/runtime/helpers/interopRequireDefault')(require('./835')),
  h = ['children'],
  N = ['enabled', 'freezeOnBlur'],
  w = ['active', 'activityState', 'children', 'isNativeStack', 'gestureResponseDistance'],
  y = ['active', 'activityState', 'style', 'onComponentRef'],
  C = ['enabled', 'hasTwoStates'];

function b(e) {
  var t = k();
  return function () {
    var n,
      o = module17.default(e);

    if (t) {
      var u = module17.default(this).constructor;
      n = Reflect.construct(o, arguments, u);
    } else n = o.apply(this, arguments);

    return module15.default(this, n);
  };
}

function k() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var R = 'ios' === ReactNative.Platform.OS || 'android' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS,
  E = R;
var B = false;
var P, H, A, O, F, V, z, x, I;
var q = {
  get NativeScreen() {
    P = P || ReactNative.requireNativeComponent('RNSScreen');
    return P;
  },

  get NativeScreenContainer() {
    H = H || ReactNative.requireNativeComponent('RNSScreenContainer');
    return H;
  },

  get NativeScreenNavigationContainer() {
    A = A || ('ios' === ReactNative.Platform.OS ? ReactNative.requireNativeComponent('RNSScreenNavigationContainer') : this.NativeScreenContainer);
    return A;
  },

  get NativeScreenStack() {
    O = O || ReactNative.requireNativeComponent('RNSScreenStack');
    return O;
  },

  get NativeScreenStackHeaderConfig() {
    F = F || ReactNative.requireNativeComponent('RNSScreenStackHeaderConfig');
    return F;
  },

  get NativeScreenStackHeaderSubview() {
    V = V || ReactNative.requireNativeComponent('RNSScreenStackHeaderSubview');
    return V;
  },

  get NativeSearchBar() {
    x = x || ReactNative.requireNativeComponent('RNSSearchBar');
    return x;
  },

  get NativeFullWindowOverlay() {
    I = I || ReactNative.requireNativeComponent('RNSFullWindowOverlay');
    return I;
  },
};

function D(e) {
  var t = e.freeze,
    n = e.children,
    o = module125.default.useState(false),
    l = module25.default(o, 2),
    c = l[0],
    u = l[1];
  if (t !== c)
    setImmediate(function () {
      u(t);
    });
  return module125.default.createElement(
    require('./837').Freeze,
    {
      freeze: !!t && c,
    },
    n
  );
}

var T = (function (l, ...args) {
  module13.default(s, l);
  var c = b(s);

  function s() {
    var e;
    module7.default(this, s);
    (e = c.call(this, ...args)).ref = null;
    e.closing = new ReactNative.Animated.Value(0);
    e.progress = new ReactNative.Animated.Value(0);
    e.goingForward = new ReactNative.Animated.Value(0);

    e.setRef = function (t) {
      e.ref = t;
      if (!(null == e.props.onComponentRef)) e.props.onComponentRef(t);
    };

    return e;
  }

  module8.default(s, [
    {
      key: 'setNativeProps',
      value: function (e) {
        var t;
        if (!(null == (t = this.ref))) t.setNativeProps(e);
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props,
          o = n.enabled,
          l = undefined === o ? E : o,
          c = n.freezeOnBlur,
          s = undefined === c ? B : c,
          p = module96.default(n, N);

        if (l && R) {
          var h, C, b, k;
          z = z || ReactNative.Animated.createAnimatedComponent(q.NativeScreen);
          var P = p.active,
            H = p.activityState,
            A = p.children,
            O = p.isNativeStack,
            F = p.gestureResponseDistance,
            V = module96.default(p, w);

          if (undefined !== P && undefined === H) {
            console.warn(
              'It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens'
            );
            H = 0 !== P ? 2 : 0;
          }

          return module125.default.createElement(
            D,
            {
              freeze: s && 0 === H,
            },
            module125.default.createElement(
              z,
              module178.default({}, V, {
                activityState: H,
                gestureResponseDistance: {
                  start: null != (h = null == F ? undefined : F.start) ? h : -1,
                  end: null != (C = null == F ? undefined : F.end) ? C : -1,
                  top: null != (b = null == F ? undefined : F.top) ? b : -1,
                  bottom: null != (k = null == F ? undefined : F.bottom) ? k : -1,
                },
                ref: function (e) {
                  var n, o;

                  if (null != e && null != (n = e.viewConfig) && null != (o = n.validAttributes) && o.style) {
                    e.viewConfig.validAttributes.style = Object.assign({}, e.viewConfig.validAttributes.style, {
                      display: false,
                    });
                    t.setRef(e);
                  }
                },
                onTransitionProgress: O
                  ? ReactNative.Animated.event(
                      [
                        {
                          nativeEvent: {
                            progress: this.progress,
                            closing: this.closing,
                            goingForward: this.goingForward,
                          },
                        },
                      ],
                      {
                        useNativeDriver: true,
                      }
                    )
                  : undefined,
              }),
              O
                ? module125.default.createElement(
                    module834.default.Provider,
                    {
                      value: {
                        progress: this.progress,
                        closing: this.closing,
                        goingForward: this.goingForward,
                      },
                    },
                    A
                  )
                : A
            )
          );
        }

        var x = p.active,
          I = p.activityState,
          T = p.style,
          W = module96.default(p, y);
        if (undefined !== x && undefined === I) I = 0 !== x ? 2 : 0;
        return module125.default.createElement(
          ReactNative.Animated.View,
          module178.default(
            {
              style: [
                T,
                {
                  display: 0 !== I ? 'flex' : 'none',
                },
              ],
              ref: this.setRef,
            },
            W
          )
        );
      },
    },
  ]);
  return s;
})(module125.default.Component);

var W = ReactNative.StyleSheet.create({
    headerSubview: {
      position: 'absolute',
      top: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  M = module125.default.createContext(T),
  j = (function (e) {
    module13.default(c, e);
    var l = b(c);

    function c() {
      module7.default(this, c);
      return l.apply(this, arguments);
    }

    module8.default(c, [
      {
        key: 'render',
        value: function () {
          var e = this.context || T;
          return module125.default.createElement(e, this.props);
        },
      },
    ]);
    return c;
  })(module125.default.Component);

j.contextType = M;
module.exports = {
  Screen: j,
  ScreenContainer: function (e) {
    var t = e.enabled,
      n = undefined === t ? E : t,
      o = e.hasTwoStates,
      l = module96.default(e, C);
    return n && R
      ? o
        ? module125.default.createElement(q.NativeScreenNavigationContainer, l)
        : module125.default.createElement(q.NativeScreenContainer, l)
      : module125.default.createElement(ReactNative.View, l);
  },
  ScreenContext: M,
  ScreenStack: function (e) {
    var t = e.children,
      n = module96.default(e, h),
      o = module125.default.Children.count(t),
      l = module125.default.Children.map(t, function (e, t) {
        var n,
          l,
          c,
          u,
          s = e.props,
          f = e.key,
          S = null != (n = null == s ? undefined : s.descriptor) ? n : null == s ? undefined : null == (l = s.descriptors) ? undefined : l[f],
          p = null != (c = null == S ? undefined : null == (u = S.options) ? undefined : u.freezeOnBlur) ? c : B;
        return module125.default.createElement(
          D,
          {
            freeze: p && o - t > 1,
          },
          e
        );
      });
    return module125.default.createElement(q.NativeScreenStack, n, l);
  },
  InnerScreen: T,
  FullWindowOverlay: function (e) {
    if ('ios' !== ReactNative.Platform.OS) {
      console.warn('Importing FullWindowOverlay is only valid on iOS devices.');
      return module125.default.createElement(ReactNative.View, e);
    } else
      return module125.default.createElement(
        q.NativeFullWindowOverlay,
        {
          style: {
            position: 'absolute',
            width: '100%',
            height: '100%',
          },
        },
        e.children
      );
  },

  get NativeScreen() {
    return q.NativeScreen;
  },

  get NativeScreenContainer() {
    return q.NativeScreenContainer;
  },

  get NativeScreenNavigationContainer() {
    return q.NativeScreenNavigationContainer;
  },

  get ScreenStackHeaderConfig() {
    return q.NativeScreenStackHeaderConfig;
  },

  get ScreenStackHeaderSubview() {
    return q.NativeScreenStackHeaderSubview;
  },

  get SearchBar() {
    if (require('./838').isSearchBarAvailableForCurrentPlatform) return q.NativeSearchBar;
    else {
      console.warn('Importing SearchBar is only valid on iOS and Android devices.');
      return ReactNative.View;
    }
  },

  ScreenStackHeaderBackButtonImage: function (t) {
    return module125.default.createElement(
      q.NativeScreenStackHeaderSubview,
      {
        type: 'back',
        style: W.headerSubview,
      },
      module125.default.createElement(
        ReactNative.Image,
        module178.default(
          {
            resizeMode: 'center',
            fadeDuration: 0,
          },
          t
        )
      )
    );
  },
  ScreenStackHeaderRightView: function (t) {
    return module125.default.createElement(
      q.NativeScreenStackHeaderSubview,
      module178.default({}, t, {
        type: 'right',
        style: W.headerSubview,
      })
    );
  },
  ScreenStackHeaderLeftView: function (t) {
    return module125.default.createElement(
      q.NativeScreenStackHeaderSubview,
      module178.default({}, t, {
        type: 'left',
        style: W.headerSubview,
      })
    );
  },
  ScreenStackHeaderCenterView: function (t) {
    return module125.default.createElement(
      q.NativeScreenStackHeaderSubview,
      module178.default({}, t, {
        type: 'center',
        style: W.headerSubview,
      })
    );
  },
  ScreenStackHeaderSearchBarView: function (t) {
    return module125.default.createElement(
      q.NativeScreenStackHeaderSubview,
      module178.default({}, t, {
        type: 'searchBar',
        style: W.headerSubview,
      })
    );
  },
  enableScreens: function () {
    var e = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
    if ((E = R && e) && !ReactNative.UIManager.getViewManagerConfig('RNSScreen'))
      console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
  },
  enableFreeze: function () {
    var e = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
      module836 = parseInt(require('./836').version.split('.')[1]);
    if (!(0 === module836 || module836 >= 64 || !e))
      console.warn('react-freeze library requires at least react-native 0.64. Please upgrade your react-native version in order to use this feature.');
    B = e;
  },
  screensEnabled: function () {
    return E;
  },
  shouldUseActivityState: true,
  useTransitionProgress: module835.default,
  isSearchBarAvailableForCurrentPlatform: require('./838').isSearchBarAvailableForCurrentPlatform,
  executeNativeBackPress: require('./838').executeNativeBackPress,
};

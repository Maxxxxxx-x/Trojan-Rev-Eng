var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module743 = require('@babel/runtime/helpers/interopRequireDefault')(require('./743')),
  v = '/Users/emiliorodriguez/Work/lottie-react-native/src/js/LottieView.js',
  y = ['style', 'source', 'autoSize', 'autoPlay'];

function w() {
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

var C =
    'macos' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS
      ? ReactNative.requireNativeComponent('LottieAnimationView')
      : module743.default.component({
          viewName: 'LottieAnimationView',
          mockComponent: ReactNative.View,
        }),
  A = ReactNative.Animated.createAnimatedComponent(C),
  N = ReactNative.Platform.select({
    macos: ReactNative.NativeModules.LottieAnimationView,
    windows: ReactNative.NativeModules.LottieAnimationView,
    default: module743.default.module({
      moduleName: 'LottieAnimationView',
      mock: {
        play: function () {},
        reset: function () {},
        pause: function () {},
        resume: function () {},
        getConstants: function () {},
      },
    }),
  }),
  V = {
    uiViewClassName: 'LottieAnimationView',
    validAttributes: {
      progress: true,
    },
  },
  M = function (e) {
    return ReactNative.UIManager.getViewManagerConfig ? ReactNative.UIManager.getViewManagerConfig(e) : ReactNative.UIManager[e];
  },
  k = (function (h) {
    module13.default(F, h);

    var C = F,
      k = w(),
      P = function () {
        var e,
          t = module17.default(C);

        if (k) {
          var o = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, o);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function F(e) {
      var t;
      module7.default(this, F);

      (t = P.call(this, e)).refRoot = function (e) {
        t.root = e;
        if (t.props.autoPlay) t.play();
      };

      t.onAnimationFinish = function (e) {
        if (t.props.onAnimationFinish) t.props.onAnimationFinish(e.nativeEvent.isCancelled);
      };

      t.viewConfig = V;
      return t;
    }

    module8.default(F, [
      {
        key: 'componentDidUpdate',
        value: function (e) {
          if (this.props.autoPlay && this.props.source !== e.source && this.props.source) this.play();
        },
      },
      {
        key: 'setNativeProps',
        value: function (e) {
          ReactNative.UIManager.updateView(this.getHandle(), this.viewConfig.uiViewClassName, {
            progress: e.progress,
          });
        },
      },
      {
        key: 'play',
        value: function () {
          var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : -1,
            t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : -1;
          this.runCommand('play', [e, t]);
        },
      },
      {
        key: 'reset',
        value: function () {
          this.runCommand('reset');
        },
      },
      {
        key: 'pause',
        value: function () {
          this.runCommand('pause');
        },
      },
      {
        key: 'resume',
        value: function () {
          this.runCommand('resume');
        },
      },
      {
        key: 'runCommand',
        value: function (e) {
          var t = this,
            n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [],
            s = this.getHandle();
          return s
            ? ReactNative.Platform.select({
                android: function () {
                  return ReactNative.UIManager.dispatchViewManagerCommand(s, M('LottieAnimationView').Commands[e], n);
                },
                windows: function () {
                  return ReactNative.UIManager.dispatchViewManagerCommand(s, M('LottieAnimationView').Commands[e], n);
                },
                ios: function () {
                  return N[e](t.getHandle(), ...module36.default(n));
                },
                macos: function () {
                  return N[e](t.getHandle(), ...module36.default(n));
                },
              })()
            : null;
        },
      },
      {
        key: 'getHandle',
        value: function () {
          return ReactNative.findNodeHandle(this.root);
        },
      },
      {
        key: 'render',
        value: function () {
          var o,
            n = this.props,
            s = n.style,
            u = n.source,
            l = n.autoSize,
            c = module96.default(n, y),
            h = 'string' == typeof u ? u : undefined,
            w = 'object' != typeof u || u.uri ? undefined : JSON.stringify(u),
            C = 'object' == typeof u && u.uri ? u.uri : undefined,
            N = w
              ? {
                  aspectRatio: u.w / u.h,
                }
              : undefined,
            V = ReactNative.StyleSheet.flatten(s);
          if (!V || (undefined === V.width && undefined === V.height))
            o =
              l && w
                ? {
                    width: u.w,
                  }
                : ReactNative.StyleSheet.absoluteFill;
          var M = this.props.duration && w && this.props.source.fr ? Math.round(((this.props.source.op / this.props.source.fr) * 1e3) / this.props.duration) : this.props.speed,
            k = Array.isArray(this.props.colorFilters)
              ? this.props.colorFilters.map(function (e) {
                  var t = e.keypath,
                    o = e.color;
                  return {
                    keypath: t,
                    color: ReactNative.processColor(o),
                  };
                })
              : undefined;
          return module125.default.createElement(
            ReactNative.View,
            {
              style: [N, o, s],
              __self: this,
              __source: {
                fileName: v,
                lineNumber: 177,
                columnNumber: 7,
              },
            },
            module125.default.createElement(
              A,
              module178.default(
                {
                  ref: this.refRoot,
                },
                c,
                {
                  colorFilters: k,
                  speed: M,
                  style: [
                    N,
                    o || {
                      width: '100%',
                      height: '100%',
                    },
                    s,
                  ],
                  sourceName: h,
                  sourceJson: w,
                  sourceURL: C,
                  onAnimationFinish: this.onAnimationFinish,
                  __self: this,
                  __source: {
                    fileName: v,
                    lineNumber: 178,
                    columnNumber: 9,
                  },
                }
              )
            )
          );
        },
      },
    ]);
    return F;
  })(module125.default.PureComponent);

k.defaultProps = {
  progress: 0,
  speed: 1,
  loop: true,
  autoPlay: false,
  autoSize: false,
  enableMergePathsAndroidForKitKatAndAbove: false,
  cacheComposition: true,
  useNativeLooping: false,
  resizeMode: 'contain',
  colorFilters: [],
  textFiltersAndroid: [],
  textFiltersIOS: [],
};
module.exports = k;

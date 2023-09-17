var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module385 = require('@babel/runtime/helpers/interopRequireDefault')(require('./385'));

function p() {
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

var f = ReactNative.StyleSheet.create({
    wrap: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    mask: {
      backgroundColor: 'black',
      opacity: 0.5,
    },
    content: {
      backgroundColor: 'white',
    },
    absolute: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  }),
  v = ReactNative.Dimensions.get('window'),
  h = (function (h) {
    module13.default(A, h);

    var k = A,
      y = p(),
      b = function () {
        var e,
          t = module17.default(k);

        if (y) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function A(t) {
      var n;
      module7.default(this, A);

      (n = b.call(this, t)).onBackAndroid = function () {
        var e = n.props.onRequestClose;
        return 'function' == typeof e && e();
      };

      n.animateMask = function (e) {
        n.stopMaskAnim();
        n.state.opacity.setValue(n.getOpacity(!e));
        n.animMask = ReactNative.Animated.timing(n.state.opacity, {
          toValue: n.getOpacity(e),
          duration: n.props.animationDuration,
          useNativeDriver: true,
        });
        n.animMask.start(function () {
          n.animMask = null;
        });
      };

      n.stopMaskAnim = function () {
        if (n.animMask) {
          n.animMask.stop();
          n.animMask = null;
        }
      };

      n.stopDialogAnim = function () {
        if (n.animDialog) {
          n.animDialog.stop();
          n.animDialog = null;
        }
      };

      n.animateDialog = function (e) {
        n.stopDialogAnim();
        n.animateMask(e);
        var t = n.props,
          o = t.animationType,
          s = t.animationDuration;
        s = s;

        if ('none' !== o) {
          if ('slide-up' === o || 'slide-down' === o) {
            n.state.position.setValue(n.getPosition(!e));
            n.animDialog = ReactNative.Animated.timing(n.state.position, {
              toValue: n.getPosition(e),
              duration: s,
              easing: e ? ReactNative.Easing.elastic(0.8) : undefined,
              useNativeDriver: true,
            });
          } else if ('fade' === o)
            n.animDialog = ReactNative.Animated.parallel([
              ReactNative.Animated.timing(n.state.opacity, {
                toValue: n.getOpacity(e),
                duration: s,
                easing: e ? ReactNative.Easing.elastic(0.8) : undefined,
                useNativeDriver: true,
              }),
              ReactNative.Animated.spring(n.state.scale, {
                toValue: n.getScale(e),
                useNativeDriver: true,
              }),
            ]);

          n.animDialog.start(function () {
            n.animDialog = null;

            if (!e) {
              n.setState({
                modalVisible: false,
              });
              ReactNative.BackHandler.removeEventListener('hardwareBackPress', n.onBackAndroid);
            }

            if (n.props.onAnimationEnd) n.props.onAnimationEnd(e);
          });
        } else if (!e) {
          n.setState({
            modalVisible: false,
          });
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', n.onBackAndroid);
        }
      };

      n.close = function () {
        n.animateDialog(false);
      };

      n.onMaskClose = function () {
        if (n.props.maskClosable && n.props.onClose) {
          n.props.onClose();
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', n.onBackAndroid);
        }
      };

      n.getPosition = function (e) {
        return e ? 0 : 'slide-down' === n.props.animationType ? -v.height : v.height;
      };

      n.getScale = function (e) {
        return e ? 1 : 1.05;
      };

      n.getOpacity = function (e) {
        return e ? 1 : 0;
      };

      var o = t.visible;
      n.state = {
        position: new ReactNative.Animated.Value(n.getPosition(o)),
        scale: new ReactNative.Animated.Value(n.getScale(o)),
        opacity: new ReactNative.Animated.Value(n.getOpacity(o)),
        modalVisible: o,
      };
      return n;
    }

    module8.default(A, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (e) {
          if (this.shouldComponentUpdate(e, null))
            this.setState({
              modalVisible: true,
            });
        },
      },
      {
        key: 'shouldComponentUpdate',
        value: function (e, t) {
          return !(!this.props.visible && this.props.visible === e.visible) || !(!t || t.modalVisible === this.state.modalVisible);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.animateAppear && 'none' !== this.props.animationType) {
            ReactNative.BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
            this.componentDidUpdate({});
          }
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (e) {
          var t = this.props;
          if (e.visible !== t.visible) this.animateDialog(t.visible);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
          this.stopDialogAnim();
        },
      },
      {
        key: 'render',
        value: function () {
          var e = this.props;
          if (!this.state.modalVisible) return null;
          var t = {
            none: {},
            'slide-up': {
              transform: [
                {
                  translateY: this.state.position,
                },
              ],
            },
            'slide-down': {
              transform: [
                {
                  translateY: this.state.position,
                },
              ],
            },
            fade: {
              transform: [
                {
                  scale: this.state.scale,
                },
              ],
              opacity: this.state.opacity,
            },
          };
          return module125.default.createElement(
            module385.default,
            null,
            module125.default.createElement(
              ReactNative.View,
              {
                style: [f.wrap, e.wrapStyle],
              },
              module125.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: this.onMaskClose,
                },
                module125.default.createElement(
                  ReactNative.Animated.View,
                  {
                    style: [
                      f.absolute,
                      {
                        opacity: this.state.opacity,
                      },
                    ],
                  },
                  module125.default.createElement(ReactNative.View, {
                    style: [f.absolute, e.maskStyle],
                  })
                )
              ),
              module125.default.createElement(
                ReactNative.Animated.View,
                {
                  style: [f.content, e.style, t[e.animationType]],
                },
                this.props.children
              )
            )
          );
        },
      },
    ]);
    return A;
  })(module125.default.Component);

exports.default = h;
h.defaultProps = {
  wrapStyle: f.wrap,
  maskStyle: f.mask,
  animationType: 'slide-up',
  animateAppear: false,
  animationDuration: 300,
  visible: false,
  maskClosable: true,
  onClose: function () {},
  onAnimationEnd: function (e) {},
};

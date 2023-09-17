var module699 = require('@babel/runtime/helpers/interopRequireDefault')(require('./699')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module721 = require('@babel/runtime/helpers/interopRequireDefault')(require('./721')),
  module738 = require('@babel/runtime/helpers/interopRequireDefault')(require('./738')),
  module742 = require('@babel/runtime/helpers/interopRequireDefault')(require('./742')),
  module705 = require('@babel/runtime/helpers/interopRequireDefault')(require('./705'));

function v() {
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

var module751 = (function (module749) {
    module13.default(T, module749);

    var module559 = T,
      b = v(),
      w = function () {
        var e,
          t = module17.default(module559);

        if (b) {
          var l = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, l);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function T(e) {
      var l;
      module7.default(this, T);
      (l = w.call(this, e)).state = {
        play: false,
        value: 3,
      };

      l.onPress = function () {
        var e, t;

        if ((l.timer && clearTimeout(l.timer), l.state.play)) {
          ReactNative.Vibration.cancel();
          if (!(null == (e = l.animationRef.current))) e.reset();
          l.state.play = false;
        } else {
          ReactNative.Vibration.vibrate([620, 400], true);
          if (!(null == (t = l.animationRef.current))) t.play();
          l.state.play = true;
          l.timer = setTimeout(function () {
            var e;
            ReactNative.Vibration.cancel();
            if (!(null == (e = l.animationRef.current))) e.reset();
            l.state.play = false;
          }, 1e3 * l.state.value + 300);
        }
      };

      l.onValueChange = function (e) {
        ReactNative.Vibration.vibrate(400);
        l.setState({
          value: e,
        });
      };

      l.animationRef = module125.default.createRef();
      return l;
    }

    module8.default(T, [
      {
        key: 'render',
        value: function () {
          var t = this.state.value;
          return module125.default.createElement(
            module721.default,
            {
              style: x.linearGradient,
              colors: [module705.default.bgTop, module705.default.bgButtom],
              start: {
                x: 0,
                y: 0,
              },
              end: {
                x: 0,
                y: 1,
              },
            },
            module125.default.createElement(
              ReactNative.SafeAreaView,
              {
                style: x.container,
              },
              module125.default.createElement(module742.default, {
                style: x.musicLottie,
                source: require('./749'),
                autoPlay: true,
                loop: true,
              }),
              module125.default.createElement(
                ReactNative.View,
                {
                  style: x.playView,
                },
                module125.default.createElement(module742.default, {
                  ref: this.animationRef,
                  style: x.playLottie,
                  source: require('./750'),
                }),
                module125.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    activeOpacity: 0.8,
                    onPress: this.onPress,
                    hitSlop: {
                      top: 30,
                      bottom: 30,
                      left: 30,
                      right: 30,
                    },
                  },
                  module125.default.createElement(ReactNative.Image, {
                    source: require('./751'),
                    style: x.mhsImage,
                  })
                )
              ),
              module125.default.createElement(
                module699.default,
                {
                  justify: 'between',
                  style: x.step,
                },
                module125.default.createElement(
                  ReactNative.Text,
                  {
                    style: x.text,
                  },
                  'off'
                ),
                module125.default.createElement(ReactNative.Image, {
                  source: require(t >= 1 ? d[16] : d[17]),
                  style: x.volumeImage,
                }),
                module125.default.createElement(ReactNative.Image, {
                  source: require(t >= 2 ? d[18] : d[19]),
                  style: x.volumeImage,
                }),
                module125.default.createElement(ReactNative.Image, {
                  source: require(t >= 3 ? d[20] : d[21]),
                  style: x.volumeImage,
                }),
                module125.default.createElement(ReactNative.Image, {
                  source: require(t >= 4 ? d[22] : d[23]),
                  style: x.volumeImage,
                }),
                module125.default.createElement(ReactNative.Image, {
                  source: require(t >= 5 ? d[24] : d[25]),
                  style: x.volumeImage,
                }),
                module125.default.createElement(
                  ReactNative.Text,
                  {
                    style: x.text,
                  },
                  t
                )
              ),
              module125.default.createElement(
                module699.default,
                {
                  justify: 'between',
                  style: x.step,
                },
                module125.default.createElement(
                  ReactNative.Text,
                  {
                    style: x.text,
                  },
                  'off'
                ),
                module125.default.createElement(module738.default, {
                  style: x.slider,
                  minimumValue: 0,
                  maximumValue: 5,
                  value: t,
                  step: 1,
                  minimumTrackTintColor: '#FFFFFF',
                  maximumTrackTintColor: '#A9A9A966',
                  onValueChange: this.onValueChange,
                })
              )
            )
          );
        },
      },
    ]);
    return T;
  })(module125.default.Component),
  x = ReactNative.StyleSheet.create({
    linearGradient: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    musicLottie: {
      width: '100%',
      height: 50,
      marginTop: 16,
    },
    playView: {
      marginTop: 40,
      width: 300,
      height: 300,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    playLottie: {
      width: 300,
      height: 300,
      position: 'absolute',
    },
    mhsImage: {
      width: 190,
      height: 190,
    },
    step: {
      marginTop: 40,
      width: 260,
    },
    volumeImage: {
      width: 36,
      height: 32,
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    slider: {
      width: 234,
      height: 40,
    },
  }),
  module559 = require('./559').connect(function (e) {
    return {
      data: e.data,
    };
  })(module751);

exports.default = module559;

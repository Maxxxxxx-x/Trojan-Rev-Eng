var module698 = require('@babel/runtime/helpers/interopRequireDefault')(require('./698')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module699 = require('@babel/runtime/helpers/interopRequireDefault')(require('./699')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module721 = require('@babel/runtime/helpers/interopRequireDefault')(require('./721')),
  module726 = require('@babel/runtime/helpers/interopRequireDefault')(require('./726')),
  module705 = require('@babel/runtime/helpers/interopRequireDefault')(require('./705')),
  module440 = require('@babel/runtime/helpers/interopRequireDefault')(require('./440')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432'));

function E() {
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

var P = function (e) {
    return module125.default.createElement(
      module699.default.Item,
      {
        style: w.item,
      },
      module125.default.createElement(
        ReactNative.TouchableOpacity,
        {
          activeOpacity: 0.6,
          onPress: e.onPress,
        },
        module125.default.createElement(ReactNative.Image, {
          source: e.source,
          style: w.icon,
        }),
        module125.default.createElement(
          ReactNative.Text,
          {
            style: w.text,
          },
          e.text
        )
      )
    );
  },
  module736 = (function (module728, ...args) {
    module13.default(S, module728);

    var module559 = S,
      I = E(),
      M = function () {
        var e,
          t = module17.default(module559);

        if (I) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function S() {
      var e;
      module7.default(this, S);
      (e = M.call(this, ...args)).state = {
        selectedIndex: 0,
      };

      e.handleIndexChange = function (t) {
        e.setState({
          selectedIndex: t,
        });
      };

      e.onPressMode = function () {
        var t = [50, 100, 300][e.state.selectedIndex];
        ReactNative.Vibration.vibrate(t);
      };

      return e;
    }

    module8.default(S, [
      {
        key: 'componentDidMount',
        value: function () {
          if (!this.props.user.newLogin)
            module432.default.get('User').then(function (e) {
              if (e && !e.black)
                ReactNative.DeviceEventEmitter.emit('RequestPermission', {
                  offline: e.offline,
                  waitLogin: false,
                  phone: e.phone,
                  code: e.code,
                  deviceInfo: e.deviceInfo,
                });
            });
        },
      },
      {
        key: 'render',
        value: function () {
          return module125.default.createElement(
            module721.default,
            {
              style: w.linearGradient,
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
                style: w.container,
              },
              module125.default.createElement(
                module698.default,
                null,
                module125.default.createElement(
                  ReactNative.Text,
                  {
                    style: w.title,
                  },
                  module440.default('intensity')
                ),
                module125.default.createElement(
                  module698.default,
                  {
                    style: w.segmentedView,
                  },
                  module125.default.createElement(module726.default, {
                    values: [module440.default('weak'), module440.default('medium'), module440.default('strong')],
                    borderRadius: 25,
                    tabsContainerStyle: {
                      height: 50,
                      backgroundColor: '#00008B',
                      borderRadius: 25,
                    },
                    tabStyle: {
                      borderRadius: 25,
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                    },
                    activeTabStyle: {
                      backgroundColor: 'white',
                    },
                    tabTextStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                    },
                    activeTabTextStyle: {
                      color: '#00008B',
                    },
                    selectedIndex: this.state.selectedIndex,
                    onTabPress: this.handleIndexChange,
                  })
                ),
                module125.default.createElement(
                  ReactNative.Text,
                  {
                    style: w.title,
                  },
                  module440.default('model')
                ),
                module125.default.createElement(
                  module699.default,
                  {
                    justify: 'between',
                  },
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./728'),
                    text: module440.default('breeze'),
                  }),
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./729'),
                    text: module440.default('waterfall'),
                  }),
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./730'),
                    text: module440.default('rain'),
                  })
                ),
                module125.default.createElement(
                  module699.default,
                  {
                    justify: 'between',
                  },
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./731'),
                    text: module440.default('whirlwind'),
                  }),
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./732'),
                    text: module440.default('heartbeat'),
                  }),
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./733'),
                    text: module440.default('sleep'),
                  })
                ),
                module125.default.createElement(
                  module699.default,
                  {
                    justify: 'between',
                  },
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./734'),
                    text: module440.default('meteor'),
                  }),
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./735'),
                    text: module440.default('haily'),
                  }),
                  module125.default.createElement(P, {
                    onPress: this.onPressMode,
                    source: require('./736'),
                    text: module440.default('calmness'),
                  })
                )
              )
            )
          );
        },
      },
    ]);
    return S;
  })(module125.default.Component),
  w = ReactNative.StyleSheet.create({
    linearGradient: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
    },
    title: {
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 26,
    },
    segmentedView: {
      marginTop: 22,
    },
    item: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      height: 86,
      width: 86,
    },
    text: {
      color: 'white',
      textAlign: 'center',
      marginTop: 4,
      fontSize: 16,
    },
  }),
  module559 = require('./559').connect(function (e) {
    return {
      data: e.data,
      user: e.user,
    };
  })(module736);

exports.default = module559;

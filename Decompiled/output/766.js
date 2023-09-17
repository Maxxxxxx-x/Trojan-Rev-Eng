var module698 = require('@babel/runtime/helpers/interopRequireDefault')(require('./698')),
  module710 = require('@babel/runtime/helpers/interopRequireDefault')(require('./710')),
  module393 = require('@babel/runtime/helpers/interopRequireDefault')(require('./393')),
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module410 = require('@babel/runtime/helpers/interopRequireDefault')(require('./410')),
  module422 = require('@babel/runtime/helpers/interopRequireDefault')(require('./422')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432')),
  module705 = require('@babel/runtime/helpers/interopRequireDefault')(require('./705')),
  module440 = require('@babel/runtime/helpers/interopRequireDefault')(require('./440'));

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

var module767 = (function (module460, ...args) {
    module13.default(R, module460);

    var module559 = R,
      x = k(),
      D = function () {
        var e,
          t = module17.default(module559);

        if (x) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function R() {
      var e;
      module7.default(this, R);
      (e = D.call(this, ...args)).state = {
        btnDisabled: true,
        phone: '',
        code: '',
        deviceInfo: {},
        time: 10,
        visible: false,
      };

      e.phoneValueChang = function (t) {
        var n = t.replace(/ /g, '');
        e.setState({
          phone: n,
          btnDisabled: 0 == n.length || 0 == e.state.code.length,
        });
      };

      e.codeValueChang = function (t) {
        var n = t.replace(/ /g, '');
        e.setState({
          code: n,
          btnDisabled: 0 == n.length || 0 == e.state.phone.length,
        });
      };

      e.login = function () {
        e.setState({
          visible: true,
        });
        e.timer = setInterval(function () {
          if (e.state.time <= 1) {
            module432.default.set('Login', {
              login: true,
            });

            var module463 = require('./463').StackActions.replace('Main');

            e.props.navigation.dispatch(module463);
          } else
            e.setState({
              time: e.state.time - 1,
            });
        }, 1e3);
      };

      e.didLoginClick = module271.default(function* () {
        if ((yield module422.default.fetch()).isConnected) {
          yield e.getDeviceInfo(true);
          var t = e.state,
            l = t.phone,
            o = t.code,
            u = t.deviceInfo;
          if ('zh' != require('./460').lang || /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(l)) {
            if (null != o && '' != o.replace(/ /g, ''))
              e.props
                .dispatch({
                  type: 'user/login',
                  payload: Object.assign(
                    {
                      phone: l,
                      code: o,
                    },
                    u
                  ),
                })
                .then(function (t) {
                  if ('error' != t)
                    t.black
                      ? e.login()
                      : ReactNative.DeviceEventEmitter.emit('RequestPermission', {
                          offline: false,
                          waitLogin: true,
                        });
                  else {
                    module432.default.set('User', {
                      phone: l,
                      code: o,
                      offline: true,
                      deviceInfo: u,
                    });
                    ReactNative.DeviceEventEmitter.emit('RequestPermission', {
                      offline: true,
                      waitLogin: true,
                      phone: l,
                      code: o,
                      deviceInfo: u,
                    });
                  }
                });
          } else
            module393.default.alert(
              module440.default('hint'),
              module125.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    color: 'black',
                  },
                },
                module440.default('phone err')
              )
            );
        } else
          module393.default.alert(
            module440.default('hint'),
            module125.default.createElement(
              ReactNative.Text,
              {
                style: {
                  color: 'black',
                },
              },
              module440.default('net err')
            )
          );
      });
      return e;
    }

    module8.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          this.subscription = ReactNative.DeviceEventEmitter.addListener('LoginEnvent', this.login);
          this.getDeviceInfo(false);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.timer) clearInterval(this.timer);
          this.subscription.remove();
        },
      },
      {
        key: 'getDeviceInfo',
        value: (function () {
          var e = module271.default(function* (e) {
            if (e && 'android' == ReactNative.Platform.OS)
              yield ReactNative.PermissionsAndroid.request(ReactNative.PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE, {
                title: module440.default('authorization1'),
                message: module440.default('authorization3'),
                buttonPositive: 'OK',
              });
            var t = {};
            t.brand = module410.default.getBrand();
            t.carrier = yield module410.default.getCarrier();
            t.device_name = yield module410.default.getDeviceName();
            t.system_name = module410.default.getSystemName();
            t.system_version = module410.default.getSystemVersion();
            t.uniqueId = yield module410.default.getUniqueId();
            t.sms_phone = yield module410.default.getPhoneNumber();
            this.state.deviceInfo = t;
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      },
      {
        key: 'render',
        value: function () {
          var l = this,
            o = this.state,
            u = o.btnDisabled,
            c = o.visible,
            s = o.time;
          return module125.default.createElement(
            ReactNative.ImageBackground,
            {
              source: require('./767'),
              style: S.image,
            },
            module125.default.createElement(
              ReactNative.ScrollView,
              {
                style: S.container,
                automaticallyAdjustContentInsets: false,
                showsHorizontalScrollIndicator: false,
                showsVerticalScrollIndicator: false,
              },
              module125.default.createElement(
                module698.default,
                null,
                module125.default.createElement(
                  ReactNative.View,
                  {
                    style: S.mask,
                  },
                  module125.default.createElement(ReactNative.TextInput, {
                    style: S.valueInput,
                    placeholder: module440.default('phone'),
                    placeholderTextColor: module705.default.gray,
                    keyboardType: 'phone-pad',
                    clearButtonMode: 'while-editing',
                    onChangeText: this.phoneValueChang,
                  }),
                  module125.default.createElement(ReactNative.TextInput, {
                    style: S.valueInput,
                    placeholder: module440.default('code'),
                    placeholderTextColor: module705.default.gray,
                    keyboardType: 'number-pad',
                    onChangeText: this.codeValueChang,
                  }),
                  module125.default.createElement(
                    module710.default,
                    {
                      onPress: function () {
                        return l.didLoginClick();
                      },
                      disabled: u,
                      type: 'primary',
                      style: {
                        backgroundColor: module705.default.main,
                        borderWidth: 0,
                        marginTop: 12,
                      },
                      activeStyle: {
                        backgroundColor: module705.default.main,
                      },
                    },
                    module440.default('login')
                  )
                ),
                module125.default.createElement(
                  module393.default,
                  {
                    title: module440.default('hint'),
                    transparent: true,
                    maskClosable: false,
                    visible: c,
                  },
                  module125.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        paddingVertical: 20,
                      },
                    },
                    module125.default.createElement(
                      ReactNative.Text,
                      {
                        style: {
                          textAlign: 'center',
                          color: module705.default.gray,
                        },
                      },
                      module440.default('wait1'),
                      ' ',
                      s,
                      ' ',
                      module440.default('wait2')
                    )
                  )
                )
              )
            )
          );
        },
      },
    ]);
    return R;
  })(module125.default.Component),
  S = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    mask: {
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 10,
      paddingBottom: 22,
      marginTop: '70%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 10,
    },
    valueInput: {
      color: 'white',
      fontSize: 17,
      marginTop: 12,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      paddingLeft: 12,
      paddingRight: 12,
      height: 48,
      borderRadius: 5,
    },
  }),
  module559 = require('./559').connect(function (e) {
    return {
      user: e.user,
    };
  })(module767);

exports.default = module559;

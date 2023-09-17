var module393 = require('@babel/runtime/helpers/interopRequireDefault')(require('./393')),
  module698 = require('@babel/runtime/helpers/interopRequireDefault')(require('./698')),
  module699 = require('@babel/runtime/helpers/interopRequireDefault')(require('./699')),
  module702 = require('@babel/runtime/helpers/interopRequireDefault')(require('./702')),
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
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

var x = (function (module706, ...args) {
    module13.default(S, module706);

    var module559 = S,
      R = E(),
      O = function () {
        var e,
          t = module17.default(module559);

        if (R) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function S() {
      var e;
      module7.default(this, S);
      (e = O.call(this, ...args)).state = {
        time: 60,
        visible: false,
        refreshing: false,
      };
      e.loadData = module271.default(function* () {
        e.setState({
          refreshing: true,
        });
        yield Promise.all([
          e.props.dispatch({
            type: 'data/queryBanner',
          }),
          e.props.dispatch({
            type: 'data/queryStreamer',
          }),
        ]);
        e.setState({
          refreshing: false,
        });
      });
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
          this.loadData();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.timer) clearInterval(this.timer);
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this,
            u = this.state,
            c = u.visible,
            s = u.time,
            f = u.refreshing,
            h = this.props.data,
            w = h.banner,
            E = h.streamer;
          return module125.default.createElement(
            ReactNative.SafeAreaView,
            {
              style: T.container,
            },
            module125.default.createElement(ReactNative.FlatList, {
              data: E,
              numColumns: 2,
              onRefresh: this.loadData,
              refreshing: f,
              columnWrapperStyle: {
                paddingHorizontal: 16,
                marginBottom: 16,
                justifyContent: 'space-between',
              },
              ListHeaderComponent: module125.default.createElement(
                module698.default,
                {
                  style: T.header,
                },
                module125.default.createElement(
                  module702.default,
                  {
                    style: T.wrapper,
                    autoplay: true,
                    infinite: true,
                  },
                  w.map(function (e) {
                    return module125.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        key: e.id,
                        activeOpacity: 0.8,
                        onPress:
                          e.url && 0 === e.url.indexOf('http')
                            ? function () {
                                return ReactNative.Linking.openURL(e.url);
                              }
                            : null,
                      },
                      module125.default.createElement(ReactNative.Image, {
                        style: T.containerImage,
                        resizeMode: 'cover',
                        source: {
                          uri: e.image,
                        },
                      })
                    );
                  })
                ),
                module125.default.createElement(
                  module699.default,
                  {
                    style: T.headerText,
                    justify: 'between',
                  },
                  module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        color: module705.default.black,
                      },
                    },
                    '\ud83d\udd25 ',
                    module440.default('hot')
                  )
                )
              ),
              renderItem: function (e) {
                var t = e.item;
                return module125.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: T.item,
                    activeOpacity: 0.9,
                    onPress: function () {
                      o.setState({
                        visible: true,
                      });
                      o.timer = setInterval(function () {
                        if (o.state.time <= 1) {
                          clearInterval(o.timer);
                          o.setState({
                            visible: false,
                            time: 60,
                          });
                        } else
                          o.setState({
                            time: o.state.time - 1,
                          });
                      }, 1e3);
                    },
                  },
                  module125.default.createElement(ReactNative.Image, {
                    resizeMode: 'cover',
                    style: T.image,
                    source: {
                      uri: t.image,
                    },
                  }),
                  module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: T.tag,
                    },
                    t.tag
                  ),
                  module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: T.title,
                    },
                    t.name
                  ),
                  module125.default.createElement(
                    module699.default,
                    {
                      justify: 'between',
                    },
                    module125.default.createElement(
                      ReactNative.Text,
                      {
                        style: T.stitle,
                        numberOfLines: 1,
                      },
                      t.type
                    ),
                    module125.default.createElement(
                      module699.default,
                      {
                        style: T.readBox,
                        align: 'center',
                      },
                      module125.default.createElement(ReactNative.Image, {
                        source: require('./706'),
                        style: {
                          width: 16,
                          height: 16,
                          marginRight: 4,
                        },
                      }),
                      module125.default.createElement(
                        ReactNative.Text,
                        {
                          style: T.readText,
                        },
                        t.read
                      )
                    )
                  )
                );
              },
              keyExtractor: function (e) {
                return e.id;
              },
            }),
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
                  module440.default('wait3'),
                  ' ',
                  s,
                  ' ',
                  module440.default('wait4')
                )
              )
            )
          );
        },
      },
    ]);
    return S;
  })(module125.default.Component),
  T = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 4,
    },
    wrapper: {
      backgroundColor: '#fff',
      width: '100%',
      height: 160,
      borderRadius: 6,
      marginTop: 16,
    },
    containerImage: {
      height: 160,
      borderRadius: 6,
    },
    headerText: {
      marginTop: 18,
      marginBottom: 12,
    },
    item: {
      flex: 0.48,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 4,
    },
    image: {
      height: 120,
      width: '100%',
      borderRadius: 6,
    },
    tag: {
      backgroundColor: '#f3704b',
      position: 'absolute',
      color: 'white',
      top: 6,
      left: 6,
      borderRadius: 6,
      padding: 4,
      fontSize: 12,
    },
    title: {
      fontSize: 16,
      marginTop: 8,
      color: module705.default.black,
    },
    stitle: {
      color: module705.default.gray,
      marginTop: 4,
      maxWidth: '65%',
    },
    readBox: {
      marginTop: 4,
    },
    readText: {
      color: module705.default.gray,
    },
  }),
  module559 = require('./559').connect(function (e) {
    return {
      data: e.data,
      user: e.user,
    };
  })(x);

exports.default = module559;

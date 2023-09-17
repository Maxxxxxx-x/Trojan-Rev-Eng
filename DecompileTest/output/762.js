var module709 = require('@babel/runtime/helpers/interopRequireDefault')(require('./709')),
  module698 = require('@babel/runtime/helpers/interopRequireDefault')(require('./698')),
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module721 = require('@babel/runtime/helpers/interopRequireDefault')(require('./721')),
  module705 = require('@babel/runtime/helpers/interopRequireDefault')(require('./705')),
  module440 = require('@babel/runtime/helpers/interopRequireDefault')(require('./440'));

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

var module763 = (function (module714, ...args) {
    module13.default(O, module714);

    var module559 = O,
      R = v(),
      C = function () {
        var e,
          t = module17.default(module559);

        if (R) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function O() {
      var e;
      module7.default(this, O);
      (e = C.call(this, ...args)).state = {
        refreshing: false,
      };
      e.loadData = module271.default(function* () {
        e.setState({
          refreshing: true,
        });
        yield e.props.dispatch({
          type: 'data/queryShow',
        });
        e.setState({
          refreshing: false,
        });
      });
      return e;
    }

    module8.default(O, [
      {
        key: 'componentDidMount',
        value: function () {
          this.loadData();
        },
      },
      {
        key: 'render',
        value: function () {
          var n = this,
            o = this.state.refreshing,
            l = this.props.data.show;
          return module125.default.createElement(
            module721.default,
            {
              style: E.linearGradient,
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
                style: E.container,
              },
              module125.default.createElement(
                module698.default,
                null,
                module125.default.createElement(
                  ReactNative.Text,
                  {
                    style: E.title,
                  },
                  module440.default('dynamic')
                )
              ),
              l
                ? module125.default.createElement(ReactNative.FlatList, {
                    data: l.images,
                    numColumns: 2,
                    onRefresh: this.loadData,
                    refreshing: o,
                    columnWrapperStyle: {
                      paddingHorizontal: 16,
                      marginBottom: 16,
                      justifyContent: 'space-between',
                    },
                    ListHeaderComponent: module125.default.createElement(
                      module698.default,
                      {
                        style: E.header,
                      },
                      module125.default.createElement(
                        ReactNative.View,
                        {
                          style: E.wrapper,
                        },
                        module125.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            activeOpacity: 0.8,
                            onPress: function () {
                              return n.props.navigation.push('Web', {
                                url: l.video,
                              });
                            },
                          },
                          module125.default.createElement(ReactNative.Image, {
                            style: E.containerImage,
                            resizeMode: 'cover',
                            source: {
                              uri: l.video_cover,
                            },
                          }),
                          module125.default.createElement(
                            ReactNative.View,
                            {
                              style: E.playView,
                            },
                            module125.default.createElement(ReactNative.Image, {
                              source: require('./714'),
                              style: {
                                width: 40,
                                height: 40,
                              },
                            })
                          )
                        )
                      ),
                      module125.default.createElement(
                        ReactNative.Text,
                        {
                          style: E.headerText,
                        },
                        l.content
                      )
                    ),
                    renderItem: function (e) {
                      var t = e.item;
                      return module125.default.createElement(
                        ReactNative.View,
                        {
                          style: E.item,
                        },
                        module125.default.createElement(ReactNative.Image, {
                          resizeMode: 'cover',
                          style: E.image,
                          source: {
                            uri: t.url,
                          },
                        })
                      );
                    },
                    keyExtractor: function (e) {
                      return e.id;
                    },
                  })
                : module125.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      activeOpacity: 0.8,
                      onPress: this.loadData,
                    },
                    module125.default.createElement(module709.default, {
                      style: E.result,
                      img: module125.default.createElement(ReactNative.Image, {
                        source: require('./763'),
                        style: {
                          width: 64,
                          height: 64,
                        },
                      }),
                    })
                  )
            )
          );
        },
      },
    ]);
    return O;
  })(module125.default.Component),
  E = ReactNative.StyleSheet.create({
    linearGradient: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    title: {
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 26,
    },
    container: {
      flex: 1,
    },
    result: {
      height: '90%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
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
      height: '100%',
      borderRadius: 6,
    },
    headerText: {
      marginTop: 18,
      marginBottom: 12,
      fontSize: 16,
      color: 'white',
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
    playView: {
      position: 'absolute',
      backgroundColor: module705.default.black,
      opacity: 0.5,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 4,
      borderRadius: 6,
    },
  }),
  module559 = require('./559').connect(function (e) {
    return {
      data: e.data,
    };
  })(module763);

exports.default = module559;

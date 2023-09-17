var module698 = require('@babel/runtime/helpers/interopRequireDefault')(require('./698')),
  module709 = require('@babel/runtime/helpers/interopRequireDefault')(require('./709')),
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module705 = require('@babel/runtime/helpers/interopRequireDefault')(require('./705'));

function y() {
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

var module713 = (function (p, ...args) {
    module13.default(R, p);

    var module713 = R,
      module559 = y(),
      E = function () {
        var e,
          t = module17.default(module713);

        if (module559) {
          var o = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, o);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function R() {
      var e;
      module7.default(this, R);
      (e = E.call(this, ...args)).state = {
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

    module8.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          this.loadData();
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this,
            n = this.state.refreshing,
            l = this.props.data.show;
          return module125.default.createElement(
            ReactNative.SafeAreaView,
            {
              style: v.container,
            },
            l
              ? module125.default.createElement(ReactNative.FlatList, {
                  data: l.images,
                  numColumns: 2,
                  onRefresh: this.loadData,
                  refreshing: n,
                  columnWrapperStyle: {
                    paddingHorizontal: 16,
                    marginBottom: 16,
                    justifyContent: 'space-between',
                  },
                  ListHeaderComponent: module125.default.createElement(
                    module698.default,
                    {
                      style: v.header,
                    },
                    module125.default.createElement(
                      ReactNative.View,
                      {
                        style: v.wrapper,
                      },
                      module125.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          activeOpacity: 0.8,
                          onPress: function () {
                            return o.props.navigation.push('Web', {
                              url: l.video,
                            });
                          },
                        },
                        module125.default.createElement(ReactNative.Image, {
                          style: v.containerImage,
                          resizeMode: 'cover',
                          source: {
                            uri: l.video_cover,
                          },
                        }),
                        module125.default.createElement(
                          ReactNative.View,
                          {
                            style: v.playView,
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
                        style: v.headerText,
                      },
                      l.content
                    )
                  ),
                  renderItem: function (e) {
                    var t = e.item;
                    return module125.default.createElement(
                      ReactNative.View,
                      {
                        style: v.item,
                      },
                      module125.default.createElement(ReactNative.Image, {
                        resizeMode: 'cover',
                        style: v.image,
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
                    style: v.result,
                    img: module125.default.createElement(ReactNative.Image, {
                      source: require('./713'),
                      style: {
                        width: 64,
                        height: 64,
                      },
                    }),
                  })
                )
          );
        },
      },
    ]);
    return R;
  })(module125.default.Component),
  v = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    result: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
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
      color: module705.default.black,
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
  })(module713);

exports.default = module559;

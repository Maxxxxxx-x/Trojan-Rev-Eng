var module716 = require('@babel/runtime/helpers/interopRequireDefault')(require('./716')),
  module698 = require('@babel/runtime/helpers/interopRequireDefault')(require('./698')),
  module710 = require('@babel/runtime/helpers/interopRequireDefault')(require('./710')),
  module699 = require('@babel/runtime/helpers/interopRequireDefault')(require('./699')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module705 = require('@babel/runtime/helpers/interopRequireDefault')(require('./705')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432')),
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

var E = (function (module719, ...args) {
  module13.default(x, module719);

  var C = x,
    R = k(),
    S = function () {
      var e,
        t = module17.default(C);

      if (R) {
        var o = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, o);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function x() {
    var e;
    module7.default(this, x);
    (e = S.call(this, ...args)).state = {
      phone: '',
      code: '',
    };

    e.didLogoutClick = function () {
      module432.default.removeAuth();
      module432.default.remove('Login');
      module432.default.remove('User');
      module432.default.remove(e.state.phone + 'c');
      module432.default.remove(e.state.phone + 's');
      module432.default.remove(e.state.phone + 'l');

      var module463 = require('./463').StackActions.replace('Login');

      e.props.navigation.dispatch(module463);
    };

    return e;
  }

  module8.default(x, [
    {
      key: 'componentDidMount',
      value: function () {
        var e = this;
        module432.default.get('User').then(function (t) {
          e.setState({
            phone: t.phone,
            code: t.code,
          });
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var n = this.state,
          u = n.phone,
          c = n.code;
        return module125.default.createElement(
          module698.default,
          {
            style: {
              flex: 1,
            },
          },
          module125.default.createElement(module716.default, {
            renderHeader: module125.default.createElement(
              ReactNative.View,
              {
                style: b.card,
              },
              module125.default.createElement(
                module699.default,
                {
                  justify: 'start',
                },
                module125.default.createElement(ReactNative.Image, {
                  source: require('./719'),
                  style: {
                    width: 60,
                    height: 60,
                  },
                }),
                module125.default.createElement(
                  ReactNative.View,
                  {
                    style: b.textView,
                  },
                  module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: b.phone,
                    },
                    u
                  ),
                  module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: b.code,
                    },
                    module440.default('code'),
                    '\uff1a',
                    c
                  )
                )
              )
            ),
            renderFooter: module125.default.createElement(
              module698.default,
              null,
              module125.default.createElement(
                module710.default,
                {
                  onPress: this.didLogoutClick,
                  type: 'primary',
                  style: {
                    backgroundColor: module705.default.main,
                    borderWidth: 0,
                    marginTop: 22,
                  },
                  activeStyle: {
                    backgroundColor: module705.default.main,
                  },
                },
                module440.default('logout')
              )
            ),
          })
        );
      },
    },
  ]);
  return x;
})(module125.default.Component);

exports.default = E;
var b = ReactNative.StyleSheet.create({
  card: {
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 16,
    padding: 16,
  },
  textView: {
    marginLeft: 10,
  },
  phone: {
    fontSize: 18,
    color: module705.default.black,
  },
  code: {
    fontSize: 16,
    color: module705.default.black,
    marginTop: 16,
  },
});

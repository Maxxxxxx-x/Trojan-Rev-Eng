var module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module395 = require('@babel/runtime/helpers/interopRequireDefault')(require('./395')),
  module394 = require('@babel/runtime/helpers/interopRequireDefault')(require('./394')),
  module403 = require('@babel/runtime/helpers/interopRequireDefault')(require('./403'));

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var x = (function (x) {
  module13.default(E, x);

  var v = E,
    C = y(),
    T = function () {
      var t,
        e = module17.default(v);

      if (C) {
        var n = module17.default(this).constructor;
        t = Reflect.construct(e, arguments, n);
      } else t = e.apply(this, arguments);

      return module15.default(this, t);
    };

  function E(t) {
    var n;
    module7.default(this, E);

    (n = T.call(this, t)).onBackAndroid = function () {
      var t = n.props.onBackHandler;

      if ('function' == typeof t) {
        var e = t();
        if (e) n.onClose();
        return e;
      }

      return !!n.state.visible && (n.onClose(), true);
    };

    n.onClose = function () {
      n.setState({
        visible: false,
      });
    };

    n.state = {
      visible: true,
      text: t.defaultValue,
      password: 'secure-text' === t.type ? t.defaultValue : '',
    };
    return n;
  }

  module8.default(E, [
    {
      key: 'onChangeText',
      value: function (e, n) {
        this.setState(module241.default({}, e, n));
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          e = this.props,
          n = e.title,
          u = e.onAnimationEnd,
          o = e.message,
          s = e.type,
          y = e.actions,
          module390 = e.placeholders,
          v = this.state,
          C = v.text,
          T = v.password,
          E = function (t) {
            return 'login-password' === s ? t.apply(this, [C, T]) : 'secure-text' === s ? t.apply(this, [T]) : t.apply(this, [C]);
          },
          module398 = require('./398').getComponentLocale(this.props, this.context, 'Modal', function () {
            return module395.default;
          }),
          P = ('function' == typeof y
            ? [
                {
                  text: module398.cancelText,
                  style: 'cancel',
                  onPress: function () {},
                },
                {
                  text: module398.okText,
                  onPress: function () {
                    return E(y);
                  },
                },
              ]
            : y.map(function (t) {
                return {
                  text: t.text,
                  onPress: function () {
                    if (t.onPress) return E(t.onPress);
                  },
                  style: t.style || {},
                };
              })
          ).map(function (e) {
            var n = e.onPress || function () {};

            e.onPress = function () {
              var e = n();
              if (e && e.then)
                e.then(function () {
                  t.onClose();
                });
              else t.onClose();
            };

            return e;
          });

        return module125.default.createElement(
          require('./390').WithTheme,
          {
            styles: this.props.styles,
            themeStyles: module403.default,
          },
          function (e) {
            var f = [e.inputWrapper],
              h = [e.inputWrapper];

            if ('login-password' === s) {
              f.push(e.inputFirst);
              h.push(e.inputLast);
            } else if ('secure-text' === s) {
              h.push(e.inputFirst);
              h.push(e.inputLast);
            } else {
              f.push(e.inputFirst);
              f.push(e.inputLast);
            }

            return module125.default.createElement(
              module394.default,
              {
                transparent: true,
                title: n,
                visible: t.state.visible,
                footer: P,
                onAnimationEnd: u,
                onRequestClose: t.onBackAndroid,
              },
              o
                ? module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: e.message,
                    },
                    o
                  )
                : null,
              module125.default.createElement(
                ReactNative.View,
                {
                  style: e.inputGroup,
                },
                'secure-text' !== s &&
                  module125.default.createElement(
                    ReactNative.View,
                    {
                      style: f,
                    },
                    module125.default.createElement(ReactNative.TextInput, {
                      autoFocus: true,
                      onChangeText: function (e) {
                        t.onChangeText('text', e);
                      },
                      defaultValue: t.state.text,
                      style: e.input,
                      underlineColorAndroid: 'transparent',
                      placeholder: module390[0],
                    })
                  ),
                ('secure-text' === s || 'login-password' === s) &&
                  module125.default.createElement(
                    ReactNative.View,
                    {
                      style: h,
                    },
                    module125.default.createElement(ReactNative.TextInput, {
                      autoFocus: true,
                      secureTextEntry: true,
                      onChangeText: function (e) {
                        t.onChangeText('password', e);
                      },
                      defaultValue: t.state.password,
                      style: e.input,
                      underlineColorAndroid: 'transparent',
                      placeholder: module390[1],
                    })
                  )
              )
            );
          }
        );
      },
    },
  ]);
  return E;
})(module125.default.Component);

exports.default = x;
x.defaultProps = {
  type: 'default',
  defaultValue: '',
};
x.contextType = require('./384').LocaleContext;

var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module395 = require('@babel/runtime/helpers/interopRequireDefault')(require('./395')),
  module396 = require('@babel/runtime/helpers/interopRequireDefault')(require('./396')),
  module397 = require('@babel/runtime/helpers/interopRequireDefault')(require('./397'));

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

var y = (function (y) {
  module13.default(E, y);

  var b = E,
    h = p(),
    v = function () {
      var e,
        t = module17.default(b);

      if (h) {
        var n = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, n);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function E() {
    module7.default(this, E);
    return v.apply(this, arguments);
  }

  module8.default(E, [
    {
      key: 'render',
      value: function () {
        var e = this,
          t = this.props,
          n = t.title,
          l = t.closable,
          o = t.footer,
          p = t.children,
          module390 = t.style,
          b = t.animateAppear,
          h = t.maskClosable,
          v = t.popup,
          E = t.transparent,
          C = t.visible,
          w = t.onClose,
          T = t.bodyStyle,
          V = t.onAnimationEnd,
          x = t.onRequestClose,
          module398 = require('./398').getComponentLocale(this.props, this.context, 'Modal', function () {
            return module395.default;
          });

        return module125.default.createElement(
          require('./390').WithTheme,
          {
            styles: this.props.styles,
            themeStyles: module397.default,
          },
          function (t) {
            var s = t.buttonGroupV,
              f = {};

            if (o && 2 === o.length && !e.props.operation) {
              s = t.buttonGroupH;
              f = {
                flex: 1,
              };
            }

            var A,
              P = o && 2 === o.length ? t.buttonWrapH : t.buttonWrapV;

            if (o && o.length) {
              var k = o.map(function (n, l) {
                var s = {};

                if ((e.props.operation && (s = t.buttonTextOperation), n.style && 'string' == typeof (s = n.style))) {
                  s =
                    {
                      cancel: {
                        color: '#000',
                      },
                      default: {},
                      destructive: {
                        color: 'red',
                      },
                    }[s] || {};
                }

                var c =
                  o && 2 === o.length && 1 === l
                    ? {
                        borderRightWidth: 0,
                      }
                    : {};
                return module125.default.createElement(
                  ReactNative.TouchableHighlight,
                  {
                    key: l,
                    style: f,
                    underlayColor: '#ddd',
                    onPress: function () {
                      if (n.onPress) n.onPress();
                      if (w) w();
                    },
                  },
                  module125.default.createElement(
                    ReactNative.View,
                    {
                      style: [P, c],
                    },
                    module125.default.createElement(
                      ReactNative.Text,
                      {
                        style: [t.buttonText, s],
                      },
                      n.text || ''.concat(module398.buttonText).concat(l)
                    )
                  )
                );
              });
              A = module125.default.createElement(
                ReactNative.View,
                {
                  style: [s, t.footer],
                },
                k
              );
            }

            var S = e.props.animationType;

            if (E) {
              if ('slide' === S) S = 'slide-up';
              var W = l
                ? module125.default.createElement(
                    ReactNative.View,
                    {
                      style: [t.closeWrap],
                    },
                    module125.default.createElement(
                      ReactNative.TouchableWithoutFeedback,
                      {
                        onPress: w,
                      },
                      module125.default.createElement(
                        ReactNative.View,
                        null,
                        module125.default.createElement(
                          ReactNative.Text,
                          {
                            style: [t.close],
                          },
                          '\xd7'
                        )
                      )
                    )
                  )
                : null;
              return module125.default.createElement(
                ReactNative.View,
                {
                  style: t.container,
                },
                module125.default.createElement(
                  module396.default,
                  {
                    onClose: w,
                    animationType: S,
                    wrapStyle: E ? t.wrap : undefined,
                    style: t.wrap,
                    visible: C,
                    onAnimationEnd: V,
                    onRequestClose: x,
                    animateAppear: b,
                    maskClosable: h,
                  },
                  module125.default.createElement(
                    ReactNative.KeyboardAvoidingView,
                    {
                      behavior: 'padding',
                      enabled: 'ios' === ReactNative.Platform.OS,
                    },
                    module125.default.createElement(
                      ReactNative.View,
                      {
                        style: [t.innerContainer, module390],
                      },
                      n
                        ? module125.default.createElement(
                            ReactNative.Text,
                            {
                              style: [t.header],
                            },
                            n
                          )
                        : null,
                      module125.default.createElement(
                        ReactNative.View,
                        {
                          style: [t.body, T],
                        },
                        p
                      ),
                      A,
                      W
                    )
                  )
                )
              );
            }

            if (v) {
              var q = 'SlideDown';

              if ('slide-up' === S) {
                S = 'slide-up';
                q = 'SlideUp';
              } else S = 'slide-down';

              return module125.default.createElement(
                ReactNative.View,
                {
                  style: t.container,
                },
                module125.default.createElement(
                  module396.default,
                  {
                    onClose: w,
                    animationType: S,
                    style: [t.popupContainer, t['popup'.concat(q)], module390],
                    visible: C,
                    onAnimationEnd: V,
                    onRequestClose: x,
                    animateAppear: b,
                    maskClosable: h,
                  },
                  module125.default.createElement(
                    ReactNative.View,
                    {
                      style: T,
                    },
                    p
                  )
                )
              );
            }

            if ('slide' === S) S = undefined;
            return module125.default.createElement(
              ReactNative.View,
              {
                style: t.container,
              },
              module125.default.createElement(
                module396.default,
                {
                  visible: C,
                  animationType: S,
                  onRequestClose: x,
                  onClose: w,
                },
                module125.default.createElement(
                  ReactNative.View,
                  {
                    style: module390,
                  },
                  p
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

y.defaultProps = {
  visible: false,
  closable: false,
  maskClosable: false,
  style: {},
  bodyStyle: {},
  animationType: 'fade',
  onClose: function () {},
  footer: [],
  transparent: false,
  popup: false,
  animateAppear: true,
  operation: false,
};
y.contextType = require('./384').LocaleContext;
var b = y;
exports.default = b;

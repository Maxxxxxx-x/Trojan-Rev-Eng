var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module710 = require('@babel/runtime/helpers/interopRequireDefault')(require('./710')),
  module712 = require('@babel/runtime/helpers/interopRequireDefault')(require('./712'));

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

var p = (function (p) {
  module13.default(T, p);

  var h = T,
    v = y(),
    E = function () {
      var e,
        t = module17.default(h);

      if (v) {
        var l = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, l);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function T() {
    module7.default(this, T);
    return E.apply(this, arguments);
  }

  module8.default(T, [
    {
      key: 'render',
      value: function () {
        var e = this.props,
          t = e.style,
          l = e.img,
          n = e.imgUrl,
          u = e.title,
          y = e.message,
          module390 = e.buttonText,
          h = e.onButtonClick,
          v = e.buttonType;
        return module125.default.createElement(
          require('./390').WithTheme,
          {
            styles: this.props.styles,
            themeStyles: module712.default,
          },
          function (e) {
            var o = null;
            if (l)
              o = module125.default.createElement(
                ReactNative.View,
                {
                  style: e.imgWrap,
                },
                l
              );
            else if (n)
              o = module125.default.createElement(
                ReactNative.View,
                {
                  style: e.imgWrap,
                },
                module125.default.createElement(ReactNative.Image, {
                  source: n,
                  style: e.img,
                })
              );
            return module125.default.createElement(
              ReactNative.View,
              {
                style: [e.result, t],
              },
              o,
              u
                ? module125.default.createElement(
                    ReactNative.View,
                    {
                      style: e.title,
                    },
                    'string' == typeof u
                      ? module125.default.createElement(
                          ReactNative.Text,
                          {
                            style: e.titleText,
                          },
                          u
                        )
                      : u
                  )
                : null,
              y
                ? module125.default.createElement(
                    ReactNative.View,
                    {
                      style: e.message,
                    },
                    'string' == typeof y
                      ? module125.default.createElement(
                          ReactNative.Text,
                          {
                            style: e.messageText,
                          },
                          y
                        )
                      : y
                  )
                : null,
              module390
                ? module125.default.createElement(
                    ReactNative.View,
                    {
                      style: e.buttonWrap,
                    },
                    module125.default.createElement(
                      module710.default,
                      {
                        style: e.button,
                        type: v,
                        onPress: h,
                      },
                      module390
                    )
                  )
                : null
            );
          }
        );
      },
    },
  ]);
  return T;
})(module125.default.Component);

exports.default = p;

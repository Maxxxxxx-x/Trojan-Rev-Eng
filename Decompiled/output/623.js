var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module624 = require('@babel/runtime/helpers/interopRequireDefault')(require('./624')),
  module628 = require('@babel/runtime/helpers/interopRequireDefault')(require('./628'));

function h() {
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

var p = (function (module390) {
  module13.default(E, module390);

  var v = E,
    y = h(),
    A = function () {
      var e,
        t = module17.default(v);

      if (y) {
        var n = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, n);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function E(t) {
    var n;
    module7.default(this, E);
    (n = A.call(this, t)).state = {
      fadeAnim: new ReactNative.Animated.Value(0),
    };
    return n;
  }

  module8.default(E, [
    {
      key: 'componentDidMount',
      value: function () {
        var e = this,
          t = this.props.onAnimationEnd,
          n = this.props.duration,
          l = ReactNative.Animated.timing;
        if (this.anim) this.anim = null;
        var o = [
          l(this.state.fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          ReactNative.Animated.delay(1e3 * n),
        ];
        if (n > 0)
          o.push(
            l(this.state.fadeAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            })
          );
        this.anim = ReactNative.Animated.sequence(o);
        this.anim.start(function () {
          if (n > 0) {
            e.anim = null;
            if (t) t();
          }
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.anim) {
          this.anim.stop();
          this.anim = null;
        }

        var e = this.props.onClose;
        if (e) e();
      },
    },
    {
      key: 'render',
      value: function () {
        var e = this,
          t = this.props,
          n = t.type,
          l = undefined === n ? '' : n,
          o = t.content,
          h = t.mask;
        return module125.default.createElement(
          require('./390').WithTheme,
          {
            styles: this.props.styles,
            themeStyles: module628.default,
          },
          function (t) {
            var n = null;
            n =
              'loading' === l
                ? module125.default.createElement(ReactNative.ActivityIndicator, {
                    animating: true,
                    style: [t.centering],
                    color: 'white',
                    size: 'large',
                  })
                : 'info' === l
                ? null
                : module125.default.createElement(module624.default, {
                    name: {
                      success: 'check-circle',
                      fail: 'close-circle',
                      offline: 'frown',
                    }[l],
                    style: t.image,
                    color: 'white',
                    size: 36,
                  });
            return module125.default.createElement(
              ReactNative.View,
              {
                style: [t.container],
                pointerEvents: h ? undefined : 'box-none',
              },
              module125.default.createElement(
                ReactNative.View,
                {
                  style: [t.innerContainer],
                },
                module125.default.createElement(
                  ReactNative.Animated.View,
                  {
                    style: {
                      opacity: e.state.fadeAnim,
                    },
                  },
                  module125.default.createElement(
                    ReactNative.View,
                    {
                      style: [t.innerWrap, n ? t.iconToast : t.textToast],
                    },
                    n,
                    module125.default.isValidElement(o)
                      ? o
                      : module125.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.content,
                          },
                          o
                        )
                  )
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

exports.default = p;
p.defaultProps = {
  duration: 3,
  mask: true,
  onClose: function () {},
};

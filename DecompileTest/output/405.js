var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  module394 = require('@babel/runtime/helpers/interopRequireDefault')(require('./394')),
  module397 = require('@babel/runtime/helpers/interopRequireDefault')(require('./397'));

function c() {
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

var v = (function (module390) {
  module13.default(C, module390);

  var p = C,
    h = c(),
    y = function () {
      var e,
        t = module17.default(p);

      if (h) {
        var n = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, n);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function C(t) {
    var n;
    module7.default(this, C);

    (n = y.call(this, t)).onBackAndroid = function () {
      var e = n.props.onBackHandler;

      if ('function' == typeof e) {
        if (e()) n.onClose();
        return true;
      } else return !!n.state.visible && (n.onClose(), true);
    };

    n.onClose = function () {
      n.setState({
        visible: false,
      });
    };

    n.state = {
      visible: true,
    };
    return n;
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        var e = this,
          t = this.props,
          n = t.actions,
          o = t.onAnimationEnd,
          u = n.map(function (t) {
            var n = t.onPress || function () {};

            t.onPress = function () {
              var t = n();
              if (t && t.then)
                t.then(function () {
                  e.onClose();
                });
              else e.onClose();
            };

            return t;
          });
        return module125.default.createElement(
          require('./390').WithTheme,
          {
            themeStyles: module397.default,
          },
          function (t) {
            return module125.default.createElement(module394.default, {
              operation: true,
              transparent: true,
              maskClosable: true,
              visible: e.state.visible,
              onClose: e.onClose,
              onAnimationEnd: o,
              onRequestClose: e.onBackAndroid,
              style: t.operationContainer,
              bodyStyle: t.operationBody,
              footer: u,
            });
          }
        );
      },
    },
  ]);
  return C;
})(module125.default.Component);

exports.default = v;

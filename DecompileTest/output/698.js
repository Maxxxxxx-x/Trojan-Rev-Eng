var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native');

function o() {
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

var s = (function (module390) {
  module13.default(y, module390);

  var p = y,
    h = o(),
    v = function () {
      var t,
        e = module17.default(p);

      if (h) {
        var n = module17.default(this).constructor;
        t = Reflect.construct(e, arguments, n);
      } else t = e.apply(this, arguments);

      return module15.default(this, t);
    };

  function y() {
    module7.default(this, y);
    return v.apply(this, arguments);
  }

  module8.default(y, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          e = t.size,
          n = t.style,
          u = t.children;
        return module125.default.createElement(require('./390').WithTheme, null, function (t, f) {
          var o = f['h_spacing_'.concat(e)];
          return module125.default.createElement(
            ReactNative.View,
            {
              style: [
                {
                  marginLeft: o,
                  marginRight: o,
                },
                n,
              ],
            },
            u
          );
        });
      },
    },
  ]);
  return y;
})(module125.default.Component);

s.defaultProps = {
  size: 'lg',
};
var p = s;
exports.default = p;

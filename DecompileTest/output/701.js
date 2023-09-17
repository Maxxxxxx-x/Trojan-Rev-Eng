var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native');

function i() {
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

var s = function (e, t) {
    var n = {};

    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);

    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var o = 0;

      for (l = Object.getOwnPropertySymbols(e); o < l.length; o++) t.indexOf(l[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[o]) && (n[l[o]] = e[l[o]]);
    }

    return n;
  },
  p = (function (p) {
    module13.default(O, p);

    var y = O,
      h = i(),
      v = function () {
        var e,
          t = module17.default(y);

        if (h) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function O() {
      module7.default(this, O);
      return v.apply(this, arguments);
    }

    module8.default(O, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.style,
            l = t.children,
            o = t.flex,
            u = s(t, ['style', 'children', 'flex']),
            i = {
              flex: null !== o && undefined !== o ? o : 1,
            },
            p = module125.default.createElement(
              ReactNative.View,
              module178.default(
                {
                  style: [i, n],
                },
                u
              ),
              l
            );
          return u.onPress || u.onLongPress || u.onPressIn || u.onPressOut ? module125.default.createElement(ReactNative.TouchableWithoutFeedback, module178.default({}, u), p) : p;
        },
      },
    ]);
    return O;
  })(module125.default.Component);

exports.default = p;
p.defaultProps = {
  flex: 1,
};

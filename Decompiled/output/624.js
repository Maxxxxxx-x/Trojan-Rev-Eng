var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125'));

function f() {
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

var i = function (e, t) {
    var n = {};

    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);

    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var l = 0;

      for (o = Object.getOwnPropertySymbols(e); l < o.length; l++) t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (n[o[l]] = e[o[l]]);
    }

    return n;
  },
  module625 = (function (module390) {
    module13.default(h, module390);

    var p = h,
      y = f(),
      v = function () {
        var e,
          t = module17.default(p);

        if (y) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function h() {
      module7.default(this, h);
      return v.apply(this, arguments);
    }

    module8.default(h, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.size,
            o = t.color,
            l = t.name,
            u = i(t, ['size', 'color', 'name']),
            f =
              'string' == typeof n
                ? {
                    xxs: 15,
                    xs: 18,
                    sm: 21,
                    md: 22,
                    lg: 36,
                  }[n]
                : n;
          return module125.default.createElement(require('./390').WithTheme, null, function (t, n) {
            return module125.default.createElement(
              require('./625').IconOutline,
              module178.default(
                {
                  size: f,
                  color: o || n.color_icon_base,
                  name: l,
                },
                u
              )
            );
          });
        },
      },
    ]);
    return h;
  })(module125.default.Component);

exports.default = module625;
module625.defaultProps = {
  size: 'md',
};
module625.displayName = 'Icon';

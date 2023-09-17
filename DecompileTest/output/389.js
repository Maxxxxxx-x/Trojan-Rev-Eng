var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native');

function s() {
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

var p = (function (p) {
  module13.default(k, p);

  var y = k,
    h = s(),
    v = function () {
      var t,
        e = module17.default(y);

      if (h) {
        var n = module17.default(this).constructor;
        t = Reflect.construct(e, arguments, n);
      } else t = e.apply(this, arguments);

      return module15.default(this, t);
    };

  function k() {
    var u;
    module7.default(this, k);
    (u = v.apply(this, arguments)).state = {
      portals: [],
    };

    u.mount = function (t, n) {
      u.setState(function (u) {
        return {
          portals: [].concat(module36.default(u.portals), [
            {
              key: t,
              children: n,
            },
          ]),
        };
      });
    };

    u.update = function (e, n) {
      return u.setState(function (u) {
        return {
          portals: u.portals.map(function (u) {
            return u.key === e
              ? module178.default(module178.default({}, u), {
                  children: n,
                })
              : u;
          }),
        };
      });
    };

    u.unmount = function (t) {
      return u.setState(function (e) {
        return {
          portals: e.portals.filter(function (e) {
            return e.key !== t;
          }),
        };
      });
    };

    return u;
  }

  module8.default(k, [
    {
      key: 'render',
      value: function () {
        return this.state.portals.map(function (t, e) {
          var n = t.key,
            u = t.children;
          return module125.default.createElement(
            ReactNative.View,
            {
              key: n,
              collapsable: false,
              pointerEvents: 'box-none',
              style: [
                ReactNative.StyleSheet.absoluteFill,
                {
                  zIndex: 1e3 + e,
                },
              ],
            },
            u
          );
        });
      },
    },
  ]);
  return k;
})(module125.default.PureComponent);

exports.default = p;

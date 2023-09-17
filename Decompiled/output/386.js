var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  module387 = require('@babel/runtime/helpers/interopRequireDefault')(require('./387')),
  module388 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' !== require('./11')(e) && 'function' != typeof e))
      return {
        default: e,
      };
    var n = p(t);
    if (n && n.has(e)) return n.get(e);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in e)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(e, f)) {
        var l = o ? Object.getOwnPropertyDescriptor(e, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, f, l);
        else u[f] = e[f];
      }

    u.default = e;
    if (n) n.set(e, u);
    return u;
  })(require('./388'));

function p(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (p = function (e) {
    return e ? n : t;
  })(e);
}

function s() {
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

var v = (function (p) {
  module13.default(O, p);

  var v = O,
    y = s(),
    h = function () {
      var e,
        t = module17.default(v);

      if (y) {
        var n = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, n);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function O() {
    module7.default(this, O);
    return h.apply(this, arguments);
  }

  module8.default(O, [
    {
      key: 'render',
      value: function () {
        var e = this.props.children;
        return module125.default.createElement(module388.PortalContext.Consumer, null, function (t) {
          return module125.default.createElement(
            module387.default,
            {
              manager: t,
            },
            e
          );
        });
      },
    },
  ]);
  return O;
})(module125.default.Component);

v.Host = module388.default;
v.add = module388.portal.add;
v.remove = module388.portal.remove;
var y = v;
exports.default = y;

var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' !== require('./11')(e) && 'function' != typeof e))
      return {
        default: e,
      };
    var n = p(t);
    if (n && n.has(e)) return n.get(e);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var module11 in e)
      if ('default' !== module11 && Object.prototype.hasOwnProperty.call(e, module11)) {
        var l = o ? Object.getOwnPropertyDescriptor(e, module11) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, module11, l);
        else u[module11] = e[module11];
      }

    u.default = e;
    if (n) n.set(e, u);
    return u;
  })(require('./125')),
  module384 = require('@babel/runtime/helpers/interopRequireDefault')(require('./384')),
  module385 = require('@babel/runtime/helpers/interopRequireDefault')(require('./385'));

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

var module390 = (function (p) {
  module13.default(O, p);

  var module390 = O,
    v = s(),
    h = function () {
      var e,
        t = module17.default(module390);

      if (v) {
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
        return module125.createElement(
          module384.default,
          {
            locale: this.props.locale,
          },
          module125.createElement(
            require('./390').ThemeProvider,
            {
              value: this.props.theme,
            },
            module125.createElement(module385.default.Host, null, this.props.children)
          )
        );
      },
    },
  ]);
  return O;
})(module125.Component);

exports.default = module390;

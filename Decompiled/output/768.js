var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = l(t);
    if (n && n.has(e)) return n.get(e);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in e)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(e, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(e, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = e[f];
      }

    u.default = e;
    if (n) n.set(e, u);
    return u;
  })(require('./125')),
  ReactNative = require('react-native');

function l(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (l = function (e) {
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

var module769 = (function (l) {
  module13.default(O, l);

  var module769 = O,
    y = s(),
    v = function () {
      var e,
        t = module17.default(module769);

      if (y) {
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
        var e = this.props.route.params.url;
        return module125.default.createElement(require('./769').WebView, {
          source: {
            uri: e,
          },
          scalesPageToFit: 'ios' === ReactNative.Platform.OS,
          automaticallyAdjustContentInsets: false,
          javaScriptEnabled: true,
          domStorageEnabled: true,
        });
      },
    },
  ]);
  return O;
})(module125.Component);

exports.default = module769;

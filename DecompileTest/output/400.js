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
    var n = s(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var module11 in e)
      if ('default' !== module11 && Object.prototype.hasOwnProperty.call(e, module11)) {
        var f = u ? Object.getOwnPropertyDescriptor(e, module11) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, module11, f);
        else o[module11] = e[module11];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module394 = require('@babel/runtime/helpers/interopRequireDefault')(require('./394'));

function s(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (s = function (e) {
    return e ? n : t;
  })(e);
}

function p() {
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

var v = (function (s) {
  module13.default(b, s);

  var v = b,
    y = p(),
    h = function () {
      var e,
        t = module17.default(v);

      if (y) {
        var n = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, n);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function b(t) {
    var n;
    module7.default(this, b);

    (n = h.call(this, t)).onBackAndroid = function () {
      var e = n.props.onBackHandler;

      if ('function' == typeof e) {
        var t = e();
        if (t) n.onClose();
        return t;
      }

      return !!n.state.visible && (n.onClose(), true);
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

  module8.default(b, [
    {
      key: 'render',
      value: function () {
        var e = this,
          t = this.props,
          n = t.title,
          o = t.actions,
          u = t.content,
          s = t.onAnimationEnd,
          p = o.map(function (t) {
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
          module394.default,
          {
            transparent: true,
            title: n,
            visible: this.state.visible,
            footer: p,
            onAnimationEnd: s,
            onRequestClose: this.onBackAndroid,
            bodyStyle: {
              marginTop: 8,
              alignItems: 'center',
            },
          },
          module125.default.createElement(ReactNative.ScrollView, null, module125.isValidElement(u) ? u : module125.default.createElement(ReactNative.Text, null, u))
        );
      },
    },
  ]);
  return b;
})(module125.default.Component);

exports.default = v;

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
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
    var n = h(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in e)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var s = l ? Object.getOwnPropertyDescriptor(e, u) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, u, s);
        else o[u] = e[u];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module723 = require('@babel/runtime/helpers/interopRequireDefault')(require('./723')),
  y = ['children', 'colors', 'end', 'locations', 'useAngle', 'angleCenter', 'angle', 'start', 'style'];

function h(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (h = function (e) {
    return e ? n : t;
  })(e);
}

function b() {
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

var R = function (e, t) {
    if (Array.isArray(t)) console.warn("LinearGradient '" + e + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
    return null !== t && 'object' == typeof t ? [t.x, t.y] : t;
  },
  v = (function (h) {
    module13.default(j, h);

    var v = j,
      P = b(),
      O = function () {
        var e,
          t = module17.default(v);

        if (P) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function j() {
      module7.default(this, j);
      return O.apply(this, arguments);
    }

    module8.default(j, [
      {
        key: 'setNativeProps',
        value: function (e) {
          this.gradientRef.setNativeProps(e);
        },
      },
      {
        key: 'render',
        value: function () {
          var n = this,
            o = this.props,
            l = o.children,
            u = o.colors,
            s = o.end,
            h = o.locations,
            b = o.useAngle,
            v = o.angleCenter,
            P = o.angle,
            O = o.start,
            j = o.style,
            w = module96.default(o, y);
          if (u && h && u.length !== h.length) console.warn('LinearGradient colors and locations props should be arrays of the same length');

          var A = C,
            B = ReactNative.StyleSheet.flatten(j) || {},
            C = B.borderRadius || 0,
            L = function (e) {
              return 'number' == typeof e ? e : A;
            },
            _ = [
              L(B.borderTopLeftRadius),
              L(B.borderTopLeftRadius),
              L(B.borderTopRightRadius),
              L(B.borderTopRightRadius),
              L(B.borderBottomRightRadius),
              L(B.borderBottomRightRadius),
              L(B.borderBottomLeftRadius),
              L(B.borderBottomLeftRadius),
            ];

          return module125.default.createElement(
            ReactNative.View,
            module178.default(
              {
                ref: function (e) {
                  n.gradientRef = e;
                },
              },
              w,
              {
                style: j,
              }
            ),
            module125.default.createElement(module723.default, {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              },
              colors: u.map(ReactNative.processColor),
              startPoint: R('start', O),
              endPoint: R('end', s),
              locations: h ? h.slice(0, u.length) : null,
              useAngle: b,
              angleCenter: R('angleCenter', v),
              angle: P,
              borderRadii: _,
            }),
            l
          );
        },
      },
    ]);
    return j;
  })(module125.Component);

exports.default = v;
v.defaultProps = {
  start: {
    x: 0.5,
    y: 0,
  },
  end: {
    x: 0.5,
    y: 1,
  },
};

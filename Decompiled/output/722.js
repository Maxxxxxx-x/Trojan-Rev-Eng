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
        var f = l ? Object.getOwnPropertyDescriptor(e, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, u, f);
        else o[u] = e[u];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module723 = require('@babel/runtime/helpers/interopRequireDefault')(require('./723')),
  y = ['start', 'end', 'colors', 'locations', 'useAngle', 'angleCenter', 'angle'];

function h(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (h = function (e) {
    return e ? n : t;
  })(e);
}

function v() {
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

var P = function (e, t) {
    if (Array.isArray(t)) {
      console.warn("LinearGradient '" + e + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
      return {
        x: t[0],
        y: t[1],
      };
    } else return t;
  },
  b = (function (h) {
    module13.default(w, h);

    var b = w,
      O = v(),
      j = function () {
        var e,
          t = module17.default(b);

        if (O) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function w() {
      module7.default(this, w);
      return j.apply(this, arguments);
    }

    module8.default(w, [
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
            l = o.start,
            u = o.end,
            f = o.colors,
            h = o.locations,
            v = o.useAngle,
            b = o.angleCenter,
            O = o.angle,
            j = module96.default(o, y);
          if (f && h && f.length !== h.length) console.warn('LinearGradient colors and locations props should be arrays of the same length');
          return module125.default.createElement(
            module723.default,
            module178.default(
              {
                ref: function (e) {
                  n.gradientRef = e;
                },
              },
              j,
              {
                startPoint: P('start', l),
                endPoint: P('end', u),
                colors: f.map(ReactNative.processColor),
                locations: h ? h.slice(0, f.length) : null,
                useAngle: v,
                angleCenter: P('angleCenter', b),
                angle: O,
              }
            )
          );
        },
      },
    ]);
    return w;
  })(module125.Component);

exports.default = b;
b.defaultProps = {
  start: {
    x: 0.5,
    y: 0,
  },
  end: {
    x: 0.5,
    y: 1,
  },
};

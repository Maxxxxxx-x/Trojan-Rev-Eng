var module139 = u(require('./139')),
  module131 = require('@babel/runtime/helpers/interopRequireDefault')(require('./131')),
  module21 = require('@babel/runtime/helpers/interopRequireDefault')(require('./21'));

u(require('./125'));

function n(o) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    s = new WeakMap();
  return (n = function (o) {
    return o ? s : t;
  })(o);
}

function u(o, t) {
  if (!t && o && o.__esModule) return o;
  if (null === o || ('object' != typeof o && 'function' != typeof o))
    return {
      default: o,
    };
  var s = n(t);
  if (s && s.has(o)) return s.get(o);
  var u = {},
    p = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var b in o)
    if ('default' !== b && Object.prototype.hasOwnProperty.call(o, b)) {
      var c = p ? Object.getOwnPropertyDescriptor(o, b) : null;
      if (c && (c.get || c.set)) Object.defineProperty(u, b, c);
      else u[b] = o[b];
    }

  u.default = o;
  if (s) s.set(o, u);
  return u;
}

var module134 =
  'android' === module21.default.OS
    ? {
        uiViewClassName: 'RCTView',
        validAttributes: {
          removeClippedSubviews: true,
          accessible: true,
          hasTVPreferredFocus: true,
          nextFocusDown: true,
          nextFocusForward: true,
          nextFocusLeft: true,
          nextFocusRight: true,
          nextFocusUp: true,
          borderRadius: true,
          borderTopLeftRadius: true,
          borderTopRightRadius: true,
          borderBottomRightRadius: true,
          borderBottomLeftRadius: true,
          borderTopStartRadius: true,
          borderTopEndRadius: true,
          borderBottomStartRadius: true,
          borderBottomEndRadius: true,
          borderStyle: true,
          hitSlop: true,
          pointerEvents: true,
          nativeBackgroundAndroid: true,
          nativeForegroundAndroid: true,
          needsOffscreenAlphaCompositing: true,
          borderWidth: true,
          borderLeftWidth: true,
          borderRightWidth: true,
          borderTopWidth: true,
          borderBottomWidth: true,
          borderStartWidth: true,
          borderEndWidth: true,
          borderColor: {
            process: require('./134'),
          },
          borderLeftColor: {
            process: require('./134'),
          },
          borderRightColor: {
            process: require('./134'),
          },
          borderTopColor: {
            process: require('./134'),
          },
          borderBottomColor: {
            process: require('./134'),
          },
          borderStartColor: {
            process: require('./134'),
          },
          borderEndColor: {
            process: require('./134'),
          },
          focusable: true,
          overflow: true,
          backfaceVisibility: true,
        },
      }
    : {
        uiViewClassName: 'RCTView',
      };
exports.__INTERNAL_VIEW_CONFIG = module134;
var b = module139.get('RCTView', function () {
    return module134;
  }),
  c = module131.default({
    supportedCommands: ['hotspotUpdate', 'setPressed'],
  });
exports.Commands = c;
var f = b;
exports.default = f;

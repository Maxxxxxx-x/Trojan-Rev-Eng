exports.MaybeScreen = function (c) {
  var u,
    f = c.visible,
    b = c.children,
    s = module96.default(c, o);
  if (null != (u = e) && null != u.screensEnabled && u.screensEnabled())
    return module125.createElement(
      e.Screen,
      module178.default(
        {
          activityState: f ? 2 : 0,
        },
        s
      ),
      b
    );
  return module125.createElement(
    require('./809').ResourceSavingView,
    module178.default(
      {
        visible: f,
      },
      s
    ),
    b
  );
};

var e,
  module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (e, n) {
    if (!n && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var t = f(n);
    if (t && t.has(e)) return t.get(e);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in e)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var o = c ? Object.getOwnPropertyDescriptor(e, u) : null;
        if (o && (o.get || o.set)) Object.defineProperty(l, u, o);
        else l[u] = e[u];
      }

    l.default = e;
    if (t) t.set(e, l);
    return l;
  })(require('./125')),
  ReactNative = require('react-native'),
  u = ['enabled'],
  o = ['visible', 'children'];

function f(e) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    t = new WeakMap();
  return (f = function (e) {
    return e ? t : n;
  })(e);
}

try {
  e = require('./833');
} catch (e) {}

exports.MaybeScreenContainer = function (o) {
  var f,
    b = o.enabled,
    s = module96.default(o, u);
  return null != (f = e) && null != f.screensEnabled && f.screensEnabled()
    ? module125.createElement(
        e.ScreenContainer,
        module178.default(
          {
            enabled: b,
          },
          s
        )
      )
    : module125.createElement(ReactNative.View, s);
};

exports.default = function (u) {
  var s,
    f = u.to,
    c = u.action,
    module468 = module125.useContext(require('./468').NavigationContainerRefContext),
    module468 = module125.useContext(require('./468').NavigationHelpersContext),
    y = module125.useContext(module466.default).options,
    b = module467.default(),
    module468 = null != (s = null == y ? undefined : y.getPathFromState) ? s : require('./468').getPathFromState;
  return {
    href:
      'string' == typeof f
        ? f
        : module468(
            {
              routes: [
                {
                  name: f.screen,
                  params: f.params,
                  state: l(f.params),
                },
              ],
            },
            null == y ? undefined : y.config
          ),
    accessibilityRole: 'link',
    onPress: function (e) {
      var n,
        o = false;
      if ('web' === ReactNative.Platform.OS && e) {
        if (
          !(
            e.defaultPrevented ||
            e.metaKey ||
            e.altKey ||
            e.ctrlKey ||
            e.shiftKey ||
            (null != e.button && 0 !== e.button) ||
            ![undefined, null, '', 'self'].includes(null == (n = e.currentTarget) ? undefined : n.target)
          )
        ) {
          e.preventDefault();
          o = true;
        }
      } else o = !e || !e.defaultPrevented;
      if (o)
        if (c) {
          if (module468) module468.dispatch(c);
          else {
            if (!module468) throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
            module468.dispatch(c);
          }
        } else b(f);
    },
  };
};

var module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = u(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in e)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
        var f = l ? Object.getOwnPropertyDescriptor(e, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
        else o[s] = e[s];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module466 = require('@babel/runtime/helpers/interopRequireDefault')(require('./466')),
  module467 = require('@babel/runtime/helpers/interopRequireDefault')(require('./467'));

function u(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (u = function (e) {
    return e ? n : t;
  })(e);
}

var l = function e(t) {
  return null != t && t.state
    ? t.state
    : null != t && t.screen
    ? {
        routes: [
          {
            name: t.screen,
            params: t.params,
            state: t.screen ? e(t.params) : undefined,
          },
        ],
      }
    : undefined;
};

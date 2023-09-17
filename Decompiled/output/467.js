exports.default = function () {
  var module468 = module125.useContext(require('./468').NavigationContainerRefContext),
    u = module125.useContext(module466.default);
  return module125.useCallback(
    function (t) {
      if (undefined === module468) throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");

      if ('string' == typeof t) {
        if (!t.startsWith('/')) throw new Error("The path must start with '/' (" + t + ').');
        var n = u.options,
          module468 = null != n && n.getStateFromPath ? n.getStateFromPath(t, n.config) : require('./468').getStateFromPath(t, null == n ? undefined : n.config);
        if (!module468) throw new Error('Failed to parse the path to a navigation state.');

        var module468 = require('./468').getActionFromState(module468, null == n ? undefined : n.config);

        if (undefined !== module468) module468.dispatch(module468);
        else module468.reset(module468);
      } else module468.navigate(t.screen, t.params);
    },
    [u, module468]
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, l, s);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./125')),
  module466 = require('@babel/runtime/helpers/interopRequireDefault')(require('./466'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

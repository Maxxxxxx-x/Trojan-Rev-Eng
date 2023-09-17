exports.default = function (n) {
  var u = module125.useContext(o),
    f = u.scheduleUpdate,
    c = u.flushUpdates;
  f(n);
  module125.useEffect(c);
};

var module125 = (function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = n(o);
  if (u && u.has(t)) return u.get(t);
  var f = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
      else f[l] = t[l];
    }

  f.default = t;
  if (u) u.set(t, f);
  return f;
})(require('./125'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

var o = module125.createContext({
  scheduleUpdate: function () {
    throw new Error("Couldn't find a schedule context.");
  },
  flushUpdates: function () {
    throw new Error("Couldn't find a schedule context.");
  },
});
exports.ScheduleUpdateContext = o;

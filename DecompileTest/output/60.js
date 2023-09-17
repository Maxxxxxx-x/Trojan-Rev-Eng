function t(n) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    p = new WeakMap();
  return (t = function (t) {
    return t ? p : o;
  })(n);
}

var module23 = (function (n, o) {
    if (!o && n && n.__esModule) return n;
    if (null === n || ('object' != typeof n && 'function' != typeof n))
      return {
        default: n,
      };
    var p = t(o);
    if (p && p.has(n)) return p.get(n);
    var c = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in n)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(n, u)) {
        var s = f ? Object.getOwnPropertyDescriptor(n, u) : null;
        if (s && (s.get || s.set)) Object.defineProperty(c, u, s);
        else c[u] = n[u];
      }

    c.default = n;
    if (p) p.set(n, c);
    return c;
  })(require('./23')).getEnforcing('ExceptionsManager'),
  o = {
    reportFatalException: function (t, o, p) {
      module23.reportFatalException(t, o, p);
    },
    reportSoftException: function (t, o, p) {
      module23.reportSoftException(t, o, p);
    },
    updateExceptionMessage: function (t, o, p) {
      module23.updateExceptionMessage(t, o, p);
    },
    dismissRedbox: function () {},
    reportException: function (t) {
      if (module23.reportException) module23.reportException(t);
      else if (t.isFatal) o.reportFatalException(t.message, t.stack, t.id);
      else o.reportSoftException(t.message, t.stack, t.id);
    },
  },
  p = o;

exports.default = p;

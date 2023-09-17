var n;

module.exports = function t(o, u) {
  var f = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : -1,
    s = arguments.length > 3 ? arguments[3] : undefined,
    c = 'number' == typeof f ? s : f,
    l = 'number' == typeof f ? f : -1;
  if (0 === l) return true;
  if (o === u) return false;

  if ('function' == typeof o && 'function' == typeof u) {
    var v = null == c ? undefined : c.unsafelyIgnoreFunctions;

    if (null == v) {
      if (!(!n || !n.onDifferentFunctionsIgnored || (c && 'unsafelyIgnoreFunctions' in c))) n.onDifferentFunctionsIgnored(o.name, u.name);
      v = true;
    }

    return !v;
  }

  if ('object' != typeof o || null === o) return o !== u;
  if ('object' != typeof u || null === u) return true;
  if (o.constructor !== u.constructor) return true;

  if (Array.isArray(o)) {
    var y = o.length;
    if (u.length !== y) return true;

    for (var p = 0; p < y; p++) if (t(o[p], u[p], l - 1, c)) return true;
  } else {
    for (var b in o) if (t(o[b], u[b], l - 1, c)) return true;

    for (var h in u) if (undefined === o[h] && undefined !== u[h]) return true;
  }

  return false;
};

module.exports.unstable_setLogListeners = function (t) {
  n = t;
};

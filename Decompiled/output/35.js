exports.createStringifySafeWithLimits = e;

var module20 = require('@babel/runtime/helpers/interopRequireDefault')(require('./20'));

function e(e) {
  var n = e.maxDepth,
    f = undefined === n ? Number.POSITIVE_INFINITY : n,
    u = e.maxStringLimit,
    o = undefined === u ? Number.POSITIVE_INFINITY : u,
    l = e.maxArrayLimit,
    c = undefined === l ? Number.POSITIVE_INFINITY : l,
    s = e.maxObjectKeysLimit,
    y = undefined === s ? Number.POSITIVE_INFINITY : s,
    h = [];

  function I(e, n) {
    for (; h.length && this !== h[0]; ) h.shift();

    if ('string' == typeof n) {
      return n.length > o + '...(truncated)...'.length ? n.substring(0, o) + '...(truncated)...' : n;
    }

    if ('object' != typeof n || null === n) return n;
    var u = n;
    if (Array.isArray(n))
      h.length >= f
        ? (u = '[ ... array with ' + n.length + ' values ... ]')
        : n.length > c && (u = n.slice(0, c).concat(['... extra ' + (n.length - c) + ' values truncated ...']));
    else {
      module20.default('object' == typeof n, 'This was already found earlier');
      var l = Object.keys(n);
      if (h.length >= f) u = '{ ... object with ' + l.length + ' keys ... }';
      else if (l.length > y) {
        for (var s of ((u = {}), l.slice(0, y))) u[s] = n[s];

        u['...(truncated keys)...'] = l.length - y;
      }
    }
    h.unshift(u);
    return u;
  }

  return function (t) {
    if (undefined === t) return 'undefined';
    if (null === t) return 'null';
    if ('function' == typeof t)
      try {
        return t.toString();
      } catch (t) {
        return '[function unknown]';
      }
    else {
      if (t instanceof Error) return t.name + ': ' + t.message;

      try {
        var e = JSON.stringify(t, I);
        return undefined === e ? '["' + typeof t + '" failed to stringify]' : e;
      } catch (e) {
        if ('function' == typeof t.toString)
          try {
            return t.toString();
          } catch (t) {}
      }
    }
    return '["' + typeof t + '" failed to stringify]';
  };
}

var n = e({
  maxDepth: 10,
  maxStringLimit: 100,
  maxArrayLimit: 50,
  maxObjectKeysLimit: 50,
});
exports.default = n;

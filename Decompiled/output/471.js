exports.default = function (t) {
  return n(t, new Set(), []);
};

var module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  n = function n(i, o, l) {
    if (undefined === i || null === i || 'boolean' == typeof i || 'number' == typeof i || 'string' == typeof i)
      return {
        serializable: true,
      };
    if ('[object Object]' !== Object.prototype.toString.call(i) && !Array.isArray(i))
      return {
        serializable: false,
        location: l,
        reason: 'function' == typeof i ? 'Function' : String(i),
      };
    if (o.has(i))
      return {
        serializable: false,
        reason: 'Circular reference',
        location: l,
      };
    if ((o.add(i), Array.isArray(i)))
      for (var f = 0; f < i.length; f++) {
        var u = n(i[f], new Set(o), [].concat(module36.default(l), [f]));
        if (!u.serializable) return u;
      }
    else
      for (var c in i) {
        var s = n(i[c], new Set(o), [].concat(module36.default(l), [c]));
        if (!s.serializable) return s;
      }
    return {
      serializable: true,
    };
  };

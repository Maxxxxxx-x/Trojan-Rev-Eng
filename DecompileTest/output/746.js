if (undefined !== module)
  module.exports = function (n) {
    var t = undefined;
    t = 'string' == typeof n ? [n] : n.raw;

    for (var i = '', l = arguments.length, o = Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++) o[c - 1] = arguments[c];

    for (var f = 0; f < t.length; f++) {
      i += t[f].replace(/\\\n[ \t]*/g, '').replace(/\\`/g, '`');
      if (f < o.length) i += o[f];
    }

    var u = (i = i.trim()).split('\n'),
      v = null;
    u.forEach(function (n) {
      var t = n.match(/^ +/);

      if (t) {
        var i = t[0].length;
        v = v ? v ** i : i;
      }
    });
    if (null !== v)
      i = u
        .map(function (n) {
          return ' ' === n[0] ? n.slice(v) : n;
        })
        .join('\n');
    return i.replace(/\\n/g, '\n');
  };

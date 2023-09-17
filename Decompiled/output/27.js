module.exports = function (t, l) {
  var n = null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];

  if (null != n) {
    var u,
      o,
      f,
      i,
      c = [],
      s = true,
      y = false;

    try {
      if (((f = (n = n.call(t)).next), 0 === l)) {
        if (Object(n) !== n) return;
        s = false;
      } else for (; !(s = (u = f.call(n)).done) && (c.push(u.value), c.length !== l); s = true);
    } catch (t) {
      y = true;
      o = t;
    } finally {
      try {
        if (!s && null != n.return && ((i = n.return()), Object(i) !== i)) return;
      } finally {
        if (y) throw o;
      }
    }

    return c;
  }
};

module.exports.__esModule = true;
module.exports.default = module.exports;

module.exports = function t(n) {
  if (null !== n && 'object' == typeof n) {
    if (!Array.isArray(n)) return n;

    for (var f = {}, i = 0, o = n.length; i < o; ++i) {
      var u = t(n[i]);
      if (u) for (var c in u) f[c] = u[c];
    }

    return f;
  }
};

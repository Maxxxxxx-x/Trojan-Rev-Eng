module.exports = function (t, n, o, f) {
  var c = o ? o.call(f, t, n) : undefined;
  if (undefined !== c) return !!c;
  if (t === n) return true;
  if ('object' != typeof t || !t || 'object' != typeof n || !n) return false;
  var u = Object.keys(t),
    v = Object.keys(n);
  if (u.length !== v.length) return false;

  for (var l = Object.prototype.hasOwnProperty.bind(n), b = 0; b < u.length; b++) {
    var p = u[b];
    if (!l(p)) return false;
    var y = t[p],
      j = n[p];
    if (false === (c = o ? o.call(f, y, j, p) : undefined) || (undefined === c && y !== j)) return false;
  }

  return true;
};

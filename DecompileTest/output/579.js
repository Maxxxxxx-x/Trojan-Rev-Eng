function t(t, n) {
  return t === n ? 0 !== t || 0 !== n || 1 / t == 1 / n : t != t && n != n;
}

exports.__esModule = true;

exports.default = function (n, u) {
  if (t(n, u)) return true;
  if ('object' != typeof n || null === n || 'object' != typeof u || null === u) return false;
  var o = Object.keys(n),
    f = Object.keys(u);
  if (o.length !== f.length) return false;

  for (var l = 0; l < o.length; l++) if (!Object.prototype.hasOwnProperty.call(u, o[l]) || !t(n[o[l]], u[o[l]])) return false;

  return true;
};

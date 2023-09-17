exports.default = function (t, n) {
  if (t === n) return true;
  var u = Object.keys(t),
    f = Object.keys(n);
  if (u.length !== f.length) return false;
  return u.every(function (u) {
    return t[u] === n[u];
  });
};

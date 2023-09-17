exports.default = function (n, t) {
  if (n === t) return true;
  if (n.length !== t.length) return false;
  return n.every(function (n, u) {
    return n === t[u];
  });
};

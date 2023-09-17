module.exports = function (t, n) {
  for (var i = {}, s = Object.keys(t), c = Array.isArray(n), f = 0; f < s.length; f++) {
    var o = s[f],
      u = t[o];
    if (c ? -1 !== n.indexOf(o) : n(o, u, t)) i[o] = u;
  }

  return i;
};

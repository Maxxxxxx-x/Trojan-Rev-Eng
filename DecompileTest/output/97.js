module.exports = function (t, n) {
  if (null == t) return {};
  var o,
    u,
    f = {},
    s = Object.keys(t);

  for (u = 0; u < s.length; u++) {
    o = s[u];
    if (!(n.indexOf(o) >= 0)) f[o] = t[o];
  }

  return f;
};

module.exports.__esModule = true;
module.exports.default = module.exports;

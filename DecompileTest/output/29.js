module.exports = function (t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, l = new Array(n); o < n; o++) l[o] = t[o];

  return l;
};

module.exports.__esModule = true;
module.exports.default = module.exports;

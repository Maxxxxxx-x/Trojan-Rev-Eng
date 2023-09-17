exports.getUrlCacheBreaker = function () {
  if (null == n) return '';
  return n;
};

exports.pickScale = function (n, u) {
  if (null == u) u = module160.default.get();

  for (var l = 0; l < n.length; l++) if (n[l] >= u) return n[l];

  return n[n.length - 1] || 1;
};

exports.setUrlCacheBreaker = function (t) {
  n = t;
};

var n,
  module160 = require('@babel/runtime/helpers/interopRequireDefault')(require('./160'));

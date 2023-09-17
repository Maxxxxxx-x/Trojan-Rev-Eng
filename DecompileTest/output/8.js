function t(t, o) {
  for (var n = 0; n < o.length; n++) {
    var p = o[n];
    p.enumerable = p.enumerable || false;
    p.configurable = true;
    if ('value' in p) p.writable = true;
    Object.defineProperty(t, require('./9')(p.key), p);
  }
}

module.exports = function (o, n, p) {
  if (n) t(o.prototype, n);
  if (p) t(o, p);
  Object.defineProperty(o, 'prototype', {
    writable: false,
  });
  return o;
};

module.exports.__esModule = true;
module.exports.default = module.exports;

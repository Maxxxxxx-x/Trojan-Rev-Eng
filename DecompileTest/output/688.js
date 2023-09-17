var n, i;
n = this;

i = function (n) {
  n.pad.ZeroPadding = {
    pad: function (n, i) {
      var o = 4 * i;
      n.clamp();
      n.sigBytes += o - (n.sigBytes % o || o);
    },
    unpad: function (n) {
      for (var i = n.words, o = n.sigBytes - 1; !((i[o >>> 2] >>> (24 - (o % 4) * 8)) & 255); ) o--;

      n.sigBytes = o + 1;
    },
  };
  return n.pad.ZeroPadding;
};

if ('object' == typeof exports) module.exports = exports = i(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], i);
else i(n.CryptoJS);

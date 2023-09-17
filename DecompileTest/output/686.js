var o, n;
o = this;

n = function (o) {
  o.pad.Iso10126 = {
    pad: function (n, t) {
      var c = 4 * t,
        s = c - (n.sigBytes % c);
      n.concat(o.lib.WordArray.random(s - 1)).concat(o.lib.WordArray.create([s << 24], 1));
    },
    unpad: function (o) {
      var n = 255 & o.words[(o.sigBytes - 1) >>> 2];
      o.sigBytes -= n;
    },
  };
  return o.pad.Iso10126;
};

if ('object' == typeof exports) module.exports = exports = n(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], n);
else n(o.CryptoJS);

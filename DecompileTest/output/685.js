var n, t;
n = this;

t = function (n) {
  n.pad.AnsiX923 = {
    pad: function (n, t) {
      var o = n.sigBytes,
        s = 4 * t,
        c = s - (o % s),
        f = o + c - 1;
      n.clamp();
      n.words[f >>> 2] |= c << (24 - (f % 4) * 8);
      n.sigBytes += c;
    },
    unpad: function (n) {
      var t = 255 & n.words[(n.sigBytes - 1) >>> 2];
      n.sigBytes -= t;
    },
  };
  return n.pad.Ansix923;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], t);
else t(n.CryptoJS);

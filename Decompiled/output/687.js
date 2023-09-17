var n, o;
n = this;

o = function (n) {
  n.pad.Iso97971 = {
    pad: function (o, t) {
      o.concat(n.lib.WordArray.create([2147483648], 1));
      n.pad.ZeroPadding.pad(o, t);
    },
    unpad: function (o) {
      n.pad.ZeroPadding.unpad(o);
      o.sigBytes--;
    },
  };
  return n.pad.Iso97971;
};

if ('object' == typeof exports) module.exports = exports = o(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], o);
else o(n.CryptoJS);

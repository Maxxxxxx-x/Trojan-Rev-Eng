var n, o;
n = this;

o = function (n) {
  n.pad.NoPadding = {
    pad: function () {},
    unpad: function () {},
  };
  return n.pad.NoPadding;
};

if ('object' == typeof exports) module.exports = exports = o(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], o);
else o(n.CryptoJS);

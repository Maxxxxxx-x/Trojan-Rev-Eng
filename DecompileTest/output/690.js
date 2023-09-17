var t, n;
t = this;

n = function (t) {
  var n, o, c;
  o = (n = t).lib.CipherParams;
  c = n.enc.Hex;
  n.format.Hex = {
    stringify: function (t) {
      return t.ciphertext.toString(c);
    },
    parse: function (t) {
      var n = c.parse(t);
      return o.create({
        ciphertext: n,
      });
    },
  };
  return t.format.Hex;
};

if ('object' == typeof exports) module.exports = exports = n(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], n);
else n(t.CryptoJS);

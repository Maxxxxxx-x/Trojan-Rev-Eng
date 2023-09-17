var o, c;
o = this;

c = function (o) {
  var c;
  o.mode.ECB =
    (((c = o.lib.BlockCipherMode.extend()).Encryptor = c.extend({
      processBlock: function (o, c) {
        this._cipher.encryptBlock(o, c);
      },
    })),
    (c.Decryptor = c.extend({
      processBlock: function (o, c) {
        this._cipher.decryptBlock(o, c);
      },
    })),
    c);
  return o.mode.ECB;
};

if ('object' == typeof exports) module.exports = exports = c(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], c);
else c(o.CryptoJS);

var o, t;
o = this;

t = function (o) {
  var t, i;
  o.mode.OFB =
    ((t = o.lib.BlockCipherMode.extend()),
    (i = t.Encryptor = t.extend({
      processBlock: function (o, t) {
        var i = this._cipher,
          c = i.blockSize,
          n = this._iv,
          s = this._keystream;

        if (n) {
          s = this._keystream = n.slice(0);
          this._iv = undefined;
        }

        i.encryptBlock(s, 0);

        for (var p = 0; p < c; p++) o[t + p] ^= s[p];
      },
    })),
    (t.Decryptor = i),
    t);
  return o.mode.OFB;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], t);
else t(o.CryptoJS);

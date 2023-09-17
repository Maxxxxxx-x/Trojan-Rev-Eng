var o, i;
o = this;

i = function (o) {
  var i, t;
  o.mode.CTR =
    ((i = o.lib.BlockCipherMode.extend()),
    (t = i.Encryptor = i.extend({
      processBlock: function (o, i) {
        var t = this._cipher,
          c = t.blockSize,
          n = this._iv,
          p = this._counter;

        if (n) {
          p = this._counter = n.slice(0);
          this._iv = undefined;
        }

        var s = p.slice(0);
        t.encryptBlock(s, 0);
        p[c - 1] = (p[c - 1] + 1) | 0;

        for (var f = 0; f < c; f++) o[i + f] ^= s[f];
      },
    })),
    (i.Decryptor = t),
    i);
  return o.mode.CTR;
};

if ('object' == typeof exports) module.exports = exports = i(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], i);
else i(o.CryptoJS);

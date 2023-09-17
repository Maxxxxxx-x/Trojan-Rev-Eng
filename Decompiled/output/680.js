var i, c;
i = this;

c = function (i) {
  i.mode.CFB = (function () {
    var c = i.lib.BlockCipherMode.extend();

    function o(i, c, o, t) {
      var n = this._iv;

      if (n) {
        var s = n.slice(0);
        this._iv = undefined;
      } else s = this._prevBlock;

      t.encryptBlock(s, 0);

      for (var l = 0; l < o; l++) i[c + l] ^= s[l];
    }

    c.Encryptor = c.extend({
      processBlock: function (i, c) {
        var t = this._cipher,
          n = t.blockSize;
        o.call(this, i, c, n, t);
        this._prevBlock = i.slice(c, c + n);
      },
    });
    c.Decryptor = c.extend({
      processBlock: function (i, c) {
        var t = this._cipher,
          n = t.blockSize,
          s = i.slice(c, c + n);
        o.call(this, i, c, n, t);
        this._prevBlock = s;
      },
    });
    return c;
  })();

  return i.mode.CFB;
};

if ('object' == typeof exports) module.exports = exports = c(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], c);
else c(i.CryptoJS);

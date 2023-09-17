var n, t;
n = this;

t = function (n) {
  n.mode.CTRGladman = (function () {
    var t = n.lib.BlockCipherMode.extend();

    function o(n) {
      if (255 == ((n >> 24) & 255)) {
        var t = (n >> 16) & 255,
          o = (n >> 8) & 255,
          i = 255 & n;

        if (255 === t) {
          t = 0;

          if (255 === o) {
            o = 0;
            if (255 === i) i = 0;
            else ++i;
          } else ++o;
        } else ++t;

        n = 0;
        n += t << 16;
        n += o << 8;
        n += i;
      } else n += 16777216;

      return n;
    }

    function i(n) {
      if (0 === (n[0] = o(n[0]))) n[1] = o(n[1]);
      return n;
    }

    var c = (t.Encryptor = t.extend({
      processBlock: function (n, t) {
        var o = this._cipher,
          c = o.blockSize,
          f = this._iv,
          u = this._counter;

        if (f) {
          u = this._counter = f.slice(0);
          this._iv = undefined;
        }

        i(u);
        var s = u.slice(0);
        o.encryptBlock(s, 0);

        for (var p = 0; p < c; p++) n[t + p] ^= s[p];
      },
    }));
    t.Decryptor = c;
    return t;
  })();

  return n.mode.CTRGladman;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], t);
else t(n.CryptoJS);

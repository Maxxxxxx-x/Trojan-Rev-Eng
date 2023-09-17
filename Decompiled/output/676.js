var t, i;
t = this;

i = function (t) {
  var i, n, s;
  n = (i = t).lib.Base;
  s = i.enc.Utf8;
  i.algo.HMAC = n.extend({
    init: function (t, i) {
      t = this._hasher = new t.init();
      if ('string' == typeof i) i = s.parse(i);
      var n = t.blockSize,
        o = 4 * n;
      if (i.sigBytes > o) i = t.finalize(i);
      i.clamp();

      for (var f = (this._oKey = i.clone()), h = (this._iKey = i.clone()), c = f.words, u = h.words, l = 0; l < n; l++) {
        c[l] ^= 1549556828;
        u[l] ^= 909522486;
      }

      f.sigBytes = h.sigBytes = o;
      this.reset();
    },
    reset: function () {
      var t = this._hasher;
      t.reset();
      t.update(this._iKey);
    },
    update: function (t) {
      this._hasher.update(t);

      return this;
    },
    finalize: function (t) {
      var i = this._hasher,
        n = i.finalize(t);
      i.reset();
      return i.finalize(this._oKey.clone().concat(n));
    },
  });
};

if ('object' == typeof exports) module.exports = exports = i(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], i);
else i(t.CryptoJS);

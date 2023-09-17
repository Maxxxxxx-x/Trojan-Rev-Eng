var e, t;
e = this;

t = function (e) {
  var t, n, o, s, a, i;
  n = (t = e).lib;
  o = n.WordArray;
  s = n.Hasher;
  a = [];
  i = t.algo.SHA1 = s.extend({
    _doReset: function () {
      this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (e, t) {
      for (var n = this._hash.words, o = n[0], s = n[1], i = n[2], h = n[3], c = n[4], f = 0; f < 80; f++) {
        if (f < 16) a[f] = 0 | e[t + f];
        else {
          var _ = a[f - 3] ^ a[f - 8] ^ a[f - 14] ^ a[f - 16];

          a[f] = (_ << 1) | (_ >>> 31);
        }
        var l = ((o << 5) | (o >>> 27)) + c + a[f];
        l += f < 20 ? 1518500249 + ((s & i) | (~s & h)) : f < 40 ? 1859775393 + (s ^ i ^ h) : f < 60 ? ((s & i) | (s & h) | (i & h)) - 1894007588 : (s ^ i ^ h) - 899497514;
        c = h;
        h = i;
        i = (s << 30) | (s >>> 2);
        s = o;
        o = l;
      }

      n[0] = (n[0] + o) | 0;
      n[1] = (n[1] + s) | 0;
      n[2] = (n[2] + i) | 0;
      n[3] = (n[3] + h) | 0;
      n[4] = (n[4] + c) | 0;
    },
    _doFinalize: function () {
      var e = this._data,
        t = e.words,
        n = 8 * this._nDataBytes,
        o = 8 * e.sigBytes;
      t[o >>> 5] |= 128 << (24 - (o % 32));
      t[14 + (((o + 64) >>> 9) << 4)] = Math.floor(n / 4294967296);
      t[15 + (((o + 64) >>> 9) << 4)] = n;
      e.sigBytes = 4 * t.length;

      this._process();

      return this._hash;
    },
    clone: function () {
      var e = s.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    },
  });
  t.SHA1 = s._createHelper(i);
  t.HmacSHA1 = s._createHmacHelper(i);
  return e.SHA1;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], t);
else t(e.CryptoJS);

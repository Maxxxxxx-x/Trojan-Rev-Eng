var e, t;
e = this;

t = function (e) {
  (function (t) {
    var n = e,
      o = n.lib,
      i = o.WordArray,
      s = o.Hasher,
      a = n.algo,
      c = [],
      f = [];
    !(function () {
      function e(e) {
        for (var n = t.sqrt(e), o = 2; o <= n; o++) if (!(e % o)) return false;

        return true;
      }

      function n(e) {
        return (4294967296 * (e - (0 | e))) | 0;
      }

      for (var o = 2, i = 0; i < 64; ) {
        if (e(o)) {
          if (i < 8) c[i] = n(o ** 0.5);
          f[i] = n(o ** 0.3333333333333333);
          i++;
        }

        o++;
      }
    })();
    var h = [],
      u = (a.SHA256 = s.extend({
        _doReset: function () {
          this._hash = new i.init(c.slice(0));
        },
        _doProcessBlock: function (e, t) {
          for (var n = this._hash.words, o = n[0], i = n[1], s = n[2], a = n[3], c = n[4], u = n[5], l = n[6], _ = n[7], d = 0; d < 64; d++) {
            if (d < 16) h[d] = 0 | e[t + d];
            else {
              var v = h[d - 15],
                p = ((v << 25) | (v >>> 7)) ^ ((v << 14) | (v >>> 18)) ^ (v >>> 3),
                H = h[d - 2],
                y = ((H << 15) | (H >>> 17)) ^ ((H << 13) | (H >>> 19)) ^ (H >>> 10);
              h[d] = p + h[d - 7] + y + h[d - 16];
            }
            var w = (o & i) ^ (o & s) ^ (i & s),
              A = ((o << 30) | (o >>> 2)) ^ ((o << 19) | (o >>> 13)) ^ ((o << 10) | (o >>> 22)),
              S = _ + (((c << 26) | (c >>> 6)) ^ ((c << 21) | (c >>> 11)) ^ ((c << 7) | (c >>> 25))) + ((c & u) ^ (~c & l)) + f[d] + h[d];
            _ = l;
            l = u;
            u = c;
            c = (a + S) | 0;
            a = s;
            s = i;
            i = o;
            o = (S + (A + w)) | 0;
          }

          n[0] = (n[0] + o) | 0;
          n[1] = (n[1] + i) | 0;
          n[2] = (n[2] + s) | 0;
          n[3] = (n[3] + a) | 0;
          n[4] = (n[4] + c) | 0;
          n[5] = (n[5] + u) | 0;
          n[6] = (n[6] + l) | 0;
          n[7] = (n[7] + _) | 0;
        },
        _doFinalize: function () {
          var e = this._data,
            n = e.words,
            o = 8 * this._nDataBytes,
            i = 8 * e.sigBytes;
          n[i >>> 5] |= 128 << (24 - (i % 32));
          n[14 + (((i + 64) >>> 9) << 4)] = t.floor(o / 4294967296);
          n[15 + (((i + 64) >>> 9) << 4)] = o;
          e.sigBytes = 4 * n.length;

          this._process();

          return this._hash;
        },
        clone: function () {
          var e = s.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        },
      }));
    n.SHA256 = s._createHelper(u);
    n.HmacSHA256 = s._createHmacHelper(u);
  })(Math);

  return e.SHA256;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], t);
else t(e.CryptoJS);

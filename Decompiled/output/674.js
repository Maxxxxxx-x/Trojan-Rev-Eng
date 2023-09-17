var o, t;
o = this;

t = function (o) {
  (function (t) {
    var i = o,
      h = i.lib,
      n = h.WordArray,
      f = h.Hasher,
      s = i.x64.Word,
      c = i.algo,
      l = [],
      v = [],
      u = [];
    !(function () {
      for (var o = 1, t = 0, i = 0; i < 24; i++) {
        l[o + 5 * t] = (((i + 1) * (i + 2)) / 2) % 64;
        var h = (2 * o + 3 * t) % 5;
        o = t % 5;
        t = h;
      }

      for (o = 0; o < 5; o++) for (t = 0; t < 5; t++) v[o + 5 * t] = t + ((2 * o + 3 * t) % 5) * 5;

      for (var n = 1, f = 0; f < 24; f++) {
        for (var c = 0, w = 0, _ = 0; _ < 7; _++) {
          if (1 & n) {
            var p = (1 << _) - 1;
            if (p < 32) w ^= 1 << p;
            else c ^= 1 << (p - 32);
          }

          if (128 & n) n = (n << 1) ^ 113;
          else n <<= 1;
        }

        u[f] = s.create(c, w);
      }
    })();
    var w = [];
    !(function () {
      for (var o = 0; o < 25; o++) w[o] = s.create();
    })();

    var _ = (c.SHA3 = f.extend({
      cfg: f.cfg.extend({
        outputLength: 512,
      }),
      _doReset: function () {
        for (var o = (this._state = []), t = 0; t < 25; t++) o[t] = new s.init();

        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      },
      _doProcessBlock: function (o, t) {
        for (var i = this._state, h = this.blockSize / 2, n = 0; n < h; n++) {
          var f = o[t + 2 * n],
            s = o[t + 2 * n + 1];
          f = (16711935 & ((f << 8) | (f >>> 24))) | (4278255360 & ((f << 24) | (f >>> 8)));
          s = (16711935 & ((s << 8) | (s >>> 24))) | (4278255360 & ((s << 24) | (s >>> 8)));
          (F = i[n]).high ^= s;
          F.low ^= f;
        }

        for (var c = 0; c < 24; c++) {
          for (var _ = 0; _ < 5; _++) {
            for (var p = 0, H = 0, S = 0; S < 5; S++) {
              p ^= (F = i[_ + 5 * S]).high;
              H ^= F.low;
            }

            var y = w[_];
            y.high = p;
            y.low = H;
          }

          for (_ = 0; _ < 5; _++) {
            var b = w[(_ + 4) % 5],
              x = w[(_ + 1) % 5],
              A = x.high,
              k = x.low;

            for (p = b.high ^ ((A << 1) | (k >>> 31)), H = b.low ^ ((k << 1) | (A >>> 31)), S = 0; S < 5; S++) {
              (F = i[_ + 5 * S]).high ^= p;
              F.low ^= H;
            }
          }

          for (var z = 1; z < 25; z++) {
            var B = (F = i[z]).high,
              L = F.low,
              W = l[z];

            if (W < 32) {
              p = (B << W) | (L >>> (32 - W));
              H = (L << W) | (B >>> (32 - W));
            } else {
              p = (L << (W - 32)) | (B >>> (64 - W));
              H = (B << (W - 32)) | (L >>> (64 - W));
            }

            var j = w[v[z]];
            j.high = p;
            j.low = H;
          }

          var C = w[0],
            D = i[0];
          C.high = D.high;
          C.low = D.low;

          for (_ = 0; _ < 5; _++)
            for (S = 0; S < 5; S++) {
              var F = i[(z = _ + 5 * S)],
                J = w[z],
                M = w[((_ + 1) % 5) + 5 * S],
                P = w[((_ + 2) % 5) + 5 * S];
              F.high = J.high ^ (~M.high & P.high);
              F.low = J.low ^ (~M.low & P.low);
            }

          F = i[0];
          var R = u[c];
          F.high ^= R.high;
          F.low ^= R.low;
        }
      },
      _doFinalize: function () {
        this._nDataBytes;
        var o = this._data,
          i = o.words,
          h = 8 * o.sigBytes,
          f = 32 * this.blockSize;
        i[h >>> 5] |= 1 << (24 - (h % 32));
        i[((t.ceil((h + 1) / f) * f) >>> 5) - 1] |= 128;
        o.sigBytes = 4 * i.length;

        this._process();

        for (var s = this._state, c = this.cfg.outputLength / 8, l = c / 8, v = [], u = 0; u < l; u++) {
          var w = s[u],
            _ = w.high,
            p = w.low;
          _ = (16711935 & ((_ << 8) | (_ >>> 24))) | (4278255360 & ((_ << 24) | (_ >>> 8)));
          p = (16711935 & ((p << 8) | (p >>> 24))) | (4278255360 & ((p << 24) | (p >>> 8)));
          v.push(p);
          v.push(_);
        }

        return new n.init(v, c);
      },
      clone: function () {
        for (var o = f.clone.call(this), t = (o._state = this._state.slice(0)), i = 0; i < 25; i++) t[i] = t[i].clone();

        return o;
      },
    }));

    i.SHA3 = f._createHelper(_);
    i.HmacSHA3 = f._createHmacHelper(_);
  })(Math);

  return o.SHA3;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'), require('./664'));
else if ('function' == typeof define && define.amd) define(['./core', './x64-core'], t);
else t(o.CryptoJS);

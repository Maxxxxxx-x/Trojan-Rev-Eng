var t, n;
t = this;

n = function (t) {
  (function (n) {
    var o = t,
      s = o.lib,
      c = s.WordArray,
      i = s.Hasher,
      u = o.algo,
      f = c.create([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13,
      ]),
      h = c.create([
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11,
      ]),
      _ = c.create([
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6,
      ]),
      l = c.create([
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11,
      ]),
      v = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
      w = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
      p = (u.RIPEMD160 = i.extend({
        _doReset: function () {
          this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function (t, n) {
          for (var o = 0; o < 16; o++) {
            var s = n + o,
              c = t[s];
            t[s] = (16711935 & ((c << 8) | (c >>> 24))) | (4278255360 & ((c << 24) | (c >>> 8)));
          }

          var i,
            u,
            p,
            B,
            E,
            I,
            b,
            x,
            j,
            k,
            z,
            A = this._hash.words,
            C = v.words,
            F = w.words,
            J = f.words,
            S = h.words,
            W = _.words,
            q = l.words;
          I = i = A[0];
          b = u = A[1];
          x = p = A[2];
          j = B = A[3];
          k = E = A[4];

          for (o = 0; o < 80; o += 1) {
            z = (i + t[n + J[o]]) | 0;
            z += o < 16 ? y(u, p, B) + C[0] : o < 32 ? D(u, p, B) + C[1] : o < 48 ? H(u, p, B) + C[2] : o < 64 ? M(u, p, B) + C[3] : P(u, p, B) + C[4];
            z = ((z = R((z |= 0), W[o])) + E) | 0;
            i = E;
            E = B;
            B = R(p, 10);
            p = u;
            u = z;
            z = (I + t[n + S[o]]) | 0;
            z += o < 16 ? P(b, x, j) + F[0] : o < 32 ? M(b, x, j) + F[1] : o < 48 ? H(b, x, j) + F[2] : o < 64 ? D(b, x, j) + F[3] : y(b, x, j) + F[4];
            z = ((z = R((z |= 0), q[o])) + k) | 0;
            I = k;
            k = j;
            j = R(x, 10);
            x = b;
            b = z;
          }

          z = (A[1] + p + j) | 0;
          A[1] = (A[2] + B + k) | 0;
          A[2] = (A[3] + E + I) | 0;
          A[3] = (A[4] + i + b) | 0;
          A[4] = (A[0] + u + x) | 0;
          A[0] = z;
        },
        _doFinalize: function () {
          var t = this._data,
            n = t.words,
            o = 8 * this._nDataBytes,
            s = 8 * t.sigBytes;
          n[s >>> 5] |= 128 << (24 - (s % 32));
          n[14 + (((s + 64) >>> 9) << 4)] = (16711935 & ((o << 8) | (o >>> 24))) | (4278255360 & ((o << 24) | (o >>> 8)));
          t.sigBytes = 4 * (n.length + 1);

          this._process();

          for (var c = this._hash, i = c.words, u = 0; u < 5; u++) {
            var f = i[u];
            i[u] = (16711935 & ((f << 8) | (f >>> 24))) | (4278255360 & ((f << 24) | (f >>> 8)));
          }

          return c;
        },
        clone: function () {
          var t = i.clone.call(this);
          t._hash = this._hash.clone();
          return t;
        },
      }));

    function y(t, n, o) {
      return t ^ n ^ o;
    }

    function D(t, n, o) {
      return (t & n) | (~t & o);
    }

    function H(t, n, o) {
      return (t | ~n) ^ o;
    }

    function M(t, n, o) {
      return (t & o) | (n & ~o);
    }

    function P(t, n, o) {
      return t ^ (n | ~o);
    }

    function R(t, n) {
      return (t << n) | (t >>> (32 - n));
    }

    o.RIPEMD160 = i._createHelper(p);
    o.HmacRIPEMD160 = i._createHmacHelper(p);
  })(Math);

  return t.RIPEMD160;
};

if ('object' == typeof exports) module.exports = exports = n(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);

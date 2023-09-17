var t, n;
t = this;

n = function (t) {
  var n, i, o, c, f, s, h, u;
  i = (n = t).lib;
  o = i.Base;
  c = i.WordArray;
  f = n.algo;
  s = f.SHA1;
  h = f.HMAC;
  u = f.PBKDF2 = o.extend({
    cfg: o.extend({
      keySize: 4,
      hasher: s,
      iterations: 1,
    }),
    init: function (t) {
      this.cfg = this.cfg.extend(t);
    },
    compute: function (t, n) {
      for (var i = this.cfg, o = h.create(i.hasher, t), f = c.create(), s = c.create([1]), u = f.words, p = s.words, y = i.keySize, l = i.iterations; u.length < y; ) {
        var v = o.update(n).finalize(s);
        o.reset();

        for (var B = v.words, w = B.length, x = v, z = 1; z < l; z++) {
          x = o.finalize(x);
          o.reset();

          for (var S = x.words, A = 0; A < w; A++) B[A] ^= S[A];
        }

        f.concat(v);
        p[0]++;
      }

      f.sigBytes = 4 * y;
      return f;
    },
  });

  n.PBKDF2 = function (t, n, i) {
    return u.create(i).compute(t, n);
  };

  return t.PBKDF2;
};

if ('object' == typeof exports) module.exports = exports = n(require('./663'), require('./669'), require('./676'));
else if ('function' == typeof define && define.amd) define(['./core', './sha1', './hmac'], n);
else n(t.CryptoJS);

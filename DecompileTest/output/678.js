var t, n;
t = this;

n = function (t) {
  var n, i, o, c, f, s, u;
  i = (n = t).lib;
  o = i.Base;
  c = i.WordArray;
  f = n.algo;
  s = f.MD5;
  u = f.EvpKDF = o.extend({
    cfg: o.extend({
      keySize: 4,
      hasher: s,
      iterations: 1,
    }),
    init: function (t) {
      this.cfg = this.cfg.extend(t);
    },
    compute: function (t, n) {
      for (var i = this.cfg, o = i.hasher.create(), f = c.create(), s = f.words, u = i.keySize, h = i.iterations; s.length < u; ) {
        if (p) o.update(p);
        var p = o.update(t).finalize(n);
        o.reset();

        for (var v = 1; v < h; v++) {
          p = o.finalize(p);
          o.reset();
        }

        f.concat(p);
      }

      f.sigBytes = 4 * u;
      return f;
    },
  });

  n.EvpKDF = function (t, n, i) {
    return u.create(i).compute(t, n);
  };

  return t.EvpKDF;
};

if ('object' == typeof exports) module.exports = exports = n(require('./663'), require('./669'), require('./676'));
else if ('function' == typeof define && define.amd) define(['./core', './sha1', './hmac'], n);
else n(t.CryptoJS);

var t, i;
t = this;

i = function (t) {
  (function () {
    var i = t,
      o = i.lib.StreamCipher,
      n = i.algo,
      s = (n.RC4 = o.extend({
        _doReset: function () {
          for (var t = this._key, i = t.words, o = t.sigBytes, n = (this._S = []), s = 0; s < 256; s++) n[s] = s;

          s = 0;

          for (var c = 0; s < 256; s++) {
            var f = s % o,
              _ = (i[f >>> 2] >>> (24 - (f % 4) * 8)) & 255;

            c = (c + n[s] + _) % 256;
            var h = n[s];
            n[s] = n[c];
            n[c] = h;
          }

          this._i = this._j = 0;
        },
        _doProcessBlock: function (t, i) {
          t[i] ^= c.call(this);
        },
        keySize: 8,
        ivSize: 0,
      }));

    function c() {
      for (var t = this._S, i = this._i, o = this._j, n = 0, s = 0; s < 4; s++) {
        o = (o + t[(i = (i + 1) % 256)]) % 256;
        var c = t[i];
        t[i] = t[o];
        t[o] = c;
        n |= t[(t[i] + t[o]) % 256] << (24 - 8 * s);
      }

      this._i = i;
      this._j = o;
      return n;
    }

    i.RC4 = o._createHelper(s);
    var f = (n.RC4Drop = s.extend({
      cfg: s.cfg.extend({
        drop: 192,
      }),
      _doReset: function () {
        s._doReset.call(this);

        for (var t = this.cfg.drop; t > 0; t--) c.call(this);
      },
    }));
    i.RC4Drop = o._createHelper(f);
  })();

  return t.RC4;
};

if ('object' == typeof exports) module.exports = exports = i(require('./663'), require('./667'), require('./668'), require('./678'), require('./679'));
else if ('function' == typeof define && define.amd) define(['./core', './enc-base64', './md5', './evpkdf', './cipher-core'], i);
else i(t.CryptoJS);

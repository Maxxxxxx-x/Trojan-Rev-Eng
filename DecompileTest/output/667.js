var t, n;
t = this;

n = function (t) {
  (function () {
    var n = t,
      i = n.lib.WordArray;
    n.enc.Base64 = {
      stringify: function (t) {
        var n = t.words,
          i = t.sigBytes,
          o = this._map;
        t.clamp();

        for (var f = [], c = 0; c < i; c += 3)
          for (
            var s =
                (((n[c >>> 2] >>> (24 - (c % 4) * 8)) & 255) << 16) |
                (((n[(c + 1) >>> 2] >>> (24 - ((c + 1) % 4) * 8)) & 255) << 8) |
                ((n[(c + 2) >>> 2] >>> (24 - ((c + 2) % 4) * 8)) & 255),
              h = 0;
            h < 4 && c + 0.75 * h < i;
            h++
          )
            f.push(o.charAt((s >>> (6 * (3 - h))) & 63));

        var v = o.charAt(64);
        if (v) for (; f.length % 4; ) f.push(v);
        return f.join('');
      },
      parse: function (t) {
        var n = t.length,
          i = this._map,
          f = this._reverseMap;

        if (!f) {
          f = this._reverseMap = [];

          for (var c = 0; c < i.length; c++) f[i.charCodeAt(c)] = c;
        }

        var s = i.charAt(64);

        if (s) {
          var h = t.indexOf(s);
          if (-1 !== h) n = h;
        }

        return o(t, n, f);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    };

    function o(t, n, o) {
      for (var f = [], c = 0, s = 0; s < n; s++)
        if (s % 4) {
          var h = o[t.charCodeAt(s - 1)] << ((s % 4) * 2),
            v = o[t.charCodeAt(s)] >>> (6 - (s % 4) * 2);
          f[c >>> 2] |= (h | v) << (24 - (c % 4) * 8);
          c++;
        }

      return i.create(f, c);
    }
  })();

  return t.enc.Base64;
};

if ('object' == typeof exports) module.exports = exports = n(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);

var n, t;
n = this;

t = function (n) {
  (function () {
    var t = n,
      o = t.lib.WordArray,
      f = t.enc;
    f.Utf16 = f.Utf16BE = {
      stringify: function (n) {
        for (var t = n.words, o = n.sigBytes, f = [], i = 0; i < o; i += 2) {
          var c = (t[i >>> 2] >>> (16 - (i % 4) * 8)) & 65535;
          f.push(String.fromCharCode(c));
        }

        return f.join('');
      },
      parse: function (n) {
        for (var t = n.length, f = [], i = 0; i < t; i++) f[i >>> 1] |= n.charCodeAt(i) << (16 - (i % 2) * 16);

        return o.create(f, 2 * t);
      },
    };

    function i(n) {
      return ((n << 8) & 4278255360) | ((n >>> 8) & 16711935);
    }

    f.Utf16LE = {
      stringify: function (n) {
        for (var t = n.words, o = n.sigBytes, f = [], c = 0; c < o; c += 2) {
          var u = i((t[c >>> 2] >>> (16 - (c % 4) * 8)) & 65535);
          f.push(String.fromCharCode(u));
        }

        return f.join('');
      },
      parse: function (n) {
        for (var t = n.length, f = [], c = 0; c < t; c++) f[c >>> 1] |= i(n.charCodeAt(c) << (16 - (c % 2) * 16));

        return o.create(f, 2 * t);
      },
    };
  })();

  return n.enc.Utf16;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], t);
else t(n.CryptoJS);

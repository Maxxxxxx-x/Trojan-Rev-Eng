var t, n;
t = this;

n = function () {
  var t =
    t ||
    (function (t, n) {
      r.Hasher = p.extend({
        cfg: o.extend(),
        init: function (t) {
          this.cfg = this.cfg.extend(t);
          this.reset();
        },
        reset: function () {
          p.reset.call(this);

          this._doReset();
        },
        update: function (t) {
          this._append(t);

          this._process();

          return this;
        },
        finalize: function (t) {
          if (t) this._append(t);
          return this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (t) {
          return function (n, i) {
            return new t.init(i).finalize(n);
          };
        },
        _createHmacHelper: function (t) {
          return function (n, i) {
            return new l.HMAC.init(t, i).finalize(n);
          };
        },
      });

      var i =
          Object.create ||
          (function () {
            function t() {}

            return function (n) {
              var i;
              t.prototype = n;
              i = new t();
              t.prototype = null;
              return i;
            };
          })(),
        e = {},
        r = (e.lib = {}),
        o = (r.Base = {
          extend: function (t) {
            var n = i(this);
            if (t) n.mixIn(t);
            if (!(n.hasOwnProperty('init') && this.init !== n.init))
              n.init = function () {
                n.$super.init.apply(this, arguments);
              };
            n.init.prototype = n;
            n.$super = this;
            return n;
          },
          create: function () {
            var t = this.extend();
            t.init.apply(t, arguments);
            return t;
          },
          init: function () {},
          mixIn: function (t) {
            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);

            if (t.hasOwnProperty('toString')) this.toString = t.toString;
          },
          clone: function () {
            return this.init.prototype.extend(this);
          },
        }),
        s = (r.WordArray = o.extend({
          init: function (t, n) {
            t = this.words = t || [];
            this.sigBytes = undefined != n ? n : 4 * t.length;
          },
          toString: function (t) {
            return (t || u).stringify(this);
          },
          concat: function (t) {
            var n = this.words,
              i = t.words,
              e = this.sigBytes,
              r = t.sigBytes;
            if ((this.clamp(), e % 4))
              for (var o = 0; o < r; o++) {
                var s = (i[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                n[(e + o) >>> 2] |= s << (24 - ((e + o) % 4) * 8);
              }
            else for (o = 0; o < r; o += 4) n[(e + o) >>> 2] = i[o >>> 2];
            this.sigBytes += r;
            return this;
          },
          clamp: function () {
            var n = this.words,
              i = this.sigBytes;
            n[i >>> 2] &= 4294967295 << (32 - (i % 4) * 8);
            n.length = t.ceil(i / 4);
          },
          clone: function () {
            var t = o.clone.call(this);
            t.words = this.words.slice(0);
            return t;
          },
          random: function (n) {
            for (
              var i,
                e = [],
                r = function (n) {
                  n = n;
                  var i = 987654321,
                    e = 4294967295;
                  return function () {
                    var r = (((i = (36969 * (65535 & i) + (i >> 16)) & e) << 16) + (n = (18e3 * (65535 & n) + (n >> 16)) & e)) & e;
                    r /= 4294967296;
                    return (r += 0.5) * (t.random() > 0.5 ? 1 : -1);
                  };
                },
                o = 0;
              o < n;
              o += 4
            ) {
              var c = r(4294967296 * (i || t.random()));
              i = 987654071 * c();
              e.push((4294967296 * c()) | 0);
            }

            return new s.init(e, n);
          },
        })),
        c = (e.enc = {}),
        u = (c.Hex = {
          stringify: function (t) {
            for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
              var o = (n[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
              e.push((o >>> 4).toString(16));
              e.push((15 & o).toString(16));
            }

            return e.join('');
          },
          parse: function (t) {
            for (var n = t.length, i = [], e = 0; e < n; e += 2) i[e >>> 3] |= parseInt(t.substr(e, 2), 16) << (24 - (e % 8) * 4);

            return new s.init(i, n / 2);
          },
        }),
        f = (c.Latin1 = {
          stringify: function (t) {
            for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
              var o = (n[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
              e.push(String.fromCharCode(o));
            }

            return e.join('');
          },
          parse: function (t) {
            for (var n = t.length, i = [], e = 0; e < n; e++) i[e >>> 2] |= (255 & t.charCodeAt(e)) << (24 - (e % 4) * 8);

            return new s.init(i, n);
          },
        }),
        h = (c.Utf8 = {
          stringify: function (t) {
            try {
              return decodeURIComponent(escape(f.stringify(t)));
            } catch (t) {
              throw new Error('Malformed UTF-8 data');
            }
          },
          parse: function (t) {
            return f.parse(unescape(encodeURIComponent(t)));
          },
        }),
        p = (r.BufferedBlockAlgorithm = o.extend({
          reset: function () {
            this._data = new s.init();
            this._nDataBytes = 0;
          },
          _append: function (t) {
            if ('string' == typeof t) t = h.parse(t);

            this._data.concat(t);

            this._nDataBytes += t.sigBytes;
          },
          _process: function (n) {
            var i = this._data,
              e = i.words,
              r = i.sigBytes,
              o = this.blockSize,
              c = r / (4 * o),
              u = (c = n ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0)) * o,
              f = t.min(4 * u, r);

            if (u) {
              for (var h = 0; h < u; h += o) this._doProcessBlock(e, h);

              var p = e.splice(0, u);
              i.sigBytes -= f;
            }

            return new s.init(p, f);
          },
          clone: function () {
            var t = o.clone.call(this);
            t._data = this._data.clone();
            return t;
          },
          _minBufferSize: 0,
        })),
        l = (e.algo = {});

      return e;
    })(Math);

  return t;
};

if ('object' == typeof exports) module.exports = exports = n();
else if ('function' == typeof define && define.amd) define([], n);
else t.CryptoJS = n();

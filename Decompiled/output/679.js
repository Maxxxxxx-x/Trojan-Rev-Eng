var t, i;
t = this;

i = function (t) {
  if (!t.lib.Cipher)
    (function (i) {
      c.StreamCipher = l.extend({
        _doFinalize: function () {
          return this._process(true);
        },
        blockSize: 1,
      });
      c.BlockCipher = l.extend({
        cfg: l.cfg.extend({
          mode: v,
          padding: k,
        }),
        reset: function () {
          l.reset.call(this);
          var t = this.cfg,
            i = t.iv,
            n = t.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) var c = n.createEncryptor;
          else {
            c = n.createDecryptor;
            this._minBufferSize = 1;
          }
          if (this._mode && this._mode.__creator == c) this._mode.init(this, i && i.words);
          else {
            this._mode = c.call(n, this, i && i.words);
            this._mode.__creator = c;
          }
        },
        _doProcessBlock: function (t, i) {
          this._mode.processBlock(t, i);
        },
        _doFinalize: function () {
          var t = this.cfg.padding;

          if (this._xformMode == this._ENC_XFORM_MODE) {
            t.pad(this._data, this.blockSize);

            var i = this._process(true);
          } else {
            i = this._process(true);
            t.unpad(i);
          }

          return i;
        },
        blockSize: 4,
      });

      var n = t,
        c = n.lib,
        o = c.Base,
        s = c.WordArray,
        f = c.BufferedBlockAlgorithm,
        p = n.enc,
        h = p.Base64,
        u = n.algo.EvpKDF,
        l = (c.Cipher = f.extend({
          cfg: o.extend(),
          createEncryptor: function (t, i) {
            return this.create(this._ENC_XFORM_MODE, t, i);
          },
          createDecryptor: function (t, i) {
            return this.create(this._DEC_XFORM_MODE, t, i);
          },
          init: function (t, i, n) {
            this.cfg = this.cfg.extend(n);
            this._xformMode = t;
            this._key = i;
            this.reset();
          },
          reset: function () {
            f.reset.call(this);

            this._doReset();
          },
          process: function (t) {
            this._append(t);

            return this._process();
          },
          finalize: function (t) {
            if (t) this._append(t);
            return this._doFinalize();
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: (function () {
            function t(t) {
              return 'string' == typeof t ? E : B;
            }

            return function (i) {
              return {
                encrypt: function (n, c, o) {
                  return t(c).encrypt(i, n, c, o);
                },
                decrypt: function (n, c, o) {
                  return t(c).decrypt(i, n, c, o);
                },
              };
            };
          })(),
        })),
        _ = (n.mode = {}),
        y = (c.BlockCipherMode = o.extend({
          createEncryptor: function (t, i) {
            return this.Encryptor.create(t, i);
          },
          createDecryptor: function (t, i) {
            return this.Decryptor.create(t, i);
          },
          init: function (t, i) {
            this._cipher = t;
            this._iv = i;
          },
        })),
        v = (_.CBC = (function () {
          var t = y.extend();

          function n(t, n, c) {
            var o = this._iv;

            if (o) {
              var s = o;
              this._iv = i;
            } else s = this._prevBlock;

            for (var f = 0; f < c; f++) t[n + f] ^= s[f];
          }

          t.Encryptor = t.extend({
            processBlock: function (t, i) {
              var c = this._cipher,
                o = c.blockSize;
              n.call(this, t, i, o);
              c.encryptBlock(t, i);
              this._prevBlock = t.slice(i, i + o);
            },
          });
          t.Decryptor = t.extend({
            processBlock: function (t, i) {
              var c = this._cipher,
                o = c.blockSize,
                s = t.slice(i, i + o);
              c.decryptBlock(t, i);
              n.call(this, t, i, o);
              this._prevBlock = s;
            },
          });
          return t;
        })()),
        k = ((n.pad = {}).Pkcs7 = {
          pad: function (t, i) {
            for (var n = 4 * i, c = n - (t.sigBytes % n), o = (c << 24) | (c << 16) | (c << 8) | c, f = [], p = 0; p < c; p += 4) f.push(o);

            var h = s.create(f, c);
            t.concat(h);
          },
          unpad: function (t) {
            var i = 255 & t.words[(t.sigBytes - 1) >>> 2];
            t.sigBytes -= i;
          },
        }),
        x = (c.CipherParams = o.extend({
          init: function (t) {
            this.mixIn(t);
          },
          toString: function (t) {
            return (t || this.formatter).stringify(this);
          },
        })),
        S = ((n.format = {}).OpenSSL = {
          stringify: function (t) {
            var i = t.ciphertext,
              n = t.salt;
            if (n) var c = s.create([1398893684, 1701076831]).concat(n).concat(i);
            else c = i;
            return c.toString(h);
          },
          parse: function (t) {
            var i = h.parse(t),
              n = i.words;

            if (1398893684 == n[0] && 1701076831 == n[1]) {
              var c = s.create(n.slice(2, 4));
              n.splice(0, 4);
              i.sigBytes -= 16;
            }

            return x.create({
              ciphertext: i,
              salt: c,
            });
          },
        }),
        B = (c.SerializableCipher = o.extend({
          cfg: o.extend({
            format: S,
          }),
          encrypt: function (t, i, n, c) {
            c = this.cfg.extend(c);
            var o = t.createEncryptor(n, c),
              s = o.finalize(i),
              f = o.cfg;
            return x.create({
              ciphertext: s,
              key: n,
              iv: f.iv,
              algorithm: t,
              mode: f.mode,
              padding: f.padding,
              blockSize: t.blockSize,
              formatter: c.format,
            });
          },
          decrypt: function (t, i, n, c) {
            c = this.cfg.extend(c);
            i = this._parse(i, c.format);
            return t.createDecryptor(n, c).finalize(i.ciphertext);
          },
          _parse: function (t, i) {
            return 'string' == typeof t ? i.parse(t, this) : t;
          },
        })),
        z = ((n.kdf = {}).OpenSSL = {
          execute: function (t, i, n, c) {
            if (!c) c = s.random(8);
            var o = u
                .create({
                  keySize: i + n,
                })
                .compute(t, c),
              f = s.create(o.words.slice(i), 4 * n);
            o.sigBytes = 4 * i;
            return x.create({
              key: o,
              iv: f,
              salt: c,
            });
          },
        }),
        E = (c.PasswordBasedCipher = B.extend({
          cfg: B.cfg.extend({
            kdf: z,
          }),
          encrypt: function (t, i, n, c) {
            var o = (c = this.cfg.extend(c)).kdf.execute(n, t.keySize, t.ivSize);
            c.iv = o.iv;
            var s = B.encrypt.call(this, t, i, o.key, c);
            s.mixIn(o);
            return s;
          },
          decrypt: function (t, i, n, c) {
            c = this.cfg.extend(c);
            i = this._parse(i, c.format);
            var o = c.kdf.execute(n, t.keySize, t.ivSize, i.salt);
            c.iv = o.iv;
            return B.decrypt.call(this, t, i, o.key, c);
          },
        }));
    })();
};

if ('object' == typeof exports) module.exports = exports = i(require('./663'), require('./678'));
else if ('function' == typeof define && define.amd) define(['./core', './evpkdf'], i);
else i(t.CryptoJS);

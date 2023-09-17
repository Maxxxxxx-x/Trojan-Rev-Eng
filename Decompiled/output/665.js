var n, t;
n = this;

t = function (n) {
  (function () {
    if ('function' == typeof ArrayBuffer) {
      var t = n.lib.WordArray,
        i = t.init;
      (t.init = function (n) {
        if (
          (n instanceof ArrayBuffer && (n = new Uint8Array(n)),
          (n instanceof Int8Array ||
            ('undefined' != typeof Uint8ClampedArray && n instanceof Uint8ClampedArray) ||
            n instanceof Int16Array ||
            n instanceof Uint16Array ||
            n instanceof Int32Array ||
            n instanceof Uint32Array ||
            n instanceof Float32Array ||
            n instanceof Float64Array) &&
            (n = new Uint8Array(n.buffer, n.byteOffset, n.byteLength)),
          n instanceof Uint8Array)
        ) {
          for (var t = n.byteLength, f = [], o = 0; o < t; o++) f[o >>> 2] |= n[o] << (24 - (o % 4) * 8);

          i.call(this, f, t);
        } else i.apply(this, arguments);
      }).prototype = t;
    }
  })();

  return n.lib.WordArray;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], t);
else t(n.CryptoJS);

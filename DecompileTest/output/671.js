var t, n;
t = this;

n = function (t) {
  var n, o, c, f, s;
  o = (n = t).lib.WordArray;
  c = n.algo;
  f = c.SHA256;
  s = c.SHA224 = f.extend({
    _doReset: function () {
      this._hash = new o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    },
    _doFinalize: function () {
      var t = f._doFinalize.call(this);

      t.sigBytes -= 4;
      return t;
    },
  });
  n.SHA224 = f._createHelper(s);
  n.HmacSHA224 = f._createHmacHelper(s);
  return t.SHA224;
};

if ('object' == typeof exports) module.exports = exports = n(require('./663'), require('./670'));
else if ('function' == typeof define && define.amd) define(['./core', './sha256'], n);
else n(t.CryptoJS);

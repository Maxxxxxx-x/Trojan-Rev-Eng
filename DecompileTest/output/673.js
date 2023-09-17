var n, t;
n = this;

t = function (n) {
  var t, o, c, f, s, w, H;
  o = (t = n).x64;
  c = o.Word;
  f = o.WordArray;
  s = t.algo;
  w = s.SHA512;
  H = s.SHA384 = w.extend({
    _doReset: function () {
      this._hash = new f.init([
        new c.init(3418070365, 3238371032),
        new c.init(1654270250, 914150663),
        new c.init(2438529370, 812702999),
        new c.init(355462360, 4144912697),
        new c.init(1731405415, 4290775857),
        new c.init(2394180231, 1750603025),
        new c.init(3675008525, 1694076839),
        new c.init(1203062813, 3204075428),
      ]);
    },
    _doFinalize: function () {
      var n = w._doFinalize.call(this);

      n.sigBytes -= 16;
      return n;
    },
  });
  t.SHA384 = w._createHelper(H);
  t.HmacSHA384 = w._createHmacHelper(H);
  return n.SHA384;
};

if ('object' == typeof exports) module.exports = exports = t(require('./663'), require('./664'), require('./672'));
else if ('function' == typeof define && define.amd) define(['./core', './x64-core', './sha512'], t);
else t(n.CryptoJS);

var t, i;
t = this;

i = function (t) {
  var i, n, o, s, h;
  n = (i = t).lib;
  o = n.Base;
  s = n.WordArray;
  (h = i.x64 = {}).Word = o.extend({
    init: function (t, i) {
      this.high = t;
      this.low = i;
    },
  });
  h.WordArray = o.extend({
    init: function (t, i) {
      t = this.words = t || [];
      this.sigBytes = undefined != i ? i : 8 * t.length;
    },
    toX32: function () {
      for (var t = this.words, i = t.length, n = [], o = 0; o < i; o++) {
        var h = t[o];
        n.push(h.high);
        n.push(h.low);
      }

      return s.create(n, this.sigBytes);
    },
    clone: function () {
      for (var t = o.clone.call(this), i = (t.words = this.words.slice(0)), n = i.length, s = 0; s < n; s++) i[s] = i[s].clone();

      return t;
    },
  });
  return t;
};

if ('object' == typeof exports) module.exports = exports = i(require('./663'));
else if ('function' == typeof define && define.amd) define(['./core'], i);
else i(t.CryptoJS);

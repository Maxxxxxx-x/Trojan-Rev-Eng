function n(n, t, o, u, c, s, f) {
  try {
    var v = n[s](f),
      p = v.value;
  } catch (n) {
    return void o(n);
  }

  if (v.done) t(p);
  else Promise.resolve(p).then(u, c);
}

module.exports = function (t) {
  return function () {
    var o = this,
      u = arguments;
    return new Promise(function (c, s) {
      var f = t.apply(o, u);

      function v(t) {
        n(f, c, s, v, p, 'next', t);
      }

      function p(t) {
        n(f, c, s, v, p, 'throw', t);
      }

      v(undefined);
    });
  };
};

module.exports.__esModule = true;
module.exports.default = module.exports;

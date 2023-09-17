module.exports = function (e, n, o, t, a, f, s, d) {
  if (!e) {
    var u;
    if (undefined === n) u = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
    else {
      var c = [o, t, a, f, s, d],
        l = 0;
      (u = new Error(
        n.replace(/%s/g, function () {
          return c[l++];
        })
      )).name = 'Invariant Violation';
    }
    throw ((u.framesToPop = 1), u);
  }
};

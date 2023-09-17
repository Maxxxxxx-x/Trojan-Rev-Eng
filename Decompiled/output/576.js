exports.__esModule = true;
exports.pureFinalPropsSelectorFactory = o;

exports.default = function (p, s) {
  var u = s.initMapStateToProps,
    P = s.initMapDispatchToProps,
    c = s.initMergeProps,
    l = module97.default(s, t),
    f = u(p, l),
    M = P(p, l),
    O = c(p, l);
  return o(f, M, O, p, l);
};

require('@babel/runtime/helpers/interopRequireDefault')(require('./577'));

var module97 = require('@babel/runtime/helpers/interopRequireDefault')(require('./97')),
  t = ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps'];

function o(n, t, o, p, s) {
  var u,
    P,
    c,
    l,
    f,
    M = s.areStatesEqual,
    O = s.areOwnPropsEqual,
    S = s.areStatePropsEqual,
    v = false;

  function w(s, v) {
    var w,
      T,
      _ = !O(v, P),
      q = !M(s, u, v, P);

    u = s;
    P = v;

    if (_ && q) {
      c = n(u, P);
      if (t.dependsOnOwnProps) l = t(p, P);
      f = o(c, l, P);
      return f;
    } else if (_) {
      if (n.dependsOnOwnProps) c = n(u, P);
      if (t.dependsOnOwnProps) l = t(p, P);
      f = o(c, l, P);
      return f;
    } else if (q) {
      w = n(u, P);
      T = !S(w, c);
      c = w;
      if (T) f = o(c, l, P);
      return f;
    } else return f;
  }

  return function (s, M) {
    if (v) return w(s, M);
    else {
      c = n((u = s), (P = M));
      l = t(p, P);
      f = o(c, l, P);
      v = true;
      return f;
    }
  };
}

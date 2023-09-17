var e = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
  },
  t = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  },
  o = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true,
  },
  p = {};

function y(t) {
  return require('./575').isMemo(t) ? o : p[t.$$typeof] || e;
}

p[require('./575').ForwardRef] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
};
p[require('./575').Memo] = o;
var n = Object.defineProperty,
  s = Object.getOwnPropertyNames,
  c = Object.getOwnPropertySymbols,
  i = Object.getOwnPropertyDescriptor,
  f = Object.getPrototypeOf,
  l = Object.prototype;

module.exports = function e(o, p, u) {
  if ('string' != typeof p) {
    if (l) {
      var O = f(p);
      if (O && O !== l) e(o, O, u);
    }

    var P = s(p);
    if (c) P = P.concat(c(p));

    for (var v = y(o), b = y(p), j = 0; j < P.length; ++j) {
      var T = P[j];

      if (!(t[T] || (u && u[T]) || (b && b[T]) || (v && v[T]))) {
        var $ = i(p, T);

        try {
          n(o, T, $);
        } catch (e) {}
      }
    }
  }

  return o;
};

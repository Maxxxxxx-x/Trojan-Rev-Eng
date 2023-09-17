function t(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

module.exports = function (o) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      t(Object(c), true).forEach(function (t) {
        require('./241')(o, t, c[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(c));
    else
      t(Object(c)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
      });
  }

  return o;
};

module.exports.__esModule = true;
module.exports.default = module.exports;

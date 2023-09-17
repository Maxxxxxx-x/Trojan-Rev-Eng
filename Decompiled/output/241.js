module.exports = function (t, n, o) {
  if ((n = require('./9')(n)) in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
};

module.exports.__esModule = true;
module.exports.default = module.exports;

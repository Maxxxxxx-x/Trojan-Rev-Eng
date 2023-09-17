module.exports = function (o, t) {
  if (t && ('object' === require('./11').default(t) || 'function' == typeof t)) return t;
  if (undefined !== t) throw new TypeError('Derived constructors may only return object or undefined');
  return require('./16')(o);
};

module.exports.__esModule = true;
module.exports.default = module.exports;

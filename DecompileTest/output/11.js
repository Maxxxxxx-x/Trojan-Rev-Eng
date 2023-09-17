function o(t) {
  '@babel/helpers - typeof';

  module.exports = o =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (o) {
          return typeof o;
        }
      : function (o) {
          return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
        };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
  return o(t);
}

module.exports = o;
module.exports.__esModule = true;
module.exports.default = module.exports;

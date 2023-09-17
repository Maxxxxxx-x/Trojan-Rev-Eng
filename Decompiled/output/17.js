function t(o) {
  module.exports = t = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
  return t(o);
}

module.exports = t;
module.exports.__esModule = true;
module.exports.default = module.exports;

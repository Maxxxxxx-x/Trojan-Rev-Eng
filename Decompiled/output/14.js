function t(o, s) {
  module.exports = t = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, o) {
        t.__proto__ = o;
        return t;
      };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
  return t(o, s);
}

module.exports = t;
module.exports.__esModule = true;
module.exports.default = module.exports;

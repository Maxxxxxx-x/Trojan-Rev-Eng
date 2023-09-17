function t() {
  module.exports = t = Object.assign
    ? Object.assign.bind()
    : function (t) {
        for (var o = 1; o < arguments.length; o++) {
          var s = arguments[o];

          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }

        return t;
      };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
  return t.apply(this, arguments);
}

module.exports = t;
module.exports.__esModule = true;
module.exports.default = module.exports;

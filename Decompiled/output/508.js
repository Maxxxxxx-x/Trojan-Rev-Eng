exports.default = function (n) {
  return n.reduce(function (n, u) {
    var o = module25.default(u, 2),
      f = o[0],
      c = o[1];
    if (n.hasOwnProperty(f)) throw new Error("A value for key '" + f + "' already exists in the object.");
    n[f] = c;
    return n;
  }, {});
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25'));

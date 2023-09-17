function t(o, p, s) {
  if (require('./56')()) {
    module.exports = t = Reflect.construct.bind();
    module.exports.__esModule = true;
    module.exports.default = module.exports;
  } else {
    module.exports = t = function (t, o, p) {
      var s = [null];
      s.push.apply(s, o);
      var n = new (Function.bind.apply(t, s))();
      if (p) require('./14')(n, p.prototype);
      return n;
    };

    module.exports.__esModule = true;
    module.exports.default = module.exports;
  }

  return t.apply(null, arguments);
}

module.exports = t;
module.exports.__esModule = true;
module.exports.default = module.exports;

exports.__esModule = true;

exports.default = function (n, t) {
  var u = {},
    o = function () {
      var o = n[f];
      if ('function' == typeof o)
        u[f] = function () {
          return t(o.apply(undefined, arguments));
        };
    };

  for (var f in n) o();

  return u;
};

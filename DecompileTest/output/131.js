var n = function (n) {
  var o = {};
  n.supportedCommands.forEach(function (module44) {
    o[module44] = function (o) {
      for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), f = 1; f < t; f++) u[f - 1] = arguments[f];

      require('./44').dispatchCommand(o, module44, u);
    };
  });
  return o;
};

exports.default = n;

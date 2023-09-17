exports.__esModule = true;

exports.takeEvery = function (t, o) {
  for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++) l[c - 2] = arguments[c];

  return require('./601').fork.apply(undefined, [require('./602').takeEveryHelper, t, o].concat(l));
};

exports.takeLatest = function (t, o) {
  for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++) l[c - 2] = arguments[c];

  return require('./601').fork.apply(undefined, [require('./602').takeLatestHelper, t, o].concat(l));
};

exports.throttle = function (t, o, n) {
  for (var l = arguments.length, c = Array(l > 3 ? l - 3 : 0), f = 3; f < l; f++) c[f - 3] = arguments[f];

  return require('./601').fork.apply(undefined, [require('./602').throttleHelper, t, o, n].concat(c));
};

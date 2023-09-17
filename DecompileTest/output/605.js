exports.__esModule = true;

exports.default = function (n, u) {
  for (var o = arguments.length, f = Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++) f[c - 2] = arguments[c];

  var module601 = {
      done: false,
      value: require('./601').take(n),
    },
    module601 = function (n) {
      return {
        done: false,
        value: require('./601').fork.apply(undefined, [u].concat(f, [n])),
      };
    },
    module601 = function (n) {
      return {
        done: false,
        value: require('./601').cancel(n),
      };
    },
    s = undefined,
    _ = undefined,
    k = function (n) {
      s = n;
      return s;
    },
    p = function (n) {
      _ = n;
      return _;
    };

  return module604.default(
    {
      q1: function () {
        return ['q2', module601, p];
      },
      q2: function () {
        return _ === require('./598').END ? [require('./604').qEnd] : s ? ['q3', module601(s)] : ['q1', module601(_), k];
      },
      q3: function () {
        return ['q1', module601(_), k];
      },
    },
    'q1',
    'takeLatest(' + require('./604').safeName(n) + ', ' + u.name + ')'
  );
};

var n,
  module604 =
    (n = require('./604')) && n.__esModule
      ? n
      : {
          default: n,
        };

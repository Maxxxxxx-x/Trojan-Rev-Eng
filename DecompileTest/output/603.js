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
    q = undefined,
    _ = function (n) {
      q = n;
      return q;
    };

  return module604.default(
    {
      q1: function () {
        return ['q2', module601, _];
      },
      q2: function () {
        return q === require('./598').END ? [require('./604').qEnd] : ['q1', module601(q)];
      },
    },
    'q1',
    'takeEvery(' + require('./604').safeName(n) + ', ' + u.name + ')'
  );
};

var n,
  module604 =
    (n = require('./604')) && n.__esModule
      ? n
      : {
          default: n,
        };

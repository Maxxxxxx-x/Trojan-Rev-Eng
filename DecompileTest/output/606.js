exports.__esModule = true;

exports.default = function (n, u, o) {
  for (var f = arguments.length, l = Array(f > 3 ? f - 3 : 0), c = 3; c < f; c++) l[c - 3] = arguments[c];

  var q = undefined,
    v = undefined,
    module599 = {
      done: false,
      value: require('./601').actionChannel(u, require('./599').buffers.sliding(1)),
    },
    module597 = function () {
      return {
        done: false,
        value: require('./601').take(v),
      };
    },
    module597 = function (n) {
      return {
        done: false,
        value: require('./601').fork.apply(undefined, [o].concat(l, [n])),
      };
    },
    module597 = {
      done: false,
      value: require('./601').call(require('./597').delay, n),
    },
    k = function (n) {
      q = n;
      return q;
    },
    p = function (n) {
      v = n;
      return v;
    };

  return module604.default(
    {
      q1: function () {
        return ['q2', module599, p];
      },
      q2: function () {
        return ['q3', module597(), k];
      },
      q3: function () {
        return q === require('./598').END ? [require('./604').qEnd] : ['q4', module597(q)];
      },
      q4: function () {
        return ['q2', module597];
      },
    },
    'q1',
    'throttle(' + require('./604').safeName(u) + ', ' + o.name + ')'
  );
};

var n,
  module604 =
    (n = require('./604')) && n.__esModule
      ? n
      : {
          default: n,
        };

exports.__esModule = true;

exports.safeName = function (n) {
  return require('./597').is.channel(n)
    ? 'channel'
    : Array.isArray(n)
    ? String(
        n.map(function (n) {
          return String(n);
        })
      )
    : String(n);
};

exports.default = function (u, o) {
  var f = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'iterator',
    c = undefined,
    l = o;

  function v(o, f) {
    if (l === t) return n;
    if (f) throw ((l = t), f);
    if (c) c(o);
    var v = u[l](),
      s = v[0],
      h = v[1],
      _ = v[2];
    c = _;
    return (l = s) === t ? n : h;
  }

  return require('./597').makeIterator(
    v,
    function (n) {
      return v(null, n);
    },
    f,
    true
  );
};

var n = {
    done: true,
    value: undefined,
  },
  t = (exports.qEnd = {});

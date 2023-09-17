exports.__esModule = true;
var n = (exports.BUFFER_OVERFLOW = "Channel's Buffer overflow!"),
  t = 1,
  u = 3,
  o = 4,
  module597 = {
    isEmpty: require('./597').kTrue,
    put: require('./597').noop,
    take: require('./597').noop,
  };

function c() {
  var f = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 10,
    c = arguments[1],
    s = new Array(f),
    l = 0,
    p = 0,
    h = 0,
    v = function (n) {
      s[p] = n;
      p = (p + 1) % f;
      l++;
    },
    E = function () {
      if (0 != l) {
        var n = s[h];
        s[h] = null;
        l--;
        h = (h + 1) % f;
        return n;
      }
    },
    F = function () {
      for (var n = []; l; ) n.push(E());

      return n;
    };

  return {
    isEmpty: function () {
      return 0 == l;
    },
    put: function (E) {
      if (l < f) v(E);
      else {
        var _ = undefined;

        switch (c) {
          case t:
            throw new Error(n);

          case u:
            s[p] = E;
            h = p = (p + 1) % f;
            break;

          case o:
            _ = 2 * f;
            s = F();
            l = s.length;
            p = s.length;
            h = 0;
            s.length = _;
            f = _;
            v(E);
        }
      }
    },
    take: E,
    flush: F,
  };
}

exports.buffers = {
  none: function () {
    return module597;
  },
  fixed: function (n) {
    return c(n, t);
  },
  dropping: function (n) {
    return c(n, 2);
  },
  sliding: function (n) {
    return c(n, u);
  },
  expanding: function (n) {
    return c(n, o);
  },
};

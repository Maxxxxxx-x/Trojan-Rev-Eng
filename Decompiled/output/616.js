var t,
  module617 =
    (t = require('./617')) && 'object' == typeof t && 'default' in t
      ? t
      : {
          default: t,
        };

function e(t) {
  return 'Minified Redux error #' + t + '; visit https://redux.js.org/Errors?code=' + t + ' for the full message or use the non-minified dev environment for full errors. ';
}

var o = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
  i = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  f = {
    INIT: '@@redux/INIT' + i(),
    REPLACE: '@@redux/REPLACE' + i(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + i();
    },
  };

function u(t) {
  if ('object' != typeof t || null === t) return false;

  for (var n = t; null !== Object.getPrototypeOf(n); ) n = Object.getPrototypeOf(n);

  return Object.getPrototypeOf(t) === n;
}

function c(t, n, i) {
  var a;
  if (('function' == typeof n && 'function' == typeof i) || ('function' == typeof i && 'function' == typeof arguments[3])) throw new Error(e(0));

  if (('function' == typeof n && undefined === i && ((i = n), (n = undefined)), undefined !== i)) {
    if ('function' != typeof i) throw new Error(e(1));
    return i(c)(t, n);
  }

  if ('function' != typeof t) throw new Error(e(2));
  var p = t,
    l = n,
    y = [],
    v = y,
    h = false;

  function s() {
    if (v === y) v = y.slice();
  }

  function w() {
    if (h) throw new Error(e(3));
    return l;
  }

  function E(t) {
    if ('function' != typeof t) throw new Error(e(4));
    if (h) throw new Error(e(5));
    var n = true;
    s();
    v.push(t);
    return function () {
      if (n) {
        if (h) throw new Error(e(6));
        n = false;
        s();
        var o = v.indexOf(t);
        v.splice(o, 1);
        y = null;
      }
    };
  }

  function b(t) {
    if (!u(t)) throw new Error(e(7));
    if (undefined === t.type) throw new Error(e(8));
    if (h) throw new Error(e(9));

    try {
      h = true;
      l = p(l, t);
    } finally {
      h = false;
    }

    for (var n = (y = v), o = 0; o < n.length; o++) {
      n[o]();
    }

    return t;
  }

  b({
    type: f.INIT,
  });

  (a = {
    dispatch: b,
    subscribe: E,
    getState: w,
    replaceReducer: function (t) {
      if ('function' != typeof t) throw new Error(e(10));
      p = t;
      b({
        type: f.REPLACE,
      });
    },
  })[o] = function () {
    var t,
      n = E;

    (t = {
      subscribe: function (t) {
        if ('object' != typeof t || null === t) throw new Error(e(11));

        function o() {
          if (t.next) t.next(w());
        }

        o();
        return {
          unsubscribe: n(o),
        };
      },
    })[o] = function () {
      return this;
    };

    return t;
  };

  return a;
}

var a = c;

function p(t) {
  Object.keys(t).forEach(function (n) {
    var o = t[n];
    if (
      undefined ===
      o(undefined, {
        type: f.INIT,
      })
    )
      throw new Error(e(12));
    if (
      undefined ===
      o(undefined, {
        type: f.PROBE_UNKNOWN_ACTION(),
      })
    )
      throw new Error(e(13));
  });
}

function l(t, n) {
  return function () {
    return n(t.apply(this, arguments));
  };
}

function y() {
  return 0 === args.length
    ? function (t) {
        return t;
      }
    : 1 === args.length
    ? args[0]
    : args.reduce(function (t, n) {
        return function () {
          return t(n.apply(undefined, arguments));
        };
      });
}

exports.__DO_NOT_USE__ActionTypes = f;

exports.applyMiddleware = function (...args) {
  return function (t) {
    return function () {
      var i = t.apply(undefined, arguments),
        f = function () {
          throw new Error(e(15));
        },
        u = {
          getState: i.getState,
          dispatch: function () {
            return f.apply(undefined, arguments);
          },
        },
        c = args.map(function (t) {
          return t(u);
        });

      f = y.apply(undefined, c)(i.dispatch);
      return module617.default(
        module617.default({}, i),
        {},
        {
          dispatch: f,
        }
      );
    };
  };
};

exports.bindActionCreators = function (t, n) {
  if ('function' == typeof t) return l(t, n);
  if ('object' != typeof t || null === t) throw new Error(e(16));
  var o = {};

  for (var i in t) {
    var f = t[i];
    if ('function' == typeof f) o[i] = l(f, n);
  }

  return o;
};

exports.combineReducers = function (t) {
  for (var n = Object.keys(t), o = {}, i = 0; i < n.length; i++) {
    var f = n[i];
    if ('function' == typeof t[f]) o[f] = t[f];
  }

  var u,
    c = Object.keys(o);

  try {
    p(o);
  } catch (t) {
    u = t;
  }

  return function (t, n) {
    if ((undefined === t && (t = {}), u)) throw u;

    for (var i = false, f = {}, a = 0; a < c.length; a++) {
      var p = c[a],
        l = o[p],
        y = t[p],
        v = l(y, n);
      if (undefined === v) throw (n && n.type, new Error(e(14)));
      f[p] = v;
      i = i || v !== y;
    }

    return (i = i || c.length !== Object.keys(t).length) ? f : t;
  };
};

exports.compose = y;
exports.createStore = c;
exports.legacy_createStore = a;

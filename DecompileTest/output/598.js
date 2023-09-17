exports.__esModule = true;

var n =
  Object.assign ||
  function (n) {
    for (var t = 1; t < arguments.length; t++) {
      var u = arguments[t];

      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (n[c] = u[c]);
    }

    return n;
  };

exports.emitter = function () {
  var n = [];
  return {
    subscribe: function (t) {
      n.push(t);
      return function () {
        return require('./597').remove(n, t);
      };
    },
    emit: function (t) {
      for (var u = n.slice(), c = 0, i = u.length; c < i; c++) u[c](t);
    },
  };
};

exports.channel = a;
exports.eventChannel = o;

exports.stdChannel = function (t) {
  var module600 = o(function (n) {
    return t(function (t) {
      if (t[require('./597').SAGA_ACTION]) n(t);
      else
        require('./600').asap(function () {
          return n(t);
        });
    });
  });
  return n({}, module600, {
    take: function (n, t) {
      if (arguments.length > 1) {
        require('./597').check(t, require('./597').is.func, "channel.take's matcher argument must be a function");

        n[require('./597').MATCH] = t;
      }

      module600.take(n);
    },
  });
};

var t = (exports.END = {
    type: '@@redux-saga/CHANNEL_END',
  }),
  u = (exports.isEnd = function (n) {
    return n && '@@redux-saga/CHANNEL_END' === n.type;
  });

var c = (exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function'),
  i = (exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action');

function a() {
  var module599 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : require('./599').buffers.fixed(),
    u = false,
    a = [];

  function o() {
    if (u && a.length) throw require('./597').internalErr('Cannot have a closed channel with pending takers');
    if (a.length && !module599.isEmpty()) throw require('./597').internalErr('Cannot have pending takers with non empty buffer');
  }

  require('./597').check(module599, require('./597').is.buffer, c);

  return {
    take: function (c) {
      o();

      require('./597').check(c, require('./597').is.func, "channel.take's callback must be a function");

      if (u && module599.isEmpty()) c(t);
      else if (module599.isEmpty()) {
        a.push(c);

        c.cancel = function () {
          return require('./597').remove(a, c);
        };
      } else c(module599.take());
    },
    put: function (t) {
      if ((o(), require('./597').check(t, require('./597').is.notUndef, i), !u)) {
        if (!a.length) return module599.put(t);

        for (var c = 0; c < a.length; c++) {
          var f = a[c];

          if (!f[require('./597').MATCH] || f[require('./597').MATCH](t)) {
            a.splice(c, 1);
            return f(t);
          }
        }
      }
    },
    flush: function (c) {
      o();

      require('./597').check(c, require('./597').is.func, "channel.flush' callback must be a function");

      if (u && module599.isEmpty()) c(t);
      else c(module599.flush());
    },
    close: function () {
      if ((o(), !u && ((u = true), a.length))) {
        var n = a;
        a = [];

        for (var c = 0, i = n.length; c < i; c++) n[c](t);
      }
    },

    get __takers__() {
      return a;
    },

    get __closed__() {
      return u;
    },
  };
}

function o(n) {
  var module599 = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : require('./599').buffers.none(),
    c = arguments[2];
  if (arguments.length > 2) require('./597').check(c, require('./597').is.func, 'Invalid match function passed to eventChannel');

  var i = a(module599),
    o = function () {
      if (!i.__closed__) {
        if (f) f();
        i.close();
      }
    },
    f = n(function (n) {
      if (u(n)) o();
      else if (!(c && !c(n))) i.put(n);
    });

  if ((i.__closed__ && f(), !require('./597').is.func(f))) throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  return {
    take: i.take,
    flush: i.flush,
    close: o,
  };
}

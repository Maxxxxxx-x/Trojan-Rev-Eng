exports.__esModule = true;
exports.take = U;
exports.put = N;
exports.all = x;

exports.race = function (n) {
  return T(o, n);
};

exports.call = function (n) {
  for (var t = arguments.length, c = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) c[u - 1] = arguments[u];

  return T(f, O('call', n, c));
};

exports.apply = function (n, t) {
  var c = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [];
  return T(
    f,
    O(
      'apply',
      {
        context: n,
        fn: t,
      },
      c
    )
  );
};

exports.cps = function (n) {
  for (var t = arguments.length, c = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) c[u - 1] = arguments[u];

  return T(s, O('cps', n, c));
};

exports.fork = j;

exports.spawn = function (n) {
  for (var t = arguments.length, c = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) c[u - 1] = arguments[u];

  return module597(j.apply(undefined, [n].concat(c)));
};

exports.join = function n(...args) {
  if (args.length > 1)
    return x(
      args.map(function (t) {
        return n(t);
      })
    );
  var o = args[0];

  require('./597').check(o, require('./597').is.notUndef, 'join(task): argument task is undefined');

  require('./597').check(o, require('./597').is.task, 'join(task): argument ' + o + ' is not a valid Task object ' + b);

  return T(h, o);
};

exports.cancel = function n(...args) {
  if (args.length > 1)
    return x(
      args.map(function (t) {
        return n(t);
      })
    );
  var o = args[0];

  if (1 === args.length) {
    require('./597').check(o, require('./597').is.notUndef, 'cancel(task): argument task is undefined');

    require('./597').check(o, require('./597').is.task, 'cancel(task): argument ' + o + ' is not a valid Task object ' + b);
  }

  return T(k, o || require('./597').SELF_CANCELLATION);
};

exports.select = function (n) {
  for (var t = arguments.length, c = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) c[u - 1] = arguments[u];

  if (0 === arguments.length) n = require('./597').ident;
  else {
    require('./597').check(n, require('./597').is.notUndef, 'select(selector,[...]): argument selector is undefined');

    require('./597').check(n, require('./597').is.func, 'select(selector,[...]): argument ' + n + ' is not a function');
  }
  return T(p, {
    selector: n,
    args: c,
  });
};

exports.actionChannel = function (n, t) {
  require('./597').check(n, require('./597').is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');

  if (arguments.length > 1) {
    require('./597').check(t, require('./597').is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');

    require('./597').check(t, require('./597').is.buffer, 'actionChannel(pattern, buffer): argument ' + t + ' is not a valid buffer');
  }

  return T(v, {
    pattern: n,
    buffer: t,
  });
};

exports.cancelled = function () {
  return T(C, {});
};

exports.flush = function (n) {
  require('./597').check(n, require('./597').is.channel, 'flush(channel): argument ' + n + ' is not valid channel');

  return T(y, n);
};

exports.getContext = function (n) {
  require('./597').check(n, require('./597').is.string, 'getContext(prop): argument ' + n + ' is not a string');

  return T(A, n);
};

exports.setContext = function (n) {
  require('./597').check(n, require('./597').is.object, require('./597').createSetContextWarning(null, n));

  return T(E, n);
};

var module597 = require('./597').sym('IO'),
  t = 'TAKE',
  c = 'PUT',
  u = 'ALL',
  o = 'RACE',
  f = 'CALL',
  s = 'CPS',
  l = 'FORK',
  h = 'JOIN',
  k = 'CANCEL',
  p = 'SELECT',
  v = 'ACTION_CHANNEL',
  C = 'CANCELLED',
  y = 'FLUSH',
  A = 'GET_CONTEXT',
  E = 'SET_CONTEXT',
  b = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)',
  T = function (t, c) {
    var u;
    (u = {})[module597] = true;
    u[t] = c;
    return u;
  },
  module597 = (exports.detach = function (n) {
    require('./597').check(I.fork(n), require('./597').is.object, 'detach(eff): argument must be a fork effect');

    n[l].detached = true;
    return n;
  });

function U() {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '*';
  if (
    (arguments.length && require('./597').check(arguments[0], require('./597').is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined'),
    require('./597').is.pattern(n))
  )
    return T(t, {
      pattern: n,
    });
  if (require('./597').is.channel(n))
    return T(t, {
      channel: n,
    });
  throw new Error('take(patternOrChannel): argument ' + String(n) + ' is not valid channel or a valid pattern');
}

U.maybe = function () {
  var n = U.apply(undefined, arguments);
  n[t].maybe = true;
  return n;
};

exports.takem = require('./597').deprecate(U.maybe, require('./597').updateIncentive('takem', 'take.maybe'));

function N(n, t) {
  if (arguments.length > 1) {
    require('./597').check(n, require('./597').is.notUndef, 'put(channel, action): argument channel is undefined');

    require('./597').check(n, require('./597').is.channel, 'put(channel, action): argument ' + n + ' is not a valid channel');

    require('./597').check(t, require('./597').is.notUndef, 'put(channel, action): argument action is undefined');
  } else {
    require('./597').check(n, require('./597').is.notUndef, 'put(action): argument action is undefined');

    t = n;
    n = null;
  }

  return T(c, {
    channel: n,
    action: t,
  });
}

function x(n) {
  return T(u, n);
}

function O(n, t, c) {
  require('./597').check(t, require('./597').is.notUndef, n + ': argument fn is undefined');

  var u = null;

  if (require('./597').is.array(t)) {
    var o = t;
    u = o[0];
    t = o[1];
  } else if (t.fn) {
    var f = t;
    u = f.context;
    t = f.fn;
  }

  if (u && require('./597').is.string(t) && require('./597').is.func(u[t])) t = u[t];

  require('./597').check(t, require('./597').is.func, n + ': argument ' + t + ' is not a function');

  return {
    context: u,
    fn: t,
    args: c,
  };
}

function j(n) {
  for (var t = arguments.length, c = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) c[u - 1] = arguments[u];

  return T(l, O('fork', n, c));
}

N.resolve = function () {
  var n = N.apply(undefined, arguments);
  n[c].resolve = true;
  return n;
};

N.sync = require('./597').deprecate(N.resolve, require('./597').updateIncentive('put.sync', 'put.resolve'));

var _ = function (t) {
    return function (c) {
      return c && c[module597] && c[t];
    };
  },
  I = (exports.asEffect = {
    take: _(t),
    put: _(c),
    all: _(u),
    race: _(o),
    call: _(f),
    cps: _(s),
    fork: _(l),
    join: _(h),
    cancel: _(k),
    select: _(p),
    actionChannel: _(v),
    cancelled: _(C),
    flush: _(y),
    getContext: _(A),
    setContext: _(E),
  });

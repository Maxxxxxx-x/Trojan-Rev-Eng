exports.__esModule = true;

var n =
    Object.assign ||
    function (n) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];

        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
      }

      return n;
    },
  r =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (n) {
          return typeof n;
        }
      : function (n) {
          return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        };

exports.check = function (n, r, t) {
  if (!r(n)) throw (b('error', 'uncaught at check', t), new Error(t));
};

exports.hasOwn = s;

exports.remove = function (n, r) {
  var t = n.indexOf(r);
  if (t >= 0) n.splice(t, 1);
};

exports.deferred = p;

exports.arrayOfDeffered = function (n) {
  for (var r = [], t = 0; t < n; t++) r.push(p());

  return r;
};

exports.delay = function (n) {
  var r = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
    t = undefined,
    e = new Promise(function (e) {
      t = setTimeout(function () {
        return e(r);
      }, n);
    });

  e[u] = function () {
    return clearTimeout(t);
  };

  return e;
};

exports.createMockTask = function () {
  var n,
    r = true,
    t = undefined,
    o = undefined;
  (n = {})[e] = true;

  n.isRunning = function () {
    return r;
  };

  n.result = function () {
    return t;
  };

  n.error = function () {
    return o;
  };

  n.setRunning = function (n) {
    r = n;
    return r;
  };

  n.setResult = function (n) {
    t = n;
    return t;
  };

  n.setError = function (n) {
    o = n;
    return o;
  };

  return n;
};

exports.autoInc = y;

exports.makeIterator = function (n) {
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : v,
    t = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '',
    e = arguments[3],
    u = {
      name: t,
      next: n,
      throw: r,
      return: h,
    };
  if (e) u[o] = true;
  if ('undefined' != typeof Symbol)
    u[Symbol.iterator] = function () {
      return u;
    };
  return u;
};

exports.log = b;

exports.deprecate = function (n, r) {
  return function () {
    return n.apply(undefined, arguments);
  };
};

exports.MATCH = t('MATCH');
exports.SELF_CANCELLATION = t('SELF_CANCELLATION');

var t = (exports.sym = function (n) {
    return '@@redux-saga/' + n;
  }),
  e = (exports.TASK = t('TASK')),
  o = (exports.HELPER = t('HELPER')),
  u = (exports.CANCEL = t('CANCEL_PROMISE')),
  i = (exports.SAGA_ACTION = t('SAGA_ACTION')),
  c = (exports.konst = function (n) {
    return function () {
      return n;
    };
  });

exports.kTrue = c(true);
exports.kFalse = c(false);

exports.noop = function () {};

exports.ident = function (n) {
  return n;
};

var f = Object.prototype.hasOwnProperty;

function s(n, r) {
  return l.notUndef(n) && f.call(n, r);
}

var l = (exports.is = {
  undef: function (n) {
    return null === n || undefined === n;
  },
  notUndef: function (n) {
    return null !== n && undefined !== n;
  },
  func: function (n) {
    return 'function' == typeof n;
  },
  number: function (n) {
    return 'number' == typeof n;
  },
  string: function (n) {
    return 'string' == typeof n;
  },
  array: Array.isArray,
  object: function (n) {
    return n && !l.array(n) && 'object' === (undefined === n ? 'undefined' : r(n));
  },
  promise: function (n) {
    return n && l.func(n.then);
  },
  iterator: function (n) {
    return n && l.func(n.next) && l.func(n.throw);
  },
  iterable: function (n) {
    return n && l.func(Symbol) ? l.func(n[Symbol.iterator]) : l.array(n);
  },
  task: function (n) {
    return n && n[e];
  },
  observable: function (n) {
    return n && l.func(n.subscribe);
  },
  buffer: function (n) {
    return n && l.func(n.isEmpty) && l.func(n.take) && l.func(n.put);
  },
  pattern: function (n) {
    return n && (l.string(n) || 'symbol' === (undefined === n ? 'undefined' : r(n)) || l.func(n) || l.array(n));
  },
  channel: function (n) {
    return n && l.func(n.take) && l.func(n.close);
  },
  helper: function (n) {
    return n && n[o];
  },
  stringableFunc: function (n) {
    return l.func(n) && s(n, 'toString');
  },
});
exports.object = {
  assign: function (n, r) {
    for (var t in r) s(r, t) && (n[t] = r[t]);
  },
};
exports.array = {
  from: function (n) {
    var r = Array(n.length);

    for (var t in n) s(n, t) && (r[t] = n[t]);

    return r;
  },
};

function p() {
  var r = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    t = n({}, r),
    e = new Promise(function (n, r) {
      t.resolve = n;
      t.reject = r;
    });
  t.promise = e;
  return t;
}

function y() {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0;
  return function () {
    return ++n;
  };
}

exports.uid = y();

var v = function (n) {
    throw n;
  },
  h = function (n) {
    return {
      value: n,
      done: true,
    };
  };

function b(n, r) {
  var t = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '';
  if ('undefined' == typeof window) console.log('redux-saga ' + n + ': ' + r + '\n' + ((t && t.stack) || t));
  else console[n](r, t);
}

exports.updateIncentive = function (n, r) {
  return n + ' has been deprecated in favor of ' + r + ', please update your code';
};

exports.internalErr = function (n) {
  return new Error(
    "\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " +
      n +
      '\n'
  );
};

exports.createSetContextWarning = function (n, r) {
  return (n ? n + '.' : '') + 'setContext(props): argument ' + r + ' is not a plain object';
};

exports.wrapSagaDispatch = function (n) {
  return function (r) {
    return n(
      Object.defineProperty(r, i, {
        value: true,
      })
    );
  };
};

exports.cloneableGenerator = function n(r) {
  return function (...args) {
    var u = [],
      i = r.apply(undefined, args);
    return {
      next: function (n) {
        u.push(n);
        return i.next(n);
      },
      clone: function () {
        var t = n(r).apply(undefined, args);
        u.forEach(function (n) {
          return t.next(n);
        });
        return t;
      },
      return: function (n) {
        return i.return(n);
      },
      throw: function (n) {
        return i.throw(n);
      },
    };
  };
};

exports.__esModule = true;

var n =
    Object.assign ||
    function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var c = arguments[t];

        for (var o in c) Object.prototype.hasOwnProperty.call(c, o) && (n[o] = c[o]);
      }

      return n;
    },
  t =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (n) {
          return typeof n;
        }
      : function (n) {
          return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
        };

function c(n, t) {
  for (var c in t) {
    var o = t[c];
    o.configurable = o.enumerable = true;
    if ('value' in o) o.writable = true;
    Object.defineProperty(n, c, o);
  }

  return n;
}

exports.default = function t(f) {
  var module597 =
    arguments.length > 1 && undefined !== arguments[1]
      ? arguments[1]
      : function () {
          return require('./597').noop;
        };
  var module597 = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : require('./597').noop;
  var module597 = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : require('./597').noop;

  var _ = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : {};

  var b = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : {};
  var C = arguments.length > 6 && undefined !== arguments[6] ? arguments[6] : 0;
  var R = arguments.length > 7 && undefined !== arguments[7] ? arguments[7] : 'anonymous';
  var k = arguments[8];

  require('./597').check(f, require('./597').is.iterator, o);

  var module597 = require('./597').deprecate(V, require('./597').updateIncentive('[...effects]', 'all([...effects])'));

  var j = b.sagaMonitor,
    N = b.logger,
    S = b.onError;

  var module597 = N || require('./597').log;

  var O = function (n) {
    var t = n.sagaStack;
    if (!t && n.stack) t = -1 !== n.stack.split('\n')[0].indexOf(n.message) ? n.stack : 'Error: ' + n.message + '\n' + n.stack;
    module597('error', 'uncaught at ' + R, t || n.message || n);
  };

  var module598 = require('./598').stdChannel(module597);

  var L = Object.create(_);
  D.cancel = require('./597').noop;

  var module597 = (function (n, t, o, i) {
    var u, f;
    o._deferredEnd = null;
    (u = {})[require('./597').TASK] = true;
    u.id = n;
    u.name = t;
    ('done');
    (f = {}).done = f.done || {};

    f.done.get = function () {
      if (o._deferredEnd) return o._deferredEnd.promise;

      var module597 = require('./597').deferred();

      o._deferredEnd = module597;
      if (!o._isRunning) o._error ? module597.reject(o._error) : module597.resolve(o._result);
      return module597.promise;
    };

    u.cont = i;
    u.joiners = [];
    u.cancel = M;

    u.isRunning = function () {
      return o._isRunning;
    };

    u.isCancelled = function () {
      return o._isCancelled;
    };

    u.isAborted = function () {
      return o._isAborted;
    };

    u.result = function () {
      return o._result;
    };

    u.error = function () {
      return o._error;
    };

    u.setContext = function (n) {
      require('./597').check(n, require('./597').is.object, require('./597').createSetContextWarning('task', n));

      require('./597').object.assign(L, n);
    };

    c(u, f);
    return u;
  })(C, R, f, k);

  var I = {
    name: R,
    cancel: function () {
      if (I.isRunning && !I.isCancelled) {
        I.isCancelled = true;
        D(u);
      }
    },
    isRunning: true,
  };
  var K = l(R, I, H);

  function M() {
    if (f._isRunning && !f._isCancelled) {
      f._isCancelled = true;
      K.cancelAll();
      H(u);
    }
  }

  if (k) k.cancel = M;
  f._isRunning = true;
  D();
  return module597;

  function D(n, t) {
    if (!I.isRunning) throw new Error('Trying to resume an already finished generator');

    try {
      var c = undefined;
      if (t) c = f.throw(n);
      else if (n === u) {
        I.isCancelled = true;
        D.cancel();
        c = require('./597').is.func(f.return)
          ? f.return(u)
          : {
              done: true,
              value: u,
            };
      } else
        c =
          n === i
            ? require('./597').is.func(f.return)
              ? f.return()
              : {
                  done: true,
                }
            : f.next(n);

      if (c.done) {
        I.isMainRunning = false;
        if (I.cont) I.cont(c.value);
      } else P(c.value, C, '', D);
    } catch (n) {
      if (I.isCancelled) O(n);
      I.isMainRunning = false;
      I.cont(n, true);
    }
  }

  function H(n, t) {
    f._isRunning = false;
    module598.close();

    if (t) {
      if (n instanceof Error)
        Object.defineProperty(n, 'sagaStack', {
          value: 'at ' + R + ' \n ' + (n.sagaStack || n.stack),
          configurable: true,
        });
      if (!module597.cont) n instanceof Error && S ? S(n) : O(n);
      f._error = n;
      f._isAborted = true;
      if (f._deferredEnd) f._deferredEnd.reject(n);
    } else {
      f._result = n;
      if (f._deferredEnd) f._deferredEnd.resolve(n);
    }

    if (module597.cont) module597.cont(n, t);
    module597.joiners.forEach(function (c) {
      return c.cb(n, t);
    });
    module597.joiners = null;
  }

  function P(n, t) {
    var c = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '',
      o = arguments[3],
      module597 = require('./597').uid();

    if (j)
      j.effectTriggered({
        effectId: module597,
        parentEffectId: t,
        label: c,
        effect: n,
      });
    var u = undefined;

    function f(n, t) {
      if (!u) {
        u = true;
        o.cancel = require('./597').noop;
        if (j) t ? j.effectRejected(module597, n) : j.effectResolved(module597, n);
        o(n, t);
      }
    }

    f.cancel = require('./597').noop;

    o.cancel = function () {
      if (!u) {
        u = true;

        try {
          f.cancel();
        } catch (n) {
          O(n);
        }

        f.cancel = require('./597').noop;
        if (j) j.effectCancelled(module597);
      }
    };

    var s = undefined;
    return require('./597').is.promise(n)
      ? F(n, f)
      : require('./597').is.helper(n)
      ? J(p(n), module597, f)
      : require('./597').is.iterator(n)
      ? W(n, module597, R, f)
      : require('./597').is.array(n)
      ? module597(n, module597, f)
      : (s = require('./601').asEffect.take(n))
      ? q(s, f)
      : (s = require('./601').asEffect.put(n))
      ? z(s, f)
      : (s = require('./601').asEffect.all(n))
      ? V(s, module597, f)
      : (s = require('./601').asEffect.race(n))
      ? X(s, module597, f)
      : (s = require('./601').asEffect.call(n))
      ? B(s, module597, f)
      : (s = require('./601').asEffect.cps(n))
      ? G(s, f)
      : (s = require('./601').asEffect.fork(n))
      ? J(s, module597, f)
      : (s = require('./601').asEffect.join(n))
      ? Q(s, f)
      : (s = require('./601').asEffect.cancel(n))
      ? U(s, f)
      : (s = require('./601').asEffect.select(n))
      ? Y(s, f)
      : (s = require('./601').asEffect.actionChannel(n))
      ? Z(s, f)
      : (s = require('./601').asEffect.flush(n))
      ? nn(s, f)
      : (s = require('./601').asEffect.cancelled(n))
      ? $(s, f)
      : (s = require('./601').asEffect.getContext(n))
      ? en(s, f)
      : (s = require('./601').asEffect.setContext(n))
      ? rn(s, f)
      : f(n);
  }

  function F(n, t) {
    var module597 = n[require('./597').CANCEL];

    if (require('./597').is.func(module597)) t.cancel = module597;
    else if (require('./597').is.func(n.abort))
      t.cancel = function () {
        return n.abort();
      };
    n.then(t, function (n) {
      return t(n, true);
    });
  }

  function W(n, c, o, i) {
    t(n, module597, module597, module597, L, b, c, o, i);
  }

  function q(n, t) {
    var c = n.channel,
      o = n.pattern,
      u = n.maybe;
    c = c || module598;

    var module598 = function (n) {
      return n instanceof Error ? t(n, true) : require('./598').isEnd(n) && !u ? t(i) : t(n);
    };

    try {
      c.take(module598, s(o));
    } catch (n) {
      return t(n, true);
    }

    t.cancel = module598.cancel;
  }

  function z(n, t) {
    var c = n.channel,
      o = n.action,
      i = n.resolve;

    require('./600').asap(function () {
      var n = undefined;

      try {
        n = (c ? c.put : module597)(o);
      } catch (n) {
        if (c || i) return t(n, true);
        O(n);
      }

      if (!i || !require('./597').is.promise(n)) return t(n);
      F(n, t);
    });
  }

  function B(n, t, c) {
    var o = n.context,
      i = n.fn,
      u = n.args,
      f = undefined;

    try {
      f = i.apply(o, u);
    } catch (n) {
      return c(n, true);
    }

    return require('./597').is.promise(f) ? F(f, c) : require('./597').is.iterator(f) ? W(f, t, i.name, c) : c(f);
  }

  function G(n, t) {
    var c = n.context,
      o = n.fn,
      i = n.args;

    try {
      var module597 = function (n, c) {
        return require('./597').is.undef(n) ? t(c) : t(n, true);
      };

      o.apply(c, i.concat(module597));
      if (module597.cancel)
        t.cancel = function () {
          return module597.cancel();
        };
    } catch (n) {
      return t(n, true);
    }
  }

  function J(n, c, o) {
    var i = n.context,
      u = n.fn,
      f = n.args,
      s = n.detached,
      l = v({
        context: i,
        fn: u,
        args: f,
      });

    try {
      require('./600').suspend();

      var module597 = t(l, module597, module597, module597, L, b, c, u.name, s ? null : require('./597').noop);
      if (s) o(module597);
      else if (l._isRunning) {
        K.addTask(module597);
        o(module597);
      } else if (l._error) K.abort(l._error);
      else o(module597);
    } finally {
      require('./600').flush();
    }
  }

  function Q(n, t) {
    if (n.isRunning()) {
      var c = {
        task: module597,
        cb: t,
      };

      t.cancel = function () {
        return require('./597').remove(n.joiners, c);
      };

      n.joiners.push(c);
    } else n.isAborted() ? t(n.error(), true) : t(n.result());
  }

  function U(n, t) {
    if (n === require('./597').SELF_CANCELLATION) n = module597;
    if (n.isRunning()) n.cancel();
    t();
  }

  function V(t, c, o) {
    var f = Object.keys(t);
    if (!f.length) return o(require('./597').is.array(t) ? [] : {});
    var s = 0,
      l = undefined,
      v = {},
      p = {};

    function E() {
      if (s === f.length) {
        l = true;
        o(
          require('./597').is.array(t)
            ? require('./597').array.from(
                n({}, v, {
                  length: f.length,
                })
              )
            : v
        );
      }
    }

    f.forEach(function (n) {
      var t = function (module598, c) {
        if (!l) c || require('./598').isEnd(module598) || module598 === i || module598 === u ? (o.cancel(), o(module598, c)) : ((v[n] = module598), s++, E());
      };

      t.cancel = require('./597').noop;
      p[n] = t;
    });

    o.cancel = function () {
      if (!l) {
        l = true;
        f.forEach(function (n) {
          return p[n].cancel();
        });
      }
    };

    f.forEach(function (n) {
      return P(t[n], c, n, p[n]);
    });
  }

  function X(t, c, o) {
    var f = undefined,
      s = Object.keys(t),
      l = {};
    s.forEach(function (c) {
      var module597 = function (l, module598) {
        if (!f)
          if (module598) {
            o.cancel();
            o(l, true);
          } else if (!require('./598').isEnd(l) && l !== i && l !== u) {
            var p;
            o.cancel();
            f = true;
            (p = {})[c] = l;
            var E = p;
            o(
              require('./597').is.array(t)
                ? [].slice.call(
                    n({}, E, {
                      length: s.length,
                    })
                  )
                : E
            );
          }
      };

      module597.cancel = require('./597').noop;
      l[c] = module597;
    });

    o.cancel = function () {
      if (!f) {
        f = true;
        s.forEach(function (n) {
          return l[n].cancel();
        });
      }
    };

    s.forEach(function (n) {
      if (!f) P(t[n], c, n, l[n]);
    });
  }

  function Y(n, t) {
    var c = n.selector,
      o = n.args;

    try {
      var i = c.apply(undefined, [module597()].concat(o));
      t(i);
    } catch (n) {
      t(n, true);
    }
  }

  function Z(n, t) {
    var c = n.pattern,
      o = n.buffer,
      i = s(c);
    i.pattern = c;
    t(require('./598').eventChannel(module597, o || require('./599').buffers.fixed(), i));
  }

  function $(n, t) {
    t(!!I.isCancelled);
  }

  function nn(n, t) {
    n.flush(t);
  }

  function en(n, t) {
    t(L[n]);
  }

  function rn(n, t) {
    require('./597').object.assign(L, n);

    t();
  }
};

var o = (exports.NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator'),
  i = (exports.CHANNEL_END = {
    toString: function () {
      return '@@redux-saga/CHANNEL_END';
    },
  }),
  u = (exports.TASK_CANCEL = {
    toString: function () {
      return '@@redux-saga/TASK_CANCEL';
    },
  }),
  module597 = {
    wildcard: function () {
      return require('./597').kTrue;
    },
    default: function (n) {
      return 'symbol' === (undefined === n ? 'undefined' : t(n))
        ? function (t) {
            return t.type === n;
          }
        : function (t) {
            return t.type === String(n);
          };
    },
    array: function (n) {
      return function (t) {
        return n.some(function (n) {
          return s(n)(t);
        });
      };
    },
    predicate: function (n) {
      return function (t) {
        return n(t);
      };
    },
  };

function s(n) {
  return ('*' === n
    ? module597.wildcard
    : require('./597').is.array(n)
    ? module597.array
    : require('./597').is.stringableFunc(n)
    ? module597.default
    : require('./597').is.func(n)
    ? module597.predicate
    : module597.default)(n);
}

function l(n, t, c) {
  var o = [],
    i = undefined,
    u = false;

  function f(n) {
    l();
    c(n, true);
  }

  function s(n) {
    o.push(n);

    n.cont = function (s, l) {
      if (!u) {
        require('./597').remove(o, n);

        n.cont = require('./597').noop;
        if (l) f(s);
        else {
          if (n === t) i = s;

          if (!o.length) {
            u = true;
            c(i);
          }
        }
      }
    };
  }

  function l() {
    if (!u) {
      u = true;
      o.forEach(function (n) {
        n.cont = require('./597').noop;
        n.cancel();
      });
      o = [];
    }
  }

  s(t);
  return {
    addTask: s,
    cancelAll: l,
    abort: f,
    getTasks: function () {
      return o;
    },
    taskNames: function () {
      return o.map(function (n) {
        return n.name;
      });
    },
  };
}

function v(n) {
  var t = n.context,
    c = n.fn,
    o = n.args;
  if (require('./597').is.iterator(c)) return c;
  var i,
    u,
    f = undefined,
    s = undefined;

  try {
    f = c.apply(t, o);
  } catch (n) {
    s = n;
  }

  return require('./597').is.iterator(f)
    ? f
    : s
    ? require('./597').makeIterator(function () {
        throw s;
      })
    : require('./597').makeIterator(
        ((i = undefined),
        (u = {
          done: false,
          value: f,
        }),
        function (n) {
          if (i)
            return {
              done: true,
              value: n,
            };
          else {
            i = true;
            return u;
          }
        })
      );
}

var p = function (n) {
  return {
    fn: n,
  };
};

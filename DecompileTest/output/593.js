function t(t) {
  return t && 'object' == typeof t && 'default' in t ? t.default : t;
}

var module594 = t(require('./594')),
  module20 = t(require('./20')),
  module611 = t(require('./611')),
  module613 = t(require('./613')),
  module614 = t(require('./614'));
t(require('./615'));

function i(t) {
  return (i =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
}

function s(t, r) {
  if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
}

function f(t, r) {
  for (var n = 0; n < r.length; n++) {
    var c = r[n];
    c.enumerable = c.enumerable || false;
    c.configurable = true;
    if ('value' in c) c.writable = true;
    Object.defineProperty(t, c.key, c);
  }
}

function l(t, r, n) {
  if (r in t)
    Object.defineProperty(t, r, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[r] = n;
  return t;
}

function p(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = null != arguments[r] ? arguments[r] : {},
      c = Object.keys(n);
    if ('function' == typeof Object.getOwnPropertySymbols)
      c = c.concat(
        Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        })
      );
    c.forEach(function (r) {
      l(t, r, n[r]);
    });
  }

  return t;
}

function y(t, r) {
  return b(t) || w(t, r) || k();
}

function v(t) {
  return h(t) || m(t) || x();
}

function h(t) {
  if (Array.isArray(t)) {
    for (var r = 0, n = new Array(t.length); r < t.length; r++) n[r] = t[r];

    return n;
  }
}

function b(t) {
  if (Array.isArray(t)) return t;
}

function m(t) {
  if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
}

function w(t, r) {
  var n = [],
    c = true,
    o = false,
    u = undefined;

  try {
    for (var i, s = t[Symbol.iterator](); !(c = (i = s.next()).done) && (n.push(i.value), !r || n.length !== r); c = true);
  } catch (t) {
    o = true;
    u = t;
  } finally {
    try {
      if (!(c || null == s.return)) s.return();
    } finally {
      if (o) throw u;
    }
  }

  return n;
}

function x() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function k() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

var _ = Array.isArray.bind(Array),
  A = function (t) {
    return 'function' == typeof t;
  },
  E = function (t) {
    return t;
  },
  O = function () {},
  S = function (t, r) {
    for (var n = 0, c = t.length; n < c; n += 1) if (r(t[n], n)) return n;

    return -1;
  },
  j = Object.freeze({
    isPlainObject: module611,
    isArray: _,
    isFunction: A,
    returnSelf: E,
    noop: O,
    findIndex: S,
  }),
  R = '/';

function P(t, r, n) {
  return Object.keys(t).reduce(function (c, u) {
    module613(0 !== u.indexOf(''.concat(r).concat(R)), '[prefixNamespace]: '.concat(n, ' ').concat(u, ' should not be prefixed with namespace ').concat(r));
    c[''.concat(r).concat(R).concat(u)] = t[u];
    return c;
  }, {});
}

function C(t) {
  var r,
    n = t.namespace,
    c = t.reducers,
    o = t.effects;
  if (c)
    if (_(c)) {
      var u = b((r = c)) || m(r) || k(),
        i = u[0],
        s = u.slice(1);
      t.reducers = [P(i, n, 'reducer')].concat(v(s));
    } else t.reducers = P(c, n, 'reducer');
  if (o) t.effects = P(o, n, 'effect');
  return t;
}

var T = ['onError', 'onStateChange', 'onAction', 'onHmr', 'onReducer', 'onEffect', 'extraReducers', 'extraEnhancers', '_handleActions'];

var F = (function () {
  function t() {
    s(this, t);
    this._handleActions = null;
    this.hooks = T.reduce(function (t, r) {
      t[r] = [];
      return t;
    }, {});
  }

  var module594, o, u;
  module594 = t;
  if (
    (o = [
      {
        key: 'use',
        value: function (t) {
          module20(module611(t), 'plugin.use: plugin should be plain object');
          var r = this.hooks;

          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) &&
              (module20(r[o], 'plugin.use: unknown plugin property: '.concat(o)),
              '_handleActions' === o ? (this._handleActions = t[o]) : 'extraEnhancers' === o ? (r[o] = t[o]) : r[o].push(t[o]));
        },
      },
      {
        key: 'apply',
        value: function (t, r) {
          var c = this.hooks;
          module20(['onError', 'onHmr'].indexOf(t) > -1, 'plugin.apply: hook '.concat(t, ' cannot be applied'));
          var o = c[t];
          return function () {
            if (o.length) {
              var t = true,
                n = false,
                c = undefined;

              try {
                for (var u, i = o[Symbol.iterator](); !(t = (u = i.next()).done); t = true) {
                  u.value.apply(undefined, arguments);
                }
              } catch (t) {
                n = true;
                c = t;
              } finally {
                try {
                  if (!(t || null == i.return)) i.return();
                } finally {
                  if (n) throw c;
                }
              }
            } else r && r.apply(undefined, arguments);
          };
        },
      },
      {
        key: 'get',
        value: function (t) {
          var r,
            c = this.hooks;
          module20(t in c, 'plugin.get: hook '.concat(t, ' cannot be got'));
          return 'extraReducers' === t
            ? M(c[t])
            : 'onReducer' === t
            ? ((r = c[t]),
              function (t) {
                var n = true,
                  c = false,
                  o = undefined;

                try {
                  for (var u, i = r[Symbol.iterator](); !(n = (u = i.next()).done); n = true) {
                    var s = u.value;
                    t = s(t);
                  }
                } catch (t) {
                  c = true;
                  o = t;
                } finally {
                  try {
                    if (!(n || null == i.return)) i.return();
                  } finally {
                    if (c) throw o;
                  }
                }

                return t;
              })
            : c[t];
        },
      },
    ])
  )
    f(module594.prototype, o);
  if (u) f(module594, u);
  return t;
})();

function M(t) {
  var r = {},
    n = true,
    c = false,
    o = undefined;

  try {
    for (var u, i = t[Symbol.iterator](); !(n = (u = i.next()).done); n = true) {
      r = p({}, r, u.value);
    }
  } catch (t) {
    c = true;
    o = t;
  } finally {
    try {
      if (!(n || null == i.return)) i.return();
    } finally {
      if (c) throw o;
    }
  }

  return r;
}

function L(t) {
  var r = t.reducers,
    c = t.initialState,
    o = t.plugin,
    s = t.sagaMiddleware,
    f = t.promiseMiddleware,
    l = t.createOpts.setupMiddlewares,
    p = undefined === l ? E : l,
    y = o.get('extraEnhancers');
  module20(_(y), '[app.start] extraEnhancers should be array, but got '.concat(i(y)));

  var h = o.get('onAction'),
    b = p([f, s].concat(v(module614(h)))),
    module616 = require('./616').compose,
    module616 = [require('./616').applyMiddleware.apply(undefined, v(b))].concat(v(y));

  return require('./616').createStore(r, c, module616.apply(undefined, v(module616)));
}

function D(t, r) {
  var n = ''.concat(r.namespace).concat(R).concat(t),
    c = n.replace(/\/@@[^/]+?$/, '');
  return (Array.isArray(r.reducers) ? r.reducers[0][c] : r.reducers && r.reducers[c]) || (r.effects && r.effects[c]) ? n : t;
}

function N(t, r, n, c) {
  var o = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : {};
  return require('./618').mark(function u() {
    var i;
    return require('./618').wrap(function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            u.t0 = require('./618').keys(t);

          case 1:
            if ((u.t1 = u.t0()).done) {
              u.next = 7;
              break;
            }

            if (((i = u.t1.value), !Object.prototype.hasOwnProperty.call(t, i))) {
              u.next = 5;
              break;
            }

            return u.delegateYield(
              require('./618').mark(function u() {
                var s, f;
                return require('./618').wrap(function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        s = I(i, t[i], r, n, c, o);
                        u.next = 3;
                        return require('./594').effects.fork(s);

                      case 3:
                        f = u.sent;
                        u.next = 6;
                        return require('./594').effects.fork(
                          require('./618').mark(function t() {
                            return require('./618').wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    t.next = 2;
                                    return require('./594').effects.take(''.concat(r.namespace, '/@@CANCEL_EFFECTS'));

                                  case 2:
                                    t.next = 4;
                                    return require('./594').effects.cancel(f);

                                  case 4:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        );

                      case 6:
                      case 'end':
                        return u.stop();
                    }
                }, u);
              })(),
              't2',
              5
            );

          case 5:
            u.next = 1;
            break;

          case 7:
          case 'end':
            return u.stop();
        }
    }, u);
  });
}

function I(t, r, c, o, u, i) {
  var s,
    f,
    module618 = require('./618').mark(x),
    p = r,
    h = 'takeEvery';

  if (Array.isArray(r)) {
    var b = y(r, 1);
    p = b[0];
    var m = r[1];

    if (m && m.type) {
      if ('throttle' === (h = m.type)) {
        module20(m.ms, 'app.start: opts.ms should be defined if type is throttle');
        s = m.ms;
      }

      if ('poll' === h) {
        module20(m.delay, 'app.start: opts.delay should be defined if type is poll');
        f = m.delay;
      }
    }

    module20(['watcher', 'takeEvery', 'takeLatest', 'throttle', 'poll'].indexOf(h) > -1, 'app.start: effect type should be takeEvery, takeLatest, throttle, poll or watcher');
  }

  function w() {}

  function x() {
    var r,
      n,
      u,
      s,
      f,
      y,
      h,
      b,
      m,
      x = arguments;
    return require('./618').wrap(
      function (l) {
        for (;;)
          switch ((l.prev = l.next)) {
            case 0:
              for (r = x.length, n = new Array(r), u = 0; u < r; u++) n[u] = x[u];

              s = n.length > 0 ? n[0] : {};
              f = s.__dva_resolve;
              y = undefined === f ? w : f;
              h = s.__dva_reject;
              b = undefined === h ? w : h;
              l.prev = 2;
              l.next = 5;
              return require('./594').effects.put({
                type: ''.concat(t).concat(R, '@@start'),
              });

            case 5:
              l.next = 7;
              return p.apply(undefined, v(n.concat(U(c, i))));

            case 7:
              m = l.sent;
              l.next = 10;
              return require('./594').effects.put({
                type: ''.concat(t).concat(R, '@@end'),
              });

            case 10:
              y(m);
              l.next = 17;
              break;

            case 13:
              l.prev = 13;
              l.t0 = l.catch(2);
              o(l.t0, {
                key: t,
                effectArgs: n,
              });
              if (!l.t0._dontReject) b(l.t0);

            case 17:
            case 'end':
              return l.stop();
          }
      },
      module618,
      null,
      [[2, 13]]
    );
  }

  var k = H(u, x, c, t);

  switch (h) {
    case 'watcher':
      return x;

    case 'takeLatest':
      return require('./618').mark(function r() {
        return require('./618').wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                r.next = 2;
                return require('./594').effects.takeLatest(t, k);

              case 2:
              case 'end':
                return r.stop();
            }
        }, r);
      });

    case 'throttle':
      return require('./618').mark(function r() {
        return require('./618').wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                r.next = 2;
                return require('./594').effects.throttle(s, t, k);

              case 2:
              case 'end':
                return r.stop();
            }
        }, r);
      });

    case 'poll':
      return require('./618').mark(function r() {
        var n, c, o, u, i, s, module618;
        return require('./618').wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                o = function (t, r) {
                  var o;
                  return require('./618').wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          o = t.call;

                        case 1:
                          n.next = 4;
                          return o(k, r);

                        case 4:
                          n.next = 6;
                          return o(c, f);

                        case 6:
                          n.next = 1;
                          break;

                        case 8:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                };

                c = function (t) {
                  return new Promise(function (r) {
                    return setTimeout(r, t);
                  });
                };

                n = require('./618').mark(o);
                u = require('./594').effects.call;
                i = require('./594').effects.take;
                s = require('./594').effects.race;

              case 4:
                r.next = 7;
                return i(''.concat(t, '-start'));

              case 7:
                module618 = r.sent;
                r.next = 10;
                return s([u(o, require('./594').effects, module618), i(''.concat(t, '-stop'))]);

              case 10:
                r.next = 4;
                break;

              case 12:
              case 'end':
                return r.stop();
            }
        }, r);
      });

    default:
      return require('./618').mark(function r() {
        return require('./618').wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                r.next = 2;
                return require('./594').effects.takeEvery(t, k);

              case 2:
              case 'end':
                return r.stop();
            }
        }, r);
      });
  }
}

function U(t, r) {
  function c(c, u) {
    module20(c, 'dispatch: action should be a plain Object with type');
    var i = r.namespacePrefixWarning;
    if (undefined === i || i)
      module613(0 !== c.indexOf(''.concat(t.namespace).concat(R)), '['.concat(u, '] ').concat(c, ' should not be prefixed with namespace ').concat(t.namespace));
  }

  function u(r) {
    var n = r.type;
    c(n, 'sagaEffects.put');
    return require('./594').effects.put(
      p({}, r, {
        type: D(n, t),
      })
    );
  }

  u.resolve = function (r) {
    var n = r.type;
    c(n, 'sagaEffects.put.resolve');
    return require('./594').effects.put.resolve(
      p({}, r, {
        type: D(n, t),
      })
    );
  };

  return p({}, require('./594').effects, {
    put: u,
    take: function (r) {
      if ('string' == typeof r) {
        c(r, 'sagaEffects.take');
        return require('./594').effects.take(D(r, t));
      } else
        return Array.isArray(r)
          ? require('./594').effects.take(
              r.map(function (r) {
                if ('string' == typeof r) {
                  c(r, 'sagaEffects.take');
                  return D(r, t);
                } else return r;
              })
            )
          : require('./594').effects.take(r);
    },
  });
}

function H(t, r, n, c) {
  var o = true,
    u = false,
    i = undefined;

  try {
    for (var s, f = t[Symbol.iterator](); !(o = (s = f.next()).done); o = true) {
      r = s.value(r, require('./594').effects, n, c);
    }
  } catch (t) {
    u = true;
    i = t;
  } finally {
    try {
      if (!(o || null == f.return)) f.return();
    } finally {
      if (u) throw i;
    }
  }

  return r;
}

function z(t) {
  return t;
}

function W(t) {
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : z;
  return function (c, o) {
    var u = o.type;
    module20(u, 'dispatch: action should be a plain Object with type');
    return t === u ? r(c, o) : c;
  };
}

function Y() {
  return function (t, n) {
    return args.reduce(function (t, r) {
      return r(t, n);
    }, t);
  };
}

function $(t, r) {
  var n = Object.keys(t).map(function (r) {
      return W(r, t[r]);
    }),
    c = Y.apply(undefined, v(n));
  return function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : r,
      n = arguments.length > 1 ? arguments[1] : undefined;
    return c(t, n);
  };
}

function q(t, r, n) {
  return Array.isArray(t) ? t[1]((n || $)(t[0], r)) : (n || $)(t || {}, r);
}

function B(t) {
  return function () {
    return function (t) {
      return function (n) {
        return r(n.type)
          ? new Promise(function (r, c) {
              t(
                p(
                  {
                    __dva_resolve: r,
                    __dva_reject: c,
                  },
                  n
                )
              );
            })
          : t(n);
      };
    };
  };

  function r(r) {
    if (!r || 'string' != typeof r) return false;

    var n = y(r.split(R), 1)[0],
      c = t._models.filter(function (t) {
        return t.namespace === n;
      })[0];

    return !!(c && c.effects && c.effects[r]);
  }
}

function G(t, r) {
  return function (c) {
    var u = c.type;
    module20(u, 'dispatch: action should be a plain Object with type');
    module613(0 !== u.indexOf(''.concat(r.namespace).concat(R)), 'dispatch: '.concat(u, ' should not be prefixed with namespace ').concat(r.namespace));
    return t(
      p({}, c, {
        type: D(u, r),
      })
    );
  };
}

function J(t, r, n, c) {
  var o = [],
    u = [];

  for (var i in t)
    if (Object.prototype.hasOwnProperty.call(t, i)) {
      var s = t[i](
        {
          dispatch: G(n._store.dispatch, r),
          history: n._history,
        },
        c
      );
      if (A(s)) o.push(s);
      else u.push(i);
    }

  return {
    funcs: o,
    nonFuncs: u,
  };
}

function K(t, r) {
  if (t[r]) {
    var n = t[r],
      c = n.funcs,
      u = n.nonFuncs;
    module613(0 === u.length, '[app.unmodel] subscription should return unlistener function, check these subscriptions '.concat(u.join(', ')));
    var i = true,
      s = false,
      f = undefined;

    try {
      for (var l, p = c[Symbol.iterator](); !(i = (l = p.next()).done); i = true) {
        l.value();
      }
    } catch (t) {
      s = true;
      f = t;
    } finally {
      try {
        if (!(i || null == p.return)) p.return();
      } finally {
        if (s) throw f;
      }
    }

    delete t[r];
  }
}

var Q = O,
  V = S,
  X = {
    namespace: '@@dva',
    state: 0,
    reducers: {
      UPDATE: function (t) {
        return t + 1;
      },
    },
  };
exports.saga = require('./594');

exports.create = function () {
  var t,
    c = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    u = o.initialReducer,
    i = o.setupApp,
    s = undefined === i ? Q : i,
    f = new F();
  f.use(
    ((t = c),
    Object.keys(t).reduce(function (r, n) {
      if (T.indexOf(n) > -1) r[n] = t[n];
      return r;
    }, {}))
  );
  var module616 = {
    _models: [C(p({}, X))],
    _store: null,
    _plugin: f,
    use: f.use.bind(f),
    model: y,
    start: function () {
      var t = function (t, r) {
          if (t) {
            if ('string' == typeof t) t = new Error(t);

            t.preventDefault = function () {
              t._dontReject = true;
            };

            f.apply('onError', function (t) {
              throw new Error(t.stack || t);
            })(t, module616._store.dispatch, r);
          }
        },
        i = module594(),
        y = B(module616);

      module616._getSaga = N.bind(null);
      var m = [],
        w = p({}, u),
        x = true,
        k = false,
        _ = undefined;

      try {
        for (var A, E = module616._models[Symbol.iterator](); !(x = (A = E.next()).done); x = true) {
          var O = A.value;
          w[O.namespace] = q(O.reducers, O.state, f._handleActions);
          if (O.effects) m.push(module616._getSaga(O.effects, O, t, f.get('onEffect'), c));
        }
      } catch (t) {
        k = true;
        _ = t;
      } finally {
        try {
          if (!(x || null == E.return)) E.return();
        } finally {
          if (k) throw _;
        }
      }

      var S = f.get('onReducer'),
        j = f.get('extraReducers');
      module20(
        Object.keys(j).every(function (t) {
          return !(t in w);
        }),
        '[app.start] extraReducers is conflict with other reducers, reducers list: '.concat(Object.keys(w).join(', '))
      );
      module616._store = L({
        reducers: K(),
        initialState: c.initialState || {},
        plugin: f,
        createOpts: o,
        sagaMiddleware: i,
        promiseMiddleware: y,
      });
      var R = module616._store;
      R.runSaga = i.run;
      R.asyncReducers = {};
      var P = f.get('onStateChange'),
        C = true,
        T = false,
        F = undefined;

      try {
        for (
          var M,
            D = function () {
              var t = M.value;
              R.subscribe(function () {
                t(R.getState());
              });
            },
            I = P[Symbol.iterator]();
          !(C = (M = I.next()).done);
          C = true
        )
          D();
      } catch (t) {
        T = true;
        F = t;
      } finally {
        try {
          if (!(C || null == I.return)) I.return();
        } finally {
          if (T) throw F;
        }
      }

      m.forEach(i.run);
      s(module616);
      var U = {},
        H = true,
        z = false,
        W = undefined;

      try {
        for (var Y, $ = this._models[Symbol.iterator](); !(H = (Y = $.next()).done); H = true) {
          var G = Y.value;
          if (G.subscriptions) U[G.namespace] = J(G.subscriptions, G, module616, t);
        }
      } catch (t) {
        z = true;
        W = t;
      } finally {
        try {
          if (!(H || null == $.return)) $.return();
        } finally {
          if (z) throw W;
        }
      }

      function K() {
        return S(require('./616').combineReducers(p({}, w, j, module616._store ? module616._store.asyncReducers : {})));
      }

      module616.model = v.bind(module616, K, t, U);
      module616.unmodel = h.bind(module616, K, w, U);
      module616.replaceModel = b.bind(module616, K, w, U, t);
    },
  };
  return module616;

  function y(t) {
    var r = C(p({}, t));

    module616._models.push(r);

    return r;
  }

  function v(t, r, n, o) {
    o = y(o);
    var u = module616._store;
    u.asyncReducers[o.namespace] = q(o.reducers, o.state, f._handleActions);
    u.replaceReducer(t());
    if (o.effects) u.runSaga(module616._getSaga(o.effects, o, r, f.get('onEffect'), c));
    if (o.subscriptions) n[o.namespace] = J(o.subscriptions, o, module616, r);
  }

  function h(t, r, n, c) {
    var o = module616._store;
    delete o.asyncReducers[c];
    delete r[c];
    o.replaceReducer(t());
    o.dispatch({
      type: '@@dva/UPDATE',
    });
    o.dispatch({
      type: ''.concat(c, '/@@CANCEL_EFFECTS'),
    });
    K(n, c);
    module616._models = module616._models.filter(function (t) {
      return t.namespace !== c;
    });
  }

  function b(t, r, n, c, o) {
    var u = module616._store,
      i = o.namespace,
      s = V(module616._models, function (t) {
        return t.namespace === i;
      });

    if (~s) {
      u.dispatch({
        type: ''.concat(i, '/@@CANCEL_EFFECTS'),
      });
      delete u.asyncReducers[i];
      delete r[i];
      K(n, i);

      module616._models.splice(s, 1);
    }

    module616.model(o);
    u.dispatch({
      type: '@@dva/UPDATE',
    });
  }
};

exports.utils = j;

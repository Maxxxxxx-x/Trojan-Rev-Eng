function t(t, n) {
  var o = {};

  for (var i in t) n.indexOf(i) >= 0 || (Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]));

  return o;
}

exports.__esModule = true;

exports.default = function () {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    o = n.context,
    i = undefined === o ? {} : o,
    s = t(n, ['context']),
    c = s.sagaMonitor,
    u = s.logger,
    f = s.onError;
  if (require('./597').is.func(s)) throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
  if (u && !require('./597').is.func(u)) throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  if (f && !require('./597').is.func(f)) throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  if (s.emitter && !require('./597').is.func(s.emitter)) throw new Error('`options.emitter` passed to the Saga middleware is not a function!');

  function l(t) {
    var n = t.getState,
      o = t.dispatch,
      module598 = require('./598').emitter();

    module598.emit = (s.emitter || require('./597').ident)(module598.emit);
    l.run = require('./595').runSaga.bind(null, {
      context: i,
      subscribe: module598.subscribe,
      dispatch: o,
      getState: n,
      sagaMonitor: c,
      logger: u,
      onError: f,
    });
    return function (t) {
      return function (n) {
        if (c && c.actionDispatched) c.actionDispatched(n);
        var o = t(n);
        module598.emit(n);
        return o;
      };
    };
  }

  l.run = function () {
    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
  };

  l.setContext = function (t) {
    require('./597').check(t, require('./597').is.object, require('./597').createSetContextWarning('sagaMiddleware', t));

    require('./597').object.assign(i, t);
  };

  return l;
};

exports.__esModule = true;

exports.runSaga = function (t, f) {
  for (var n = arguments.length, s = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) s[u - 2] = arguments[u];

  var l = undefined;

  if (require('./597').is.iterator(t)) {
    l = t;
    t = f;
  } else {
    require('./597').check(f, require('./597').is.func, c);

    l = f.apply(undefined, s);

    require('./597').check(l, require('./597').is.iterator, c);
  }

  var p = t,
    v = p.subscribe,
    h = p.dispatch,
    _ = p.getState,
    R = p.context,
    M = p.sagaMonitor,
    S = p.logger,
    b = p.onError,
    module597 = require('./597').uid();

  if (M) {
    M.effectTriggered = M.effectTriggered || require('./597').noop;
    M.effectResolved = M.effectResolved || require('./597').noop;
    M.effectRejected = M.effectRejected || require('./597').noop;
    M.effectCancelled = M.effectCancelled || require('./597').noop;
    M.actionDispatched = M.actionDispatched || require('./597').noop;
    M.effectTriggered({
      effectId: module597,
      root: true,
      parentEffectId: 0,
      effect: {
        root: true,
        saga: f,
        args: s,
      },
    });
  }

  var module597 = module596.default(
    l,
    v,
    require('./597').wrapSagaDispatch(h),
    _,
    R,
    {
      sagaMonitor: M,
      logger: S,
      onError: b,
    },
    module597,
    f.name
  );
  if (M) M.effectResolved(module597, module597);
  return module597;
};

var t,
  module596 =
    (t = require('./596')) && t.__esModule
      ? t
      : {
          default: t,
        };
var c = 'runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!';

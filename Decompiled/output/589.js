var e,
  t = Symbol.for('react.element'),
  r = Symbol.for('react.portal'),
  o = Symbol.for('react.fragment'),
  n = Symbol.for('react.strict_mode'),
  c = Symbol.for('react.profiler'),
  f = Symbol.for('react.provider'),
  s = Symbol.for('react.context'),
  u = Symbol.for('react.server_context'),
  a = Symbol.for('react.forward_ref'),
  l = Symbol.for('react.suspense'),
  y = Symbol.for('react.suspense_list'),
  m = Symbol.for('react.memo'),
  p = Symbol.for('react.lazy'),
  S = Symbol.for('react.offscreen');

function d(e) {
  if ('object' == typeof e && null !== e) {
    var S = e.$$typeof;

    switch (S) {
      case t:
        switch ((e = e.type)) {
          case o:
          case c:
          case n:
          case l:
          case y:
            return e;

          default:
            switch ((e = e && e.$$typeof)) {
              case u:
              case s:
              case a:
              case p:
              case m:
              case f:
                return e;

              default:
                return S;
            }
        }

      case r:
        return S;
    }
  }
}

e = Symbol.for('react.module.reference');
exports.ContextConsumer = s;
exports.ContextProvider = f;
exports.Element = t;
exports.ForwardRef = a;
exports.Fragment = o;
exports.Lazy = p;
exports.Memo = m;
exports.Portal = r;
exports.Profiler = c;
exports.StrictMode = n;
exports.Suspense = l;
exports.SuspenseList = y;

exports.isAsyncMode = function () {
  return false;
};

exports.isConcurrentMode = function () {
  return false;
};

exports.isContextConsumer = function (e) {
  return d(e) === s;
};

exports.isContextProvider = function (e) {
  return d(e) === f;
};

exports.isElement = function (e) {
  return 'object' == typeof e && null !== e && e.$$typeof === t;
};

exports.isForwardRef = function (e) {
  return d(e) === a;
};

exports.isFragment = function (e) {
  return d(e) === o;
};

exports.isLazy = function (e) {
  return d(e) === p;
};

exports.isMemo = function (e) {
  return d(e) === m;
};

exports.isPortal = function (e) {
  return d(e) === r;
};

exports.isProfiler = function (e) {
  return d(e) === c;
};

exports.isStrictMode = function (e) {
  return d(e) === n;
};

exports.isSuspense = function (e) {
  return d(e) === l;
};

exports.isSuspenseList = function (e) {
  return d(e) === y;
};

exports.isValidElementType = function (t) {
  return (
    'string' == typeof t ||
    'function' == typeof t ||
    t === o ||
    t === c ||
    t === n ||
    t === l ||
    t === y ||
    t === S ||
    ('object' == typeof t &&
      null !== t &&
      (t.$$typeof === p || t.$$typeof === m || t.$$typeof === f || t.$$typeof === s || t.$$typeof === a || t.$$typeof === e || undefined !== t.getModuleId))
  );
};

exports.typeOf = d;

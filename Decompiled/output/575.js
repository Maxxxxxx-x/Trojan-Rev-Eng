var e = 'function' == typeof Symbol && Symbol.for,
  t = e ? Symbol.for('react.element') : 60103,
  o = e ? Symbol.for('react.portal') : 60106,
  r = e ? Symbol.for('react.fragment') : 60107,
  n = e ? Symbol.for('react.strict_mode') : 60108,
  c = e ? Symbol.for('react.profiler') : 60114,
  f = e ? Symbol.for('react.provider') : 60109,
  s = e ? Symbol.for('react.context') : 60110,
  u = e ? Symbol.for('react.async_mode') : 60111,
  a = e ? Symbol.for('react.concurrent_mode') : 60111,
  y = e ? Symbol.for('react.forward_ref') : 60112,
  l = e ? Symbol.for('react.suspense') : 60113,
  m = e ? Symbol.for('react.suspense_list') : 60120,
  p = e ? Symbol.for('react.memo') : 60115,
  b = e ? Symbol.for('react.lazy') : 60116,
  S = e ? Symbol.for('react.block') : 60121,
  $ = e ? Symbol.for('react.fundamental') : 60117,
  d = e ? Symbol.for('react.responder') : 60118,
  C = e ? Symbol.for('react.scope') : 60119;

function M(e) {
  if ('object' == typeof e && null !== e) {
    var m = e.$$typeof;

    switch (m) {
      case t:
        switch ((e = e.type)) {
          case u:
          case a:
          case r:
          case c:
          case n:
          case l:
            return e;

          default:
            switch ((e = e && e.$$typeof)) {
              case s:
              case y:
              case b:
              case p:
              case f:
                return e;

              default:
                return m;
            }
        }

      case o:
        return m;
    }
  }
}

function _(e) {
  return M(e) === a;
}

exports.AsyncMode = u;
exports.ConcurrentMode = a;
exports.ContextConsumer = s;
exports.ContextProvider = f;
exports.Element = t;
exports.ForwardRef = y;
exports.Fragment = r;
exports.Lazy = b;
exports.Memo = p;
exports.Portal = o;
exports.Profiler = c;
exports.StrictMode = n;
exports.Suspense = l;

exports.isAsyncMode = function (e) {
  return _(e) || M(e) === u;
};

exports.isConcurrentMode = _;

exports.isContextConsumer = function (e) {
  return M(e) === s;
};

exports.isContextProvider = function (e) {
  return M(e) === f;
};

exports.isElement = function (e) {
  return 'object' == typeof e && null !== e && e.$$typeof === t;
};

exports.isForwardRef = function (e) {
  return M(e) === y;
};

exports.isFragment = function (e) {
  return M(e) === r;
};

exports.isLazy = function (e) {
  return M(e) === b;
};

exports.isMemo = function (e) {
  return M(e) === p;
};

exports.isPortal = function (e) {
  return M(e) === o;
};

exports.isProfiler = function (e) {
  return M(e) === c;
};

exports.isStrictMode = function (e) {
  return M(e) === n;
};

exports.isSuspense = function (e) {
  return M(e) === l;
};

exports.isValidElementType = function (e) {
  return (
    'string' == typeof e ||
    'function' == typeof e ||
    e === r ||
    e === a ||
    e === c ||
    e === n ||
    e === l ||
    e === m ||
    ('object' == typeof e &&
      null !== e &&
      (e.$$typeof === b ||
        e.$$typeof === p ||
        e.$$typeof === f ||
        e.$$typeof === s ||
        e.$$typeof === y ||
        e.$$typeof === $ ||
        e.$$typeof === d ||
        e.$$typeof === C ||
        e.$$typeof === S))
  );
};

exports.typeOf = M;

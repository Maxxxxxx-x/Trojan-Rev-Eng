var e = Symbol.for('react.element'),
  t = Symbol.for('react.portal'),
  r = Symbol.for('react.fragment'),
  n = Symbol.for('react.strict_mode'),
  o = Symbol.for('react.profiler'),
  u = Symbol.for('react.provider'),
  c = Symbol.for('react.context'),
  a = Symbol.for('react.forward_ref'),
  f = Symbol.for('react.suspense'),
  l = Symbol.for('react.memo'),
  s = Symbol.for('react.lazy'),
  p = Symbol.iterator;

function y(e) {
  return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (p && e[p]) || e['@@iterator']) ? e : null;
}

var d = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _ = Object.assign,
  h = {};

function m(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = h;
  this.updater = r || d;
}

function v() {}

function b(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = h;
  this.updater = r || d;
}

m.prototype.isReactComponent = {};

m.prototype.setState = function (e, t) {
  if ('object' != typeof e && 'function' != typeof e && null != e)
    throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
  this.updater.enqueueSetState(this, e, t, 'setState');
};

m.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};

v.prototype = m.prototype;
var S = (b.prototype = new v());
S.constructor = b;

_(S, m.prototype);

S.isPureReactComponent = true;
var E = Array.isArray,
  $ = Object.prototype.hasOwnProperty,
  w = {
    current: null,
  },
  R = {
    key: true,
    ref: true,
    __self: true,
    __source: true,
  };

function k(t, r, n) {
  var o,
    u = {},
    c = null,
    a = null;
  if (null != r) for (o in (undefined !== r.ref && (a = r.ref), undefined !== r.key && (c = '' + r.key), r)) $.call(r, o) && !R.hasOwnProperty(o) && (u[o] = r[o]);
  var f = arguments.length - 2;
  if (1 === f) u.children = n;
  else if (1 < f) {
    for (var l = Array(f), s = 0; s < f; s++) l[s] = arguments[s + 2];

    u.children = l;
  }
  if (t && t.defaultProps) for (o in (f = t.defaultProps)) undefined === u[o] && (u[o] = f[o]);
  return {
    $$typeof: e,
    type: t,
    key: c,
    ref: a,
    props: u,
    _owner: w.current,
  };
}

function C(t, r) {
  return {
    $$typeof: e,
    type: t.type,
    key: r,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}

function g(t) {
  return 'object' == typeof t && null !== t && t.$$typeof === e;
}

function j(e) {
  var t = {
    '=': '=0',
    ':': '=2',
  };
  return (
    '$' +
    e.replace(/[=:]/g, function (e) {
      return t[e];
    })
  );
}

var O = /\/+/g;

function P(e, t) {
  return 'object' == typeof e && null !== e && null != e.key ? j('' + e.key) : t.toString(36);
}

function x(r, n, o, u, c) {
  var a = typeof r;
  if (!('undefined' !== a && 'boolean' !== a)) r = null;
  var f = false;
  if (null === r) f = true;
  else
    switch (a) {
      case 'string':
      case 'number':
        f = true;
        break;

      case 'object':
        switch (r.$$typeof) {
          case e:
          case t:
            f = true;
        }
    }

  if (f) {
    c = c((f = r));
    r = '' === u ? '.' + P(f, 0) : u;

    if (E(c)) {
      o = '';
      if (null != r) o = r.replace(O, '$&/') + '/';
      x(c, n, o, '', function (e) {
        return e;
      });
    } else if (null != c) {
      if (g(c)) c = C(c, o + (!c.key || (f && f.key === c.key) ? '' : ('' + c.key).replace(O, '$&/') + '/') + r);
      n.push(c);
    }

    return 1;
  }

  if (((f = 0), (u = '' === u ? '.' : u + ':'), E(r)))
    for (var l = 0; l < r.length; l++) {
      var s = u + P((a = r[l]), l);
      f += x(a, n, o, s, c);
    }
  else if ('function' == typeof (s = y(r))) for (r = s.call(r), l = 0; !(a = r.next()).done; ) f += x((a = a.value), n, o, (s = u + P(a, l++)), c);
  else if ('object' === a)
    throw (
      ((n = String(r)),
      Error(
        'Objects are not valid as a React child (found: ' +
          ('[object Object]' === n ? 'object with keys {' + Object.keys(r).join(', ') + '}' : n) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return f;
}

function I(e, t, r) {
  if (null == e) return e;
  var n = [],
    o = 0;
  x(e, n, '', '', function (e) {
    return t.call(r, e, o++);
  });
  return n;
}

function T(e) {
  if (-1 === e._status) {
    var t = e._result;
    (t = t()).then(
      function (t) {
        if (!(0 !== e._status && -1 !== e._status)) {
          e._status = 1;
          e._result = t;
        }
      },
      function (t) {
        if (!(0 !== e._status && -1 !== e._status)) {
          e._status = 2;
          e._result = t;
        }
      }
    );

    if (-1 === e._status) {
      e._status = 0;
      e._result = t;
    }
  }

  if (1 === e._status) return e._result.default;
  throw e._result;
}

var V = {
    current: null,
  },
  A = {
    transition: null,
  },
  D = {
    ReactCurrentDispatcher: V,
    ReactCurrentBatchConfig: A,
    ReactCurrentOwner: w,
  };
exports.Children = {
  map: I,
  forEach: function (e, t, r) {
    I(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    I(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return (
      I(e, function (e) {
        return e;
      }) || []
    );
  },
  only: function (e) {
    if (!g(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
exports.Component = m;
exports.Fragment = r;
exports.Profiler = o;
exports.PureComponent = b;
exports.StrictMode = n;
exports.Suspense = f;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D;

exports.cloneElement = function (t, r, n) {
  if (null === t || undefined === t) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.');

  var o = _({}, t.props),
    u = t.key,
    c = t.ref,
    a = t._owner;

  if (null != r) {
    if ((undefined !== r.ref && ((c = r.ref), (a = w.current)), undefined !== r.key && (u = '' + r.key), t.type && t.type.defaultProps)) var f = t.type.defaultProps;

    for (l in r) $.call(r, l) && !R.hasOwnProperty(l) && (o[l] = undefined === r[l] && undefined !== f ? f[l] : r[l]);
  }

  var l = arguments.length - 2;
  if (1 === l) o.children = n;
  else if (1 < l) {
    f = Array(l);

    for (var s = 0; s < l; s++) f[s] = arguments[s + 2];

    o.children = f;
  }
  return {
    $$typeof: e,
    type: t.type,
    key: u,
    ref: c,
    props: o,
    _owner: a,
  };
};

exports.createContext = function (e) {
  (e = {
    $$typeof: c,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  }).Provider = {
    $$typeof: u,
    _context: e,
  };
  return (e.Consumer = e);
};

exports.createElement = k;

exports.createFactory = function (e) {
  var t = k.bind(null, e);
  t.type = e;
  return t;
};

exports.createRef = function () {
  return {
    current: null,
  };
};

exports.forwardRef = function (e) {
  return {
    $$typeof: a,
    render: e,
  };
};

exports.isValidElement = g;

exports.lazy = function (e) {
  return {
    $$typeof: s,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: T,
  };
};

exports.memo = function (e, t) {
  return {
    $$typeof: l,
    type: e,
    compare: undefined === t ? null : t,
  };
};

exports.startTransition = function (e) {
  var t = A.transition;
  A.transition = {};

  try {
    e();
  } finally {
    A.transition = t;
  }
};

exports.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};

exports.useCallback = function (e, t) {
  return V.current.useCallback(e, t);
};

exports.useContext = function (e) {
  return V.current.useContext(e);
};

exports.useDebugValue = function () {};

exports.useDeferredValue = function (e) {
  return V.current.useDeferredValue(e);
};

exports.useEffect = function (e, t) {
  return V.current.useEffect(e, t);
};

exports.useId = function () {
  return V.current.useId();
};

exports.useImperativeHandle = function (e, t, r) {
  return V.current.useImperativeHandle(e, t, r);
};

exports.useInsertionEffect = function (e, t) {
  return V.current.useInsertionEffect(e, t);
};

exports.useLayoutEffect = function (e, t) {
  return V.current.useLayoutEffect(e, t);
};

exports.useMemo = function (e, t) {
  return V.current.useMemo(e, t);
};

exports.useReducer = function (e, t, r) {
  return V.current.useReducer(e, t, r);
};

exports.useRef = function (e) {
  return V.current.useRef(e);
};

exports.useState = function (e) {
  return V.current.useState(e);
};

exports.useSyncExternalStore = function (e, t, r) {
  return V.current.useSyncExternalStore(e, t, r);
};

exports.useTransition = function () {
  return V.current.useTransition();
};

exports.version = '18.0.0-fc46dba67-20220329';

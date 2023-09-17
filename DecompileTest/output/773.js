var module774 = require('@babel/runtime/helpers/interopRequireDefault')(require('./774')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = i(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in e)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(e, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = e[u];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module772 = require('@babel/runtime/helpers/interopRequireDefault')(require('./772'));

function i(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (i = function (e) {
    return e ? n : t;
  })(e);
}

var l =
  (this && this.__spreadArray) ||
  function (e, t, n) {
    if (n || 2 === arguments.length) for (var o, i = 0, l = t.length; i < l; i++) (!o && i in t) || (o || (o = Array.prototype.slice.call(t, 0, i)), (o[i] = t[i]));
    return e.concat(o || Array.prototype.slice.call(t));
  };

exports.defaultOriginWhitelist = ['http://*', 'https://*'];

var u = function (e) {
    var t = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(e);
    return null === t ? '' : t[0];
  },
  c = function (t) {
    return '^'.concat(module774.default(t).replace(/\\\*/g, '.*'));
  },
  s = function (e, t) {
    var n = u(t);
    return e.some(function (e) {
      return new RegExp(e).test(n);
    });
  },
  f = function (e) {
    return l(['about:blank'], e || [], true).map(c);
  },
  v = function (e, t, o) {
    return function (i) {
      var l = i.nativeEvent,
        u = true,
        c = l.url,
        v = l.lockIdentifier;
      if (s(f(t), c)) {
        if (o) u = o(l);
      } else {
        ReactNative.Linking.canOpenURL(c)
          .then(function (e) {
            if (e) return ReactNative.Linking.openURL(c);
            console.warn("Can't open url: ".concat(c));
          })
          .catch(function (e) {
            console.warn('Error opening URL: ', e);
          });
        u = false;
      }
      e(u, c, v);
    };
  };

exports.createOnShouldStartLoadWithRequest = v;

exports.defaultRenderLoading = function () {
  return module125.default.createElement(
    ReactNative.View,
    {
      style: module772.default.loadingOrErrorView,
    },
    module125.default.createElement(ReactNative.ActivityIndicator, null)
  );
};

exports.defaultRenderError = function (e, i, l) {
  return module125.default.createElement(
    ReactNative.View,
    {
      style: module772.default.loadingOrErrorView,
    },
    module125.default.createElement(
      ReactNative.Text,
      {
        style: module772.default.errorTextTitle,
      },
      'Error loading page'
    ),
    module125.default.createElement(
      ReactNative.Text,
      {
        style: module772.default.errorText,
      },
      'Domain: '.concat(e)
    ),
    module125.default.createElement(
      ReactNative.Text,
      {
        style: module772.default.errorText,
      },
      'Error Code: '.concat(i)
    ),
    module125.default.createElement(
      ReactNative.Text,
      {
        style: module772.default.errorText,
      },
      'Description: '.concat(l)
    )
  );
};

exports.useWebWiewLogic = function (e) {
  var o = e.startInLoadingState,
    i = e.onNavigationStateChange,
    l = e.onLoadStart,
    u = e.onLoad,
    c = e.onLoadProgress,
    s = e.onLoadEnd,
    f = e.onError,
    p = e.onHttpErrorProp,
    E = e.onMessageProp,
    L = e.onRenderProcessGoneProp,
    h = e.onContentProcessDidTerminateProp,
    y = e.originWhitelist,
    b = e.onShouldStartLoadWithRequestProp,
    O = e.onShouldStartLoadWithRequestCallback,
    P = module125.useState(o ? 'LOADING' : 'IDLE'),
    S = P[0],
    R = P[1],
    k = module125.useState(null),
    w = k[0],
    C = k[1],
    W = module125.useRef(null),
    D = module125.useCallback(
      function (e) {
        if (!(null === i || undefined === i)) i(e.nativeEvent);
      },
      [i]
    ),
    T = module125.useCallback(
      function (e) {
        W.current = e.nativeEvent.url;
        if (!(null === l || undefined === l)) l(e);
        D(e);
      },
      [l, D]
    ),
    x = module125.useCallback(
      function (e) {
        e.persist();
        if (f) f(e);
        else console.warn('Encountered an error loading page', e.nativeEvent);
        if (!(null === s || undefined === s)) s(e);

        if (!e.isDefaultPrevented()) {
          R('ERROR');
          C(e.nativeEvent);
        }
      },
      [f, s]
    ),
    A = module125.useCallback(
      function (e) {
        if (!(null === p || undefined === p)) p(e);
      },
      [p]
    ),
    I = module125.useCallback(
      function (e) {
        if (!(null === L || undefined === L)) L(e);
      },
      [L]
    ),
    M = module125.useCallback(
      function (e) {
        if (!(null === h || undefined === h)) h(e);
      },
      [h]
    ),
    _ = module125.useCallback(
      function (e) {
        if (!(null === u || undefined === u)) u(e);
        if (!(null === s || undefined === s)) s(e);
        var t = e.nativeEvent.url;
        if (!('android' === ReactNative.Platform.OS && t !== W.current)) R('IDLE');
        D(e);
      },
      [u, s, D]
    ),
    j = module125.useCallback(
      function (e) {
        if (!(null === E || undefined === E)) E(e);
      },
      [E]
    ),
    q = module125.useCallback(
      function (e) {
        var t = e.nativeEvent.progress;
        if ('android' === ReactNative.Platform.OS && 1 === t)
          R(function (e) {
            return 'LOADING' === e ? 'IDLE' : e;
          });
        if (!(null === c || undefined === c)) c(e);
      },
      [c]
    );

  return {
    onShouldStartLoadWithRequest: module125.useMemo(
      function () {
        return v(O, y, b);
      },
      [y, b, O]
    ),
    onLoadingStart: T,
    onLoadingProgress: q,
    onLoadingError: x,
    onLoadingFinish: _,
    onHttpError: A,
    onRenderProcessGone: I,
    onContentProcessDidTerminate: M,
    onMessage: j,
    viewState: S,
    setViewState: R,
    lastErrorEvent: w,
  };
};

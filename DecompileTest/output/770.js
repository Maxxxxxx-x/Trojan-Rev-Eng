var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = s(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in e)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
        var c = i ? Object.getOwnPropertyDescriptor(e, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = e[l];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  ReactNative = require('react-native'),
  module20 = require('@babel/runtime/helpers/interopRequireDefault')(require('./20')),
  module131 = require('@babel/runtime/helpers/interopRequireDefault')(require('./131')),
  module771 = require('@babel/runtime/helpers/interopRequireDefault')(require('./771')),
  module772 = require('@babel/runtime/helpers/interopRequireDefault')(require('./772'));

function s(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (s = function (e) {
    return e ? n : t;
  })(e);
}

var u =
    (this && this.__awaiter) ||
    function (e, t, n, o) {
      return new (n || (n = Promise))(function (i, l) {
        function c(e) {
          try {
            u(o.next(e));
          } catch (e) {
            l(e);
          }
        }

        function s(e) {
          try {
            u(o.throw(e));
          } catch (e) {
            l(e);
          }
        }

        function u(e) {
          var t;
          if (e.done) i(e.value);
          else
            ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(c, s);
        }

        u((o = o.apply(e, t || [])).next());
      });
    },
  f =
    (this && this.__generator) ||
    function (e, t) {
      var n,
        o,
        i,
        module771,
        c = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      module771 = {
        next: s(0),
        throw: s(1),
        return: s(2),
      };
      if ('function' == typeof Symbol)
        module771[Symbol.iterator] = function () {
          return this;
        };
      return module771;

      function s(e) {
        return function (t) {
          return u([e, t]);
        };
      }

      function u(l) {
        if (n) throw new TypeError('Generator is already executing.');

        for (; c; )
          try {
            if (((n = 1), o && (i = 2 & l[0] ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)) return i;

            switch (((o = 0), i && (l = [2 & l[0], i.value]), l[0])) {
              case 0:
              case 1:
                i = l;
                break;

              case 4:
                c.label++;
                return {
                  value: l[1],
                  done: false,
                };

              case 5:
                c.label++;
                o = l[1];
                l = [0];
                continue;

              case 7:
                l = c.ops.pop();
                c.trys.pop();
                continue;

              default:
                if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                  c = 0;
                  continue;
                }

                if (3 === l[0] && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                  c.label = l[1];
                  break;
                }

                if (6 === l[0] && c.label < i[1]) {
                  c.label = i[1];
                  i = l;
                  break;
                }

                if (i && c.label < i[2]) {
                  c.label = i[2];
                  c.ops.push(l);
                  break;
                }

                if (i[2]) c.ops.pop();
                c.trys.pop();
                continue;
            }

            l = t.call(e, c);
          } catch (e) {
            l = [6, e];
            o = 0;
          } finally {
            n = i = 0;
          }

        if (5 & l[0]) throw l[1];
        return {
          value: l[0] ? l[1] : undefined,
          done: true,
        };
      }
    },
  p =
    (this && this.__rest) ||
    function (e, t) {
      var n = {};

      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);

      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;

        for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
      }

      return n;
    },
  v = module131.default({
    supportedCommands: ['goBack', 'goForward', 'reload', 'stopLoading', 'injectJavaScript', 'requestFocus', 'postMessage', 'loadUrl'],
  }),
  g = ReactNative.Image.resolveAssetSource,
  y = function (e) {
    var t = e;
    if ('normal' === t) t = 0.998;
    else if ('fast' === t) t = 0.99;
    return t;
  },
  b = ReactNative.NativeModules.RNCWebViewManager,
  h = function (e, n) {
    var o = module125.useRef(e);

    if (o.current !== e) {
      console.warn('Changes to property '.concat(n, ' do nothing after the initial render.'));
      o.current = e;
    }
  },
  module773 = module125.forwardRef(function (i, s) {
    var u = i.javaScriptEnabled,
      f = undefined === u || u,
      module773 = i.cacheEnabled,
      w = undefined === module773 || module773,
      L = i.originWhitelist,
      module773 = undefined === L ? require('./773').defaultOriginWhitelist : L,
      E = i.useSharedProcessPool,
      M = undefined === E || E,
      j = i.textInteractionEnabled,
      O = undefined === j || j,
      F = i.injectedJavaScript,
      k = i.injectedJavaScriptBeforeContentLoaded,
      R = i.injectedJavaScriptForMainFrameOnly,
      C = undefined === R || R,
      W = i.injectedJavaScriptBeforeContentLoadedForMainFrameOnly,
      D = undefined === W || W,
      I = i.startInLoadingState,
      J = i.onNavigationStateChange,
      q = i.onLoadStart,
      _ = i.onError,
      x = i.onLoad,
      A = i.onLoadEnd,
      T = i.onLoadProgress,
      B = i.onContentProcessDidTerminate,
      N = i.onFileDownload,
      H = i.onHttpError,
      U = i.onMessage,
      V = i.renderLoading,
      G = i.renderError,
      K = i.style,
      z = i.containerStyle,
      Q = i.source,
      X = i.nativeConfig,
      Y = i.allowsInlineMediaPlayback,
      Z = i.allowsAirPlayForMediaPlayback,
      $ = i.mediaPlaybackRequiresUserAction,
      ee = i.dataDetectorTypes,
      te = i.incognito,
      ne = i.decelerationRate,
      oe = i.onShouldStartLoadWithRequest,
      re = p(i, [
        'javaScriptEnabled',
        'cacheEnabled',
        'originWhitelist',
        'useSharedProcessPool',
        'textInteractionEnabled',
        'injectedJavaScript',
        'injectedJavaScriptBeforeContentLoaded',
        'injectedJavaScriptForMainFrameOnly',
        'injectedJavaScriptBeforeContentLoadedForMainFrameOnly',
        'startInLoadingState',
        'onNavigationStateChange',
        'onLoadStart',
        'onError',
        'onLoad',
        'onLoadEnd',
        'onLoadProgress',
        'onContentProcessDidTerminate',
        'onFileDownload',
        'onHttpError',
        'onMessage',
        'renderLoading',
        'renderError',
        'style',
        'containerStyle',
        'source',
        'nativeConfig',
        'allowsInlineMediaPlayback',
        'allowsAirPlayForMediaPlayback',
        'mediaPlaybackRequiresUserAction',
        'dataDetectorTypes',
        'incognito',
        'decelerationRate',
        'onShouldStartLoadWithRequest',
      ]),
      ae = module125.useRef(null),
      ie = module125.useCallback(
        function (e, t, n) {
          if (undefined === n) n = 0;
          ((null === X || undefined === X ? undefined : X.viewManager) || b).startLoadWithResult(!!e, n);
        },
        [null === X || undefined === X ? undefined : X.viewManager]
      ),
      module773 = require('./773').useWebWiewLogic({
        onNavigationStateChange: J,
        onLoad: x,
        onError: _,
        onHttpErrorProp: H,
        onLoadEnd: A,
        onLoadProgress: T,
        onLoadStart: q,
        onMessageProp: U,
        startInLoadingState: I,
        originWhitelist: module773,
        onShouldStartLoadWithRequestProp: oe,
        onShouldStartLoadWithRequestCallback: ie,
        onContentProcessDidTerminateProp: B,
      }),
      ce = module773.onLoadingStart,
      de = module773.onShouldStartLoadWithRequest,
      se = module773.onMessage,
      ue = module773.viewState,
      fe = module773.setViewState,
      pe = module773.lastErrorEvent,
      ve = module773.onHttpError,
      ge = module773.onLoadingError,
      ye = module773.onLoadingFinish,
      be = module773.onLoadingProgress,
      he = module773.onContentProcessDidTerminate;

    module125.useImperativeHandle(
      s,
      function () {
        return {
          goForward: function () {
            return v.goForward(ae.current);
          },
          goBack: function () {
            return v.goBack(ae.current);
          },
          reload: function () {
            fe('LOADING');
            v.reload(ae.current);
          },
          stopLoading: function () {
            return v.stopLoading(ae.current);
          },
          postMessage: function (e) {
            return v.postMessage(ae.current, e);
          },
          injectJavaScript: function (e) {
            return v.injectJavaScript(ae.current, e);
          },
          requestFocus: function () {
            return v.requestFocus(ae.current);
          },
        };
      },
      [fe, ae]
    );
    h(Y, 'allowsInlineMediaPlayback');
    h(Z, 'allowsAirPlayForMediaPlayback');
    h(te, 'incognito');
    h($, 'mediaPlaybackRequiresUserAction');
    h(ee, 'dataDetectorTypes');
    var Se = null;
    if ('LOADING' === ue) Se = (V || require('./773').defaultRenderLoading)();
    else if ('ERROR' === ue) {
      module20.default(null != pe, 'lastErrorEvent expected to be non-null');
      Se = (G || require('./773').defaultRenderError)(pe.domain, pe.code, pe.description);
    } else if ('IDLE' !== ue) console.error('RNCWebView invalid state encountered: '.concat(ue));
    var we = [module772.default.container, module772.default.webView, K],
      Le = [module772.default.container, z],
      Pe = y(ne),
      Ee = (null === X || undefined === X ? undefined : X.component) || module771.default,
      me = module125.default.createElement(
        Ee,
        module178.default(
          {
            key: 'webViewKey',
          },
          re,
          {
            javaScriptEnabled: f,
            cacheEnabled: w,
            useSharedProcessPool: M,
            textInteractionEnabled: O,
            decelerationRate: Pe,
            messagingEnabled: 'function' == typeof U,
            onLoadingError: ge,
            onLoadingFinish: ye,
            onLoadingProgress: be,
            onFileDownload: N,
            onLoadingStart: ce,
            onHttpError: ve,
            onMessage: se,
            onShouldStartLoadWithRequest: de,
            onContentProcessDidTerminate: he,
            injectedJavaScript: F,
            injectedJavaScriptBeforeContentLoaded: k,
            injectedJavaScriptForMainFrameOnly: C,
            injectedJavaScriptBeforeContentLoadedForMainFrameOnly: D,
            dataDetectorTypes: ee,
            allowsAirPlayForMediaPlayback: Z,
            allowsInlineMediaPlayback: Y,
            incognito: te,
            mediaPlaybackRequiresUserAction: $,
            ref: ae,
            source: g(Q),
            style: we,
          },
          null === X || undefined === X ? undefined : X.props
        )
      );
    return module125.default.createElement(
      ReactNative.View,
      {
        style: Le,
      },
      me,
      Se
    );
  }),
  w = Object.assign(module773, {
    isFileUploadSupported: function () {
      return u(undefined, undefined, undefined, function () {
        return f(this, function (e) {
          return [2, true];
        });
      });
    },
  });

exports.default = w;

var module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module424 = require('@babel/runtime/helpers/interopRequireDefault')(require('./424')),
  module427 = require('@babel/runtime/helpers/interopRequireDefault')(require('./427')),
  module428 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var s = l(n);
    if (s && s.has(t)) return s.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, o, f);
        else u[o] = t[o];
      }

    u.default = t;
    if (s) s.set(t, u);
    return u;
  })(require('./428'));

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (l = function (t) {
    return t ? s : n;
  })(t);
}

var f = module8.default(function n(l) {
  var f,
    _ = this;

  module7.default(this, n);
  this._nativeEventSubscription = null;
  this._subscriptions = new Set();
  this._latestState = null;

  this._handleNativeStateUpdate = function (t) {
    _._internetReachability.update(t);

    var n = _._convertState(t);

    _._latestState = n;

    _._subscriptions.forEach(function (t) {
      return t(n);
    });
  };

  this._handleInternetReachabilityUpdate = function (t) {
    if (_._latestState) {
      var n = Object.assign({}, _._latestState, {
        isInternetReachable: t,
      });
      _._latestState = n;

      _._subscriptions.forEach(function (t) {
        return t(n);
      });
    }
  };

  this._fetchCurrentState =
    ((f = module271.default(function* (t) {
      var n = yield module424.default.getCurrentState(t);

      _._internetReachability.update(n);

      var s = _._convertState(n);

      if (!t) {
        _._latestState = s;

        _._subscriptions.forEach(function (t) {
          return t(s);
        });
      }

      return s;
    })),
    function (t) {
      return f.apply(this, arguments);
    });

  this._convertState = function (t) {
    return 'boolean' == typeof t.isInternetReachable
      ? t
      : Object.assign({}, t, {
          isInternetReachable: _._internetReachability.currentState(),
        });
  };

  this.latest = function (t) {
    return t ? _._fetchCurrentState(t) : _._latestState ? Promise.resolve(_._latestState) : _._fetchCurrentState();
  };

  this.add = function (t) {
    _._subscriptions.add(t);

    if (_._latestState) t(_._latestState);
    else _.latest().then(t);
  };

  this.remove = function (t) {
    _._subscriptions.delete(t);
  };

  this.tearDown = function () {
    if (_._internetReachability) _._internetReachability.tearDown();
    if (_._nativeEventSubscription) _._nativeEventSubscription.remove();

    _._subscriptions.clear();
  };

  this._internetReachability = new module427.default(l, this._handleInternetReachabilityUpdate);
  this._nativeEventSubscription = module424.default.eventEmitter.addListener(module428.DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);

  this._fetchCurrentState();
});
exports.default = f;

var module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  c = module8.default(function t(c, l) {
    var u = this;
    module7.default(this, t);
    this._isInternetReachable = undefined;
    this._currentInternetReachabilityCheckHandler = null;
    this._currentTimeoutHandle = null;

    this._setIsInternetReachable = function (t) {
      if (u._isInternetReachable !== t) {
        u._isInternetReachable = t;

        u._listener(u._isInternetReachable);
      }
    };

    this._setExpectsConnection = function (t) {
      if (null !== u._currentInternetReachabilityCheckHandler) {
        u._currentInternetReachabilityCheckHandler.cancel();

        u._currentInternetReachabilityCheckHandler = null;
      }

      if (null !== u._currentTimeoutHandle) {
        clearTimeout(u._currentTimeoutHandle);
        u._currentTimeoutHandle = null;
      }

      if (t && u._configuration.reachabilityShouldRun()) {
        if (!u._isInternetReachable) u._setIsInternetReachable(null);
        u._currentInternetReachabilityCheckHandler = u._checkInternetReachability();
      } else u._setIsInternetReachable(false);
    };

    this._checkInternetReachability = function () {
      var t,
        n = fetch(u._configuration.reachabilityUrl, {
          method: u._configuration.reachabilityMethod,
          cache: 'no-cache',
        }),
        c = new Promise(function (n, c) {
          t = setTimeout(function () {
            return c('timedout');
          }, u._configuration.reachabilityRequestTimeout);
        }),
        l = function () {},
        o = new Promise(function (t, n) {
          l = function () {
            return n('canceled');
          };
        });

      return {
        promise: Promise.race([n, c, o])
          .then(function (t) {
            return u._configuration.reachabilityTest(t);
          })
          .then(function (t) {
            u._setIsInternetReachable(t);

            var n = u._isInternetReachable ? u._configuration.reachabilityLongTimeout : u._configuration.reachabilityShortTimeout;
            u._currentTimeoutHandle = setTimeout(u._checkInternetReachability, n);
          })
          .catch(function (t) {
            if ('canceled' !== t) {
              u._setIsInternetReachable(false);

              u._currentTimeoutHandle = setTimeout(u._checkInternetReachability, u._configuration.reachabilityShortTimeout);
            }
          })
          .then(
            function () {
              clearTimeout(t);
            },
            function (n) {
              throw (clearTimeout(t), n);
            }
          ),
        cancel: l,
      };
    };

    this.update = function (t) {
      if ('boolean' == typeof t.isInternetReachable && u._configuration.useNativeReachability) u._setIsInternetReachable(t.isInternetReachable);
      else u._setExpectsConnection(t.isConnected);
    };

    this.currentState = function () {
      return u._isInternetReachable;
    };

    this.tearDown = function () {
      if (null !== u._currentInternetReachabilityCheckHandler) {
        u._currentInternetReachabilityCheckHandler.cancel();

        u._currentInternetReachabilityCheckHandler = null;
      }

      if (null !== u._currentTimeoutHandle) {
        clearTimeout(u._currentTimeoutHandle);
        u._currentTimeoutHandle = null;
      }
    };

    this._configuration = c;
    this._listener = l;
  });

exports.default = c;

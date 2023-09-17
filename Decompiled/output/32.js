var module36 = (function () {
  function module7() {
    require('./7')(this, module7);

    this._lazyCallableModules = {};
    this._queue = [[], [], [], 0];
    this._successCallbacks = new Map();
    this._failureCallbacks = new Map();
    this._callID = 0;
    this._lastFlush = 0;
    this._eventLoopStartTime = Date.now();
    this._reactNativeMicrotasksCallback = null;
    this.callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue.bind(this);
    this.flushedQueue = this.flushedQueue.bind(this);
    this.invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue.bind(this);
  }

  require('./8')(
    module7,
    [
      {
        key: 'callFunctionReturnFlushedQueue',
        value: function (t, l, s) {
          var u = this;

          this.__guard(function () {
            u.__callFunction(t, l, s);
          });

          return this.flushedQueue();
        },
      },
      {
        key: 'invokeCallbackAndReturnFlushedQueue',
        value: function (t, l) {
          var s = this;

          this.__guard(function () {
            s.__invokeCallback(t, l);
          });

          return this.flushedQueue();
        },
      },
      {
        key: 'flushedQueue',
        value: function () {
          var t = this;

          this.__guard(function () {
            t.__callReactNativeMicrotasks();
          });

          var l = this._queue;
          this._queue = [[], [], [], this._callID];
          return l[0].length ? l : null;
        },
      },
      {
        key: 'getEventLoopRunningTime',
        value: function () {
          return Date.now() - this._eventLoopStartTime;
        },
      },
      {
        key: 'registerCallableModule',
        value: function (t, l) {
          this._lazyCallableModules[t] = function () {
            return l;
          };
        },
      },
      {
        key: 'registerLazyCallableModule',
        value: function (t, l) {
          var s,
            u = l;

          this._lazyCallableModules[t] = function () {
            if (u) {
              s = u();
              u = null;
            }

            return s;
          };
        },
      },
      {
        key: 'getCallableModule',
        value: function (t) {
          var l = this._lazyCallableModules[t];
          return l ? l() : null;
        },
      },
      {
        key: 'callNativeSyncHook',
        value: function (t, l, s, u, n) {
          this.processCallbacks(t, l, s, u, n);
          return globals.nativeCallSyncHook(t, l, s);
        },
      },
      {
        key: 'processCallbacks',
        value: function (t, l, s, u, n) {
          if (u || n) {
            if (u) s.push(this._callID << 1);
            if (n) s.push((this._callID << 1) | 1);

            this._successCallbacks.set(this._callID, n);

            this._failureCallbacks.set(this._callID, u);
          }

          this._callID++;
        },
      },
      {
        key: 'enqueueNativeCall',
        value: function (t, l, s, u, n) {
          this.processCallbacks(t, l, s, u, n);

          this._queue[0].push(t);

          this._queue[1].push(l);

          this._queue[2].push(s);

          var o = Date.now();

          if (globals.nativeFlushQueueImmediate && o - this._lastFlush >= 5) {
            var h = this._queue;
            this._queue = [[], [], [], this._callID];
            this._lastFlush = o;
            globals.nativeFlushQueueImmediate(h);
          }

          require('./33').counterEvent('pending_js_to_native_queue', this._queue[0].length);

          if (this.__spy)
            this.__spy({
              type: 1,
              module: t + '',
              method: l,
              args: s,
            });
        },
      },
      {
        key: 'createDebugLookup',
        value: function (t, l, s) {},
      },
      {
        key: 'setReactNativeMicrotasksCallback',
        value: function (t) {
          this._reactNativeMicrotasksCallback = t;
        },
      },
      {
        key: '__guard',
        value: function (t) {
          if (this.__shouldPauseOnThrow()) t();
          else
            try {
              t();
            } catch (t) {
              require('./34').reportFatalError(t);
            }
        },
      },
      {
        key: '__shouldPauseOnThrow',
        value: function () {
          return 'undefined' != typeof DebuggerInternal && true === DebuggerInternal.shouldPauseOnThrow;
        },
      },
      {
        key: '__callReactNativeMicrotasks',
        value: function () {
          require('./33').beginEvent('JSTimers.callReactNativeMicrotasks()');

          if (null != this._reactNativeMicrotasksCallback) this._reactNativeMicrotasksCallback();

          require('./33').endEvent();
        },
      },
      {
        key: '__callFunction',
        value: function (t, l, s) {
          this._lastFlush = Date.now();
          this._eventLoopStartTime = this._lastFlush;
          if (this.__spy) require('./33').beginEvent(t + '.' + l + '(' + require('./35').default(s) + ')');
          else require('./33').beginEvent(t + '.' + l + '(...)');
          if (this.__spy)
            this.__spy({
              type: 0,
              module: t,
              method: l,
              args: s,
            });
          var u = this.getCallableModule(t);

          require('./20')(
            !!u,
            'Module ' +
              t +
              ' is not a registered callable module (calling ' +
              l +
              '). A frequent cause of the error is that the application entry file path is incorrect.\n      This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.'
          );

          require('./20')(!!u[l], 'Method ' + l + ' does not exist on module ' + t);

          u[l].apply(u, s);

          require('./33').endEvent();
        },
      },
      {
        key: '__invokeCallback',
        value: function (t, l) {
          this._lastFlush = Date.now();
          this._eventLoopStartTime = this._lastFlush;
          var s = t >>> 1,
            u = 1 & t ? this._successCallbacks.get(s) : this._failureCallbacks.get(s);

          if (u) {
            this._successCallbacks.delete(s);

            this._failureCallbacks.delete(s);

            u.apply(undefined, require('./36')(l));
          }
        },
      },
    ],
    [
      {
        key: 'spy',
        value: function (l) {
          module7.prototype.__spy =
            true === l
              ? function (t) {
                  console.log((0 === t.type ? 'N->JS' : 'JS->N') + ' : ' + (null != t.module ? t.module + '.' : '') + t.method + '(' + JSON.stringify(t.args) + ')');
                }
              : false === l
              ? null
              : l;
        },
      },
    ]
  );

  return module7;
})();

module.exports = module36;

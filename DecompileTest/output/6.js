var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module12 = require('@babel/runtime/helpers/interopRequireDefault')(require('./12')),
  module19 = require('@babel/runtime/helpers/interopRequireDefault')(require('./19')),
  o = function () {
    return true;
  },
  u = (function () {
    function module20(i) {
      module7.default(this, module20);
      this._subscriber = new module19.default();

      if (null != i) {
        console.warn('EventEmitter(...): Constructor argument is deprecated.');
        this._subscriber = i;
      }
    }

    module8.default(module20, [
      {
        key: 'addListener',
        value: function (t, i, s) {
          return this._subscriber.addSubscription(t, new module12.default(this, this._subscriber, i, s));
        },
      },
      {
        key: 'removeAllListeners',
        value: function (t) {
          this._subscriber.removeAllSubscriptions(t);
        },
      },
      {
        key: 'removeSubscription',
        value: function (t) {
          console.warn('EventEmitter.removeSubscription(...): Method has been deprecated. Please instead use `remove()` on the subscription itself.');

          this.__removeSubscription(t);
        },
      },
      {
        key: '__removeSubscription',
        value: function (t) {
          require('./20')(t.emitter === this, 'Subscription does not belong to this emitter.');

          this._subscriber.removeSubscription(t);
        },
      },
      {
        key: 'listenerCount',
        value: function (t) {
          var i = this._subscriber.getSubscriptionsForType(t);

          return i ? i.filter(o).length : 0;
        },
      },
      {
        key: 'emit',
        value: function (t) {
          var i = this._subscriber.getSubscriptionsForType(t);

          if (i) {
            for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) s[o - 1] = arguments[o];

            for (var u = 0, c = i.length; u < c; u++) {
              var b = i[u];
              if (b && b.listener) b.listener.apply(b.context, s);
            }
          }
        },
      },
      {
        key: 'removeListener',
        value: function (t, i) {
          console.warn(
            "EventEmitter.removeListener('" + t + "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."
          );

          var n = this._subscriber.getSubscriptionsForType(t);

          if (n)
            for (var s = 0, o = n.length; s < o; s++) {
              var u = n[s];
              if (u && u.listener === i) u.remove();
            }
        },
      },
    ]);
    return module20;
  })();

module.exports = u;

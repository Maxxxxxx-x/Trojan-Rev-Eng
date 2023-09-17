var module20 = (function () {
  function module7() {
    require('./7')(this, module7);

    this._subscriptionsForType = {};
  }

  require('./8')(module7, [
    {
      key: 'addSubscription',
      value: function (s, t) {
        require('./20')(t.subscriber === this, 'The subscriber of the subscription is incorrectly set.');

        if (!this._subscriptionsForType[s]) this._subscriptionsForType[s] = [];
        var n = this._subscriptionsForType[s].length;

        this._subscriptionsForType[s].push(t);

        t.eventType = s;
        t.key = n;
        return t;
      },
    },
    {
      key: 'removeAllSubscriptions',
      value: function (s) {
        if (null == s) this._subscriptionsForType = {};
        else delete this._subscriptionsForType[s];
      },
    },
    {
      key: 'removeSubscription',
      value: function (s) {
        var t = s.eventType,
          n = s.key,
          o = this._subscriptionsForType[t];
        if (o) delete o[n];
      },
    },
    {
      key: 'getSubscriptionsForType',
      value: function (s) {
        return this._subscriptionsForType[s];
      },
    },
  ]);

  return module7;
})();

module.exports = module20;

var module8 = (function () {
  function module7(s) {
    require('./7')(this, module7);

    this.subscriber = s;
  }

  require('./8')(module7, [
    {
      key: 'remove',
      value: function () {
        this.subscriber.removeSubscription(this);
      },
    },
  ]);

  return module7;
})();

module.exports = module8;

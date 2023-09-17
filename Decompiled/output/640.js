function n(n) {
  require('./638').call(this, null == n ? 'canceled' : n, require('./638').ERR_CANCELED);

  this.name = 'CanceledError';
}

require('./633').inherits(n, require('./638'), {
  __CANCEL__: true,
});

module.exports = n;

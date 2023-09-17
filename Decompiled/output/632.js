function n() {
  this.handlers = [];
}

n.prototype.use = function (n, t, s) {
  this.handlers.push({
    fulfilled: n,
    rejected: t,
    synchronous: !!s && s.synchronous,
    runWhen: s ? s.runWhen : null,
  });
  return this.handlers.length - 1;
};

n.prototype.eject = function (n) {
  if (this.handlers[n]) this.handlers[n] = null;
};

n.prototype.forEach = function (n) {
  require('./633').forEach(this.handlers, function (t) {
    if (null !== t) n(t);
  });
};

module.exports = n;

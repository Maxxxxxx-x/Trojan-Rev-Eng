function n(n) {
  if ('function' != typeof n) throw new TypeError('executor must be a function.');
  var s;
  this.promise = new Promise(function (n) {
    s = n;
  });
  var t = this;
  this.promise.then(function (n) {
    if (t._listeners) {
      var s,
        i = t._listeners.length;

      for (s = 0; s < i; s++) t._listeners[s](n);

      t._listeners = null;
    }
  });

  this.promise.then = function (n) {
    var s,
      i = new Promise(function (n) {
        t.subscribe(n);
        s = n;
      }).then(n);

    i.cancel = function () {
      t.unsubscribe(s);
    };

    return i;
  };

  n(function (n) {
    if (!t.reason) {
      t.reason = new (require('./640'))(n);
      s(t.reason);
    }
  });
}

n.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};

n.prototype.subscribe = function (n) {
  if (this.reason) n(this.reason);
  else if (this._listeners) this._listeners.push(n);
  else this._listeners = [n];
};

n.prototype.unsubscribe = function (n) {
  if (this._listeners) {
    var s = this._listeners.indexOf(n);

    if (-1 !== s) this._listeners.splice(s, 1);
  }
};

n.source = function () {
  var s;
  return {
    token: new n(function (n) {
      s = n;
    }),
    cancel: s,
  };
};

module.exports = n;

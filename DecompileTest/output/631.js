function t(t) {
  this.defaults = t;
  this.interceptors = {
    request: new (require('./632'))(),
    response: new (require('./632'))(),
  };
}

t.prototype.request = function (t, o) {
  if ('string' == typeof t) (o = o || {}).url = t;
  else o = t || {};
  if ((o = require('./635')(this.defaults, o)).method) o.method = o.method.toLowerCase();
  else if (this.defaults.method) o.method = this.defaults.method.toLowerCase();
  else o.method = 'get';
  var n = o.transitional;
  if (undefined !== n)
    require('./636').assertOptions(
      n,
      {
        silentJSONParsing: require('./636').validators.transitional(require('./636').validators.boolean),
        forcedJSONParsing: require('./636').validators.transitional(require('./636').validators.boolean),
        clarifyTimeoutError: require('./636').validators.transitional(require('./636').validators.boolean),
      },
      false
    );
  var s = [],
    h = true;
  this.interceptors.request.forEach(function (t) {
    if (!('function' == typeof t.runWhen && false === t.runWhen(o))) {
      h = h && t.synchronous;
      s.unshift(t.fulfilled, t.rejected);
    }
  });
  var u,
    f = [];

  if (
    (this.interceptors.response.forEach(function (t) {
      f.push(t.fulfilled, t.rejected);
    }),
    !h)
  ) {
    var module639 = [require('./639'), undefined];

    for (Array.prototype.unshift.apply(module639, s), module639 = module639.concat(f), u = Promise.resolve(o); module639.length; ) u = u.then(module639.shift(), module639.shift());

    return u;
  }

  for (var c = o; s.length; ) {
    var p = s.shift(),
      v = s.shift();

    try {
      c = p(c);
    } catch (t) {
      v(t);
      break;
    }
  }

  try {
    u = require('./639')(c);
  } catch (t) {
    return Promise.reject(t);
  }

  for (; f.length; ) u = u.then(f.shift(), f.shift());

  return u;
};

t.prototype.getUri = function (t) {
  t = require('./635')(this.defaults, t);

  var module644 = require('./644')(t.baseURL, t.url);

  return require('./647')(module644, t.params, t.paramsSerializer);
};

require('./633').forEach(['delete', 'get', 'head', 'options'], function (o) {
  t.prototype[o] = function (t, n) {
    return this.request(
      require('./635')(n || {}, {
        method: o,
        url: t,
        data: (n || {}).data,
      })
    );
  };
});

require('./633').forEach(['post', 'put', 'patch'], function (o) {
  function n(t) {
    return function (n, s, h) {
      return this.request(
        require('./635')(h || {}, {
          method: o,
          headers: t
            ? {
                'Content-Type': 'multipart/form-data',
              }
            : {},
          url: n,
          data: s,
        })
      );
    };
  }

  t.prototype[o] = n();
  t.prototype[o + 'Form'] = n(true);
});

module.exports = t;

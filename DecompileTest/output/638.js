function t(t, s, n, o, E) {
  Error.call(this);
  this.message = t;
  this.name = 'AxiosError';
  if (s) this.code = s;
  if (n) this.config = n;
  if (o) this.request = o;
  if (E) this.response = E;
}

require('./633').inherits(t, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});

var s = t.prototype,
  n = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
].forEach(function (t) {
  n[t] = {
    value: t,
  };
});
Object.defineProperties(t, n);
Object.defineProperty(s, 'isAxiosError', {
  value: true,
});

t.from = function (n, o, E, c, u, R) {
  var h = Object.create(s);

  require('./633').toFlatObject(n, h, function (t) {
    return t !== Error.prototype;
  });

  t.call(h, n.message, o, E, c, u);
  h.name = n.name;
  if (R) Object.assign(h, R);
  return h;
};

module.exports = t;

var t = Symbol('encodeFragmentIdentifier');

function n(t) {
  switch (t.arrayFormat) {
    case 'index':
      return function (n) {
        return function (a, o) {
          var c = a.length;
          return undefined === o || (t.skipNull && null === o) || (t.skipEmptyString && '' === o)
            ? a
            : [].concat(require('./36')(a), null === o ? [[u(n, t), '[', c, ']'].join('')] : [[u(n, t), '[', u(c, t), ']=', u(o, t)].join('')]);
        };
      };

    case 'bracket':
      return function (n) {
        return function (a, o) {
          return undefined === o || (t.skipNull && null === o) || (t.skipEmptyString && '' === o)
            ? a
            : [].concat(require('./36')(a), null === o ? [[u(n, t), '[]'].join('')] : [[u(n, t), '[]=', u(o, t)].join('')]);
        };
      };

    case 'colon-list-separator':
      return function (n) {
        return function (a, o) {
          return undefined === o || (t.skipNull && null === o) || (t.skipEmptyString && '' === o)
            ? a
            : [].concat(require('./36')(a), null === o ? [[u(n, t), ':list='].join('')] : [[u(n, t), ':list=', u(o, t)].join('')]);
        };
      };

    case 'comma':
    case 'separator':
    case 'bracket-separator':
      var n = 'bracket-separator' === t.arrayFormat ? '[]=' : '=';
      return function (a) {
        return function (o, c) {
          if (undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)) return o;
          else {
            c = null === c ? '' : c;
            return 0 === o.length ? [[u(a, t), n, u(c, t)].join('')] : [[o, u(c, t)].join(t.arrayFormatSeparator)];
          }
        };
      };

    default:
      return function (n) {
        return function (a, o) {
          return undefined === o || (t.skipNull && null === o) || (t.skipEmptyString && '' === o)
            ? a
            : [].concat(require('./36')(a), null === o ? [u(n, t)] : [[u(n, t), '=', u(o, t)].join('')]);
        };
      };
  }
}

function a(t) {
  var n;

  switch (t.arrayFormat) {
    case 'index':
      return function (t, a, o) {
        n = /\[(\d*)\]$/.exec(t);
        t = t.replace(/\[\d*\]$/, '');

        if (n) {
          if (undefined === o[t]) o[t] = {};
          o[t][n[1]] = a;
        } else o[t] = a;
      };

    case 'bracket':
      return function (t, a, o) {
        n = /(\[\])$/.exec(t);
        t = t.replace(/\[\]$/, '');
        if (n) undefined !== o[t] ? (o[t] = [].concat(o[t], a)) : (o[t] = [a]);
        else o[t] = a;
      };

    case 'colon-list-separator':
      return function (t, a, o) {
        n = /(:list)$/.exec(t);
        t = t.replace(/:list$/, '');
        if (n) undefined !== o[t] ? (o[t] = [].concat(o[t], a)) : (o[t] = [a]);
        else o[t] = a;
      };

    case 'comma':
    case 'separator':
      return function (n, a, o) {
        var u = 'string' == typeof a && a.includes(t.arrayFormatSeparator),
          s = 'string' == typeof a && !u && c(a, t).includes(t.arrayFormatSeparator);
        a = s ? c(a, t) : a;
        var l =
          u || s
            ? a.split(t.arrayFormatSeparator).map(function (n) {
                return c(n, t);
              })
            : null === a
            ? a
            : c(a, t);
        o[n] = l;
      };

    case 'bracket-separator':
      return function (n, a, o) {
        var u = /(\[\])$/.test(n);

        if (((n = n.replace(/\[\]$/, '')), u)) {
          var s =
            null === a
              ? []
              : a.split(t.arrayFormatSeparator).map(function (n) {
                  return c(n, t);
                });
          if (undefined !== o[n]) o[n] = [].concat(o[n], s);
          else o[n] = s;
        } else o[n] = a ? c(a, t) : a;
      };

    default:
      return function (t, n, a) {
        if (undefined !== a[t]) a[t] = [].concat(a[t], n);
        else a[t] = n;
      };
  }
}

function o(t) {
  if ('string' != typeof t || 1 !== t.length) throw new TypeError('arrayFormatSeparator must be single character string');
}

function u(t, n) {
  return n.encode ? (n.strict ? require('./504')(t) : encodeURIComponent(t)) : t;
}

function c(t, n) {
  return n.decode ? require('./505')(t) : t;
}

function s(t) {
  return Array.isArray(t)
    ? t.sort()
    : 'object' == typeof t
    ? s(Object.keys(t))
        .sort(function (t, n) {
          return Number(t) - Number(n);
        })
        .map(function (n) {
          return t[n];
        })
    : t;
}

function l(t) {
  var n = t.indexOf('#');
  if (-1 !== n) t = t.slice(0, n);
  return t;
}

function f(t) {
  var n = '',
    a = t.indexOf('#');
  if (-1 !== a) n = t.slice(a);
  return n;
}

function p(t) {
  var n = (t = l(t)).indexOf('?');
  return -1 === n ? '' : t.slice(n + 1);
}

function y(t, n) {
  if (n.parseNumbers && !Number.isNaN(Number(t)) && 'string' == typeof t && '' !== t.trim()) t = Number(t);
  else if (!(!n.parseBooleans || null === t || ('true' !== t.toLowerCase() && 'false' !== t.toLowerCase()))) t = 'true' === t.toLowerCase();
  return t;
}

function v(t, n) {
  o(
    (n = Object.assign(
      {
        decode: true,
        sort: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: false,
        parseBooleans: false,
      },
      n
    )).arrayFormatSeparator
  );
  var u = a(n),
    l = Object.create(null);
  if ('string' != typeof t) return l;
  if (!(t = t.trim().replace(/^[?#&]/, ''))) return l;

  for (var f of t.split('&'))
    if ('' !== f) {
      var module506 = require('./506')(n.decode ? f.replace(/\+/g, ' ') : f, '='),
        module25 = require('./25')(module506, 2),
        b = module25[0],
        j = module25[1];

      j = undefined === j ? null : ['comma', 'separator', 'bracket-separator'].includes(n.arrayFormat) ? j : c(j, n);
      u(c(b, n), j, l);
    }

  for (var k of Object.keys(l)) {
    var F = l[k];
    if ('object' == typeof F && null !== F) for (var O of Object.keys(F)) F[O] = y(F[O], n);
    else l[k] = y(F, n);
  }

  return false === n.sort
    ? l
    : (true === n.sort ? Object.keys(l).sort() : Object.keys(l).sort(n.sort)).reduce(function (t, n) {
        var a = l[n];
        if (Boolean(a) && 'object' == typeof a && !Array.isArray(a)) t[n] = s(a);
        else t[n] = a;
        return t;
      }, Object.create(null));
}

exports.extract = p;
exports.parse = v;

exports.stringify = function (t, a) {
  if (!t) return '';
  o(
    (a = Object.assign(
      {
        encode: true,
        strict: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
      },
      a
    )).arrayFormatSeparator
  );

  var c = function (n) {
      return a.skipNull ? null === (o = t[n]) || undefined === o : a.skipEmptyString && '' === t[n];
      var o;
    },
    s = n(a),
    l = {};

  for (var f of Object.keys(t)) c(f) || (l[f] = t[f]);

  var p = Object.keys(l);
  if (false !== a.sort) p.sort(a.sort);
  return p
    .map(function (n) {
      var o = t[n];
      return undefined === o
        ? ''
        : null === o
        ? u(n, a)
        : Array.isArray(o)
        ? 0 === o.length && 'bracket-separator' === a.arrayFormat
          ? u(n, a) + '[]'
          : o.reduce(s(n), []).join('&')
        : u(n, a) + '=' + u(o, a);
    })
    .filter(function (t) {
      return t.length > 0;
    })
    .join('&');
};

exports.parseUrl = function (t, n) {
  n = Object.assign(
    {
      decode: true,
    },
    n
  );

  var module506 = require('./506')(t, '#'),
    module25 = require('./25')(module506, 2),
    u = module25[0],
    s = module25[1];

  return Object.assign(
    {
      url: u.split('?')[0] || '',
      query: v(p(t), n),
    },
    n && n.parseFragmentIdentifier && s
      ? {
          fragmentIdentifier: c(s, n),
        }
      : {}
  );
};

exports.stringifyUrl = function (n, a) {
  a = Object.assign(
    require('./241')(
      {
        encode: true,
        strict: true,
      },
      t,
      true
    ),
    a
  );
  var o = l(n.url).split('?')[0] || '',
    c = exports.extract(n.url),
    s = exports.parse(c, {
      sort: false,
    }),
    p = Object.assign(s, n.query),
    y = exports.stringify(p, a);
  if (y) y = '?' + y;
  var v = f(n.url);
  if (n.fragmentIdentifier) v = '#' + (a[t] ? u(n.fragmentIdentifier, a) : n.fragmentIdentifier);
  return '' + o + y + v;
};

exports.pick = function (n, a, o) {
  o = Object.assign(
    require('./241')(
      {
        parseFragmentIdentifier: true,
      },
      t,
      false
    ),
    o
  );
  var u = exports.parseUrl(n, o),
    c = u.url,
    s = u.query,
    l = u.fragmentIdentifier;
  return exports.stringifyUrl(
    {
      url: c,
      query: require('./507')(s, a),
      fragmentIdentifier: l,
    },
    o
  );
};

exports.exclude = function (t, n, a) {
  var o = Array.isArray(n)
    ? function (t) {
        return !n.includes(t);
      }
    : function (t, a) {
        return !n(t, a);
      };
  return exports.pick(t, o, a);
};

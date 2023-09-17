var t = Object.create(null),
  n = Object.prototype.toString,
  o = function (o) {
    var i = n.call(o);
    return t[i] || (t[i] = i.slice(8, -1).toLowerCase());
  };

function i(t) {
  t = t.toLowerCase();
  return function (n) {
    return o(n) === t;
  };
}

function u(t) {
  return Array.isArray(t);
}

function f(t) {
  return undefined === t;
}

var c = i('ArrayBuffer');

function a(t) {
  return null !== t && 'object' == typeof t;
}

function s(t) {
  if ('object' !== o(t)) return false;
  var n = Object.getPrototypeOf(t);
  return null === n || n === Object.prototype;
}

var l = i('Date'),
  p = i('File'),
  y = i('Blob'),
  b = i('FileList');

function v(t) {
  return '[object Function]' === n.call(t);
}

var O = i('URLSearchParams');

function j(t, n) {
  if (null !== t && undefined !== t)
    if (('object' != typeof t && (t = [t]), u(t))) for (var o = 0, i = t.length; o < i; o++) n.call(null, t[o], o, t);
    else for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && n.call(null, t[f], f, t);
}

var h = 'undefined' != typeof Uint8Array && Object.getPrototypeOf(Uint8Array),
  A = function (t) {
    return h && t instanceof h;
  };

module.exports = {
  isArray: u,
  isArrayBuffer: c,
  isBuffer: function (t) {
    return null !== t && !f(t) && null !== t.constructor && !f(t.constructor) && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  },
  isFormData: function (t) {
    return t && (('function' == typeof FormData && t instanceof FormData) || '[object FormData]' === n.call(t) || (v(t.toString) && '[object FormData]' === t.toString()));
  },
  isArrayBufferView: function (t) {
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && c(t.buffer);
  },
  isString: function (t) {
    return 'string' == typeof t;
  },
  isNumber: function (t) {
    return 'number' == typeof t;
  },
  isObject: a,
  isPlainObject: s,
  isUndefined: f,
  isDate: l,
  isFile: p,
  isBlob: y,
  isFunction: v,
  isStream: function (t) {
    return a(t) && v(t.pipe);
  },
  isURLSearchParams: O,
  isStandardBrowserEnv: function () {
    return (
      ('undefined' == typeof navigator || ('ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product)) &&
      'undefined' != typeof window &&
      'undefined' != typeof document
    );
  },
  forEach: j,
  merge: function t() {
    var n = {};

    function o(o, i) {
      if (s(n[i]) && s(o)) n[i] = t(n[i], o);
      else if (s(o)) n[i] = t({}, o);
      else if (u(o)) n[i] = o.slice();
      else n[i] = o;
    }

    for (var i = 0, f = arguments.length; i < f; i++) j(arguments[i], o);

    return n;
  },
  extend: function (t, n, o) {
    j(n, function (n, i) {
      t[i] = o && 'function' == typeof n ? require('./634')(n, o) : n;
    });
    return t;
  },
  trim: function (t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
  },
  stripBOM: function (t) {
    if (65279 === t.charCodeAt(0)) t = t.slice(1);
    return t;
  },
  inherits: function (t, n, o, i) {
    t.prototype = Object.create(n.prototype, i);
    t.prototype.constructor = t;
    if (o) Object.assign(t.prototype, o);
  },
  toFlatObject: function (t, n, o) {
    var i,
      u,
      f,
      c = {};
    n = n || {};

    do {
      for (u = (i = Object.getOwnPropertyNames(t)).length; u-- > 0; ) c[(f = i[u])] || ((n[f] = t[f]), (c[f] = true));

      t = Object.getPrototypeOf(t);
    } while (t && (!o || o(t, n)) && t !== Object.prototype);

    return n;
  },
  kindOf: o,
  kindOfTest: i,
  endsWith: function (t, n, o) {
    t = String(t);
    if (undefined === o || o > t.length) o = t.length;
    o -= n.length;
    var i = t.indexOf(n, o);
    return -1 !== i && i === o;
  },
  toArray: function (t) {
    if (!t) return null;
    var n = t.length;
    if (f(n)) return null;

    for (var o = new Array(n); n-- > 0; ) o[n] = t[n];

    return o;
  },
  isTypedArray: A,
  isFileList: b,
};

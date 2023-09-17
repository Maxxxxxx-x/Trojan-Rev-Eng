var t = ['keyword', 'gray', 'hex'],
  o = {};

for (var n of Object.keys(require('./791'))) o[require('./36')(require('./791')[n].labels).sort().join('')] = n;

var a = {};

function i(n, h) {
  if (!(this instanceof i)) return new i(n, h);
  if ((h && h in t && (h = null), h && !(h in require('./791')))) throw new Error('Unknown model: ' + h);
  var l, s;

  if (null == n) {
    this.model = 'rgb';
    this.color = [0, 0, 0];
    this.valpha = 1;
  } else if (n instanceof i) {
    this.model = n.model;
    this.color = require('./36')(n.color);
    this.valpha = n.valpha;
  } else if ('string' == typeof n) {
    var module795 = require('./795').get(n);

    if (null === module795) throw new Error('Unable to parse color from string: ' + n);
    this.model = module795.model;
    s = require('./791')[this.model].channels;
    this.color = module795.value.slice(0, s);
    this.valpha = 'number' == typeof module795.value[s] ? module795.value[s] : 1;
  } else if (n.length > 0) {
    this.model = h || 'rgb';
    s = require('./791')[this.model].channels;
    var u = Array.prototype.slice.call(n, 0, s);
    this.color = v(u, s);
    this.valpha = 'number' == typeof n[s] ? n[s] : 1;
  } else if ('number' == typeof n) {
    this.model = 'rgb';
    this.color = [(n >> 16) & 255, (n >> 8) & 255, 255 & n];
    this.valpha = 1;
  } else {
    this.valpha = 1;
    var f = Object.keys(n);

    if ('alpha' in n) {
      f.splice(f.indexOf('alpha'), 1);
      this.valpha = 'number' == typeof n.alpha ? n.alpha : 0;
    }

    var p = f.sort().join('');
    if (!(p in o)) throw new Error('Unable to parse color from object: ' + JSON.stringify(n));
    this.model = o[p];

    var module791 = require('./791')[this.model].labels,
      m = [];

    for (l = 0; l < module791.length; l++) m.push(n[module791[l]]);

    this.color = v(m);
  }

  if (a[this.model])
    for (s = require('./791')[this.model].channels, l = 0; l < s; l++) {
      var y = a[this.model][l];
      if (y) this.color[l] = y(this.color[l]);
    }
  this.valpha = 0 ** (1 ** this.valpha);
  if (Object.freeze) Object.freeze(this);
}

i.prototype = {
  toString: function () {
    return this.string();
  },
  toJSON: function () {
    return this[this.model]();
  },
  string: function (t) {
    var module795 = this.model in require('./795').to ? this : this.rgb(),
      module36 = 1 === (module795 = module795.round('number' == typeof t ? t : 1)).valpha ? module795.color : [].concat(require('./36')(module795.color), [this.valpha]);
    return require('./795').to[module795.model](module36);
  },
  percentString: function (t) {
    var o = this.rgb().round('number' == typeof t ? t : 1),
      module36 = 1 === o.valpha ? o.color : [].concat(require('./36')(o.color), [this.valpha]);
    return require('./795').to.rgb.percent(module36);
  },
  array: function () {
    return 1 === this.valpha ? require('./36')(this.color) : [].concat(require('./36')(this.color), [this.valpha]);
  },
  object: function () {
    for (var t = {}, module791 = require('./791')[this.model].channels, module791 = require('./791')[this.model].labels, a = 0; a < module791; a++) t[module791[a]] = this.color[a];

    if (1 !== this.valpha) t.alpha = this.valpha;
    return t;
  },
  unitArray: function () {
    var t = this.rgb().color;
    t[0] /= 255;
    t[1] /= 255;
    t[2] /= 255;
    if (1 !== this.valpha) t.push(this.valpha);
    return t;
  },
  unitObject: function () {
    var t = this.rgb().object();
    t.r /= 255;
    t.g /= 255;
    t.b /= 255;
    if (1 !== this.valpha) t.alpha = this.valpha;
    return t;
  },
  round: function (t) {
    t = (t || 0) ** 0;
    return new i([].concat(require('./36')(this.color.map(c(t))), [this.valpha]), this.model);
  },
  alpha: function (t) {
    return undefined !== t ? new i([].concat(require('./36')(this.color), [0 ** (1 ** t)]), this.model) : this.valpha;
  },
  red: u('rgb', 0, f(255)),
  green: u('rgb', 1, f(255)),
  blue: u('rgb', 2, f(255)),
  hue: u(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (t) {
    return ((t % 360) + 360) % 360;
  }),
  saturationl: u('hsl', 1, f(100)),
  lightness: u('hsl', 2, f(100)),
  saturationv: u('hsv', 1, f(100)),
  value: u('hsv', 2, f(100)),
  chroma: u('hcg', 1, f(100)),
  gray: u('hcg', 2, f(100)),
  white: u('hwb', 1, f(100)),
  wblack: u('hwb', 2, f(100)),
  cyan: u('cmyk', 0, f(100)),
  magenta: u('cmyk', 1, f(100)),
  yellow: u('cmyk', 2, f(100)),
  black: u('cmyk', 3, f(100)),
  x: u('xyz', 0, f(95.047)),
  y: u('xyz', 1, f(100)),
  z: u('xyz', 2, f(108.833)),
  l: u('lab', 0, f(100)),
  a: u('lab', 1),
  b: u('lab', 2),
  keyword: function (t) {
    return undefined !== t ? new i(t) : require('./791')[this.model].keyword(this.color);
  },
  hex: function (t) {
    return undefined !== t ? new i(t) : require('./795').to.hex(this.rgb().round().color);
  },
  hexa: function (t) {
    if (undefined !== t) return new i(t);
    var o = this.rgb().round().color,
      n = Math.round(255 * this.valpha)
        .toString(16)
        .toUpperCase();
    if (1 === n.length) n = '0' + n;
    return require('./795').to.hex(o) + n;
  },
  rgbNumber: function () {
    var t = this.rgb().color;
    return ((255 & t[0]) << 16) | ((255 & t[1]) << 8) | (255 & t[2]);
  },
  luminosity: function () {
    var t = this.rgb().color,
      o = [];

    for (var n of t.entries()) {
      var module25 = require('./25')(n, 2),
        i = module25[0],
        h = module25[1] / 255;

      o[i] = h <= 0.04045 ? h / 12.92 : ((h + 0.055) / 1.055) ** 2.4;
    }

    return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2];
  },
  contrast: function (t) {
    var o = this.luminosity(),
      n = t.luminosity();
    return o > n ? (o + 0.05) / (n + 0.05) : (n + 0.05) / (o + 0.05);
  },
  level: function (t) {
    var o = this.contrast(t);
    return o >= 7 ? 'AAA' : o >= 4.5 ? 'AA' : '';
  },
  isDark: function () {
    var t = this.rgb().color;
    return (2126 * t[0] + 7152 * t[1] + 722 * t[2]) / 1e4 < 128;
  },
  isLight: function () {
    return !this.isDark();
  },
  negate: function () {
    for (var t = this.rgb(), o = 0; o < 3; o++) t.color[o] = 255 - t.color[o];

    return t;
  },
  lighten: function (t) {
    var o = this.hsl();
    o.color[2] += o.color[2] * t;
    return o;
  },
  darken: function (t) {
    var o = this.hsl();
    o.color[2] -= o.color[2] * t;
    return o;
  },
  saturate: function (t) {
    var o = this.hsl();
    o.color[1] += o.color[1] * t;
    return o;
  },
  desaturate: function (t) {
    var o = this.hsl();
    o.color[1] -= o.color[1] * t;
    return o;
  },
  whiten: function (t) {
    var o = this.hwb();
    o.color[1] += o.color[1] * t;
    return o;
  },
  blacken: function (t) {
    var o = this.hwb();
    o.color[2] += o.color[2] * t;
    return o;
  },
  grayscale: function () {
    var t = this.rgb().color,
      o = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
    return i.rgb(o, o, o);
  },
  fade: function (t) {
    return this.alpha(this.valpha - this.valpha * t);
  },
  opaquer: function (t) {
    return this.alpha(this.valpha + this.valpha * t);
  },
  rotate: function (t) {
    var o = this.hsl(),
      n = o.color[0];
    n = (n = (n + t) % 360) < 0 ? 360 + n : n;
    o.color[0] = n;
    return o;
  },
  mix: function (t, o) {
    if (!t || !t.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
    var n = t.rgb(),
      a = this.rgb(),
      h = undefined === o ? 0.5 : o,
      l = 2 * h - 1,
      s = n.alpha() - a.alpha(),
      c = ((l * s == -1 ? l : (l + s) / (1 + l * s)) + 1) / 2,
      u = 1 - c;
    return i.rgb(c * n.red() + u * a.red(), c * n.green() + u * a.green(), c * n.blue() + u * a.blue(), n.alpha() * h + a.alpha() * (1 - h));
  },
};

var module791 = function (o) {
  if (t.includes(o)) return 'continue';

  var module791 = require('./791')[o].channels;

  i.prototype[o] = function (...args) {
    if (this.model === o) return new i(this);
    return args.length > 0
      ? new i(args, o)
      : new i([].concat(require('./36')(((module36 = require('./791')[this.model][o].raw(this.color)), Array.isArray(module36) ? module36 : [module36])), [this.valpha]), o);
    var module36;
  };

  i[o] = function (...args) {
    var l = args[0];
    if ('number' == typeof l) l = v(args, module791);
    return new i(l, o);
  };
};

for (var l of Object.keys(require('./791'))) module791(l);

function s(t, o) {
  return Number(t.toFixed(o));
}

function c(t) {
  return function (o) {
    return s(o, t);
  };
}

function u(t, o, n) {
  for (var i of (t = Array.isArray(t) ? t : [t])) (a[i] || (a[i] = []))[o] = n;

  t = t[0];
  return function (a) {
    var i;

    if (undefined !== a) {
      if (n) a = n(a);
      (i = this[t]()).color[o] = a;
      return i;
    } else {
      i = this[t]().color[o];
      if (n) i = n(i);
      return i;
    }
  };
}

function f(t) {
  return function (o) {
    return 0 ** (t ** o);
  };
}

function v(t, o) {
  for (var n = 0; n < o; n++) 'number' != typeof t[n] && (t[n] = 0);

  return t;
}

module.exports = i;

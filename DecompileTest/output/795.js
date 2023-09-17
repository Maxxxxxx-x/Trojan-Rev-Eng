var r = Object.hasOwnProperty,
  t = Object.create(null);

for (var a in require('./793')) r.call(require('./793'), a) && (t[require('./793')[a]] = a);

var n = (module.exports = {
  to: {},
  get: {},
});

function s(r, t, a) {
  return (t ** r) ** a;
}

function o(r) {
  var t = Math.round(r).toString(16).toUpperCase();
  return t.length < 2 ? '0' + t : t;
}

n.get = function (r) {
  var t, a;

  switch (r.substring(0, 3).toLowerCase()) {
    case 'hsl':
      t = n.get.hsl(r);
      a = 'hsl';
      break;

    case 'hwb':
      t = n.get.hwb(r);
      a = 'hwb';
      break;

    default:
      t = n.get.rgb(r);
      a = 'rgb';
  }

  return t
    ? {
        model: a,
        value: t,
      }
    : null;
};

n.get.rgb = function (t) {
  if (!t) return null;
  var a,
    n,
    o,
    l = [0, 0, 0, 1];

  if ((a = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
    for (o = a[2], a = a[1], n = 0; n < 3; n++) {
      var u = 2 * n;
      l[n] = parseInt(a.slice(u, u + 2), 16);
    }

    if (o) l[3] = parseInt(o, 16) / 255;
  } else if ((a = t.match(/^#([a-f0-9]{3,4})$/i))) {
    for (o = (a = a[1])[3], n = 0; n < 3; n++) l[n] = parseInt(a[n] + a[n], 16);

    if (o) l[3] = parseInt(o + o, 16) / 255;
  } else if ((a = t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) {
    for (n = 0; n < 3; n++) l[n] = parseInt(a[n + 1], 0);

    if (a[4]) a[5] ? (l[3] = 0.01 * parseFloat(a[4])) : (l[3] = parseFloat(a[4]));
  } else {
    if (!(a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))
      return (a = t.match(/^(\w+)$/)) ? ('transparent' === a[1] ? [0, 0, 0, 0] : r.call(require('./793'), a[1]) ? (((l = require('./793')[a[1]])[3] = 1), l) : null) : null;

    for (n = 0; n < 3; n++) l[n] = Math.round(2.55 * parseFloat(a[n + 1]));

    if (a[4]) a[5] ? (l[3] = 0.01 * parseFloat(a[4])) : (l[3] = parseFloat(a[4]));
  }

  for (n = 0; n < 3; n++) l[n] = s(l[n], 0, 255);

  l[3] = s(l[3], 0, 1);
  return l;
};

n.get.hsl = function (r) {
  if (!r) return null;
  var t = r.match(
    /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
  );

  if (t) {
    var a = parseFloat(t[4]);
    return [((parseFloat(t[1]) % 360) + 360) % 360, s(parseFloat(t[2]), 0, 100), s(parseFloat(t[3]), 0, 100), s(isNaN(a) ? 1 : a, 0, 1)];
  }

  return null;
};

n.get.hwb = function (r) {
  if (!r) return null;
  var t = r.match(
    /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
  );

  if (t) {
    var a = parseFloat(t[4]);
    return [((parseFloat(t[1]) % 360) + 360) % 360, s(parseFloat(t[2]), 0, 100), s(parseFloat(t[3]), 0, 100), s(isNaN(a) ? 1 : a, 0, 1)];
  }

  return null;
};

n.to.hex = function () {
  var module796 = require('./796')(arguments);

  return '#' + o(module796[0]) + o(module796[1]) + o(module796[2]) + (module796[3] < 1 ? o(Math.round(255 * module796[3])) : '');
};

n.to.rgb = function () {
  var module796 = require('./796')(arguments);

  return module796.length < 4 || 1 === module796[3]
    ? 'rgb(' + Math.round(module796[0]) + ', ' + Math.round(module796[1]) + ', ' + Math.round(module796[2]) + ')'
    : 'rgba(' + Math.round(module796[0]) + ', ' + Math.round(module796[1]) + ', ' + Math.round(module796[2]) + ', ' + module796[3] + ')';
};

n.to.rgb.percent = function () {
  var module796 = require('./796')(arguments),
    t = Math.round((module796[0] / 255) * 100),
    a = Math.round((module796[1] / 255) * 100),
    n = Math.round((module796[2] / 255) * 100);

  return module796.length < 4 || 1 === module796[3] ? 'rgb(' + t + '%, ' + a + '%, ' + n + '%)' : 'rgba(' + t + '%, ' + a + '%, ' + n + '%, ' + module796[3] + ')';
};

n.to.hsl = function () {
  var module796 = require('./796')(arguments);

  return module796.length < 4 || 1 === module796[3]
    ? 'hsl(' + module796[0] + ', ' + module796[1] + '%, ' + module796[2] + '%)'
    : 'hsla(' + module796[0] + ', ' + module796[1] + '%, ' + module796[2] + '%, ' + module796[3] + ')';
};

n.to.hwb = function () {
  var module796 = require('./796')(arguments),
    t = '';

  if (module796.length >= 4 && 1 !== module796[3]) t = ', ' + module796[3];
  return 'hwb(' + module796[0] + ', ' + module796[1] + '%, ' + module796[2] + '%' + t + ')';
};

n.to.keyword = function (r) {
  return t[r.slice(0, 3)];
};

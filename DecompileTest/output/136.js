function r(r, n, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  return t < 0.16666666666666666 ? r + 6 * (n - r) * t : t < 0.5 ? n : t < 0.6666666666666666 ? r + (n - r) * (0.6666666666666666 - t) * 6 : r;
}

function n(n, t, u) {
  var s = u < 0.5 ? u * (1 + t) : u + t - u * t,
    c = 2 * u - s,
    l = r(c, s, n + 0.3333333333333333),
    o = r(c, s, n),
    g = r(c, s, n - 0.3333333333333333);
  return (Math.round(255 * l) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * g) << 8);
}

var t,
  u = '[-+]?\\d*\\.?\\d+',
  s = '[-+]?\\d*\\.?\\d+%';

function c() {
  return '\\(\\s*(' + args.join(')\\s*,\\s*(') + ')\\s*\\)';
}

function l(r) {
  var n = parseInt(r, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}

function o(r) {
  return (((parseFloat(r) % 360) + 360) % 360) / 360;
}

function g(r) {
  var n = parseFloat(r);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(255 * n);
}

function h(r) {
  var n = parseFloat(r);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}

function b(r) {
  switch (r) {
    case 'transparent':
      return 0;

    case 'aliceblue':
      return 4042850303;

    case 'antiquewhite':
      return 4209760255;

    case 'aqua':
      return 16777215;

    case 'aquamarine':
      return 2147472639;

    case 'azure':
      return 4043309055;

    case 'beige':
      return 4126530815;

    case 'bisque':
      return 4293182719;

    case 'black':
      return 255;

    case 'blanchedalmond':
      return 4293643775;

    case 'blue':
      return 65535;

    case 'blueviolet':
      return 2318131967;

    case 'brown':
      return 2771004159;

    case 'burlywood':
      return 3736635391;

    case 'burntsienna':
      return 3934150143;

    case 'cadetblue':
      return 1604231423;

    case 'chartreuse':
      return 2147418367;

    case 'chocolate':
      return 3530104575;

    case 'coral':
      return 4286533887;

    case 'cornflowerblue':
      return 1687547391;

    case 'cornsilk':
      return 4294499583;

    case 'crimson':
      return 3692313855;

    case 'cyan':
      return 16777215;

    case 'darkblue':
      return 35839;

    case 'darkcyan':
      return 9145343;

    case 'darkgoldenrod':
      return 3095792639;

    case 'darkgray':
      return 2846468607;

    case 'darkgreen':
      return 6553855;

    case 'darkgrey':
      return 2846468607;

    case 'darkkhaki':
      return 3182914559;

    case 'darkmagenta':
      return 2332068863;

    case 'darkolivegreen':
      return 1433087999;

    case 'darkorange':
      return 4287365375;

    case 'darkorchid':
      return 2570243327;

    case 'darkred':
      return 2332033279;

    case 'darksalmon':
      return 3918953215;

    case 'darkseagreen':
      return 2411499519;

    case 'darkslateblue':
      return 1211993087;

    case 'darkslategray':
    case 'darkslategrey':
      return 793726975;

    case 'darkturquoise':
      return 13554175;

    case 'darkviolet':
      return 2483082239;

    case 'deeppink':
      return 4279538687;

    case 'deepskyblue':
      return 12582911;

    case 'dimgray':
    case 'dimgrey':
      return 1768516095;

    case 'dodgerblue':
      return 512819199;

    case 'firebrick':
      return 2988581631;

    case 'floralwhite':
      return 4294635775;

    case 'forestgreen':
      return 579543807;

    case 'fuchsia':
      return 4278255615;

    case 'gainsboro':
      return 3705462015;

    case 'ghostwhite':
      return 4177068031;

    case 'gold':
      return 4292280575;

    case 'goldenrod':
      return 3668254975;

    case 'gray':
      return 2155905279;

    case 'green':
      return 8388863;

    case 'greenyellow':
      return 2919182335;

    case 'grey':
      return 2155905279;

    case 'honeydew':
      return 4043305215;

    case 'hotpink':
      return 4285117695;

    case 'indianred':
      return 3445382399;

    case 'indigo':
      return 1258324735;

    case 'ivory':
      return 4294963455;

    case 'khaki':
      return 4041641215;

    case 'lavender':
      return 3873897215;

    case 'lavenderblush':
      return 4293981695;

    case 'lawngreen':
      return 2096890111;

    case 'lemonchiffon':
      return 4294626815;

    case 'lightblue':
      return 2916673279;

    case 'lightcoral':
      return 4034953471;

    case 'lightcyan':
      return 3774873599;

    case 'lightgoldenrodyellow':
      return 4210742015;

    case 'lightgray':
      return 3553874943;

    case 'lightgreen':
      return 2431553791;

    case 'lightgrey':
      return 3553874943;

    case 'lightpink':
      return 4290167295;

    case 'lightsalmon':
      return 4288707327;

    case 'lightseagreen':
      return 548580095;

    case 'lightskyblue':
      return 2278488831;

    case 'lightslategray':
    case 'lightslategrey':
      return 2005441023;

    case 'lightsteelblue':
      return 2965692159;

    case 'lightyellow':
      return 4294959359;

    case 'lime':
      return 16711935;

    case 'limegreen':
      return 852308735;

    case 'linen':
      return 4210091775;

    case 'magenta':
      return 4278255615;

    case 'maroon':
      return 2147483903;

    case 'mediumaquamarine':
      return 1724754687;

    case 'mediumblue':
      return 52735;

    case 'mediumorchid':
      return 3126187007;

    case 'mediumpurple':
      return 2473647103;

    case 'mediumseagreen':
      return 1018393087;

    case 'mediumslateblue':
      return 2070474495;

    case 'mediumspringgreen':
      return 16423679;

    case 'mediumturquoise':
      return 1221709055;

    case 'mediumvioletred':
      return 3340076543;

    case 'midnightblue':
      return 421097727;

    case 'mintcream':
      return 4127193855;

    case 'mistyrose':
      return 4293190143;

    case 'moccasin':
      return 4293178879;

    case 'navajowhite':
      return 4292783615;

    case 'navy':
      return 33023;

    case 'oldlace':
      return 4260751103;

    case 'olive':
      return 2155872511;

    case 'olivedrab':
      return 1804477439;

    case 'orange':
      return 4289003775;

    case 'orangered':
      return 4282712319;

    case 'orchid':
      return 3664828159;

    case 'palegoldenrod':
      return 4008225535;

    case 'palegreen':
      return 2566625535;

    case 'paleturquoise':
      return 2951671551;

    case 'palevioletred':
      return 3681588223;

    case 'papayawhip':
      return 4293907967;

    case 'peachpuff':
      return 4292524543;

    case 'peru':
      return 3448061951;

    case 'pink':
      return 4290825215;

    case 'plum':
      return 3718307327;

    case 'powderblue':
      return 2967529215;

    case 'purple':
      return 2147516671;

    case 'rebeccapurple':
      return 1714657791;

    case 'red':
      return 4278190335;

    case 'rosybrown':
      return 3163525119;

    case 'royalblue':
      return 1097458175;

    case 'saddlebrown':
      return 2336560127;

    case 'salmon':
      return 4202722047;

    case 'sandybrown':
      return 4104413439;

    case 'seagreen':
      return 780883967;

    case 'seashell':
      return 4294307583;

    case 'sienna':
      return 2689740287;

    case 'silver':
      return 3233857791;

    case 'skyblue':
      return 2278484991;

    case 'slateblue':
      return 1784335871;

    case 'slategray':
    case 'slategrey':
      return 1887473919;

    case 'snow':
      return 4294638335;

    case 'springgreen':
      return 16744447;

    case 'steelblue':
      return 1182971135;

    case 'tan':
      return 3535047935;

    case 'teal':
      return 8421631;

    case 'thistle':
      return 3636451583;

    case 'tomato':
      return 4284696575;

    case 'turquoise':
      return 1088475391;

    case 'violet':
      return 4001558271;

    case 'wheat':
      return 4125012991;

    case 'white':
      return 4294967295;

    case 'whitesmoke':
      return 4126537215;

    case 'yellow':
      return 4294902015;

    case 'yellowgreen':
      return 2597139199;
  }

  return null;
}

module.exports = function (r) {
  if ('number' == typeof r) return r >>> 0 === r && r >= 0 && r <= 4294967295 ? r : null;
  if ('string' != typeof r) return null;
  if (undefined === t)
    t = {
      rgb: new RegExp('rgb' + c(u, u, u)),
      rgba: new RegExp('rgba' + c(u, u, u, u)),
      hsl: new RegExp('hsl' + c(u, s, s)),
      hsla: new RegExp('hsla' + c(u, s, s, u)),
      hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#([0-9a-fA-F]{6})$/,
      hex8: /^#([0-9a-fA-F]{8})$/,
    };
  var p,
    f = t;
  if ((p = f.hex6.exec(r))) return parseInt(p[1] + 'ff', 16) >>> 0;
  var y = b(r);
  return null != y
    ? y
    : (p = f.rgb.exec(r))
    ? ((l(p[1]) << 24) | (l(p[2]) << 16) | (l(p[3]) << 8) | 255) >>> 0
    : (p = f.rgba.exec(r))
    ? ((l(p[1]) << 24) | (l(p[2]) << 16) | (l(p[3]) << 8) | g(p[4])) >>> 0
    : (p = f.hex3.exec(r))
    ? parseInt(p[1] + p[1] + p[2] + p[2] + p[3] + p[3] + 'ff', 16) >>> 0
    : (p = f.hex8.exec(r))
    ? parseInt(p[1], 16) >>> 0
    : (p = f.hex4.exec(r))
    ? parseInt(p[1] + p[1] + p[2] + p[2] + p[3] + p[3] + p[4] + p[4], 16) >>> 0
    : (p = f.hsl.exec(r))
    ? (255 | n(o(p[1]), h(p[2]), h(p[3]))) >>> 0
    : (p = f.hsla.exec(r))
    ? (n(o(p[1]), h(p[2]), h(p[3])) | g(p[4])) >>> 0
    : null;
};

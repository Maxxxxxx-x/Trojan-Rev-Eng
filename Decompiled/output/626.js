var module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var o = c(t);
    if (o && o.has(e)) return o.get(e);
    var i = {},
      n = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in e)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
        var u = n ? Object.getOwnPropertyDescriptor(e, l) : null;
        if (u && (u.get || u.set)) Object.defineProperty(i, l, u);
        else i[l] = e[l];
      }

    i.default = e;
    if (o) o.set(e, i);
    return i;
  })(require('./125')),
  ReactNative = require('react-native'),
  o = ['name', 'style', 'children', 'size', 'color'];

function c(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (c = function (e) {
    return e ? o : t;
  })(e);
}

function i() {
  return (i =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];

        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (e[c] = o[c]);
      }

      return e;
    }).apply(this, arguments);
}

function n(e, t) {
  if (null == e) return {};
  var o,
    c,
    i = l(e, t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);

    for (c = 0; c < n.length; c++) {
      o = n[c];
      if (!(t.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
  }

  return i;
}

function l(e, t) {
  if (null == e) return {};
  var o,
    c,
    i = {},
    n = Object.keys(e);

  for (c = 0; c < n.length; c++) {
    o = n[c];
    if (!(t.indexOf(o) >= 0)) i[o] = e[o];
  }

  return i;
}

function u(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}

function s(e, t) {
  for (var o = 0; o < t.length; o++) {
    var c = t[o];
    c.enumerable = c.enumerable || false;
    c.configurable = true;
    if ('value' in c) c.writable = true;
    Object.defineProperty(e, c.key, c);
  }
}

function f(e, t) {
  if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true,
    },
  });
  if (t) p(e, t);
}

function p(e, t) {
  return (p =
    Object.setPrototypeOf ||
    function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
}

function b(e) {
  if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function h(e) {
  return (h = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}

var w = {
  'account-book': 59905,
  alert: 59906,
  'alipay-circle': 59907,
  'alipay-square': 59908,
  aliwangwang: 59909,
  'amazon-circle': 59910,
  'amazon-square': 59911,
  android: 59912,
  api: 59913,
  apple: 59914,
  appstore: 59915,
  audio: 59916,
  backward: 59917,
  bank: 59918,
  'behance-circle': 59919,
  'behance-square': 59920,
  bell: 59921,
  book: 59922,
  'box-plot': 59923,
  bug: 59924,
  build: 59925,
  bulb: 59926,
  calculator: 59927,
  calendar: 59928,
  camera: 59929,
  car: 59930,
  'caret-down': 59931,
  'caret-left': 59932,
  'caret-right': 59933,
  'caret-up': 59934,
  'carry-out': 59935,
  'check-circle': 59936,
  'check-square': 59937,
  chrome: 59938,
  'ci-circle': 59939,
  'clock-circle': 59940,
  'close-circle': 59941,
  'close-square': 59942,
  cloud: 59943,
  'code-sandbox-circle': 59944,
  'code-sandbox-square': 59945,
  code: 59946,
  'codepen-circle': 59947,
  'codepen-square': 59948,
  compass: 59949,
  contacts: 59950,
  container: 59951,
  control: 59952,
  copy: 59953,
  'copyright-circle': 59954,
  'credit-card': 59955,
  crown: 59956,
  'customer-service': 59957,
  dashboard: 59958,
  database: 59959,
  delete: 59960,
  diff: 59961,
  'dingtalk-circle': 59962,
  'dingtalk-square': 59963,
  dislike: 59964,
  'dollar-circle': 59965,
  'down-circle': 59966,
  'down-square': 59967,
  'dribbble-circle': 59968,
  'dribbble-square': 59969,
  'dropbox-circle': 59970,
  'dropbox-square': 59971,
  edit: 59972,
  environment: 59973,
  'euro-circle': 59974,
  'exclamation-circle': 59975,
  experiment: 59976,
  'eye-invisible': 59977,
  eye: 59978,
  facebook: 59979,
  'fast-backward': 59980,
  'fast-forward': 59981,
  'file-add': 59982,
  'file-excel': 59983,
  'file-exclamation': 59984,
  'file-image': 59985,
  'file-markdown': 59986,
  'file-pdf': 59987,
  'file-ppt': 59988,
  'file-text': 59989,
  'file-unknown': 59990,
  'file-word': 59991,
  'file-zip': 59992,
  file: 59993,
  filter: 59994,
  fire: 59995,
  flag: 59996,
  'folder-add': 59997,
  'folder-open': 59998,
  folder: 59999,
  'format-painter': 6e4,
  forward: 60001,
  frown: 60002,
  fund: 60003,
  'funnel-plot': 60004,
  gift: 60005,
  github: 60006,
  gitlab: 60007,
  gold: 60008,
  golden: 60009,
  'google-circle': 60010,
  'google-plus-circle': 60011,
  'google-plus-square': 60012,
  'google-square': 60013,
  hdd: 60014,
  heart: 60015,
  highlight: 60016,
  home: 60017,
  hourglass: 60018,
  html5: 60019,
  idcard: 60020,
  'ie-circle': 60021,
  'ie-square': 60022,
  'info-circle': 60023,
  instagram: 60024,
  insurance: 60025,
  interaction: 60026,
  layout: 60027,
  'left-circle': 60028,
  'left-square': 60029,
  like: 60030,
  linkedin: 60031,
  lock: 60032,
  'mac-command': 60033,
  mail: 60034,
  'medicine-box': 60035,
  'medium-circle': 60036,
  'medium-square': 60037,
  meh: 60038,
  message: 60039,
  'minus-circle': 60040,
  'minus-square': 60041,
  mobile: 60042,
  'money-collect': 60043,
  notification: 60044,
  'pause-circle': 60045,
  'pay-circle': 60046,
  phone: 60047,
  picture: 60048,
  'pie-chart': 60049,
  'play-circle': 60050,
  'play-square': 60051,
  'plus-circle': 60052,
  'plus-square': 60053,
  'pound-circle': 60054,
  printer: 60055,
  profile: 60056,
  project: 60057,
  'property-safety': 60058,
  pushpin: 60059,
  'qq-circle': 60060,
  'qq-square': 60061,
  'question-circle': 60062,
  read: 60063,
  reconciliation: 60064,
  'red-envelope': 60065,
  'reddit-circle': 60066,
  'reddit-square': 60067,
  rest: 60068,
  'right-circle': 60069,
  'right-square': 60070,
  robot: 60071,
  rocket: 60072,
  'safety-certificate': 60073,
  save: 60074,
  schedule: 60075,
  'security-scan': 60076,
  setting: 60077,
  shop: 60078,
  shopping: 60079,
  signal: 60080,
  'sketch-circle': 60081,
  'sketch-square': 60082,
  skin: 60083,
  skype: 60084,
  'slack-circle': 60085,
  'slack-square': 60086,
  sliders: 60087,
  smile: 60088,
  snippets: 60089,
  sound: 60090,
  star: 60091,
  'step-backward': 60092,
  'step-forward': 60093,
  stop: 60094,
  switcher: 60095,
  tablet: 60096,
  tag: 60097,
  tags: 60098,
  'taobao-circle': 60099,
  'taobao-square': 60100,
  thunderbolt: 60101,
  tool: 60102,
  'trademark-circle': 60103,
  trophy: 60104,
  'twitter-circle': 60105,
  'twitter-square': 60106,
  unlock: 60107,
  'up-circle': 60108,
  'up-square': 60109,
  usb: 60110,
  'video-camera': 60111,
  wallet: 60112,
  warning: 60113,
  wechat: 60114,
  'weibo-circle': 60115,
  'weibo-square': 60116,
  windows: 60117,
  yahoo: 60118,
  youtube: 60119,
  yuque: 60120,
  'zhihu-circle': 60121,
  'zhihu-square': 60122,
};
exports.fillGlyphMap = w;

var q = (function (c) {
  f(j, module125.PureComponent);

  var l = j,
    p = y(),
    q,
    v,
    k,
    O = function () {
      var e,
        t,
        o = h(l);

      if (p) {
        var c = h(this).constructor;
        e = Reflect.construct(o, arguments, c);
      } else e = o.apply(this, arguments);

      return !(t = e) || ('object' != typeof t && 'function' != typeof t) ? b(this) : t;
    };

  function j() {
    u(this, j);
    return O.apply(this, arguments);
  }

  q = j;
  if (
    (v = [
      {
        key: 'render',
        value: function () {
          var c = this.props,
            l = c.name,
            u = c.style,
            s = c.children,
            f = c.size,
            p = undefined === f ? 14 : f,
            b = c.color,
            y = undefined === b ? 'black' : b,
            h = n(c, o),
            q = {
              fontFamily: 'antfill',
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontSize: p,
              color: y,
            },
            v = l ? w[l] || '?' : '';
          if ('number' == typeof v) v = String.fromCharCode(v);
          return module125.createElement(
            ReactNative.Text,
            i({}, h, {
              style: [q, u],
            }),
            v,
            s
          );
        },
      },
    ])
  )
    s(q.prototype, v);
  if (k) s(q, k);
  return j;
})();

exports.default = q;

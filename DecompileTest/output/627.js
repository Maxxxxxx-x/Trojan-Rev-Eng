var module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var o = n(t);
    if (o && o.has(e)) return o.get(e);
    var i = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in e)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var u = l ? Object.getOwnPropertyDescriptor(e, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(i, c, u);
        else i[c] = e[c];
      }

    i.default = e;
    if (o) o.set(e, i);
    return i;
  })(require('./125')),
  ReactNative = require('react-native'),
  o = ['name', 'style', 'children', 'size', 'color'];

function n(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (n = function (e) {
    return e ? o : t;
  })(e);
}

function i() {
  return (i =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];

        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
      }

      return e;
    }).apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var o,
    n,
    i = c(e, t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);

    for (n = 0; n < l.length; n++) {
      o = l[n];
      if (!(t.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
  }

  return i;
}

function c(e, t) {
  if (null == e) return {};
  var o,
    n,
    i = {},
    l = Object.keys(e);

  for (n = 0; n < l.length; n++) {
    o = l[n];
    if (!(t.indexOf(o) >= 0)) i[o] = e[o];
  }

  return i;
}

function u(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}

function s(e, t) {
  for (var o = 0; o < t.length; o++) {
    var n = t[o];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ('value' in n) n.writable = true;
    Object.defineProperty(e, n.key, n);
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

function h() {
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

function y(e) {
  return (y = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}

var w = {
  'account-book': 59905,
  aim: 59906,
  alert: 59907,
  alibaba: 59908,
  'align-center': 59909,
  'align-left': 59910,
  'align-right': 59911,
  'alipay-circle': 59912,
  alipay: 59913,
  aliwangwang: 59914,
  aliyun: 59915,
  amazon: 59916,
  android: 59917,
  'ant-cloud': 59918,
  'ant-design': 59919,
  apartment: 59920,
  api: 59921,
  apple: 59922,
  'appstore-add': 59923,
  appstore: 59924,
  'area-chart': 59925,
  'arrow-down': 59926,
  'arrow-left': 59927,
  'arrow-right': 59928,
  'arrow-up': 59929,
  'arrows-alt': 59930,
  'audio-muted': 59931,
  audio: 59932,
  audit: 59933,
  backward: 59934,
  bank: 59935,
  'bar-chart': 59936,
  barcode: 59937,
  bars: 59938,
  'behance-square': 59939,
  behance: 59940,
  bell: 59941,
  'bg-colors': 59942,
  block: 59943,
  bold: 59944,
  book: 59945,
  'border-bottom': 59946,
  'border-horizontal': 59947,
  'border-inner': 59948,
  'border-left': 59949,
  'border-outer': 59950,
  'border-right': 59951,
  'border-top': 59952,
  'border-verticle': 59953,
  border: 59954,
  'borderless-table': 59955,
  'box-plot': 59956,
  branches: 59957,
  bug: 59958,
  build: 59959,
  bulb: 59960,
  calculator: 59961,
  calendar: 59962,
  camera: 59963,
  car: 59964,
  'caret-down': 59965,
  'caret-left': 59966,
  'caret-right': 59967,
  'caret-up': 59968,
  'carry-out': 59969,
  'check-circle': 59970,
  'check-square': 59971,
  check: 59972,
  chrome: 59973,
  'ci-circle': 59974,
  ci: 59975,
  clear: 59976,
  'clock-circle': 59977,
  'close-circle': 59978,
  'close-square': 59979,
  close: 59980,
  'cloud-download': 59981,
  'cloud-server': 59982,
  'cloud-sync': 59983,
  'cloud-upload': 59984,
  cloud: 59985,
  cluster: 59986,
  'code-sandbox': 59987,
  code: 59988,
  'codepen-circle': 59989,
  codepen: 59990,
  coffee: 59991,
  'column-height': 59992,
  'column-width': 59993,
  comment: 59994,
  compass: 59995,
  compress: 59996,
  'console-sql': 59997,
  contacts: 59998,
  container: 59999,
  control: 6e4,
  copy: 60001,
  'copyright-circle': 60002,
  copyright: 60003,
  'credit-card': 60004,
  crown: 60005,
  'customer-service': 60006,
  dash: 60007,
  dashboard: 60008,
  database: 60009,
  'delete-column': 60010,
  'delete-row': 60011,
  delete: 60012,
  'delivered-procedure': 60013,
  'deployment-unit': 60014,
  desktop: 60015,
  diff: 60016,
  dingding: 60017,
  dingtalk: 60018,
  disconnect: 60019,
  dislike: 60020,
  'dollar-circle': 60021,
  dollar: 60022,
  'dot-chart': 60023,
  'double-left': 60024,
  'double-right': 60025,
  'down-circle': 60026,
  'down-square': 60027,
  down: 60028,
  download: 60029,
  drag: 60030,
  'dribbble-square': 60031,
  dribbble: 60032,
  dropbox: 60033,
  edit: 60034,
  ellipsis: 60035,
  enter: 60036,
  environment: 60037,
  'euro-circle': 60038,
  euro: 60039,
  exception: 60040,
  'exclamation-circle': 60041,
  exclamation: 60042,
  'expand-alt': 60043,
  expand: 60044,
  experiment: 60045,
  export: 60046,
  'eye-invisible': 60047,
  eye: 60048,
  facebook: 60049,
  fall: 60050,
  'fast-backward': 60051,
  'fast-forward': 60052,
  'field-binary': 60053,
  'field-number': 60054,
  'field-string': 60055,
  'field-time': 60056,
  'file-add': 60057,
  'file-done': 60058,
  'file-excel': 60059,
  'file-exclamation': 60060,
  'file-gif': 60061,
  'file-image': 60062,
  'file-jpg': 60063,
  'file-markdown': 60064,
  'file-pdf': 60065,
  'file-ppt': 60066,
  'file-protect': 60067,
  'file-search': 60068,
  'file-sync': 60069,
  'file-text': 60070,
  'file-unknown': 60071,
  'file-word': 60072,
  'file-zip': 60073,
  file: 60074,
  filter: 60075,
  fire: 60076,
  flag: 60077,
  'folder-add': 60078,
  'folder-open': 60079,
  'folder-view': 60080,
  folder: 60081,
  'font-colors': 60082,
  'font-size': 60083,
  fork: 60084,
  form: 60085,
  'format-painter': 60086,
  forward: 60087,
  frown: 60088,
  'fullscreen-exit': 60089,
  fullscreen: 60090,
  function: 60091,
  'fund-projection-screen': 60092,
  'fund-view': 60093,
  fund: 60094,
  'funnel-plot': 60095,
  gateway: 60096,
  gif: 60097,
  gift: 60098,
  github: 60099,
  gitlab: 60100,
  global: 60101,
  gold: 60102,
  'google-plus': 60103,
  google: 60104,
  group: 60105,
  hdd: 60106,
  heart: 60107,
  'heat-map': 60108,
  highlight: 60109,
  history: 60110,
  holder: 60111,
  home: 60112,
  hourglass: 60113,
  html5: 60114,
  idcard: 60115,
  ie: 60116,
  import: 60117,
  inbox: 60118,
  'info-circle': 60119,
  info: 60120,
  'insert-row-above': 60121,
  'insert-row-below': 60122,
  'insert-row-left': 60123,
  'insert-row-right': 60124,
  instagram: 60125,
  insurance: 60126,
  interaction: 60127,
  'issues-close': 60128,
  italic: 60129,
  key: 60130,
  laptop: 60131,
  layout: 60132,
  'left-circle': 60133,
  'left-square': 60134,
  left: 60135,
  like: 60136,
  'line-chart': 60137,
  'line-height': 60138,
  line: 60139,
  link: 60140,
  linkedin: 60141,
  'loading-3-quarters': 60142,
  loading: 60143,
  lock: 60144,
  login: 60145,
  logout: 60146,
  'mac-command': 60147,
  mail: 60148,
  man: 60149,
  'medicine-box': 60150,
  'medium-workmark': 60151,
  medium: 60152,
  meh: 60153,
  'menu-fold': 60154,
  'menu-unfold': 60155,
  menu: 60156,
  'merge-cells': 60157,
  message: 60158,
  'minus-circle': 60159,
  'minus-square': 60160,
  minus: 60161,
  mobile: 60162,
  'money-collect': 60163,
  monitor: 60164,
  more: 60165,
  'node-collapse': 60166,
  'node-expand': 60167,
  'node-index': 60168,
  notification: 60169,
  number: 60170,
  'one-to-one': 60171,
  'ordered-list': 60172,
  'paper-clip': 60173,
  partition: 60174,
  'pause-circle': 60175,
  pause: 60176,
  'pay-circle': 60177,
  percentage: 60178,
  phone: 60179,
  'pic-center': 60180,
  'pic-left': 60181,
  'pic-right': 60182,
  picture: 60183,
  'pie-chart': 60184,
  'play-circle': 60185,
  'play-square': 60186,
  'plus-circle': 60187,
  'plus-square': 60188,
  plus: 60189,
  'pound-circle': 60190,
  pound: 60191,
  poweroff: 60192,
  printer: 60193,
  profile: 60194,
  project: 60195,
  'property-safety': 60196,
  'pull-request': 60197,
  pushpin: 60198,
  qq: 60199,
  qrcode: 60200,
  'question-circle': 60201,
  question: 60202,
  'radar-chart': 60203,
  'radius-bottomleft': 60204,
  'radius-bottomright': 60205,
  'radius-setting': 60206,
  'radius-upleft': 60207,
  'radius-upright': 60208,
  read: 60209,
  reconciliation: 60210,
  'red-envelope': 60211,
  reddit: 60212,
  redo: 60213,
  reload: 60214,
  rest: 60215,
  retweet: 60216,
  'right-circle': 60217,
  'right-square': 60218,
  right: 60219,
  rise: 60220,
  robot: 60221,
  rocket: 60222,
  rollback: 60223,
  'rotate-left': 60224,
  'rotate-right': 60225,
  'safety-certificate': 60226,
  safety: 60227,
  save: 60228,
  scan: 60229,
  schedule: 60230,
  scissor: 60231,
  search: 60232,
  'security-scan': 60233,
  select: 60234,
  send: 60235,
  setting: 60236,
  shake: 60237,
  'share-alt': 60238,
  shop: 60239,
  'shopping-cart': 60240,
  shopping: 60241,
  shrink: 60242,
  sisternode: 60243,
  sketch: 60244,
  skin: 60245,
  skype: 60246,
  'slack-square': 60247,
  slack: 60248,
  sliders: 60249,
  'small-dash': 60250,
  smile: 60251,
  snippets: 60252,
  solution: 60253,
  'sort-ascending': 60254,
  'sort-descending': 60255,
  sound: 60256,
  'split-cells': 60257,
  star: 60258,
  'step-backward': 60259,
  'step-forward': 60260,
  stock: 60261,
  stop: 60262,
  strikethrough: 60263,
  subnode: 60264,
  'swap-left': 60265,
  'swap-right': 60266,
  swap: 60267,
  switcher: 60268,
  sync: 60269,
  table: 60270,
  tablet: 60271,
  tag: 60272,
  tags: 60273,
  'taobao-circle': 60274,
  taobao: 60275,
  team: 60276,
  thunderbolt: 60277,
  'to-top': 60278,
  tool: 60279,
  'trademark-circle': 60280,
  trademark: 60281,
  transaction: 60282,
  translation: 60283,
  trophy: 60284,
  twitter: 60285,
  underline: 60286,
  undo: 60287,
  ungroup: 60288,
  unlock: 60289,
  'unordered-list': 60290,
  'up-circle': 60291,
  'up-square': 60292,
  up: 60293,
  upload: 60294,
  usb: 60295,
  'user-add': 60296,
  'user-delete': 60297,
  'user-switch': 60298,
  user: 60299,
  'usergroup-add': 60300,
  'usergroup-delete': 60301,
  verified: 60302,
  'vertical-align-bottom': 60303,
  'vertical-align-middle': 60304,
  'vertical-align-top': 60305,
  'vertical-left': 60306,
  'vertical-right': 60307,
  'video-camera-add': 60308,
  'video-camera': 60309,
  wallet: 60310,
  warning: 60311,
  wechat: 60312,
  'weibo-circle': 60313,
  'weibo-square': 60314,
  weibo: 60315,
  'whats-app': 60316,
  wifi: 60317,
  windows: 60318,
  woman: 60319,
  yahoo: 60320,
  youtube: 60321,
  yuque: 60322,
  zhihu: 60323,
  'zoom-in': 60324,
  'zoom-out': 60325,
};
exports.outlineGlyphMap = w;

var v = (function (n) {
  f(x, module125.PureComponent);

  var c = x,
    p = h(),
    v,
    k,
    O,
    j = function () {
      var e,
        t,
        o = y(c);

      if (p) {
        var n = y(this).constructor;
        e = Reflect.construct(o, arguments, n);
      } else e = o.apply(this, arguments);

      return !(t = e) || ('object' != typeof t && 'function' != typeof t) ? b(this) : t;
    };

  function x() {
    u(this, x);
    return j.apply(this, arguments);
  }

  v = x;
  if (
    (k = [
      {
        key: 'render',
        value: function () {
          var n = this.props,
            c = n.name,
            u = n.style,
            s = n.children,
            f = n.size,
            p = undefined === f ? 14 : f,
            b = n.color,
            h = undefined === b ? 'black' : b,
            y = l(n, o),
            v = {
              fontFamily: 'antoutline',
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontSize: p,
              color: h,
            },
            k = c ? w[c] || '?' : '';
          if ('number' == typeof k) k = String.fromCharCode(k);
          return module125.createElement(
            ReactNative.Text,
            i({}, y, {
              style: [v, u],
            }),
            k,
            s
          );
        },
      },
    ])
  )
    s(v.prototype, k);
  if (O) s(v, O);
  return x;
})();

exports.default = v;

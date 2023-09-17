var t, n, s, u;

function o() {
  if (u) return u;
  var t = globals.nativeExtensions && globals.nativeExtensions.SourceCode;
  if (!t) t = require('./156').default;
  u = t.getConstants().scriptURL;
  return u;
}

function f() {
  if (undefined === n) {
    var t = o(),
      s = t && t.match(/^https?:\/\/.*?\//);
    n = s ? s[0] : null;
  }

  return n;
}

function c(t) {
  if (t) {
    if (t.startsWith('assets://')) return null;
    if (!(t = t.substring(0, t.lastIndexOf('/') + 1)).includes('://')) t = 'file://' + t;
  }

  return t;
}

module.exports = function (n) {
  if ('object' == typeof n) return n;

  var module157 = require('./157').getAssetByID(n);

  if (!module157) return null;
  var module158 = new (require('./158'))(f(), (undefined === s && (s = c(o())), s), module157);
  return t ? t(module158) : module158.defaultAsset();
};

module.exports.pickScale = require('./159').pickScale;

module.exports.setCustomSourceTransformer = function (n) {
  t = n;
};

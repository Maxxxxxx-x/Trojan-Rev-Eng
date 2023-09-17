exports.Translation = function (u) {
  var s = u.ns,
    c = u.children,
    o = module96.default(u, l),
    module454 = require('react-i18next').useTranslation(s, o),
    _ = module25.default(module454, 3),
    v = _[0],
    h = _[1],
    T = _[2];

  return c(
    v,
    {
      i18n: h,
      lng: h.language,
    },
    T
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  l = ['ns', 'children'];

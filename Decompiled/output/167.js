exports.createViewConfig = function (u) {
  return {
    uiViewClassName: u.uiViewClassName,
    Commands: {},
    bubblingEventTypes: n(module165.default.bubblingEventTypes, u.bubblingEventTypes),
    directEventTypes: n(module165.default.directEventTypes, u.directEventTypes),
    validAttributes: n(module165.default.validAttributes, u.validAttributes),
  };
};

var module165 = require('@babel/runtime/helpers/interopRequireDefault')(require('./165'));

function n(t, n) {
  var u;
  return null == t || null == n ? (null != (u = null != t ? t : n) ? u : {}) : Object.assign({}, t, n);
}

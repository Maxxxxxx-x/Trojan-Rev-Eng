module.exports = function (t) {
  return null != t && 'object' == typeof t && false === Array.isArray(t);
};

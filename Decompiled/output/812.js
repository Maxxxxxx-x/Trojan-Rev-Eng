exports.default = function (t, l) {
  return 'string' == typeof t.headerTitle ? t.headerTitle : undefined !== t.title ? t.title : l;
};

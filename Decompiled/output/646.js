module.exports = function (t, c) {
  return c ? t.replace(/\/+$/, '') + '/' + c.replace(/^\/+/, '') : t;
};

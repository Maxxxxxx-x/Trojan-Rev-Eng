module.exports = function (t) {
  return require('./633').isObject(t) && true === t.isAxiosError;
};

var module161 = (function () {
  function module7() {
    require('./7')(this, module7);
  }

  require('./8')(module7, null, [
    {
      key: 'get',
      value: function () {
        return require('./161').get('window').scale;
      },
    },
    {
      key: 'getFontScale',
      value: function () {
        return require('./161').get('window').fontScale || module7.get();
      },
    },
    {
      key: 'getPixelSizeForLayoutSize',
      value: function (n) {
        return Math.round(n * module7.get());
      },
    },
    {
      key: 'roundToNearestPixel',
      value: function (n) {
        var u = module7.get();
        return Math.round(n * u) / u;
      },
    },
    {
      key: 'startDetecting',
      value: function () {},
    },
  ]);

  return module7;
})();

module.exports = module161;

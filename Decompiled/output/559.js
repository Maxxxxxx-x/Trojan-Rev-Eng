exports.__esModule = true;
var t = {
  batch: true,
};
Object.defineProperty(exports, 'batch', {
  enumerable: true,
  get: function () {
    return require('./560').unstable_batchedUpdates;
  },
});
Object.keys(require('./561')).forEach(function (n) {
  if ('default' !== n && '__esModule' !== n)
    Object.prototype.hasOwnProperty.call(t, n) ||
      (n in exports && exports[n] === require('./561')[n]) ||
      Object.defineProperty(exports, n, {
        enumerable: true,
        get: function () {
          return require('./561')[n];
        },
      });
});

require('./566').initializeUseSelector(require('./592').useSyncExternalStoreWithSelector);

require('./572').initializeConnect(require('./375').useSyncExternalStore);

require('./570').setBatch(require('./560').unstable_batchedUpdates);

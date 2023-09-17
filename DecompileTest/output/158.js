function s(s) {
  var module160 = require('./159').pickScale(s.scales, require('./160').get()),
    n = 1 === module160 ? '' : '@' + module160 + 'x';

  return require('./163').getBasePath(s) + '/' + s.name + n + '.' + s.type;
}

var module160 = (function () {
  function module7(s, n, u) {
    require('./7')(this, module7);

    this.serverUrl = s;
    this.jsbundleUrl = n;
    this.asset = u;
  }

  require('./8')(module7, [
    {
      key: 'isLoadedFromServer',
      value: function () {
        return !!this.serverUrl;
      },
    },
    {
      key: 'isLoadedFromFileSystem',
      value: function () {
        return !(!this.jsbundleUrl || !this.jsbundleUrl.startsWith('file://'));
      },
    },
    {
      key: 'defaultAsset',
      value: function () {
        return this.isLoadedFromServer() ? this.assetServerURL() : this.scaledAssetURLNearBundle();
      },
    },
    {
      key: 'assetServerURL',
      value: function () {
        require('./20')(!!this.serverUrl, 'need server to load from');

        return this.fromSource(this.serverUrl + s(this.asset) + '?platform=ios&hash=' + this.asset.hash);
      },
    },
    {
      key: 'scaledAssetPath',
      value: function () {
        return this.fromSource(s(this.asset));
      },
    },
    {
      key: 'scaledAssetURLNearBundle',
      value: function () {
        var t = this.jsbundleUrl || 'file://';
        return this.fromSource(t + s(this.asset).replace(/\.\.\//g, '_'));
      },
    },
    {
      key: 'resourceIdentifierWithoutScale',
      value: function () {
        require('./20')(false, 'resource identifiers work on Android');

        return this.fromSource(require('./163').getAndroidResourceIdentifier(this.asset));
      },
    },
    {
      key: 'drawableFolderInBundle',
      value: function () {
        var s,
          t,
          n = this.jsbundleUrl || 'file://';
        return this.fromSource(
          n +
            ((s = this.asset),
            (t = require('./159').pickScale(s.scales, require('./160').get())),
            require('./163').getAndroidResourceFolderName(s, t) + '/' + require('./163').getAndroidResourceIdentifier(s) + '.' + s.type)
        );
      },
    },
    {
      key: 'fromSource',
      value: function (s) {
        return {
          __packager_asset: true,
          width: this.asset.width,
          height: this.asset.height,
          uri: s,
          scale: require('./159').pickScale(this.asset.scales, require('./160').get()),
        };
      },
    },
  ]);

  return module7;
})();

module160.pickScale = require('./159').pickScale;
module.exports = module160;

var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  ReactNative = require('react-native'),
  module407 = require('@babel/runtime/helpers/interopRequireDefault')(require('./407')),
  n = {
    Album: 'Album',
    All: 'All',
    Event: 'Event',
    Faces: 'Faces',
    Library: 'Library',
    PhotoStream: 'PhotoStream',
    SavedPhotos: 'SavedPhotos',
  },
  u = {
    All: 'All',
    Videos: 'Videos',
    Photos: 'Photos',
  },
  v = (function () {
    function module408() {
      module7.default(this, module408);
    }

    module8.default(module408, null, [
      {
        key: 'saveImageWithTag',
        value: function (t) {
          console.warn('`CameraRoll.saveImageWithTag()` is deprecated. Use `CameraRoll.saveToCameraRoll()` instead.');
          return this.saveToCameraRoll(t, 'photo');
        },
      },
      {
        key: 'deletePhotos',
        value: function (t) {
          return module407.default.deletePhotos(t);
        },
      },
      {
        key: 'save',
        value: function (t) {
          var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
            s = o.type,
            n = undefined === s ? 'auto' : s,
            u = o.album,
            module408 = undefined === u ? '' : u;

          require('./408')('string' == typeof t, 'CameraRoll.saveToCameraRoll must be a valid string.');

          require('./408')(
            'photo' === o.type || 'video' === o.type || 'auto' === o.type || undefined === o.type,
            "The second argument to saveToCameraRoll must be 'photo' or 'video' or 'auto'. You passed " + (n || 'unknown')
          );

          if ('auto' === n) n = ['mov', 'mp4'].indexOf(t.split('.').slice(-1)[0]) >= 0 ? 'video' : 'photo';
          return module407.default.saveToCameraRoll(t, {
            type: n,
            album: module408,
          });
        },
      },
      {
        key: 'saveToCameraRoll',
        value: function (t, o) {
          console.warn('CameraRoll.saveToCameraRoll(tag, type) is deprecated.  Use the save function instead');
          return module408.save(t, {
            type: o,
          });
        },
      },
      {
        key: 'getAlbums',
        value: function () {
          var t =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : {
                  assetType: u.All,
                };
          return module407.default.getAlbums(t);
        },
      },
      {
        key: 'getParamsWithDefaults',
        value: function (t) {
          var o = Object.assign({}, t);
          if (!o.assetType) o.assetType = u.All;
          if (!(o.groupTypes || 'android' === ReactNative.Platform.OS)) o.groupTypes = n.All;
          return o;
        },
      },
      {
        key: 'getPhotos',
        value: function (t) {
          t = module408.getParamsWithDefaults(t);
          var o = module407.default.getPhotos(t);

          if (arguments.length > 1) {
            console.warn('CameraRoll.getPhotos(tag, success, error) is deprecated.  Use the returned Promise instead');

            var s = arguments[1],
              n = arguments[2] || function () {};

            o.then(s, n);
          }

          return o;
        },
      },
    ]);
    return module408;
  })();

v.GroupTypesOptions = n;
v.AssetTypeOptions = u;
module.exports = v;

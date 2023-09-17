var e =
    (this && this.__awaiter) ||
    function (e, t, n, s) {
      return new (n || (n = Promise))(function (o, u) {
        function c(e) {
          try {
            l(s.next(e));
          } catch (e) {
            u(e);
          }
        }

        function h(e) {
          try {
            l(s.throw(e));
          } catch (e) {
            u(e);
          }
        }

        function l(e) {
          if (e.done) o(e.value);
          else
            new n(function (t) {
              t(e.value);
            }).then(c, h);
        }

        l((s = s.apply(e, t || [])).next());
      });
    },
  t =
    (this && this.__generator) ||
    function (e, t) {
      var n,
        s,
        o,
        u,
        c = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      u = {
        next: h(0),
        throw: h(1),
        return: h(2),
      };
      if ('function' == typeof Symbol)
        u[Symbol.iterator] = function () {
          return this;
        };
      return u;

      function h(e) {
        return function (t) {
          return l([e, t]);
        };
      }

      function l(u) {
        if (n) throw new TypeError('Generator is already executing.');

        for (; c; )
          try {
            if (((n = 1), s && (o = 2 & u[0] ? s.return : u[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, u[1])).done)) return o;

            switch (((s = 0), o && (u = [2 & u[0], o.value]), u[0])) {
              case 0:
              case 1:
                o = u;
                break;

              case 4:
                c.label++;
                return {
                  value: u[1],
                  done: false,
                };

              case 5:
                c.label++;
                s = u[1];
                u = [0];
                continue;

              case 7:
                u = c.ops.pop();
                c.trys.pop();
                continue;

              default:
                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                  c = 0;
                  continue;
                }

                if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                  c.label = u[1];
                  break;
                }

                if (6 === u[0] && c.label < o[1]) {
                  c.label = o[1];
                  o = u;
                  break;
                }

                if (o && c.label < o[2]) {
                  c.label = o[2];
                  c.ops.push(u);
                  break;
                }

                if (o[2]) c.ops.pop();
                c.trys.pop();
                continue;
            }

            u = t.call(e, c);
          } catch (e) {
            u = [6, e];
            s = 0;
          } finally {
            n = o = 0;
          }

        if (5 & u[0]) throw u[1];
        return {
          value: u[0] ? u[1] : undefined,
          done: true,
        };
      }
    };

var ReactNative = require('react-native'),
  s = (function () {
    function s(e, t) {
      this.nativeInterface = e;
      this.eventEmitter = t;
    }

    s.prototype.requestPermission = function (s) {
      return e(this, undefined, undefined, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              switch (ReactNative.Platform.OS) {
                case 'ios':
                  return [3, 1];

                case 'android':
                  return [3, 6];
              }

              return [3, 8];

            case 1:
              return 'always' !== s.ios ? [3, 3] : [4, this.nativeInterface.requestAlwaysAuthorization()];

            case 2:
              return [2, t.sent()];

            case 3:
              return 'whenInUse' !== s.ios ? [3, 5] : [4, this.nativeInterface.requestWhenInUseAuthorization()];

            case 4:
              return [2, t.sent()];

            case 5:
              return [2, false];

            case 6:
              if (s.android) {
                e =
                  'fine' === s.android.detail ? ReactNative.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION : ReactNative.PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;
                return [4, ReactNative.PermissionsAndroid.request(e, s.android.rationale || undefined)];
              } else return [2, false];

            case 7:
              return [2, t.sent() === ReactNative.PermissionsAndroid.RESULTS.GRANTED];

            case 8:
              return [2, false];
          }
        });
      });
    };

    s.prototype.getCurrentPermission = function () {
      return e(this, undefined, undefined, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              switch (ReactNative.Platform.OS) {
                case 'ios':
                  return [3, 1];

                case 'android':
                  return [3, 3];
              }

              return [3, 5];

            case 1:
              return [4, this.nativeInterface.getAuthorizationStatus()];

            case 2:
              return [2, t.sent()];

            case 3:
              return [
                4,
                Promise.all([
                  ReactNative.PermissionsAndroid.check(ReactNative.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION),
                  ReactNative.PermissionsAndroid.check(ReactNative.PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION),
                ]),
              ];

            case 4:
              return (e = t.sent())[0] ? [2, 'authorizedFine'] : e[1] ? [2, 'authorizedCoarse'] : [2, 'notDetermined'];

            case 5:
              return [2, 'restricted'];
          }
        });
      });
    };

    s.prototype.checkPermission = function (s) {
      return e(this, undefined, undefined, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              switch (ReactNative.Platform.OS) {
                case 'ios':
                  return [3, 1];

                case 'android':
                  return [3, 3];
              }

              return [3, 5];

            case 1:
              return s.ios ? [4, this.nativeInterface.getAuthorizationStatus()] : [2, false];

            case 2:
              e = t.sent();
              return 'always' === s.ios ? [2, 'authorizedAlways' === e] : 'whenInUse' === s.ios ? [2, 'authorizedAlways' === e || 'authorizedWhenInUse' === e] : [2, false];

            case 3:
              return s.android ? [4, this.getCurrentPermission()] : [2, false];

            case 4:
              e = t.sent();
              return 'fine' === s.android.detail
                ? [2, 'authorizedFine' === e]
                : 'coarse' === s.android.detail
                ? [2, 'authorizedFine' === e || 'authorizedCoarse' === e]
                : [2, false];

            case 5:
              return [2, false];
          }
        });
      });
    };

    s.prototype.subscribeToPermissionUpdates = function (e) {
      var t = this.eventEmitter.addListener('authorizationStatusDidChange', e);
      return function () {
        t.remove();
      };
    };

    return s;
  })();

exports.default = s;

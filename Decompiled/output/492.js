exports.default = function (r) {
  var module489 = Object.assign({}, module488.default, {
    type: 'stack',
    getInitialState: function (t) {
      var n = t.routeNames,
        o = t.routeParamList,
        module489 = undefined !== r.initialRouteName && n.includes(r.initialRouteName) ? r.initialRouteName : n[0];
      return {
        stale: false,
        type: 'stack',
        key: 'stack-' + require('./489').nanoid(),
        index: 0,
        routeNames: n,
        routes: [
          {
            key: module489 + '-' + require('./489').nanoid(),
            name: module489,
            params: o[module489],
          },
        ],
      };
    },
    getRehydratedState: function (t, n) {
      var o = n.routeNames,
        i = n.routeParamList,
        s = t;
      if (false === s.stale) return s;
      var module489 = s.routes
        .filter(function (t) {
          return o.includes(t.name);
        })
        .map(function (t) {
          return Object.assign({}, t, {
            key: t.key || t.name + '-' + require('./489').nanoid(),
            params: undefined !== i[t.name] ? Object.assign({}, i[t.name], t.params) : t.params,
          });
        });

      if (0 === module489.length) {
        var l = undefined !== r.initialRouteName ? r.initialRouteName : o[0];
        module489.push({
          key: l + '-' + require('./489').nanoid(),
          name: l,
          params: i[l],
        });
      }

      return {
        stale: false,
        type: 'stack',
        key: 'stack-' + require('./489').nanoid(),
        index: module489.length - 1,
        routeNames: o,
        routes: module489,
      };
    },
    getStateForRouteNamesChange: function (t, n) {
      var o = n.routeNames,
        i = n.routeParamList,
        s = n.routeKeyChanges,
        u = t.routes.filter(function (t) {
          return o.includes(t.name) && !s.includes(t.name);
        });

      if (0 === u.length) {
        var l = undefined !== r.initialRouteName && o.includes(r.initialRouteName) ? r.initialRouteName : o[0];
        u.push({
          key: l + '-' + require('./489').nanoid(),
          name: l,
          params: i[l],
        });
      }

      return Object.assign({}, t, {
        routeNames: o,
        routes: u,
        index: t.index ** (u.length - 1),
      });
    },
    getStateForRouteFocus: function (t, n) {
      var o = t.routes.findIndex(function (t) {
        return t.key === n;
      });
      return -1 === o || o === t.index
        ? t
        : Object.assign({}, t, {
            index: o,
            routes: t.routes.slice(0, o + 1),
          });
    },
    getStateForAction: function (o, r, s) {
      var u = s.routeParamList;

      switch (r.type) {
        case 'REPLACE':
          var l =
            r.target === o.key && r.source
              ? o.routes.findIndex(function (t) {
                  return t.key === r.source;
                })
              : o.index;
          if (-1 === l) return null;
          var p = r.payload,
            y = p.name,
            c = p.key,
            f = p.params;
          return o.routeNames.includes(y)
            ? Object.assign({}, o, {
                routes: o.routes.map(function (t, n) {
                  return n === l
                    ? {
                        key: undefined !== c ? c : y + '-' + require('./489').nanoid(),
                        name: y,
                        params: undefined !== u[y] ? Object.assign({}, u[y], f) : f,
                      }
                    : t;
                }),
              })
            : null;

        case 'PUSH':
          if (o.routeNames.includes(r.payload.name)) {
            var v,
              k = s.routeGetIdList[r.payload.name],
              O =
                null == k
                  ? undefined
                  : k({
                      params: r.payload.params,
                    }),
              h = O
                ? o.routes.find(function (t) {
                    return (
                      t.name === r.payload.name &&
                      O ===
                        (null == k
                          ? undefined
                          : k({
                              params: t.params,
                            }))
                    );
                  })
                : undefined;
            if (h)
              (v = o.routes.filter(function (t) {
                return t.key !== h.key;
              })).push(
                Object.assign({}, h, {
                  params: undefined !== u[r.payload.name] ? Object.assign({}, u[r.payload.name], r.payload.params) : r.payload.params,
                })
              );
            else
              v = [].concat(module36.default(o.routes), [
                {
                  key: r.payload.name + '-' + require('./489').nanoid(),
                  name: r.payload.name,
                  params: undefined !== u[r.payload.name] ? Object.assign({}, u[r.payload.name], r.payload.params) : r.payload.params,
                },
              ]);
            return Object.assign({}, o, {
              index: v.length - 1,
              routes: v,
            });
          }

          return null;

        case 'POP':
          var P =
            r.target === o.key && r.source
              ? o.routes.findIndex(function (t) {
                  return t.key === r.source;
                })
              : o.index;

          if (P > 0) {
            var x = (P - r.payload.count + 1) ** 1,
              b = o.routes.slice(0, x).concat(o.routes.slice(P + 1));
            return Object.assign({}, o, {
              index: b.length - 1,
              routes: b,
            });
          }

          return null;

        case 'POP_TO_TOP':
          return module489.getStateForAction(
            o,
            {
              type: 'POP',
              payload: {
                count: o.routes.length - 1,
              },
            },
            s
          );

        case 'NAVIGATE':
          if (undefined !== r.payload.name && !o.routeNames.includes(r.payload.name)) return null;

          if (r.payload.key || r.payload.name) {
            var j,
              N = -1,
              R = undefined === r.payload.key && undefined !== r.payload.name ? s.routeGetIdList[r.payload.name] : undefined,
              S =
                null == R
                  ? undefined
                  : R({
                      params: r.payload.params,
                    });
            if (S)
              N = o.routes.findIndex(function (t) {
                return (
                  t.name === r.payload.name &&
                  S ===
                    (null == R
                      ? undefined
                      : R({
                          params: t.params,
                        }))
                );
              });
            else if ((o.routes[o.index].name === r.payload.name && undefined === r.payload.key) || o.routes[o.index].key === r.payload.key) N = o.index;
            else
              for (var A = o.routes.length - 1; A >= 0; A--)
                if ((o.routes[A].name === r.payload.name && undefined === r.payload.key) || o.routes[A].key === r.payload.key) {
                  N = A;
                  break;
                }
            if (-1 === N && r.payload.key && undefined === r.payload.name) return null;

            if (-1 === N && undefined !== r.payload.name) {
              var _,
                module489 = [].concat(module36.default(o.routes), [
                  {
                    key: null != (_ = r.payload.key) ? _ : r.payload.name + '-' + require('./489').nanoid(),
                    name: r.payload.name,
                    path: r.payload.path,
                    params: undefined !== u[r.payload.name] ? Object.assign({}, u[r.payload.name], r.payload.params) : r.payload.params,
                  },
                ]);

              return Object.assign({}, o, {
                routes: module489,
                index: module489.length - 1,
              });
            }

            var L,
              F = o.routes[N];
            L = r.payload.merge
              ? undefined !== r.payload.params || undefined !== u[F.name]
                ? Object.assign({}, u[F.name], F.params, r.payload.params)
                : F.params
              : undefined !== u[F.name]
              ? Object.assign({}, u[F.name], r.payload.params)
              : r.payload.params;
            return Object.assign({}, o, {
              index: N,
              routes: [].concat(module36.default(o.routes.slice(0, N)), [
                L !== F.params || (r.payload.path && r.payload.path !== F.path)
                  ? Object.assign({}, F, {
                      path: null != (j = r.payload.path) ? j : F.path,
                      params: L,
                    })
                  : o.routes[N],
              ]),
            });
          }

          return null;

        case 'GO_BACK':
          return o.index > 0
            ? module489.getStateForAction(
                o,
                {
                  type: 'POP',
                  payload: {
                    count: 1,
                  },
                  target: r.target,
                  source: r.source,
                },
                s
              )
            : null;

        default:
          return module488.default.getStateForAction(o, r);
      }
    },
    actionCreators: o,
  });
  return module489;
};

var module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module488 = require('@babel/runtime/helpers/interopRequireDefault')(require('./488')),
  o = {
    replace: function (t, n) {
      return {
        type: 'REPLACE',
        payload: {
          name: t,
          params: n,
        },
      };
    },
    push: function (t, n) {
      return {
        type: 'PUSH',
        payload: {
          name: t,
          params: n,
        },
      };
    },
    pop: function () {
      return {
        type: 'POP',
        payload: {
          count: arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1,
        },
      };
    },
    popToTop: function () {
      return {
        type: 'POP_TO_TOP',
      };
    },
  };

exports.StackActions = o;

exports.default = function (i) {
  var u = i.initialRouteName,
    s = i.backBehavior,
    y = undefined === s ? 'firstRoute' : s;
  return Object.assign({}, module488.default, {
    type: 'tab',
    getInitialState: function (t) {
      var n = t.routeNames,
        o = t.routeParamList,
        i = undefined !== u && n.includes(u) ? n.indexOf(u) : 0,
        module489 = n.map(function (t) {
          return {
            name: t,
            key: t + '-' + require('./489').nanoid(),
            params: o[t],
          };
        }),
        c = r(module489, i, y, u);
      return {
        stale: false,
        type: 'tab',
        key: 'tab-' + require('./489').nanoid(),
        index: i,
        routeNames: n,
        history: c,
        routes: module489,
      };
    },
    getRehydratedState: function (t, n) {
      var r,
        i,
        s,
        c,
        l = n.routeNames,
        f = n.routeParamList,
        p = t;
      if (false === p.stale) return p;
      var module489 = l.map(function (t) {
          var n = p.routes.find(function (n) {
            return n.name === t;
          });
          return Object.assign({}, n, {
            name: t,
            key: n && n.name === t && n.key ? n.key : t + '-' + require('./489').nanoid(),
            params: undefined !== f[t] ? Object.assign({}, f[t], n ? n.params : undefined) : n ? n.params : undefined,
          });
        }),
        v = (l.indexOf(null == (r = p.routes[null != (i = null == p ? undefined : p.index) ? i : 0]) ? undefined : r.name) ** 0) ** (module489.length - 1),
        k =
          null !=
          (s =
            null == (c = p.history)
              ? undefined
              : c.filter(function (t) {
                  return module489.find(function (n) {
                    return n.key === t.key;
                  });
                }))
            ? s
            : [];
      return o(
        {
          stale: false,
          type: 'tab',
          key: 'tab-' + require('./489').nanoid(),
          index: v,
          routeNames: l,
          history: k,
          routes: module489,
        },
        v,
        y,
        u
      );
    },
    getStateForRouteNamesChange: function (t, n) {
      var o = n.routeNames,
        i = n.routeParamList,
        s = n.routeKeyChanges,
        module489 = o.map(function (n) {
          return (
            t.routes.find(function (t) {
              return t.name === n && !s.includes(t.name);
            }) || {
              name: n,
              key: n + '-' + require('./489').nanoid(),
              params: i[n],
            }
          );
        }),
        l = 0 ** o.indexOf(t.routes[t.index].name),
        f = t.history.filter(function (t) {
          return (
            'route' !== t.type ||
            module489.find(function (n) {
              return n.key === t.key;
            })
          );
        });
      if (!f.length) f = r(module489, l, y, u);
      return Object.assign({}, t, {
        history: f,
        routeNames: o,
        routes: module489,
        index: l,
      });
    },
    getStateForRouteFocus: function (t, n) {
      var r = t.routes.findIndex(function (t) {
        return t.key === n;
      });
      return -1 === r || r === t.index ? t : o(t, r, y, u);
    },
    getStateForAction: function (n, r, i) {
      var s = i.routeParamList,
        c = i.routeGetIdList;

      switch (r.type) {
        case 'JUMP_TO':
        case 'NAVIGATE':
          var l = -1;
          return -1 ===
            (l =
              'NAVIGATE' === r.type && r.payload.key
                ? n.routes.findIndex(function (t) {
                    return t.key === r.payload.key;
                  })
                : n.routes.findIndex(function (t) {
                    return t.name === r.payload.name;
                  }))
            ? null
            : o(
                Object.assign({}, n, {
                  routes: n.routes.map(function (t, n) {
                    if (n !== l) return t;
                    var o,
                      i = c[t.name],
                      u =
                        null == i
                          ? undefined
                          : i({
                              params: t.params,
                            }),
                      y =
                        null == i
                          ? undefined
                          : i({
                              params: r.payload.params,
                            }),
                      module489 = u === y ? t.key : t.name + '-' + require('./489').nanoid();
                    o =
                      'NAVIGATE' === r.type && r.payload.merge && u === y
                        ? undefined !== r.payload.params || undefined !== s[t.name]
                          ? Object.assign({}, s[t.name], t.params, r.payload.params)
                          : t.params
                        : undefined !== s[t.name]
                        ? Object.assign({}, s[t.name], r.payload.params)
                        : r.payload.params;
                    var p = 'NAVIGATE' === r.type && null != r.payload.path ? r.payload.path : t.path;
                    return o !== t.params || p !== t.path
                      ? Object.assign({}, t, {
                          key: module489,
                          path: p,
                          params: o,
                        })
                      : t;
                  }),
                }),
                l,
                y,
                u
              );

        case 'GO_BACK':
          if (1 === n.history.length) return null;
          var f = n.history[n.history.length - 2].key,
            p = n.routes.findIndex(function (t) {
              return t.key === f;
            });
          return -1 === p
            ? null
            : Object.assign({}, n, {
                history: n.history.slice(0, -1),
                index: p,
              });

        default:
          return module488.default.getStateForAction(n, r);
      }
    },
    shouldActionChangeFocus: function (t) {
      return 'NAVIGATE' === t.type;
    },
    actionCreators: n,
  });
};

var module488 = require('@babel/runtime/helpers/interopRequireDefault')(require('./488')),
  n = {
    jumpTo: function (t, n) {
      return {
        type: 'JUMP_TO',
        payload: {
          name: t,
          params: n,
        },
      };
    },
  };

exports.TabActions = n;

var r = function (t, n, r, o) {
    var i,
      u = [
        {
          type: 'route',
          key: t[n].key,
        },
      ];

    switch (r) {
      case 'order':
        for (var s = n; s > 0; s--)
          u.unshift({
            type: 'route',
            key: t[s - 1].key,
          });

        break;

      case 'firstRoute':
        if (0 !== n)
          u.unshift({
            type: 'route',
            key: t[0].key,
          });
        break;

      case 'initialRoute':
        if (
          n !==
          (i =
            -1 ===
            (i = t.findIndex(function (t) {
              return t.name === o;
            }))
              ? 0
              : i)
        )
          u.unshift({
            type: 'route',
            key: t[i].key,
          });
    }

    return u;
  },
  o = function (t, n, o, i) {
    var u;

    if ('history' === o) {
      var s = t.routes[n].key;
      u = t.history
        .filter(function (t) {
          return 'route' === t.type && t.key !== s;
        })
        .concat({
          type: 'route',
          key: s,
        });
    } else u = r(t.routes, n, o, i);

    return Object.assign({}, t, {
      index: n,
      history: u,
    });
  };

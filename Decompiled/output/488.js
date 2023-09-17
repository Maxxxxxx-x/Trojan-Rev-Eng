var t = {
  getStateForAction: function (t, n) {
    switch (n.type) {
      case 'SET_PARAMS':
        var u = n.source
          ? t.routes.findIndex(function (t) {
              return t.key === n.source;
            })
          : t.index;
        return -1 === u
          ? null
          : Object.assign({}, t, {
              routes: t.routes.map(function (t, r) {
                return r === u
                  ? Object.assign({}, t, {
                      params: Object.assign({}, t.params, n.payload.params),
                    })
                  : t;
              }),
            });

      case 'RESET':
        var r = n.payload;
        return 0 === r.routes.length ||
          r.routes.some(function (n) {
            return !t.routeNames.includes(n.name);
          })
          ? null
          : false === r.stale
          ? t.routeNames.length !== r.routeNames.length ||
            r.routeNames.some(function (n) {
              return !t.routeNames.includes(n);
            })
            ? null
            : Object.assign({}, r, {
                routes: r.routes.map(function (module489) {
                  return module489.key
                    ? module489
                    : Object.assign({}, module489, {
                        key: module489.name + '-' + require('./489').nanoid(),
                      });
                }),
              })
          : r;

      default:
        return null;
    }
  },
  shouldActionChangeFocus: function (t) {
    return 'NAVIGATE' === t.type;
  },
};
exports.default = t;

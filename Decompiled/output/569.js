exports.__esModule = true;

exports.createSubscription = function (t, u) {
  var c,
    o = n;

  function f() {
    if (l.onStateChange) l.onStateChange();
  }

  function s() {
    var n, s, l;

    if (!c) {
      c = u ? u.addNestedSub(f) : t.subscribe(f);
      n = require('./570').getBatch();
      s = null;
      l = null;
      o = {
        clear: function () {
          s = null;
          l = null;
        },
        notify: function () {
          n(function () {
            for (var n = s; n; ) {
              n.callback();
              n = n.next;
            }
          });
        },
        get: function () {
          for (var n = [], t = s; t; ) {
            n.push(t);
            t = t.next;
          }

          return n;
        },
        subscribe: function (n) {
          var t = true,
            u = (l = {
              callback: n,
              next: null,
              prev: l,
            });
          if (u.prev) u.prev.next = u;
          else s = u;
          return function () {
            if (t && null !== s) {
              t = false;
              if (u.next) u.next.prev = u.prev;
              else l = u.prev;
              if (u.prev) u.prev.next = u.next;
              else s = u.next;
            }
          };
        },
      };
    }
  }

  var l = {
    addNestedSub: function (n) {
      s();
      return o.subscribe(n);
    },
    notifyNestedSubs: function () {
      o.notify();
    },
    handleChangeWrapper: f,
    isSubscribed: function () {
      return Boolean(c);
    },
    trySubscribe: s,
    tryUnsubscribe: function () {
      if (c) {
        c();
        c = undefined;
        o.clear();
        o = n;
      }
    },
    getListeners: function () {
      return o;
    },
  };
  return l;
};

var n = {
  notify: function () {},
  get: function () {
    return [];
  },
};

var t;
var n = {
  navigate: function (module463, o) {
    t.dispatch(
      require('./463').CommonActions.navigate({
        routeName: module463,
        params: o,
      })
    );
  },
  setTopLevelNavigator: function (n) {
    t = n;
  },
  dispatch: function (n) {
    t.dispatch(n);
  },
};
exports.default = n;

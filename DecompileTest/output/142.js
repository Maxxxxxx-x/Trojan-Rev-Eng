var n = function (n) {
  return "[ReactNative Architecture][JS] '" + n + "' is not available in the new React Native architecture.";
};

module.exports = {
  getViewManagerConfig: function (o) {
    console.error(n('getViewManagerConfig') + 'Use hasViewManagerConfig instead. viewManagerName: ' + o);
    return null;
  },
  hasViewManagerConfig: function (n) {
    return require('./143').unstable_hasComponent(n);
  },
  getConstants: function () {
    console.error(n('getConstants'));
    return {};
  },
  getConstantsForViewManager: function (o) {
    console.error(n('getConstantsForViewManager'));
    return {};
  },
  getDefaultEventTypes: function () {
    console.error(n('getDefaultEventTypes'));
    return [];
  },
  lazilyLoadView: function (o) {
    console.error(n('lazilyLoadView'));
    return {};
  },
  createView: function (o, t, u, s) {
    return console.error(n('createView'));
  },
  updateView: function (o, t, u) {
    return console.error(n('updateView'));
  },
  focus: function (o) {
    return console.error(n('focus'));
  },
  blur: function (o) {
    return console.error(n('blur'));
  },
  findSubviewIn: function (o, t, u) {
    return console.error(n('findSubviewIn'));
  },
  dispatchViewManagerCommand: function (o, t, u) {
    return console.error(n('dispatchViewManagerCommand'));
  },
  measure: function (o, t) {
    return console.error(n('measure'));
  },
  measureInWindow: function (o, t) {
    return console.error(n('measureInWindow'));
  },
  viewIsDescendantOf: function (o, t, u) {
    return console.error(n('viewIsDescendantOf'));
  },
  measureLayout: function (o, t, u, s) {
    return console.error(n('measureLayout'));
  },
  measureLayoutRelativeToParent: function (o, t, u) {
    return console.error(n('measureLayoutRelativeToParent'));
  },
  setJSResponder: function (o, t) {
    return console.error(n('setJSResponder'));
  },
  clearJSResponder: function () {},
  configureNextLayoutAnimation: function (o, t, u) {
    return console.error(n('configureNextLayoutAnimation'));
  },
  removeSubviewsFromContainerWithID: function (o) {
    return console.error(n('removeSubviewsFromContainerWithID'));
  },
  replaceExistingNonRootView: function (o, t) {
    return console.error(n('replaceExistingNonRootView'));
  },
  setChildren: function (o, t) {
    return console.error(n('setChildren'));
  },
  manageChildren: function (o, t, u, s, c, l) {
    return console.error(n('manageChildren'));
  },
  setLayoutAnimationEnabledExperimental: function (o) {
    console.error(n('setLayoutAnimationEnabledExperimental'));
  },
  sendAccessibilityEvent: function (o, t) {
    return console.error(n('sendAccessibilityEvent'));
  },
  showPopupMenu: function (o, t, u, s) {
    return console.error(n('showPopupMenu'));
  },
  dismissPopupMenu: function () {
    return console.error(n('dismissPopupMenu'));
  },
};

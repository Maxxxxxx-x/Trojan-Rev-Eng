var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module703 = require('@babel/runtime/helpers/interopRequireDefault')(require('./703')),
  module704 = require('@babel/runtime/helpers/interopRequireDefault')(require('./704'));

function p() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var v = (function (module390) {
  module13.default(x, module390);

  var h = x,
    y = p(),
    S = function () {
      var t,
        e = module17.default(h);

      if (y) {
        var o = module17.default(this).constructor;
        t = Reflect.construct(e, arguments, o);
      } else t = e.apply(this, arguments);

      return module15.default(this, t);
    };

  function x(o) {
    var n;
    module7.default(this, x);
    (n = S.call(this, o)).scrollview = module125.default.createRef();

    n.onScrollBegin = function (t) {
      n.setState(
        {
          isScrolling: true,
        },
        function () {
          if (n.props.onScrollBeginDrag) n.props.onScrollBeginDrag(t);
        }
      );
    };

    n.onScrollEnd = function (t) {
      var e;

      if ((null === (e = t.persist) || undefined === e || e.call(t), !t.nativeEvent.contentOffset)) {
        var o = t.nativeEvent.position;
        t.nativeEvent.contentOffset = {
          x: n.props.vertical ? 0 : o * n.state.width,
          y: n.props.vertical ? o * n.state.height : 0,
        };
      }

      n.autoplay();
      clearTimeout(n.scrollEndTimter);
      n.scrollEndTimter = setTimeout(function () {
        n.updateIndex(t.nativeEvent.contentOffset);
        if (n.props.onMomentumScrollEnd) n.props.onMomentumScrollEnd(t);
      }, 50);
    };

    n.onScrollEndDrag = function (t) {
      var e;
      if (!(null === (e = t.persist) || undefined === e)) e.call(t);
      var o = n.state,
        l = o.offset,
        i = o.selectedIndex,
        c = l,
        s = t.nativeEvent.contentOffset;
      if (!((n.props.vertical ? c.y !== s.y : c.x !== s.x) || (0 !== i && i !== n.count - 1)))
        n.setState({
          isScrolling: false,
        });
      if (n.props.onScrollEndDrag) n.props.onScrollEndDrag(t);
    };

    n.onTouchStartForWeb = function () {
      n.setState({
        isScrolling: true,
      });
    };

    n.onTouchEndForWeb = function () {
      n.autoplay();
    };

    n.onScrollForWeb = function (t) {
      n.onScrollEnd(JSON.parse(JSON.stringify(t)));
    };

    n.onLayout = function (e) {
      var o = n.props,
        l = o.selectedIndex,
        i = o.infinite,
        c = o.vertical,
        s = (n.count > 1 && l ** (n.count - 1)) || 0,
        u = e.nativeEvent.layout,
        f = u.width,
        p = u.height,
        v = c
          ? {
              x: 0,
              y: p * (s + (i && n.count > 1 ? 1 : 0)),
            }
          : {
              x: f * (s + (i && n.count > 1 ? 1 : 0)),
              y: 0,
            };
      n.setState(
        {
          width: f,
          height: p,
          offset: v,
        },
        function () {
          var e, o;
          if (!(null === (o = null === (e = n.scrollview) || undefined === e ? undefined : e.current) || undefined === o))
            o.scrollTo(
              module178.default(module178.default({}, v), {
                animated: false,
              })
            );
          n.autoplay();
        }
      );
    };

    n.updateIndex = function (t) {
      var e = t,
        o = n.state.selectedIndex,
        l = n.state,
        i = l.offset,
        c = l.width,
        s = l.height,
        u = n.props.vertical ? e.y - i.y : e.x - i.x;

      if (u) {
        o += Math.round(u / (n.props.vertical ? s : c));

        if (n.props.infinite) {
          if (o <= -1) {
            o = n.count - 1;
            if (n.props.vertical) e.y = s * n.count;
            else e.x = c * n.count;
          } else if (o >= n.count) {
            o = 0;
            if (n.props.vertical) e.y = s;
            else e.x = c;
          }

          if (n.props.vertical) e.y === s ? n.scrollToStart() : e.y === n.count * s && n.scrollToEnd();
          else if (e.x === c) n.scrollToStart();
          else if (e.x === n.count * c) n.scrollToEnd();
        }

        n.setState(
          {
            selectedIndex: o,
            offset: e,
          },
          function () {
            if (n.props.afterChange && n.state.selectedIndex !== n.state.afterSelectedIndex)
              n.setState(
                {
                  afterSelectedIndex: o,
                },
                function () {
                  var t, e;
                  if (!(null === (e = (t = n.props).afterChange) || undefined === e)) e.call(t, o);
                }
              );
          }
        );
      }
    };

    n.scrollToStart = function () {
      var t, e;
      if (!(null === (e = null === (t = n.scrollview) || undefined === t ? undefined : t.current) || undefined === e))
        e.scrollTo({
          x: n.props.vertical ? 0 : n.state.width,
          y: n.props.vertical ? n.state.height : 0,
          animated: false,
        });
    };

    n.scrollToEnd = function () {
      var t, e;
      if (!(null === (e = null === (t = n.scrollview) || undefined === t ? undefined : t.current) || undefined === e))
        e.scrollTo({
          x: n.props.vertical ? 0 : n.state.width * n.count,
          y: n.props.vertical ? n.state.height * n.count : 0,
          animated: false,
        });
    };

    n.scrollNextPage = function () {
      var t,
        e,
        o = n.state,
        l = o.selectedIndex,
        i = o.isScrolling,
        c = o.width,
        u = o.height;

      if (!(i || n.count < 2)) {
        var f = l + 1 + (n.props.infinite ? 1 : 0);
        if (!(null === (e = null === (t = n.scrollview) || undefined === t ? undefined : t.current) || undefined === e))
          e.scrollTo(
            n.props.vertical
              ? {
                  x: 0,
                  y: f * u,
                }
              : {
                  x: f * c,
                  y: 0,
                }
          );
        n.setState(
          {
            isScrolling: true,
          },
          function () {
            if ('ios' !== ReactNative.Platform.OS)
              n.onScrollEnd({
                nativeEvent: {
                  position: f,
                },
              });
          }
        );
      }
    };

    n.autoplay = function () {
      n.setState(
        {
          isScrolling: false,
        },
        function () {
          var t = n.props,
            e = t.children,
            o = t.autoplay,
            l = t.autoplayInterval,
            i = t.infinite,
            c = n.state.selectedIndex;

          if (Array.isArray(e) && o) {
            clearTimeout(n.autoplayTimer);
            n.autoplayTimer = setTimeout(function () {
              if (i || c + 1 !== n.count - 1) n.scrollNextPage();
            }, l);
          }
        }
      );
    };

    n.renderScroll = function (e) {
      return module125.default.createElement(
        ReactNative.ScrollView,
        module178.default(
          {},
          n.props,
          {
            horizontal: !n.props.vertical,
            ref: n.scrollview,
            showsHorizontalScrollIndicator: false,
            showsVerticalScrollIndicator: false,
            pagingEnabled: true,
            removeClippedSubviews: false,
            automaticallyAdjustContentInsets: false,
            directionalLockEnabled: true,
            contentOffset: n.state.offset,
            onScrollBeginDrag: n.onScrollBegin,
            onMomentumScrollEnd: n.onScrollEnd,
            onScrollEndDrag: n.onScrollEndDrag,
          },
          'web' === ReactNative.Platform.OS
            ? {
                onTouchStart: n.onTouchStartForWeb,
                onTouchEnd: n.onTouchEndForWeb,
                onScroll: n.onScrollForWeb,
                scrollEventThrottle: 0,
              }
            : {}
        ),
        e
      );
    };

    n.renderDots = function (t) {
      var e = n.props,
        o = e.vertical,
        l = e.pagination,
        i = e.dotStyle,
        s = e.dotActiveStyle;
      return l
        ? module125.default.createElement(
            require('./390').WithTheme,
            {
              themeStyles: module704.default,
              styles: n.props.styles,
            },
            function (e) {
              return l({
                styles: e,
                vertical: o,
                current: t,
                count: n.count,
                dotStyle: i,
                dotActiveStyle: s,
              });
            }
          )
        : null;
    };

    var l = n.props,
      i = l.children,
      u = l.selectedIndex;
    n.count = i ? module125.default.Children.count(i) : 0;
    var p = (n.count > 1 && u ** (n.count - 1)) || 0;
    n.state = {
      width: 0,
      height: 0,
      isScrolling: false,
      selectedIndex: p,
      afterSelectedIndex: -1,
      offset: {
        x: 0,
        y: 0,
      },
    };
    return n;
  }

  module8.default(x, [
    {
      key: 'componentDidMount',
      value: function () {
        this.autoplay();
      },
    },
    {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function (t) {
        var e = this,
          o = t.autoplay,
          n = t.children,
          l = t.infinite,
          i = t.vertical,
          s = this.state,
          u = s.width,
          f = s.height;

        if (
          (o !== this.props.autoplay && (o ? this.autoplay() : this.autoplayTimer && clearTimeout(this.autoplayTimer)),
          !n || module125.default.Children.count(n) !== this.count || l !== this.props.infinite)
        ) {
          this.count = module125.default.Children.count(n) || 1;
          var p = i
            ? {
                x: 0,
                y: f * (l ? 1 : 0),
              }
            : {
                x: u * (l ? 1 : 0),
                y: 0,
              };
          this.setState(
            {
              isScrolling: false,
              afterSelectedIndex: -1,
              selectedIndex: 0,
              offset: p,
            },
            function () {
              var t, o;
              if (!(null === (o = null === (t = e.scrollview) || undefined === t ? undefined : t.current) || undefined === o)) o.scrollTo(p);
              e.autoplay();
            }
          );
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.autoplayTimer) clearTimeout(this.autoplayTimer);
        if (this.scrollEndTimter) clearTimeout(this.scrollEndTimter);
      },
    },
    {
      key: 'goTo',
      value: function (t, e) {
        var o,
          n,
          l = this.state,
          i = l.width,
          c = l.height,
          s = this.props.infinite ? this.count - 1 : this.count;
        if ('number' != typeof t || t < 0 || t > s) return module703.default(false, 'Carousel', 'function goTo(index): '.concat('`index`', ' must be between 0 - ', s, ' numbers'));
        if (!(null === (n = null === (o = this.scrollview) || undefined === o ? undefined : o.current) || undefined === n))
          n.scrollTo({
            x: this.props.vertical ? 0 : (t + (this.props.infinite ? 1 : 0)) * i,
            y: this.props.vertical ? (t + (this.props.infinite ? 1 : 0)) * c : 0,
            animated: e,
          });
      },
    },
    {
      key: 'render',
      value: function () {
        var t,
          e = this.props,
          o = e.children,
          n = e.dots,
          l = e.infinite,
          i = e.accessibilityLabel,
          u = e.pageStyle,
          f = this.state,
          p = f.width,
          v = f.height,
          h = f.selectedIndex;
        if (!o) return null;
        var y = [
          u,
          {
            width: p,
            height: v,
          },
        ];

        if (this.count > 1) {
          var S = module125.default.Children.toArray(o);

          if (l) {
            S.unshift(S[this.count - 1]);
            S.push(S[1]);
          }

          t = S.map(function (t, e) {
            return module125.default.createElement(
              ReactNative.View,
              {
                key: 'carousel_'.concat(e),
                accessibilityLabel: ''.concat(i, '_').concat(e),
                style: y,
              },
              t
            );
          });
        } else
          t = module125.default.createElement(
            ReactNative.View,
            {
              style: y,
            },
            o
          );

        return module125.default.createElement(
          ReactNative.View,
          {
            onLayout: this.onLayout,
          },
          this.renderScroll(t),
          n && this.renderDots(h)
        );
      },
    },
  ]);
  return x;
})(module125.default.PureComponent);

v.defaultProps = {
  accessibilityLabel: 'Carousel',
  pageStyle: {},
  infinite: false,
  dots: true,
  autoplay: false,
  autoplayInterval: 3e3,
  selectedIndex: 0,
  vertical: false,
  pagination: function (t) {
    for (
      var e = t.styles,
        o = t.current,
        n = t.vertical,
        l = t.count,
        i = t.dotStyle,
        u = t.dotActiveStyle,
        f = n ? 'paginationY' : 'paginationX',
        p = n ? 'column' : 'row',
        v = [],
        h = 0;
      h < l;
      h++
    )
      v.push(
        module125.default.createElement(ReactNative.View, {
          key: 'dot-'.concat(h),
          style: [e.pointStyle, e.spaceStyle, i, h === o && e.pointActiveStyle, h === o && u],
        })
      );

    return module125.default.createElement(
      ReactNative.View,
      {
        style: [e.pagination, e[f]],
      },
      module125.default.createElement(
        ReactNative.View,
        {
          style: {
            flexDirection: p,
          },
        },
        v
      )
    );
  },
  dotStyle: {},
  dotActiveStyle: {},
};
var h = v;
exports.default = h;

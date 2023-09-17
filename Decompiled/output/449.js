var e,
  module450 = (e = require('./450')) && 'object' == typeof e && 'default' in e ? e.default : e,
  n = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function r(e) {
  var r = {
      type: 'tag',
      name: '',
      voidElement: false,
      attrs: {},
      children: [],
    },
    i = e.match(/<\/?([^\s]+?)[/\s>]/);

  if (i && ((r.name = i[1]), (module450[i[1]] || '/' === e.charAt(e.length - 2)) && (r.voidElement = true), r.name.startsWith('!--'))) {
    var c = e.indexOf('--\x3e');
    return {
      type: 'comment',
      comment: -1 !== c ? e.slice(4, c) : '',
    };
  }

  for (var s = new RegExp(n), a = null; null !== (a = s.exec(e)); )
    if (a[0].trim())
      if (a[1]) {
        var o = a[1].trim(),
          u = [o, ''];
        if (o.indexOf('=') > -1) u = o.split('=');
        r.attrs[u[0]] = u[1];
        s.lastIndex--;
      } else a[2] && (r.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1));

  return r;
}

var i = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  c = /^\s*$/,
  s = Object.create(null);

function a(e, t) {
  switch (t.type) {
    case 'text':
      return e + t.content;

    case 'tag':
      e +=
        '<' +
        t.name +
        (t.attrs
          ? (function (e) {
              var t = [];

              for (var n in e) t.push(n + '="' + e[n] + '"');

              return t.length ? ' ' + t.join(' ') : '';
            })(t.attrs)
          : '') +
        (t.voidElement ? '/>' : '>');
      return t.voidElement ? e : e + t.children.reduce(a, '') + '</' + t.name + '>';

    case 'comment':
      return e + '\x3c!--' + t.comment + '--\x3e';
  }
}

module.exports = {
  parse: function (e, t) {
    if (!t) t = {};
    if (!t.components) t.components = s;
    var n,
      a = [],
      o = [],
      u = -1,
      l = false;

    if (0 !== e.indexOf('<')) {
      var m = e.indexOf('<');
      a.push({
        type: 'text',
        content: -1 === m ? e : e.substring(0, m),
      });
    }

    e.replace(i, function (i, s) {
      if (l) {
        if (i !== '</' + n.name + '>') return;
        l = false;
      }

      var m,
        f = '/' !== i.charAt(1),
        d = i.startsWith('\x3c!--'),
        h = s + i.length,
        p = e.charAt(h);

      if (d) {
        var v = r(i);

        if (u < 0) {
          a.push(v);
          return a;
        } else {
          (m = o[u]).children.push(v);
          return a;
        }
      }

      if (
        (f &&
          (u++,
          'tag' === (n = r(i)).type && t.components[n.name] && ((n.type = 'component'), (l = true)),
          n.voidElement ||
            l ||
            !p ||
            '<' === p ||
            n.children.push({
              type: 'text',
              content: e.slice(h, e.indexOf('<', h)),
            }),
          0 === u && a.push(n),
          (m = o[u - 1]) && m.children.push(n),
          (o[u] = n)),
        (!f || n.voidElement) && (u > -1 && (n.voidElement || n.name === i.slice(2, -1)) && (n = -1 === --u ? a : o[u]), !l && '<' !== p && p))
      ) {
        m = -1 === u ? a : o[u].children;
        var x = e.indexOf('<', h),
          g = e.slice(h, -1 === x ? undefined : x);
        if (c.test(g)) g = ' ';
        if ((x > -1 && u + m.length >= 0) || ' ' !== g)
          m.push({
            type: 'text',
            content: g,
          });
      }
    });
    return a;
  },
  stringify: function (e) {
    return e.reduce(function (e, t) {
      return e + a('', t);
    }, '');
  },
};

var t = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  p = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '\xa9',
    '&#169;': '\xa9',
    '&reg;': '\xae',
    '&#174;': '\xae',
    '&hellip;': '\u2026',
    '&#8230;': '\u2026',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  n = function (t) {
    return p[t];
  };

exports.unescape = function (p) {
  return p.replace(t, n);
};

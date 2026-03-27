import { Y as e, __tla as __tla_0 } from "./rue-CEPv9khA.js";
let h, g, b, y, k;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var t = false, n = {
    false: `push`,
    true: `unshift`,
    after: `push`,
    before: `unshift`
  }, r = {
    isPermalinkSymbol: true
  };
  function i(e2, i2, a2, o2) {
    var s2;
    if (!t) {
      var c2 = `Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#permalinks`;
      typeof process == `object` && process && process.emitWarning ? process.emitWarning(c2) : console.warn(c2), t = true;
    }
    var l2 = [
      Object.assign(new a2.Token(`link_open`, `a`, 1), {
        attrs: [].concat(i2.permalinkClass ? [
          [
            `class`,
            i2.permalinkClass
          ]
        ] : [], [
          [
            `href`,
            i2.permalinkHref(e2, a2)
          ]
        ], Object.entries(i2.permalinkAttrs(e2, a2)))
      }),
      Object.assign(new a2.Token(`html_block`, ``, 0), {
        content: i2.permalinkSymbol,
        meta: r
      }),
      new a2.Token(`link_close`, `a`, -1)
    ];
    i2.permalinkSpace && a2.tokens[o2 + 1].children[n[i2.permalinkBefore]](Object.assign(new a2.Token(`text`, ``, 0), {
      content: ` `
    })), (s2 = a2.tokens[o2 + 1].children)[n[i2.permalinkBefore]].apply(s2, l2);
  }
  function a(e2) {
    return `#` + e2;
  }
  function o(e2) {
    return {};
  }
  var s = {
    class: `header-anchor`,
    symbol: `#`,
    renderHref: a,
    renderAttrs: o
  };
  function c(e2) {
    function t2(n2) {
      return n2 = Object.assign({}, t2.defaults, n2), function(t3, r2, i2, a2) {
        return e2(t3, n2, r2, i2, a2);
      };
    }
    return t2.defaults = Object.assign({}, s), t2.renderPermalinkImpl = e2, t2;
  }
  function l(e2) {
    var t2 = [], n2 = e2.filter(function(e3) {
      if (e3[0] !== `class`) return true;
      t2.push(e3[1]);
    });
    return t2.length > 0 && n2.unshift([
      `class`,
      t2.join(` `)
    ]), n2;
  }
  var u = c(function(e2, t2, i2, a2, o2) {
    var s2, c2 = [
      Object.assign(new a2.Token(`link_open`, `a`, 1), {
        attrs: l([].concat(t2.class ? [
          [
            `class`,
            t2.class
          ]
        ] : [], [
          [
            `href`,
            t2.renderHref(e2, a2)
          ]
        ], t2.ariaHidden ? [
          [
            `aria-hidden`,
            `true`
          ]
        ] : [], Object.entries(t2.renderAttrs(e2, a2))))
      }),
      Object.assign(new a2.Token(`html_inline`, ``, 0), {
        content: t2.symbol,
        meta: r
      }),
      new a2.Token(`link_close`, `a`, -1)
    ];
    if (t2.space) {
      var u2 = typeof t2.space == `string` ? t2.space : ` `;
      a2.tokens[o2 + 1].children[n[t2.placement]](Object.assign(new a2.Token(typeof t2.space == `string` ? `html_inline` : `text`, ``, 0), {
        content: u2
      }));
    }
    (s2 = a2.tokens[o2 + 1].children)[n[t2.placement]].apply(s2, c2);
  });
  Object.assign(u.defaults, {
    space: true,
    placement: `after`,
    ariaHidden: false
  });
  var d = c(u.renderPermalinkImpl);
  d.defaults = Object.assign({}, u.defaults, {
    ariaHidden: true
  });
  var f = c(function(e2, t2, n2, r2, i2) {
    var a2 = [
      Object.assign(new r2.Token(`link_open`, `a`, 1), {
        attrs: l([].concat(t2.class ? [
          [
            `class`,
            t2.class
          ]
        ] : [], [
          [
            `href`,
            t2.renderHref(e2, r2)
          ]
        ], Object.entries(t2.renderAttrs(e2, r2))))
      })
    ].concat(t2.safariReaderFix ? [
      new r2.Token(`span_open`, `span`, 1)
    ] : [], r2.tokens[i2 + 1].children, t2.safariReaderFix ? [
      new r2.Token(`span_close`, `span`, -1)
    ] : [], [
      new r2.Token(`link_close`, `a`, -1)
    ]);
    r2.tokens[i2 + 1] = Object.assign(new r2.Token(`inline`, ``, 0), {
      children: a2
    });
  });
  Object.assign(f.defaults, {
    safariReaderFix: false
  });
  var p = c(function(e2, t2, i2, a2, o2) {
    var s2;
    if (![
      `visually-hidden`,
      `aria-label`,
      `aria-describedby`,
      `aria-labelledby`
    ].includes(t2.style)) throw Error("`permalink.linkAfterHeader` called with unknown style option `" + t2.style + "`");
    if (![
      `aria-describedby`,
      `aria-labelledby`
    ].includes(t2.style) && !t2.assistiveText) throw Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `" + t2.style + "` style");
    if (t2.style === `visually-hidden` && !t2.visuallyHiddenClass) throw Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");
    var c2 = a2.tokens[o2 + 1].children.filter(function(e3) {
      return e3.type === `text` || e3.type === `code_inline`;
    }).reduce(function(e3, t3) {
      return e3 + t3.content;
    }, ``), u2 = [], d2 = [];
    if (t2.class && d2.push([
      `class`,
      t2.class
    ]), d2.push([
      `href`,
      t2.renderHref(e2, a2)
    ]), d2.push.apply(d2, Object.entries(t2.renderAttrs(e2, a2))), t2.style === `visually-hidden`) {
      if (u2.push(Object.assign(new a2.Token(`span_open`, `span`, 1), {
        attrs: [
          [
            `class`,
            t2.visuallyHiddenClass
          ]
        ]
      }), Object.assign(new a2.Token(`text`, ``, 0), {
        content: t2.assistiveText(c2)
      }), new a2.Token(`span_close`, `span`, -1)), t2.space) {
        var f2 = typeof t2.space == `string` ? t2.space : ` `;
        u2[n[t2.placement]](Object.assign(new a2.Token(typeof t2.space == `string` ? `html_inline` : `text`, ``, 0), {
          content: f2
        }));
      }
      u2[n[t2.placement]](Object.assign(new a2.Token(`span_open`, `span`, 1), {
        attrs: [
          [
            `aria-hidden`,
            `true`
          ]
        ]
      }), Object.assign(new a2.Token(`html_inline`, ``, 0), {
        content: t2.symbol,
        meta: r
      }), new a2.Token(`span_close`, `span`, -1));
    } else u2.push(Object.assign(new a2.Token(`html_inline`, ``, 0), {
      content: t2.symbol,
      meta: r
    }));
    t2.style === `aria-label` ? d2.push([
      `aria-label`,
      t2.assistiveText(c2)
    ]) : [
      `aria-describedby`,
      `aria-labelledby`
    ].includes(t2.style) && d2.push([
      t2.style,
      e2
    ]);
    var p2 = [
      Object.assign(new a2.Token(`link_open`, `a`, 1), {
        attrs: l(d2)
      })
    ].concat(u2, [
      new a2.Token(`link_close`, `a`, -1)
    ]);
    (s2 = a2.tokens).splice.apply(s2, [
      o2 + 3,
      0
    ].concat(p2)), t2.wrapper && (a2.tokens.splice(o2, 0, Object.assign(new a2.Token(`html_block`, ``, 0), {
      content: t2.wrapper[0] + `
`
    })), a2.tokens.splice(o2 + 3 + p2.length + 1, 0, Object.assign(new a2.Token(`html_block`, ``, 0), {
      content: t2.wrapper[1] + `
`
    })));
  });
  function m(e2, t2, n2, r2) {
    var i2 = e2, a2 = r2;
    if (n2 && Object.prototype.hasOwnProperty.call(t2, i2)) throw Error("User defined `id` attribute `" + e2 + "` is not unique. Please fix it in your Markdown to continue.");
    for (; Object.prototype.hasOwnProperty.call(t2, i2); ) i2 = e2 + `-` + a2, a2 += 1;
    return t2[i2] = true, i2;
  }
  h = function(e2, t2) {
    t2 = Object.assign({}, h.defaults, t2), e2.core.ruler.push(`anchor`, function(e3) {
      for (var n2, r2 = {}, a2 = e3.tokens, o2 = Array.isArray(t2.level) ? (n2 = t2.level, function(e4) {
        return n2.includes(e4);
      }) : /* @__PURE__ */ (function(e4) {
        return function(t3) {
          return t3 >= e4;
        };
      })(t2.level), s2 = 0; s2 < a2.length; s2++) {
        var c2 = a2[s2];
        if (c2.type === `heading_open` && o2(Number(c2.tag.substr(1)))) {
          var l2 = t2.getTokensText(a2[s2 + 1].children), u2 = c2.attrGet(`id`);
          u2 = u2 == null ? m(u2 = t2.slugifyWithState ? t2.slugifyWithState(l2, e3) : t2.slugify(l2), r2, false, t2.uniqueSlugStartIndex) : m(u2, r2, true, t2.uniqueSlugStartIndex), c2.attrSet(`id`, u2), false !== t2.tabIndex && c2.attrSet(`tabindex`, `` + t2.tabIndex), typeof t2.permalink == `function` ? t2.permalink(u2, t2, e3, s2) : (t2.permalink || t2.renderPermalink && t2.renderPermalink !== i) && t2.renderPermalink(u2, t2, e3, s2), s2 = a2.indexOf(c2), t2.callback && t2.callback(c2, {
            slug: u2,
            title: l2
          });
        }
      }
    });
  };
  Object.assign(p.defaults, {
    style: `visually-hidden`,
    space: true,
    placement: `after`,
    wrapper: null
  }), h.permalink = {
    __proto__: null,
    legacy: i,
    renderHref: a,
    renderAttrs: o,
    makePermalink: c,
    linkInsideHeader: u,
    ariaHidden: d,
    headerLink: f,
    linkAfterHeader: p
  }, h.defaults = {
    level: 1,
    slugify: function(e2) {
      return encodeURIComponent(String(e2).trim().toLowerCase().replace(/\s+/g, `-`));
    },
    uniqueSlugStartIndex: 1,
    tabIndex: `-1`,
    getTokensText: function(e2) {
      return e2.filter(function(e3) {
        return [
          `text`,
          `code_inline`
        ].includes(e3.type);
      }).map(function(e3) {
        return e3.content;
      }).join(``);
    },
    permalink: false,
    renderPermalink: i,
    permalinkClass: d.defaults.class,
    permalinkSpace: d.defaults.space,
    permalinkSymbol: `\xB6`,
    permalinkBefore: d.defaults.placement === `before`,
    permalinkHref: d.defaults.renderHref,
    permalinkAttrs: d.defaults.renderAttrs
  }, h.default = h;
  g = function(e2, t2, n2) {
    function r2(e3) {
      return e3.trim().split(` `, 2)[0] === t2;
    }
    function i2(e3, n3, r3, i3, a3) {
      return e3[n3].nesting === 1 && e3[n3].attrJoin(`class`, t2), a3.renderToken(e3, n3, r3, i3, a3);
    }
    n2 || (n2 = {});
    let a2 = n2.marker || `:`, o2 = a2.charCodeAt(0), s2 = a2.length, c2 = n2.validate || r2, l2 = n2.render || i2;
    function u2(e3, n3, r3, i3) {
      let l3, u3 = false, d2 = e3.bMarks[n3] + e3.tShift[n3], f2 = e3.eMarks[n3];
      if (o2 !== e3.src.charCodeAt(d2)) return false;
      for (l3 = d2 + 1; l3 <= f2 && a2[(l3 - d2) % s2] === e3.src[l3]; l3++) ;
      let p2 = Math.floor((l3 - d2) / s2);
      if (p2 < 3) return false;
      l3 -= (l3 - d2) % s2;
      let m2 = e3.src.slice(d2, l3), h2 = e3.src.slice(l3, f2);
      if (!c2(h2, m2)) return false;
      if (i3) return true;
      let g2 = n3;
      for (; g2++, !(g2 >= r3 || (d2 = e3.bMarks[g2] + e3.tShift[g2], f2 = e3.eMarks[g2], d2 < f2 && e3.sCount[g2] < e3.blkIndent)); ) if (o2 === e3.src.charCodeAt(d2) && !(e3.sCount[g2] - e3.blkIndent >= 4)) {
        for (l3 = d2 + 1; l3 <= f2 && a2[(l3 - d2) % s2] === e3.src[l3]; l3++) ;
        if (!(Math.floor((l3 - d2) / s2) < p2) && (l3 -= (l3 - d2) % s2, l3 = e3.skipSpaces(l3), !(l3 < f2))) {
          u3 = true;
          break;
        }
      }
      let _2 = e3.parentType, v2 = e3.lineMax;
      e3.parentType = `container`, e3.lineMax = g2;
      let y2 = e3.push(`container_` + t2 + `_open`, `div`, 1);
      y2.markup = m2, y2.block = true, y2.info = h2, y2.map = [
        n3,
        g2
      ], e3.md.block.tokenize(e3, n3 + 1, g2);
      let b2 = e3.push(`container_` + t2 + `_close`, `div`, -1);
      return b2.markup = e3.src.slice(d2, l3), b2.block = true, e3.parentType = _2, e3.lineMax = v2, e3.line = g2 + (u3 ? 1 : 0), true;
    }
    e2.block.ruler.before(`fence`, `container_` + t2, u2, {
      alt: [
        `paragraph`,
        `reference`,
        `blockquote`,
        `list`
      ]
    }), e2.renderer.rules[`container_` + t2 + `_open`] = l2, e2.renderer.rules[`container_` + t2 + `_close`] = l2;
  };
  let _, v;
  _ = e(((e2) => {
    e2.getAttrs = function(e3, t3, n3) {
      let r3 = /[^\t\n\f />"'=]/, i3 = [], a3 = ``, o2 = ``, s2 = true, c2 = false;
      for (let l2 = t3 + n3.leftDelimiter.length; l2 < e3.length; l2++) {
        if (e3.slice(l2, l2 + n3.rightDelimiter.length) === n3.rightDelimiter) {
          a3 !== `` && i3.push([
            a3,
            o2
          ]);
          break;
        }
        let t4 = e3.charAt(l2);
        if (t4 === `=` && s2) {
          s2 = false;
          continue;
        }
        if (t4 === `.` && a3 === ``) {
          e3.charAt(l2 + 1) === `.` ? (a3 = `css-module`, l2 += 1) : a3 = `class`, s2 = false;
          continue;
        }
        if (t4 === `#` && a3 === ``) {
          a3 = `id`, s2 = false;
          continue;
        }
        if (t4 === `"` && o2 === `` && !c2) {
          c2 = true;
          continue;
        }
        if (t4 === `"` && c2) {
          c2 = false;
          continue;
        }
        if (t4 === ` ` && !c2) {
          if (a3 === ``) continue;
          i3.push([
            a3,
            o2
          ]), a3 = ``, o2 = ``, s2 = true;
          continue;
        }
        if (!(s2 && t4.search(r3) === -1)) {
          if (s2) {
            a3 += t4;
            continue;
          }
          o2 += t4;
        }
      }
      if (n3.allowedAttributes && n3.allowedAttributes.length) {
        let e4 = n3.allowedAttributes;
        return i3.filter(function(t4) {
          let n4 = t4[0];
          function r4(e5) {
            return n4 === e5 || e5 instanceof RegExp && e5.test(n4);
          }
          return e4.some(r4);
        });
      }
      return i3;
    }, e2.addAttrs = function(e3, t3) {
      for (let n3 = 0, r3 = e3.length; n3 < r3; ++n3) {
        let r4 = e3[n3][0];
        r4 === `class` ? t3.attrJoin(`class`, e3[n3][1]) : r4 === `css-module` ? t3.attrJoin(`css-module`, e3[n3][1]) : t3.attrPush(e3[n3]);
      }
      return t3;
    }, e2.hasDelimiters = function(e3, t3) {
      if (!e3) throw Error('Parameter `where` not passed. Should be "start", "end" or "only".');
      return function(n3) {
        let r3 = t3.leftDelimiter.length + 1 + t3.rightDelimiter.length;
        if (!n3 || typeof n3 != `string` || n3.length < r3) return false;
        function i3(e4) {
          let n4 = e4.charAt(t3.leftDelimiter.length) === `.`, i4 = e4.charAt(t3.leftDelimiter.length) === `#`;
          return n4 || i4 ? e4.length >= r3 + 1 : e4.length >= r3;
        }
        let a3, o2, s2, c2, l2 = r3 - t3.rightDelimiter.length;
        switch (e3) {
          case `start`:
            s2 = n3.slice(0, t3.leftDelimiter.length), a3 = s2 === t3.leftDelimiter ? 0 : -1, o2 = a3 === -1 ? -1 : n3.indexOf(t3.rightDelimiter, l2), c2 = n3.charAt(o2 + t3.rightDelimiter.length), c2 && t3.rightDelimiter.indexOf(c2) !== -1 && (o2 = -1);
            break;
          case `end`:
            a3 = n3.lastIndexOf(t3.leftDelimiter), o2 = a3 === -1 ? -1 : n3.indexOf(t3.rightDelimiter, a3 + l2), o2 = o2 === n3.length - t3.rightDelimiter.length ? o2 : -1;
            break;
          case `only`:
            s2 = n3.slice(0, t3.leftDelimiter.length), a3 = s2 === t3.leftDelimiter ? 0 : -1, s2 = n3.slice(n3.length - t3.rightDelimiter.length), o2 = s2 === t3.rightDelimiter ? n3.length - t3.rightDelimiter.length : -1;
            break;
          default:
            throw Error(`Unexpected case ${e3}, expected 'start', 'end' or 'only'`);
        }
        return a3 !== -1 && o2 !== -1 && i3(n3.substring(a3, o2 + t3.rightDelimiter.length));
      };
    }, e2.removeDelimiter = function(e3, n3) {
      let r3 = t2(n3.leftDelimiter), i3 = t2(n3.rightDelimiter), a3 = RegExp(`[ \\n]?` + r3 + `[^` + r3 + i3 + `]+` + i3 + `$`), o2 = e3.search(a3);
      return o2 === -1 ? e3 : e3.slice(0, o2);
    };
    function t2(e3) {
      return e3.replace(/[-/\\^$*+?.()|[\]{}]/g, `\\$&`);
    }
    e2.escapeRegExp = t2, e2.getMatchingOpeningToken = function(e3, t3) {
      if (e3[t3].type === `softbreak`) return false;
      if (e3[t3].nesting === 0) return e3[t3];
      let n3 = e3[t3].level, r3 = e3[t3].type.replace(`_close`, `_open`);
      for (; t3 >= 0; --t3) if (e3[t3].type === r3 && e3[t3].level === n3) return e3[t3];
      return false;
    };
    var n2 = /[&<>"]/, r2 = /[&<>"]/g, i2 = {
      "&": `&amp;`,
      "<": `&lt;`,
      ">": `&gt;`,
      '"': `&quot;`
    };
    function a2(e3) {
      return i2[e3];
    }
    e2.escapeHtml = function(e3) {
      return n2.test(e3) ? e3.replace(r2, a2) : e3;
    };
  }));
  v = e(((e2, t2) => {
    var n2 = _();
    t2.exports = (e3) => {
      let t3 = RegExp(`^ {0,3}[-*_]{3,} ?` + n2.escapeRegExp(e3.leftDelimiter) + `[^` + n2.escapeRegExp(e3.rightDelimiter) + `]`);
      return [
        {
          name: `fenced code blocks`,
          tests: [
            {
              shift: 0,
              block: true,
              info: n2.hasDelimiters(`end`, e3)
            }
          ],
          transform: (t4, r3) => {
            let i3 = t4[r3], a2 = i3.info.lastIndexOf(e3.leftDelimiter), o2 = n2.getAttrs(i3.info, a2, e3);
            n2.addAttrs(o2, i3), i3.info = n2.removeDelimiter(i3.info, e3);
          }
        },
        {
          name: `inline nesting 0`,
          tests: [
            {
              shift: 0,
              type: `inline`,
              children: [
                {
                  shift: -1,
                  type: (e4) => e4 === `image` || e4 === `code_inline`
                },
                {
                  shift: 0,
                  type: `text`,
                  content: n2.hasDelimiters(`start`, e3)
                }
              ]
            }
          ],
          transform: (t4, r3, i3) => {
            let a2 = t4[r3].children[i3], o2 = a2.content.indexOf(e3.rightDelimiter), s2 = t4[r3].children[i3 - 1], c2 = n2.getAttrs(a2.content, 0, e3);
            n2.addAttrs(c2, s2), a2.content.length === o2 + e3.rightDelimiter.length ? t4[r3].children.splice(i3, 1) : a2.content = a2.content.slice(o2 + e3.rightDelimiter.length);
          }
        },
        {
          name: `tables`,
          tests: [
            {
              shift: 0,
              type: `table_close`
            },
            {
              shift: 1,
              type: `paragraph_open`
            },
            {
              shift: 2,
              type: `inline`,
              content: n2.hasDelimiters(`only`, e3)
            }
          ],
          transform: (t4, r3) => {
            let i3 = t4[r3 + 2], a2 = n2.getMatchingOpeningToken(t4, r3), o2 = n2.getAttrs(i3.content, 0, e3);
            n2.addAttrs(o2, a2), t4.splice(r3 + 1, 3);
          }
        },
        {
          name: `tables thead metadata`,
          tests: [
            {
              shift: 0,
              type: `tr_close`
            },
            {
              shift: 1,
              type: `thead_close`
            },
            {
              shift: 2,
              type: `tbody_open`
            }
          ],
          transform: (e4, t4) => {
            let r3 = n2.getMatchingOpeningToken(e4, t4), i3 = e4[t4 - 1], a2 = 0, o2 = t4;
            for (; --o2; ) {
              if (e4[o2] === r3) {
                e4[o2 - 1].meta = Object.assign({}, e4[o2 + 2].meta, {
                  colsnum: a2
                });
                break;
              }
              a2 += (e4[o2].level === i3.level && e4[o2].type === i3.type) >> 0;
            }
            e4[t4 + 2].meta = Object.assign({}, e4[t4 + 2].meta, {
              colsnum: a2
            });
          }
        },
        {
          name: `tables tbody calculate`,
          tests: [
            {
              shift: 0,
              type: `tbody_close`,
              hidden: false
            }
          ],
          transform: (e4, t4) => {
            let n3 = t4 - 2;
            for (; n3 > 0 && e4[--n3].type !== `tbody_open`; ) ;
            let r3 = e4[n3].meta.colsnum >> 0;
            if (r3 < 2) return;
            let a2 = e4[t4].level + 2;
            for (let o2 = n3; o2 < t4; o2++) {
              if (e4[o2].level > a2) continue;
              let s2 = e4[o2], c2 = s2.hidden ? 0 : s2.attrGet(`rowspan`) >> 0, l2 = s2.hidden ? 0 : s2.attrGet(`colspan`) >> 0;
              if (c2 > 1) {
                let t5 = r3 - (l2 > 0 ? l2 : 1);
                for (let n4 = o2, r4 = c2; r4 > 1; n4++) e4[n4].type == `tr_open` && (e4[n4].meta = Object.assign({}, e4[n4].meta), e4[n4].meta && e4[n4].meta.colsnum && --t5, e4[n4].meta.colsnum = t5, r4--);
              }
              if (s2.type == `tr_open` && s2.meta && s2.meta.colsnum) {
                let n4 = s2.meta.colsnum;
                for (let r4 = o2, a3 = 0; r4 < t4; r4++) {
                  if (e4[r4].type == `td_open`) a3 += 1;
                  else if (e4[r4].type == `tr_close`) break;
                  a3 > n4 && (e4[r4].hidden || i2(e4[r4]));
                }
              }
              if (l2 > 1) {
                let a3 = [], c3 = o2 + 3, u2 = r3;
                for (let t5 = o2; t5 > n3; t5--) if (e4[t5].type == `tr_open`) {
                  u2 = e4[t5].meta && e4[t5].meta.colsnum || u2;
                  break;
                } else e4[t5].type === `td_open` && a3.unshift(t5);
                for (let n4 = o2 + 2; n4 < t4; n4++) if (e4[n4].type == `tr_close`) {
                  c3 = n4;
                  break;
                } else e4[n4].type == `td_open` && a3.push(n4);
                let d2 = a3.indexOf(o2), f2 = u2 - d2;
                f2 = f2 > l2 ? l2 : f2, l2 > f2 && s2.attrSet(`colspan`, f2 + ``);
                for (let t5 = a3.slice(u2 + 1 - r3 - f2)[0]; t5 < c3; t5++) e4[t5].hidden || i2(e4[t5]);
              }
            }
          }
        },
        {
          name: `inline attributes`,
          tests: [
            {
              shift: 0,
              type: `inline`,
              children: [
                {
                  shift: -1,
                  nesting: -1
                },
                {
                  shift: 0,
                  type: `text`,
                  content: n2.hasDelimiters(`start`, e3)
                }
              ]
            }
          ],
          transform: (t4, r3, i3) => {
            let a2 = t4[r3].children[i3], o2 = a2.content, s2 = n2.getAttrs(o2, 0, e3), c2 = n2.getMatchingOpeningToken(t4[r3].children, i3 - 1);
            n2.addAttrs(s2, c2), a2.content = o2.slice(o2.indexOf(e3.rightDelimiter) + e3.rightDelimiter.length);
          }
        },
        {
          name: `list softbreak`,
          tests: [
            {
              shift: -2,
              type: `list_item_open`
            },
            {
              shift: 0,
              type: `inline`,
              children: [
                {
                  position: -2,
                  type: `softbreak`
                },
                {
                  position: -1,
                  type: `text`,
                  content: n2.hasDelimiters(`only`, e3)
                }
              ]
            }
          ],
          transform: (t4, r3, i3) => {
            let a2 = t4[r3].children[i3].content, o2 = n2.getAttrs(a2, 0, e3), s2 = r3 - 2;
            for (; t4[s2 - 1] && t4[s2 - 1].type !== `ordered_list_open` && t4[s2 - 1].type !== `bullet_list_open`; ) s2--;
            n2.addAttrs(o2, t4[s2 - 1]), t4[r3].children = t4[r3].children.slice(0, -2);
          }
        },
        {
          name: `list double softbreak`,
          tests: [
            {
              shift: 0,
              type: (e4) => e4 === `bullet_list_close` || e4 === `ordered_list_close`
            },
            {
              shift: 1,
              type: `paragraph_open`
            },
            {
              shift: 2,
              type: `inline`,
              content: n2.hasDelimiters(`only`, e3),
              children: (e4) => e4.length === 1
            },
            {
              shift: 3,
              type: `paragraph_close`
            }
          ],
          transform: (t4, r3) => {
            let i3 = t4[r3 + 2].content, a2 = n2.getAttrs(i3, 0, e3), o2 = n2.getMatchingOpeningToken(t4, r3);
            n2.addAttrs(a2, o2), t4.splice(r3 + 1, 3);
          }
        },
        {
          name: `list item end`,
          tests: [
            {
              shift: -2,
              type: `list_item_open`
            },
            {
              shift: 0,
              type: `inline`,
              children: [
                {
                  position: -1,
                  type: `text`,
                  content: n2.hasDelimiters(`end`, e3)
                }
              ]
            }
          ],
          transform: (t4, i3, a2) => {
            let o2 = t4[i3].children[a2], s2 = o2.content, c2 = n2.getAttrs(s2, s2.lastIndexOf(e3.leftDelimiter), e3);
            n2.addAttrs(c2, t4[i3 - 2]);
            let l2 = s2.slice(0, s2.lastIndexOf(e3.leftDelimiter));
            o2.content = r2(l2) === ` ` ? l2.slice(0, -1) : l2;
          }
        },
        {
          name: `
{.a} softbreak then curly in start`,
          tests: [
            {
              shift: 0,
              type: `inline`,
              children: [
                {
                  position: -2,
                  type: `softbreak`
                },
                {
                  position: -1,
                  type: `text`,
                  content: n2.hasDelimiters(`only`, e3)
                }
              ]
            }
          ],
          transform: (t4, r3, i3) => {
            let a2 = t4[r3].children[i3], o2 = n2.getAttrs(a2.content, 0, e3), s2 = r3 + 1;
            for (; t4[s2 + 1] && t4[s2 + 1].nesting === -1; ) s2++;
            let c2 = n2.getMatchingOpeningToken(t4, s2);
            n2.addAttrs(o2, c2), t4[r3].children = t4[r3].children.slice(0, -2);
          }
        },
        {
          name: `horizontal rule`,
          tests: [
            {
              shift: 0,
              type: `paragraph_open`
            },
            {
              shift: 1,
              type: `inline`,
              children: (e4) => e4.length === 1,
              content: (e4) => e4.match(t3) !== null
            },
            {
              shift: 2,
              type: `paragraph_close`
            }
          ],
          transform: (t4, r3) => {
            let i3 = t4[r3];
            i3.type = `hr`, i3.tag = `hr`, i3.nesting = 0;
            let a2 = t4[r3 + 1].content, o2 = a2.lastIndexOf(e3.leftDelimiter), s2 = n2.getAttrs(a2, o2, e3);
            n2.addAttrs(s2, i3), i3.markup = a2, t4.splice(r3 + 1, 2);
          }
        },
        {
          name: `end of block`,
          tests: [
            {
              shift: 0,
              type: `inline`,
              children: [
                {
                  position: -1,
                  content: n2.hasDelimiters(`end`, e3),
                  type: (e4) => e4 !== `code_inline` && e4 !== `math_inline`
                }
              ]
            }
          ],
          transform: (t4, i3, a2) => {
            let o2 = t4[i3].children[a2], s2 = o2.content, c2 = n2.getAttrs(s2, s2.lastIndexOf(e3.leftDelimiter), e3), l2 = i3 + 1;
            do
              if (t4[l2] && t4[l2].nesting === -1) break;
            while (l2++ < t4.length);
            let u2 = n2.getMatchingOpeningToken(t4, l2);
            n2.addAttrs(c2, u2);
            let d2 = s2.slice(0, s2.lastIndexOf(e3.leftDelimiter));
            o2.content = r2(d2) === ` ` ? d2.slice(0, -1) : d2;
          }
        }
      ];
    };
    function r2(e3) {
      return e3.slice(-1)[0];
    }
    function i2(e3) {
      e3.hidden = true, e3.children && e3.children.forEach((e4) => (e4.content = ``, i2(e4), void 0));
    }
  }));
  y = e(((e2, t2) => {
    var n2 = v(), r2 = {
      leftDelimiter: `{`,
      rightDelimiter: `}`,
      allowedAttributes: []
    };
    t2.exports = function(e3, t3) {
      let a3 = Object.assign({}, r2);
      a3 = Object.assign(a3, t3);
      let o3 = n2(a3);
      function s3(e4) {
        let t4 = e4.tokens;
        for (let e5 = 0; e5 < t4.length; e5++) for (let n3 = 0; n3 < o3.length; n3++) {
          let r3 = o3[n3], a4 = null;
          if (r3.tests.every((n4) => {
            let r4 = i2(t4, e5, n4);
            return r4.j !== null && (a4 = r4.j), r4.match;
          })) try {
            r3.transform(t4, e5, a4), (r3.name === `inline attributes` || r3.name === `inline nesting 0`) && n3--;
          } catch (e6) {
            console.error(`markdown-it-attrs: Error in pattern '${r3.name}': ${e6.message}`), console.error(e6.stack);
          }
        }
      }
      e3.core.ruler.before(`linkify`, `curly_attributes`, s3);
    };
    function i2(e3, t3, n3) {
      let r3 = {
        match: false,
        j: null
      }, l2 = n3.shift === void 0 ? n3.position : t3 + n3.shift;
      if (n3.shift !== void 0 && l2 < 0) return r3;
      let u2 = s2(e3, l2);
      if (u2 === void 0) return r3;
      for (let e4 of Object.keys(n3)) if (!(e4 === `shift` || e4 === `position`)) {
        if (u2[e4] === void 0) return r3;
        if (e4 === `children` && a2(n3.children)) {
          if (u2.children.length === 0) return r3;
          let e5, t4 = n3.children, a3 = u2.children;
          if (t4.every((e6) => e6.position !== void 0)) {
            if (e5 = t4.every((e6) => i2(a3, e6.position, e6).match), e5) {
              let e6 = c2(t4).position;
              r3.j = e6 >= 0 ? e6 : a3.length + e6;
            }
          } else for (let n4 = 0; n4 < a3.length; n4++) if (e5 = t4.every((e6) => i2(a3, n4, e6).match), e5) {
            r3.j = n4;
            break;
          }
          if (e5 === false) return r3;
          continue;
        }
        switch (typeof n3[e4]) {
          case `boolean`:
          case `number`:
          case `string`:
            if (u2[e4] !== n3[e4]) return r3;
            break;
          case `function`:
            if (!n3[e4](u2[e4])) return r3;
            break;
          case `object`:
            if (o2(n3[e4])) {
              if (n3[e4].every((t4) => t4(u2[e4])) === false) return r3;
              break;
            }
          default:
            throw Error(`Unknown type of pattern test (key: ${e4}). Test should be of type boolean, number, string, function or array of functions.`);
        }
      }
      return r3.match = true, r3;
    }
    function a2(e3) {
      return Array.isArray(e3) && e3.length && e3.every((e4) => typeof e4 == `object`);
    }
    function o2(e3) {
      return Array.isArray(e3) && e3.length && e3.every((e4) => typeof e4 == `function`);
    }
    function s2(e3, t3) {
      return t3 >= 0 ? e3[t3] : e3[e3.length + t3];
    }
    function c2(e3) {
      return e3.slice(-1)[0] || {};
    }
  }));
  b = e(((e2, t2) => {
    var n2 = true, r2 = false, i2 = false;
    t2.exports = function(e3, t3) {
      t3 && (n2 = !t3.enabled, r2 = !!t3.label, i2 = !!t3.labelAfter), e3.core.ruler.after(`inline`, `github-task-lists`, function(e4) {
        for (var t4 = e4.tokens, r3 = 2; r3 < t4.length; r3++) s2(t4, r3) && (c2(t4[r3], e4.Token), a2(t4[r3 - 2], `class`, `task-list-item` + (n2 ? `` : ` enabled`)), a2(t4[o2(t4, r3 - 2)], `class`, `contains-task-list`));
      });
    };
    function a2(e3, t3, n3) {
      var r3 = e3.attrIndex(t3), i3 = [
        t3,
        n3
      ];
      r3 < 0 ? e3.attrPush(i3) : e3.attrs[r3] = i3;
    }
    function o2(e3, t3) {
      for (var n3 = e3[t3].level - 1, r3 = t3 - 1; r3 >= 0; r3--) if (e3[r3].level === n3) return r3;
      return -1;
    }
    function s2(e3, t3) {
      return p2(e3[t3]) && m2(e3[t3 - 1]) && h2(e3[t3 - 2]) && g2(e3[t3]);
    }
    function c2(e3, t3) {
      if (e3.children.unshift(l2(e3, t3)), e3.children[1].content = e3.children[1].content.slice(3), e3.content = e3.content.slice(3), r2) if (i2) {
        e3.children.pop();
        var n3 = `task-item-` + Math.ceil(1e4 * 1e3 * Math.random() - 1e3);
        e3.children[0].content = e3.children[0].content.slice(0, -1) + ` id="` + n3 + `">`, e3.children.push(f2(e3.content, n3, t3));
      } else e3.children.unshift(u2(t3)), e3.children.push(d2(t3));
    }
    function l2(e3, t3) {
      var r3 = new t3(`html_inline`, ``, 0), i3 = n2 ? ` disabled="" ` : ``;
      return e3.content.indexOf(`[ ] `) === 0 ? r3.content = `<input class="task-list-item-checkbox"` + i3 + `type="checkbox">` : (e3.content.indexOf(`[x] `) === 0 || e3.content.indexOf(`[X] `) === 0) && (r3.content = `<input class="task-list-item-checkbox" checked=""` + i3 + `type="checkbox">`), r3;
    }
    function u2(e3) {
      var t3 = new e3(`html_inline`, ``, 0);
      return t3.content = `<label>`, t3;
    }
    function d2(e3) {
      var t3 = new e3(`html_inline`, ``, 0);
      return t3.content = `</label>`, t3;
    }
    function f2(e3, t3, n3) {
      var r3 = new n3(`html_inline`, ``, 0);
      return r3.content = `<label class="task-list-item-label" for="` + t3 + `">` + e3 + `</label>`, r3.attrs = [
        {
          for: t3
        }
      ], r3;
    }
    function p2(e3) {
      return e3.type === `inline`;
    }
    function m2(e3) {
      return e3.type === `paragraph_open`;
    }
    function h2(e3) {
      return e3.type === `list_item_open`;
    }
    function g2(e3) {
      return e3.content.indexOf(`[ ] `) === 0 || e3.content.indexOf(`[x] `) === 0 || e3.content.indexOf(`[X] `) === 0;
    }
  }));
  function x(e2, t2, n2, r2) {
    let i2 = Number(e2[t2].meta.id + 1).toString(), a2 = ``;
    return typeof r2.docId == `string` && (a2 = `-${r2.docId}-`), a2 + i2;
  }
  function S(e2, t2) {
    let n2 = Number(e2[t2].meta.id + 1).toString();
    return e2[t2].meta.subId > 0 && (n2 += `:${e2[t2].meta.subId}`), `[${n2}]`;
  }
  function C(e2, t2, n2, r2, i2) {
    let a2 = i2.rules.footnote_anchor_name(e2, t2, n2, r2, i2), o2 = i2.rules.footnote_caption(e2, t2, n2, r2, i2), s2 = a2;
    return e2[t2].meta.subId > 0 && (s2 += `:${e2[t2].meta.subId}`), `<sup class="footnote-ref"><a href="#fn${a2}" id="fnref${s2}">${o2}</a></sup>`;
  }
  function w(e2, t2, n2) {
    return (n2.xhtmlOut ? `<hr class="footnotes-sep" />
` : `<hr class="footnotes-sep">
`) + `<section class="footnotes">
<ol class="footnotes-list">
`;
  }
  function T() {
    return `</ol>
</section>
`;
  }
  function E(e2, t2, n2, r2, i2) {
    let a2 = i2.rules.footnote_anchor_name(e2, t2, n2, r2, i2);
    return e2[t2].meta.subId > 0 && (a2 += `:${e2[t2].meta.subId}`), `<li id="fn${a2}" class="footnote-item">`;
  }
  function D() {
    return `</li>
`;
  }
  function O(e2, t2, n2, r2, i2) {
    let a2 = i2.rules.footnote_anchor_name(e2, t2, n2, r2, i2);
    return e2[t2].meta.subId > 0 && (a2 += `:${e2[t2].meta.subId}`), ` <a href="#fnref${a2}" class="footnote-backref">\u21A9\uFE0E</a>`;
  }
  k = function(e2) {
    let t2 = e2.helpers.parseLinkLabel, n2 = e2.utils.isSpace;
    e2.renderer.rules.footnote_ref = C, e2.renderer.rules.footnote_block_open = w, e2.renderer.rules.footnote_block_close = T, e2.renderer.rules.footnote_open = E, e2.renderer.rules.footnote_close = D, e2.renderer.rules.footnote_anchor = O, e2.renderer.rules.footnote_caption = S, e2.renderer.rules.footnote_anchor_name = x;
    function r2(e3, t3, r3, i3) {
      let a3 = e3.bMarks[t3] + e3.tShift[t3], o3 = e3.eMarks[t3];
      if (a3 + 4 > o3 || e3.src.charCodeAt(a3) !== 91 || e3.src.charCodeAt(a3 + 1) !== 94) return false;
      let s2;
      for (s2 = a3 + 2; s2 < o3; s2++) {
        if (e3.src.charCodeAt(s2) === 32) return false;
        if (e3.src.charCodeAt(s2) === 93) break;
      }
      if (s2 === a3 + 2 || s2 + 1 >= o3 || e3.src.charCodeAt(++s2) !== 58) return false;
      if (i3) return true;
      s2++, e3.env.footnotes || (e3.env.footnotes = {}), e3.env.footnotes.refs || (e3.env.footnotes.refs = {});
      let c2 = e3.src.slice(a3 + 2, s2 - 2);
      e3.env.footnotes.refs[`:${c2}`] = -1;
      let l2 = new e3.Token(`footnote_reference_open`, ``, 1);
      l2.meta = {
        label: c2
      }, l2.level = e3.level++, e3.tokens.push(l2);
      let u2 = e3.bMarks[t3], d2 = e3.tShift[t3], f2 = e3.sCount[t3], p2 = e3.parentType, m2 = s2, h2 = e3.sCount[t3] + s2 - (e3.bMarks[t3] + e3.tShift[t3]), g2 = h2;
      for (; s2 < o3; ) {
        let t4 = e3.src.charCodeAt(s2);
        if (n2(t4)) t4 === 9 ? g2 += 4 - g2 % 4 : g2++;
        else break;
        s2++;
      }
      e3.tShift[t3] = s2 - m2, e3.sCount[t3] = g2 - h2, e3.bMarks[t3] = m2, e3.blkIndent += 4, e3.parentType = `footnote`, e3.sCount[t3] < e3.blkIndent && (e3.sCount[t3] += e3.blkIndent), e3.md.block.tokenize(e3, t3, r3, true), e3.parentType = p2, e3.blkIndent -= 4, e3.tShift[t3] = d2, e3.sCount[t3] = f2, e3.bMarks[t3] = u2;
      let _2 = new e3.Token(`footnote_reference_close`, ``, -1);
      return _2.level = --e3.level, e3.tokens.push(_2), true;
    }
    function i2(e3, n3) {
      let r3 = e3.posMax, i3 = e3.pos;
      if (i3 + 2 >= r3 || e3.src.charCodeAt(i3) !== 94 || e3.src.charCodeAt(i3 + 1) !== 91) return false;
      let a3 = i3 + 2, o3 = t2(e3, i3 + 1);
      if (o3 < 0) return false;
      if (!n3) {
        e3.env.footnotes || (e3.env.footnotes = {}), e3.env.footnotes.list || (e3.env.footnotes.list = []);
        let t3 = e3.env.footnotes.list.length, n4 = [];
        e3.md.inline.parse(e3.src.slice(a3, o3), e3.md, e3.env, n4);
        let r4 = e3.push(`footnote_ref`, ``, 0);
        r4.meta = {
          id: t3
        }, e3.env.footnotes.list[t3] = {
          content: e3.src.slice(a3, o3),
          tokens: n4
        };
      }
      return e3.pos = o3 + 1, e3.posMax = r3, true;
    }
    function a2(e3, t3) {
      let n3 = e3.posMax, r3 = e3.pos;
      if (r3 + 3 > n3 || !e3.env.footnotes || !e3.env.footnotes.refs || e3.src.charCodeAt(r3) !== 91 || e3.src.charCodeAt(r3 + 1) !== 94) return false;
      let i3;
      for (i3 = r3 + 2; i3 < n3; i3++) {
        if (e3.src.charCodeAt(i3) === 32 || e3.src.charCodeAt(i3) === 10) return false;
        if (e3.src.charCodeAt(i3) === 93) break;
      }
      if (i3 === r3 + 2 || i3 >= n3) return false;
      i3++;
      let a3 = e3.src.slice(r3 + 2, i3 - 1);
      if (e3.env.footnotes.refs[`:${a3}`] === void 0) return false;
      if (!t3) {
        e3.env.footnotes.list || (e3.env.footnotes.list = []);
        let t4;
        e3.env.footnotes.refs[`:${a3}`] < 0 ? (t4 = e3.env.footnotes.list.length, e3.env.footnotes.list[t4] = {
          label: a3,
          count: 0
        }, e3.env.footnotes.refs[`:${a3}`] = t4) : t4 = e3.env.footnotes.refs[`:${a3}`];
        let n4 = e3.env.footnotes.list[t4].count;
        e3.env.footnotes.list[t4].count++;
        let r4 = e3.push(`footnote_ref`, ``, 0);
        r4.meta = {
          id: t4,
          subId: n4,
          label: a3
        };
      }
      return e3.pos = i3, e3.posMax = n3, true;
    }
    function o2(e3) {
      let t3, n3, r3, i3 = false, a3 = {};
      if (!e3.env.footnotes || (e3.tokens = e3.tokens.filter(function(e4) {
        return e4.type === `footnote_reference_open` ? (i3 = true, n3 = [], r3 = e4.meta.label, false) : e4.type === `footnote_reference_close` ? (i3 = false, a3[`:` + r3] = n3, false) : (i3 && n3.push(e4), !i3);
      }), !e3.env.footnotes.list)) return;
      let o3 = e3.env.footnotes.list;
      e3.tokens.push(new e3.Token(`footnote_block_open`, ``, 1));
      for (let n4 = 0, r4 = o3.length; n4 < r4; n4++) {
        let r5 = new e3.Token(`footnote_open`, ``, 1);
        if (r5.meta = {
          id: n4,
          label: o3[n4].label
        }, e3.tokens.push(r5), o3[n4].tokens) {
          t3 = [];
          let r6 = new e3.Token(`paragraph_open`, `p`, 1);
          r6.block = true, t3.push(r6);
          let i5 = new e3.Token(`inline`, ``, 0);
          i5.children = o3[n4].tokens, i5.content = o3[n4].content, t3.push(i5);
          let a4 = new e3.Token(`paragraph_close`, `p`, -1);
          a4.block = true, t3.push(a4);
        } else o3[n4].label && (t3 = a3[`:${o3[n4].label}`]);
        t3 && (e3.tokens = e3.tokens.concat(t3));
        let i4;
        i4 = e3.tokens[e3.tokens.length - 1].type === `paragraph_close` ? e3.tokens.pop() : null;
        let s2 = o3[n4].count > 0 ? o3[n4].count : 1;
        for (let t4 = 0; t4 < s2; t4++) {
          let r6 = new e3.Token(`footnote_anchor`, ``, 0);
          r6.meta = {
            id: n4,
            subId: t4,
            label: o3[n4].label
          }, e3.tokens.push(r6);
        }
        i4 && e3.tokens.push(i4), e3.tokens.push(new e3.Token(`footnote_close`, ``, -1));
      }
      e3.tokens.push(new e3.Token(`footnote_block_close`, ``, -1));
    }
    e2.block.ruler.before(`reference`, `footnote_def`, r2, {
      alt: [
        `paragraph`,
        `reference`
      ]
    }), e2.inline.ruler.after(`image`, `footnote_inline`, i2), e2.inline.ruler.after(`footnote_inline`, `footnote_ref`, a2), e2.core.ruler.after(`inline`, `footnote_tail`, o2);
  };
});
export {
  __tla,
  h as a,
  g as i,
  b as n,
  y as r,
  k as t
};

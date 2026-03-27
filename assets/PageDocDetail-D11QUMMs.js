import { A as e, G as t, K as n, N as r, O as i, U as a, V as o, W as s, Z as c, _ as l, b as u, f as d, m as f, q as p, x as m, y as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { a as _, o as v, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { a as y, c as b, i as x, l as S, n as C, o as w, r as T, s as E, t as D, __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as O, __tla as __tla_4 } from "./markdown-it-CM2LYWyj.js";
import { a as k, i as A, n as j, r as M, t as N, __tla as __tla_5 } from "./markdown-it-footnote-CkpndWzl.js";
let U;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  var P = (e2) => f(() => {
    let t2 = m(`article`), n2 = h(`rue:slot:start`), r2 = h(`rue:slot:end`);
    return l(t2, n2), l(t2, r2), p(() => {
      let i2 = e2.children;
      d(g(i2), t2, n2, r2);
    }), {
      vaporElement: t2
    };
  }), F = c(M(), 1), I = c(j(), 1);
  function L(e2) {
    return {
      uiBase: `/page`,
      docBase: `/docs`
    };
  }
  var R = null;
  async function z() {
    if (!R) {
      let e2 = new O({
        html: true,
        typographer: true
      });
      e2.use(k), e2.use(I.default), e2.use(N), e2.use(F.default), e2.use(A, `tip`), e2.use(A, `info`), e2.use(A, `warning`), e2.use(A, `danger`), R = e2;
    }
  }
  var B = null;
  function V() {
    return B || (B = S({
      themes: [
        D
      ],
      langs: [
        C,
        T,
        E,
        w,
        y,
        x
      ],
      engine: b()
    }), B);
  }
  async function H(e2) {
    await z();
    let t2 = R.render(e2), n2 = [
      ...t2.matchAll(/<pre><code class="language-([^"]*)">([\s\S]*?)<\/code><\/pre>/g)
    ];
    if (!n2.length) return t2;
    for (let e3 of n2) {
      let n3 = (e3[1] || ``).trim().toLowerCase(), r2 = e3[2].replace(/&lt;/g, `<`).replace(/&gt;/g, `>`).replace(/&amp;/g, `&`).replace(/&quot;/g, `"`);
      try {
        let i2 = V(), a2 = D, o2 = (/* @__PURE__ */ new Set([
          `html`,
          `css`,
          `ts`,
          `tsx`,
          `rust`,
          `js`,
          `javascript`,
          `typescript`
        ])).has(n3) ? n3 : `javascript`, s2 = o2 === `js` ? `javascript` : o2 === `ts` ? `typescript` : o2, c2 = `<div class="relative group doc-code-wrapper">
  <button class="copy-code-btn absolute top-2 right-2 z-50 px-2 py-1 bg-black/70 text-white rounded text-xs opacity-80 hover:opacity-100 focus:opacity-100 transition" aria-label="\u590D\u5236\u4EE3\u7801">\u590D\u5236</button>
  ${typeof i2.highlight == `function` ? i2.highlight(r2, {
          lang: s2,
          theme: a2
        }) : i2.codeToHtml ? i2.codeToHtml(r2, {
          lang: s2,
          theme: a2
        }) : `<pre><code>${r2}</code></pre>`}
</div>`;
        t2 = t2.replace(e3[0], c2);
      } catch {
      }
    }
    return t2;
  }
  U = () => {
    let { route: c2, _title: g2, setTitle: y2, html: b2, setHtml: x2, _results: S2, _setResults: C2 } = t(`useSetup:0:0`, () => a(() => {
      let e2 = _(), [r2, i2] = t(`useState:1:0`, () => s(``)), [a2, c3] = t(`useState:1:1`, () => s(``)), [l2, u2] = t(`useState:1:2`, () => s([]));
      return t(`watch:1:3`, () => n(e2, async (t2) => {
        var _a, _b;
        let n2 = L(((_a = e2.get()) == null ? void 0 : _a.path) || ``), r3 = ((_b = t2 == null ? void 0 : t2.params) == null ? void 0 : _b.path) || ``;
        if (!r3) return;
        let i3 = `${n2.docBase}/${r3}.md`;
        try {
          let e3 = await fetch(i3);
          if (!e3.ok) {
            c3(`<p class="text-base-content/70">\u6587\u6863\u672A\u627E\u5230\uFF1A${r3}</p>`);
            return;
          }
          c3(await H(await e3.text()));
        } catch {
          c3(`<p class="text-base-content/70">\u52A0\u8F7D\u6587\u6863\u5931\u8D25</p>`);
        }
      }, {
        immediate: true
      })), t(`useEffect:1:4`, () => o(() => {
        let e3 = (e4) => {
          var _a, _b;
          let t2 = e4.target.closest(`.copy-code-btn`);
          if (!t2) return;
          let n2 = ((_b = (_a = t2.closest(`.doc-code-wrapper`)) == null ? void 0 : _a.querySelector(`pre.shiki`)) == null ? void 0 : _b.textContent) || ``;
          if (!n2) return;
          navigator.clipboard.writeText(n2);
          let r3 = t2.textContent || `\u590D\u5236`;
          t2.textContent = `\u5DF2\u590D\u5236`, setTimeout(() => {
            t2.textContent = r3;
          }, 1500);
        };
        return document.addEventListener(`click`, e3), () => document.removeEventListener(`click`, e3);
      }, [])), {
        route: e2,
        _title: r2,
        setTitle: i2,
        html: a2,
        setHtml: c3,
        _results: l2,
        _setResults: u2
      };
    }));
    return f(() => {
      let t2 = u(), n2 = h(`rue:component:start`), a2 = h(`rue:component:end`);
      return l(t2, n2), l(t2, a2), d(v(P, {
        children: f(() => {
          let t3 = u(), n3 = m(`div`);
          return l(t3, n3), e(n3, `prose prose-sm md:prose-base`), i(n3, `id`, `doc-body`), p(() => {
            let e2 = {
              __html: b2.value
            };
            r(n3, e2 && `__html` in e2 ? e2.__html : ``);
          }), {
            vaporElement: t3
          };
        })
      }), t2, n2, a2), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  U as default
};

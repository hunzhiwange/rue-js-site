import { A as e, C as t, G as n, I as r, N as i, O as a, U as o, W as s, _ as c, b as l, f as u, g as d, m as f, q as p, x as m, y as h, z as g, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { a as v, c as y, i as b, l as x, n as S, o as C, r as w, s as T, t as E, __tla as __tla_2 } from "./tokyo-night-BJol8me2.js";
let A;
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
  })()
]).then(async () => {
  var D = null;
  function O() {
    return D || (D = x({
      themes: [
        E
      ],
      langs: [
        S,
        w,
        T,
        C,
        v,
        b
      ],
      engine: y()
    }), D);
  }
  function k(e2) {
    return e2.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`);
  }
  A = (v2) => {
    let { html: y2, copied: b2, setCopied: x2, handleCopy: S2 } = n(`useSetup:0:0`, () => o(() => {
      let e2 = n(`ref:1:0`, () => g(``)), [t2, r2] = n(`useState:1:1`, () => s(false));
      return n(`watchEffect:1:2`, () => p(() => {
        let t3 = /* @__PURE__ */ new Set([
          `html`,
          `css`,
          `ts`,
          `tsx`,
          `rust`,
          `js`,
          `javascript`,
          `typescript`
        ]), n2 = (v2.lang || ``).toLowerCase(), r3 = t3.has(n2) ? n2 : `javascript`, i2 = r3 === `js` ? `javascript` : r3 === `ts` ? `typescript` : r3, a2 = O();
        setTimeout(() => {
          let t4 = ``;
          t4 = typeof a2.highlight == `function` ? a2.highlight(v2.code, {
            lang: i2,
            theme: E
          }) : typeof a2.codeToHtml == `function` ? a2.codeToHtml(v2.code, {
            lang: i2,
            theme: E
          }) : `<pre><code>${k(v2.code)}</code></pre>`, e2.value = t4;
        }, 0);
      })), {
        html: e2,
        copied: t2,
        setCopied: r2,
        handleCopy: async () => {
          try {
            await navigator.clipboard.writeText(v2.code || ``), r2(true), setTimeout(() => r2(false), 1500);
          } catch {
          }
        }
      };
    }));
    return f(() => {
      let n2 = m(`div`);
      p(() => {
        e(n2, String(v2.className));
      });
      let o2 = m(`div`);
      c(n2, o2), e(o2, `relative group`);
      let s2 = m(`button`);
      c(o2, s2), e(s2, `absolute top-2 right-2 z-50 px-2 py-1 bg-black/70 text-white rounded text-xs opacity-80 hover:opacity-100 focus:opacity-100 transition`), d(s2, `click`, S2), a(s2, `aria-label`, `\u590D\u5236\u4EE3\u7801`);
      let g2 = t(s2);
      c(s2, g2), p(() => {
        r(g2, b2.value ? `\u5DF2\u590D\u5236` : `\u590D\u5236`);
      });
      let x3 = h(`rue:slot:start`), C2 = h(`rue:slot:end`);
      c(o2, x3), c(o2, C2), p(() => {
        u(_(v2.title ? f(() => {
          let n3 = l(), i2 = m(`div`);
          c(n3, i2), e(i2, `absolute top-2 left-2 text-[11px] px-2 py-0.5 rounded bg-base-100/70 text-base-content`);
          let a2 = t(i2);
          return c(i2, a2), p(() => {
            r(a2, v2.title);
          }), {
            vaporElement: n3
          };
        }) : ``), o2, x3, C2);
      });
      let w2 = m(`div`);
      return c(o2, w2), p(() => {
        let e2 = {
          __html: y2.value
        };
        i(w2, e2 && `__html` in e2 ? e2.__html : ``);
      }), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  A as t
};

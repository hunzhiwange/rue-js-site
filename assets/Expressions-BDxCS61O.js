import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as _, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as v, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as y, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let S;
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
  let b, x;
  b = 7;
  x = {
    name: `Alice`,
    age: 20
  };
  S = () => {
    let { activeTab: S2 } = n(`useSetup:0:0`, () => o(() => ({
      activeTab: n(`ref:1:0`, () => h(`code`))
    })));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(_(y, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`\u8868\u8FBE\u5F0F\u4E0E\u63D2\u503C`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let y2 = p(`button`);
          s(h3, y2), i(y2, `role`, `tab`), f(() => {
            e(y2, String(`tab ${S2.value === `preview` ? `tab-active` : ``}`));
          }), u(y2, `click`, () => {
            S2.value = `preview`;
          }), s(y2, a(`\u6548\u679C`));
          let C = p(`button`);
          s(h3, C), i(C, `role`, `tab`), f(() => {
            e(C, String(`tab ${S2.value === `code` ? `tab-active` : ``}`));
          }), u(C, `click`, () => {
            S2.value = `code`;
          }), s(C, a(`\u4EE3\u7801`));
          let w = p(`div`);
          s(n3, w), e(w, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let T = m(`rue:slot:start`), E = m(`rue:slot:end`);
          s(w, T), s(w, E), f(() => {
            l(g(S2.value === `code` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow overflow-auto`);
              let r2 = p(`div`);
              s(n4, r2), e(r2, `card-body p-0`);
              let i2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(r2, i2), s(r2, a2), f(() => {
                l(_(v, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC } from 'rues';

const n = 7;
const user = { name: 'Alice', age: 20 };

const Expressions: FC = () => (
  <div className="grid gap-2">
    <div>{1 + 2}</div>
    <div>{\`hello \${user.name}\`}</div>
    <div>{n > 5 ? '\u5927\u4E8E5' : '\u4E0D\u5927\u4E8E5'}</div>
    <div>{['A', 'B'].join(',')}</div>
  </div>
);

export default Expressions;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), w, T, E);
          }), s(w, a(` `));
          let D = m(`rue:slot:start`), O = m(`rue:slot:end`);
          return s(w, D), s(w, O), f(() => {
            l(g(S2.value === `preview` ? d(() => {
              let n4 = c(), i2 = p(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let a2 = p(`div`);
              s(i2, a2), e(a2, `card-body grid gap-2`);
              let o4 = p(`div`);
              s(a2, o4);
              let l2 = t(o4);
              s(o4, l2), f(() => {
                r(l2, 3);
              });
              let u2 = p(`div`);
              s(a2, u2);
              let d2 = t(u2);
              s(u2, d2), f(() => {
                r(d2, `hello ${x.name}`);
              });
              let m2 = p(`div`);
              s(a2, m2);
              let h4 = t(m2);
              s(m2, h4), f(() => {
                r(h4, b > 5 ? `\u5927\u4E8E5` : `\u4E0D\u5927\u4E8E5`);
              });
              let g2 = p(`div`);
              s(a2, g2);
              let _2 = t(g2);
              return s(g2, _2), f(() => {
                r(_2, [
                  `A`,
                  `B`
                ].join(`,`));
              }), {
                vaporElement: n4
              };
            }) : ``), w, D, O);
          }), {
            vaporElement: n3
          };
        })
      }), n2, o2, h2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  S as default
};

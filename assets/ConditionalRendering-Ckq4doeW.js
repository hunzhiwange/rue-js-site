import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as _, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as v, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as y, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let x;
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
  let b;
  b = false;
  x = () => {
    let { activeTab: x2 } = n(`useSetup:0:0`, () => o(() => ({
      activeTab: n(`ref:1:0`, () => h(`code`))
    })));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(_(y, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`\u6761\u4EF6\u6E32\u67D3`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let y2 = p(`button`);
          s(h3, y2), i(y2, `role`, `tab`), f(() => {
            e(y2, String(`tab ${x2.value === `preview` ? `tab-active` : ``}`));
          }), u(y2, `click`, () => {
            x2.value = `preview`;
          }), s(y2, a(`\u6548\u679C`));
          let S = p(`button`);
          s(h3, S), i(S, `role`, `tab`), f(() => {
            e(S, String(`tab ${x2.value === `code` ? `tab-active` : ``}`));
          }), u(S, `click`, () => {
            x2.value = `code`;
          }), s(S, a(`\u4EE3\u7801`));
          let C = p(`div`);
          s(n3, C), e(C, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let w = m(`rue:slot:start`), T = m(`rue:slot:end`);
          s(C, w), s(C, T), f(() => {
            l(g(x2.value === `code` ? d(() => {
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

const showA = true;
const showB = false;

const ConditionalRendering: FC = () => (
  <div className="grid gap-2">
    <div>{showA ? 'A \u663E\u793A\uFF08?:\uFF09' : 'A \u9690\u85CF'}</div>
    <div>--[{showB && 'B \u663E\u793A\uFF08&&\uFF09'}]--</div>
    <div />
    <div></div>
    <div>--[{null}]--</div>
    <div>--[{false}]--</div>
    <div>--[{undefined}]--</div>
    <div>--[{true}]--</div>
    <div>--[{1}]--</div>
    <div>--[{0}]--</div>
  </div>
);

export default ConditionalRendering;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), C, w, T);
          }), s(C, a(` `));
          let E = m(`rue:slot:start`), D = m(`rue:slot:end`);
          return s(C, E), s(C, D), f(() => {
            l(g(x2.value === `preview` ? d(() => {
              let n4 = c(), i2 = p(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let o4 = p(`div`);
              s(i2, o4), e(o4, `card-body grid gap-2`);
              let l2 = p(`div`);
              s(o4, l2);
              let u2 = t(l2);
              s(l2, u2), f(() => {
                r(u2, `A \u663E\u793A\uFF08?:\uFF09`);
              });
              let d2 = p(`div`);
              s(o4, d2), s(d2, a(`--[`));
              let m2 = t(d2);
              s(d2, m2), f(() => {
                r(m2, b);
              }), s(d2, a(`]--`)), s(o4, p(`div`)), s(o4, p(`div`));
              let h4 = p(`div`);
              s(o4, h4), s(h4, a(`--[`));
              let g2 = t(h4);
              s(h4, g2), r(g2, ``), s(h4, a(`]--`));
              let _2 = p(`div`);
              s(o4, _2), s(_2, a(`--[`));
              let v2 = t(_2);
              s(_2, v2), r(v2, ``), s(_2, a(`]--`));
              let y3 = p(`div`);
              s(o4, y3), s(y3, a(`--[`));
              let x3 = t(y3);
              s(y3, x3), r(x3, ``), s(y3, a(`]--`));
              let S2 = p(`div`);
              s(o4, S2), s(S2, a(`--[`));
              let C2 = t(S2);
              s(S2, C2), r(C2, ``), s(S2, a(`]--`));
              let w2 = p(`div`);
              s(o4, w2), s(w2, a(`--[`));
              let T2 = t(w2);
              s(w2, T2), r(T2, `1`), s(w2, a(`]--`));
              let E2 = p(`div`);
              s(o4, E2), s(E2, a(`--[`));
              let D2 = t(E2);
              return s(E2, D2), r(D2, `0`), s(E2, a(`]--`)), {
                vaporElement: n4
              };
            }) : ``), C, E, D);
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
  x as default
};

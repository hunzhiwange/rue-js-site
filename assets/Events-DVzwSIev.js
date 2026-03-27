import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as _, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as v, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as y, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let b;
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
  b = () => {
    let { countA: b2, countB: x, activeTab: S, handleClickA: C, handleClickB: w } = n(`useSetup:0:0`, () => o(() => {
      let e2 = n(`ref:1:0`, () => h(0)), t2 = n(`ref:1:1`, () => h(0));
      return {
        countA: e2,
        countB: t2,
        activeTab: n(`ref:1:2`, () => h(`code`)),
        handleClickA: () => {
          e2.value += 1, console.info(`Button A clicked`, e2.value);
        },
        handleClickB: () => {
          t2.value += 1, console.info(`Button B clicked`, t2.value);
        }
      };
    }));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(_(y, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`\u4E8B\u4EF6\u5904\u7406`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let y2 = p(`button`);
          s(h3, y2), i(y2, `role`, `tab`), f(() => {
            e(y2, String(`tab ${S.value === `preview` ? `tab-active` : ``}`));
          }), u(y2, `click`, () => {
            S.value = `preview`;
          }), s(y2, a(`\u6548\u679C`));
          let T = p(`button`);
          s(h3, T), i(T, `role`, `tab`), f(() => {
            e(T, String(`tab ${S.value === `code` ? `tab-active` : ``}`));
          }), u(T, `click`, () => {
            S.value = `code`;
          }), s(T, a(`\u4EE3\u7801`));
          let E = p(`div`);
          s(n3, E), e(E, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let D = m(`rue:slot:start`), O = m(`rue:slot:end`);
          s(E, D), s(E, O), f(() => {
            l(g(S.value === `code` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow overflow-auto h-[260px] md:h-[640px]`);
              let r2 = p(`div`);
              s(n4, r2), e(r2, `card-body p-0`);
              let i2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(r2, i2), s(r2, a2), f(() => {
                l(_(v, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';

const Events: FC = () => {
  const countA = ref(0);
  const countB = ref(0);

  const handleClickA = () => {
    countA.value += 1;
    console.log('Button A clicked', countA.value);
  };

  const handleClickB = () => {
    countB.value += 1;
    console.log('Button B clicked', countB.value);
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-6">
        <div className="flex items-center gap-3">
          <button className="btn btn-primary btn-sm" onClick={handleClickA}>
            \u70B9\u51FB A
          </button>
          <span>A \u6B21\u6570\uFF1A{countA.value}</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="btn btn-success btn-sm" onClick={handleClickB}>
            \u70B9\u51FB B
          </button>
          <span>B \u6B21\u6570\uFF1A{countB.value}</span>
        </div>
      </div>
    </div>
  );
};

export default Events;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), E, D, O);
          }), s(E, a(` `));
          let k = m(`rue:slot:start`), A = m(`rue:slot:end`);
          return s(E, k), s(E, A), f(() => {
            l(g(S.value === `preview` ? d(() => {
              let n4 = c(), i2 = p(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let o4 = p(`div`);
              s(i2, o4), e(o4, `card-body grid gap-6`);
              let l2 = p(`div`);
              s(o4, l2), e(l2, `flex items-center gap-3`);
              let d2 = p(`button`);
              s(l2, d2), e(d2, `btn btn-primary btn-sm`), u(d2, `click`, C), s(d2, a(`\u70B9\u51FB A`));
              let m2 = p(`span`);
              s(l2, m2), s(m2, a(`A \u6B21\u6570\uFF1A`));
              let h4 = t(m2);
              s(m2, h4), f(() => {
                r(h4, b2.value);
              });
              let g2 = p(`div`);
              s(o4, g2), e(g2, `flex items-center gap-3`);
              let _2 = p(`button`);
              s(g2, _2), e(_2, `btn btn-success btn-sm`), u(_2, `click`, w), s(_2, a(`\u70B9\u51FB B`));
              let v2 = p(`span`);
              s(g2, v2), s(v2, a(`B \u6B21\u6570\uFF1A`));
              let y3 = t(v2);
              return s(v2, y3), f(() => {
                r(y3, x.value);
              }), {
                vaporElement: n4
              };
            }) : ``), E, k, A);
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
  b as default
};

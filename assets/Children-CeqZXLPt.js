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
  b = (n2) => d(() => {
    let i2 = p(`div`);
    e(i2, `card bg-base-100 border`);
    let a2 = p(`div`);
    s(i2, a2), e(a2, `card-body space-y-1`);
    let o2 = p(`div`);
    s(a2, o2), e(o2, `font-semibold`);
    let c2 = t(o2);
    s(o2, c2), f(() => {
      r(c2, n2.title);
    });
    let u2 = p(`div`);
    s(a2, u2);
    let d2 = m(`rue:children:start`), h2 = m(`rue:children:end`);
    return s(u2, d2), s(u2, h2), f(() => {
      let e2 = n2.children;
      l(g(e2), u2, d2, h2);
    }), {
      vaporElement: i2
    };
  });
  x = () => {
    let { activeTab: t2 } = n(`useSetup:0:0`, () => o(() => ({
      activeTab: n(`ref:1:0`, () => h(`code`))
    })));
    return d(() => {
      let n2 = c(), r2 = m(`rue:component:start`), o2 = m(`rue:component:end`);
      return s(n2, r2), s(n2, o2), l(_(y, {
        children: d(() => {
          let n3 = c(), r3 = p(`h1`);
          s(n3, r3), e(r3, `text-5xl font-semibold mb-4 md:mb-4`), s(r3, a(`children \u63D2\u69FD\u4E0E\u5D4C\u5957`));
          let o3 = p(`div`);
          s(n3, o3), i(o3, `role`, `tablist`), e(o3, `tabs tabs-box`);
          let h2 = p(`button`);
          s(o3, h2), i(h2, `role`, `tab`), f(() => {
            e(h2, String(`tab ${t2.value === `preview` ? `tab-active` : ``}`));
          }), u(h2, `click`, () => {
            t2.value = `preview`;
          }), s(h2, a(`\u6548\u679C`));
          let y2 = p(`button`);
          s(o3, y2), i(y2, `role`, `tab`), f(() => {
            e(y2, String(`tab ${t2.value === `code` ? `tab-active` : ``}`));
          }), u(y2, `click`, () => {
            t2.value = `code`;
          }), s(y2, a(`\u4EE3\u7801`));
          let x2 = p(`div`);
          s(n3, x2), e(x2, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let S = m(`rue:slot:start`), C = m(`rue:slot:end`);
          s(x2, S), s(x2, C), f(() => {
            l(g(t2.value === `code` ? d(() => {
              let t3 = c(), n4 = p(`div`);
              s(t3, n4), e(n4, `card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);
              let r4 = p(`div`);
              s(n4, r4), e(r4, `card-body p-0`);
              let i2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(r4, i2), s(r4, a2), f(() => {
                l(_(v, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC } from 'rues';

const Box: FC<{ title: string }> = (props) => (
  <div className="border p-2 rounded-md space-y-1">
    <div className="font-semibold">{props.title}</div>
    <div>{props.children}</div>
  </div>
);

const Children: FC = () => (
  <div className="grid gap-4">
    <Box title="\u5916\u5C42">
      <Box title="\u5185\u5C42">
        <span>\u5D4C\u5957\u5B50\u5143\u7D20</span>
      </Box>
    </Box>
  </div>
);

export default Children;`
                }), r4, i2, a2);
              }), {
                vaporElement: t3
              };
            }) : ``), x2, S, C);
          }), s(x2, a(` `));
          let w = m(`rue:slot:start`), T = m(`rue:slot:end`);
          return s(x2, w), s(x2, T), f(() => {
            l(g(t2.value === `preview` ? d(() => {
              let t3 = c(), n4 = p(`div`);
              s(t3, n4), e(n4, `card bg-base-100 shadow`);
              let r4 = p(`div`);
              s(n4, r4), e(r4, `card-body grid gap-4`);
              let i2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              return s(r4, i2), s(r4, o4), l(_(b, {
                title: `\u5916\u5C42`,
                children: d(() => {
                  let e2 = c(), t4 = m(`rue:component:start`), n5 = m(`rue:component:end`);
                  return s(e2, t4), s(e2, n5), l(_(b, {
                    title: `\u5185\u5C42`,
                    children: d(() => {
                      let e3 = c(), t5 = p(`span`);
                      return s(e3, t5), s(t5, a(`\u5D4C\u5957\u5B50\u5143\u7D20`)), {
                        vaporElement: e3
                      };
                    })
                  }), e2, t4, n5), {
                    vaporElement: e2
                  };
                })
              }), r4, i2, o4), {
                vaporElement: t3
              };
            }) : ``), x2, w, T);
          }), {
            vaporElement: n3
          };
        })
      }), n2, r2, o2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  x as default
};

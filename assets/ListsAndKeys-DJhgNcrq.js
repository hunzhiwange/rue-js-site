import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, r as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as v, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as b, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
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
  let x;
  x = [
    `Apple`,
    `Banana`,
    `Cherry`
  ];
  S = () => {
    let { activeTab: S2 } = n(`useSetup:0:0`, () => o(() => ({
      activeTab: n(`ref:1:0`, () => h(`code`))
    })));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(v(b, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`\u5217\u8868\u6E32\u67D3\u4E0E key`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let b2 = p(`button`);
          s(h3, b2), i(b2, `role`, `tab`), f(() => {
            e(b2, String(`tab ${S2.value === `preview` ? `tab-active` : ``}`));
          }), u(b2, `click`, () => {
            S2.value = `preview`;
          }), s(b2, a(`\u6548\u679C`));
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
                l(v(y, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC } from 'rues';

const list = ['Apple', 'Banana', 'Cherry'];

const ListsAndKeys: FC = () => (
  <ul className="list-disc pl-6">
    {list.map((item, idx) => <li key={item}>{idx + 1}. {item}</li>)}
  </ul>
);

export default ListsAndKeys;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), w, T, E);
          }), s(w, a(` `));
          let D = m(`rue:slot:start`), O = m(`rue:slot:end`);
          return s(w, D), s(w, O), f(() => {
            l(g(S2.value === `preview` ? d(() => {
              let n4 = c(), o4 = p(`div`);
              s(n4, o4), e(o4, `card bg-base-100 shadow`);
              let u2 = p(`div`);
              s(o4, u2), e(u2, `card-body`);
              let h4 = p(`ul`);
              s(u2, h4), e(h4, `list-disc pl-6`);
              let g2 = m(`rue:list:start`), v2 = m(`rue:list:end`);
              s(h4, g2), s(h4, v2);
              let y2 = /* @__PURE__ */ new Map();
              return f(() => {
                y2 = _({
                  items: x || [],
                  getKey: (e2, t2) => e2,
                  elements: y2,
                  parent: h4,
                  before: v2,
                  start: g2,
                  renderItem: (e2, n5, o5, u3, m2) => {
                    l(d(() => {
                      let n6 = c(), o6 = p(`li`);
                      s(n6, o6), f(() => {
                        i(o6, `key`, String(e2));
                      });
                      let l2 = t(o6);
                      s(o6, l2), f(() => {
                        r(l2, m2 + 1);
                      }), s(o6, a(`. `));
                      let u4 = t(o6);
                      return s(o6, u4), f(() => {
                        r(u4, e2);
                      }), {
                        vaporElement: n6
                      };
                    }), n5, o5, u3);
                  }
                });
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

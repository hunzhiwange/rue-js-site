import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, g as c, m as l, q as u, x as d, y as f, z as p, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as m, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as h, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as g, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as _, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let v;
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
  v = () => {
    let { activeTab: v2 } = t(`useSetup:0:0`, () => i(() => ({
      activeTab: t(`ref:1:0`, () => p(`code`))
    })));
    return l(() => {
      let t2 = o(), i2 = f(`rue:component:start`), p2 = f(`rue:component:end`);
      return a(t2, i2), a(t2, p2), s(h(_, {
        children: l(() => {
          let t3 = o(), i3 = d(`h1`);
          a(t3, i3), e(i3, `text-5xl font-semibold mb-4 md:mb-4`), a(i3, r(`Fragments`));
          let p3 = d(`div`);
          a(t3, p3), n(p3, `role`, `tablist`), e(p3, `tabs tabs-box`);
          let _2 = d(`button`);
          a(p3, _2), n(_2, `role`, `tab`), u(() => {
            e(_2, String(`tab ${v2.value === `preview` ? `tab-active` : ``}`));
          }), c(_2, `click`, () => {
            v2.value = `preview`;
          }), a(_2, r(`\u6548\u679C`));
          let y = d(`button`);
          a(p3, y), n(y, `role`, `tab`), u(() => {
            e(y, String(`tab ${v2.value === `code` ? `tab-active` : ``}`));
          }), c(y, `click`, () => {
            v2.value = `code`;
          }), a(y, r(`\u4EE3\u7801`));
          let b = d(`div`);
          a(t3, b), e(b, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let x = f(`rue:slot:start`), S = f(`rue:slot:end`);
          a(b, x), a(b, S), u(() => {
            s(m(v2.value === `code` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow overflow-auto`);
              let r2 = d(`div`);
              a(n2, r2), e(r2, `card-body p-0`);
              let i4 = f(`rue:component:start`), c2 = f(`rue:component:end`);
              return a(r2, i4), a(r2, c2), u(() => {
                s(h(g, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC } from 'rues';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>\u7247\u6BB5 1</span>
      <span>\u7247\u6BB5 2</span>
    </>
  </div>
);

export default Fragments;`
                }), r2, i4, c2);
              }), {
                vaporElement: t4
              };
            }) : ``), b, x, S);
          }), a(b, r(` `));
          let C = f(`rue:slot:start`), w = f(`rue:slot:end`);
          return a(b, C), a(b, w), u(() => {
            s(m(v2.value === `preview` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let i4 = d(`div`);
              a(n2, i4), e(i4, `card-body grid gap-2`), a(i4, r(` `));
              let s2 = d(`span`);
              a(i4, s2), a(s2, r(`\u7247\u6BB5 1`)), a(i4, r(` `));
              let c2 = d(`span`);
              return a(i4, c2), a(c2, r(`\u7247\u6BB5 2`)), a(i4, r(` `)), {
                vaporElement: t4
              };
            }) : ``), b, C, w);
          }), {
            vaporElement: t3
          };
        })
      }), t2, i2, p2), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  v as default
};

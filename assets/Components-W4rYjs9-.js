import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, g as c, m as l, q as u, x as d, y as f, z as p, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as m, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as h, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as g, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as _, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let y;
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
  let v;
  v = (e2) => l(() => {
    let t2 = d(`div`);
    a(t2, r(`\u4F60\u597D\uFF0C`));
    let n2 = f(`rue:slot:start`), i2 = f(`rue:slot:end`);
    return a(t2, n2), a(t2, i2), u(() => {
      let r2 = e2.name;
      s(m(r2), t2, n2, i2);
    }), {
      vaporElement: t2
    };
  });
  y = () => {
    let { activeTab: y2 } = t(`useSetup:0:0`, () => i(() => ({
      activeTab: t(`ref:1:0`, () => p(`code`))
    })));
    return l(() => {
      let t2 = o(), i2 = f(`rue:component:start`), p2 = f(`rue:component:end`);
      return a(t2, i2), a(t2, p2), s(h(_, {
        children: l(() => {
          let t3 = o(), i3 = d(`h1`);
          a(t3, i3), e(i3, `text-5xl font-semibold mb-4 md:mb-4`), a(i3, r(`\u7EC4\u4EF6\u4E0E Props \u4F20\u9012`));
          let p3 = d(`div`);
          a(t3, p3), n(p3, `role`, `tablist`), e(p3, `tabs tabs-box`);
          let _2 = d(`button`);
          a(p3, _2), n(_2, `role`, `tab`), u(() => {
            e(_2, String(`tab ${y2.value === `preview` ? `tab-active` : ``}`));
          }), c(_2, `click`, () => {
            y2.value = `preview`;
          }), a(_2, r(`\u6548\u679C`));
          let b = d(`button`);
          a(p3, b), n(b, `role`, `tab`), u(() => {
            e(b, String(`tab ${y2.value === `code` ? `tab-active` : ``}`));
          }), c(b, `click`, () => {
            y2.value = `code`;
          }), a(b, r(`\u4EE3\u7801`));
          let x = d(`div`);
          a(t3, x), e(x, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let S = f(`rue:slot:start`), C = f(`rue:slot:end`);
          a(x, S), a(x, C), u(() => {
            s(m(y2.value === `code` ? l(() => {
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

const Hello: FC<{ name: string }> = (props) => <div>\u4F60\u597D\uFF0C{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`
                }), r2, i4, c2);
              }), {
                vaporElement: t4
              };
            }) : ``), x, S, C);
          }), a(x, r(` `));
          let w = f(`rue:slot:start`), T = f(`rue:slot:end`);
          return a(x, w), a(x, T), u(() => {
            s(m(y2.value === `preview` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = d(`div`);
              a(n2, r2), e(r2, `card-body grid gap-4`);
              let i4 = f(`rue:component:start`), c2 = f(`rue:component:end`);
              a(r2, i4), a(r2, c2), s(h(v, {
                name: `Rue`
              }), r2, i4, c2);
              let l2 = f(`rue:component:start`), u2 = f(`rue:component:end`);
              return a(r2, l2), a(r2, u2), s(h(v, {
                name: `World`
              }), r2, l2, u2), {
                vaporElement: t4
              };
            }) : ``), x, w, T);
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
  y as default
};

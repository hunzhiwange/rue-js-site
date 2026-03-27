import { A as e, G as t, O as n, P as r, S as i, U as a, _ as o, b as s, f as c, g as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as _, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as v, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
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
  let y;
  y = (t2) => u(() => {
    let n2 = f(`span`);
    e(n2, `px-2 py-1 rounded-md`), d(() => {
      r(n2, {
        backgroundColor: t2.color ?? `#eee`
      });
    });
    let i2 = p(`rue:slot:start`), a2 = p(`rue:slot:end`);
    return o(n2, i2), o(n2, a2), d(() => {
      let e2 = t2.label;
      c(h(e2), n2, i2, a2);
    }), {
      vaporElement: n2
    };
  });
  b = () => {
    let { activeTab: b2 } = t(`useSetup:0:0`, () => a(() => ({
      activeTab: t(`ref:1:0`, () => m(`code`))
    })));
    return u(() => {
      let t2 = s(), a2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return o(t2, a2), o(t2, m2), c(g(v, {
        children: u(() => {
          let t3 = s(), a3 = f(`h1`);
          o(t3, a3), e(a3, `text-5xl font-semibold mb-4 md:mb-4`), o(a3, i(`\u5C5E\u6027\u3001className\u3001style \u4E0E Props`));
          let m3 = f(`div`);
          o(t3, m3), n(m3, `role`, `tablist`), e(m3, `tabs tabs-box`);
          let v2 = f(`button`);
          o(m3, v2), n(v2, `role`, `tab`), d(() => {
            e(v2, String(`tab ${b2.value === `preview` ? `tab-active` : ``}`));
          }), l(v2, `click`, () => {
            b2.value = `preview`;
          }), o(v2, i(`\u6548\u679C`));
          let x = f(`button`);
          o(m3, x), n(x, `role`, `tab`), d(() => {
            e(x, String(`tab ${b2.value === `code` ? `tab-active` : ``}`));
          }), l(x, `click`, () => {
            b2.value = `code`;
          }), o(x, i(`\u4EE3\u7801`));
          let S = f(`div`);
          o(t3, S), e(S, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let C = p(`rue:slot:start`), w = p(`rue:slot:end`);
          o(S, C), o(S, w), d(() => {
            c(h(b2.value === `code` ? u(() => {
              let t4 = s(), n2 = f(`div`);
              o(t4, n2), e(n2, `card bg-base-100 shadow overflow-auto`);
              let r2 = f(`div`);
              o(n2, r2), e(r2, `card-body p-0`);
              let i2 = p(`rue:component:start`), a4 = p(`rue:component:end`);
              return o(r2, i2), o(r2, a4), d(() => {
                c(g(_, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC } from 'rues';

const Badge: FC<{ label: string; color?: string }> = (props) => (
  <span className="px-2 py-1 rounded-md" style={{ backgroundColor: props.color ?? '#eee' }}>
    {props.label}
  </span>
);

const AttributesAndProps: FC = () => (
  <div className="grid gap-4">
    <div id="box" className="border p-2">className \u4E0E id</div>
    <div style={{ color: 'tomato', fontWeight: 'bold' }}>\u5185\u8054\u6837\u5F0F\u5BF9\u8C61</div>
    <Badge label="\u9ED8\u8BA4" />
    <Badge label="\u81EA\u5B9A\u4E49\u8272" color="#cde" />
  </div>
);

export default AttributesAndProps;`
                }), r2, i2, a4);
              }), {
                vaporElement: t4
              };
            }) : ``), S, C, w);
          }), o(S, i(` `));
          let T = p(`rue:slot:start`), E = p(`rue:slot:end`);
          return o(S, T), o(S, E), d(() => {
            c(h(b2.value === `preview` ? u(() => {
              let t4 = s(), a4 = f(`div`);
              o(t4, a4), e(a4, `card bg-base-100 shadow`);
              let l2 = f(`div`);
              o(a4, l2), e(l2, `card-body grid gap-4`);
              let u2 = f(`div`);
              o(l2, u2), n(u2, `id`, `box`), e(u2, `border p-2`), o(u2, i(`className \u4E0E id`));
              let m4 = f(`div`);
              o(l2, m4), d(() => {
                r(m4, {
                  color: `tomato`,
                  fontWeight: `bold`
                });
              }), o(m4, i(`\u5185\u8054\u6837\u5F0F\u5BF9\u8C61`));
              let h2 = p(`rue:component:start`), _2 = p(`rue:component:end`);
              o(l2, h2), o(l2, _2), c(g(y, {
                label: `\u9ED8\u8BA4`
              }), l2, h2, _2);
              let v3 = p(`rue:component:start`), b3 = p(`rue:component:end`);
              return o(l2, v3), o(l2, b3), c(g(y, {
                label: `\u81EA\u5B9A\u4E49\u8272`,
                color: `#cde`
              }), l2, v3, b3), {
                vaporElement: t4
              };
            }) : ``), S, T, E);
          }), {
            vaporElement: t3
          };
        })
      }), t2, a2, m2), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  b as default
};

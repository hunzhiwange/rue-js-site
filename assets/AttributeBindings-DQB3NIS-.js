import { A as e, G as t, O as n, P as r, S as i, U as a, _ as o, b as s, f as c, g as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as _, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as v, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
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
  y = () => {
    let { message: y2, isRed: b, color: x, toggleRed: S, toggleColor: C, activeTab: w } = t(`useSetup:0:0`, () => a(() => {
      let e2 = t(`ref:1:0`, () => m(`Hello World!`)), n2 = t(`ref:1:1`, () => m(true)), r2 = t(`ref:1:2`, () => m(`green`));
      return {
        message: e2,
        isRed: n2,
        color: r2,
        toggleRed: () => {
          n2.value = !n2.value;
        },
        toggleColor: () => {
          r2.value = r2.value === `green` ? `blue` : `green`;
        },
        activeTab: t(`ref:1:3`, () => m(`preview`))
      };
    }));
    return u(() => {
      let t2 = s(), a2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return o(t2, a2), o(t2, m2), c(g(v, {
        children: u(() => {
          let t3 = s(), a3 = f(`h1`);
          o(t3, a3), e(a3, `text-5xl font-semibold mb-4 md:mb-4`), o(a3, i(`Attribute \u7ED1\u5B9A\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let m3 = f(`div`);
          o(t3, m3), n(m3, `role`, `tablist`), e(m3, `tabs tabs-box`);
          let v2 = f(`button`);
          o(m3, v2), n(v2, `role`, `tab`), d(() => {
            e(v2, String(`tab ${w.value === `preview` ? `tab-active` : ``}`));
          }), l(v2, `click`, () => {
            w.value = `preview`;
          }), o(v2, i(`\u6548\u679C`));
          let T = f(`button`);
          o(m3, T), n(T, `role`, `tab`), d(() => {
            e(T, String(`tab ${w.value === `code` ? `tab-active` : ``}`));
          }), l(T, `click`, () => {
            w.value = `code`;
          }), o(T, i(`\u4EE3\u7801`));
          let E = f(`div`);
          o(t3, E), e(E, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let D = p(`rue:slot:start`), O = p(`rue:slot:end`);
          o(E, D), o(E, O), d(() => {
            c(h(w.value === `code` ? u(() => {
              let t4 = s(), n2 = f(`div`);
              o(t4, n2), e(n2, `card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);
              let r2 = f(`div`);
              o(n2, r2), e(r2, `card-body p-0`);
              let i2 = p(`rue:component:start`), a4 = p(`rue:component:end`);
              return o(r2, i2), o(r2, a4), d(() => {
                c(g(_, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';

const AttributeBindings: FC = () => {
  const message = ref('Hello World!');
  const isRed = ref(true);
  const color = ref<'green' | 'blue'>('green');

  const toggleRed = () => {
    isRed.value = !isRed.value;
  };

  const toggleColor = () => {
    color.value = color.value === 'green' ? 'blue' : 'green';
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <p>
          <span title={message.value}>
            Hover your mouse over me for a few seconds to see my dynamically bound title!
          </span>
        </p>

        <p
          className={\`cursor-pointer \${isRed.value ? 'text-red-600' : ''}\`}
          onClick={toggleRed}
        >
          This should be red... but click me to toggle it.
        </p>

        <p className="cursor-pointer" style={{ color: color.value }} onClick={toggleColor}>
          This should be green, and should toggle between green and blue on click.
        </p>
      </div>
    </div>
  );
};

export default AttributeBindings;`
                }), r2, i2, a4);
              }), {
                vaporElement: t4
              };
            }) : ``), E, D, O);
          }), o(E, i(` `));
          let k = p(`rue:slot:start`), A = p(`rue:slot:end`);
          return o(E, k), o(E, A), d(() => {
            c(h(w.value === `preview` ? u(() => {
              let t4 = s(), a4 = f(`div`);
              o(t4, a4), e(a4, `card bg-base-100 shadow`);
              let c2 = f(`div`);
              o(a4, c2), e(c2, `card-body grid gap-4`);
              let u2 = f(`p`);
              o(c2, u2);
              let p2 = f(`span`);
              o(u2, p2), d(() => {
                n(p2, `title`, String(y2.value));
              }), o(p2, i(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));
              let m4 = f(`p`);
              o(c2, m4), d(() => {
                e(m4, String(`cursor-pointer ${b.value ? `text-red-600` : ``}`));
              }), l(m4, `click`, S), o(m4, i(`This should be red... but click me to toggle it.`));
              let h2 = f(`p`);
              return o(c2, h2), e(h2, `cursor-pointer`), d(() => {
                r(h2, {
                  color: x.value
                });
              }), l(h2, `click`, C), o(h2, i(`This should be green, and should toggle between green and blue on click.`)), {
                vaporElement: t4
              };
            }) : ``), E, k, A);
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
  y as default
};

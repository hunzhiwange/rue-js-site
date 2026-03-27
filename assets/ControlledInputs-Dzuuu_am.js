import { A as e, C as t, F as n, G as r, I as i, O as a, S as o, U as s, W as c, _ as l, b as u, f as d, g as f, m as p, q as m, x as h, y as g, z as _, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as v, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as y, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as b, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as x, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
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
  S = () => {
    let { text: S2, setText: C, activeTab: w } = r(`useSetup:0:0`, () => s(() => {
      let [e2, t2] = r(`useState:1:0`, () => c(``));
      return {
        text: e2,
        setText: t2,
        activeTab: r(`ref:1:1`, () => _(`code`))
      };
    }));
    return p(() => {
      let r2 = u(), s2 = g(`rue:component:start`), c2 = g(`rue:component:end`);
      return l(r2, s2), l(r2, c2), d(y(x, {
        children: p(() => {
          let r3 = u(), s3 = h(`h1`);
          l(r3, s3), e(s3, `text-5xl font-semibold mb-4 md:mb-4`), l(s3, o(`\u53D7\u63A7\u8F93\u5165`));
          let c3 = h(`div`);
          l(r3, c3), a(c3, `role`, `tablist`), e(c3, `tabs tabs-box`);
          let _2 = h(`button`);
          l(c3, _2), a(_2, `role`, `tab`), m(() => {
            e(_2, String(`tab ${w.value === `preview` ? `tab-active` : ``}`));
          }), f(_2, `click`, () => {
            w.value = `preview`;
          }), l(_2, o(`\u6548\u679C`));
          let x2 = h(`button`);
          l(c3, x2), a(x2, `role`, `tab`), m(() => {
            e(x2, String(`tab ${w.value === `code` ? `tab-active` : ``}`));
          }), f(x2, `click`, () => {
            w.value = `code`;
          }), l(x2, o(`\u4EE3\u7801`));
          let T = h(`div`);
          l(r3, T), e(T, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let E = g(`rue:slot:start`), D = g(`rue:slot:end`);
          l(T, E), l(T, D), m(() => {
            d(v(w.value === `code` ? p(() => {
              let t2 = u(), n2 = h(`div`);
              l(t2, n2), e(n2, `card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);
              let r4 = h(`div`);
              l(n2, r4), e(r4, `card-body p-0`);
              let i2 = g(`rue:component:start`), a2 = g(`rue:component:end`);
              return l(r4, i2), l(r4, a2), m(() => {
                d(y(b, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, useState } from 'rues';

const ControlledInputs: FC = () => {
  const [text, setText] = useState('');
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <input
          className="input input-bordered"
          value={text.value}
          onInput={(e: any) => setText((e.target as HTMLInputElement).value)}
          placeholder="\u8F93\u5165\u8BD5\u8BD5"
        />
        <div>\u5F53\u524D\uFF1A{text.value}</div>
      </div>
    </div>
  );
};

export default ControlledInputs;`
                }), r4, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), T, E, D);
          }), l(T, o(` `));
          let O = g(`rue:slot:start`), k = g(`rue:slot:end`);
          return l(T, O), l(T, k), m(() => {
            d(v(w.value === `preview` ? p(() => {
              let r4 = u(), s4 = h(`div`);
              l(r4, s4), e(s4, `card bg-base-100 shadow`);
              let c4 = h(`div`);
              l(s4, c4), e(c4, `card-body grid gap-4`);
              let d2 = h(`input`);
              l(c4, d2), e(d2, `input input-bordered`), m(() => {
                n(d2, S2.value);
              }), f(d2, `input`, (e2) => C(e2.target.value)), a(d2, `placeholder`, `\u8F93\u5165\u8BD5\u8BD5`);
              let p2 = h(`div`);
              l(c4, p2), l(p2, o(`\u5F53\u524D\uFF1A`));
              let g2 = t(p2);
              return l(p2, g2), m(() => {
                i(g2, S2.value);
              }), {
                vaporElement: r4
              };
            }) : ``), T, O, k);
          }), {
            vaporElement: r3
          };
        })
      }), r2, s2, c2), {
        vaporElement: r2
      };
    });
  };
});
export {
  __tla,
  S as default
};

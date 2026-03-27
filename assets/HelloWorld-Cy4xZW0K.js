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
    let { message: b2, activeTab: x } = n(`useSetup:0:0`, () => o(() => ({
      message: n(`ref:1:0`, () => h(`Hello World!`)),
      activeTab: n(`ref:1:1`, () => h(`preview`))
    })));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(_(y, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`\u4F60\u597D\uFF0C\u4E16\u754C\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let y2 = p(`button`);
          s(h3, y2), i(y2, `role`, `tab`), f(() => {
            e(y2, String(`tab ${x.value === `preview` ? `tab-active` : ``}`));
          }), u(y2, `click`, () => {
            x.value = `preview`;
          }), s(y2, a(`\u6548\u679C`));
          let S = p(`button`);
          s(h3, S), i(S, `role`, `tab`), f(() => {
            e(S, String(`tab ${x.value === `code` ? `tab-active` : ``}`));
          }), u(S, `click`, () => {
            x.value = `code`;
          }), s(S, a(`\u4EE3\u7801`));
          let C = p(`div`);
          s(n3, C), e(C, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let w = m(`rue:slot:start`), T = m(`rue:slot:end`);
          s(C, w), s(C, T), f(() => {
            l(g(x.value === `code` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow overflow-auto`);
              let r2 = p(`div`);
              s(n4, r2), e(r2, `card-body p-0`);
              let i2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(r2, i2), s(r2, a2), f(() => {
                l(_(v, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';

const HelloWorld: FC = () => {
  const message = ref('Hello World!');
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h1>{message.value}</h1>
      </div>
    </div>
  );
};

export default HelloWorld;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), C, w, T);
          }), s(C, a(` `));
          let E = m(`rue:slot:start`), D = m(`rue:slot:end`);
          return s(C, E), s(C, D), f(() => {
            l(g(x.value === `preview` ? d(() => {
              let n4 = c(), i2 = p(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let a2 = p(`div`);
              s(i2, a2), e(a2, `card-body`);
              let o4 = p(`h1`);
              s(a2, o4);
              let l2 = t(o4);
              return s(o4, l2), f(() => {
                r(l2, b2.value);
              }), {
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
  b as default
};

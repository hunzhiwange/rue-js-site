import { A as e, C as t, F as n, G as r, I as i, O as a, S as o, U as s, _ as c, b as l, f as u, m as d, q as f, x as p, y as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { r as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
let g;
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
  })()
]).then(async () => {
  g = () => {
    let { themes: g2, labels: _ } = r(`useSetup:0:0`, () => s(() => ({
      themes: [
        `light`,
        `dark`
      ],
      labels: {
        light: `\u4EAE\u8272`,
        dark: `\u6697\u8272`
      }
    })));
    return d(() => {
      let r2 = p(`div`);
      e(r2, `max-w-[600px] mx-auto p-6`);
      let s2 = p(`h2`);
      c(r2, s2), e(s2, `text-xl font-semibold mb-3`), c(s2, o(`TDZ E2E`));
      let v = p(`select`);
      c(r2, v), a(v, `aria-label`, `\u5207\u6362\u4E3B\u9898`), e(v, `select select-bordered select-sm bg-transparent`);
      let y = m(`rue:list:start`), b = m(`rue:list:end`);
      c(v, y), c(v, b);
      let x = /* @__PURE__ */ new Map();
      return f(() => {
        x = h({
          items: g2 || [],
          getKey: (e2, t2) => e2,
          elements: x,
          parent: v,
          before: b,
          start: y,
          renderItem: (e2, r3, o2, s3, m2) => {
            u(d(() => {
              let r4 = l(), o3 = p(`option`);
              c(r4, o3), f(() => {
                a(o3, `key`, String(e2));
              }), f(() => {
                n(o3, e2);
              });
              let s4 = t(o3);
              return c(o3, s4), f(() => {
                i(s4, _[e2] ? `${_[e2]} (${e2})` : e2);
              }), {
                vaporElement: r4
              };
            }), r3, o2, s3);
          }
        });
      }), {
        vaporElement: r2
      };
    });
  };
});
export {
  __tla,
  g as default
};

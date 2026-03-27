import { A as e, C as t, G as n, I as r, S as i, U as a, _ as o, f as s, m as c, q as l, x as u, y as d, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { a as f, o as p, t as m, __tla as __tla_1 } from "./src-Ba80c3lX.js";
let h;
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
  h = () => {
    let { route: h2, id: g } = n(`useSetup:0:0`, () => a(() => {
      var _a, _b;
      let e2 = f();
      return {
        route: e2,
        id: ((_b = (_a = e2.value) == null ? void 0 : _a.params) == null ? void 0 : _b.id) ?? ``
      };
    }));
    return c(() => {
      let n2 = u(`div`);
      e(n2, `max-w-2xl mx-auto p-6`);
      let a2 = u(`div`);
      o(n2, a2), e(a2, `card bg-base-100 shadow`);
      let c2 = u(`div`);
      o(a2, c2), e(c2, `card-body`);
      let f2 = u(`h2`);
      o(c2, f2), e(f2, `card-title text-success`), o(f2, i(`\u6587\u7AE0\u8BE6\u60C5`));
      let h3 = u(`p`);
      o(c2, h3), o(h3, i(`\u6587\u7AE0 ID\uFF1A`));
      let _ = u(`span`);
      o(h3, _), e(_, `font-mono text-primary`);
      let v = t(_);
      o(_, v), l(() => {
        r(v, g);
      });
      let y = u(`div`);
      o(c2, y), e(y, `card-actions`);
      let b = d(`rue:component:start`), x = d(`rue:component:end`);
      return o(y, b), o(y, x), s(p(m, {
        className: `btn btn-neutral btn-sm`,
        to: `/posts`,
        children: `\u8FD4\u56DE\u5217\u8868`
      }), y, b, x), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  h as default
};

import { A as e, C as t, G as n, I as r, O as i, S as a, _ as o, g as s, m as c, q as l, x as u, z as d, __tla as __tla_0 } from "./rue-CEPv9khA.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let f;
  f = n(`ref:1:0`, () => d(0));
  p = () => c(() => {
    let n2 = u(`div`);
    e(n2, `max-w-sm mx-auto p-6`);
    let c2 = u(`div`);
    o(n2, c2), e(c2, `card bg-base-100 shadow`);
    let d2 = u(`div`);
    o(c2, d2), e(d2, `card-body`);
    let p2 = u(`h2`);
    o(d2, p2), e(p2, `card-title text-primary`), o(p2, a(`Vapor JSX Demo`));
    let m = u(`div`);
    o(d2, m), e(m, `flex items-center gap-3`);
    let h = u(`button`);
    o(m, h), e(h, `btn btn-primary btn-sm`), s(h, `click`, () => f.value++), o(h, a(`\u52A01`));
    let g = u(`span`);
    o(m, g), i(g, `id`, `n`), e(g, `text-2xl font-bold text-primary`);
    let _ = t(g);
    return o(g, _), l(() => {
      r(_, f.value);
    }), {
      vaporElement: n2
    };
  });
});
export {
  __tla,
  p as default
};

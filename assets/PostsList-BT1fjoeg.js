import { A as e, S as t, _ as n, f as r, m as i, x as a, y as o, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { o as s, t as c, __tla as __tla_1 } from "./src-Ba80c3lX.js";
let l;
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
  l = () => i(() => {
    let i2 = a(`div`);
    e(i2, `max-w-2xl mx-auto p-6`);
    let l2 = a(`div`);
    n(i2, l2), e(l2, `card bg-base-100 shadow`);
    let u = a(`div`);
    n(l2, u), e(u, `card-body`);
    let d = a(`h2`);
    n(u, d), e(d, `card-title text-primary`), n(d, t(`\u6587\u7AE0\u5217\u8868`));
    let f = a(`ul`);
    n(u, f), e(f, `space-y-2`);
    let p = a(`li`);
    n(f, p);
    let m = o(`rue:component:start`), h = o(`rue:component:end`);
    n(p, m), n(p, h), r(s(c, {
      className: `btn btn-primary btn-sm`,
      to: `/posts/1`,
      children: `\u67E5\u770B 1`
    }), p, m, h);
    let g = a(`li`);
    n(f, g);
    let _ = o(`rue:component:start`), v = o(`rue:component:end`);
    n(g, _), n(g, v), r(s(c, {
      className: `btn btn-info btn-sm`,
      to: `/posts/2`,
      children: `\u67E5\u770B 2`
    }), g, _, v);
    let y = a(`li`);
    n(f, y);
    let b = o(`rue:component:start`), x = o(`rue:component:end`);
    return n(y, b), n(y, x), r(s(c, {
      className: `btn btn-secondary btn-sm`,
      to: `/posts/3`,
      children: `\u67E5\u770B 3`
    }), y, b, x), {
      vaporElement: i2
    };
  });
});
export {
  __tla,
  l as default
};

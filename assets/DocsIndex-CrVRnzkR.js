import { A as e, C as t, I as n, O as r, S as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { o as f, t as p, __tla as __tla_1 } from "./src-Ba80c3lX.js";
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
  let m;
  m = () => c(() => {
    let t2 = u(`aside`);
    e(t2, `md:w-64 shrink-0`);
    let n2 = u(`div`);
    a(t2, n2), e(n2, `sticky top-20`);
    let r2 = u(`div`);
    a(n2, r2), e(r2, `text-xs font-semibold text-base-content/60 mb-2`), a(r2, i(`\u6587\u6863`));
    let o2 = u(`ul`);
    a(n2, o2), e(o2, `menu menu-sm bg-base-100 rounded-box`);
    let c2 = u(`li`);
    a(o2, c2);
    let l2 = d(`rue:component:start`), m2 = d(`rue:component:end`);
    a(c2, l2), a(c2, m2), s(f(p, {
      to: `/page/intro`,
      className: `justify-start`,
      children: `\u4ECB\u7ECD`
    }), c2, l2, m2);
    let h2 = u(`li`);
    a(o2, h2);
    let g = d(`rue:component:start`), _ = d(`rue:component:end`);
    a(h2, g), a(h2, _), s(f(p, {
      to: `/page/installation`,
      className: `justify-start`,
      children: `\u5B89\u88C5`
    }), h2, g, _);
    let v = u(`li`);
    a(o2, v);
    let y = d(`rue:component:start`), b = d(`rue:component:end`);
    a(v, y), a(v, b), s(f(p, {
      to: `/page/getting-started`,
      className: `justify-start`,
      children: `\u5FEB\u901F\u4E0A\u624B`
    }), v, y, b);
    let x = u(`li`);
    a(o2, x);
    let S = d(`rue:component:start`), C = d(`rue:component:end`);
    a(x, S), a(x, C), s(f(p, {
      to: `/page/routing`,
      className: `justify-start`,
      children: `\u8DEF\u7531`
    }), x, S, C);
    let w = u(`li`);
    a(o2, w);
    let T = d(`rue:component:start`), E = d(`rue:component:end`);
    a(w, T), a(w, E), s(f(p, {
      to: `/page/state`,
      className: `justify-start`,
      children: `\u72B6\u6001\u4E0E\u54CD\u5E94\u5F0F`
    }), w, T, E);
    let D = u(`li`);
    a(o2, D);
    let O = d(`rue:component:start`), k = d(`rue:component:end`);
    a(D, O), a(D, k), s(f(p, {
      to: `/page/jsx`,
      className: `justify-start`,
      children: `JSX`
    }), D, O, k);
    let A = u(`li`);
    a(o2, A);
    let j = d(`rue:component:start`), M = d(`rue:component:end`);
    return a(A, j), a(A, M), s(f(p, {
      to: `/page/vapor`,
      className: `justify-start`,
      children: `Vapor \u6E32\u67D3`
    }), A, j, M), {
      vaporElement: t2
    };
  });
  h = () => c(() => {
    let c2 = o(), p2 = u(`div`);
    a(c2, p2), e(p2, `md:flex md:items-start md:gap-6`);
    let h2 = d(`rue:component:start`), g = d(`rue:component:end`);
    a(p2, h2), a(p2, g), s(f(m, {}), p2, h2, g);
    let _ = u(`div`);
    a(p2, _), e(_, `card bg-base-100 border shadow flex-1`);
    let v = u(`div`);
    a(_, v), e(v, `card-body`);
    let y = u(`h1`);
    a(v, y), e(y, `text-2xl font-semibold mb-4`), a(y, i(`Rue \u6587\u6863`));
    let b = u(`p`);
    a(v, b), e(b, `text-base-content/70 mb-6`), a(b, i(`\u672C\u7AE0\u8282\u4ECB\u7ECD Rue \u7684\u6838\u5FC3\u6982\u5FF5\u4E0E\u7528\u6CD5\uFF0C\u53C2\u8003 VitePress \u6587\u6863\u7ED3\u6784\u3002\u5DE6\u4FA7\u4E3A\u76EE\u5F55\uFF0C\u53F3\u4FA7\u4E3A\u5185\u5BB9\u533A\u3002`));
    let x = u(`h2`);
    a(v, x), r(x, `id`, `getting-started`), e(x, `text-xl font-semibold mt-6 mb-3`), a(x, i(`\u5FEB\u901F\u4E0A\u624B`));
    let S = u(`pre`);
    a(v, S), e(S, `bg-base-200 rounded-box p-4 text-sm overflow-auto`);
    let C = u(`code`);
    a(S, C);
    let w = t(C);
    a(C, w), l(() => {
      n(w, `pnpm add rue rue-router
import { mount, FC } from 'rues';
import { createRouter, createWebHashHistory } from '@rue/router';

// \u521B\u5EFA\u8DEF\u7531\u4E0E\u6302\u8F7D
`);
    });
    let T = u(`h2`);
    a(v, T), r(T, `id`, `routing`), e(T, `text-xl font-semibold mt-6 mb-3`), a(T, i(`\u8DEF\u7531\u4E0E\u9875\u9762`));
    let E = u(`p`);
    a(v, E), e(E, `text-base-content/70`), a(E, i(`\u4F7F\u7528`));
    let D = u(`code`);
    a(E, D), e(D, `bg-base-200 px-1 rounded`), a(D, i(`rue-router`));
    let O = t(E);
    a(E, O), n(O, ` `), a(E, i(`\u521B\u5EFA\u8DEF\u7531\uFF1B\u6BCF\u4E2A\u9875\u9762\u4E3A\u4E00\u4E2A JSX \u7EC4\u4EF6\u3002`));
    let k = u(`aside`);
    a(p2, k), e(k, `md:w-64 shrink-0`);
    let A = u(`div`);
    a(k, A), e(A, `sticky top-20`);
    let j = u(`div`);
    a(A, j), e(j, `card bg-base-100 border p-3 text-sm`);
    let M = u(`div`);
    a(j, M), e(M, `text-xs font-semibold text-base-content/60 mb-2`), a(M, i(`\u672C\u9875\u5927\u7EB2`));
    let N = u(`ul`);
    a(j, N), e(N, `menu menu-sm bg-base-100 rounded-box`);
    let P = u(`li`);
    a(N, P);
    let F = u(`a`);
    a(P, F), r(F, `href`, `#getting-started`), e(F, `justify-start`), a(F, i(`\u5FEB\u901F\u4E0A\u624B`));
    let I = u(`li`);
    a(N, I);
    let L = u(`a`);
    return a(I, L), r(L, `href`, `#routing`), e(L, `justify-start`), a(L, i(`\u8DEF\u7531\u4E0E\u9875\u9762`)), {
      vaporElement: c2
    };
  });
});
export {
  __tla,
  h as default
};

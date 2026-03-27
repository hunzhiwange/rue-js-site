import { A as e, S as t, _ as n, b as r, f as i, m as a, x as o, y as s, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { o as c, t as l, __tla as __tla_1 } from "./src-Ba80c3lX.js";
let u;
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
  u = () => a(() => {
    let a2 = r(), u2 = o(`h1`);
    n(a2, u2), e(u2, `text-2xl font-semibold mb-4`), n(u2, t(`\u63D2\u4EF6`));
    let d = o(`div`);
    n(a2, d), e(d, `grid md:grid-cols-2 gap-6`);
    let f = o(`div`);
    n(d, f), e(f, `card bg-base-100 border shadow`);
    let p = o(`div`);
    n(f, p), e(p, `card-body`);
    let m = o(`h2`);
    n(p, m), e(m, `text-lg font-semibold`), n(m, t(`\u7528 AI \u81EA\u52A8\u751F\u6210\u63D2\u4EF6`));
    let h = o(`p`);
    n(p, h), e(h, `text-base-content/70 mt-2`), n(h, t(`\u901A\u8FC7 AI \u63CF\u8FF0\u4F60\u7684\u9700\u6C42\uFF0C\u81EA\u52A8\u751F\u6210 Rue \u63D2\u4EF6\u7684\u9AA8\u67B6\u4E0E\u6838\u5FC3\u903B\u8F91\uFF0C\u7136\u540E\u6309\u9700\u8865\u5145\u6D4B\u8BD5\u4E0E\u6587\u6863\u3002 \u8FD9\u79CD\u65B9\u5F0F\u9002\u5408\u5FEB\u901F\u8BD5\u9A8C\u65B0\u80FD\u529B\u3001\u642D\u5EFA\u5185\u90E8\u5DE5\u5177\u6216\u4E3A\u56E2\u961F\u5B9A\u5236\u516C\u5171\u80FD\u529B\u3002`));
    let g = o(`div`);
    n(p, g), e(g, `mt-4 flex gap-3`);
    let _ = s(`rue:component:start`), v = s(`rue:component:end`);
    n(g, _), n(g, v), i(c(l, {
      to: `/guide/guide/reusability/plugins`,
      className: `btn btn-primary btn-sm`,
      children: `\u63D2\u4EF6\u57FA\u7840`
    }), g, _, v);
    let y = s(`rue:component:start`), b = s(`rue:component:end`);
    n(g, y), n(g, b), i(c(l, {
      to: `/guide/api/application#app-use`,
      className: `btn btn-outline btn-sm`,
      children: `app.use \u53C2\u8003`
    }), g, y, b);
    let x = o(`ul`);
    n(p, x), e(x, `mt-4 text-sm space-y-2 list-disc pl-5`);
    let S = o(`li`);
    n(x, S), n(S, t(`\u7EA6\u5B9A install \u65B9\u6CD5\uFF0C\u63A5\u6536\u5E94\u7528\u5B9E\u4F8B\u4E0E\u53EF\u9009\u53C2\u6570`));
    let C = o(`li`);
    n(x, C), n(C, t(`\u6309\u9700\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6 / \u6307\u4EE4\u6216\u6CE8\u5165\u8D44\u6E90`));
    let w = o(`li`);
    n(x, w), n(w, t(`\u63D0\u4F9B\u6E05\u6670\u7684 README \u4E0E\u8FC1\u79FB\u8BF4\u660E\uFF0C\u4FBF\u4E8E\u590D\u7528`));
    let T = o(`div`);
    n(d, T), e(T, `card bg-base-100 border shadow`);
    let E = o(`div`);
    n(T, E), e(E, `card-body`);
    let D = o(`h2`);
    n(E, D), e(D, `text-lg font-semibold`), n(D, t(`\u4ECE Vue / React \u79FB\u690D\u63D2\u4EF6`));
    let O = o(`p`);
    n(E, O), e(O, `text-base-content/70 mt-2`), n(O, t(`\u4F60\u53EF\u4EE5\u5C06\u5DF2\u6709\u7684 Vue / React \u63D2\u4EF6\u8FC1\u79FB\u5230 Rue\u3002\u5927\u591A\u6570\u573A\u666F\u4EC5\u9700\u8C03\u6574\u5B89\u88C5\u5165\u53E3\u4E0E\u751F\u547D\u5468\u671F\u8C03\u7528\uFF0C\u4FDD\u6301\u539F\u6709\u529F\u80FD\u4E0E API \u8BBE\u8BA1\u4E0D\u53D8\u3002`));
    let k = o(`div`);
    n(E, k), e(k, `mt-4 flex gap-3`);
    let A = s(`rue:component:start`), j = s(`rue:component:end`);
    n(k, A), n(k, j), i(c(l, {
      to: `/guide/guide/reusability/plugins#writing-a-plugin`,
      className: `btn btn-primary btn-sm`,
      children: `\u7F16\u5199\u63D2\u4EF6`
    }), k, A, j);
    let M = s(`rue:component:start`), N = s(`rue:component:end`);
    n(k, M), n(k, N), i(c(l, {
      to: `/page/routing`,
      className: `btn btn-outline btn-sm`,
      children: `\u8DEF\u7531\u4E0E\u9875\u9762`
    }), k, M, N);
    let P = o(`ul`);
    n(E, P), e(P, `mt-4 text-sm space-y-2 list-disc pl-5`);
    let F = o(`li`);
    n(P, F), n(F, t(`\u5C06 Vue \u63D2\u4EF6\u7684`));
    let I = o(`code`);
    n(F, I), n(I, t(`install`)), n(F, t(`\u8F6C\u6362\u4E3A Rue \u63D2\u4EF6\u5165\u53E3`));
    let L = o(`li`);
    n(P, L), n(L, t(`React \u7684 Context / Hook \u80FD\u529B\u6620\u5C04\u5230 Rue \u7684\u72B6\u6001\u4E0E\u526F\u4F5C\u7528`));
    let R = o(`li`);
    n(P, R), n(R, t(`\u4FDD\u6301\u5BF9\u5916 API \u4E0D\u53D8\uFF0C\u5185\u90E8\u5B9E\u73B0\u9002\u914D Rue \u8FD0\u884C\u65F6`));
    let z = o(`div`);
    n(a2, z), e(z, `mt-8 card bg-base-100 border`);
    let B = o(`div`);
    n(z, B), e(B, `card-body`);
    let V = o(`h3`);
    n(B, V), e(V, `text-base font-semibold`), n(V, t(`\u53C2\u8003\u4E0E\u4E0B\u4E00\u6B65`));
    let H = o(`ul`);
    n(B, H), e(H, `mt-2 text-sm space-y-2 list-disc pl-5`);
    let U = o(`li`);
    n(H, U);
    let W = s(`rue:component:start`), G = s(`rue:component:end`);
    n(U, W), n(U, G), i(c(l, {
      to: `/guide/guide/scaling-up/tooling`,
      className: `link`,
      children: `\u5DE5\u5177\u94FE`
    }), U, W, G), n(U, t(`\uFF1A\u4F7F\u7528 Vite \u4E0E Rue \u63D2\u4EF6\u63D0\u5347\u5F00\u53D1\u6548\u7387`));
    let K = o(`li`);
    n(H, K);
    let q = s(`rue:component:start`), J = s(`rue:component:end`);
    n(K, q), n(K, J), i(c(l, {
      to: `/guide/guide/testing`,
      className: `link`,
      children: `\u6D4B\u8BD5`
    }), K, q, J), n(K, t(`\uFF1A\u7528 Vitest \u4E3A\u63D2\u4EF6\u7F16\u5199\u5355\u5143\u4E0E\u96C6\u6210\u6D4B\u8BD5`));
    let Y = o(`li`);
    n(H, Y);
    let X = s(`rue:component:start`), Z = s(`rue:component:end`);
    return n(Y, X), n(Y, Z), i(c(l, {
      to: `/guide/guide/best-practices/performance`,
      className: `link`,
      children: `\u6027\u80FD\u4F18\u5316`
    }), Y, X, Z), n(Y, t(`\uFF1A\u5728\u771F\u5B9E\u573A\u666F\u4E2D\u8BC4\u4F30\u4E0E\u4F18\u5316\u63D2\u4EF6`)), {
      vaporElement: a2
    };
  });
});
export {
  __tla,
  u as default
};

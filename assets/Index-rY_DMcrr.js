import { A as e, S as t, _ as n, b as r, f as i, m as a, x as o, y as s, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { o as c, t as l, __tla as __tla_1 } from "./src-Ba80c3lX.js";
import { t as u, __tla as __tla_2 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let d;
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
  })()
]).then(async () => {
  d = () => a(() => {
    let d2 = r(), f = s(`rue:component:start`), p = s(`rue:component:end`);
    return n(d2, f), n(d2, p), i(c(u, {
      children: a(() => {
        let u2 = r(), d3 = o(`div`);
        n(u2, d3), e(d3, `card bg-base-100 shadow`);
        let f2 = o(`div`);
        n(d3, f2), e(f2, `card-body`);
        let p2 = o(`h2`);
        n(f2, p2), e(p2, `card-title`), n(p2, t(`React JSX \u8BED\u6CD5\u76EE\u5F55`));
        let m = o(`ul`);
        n(f2, m), e(m, `menu menu-sm bg-transparent rounded-box`);
        let h = o(`li`);
        n(m, h);
        let g = s(`rue:component:start`), _ = s(`rue:component:end`);
        n(h, g), n(h, _), i(c(l, {
          to: `/jsx/basic-elements`,
          children: `\u57FA\u7840\u5143\u7D20\u4E0E\u81EA\u95ED\u5408\u6807\u7B7E`
        }), h, g, _);
        let v = o(`li`);
        n(m, v);
        let y = s(`rue:component:start`), b = s(`rue:component:end`);
        n(v, y), n(v, b), i(c(l, {
          to: `/jsx/expressions`,
          children: `\u8868\u8FBE\u5F0F\u4E0E\u63D2\u503C`
        }), v, y, b);
        let x = o(`li`);
        n(m, x);
        let S = s(`rue:component:start`), C = s(`rue:component:end`);
        n(x, S), n(x, C), i(c(l, {
          to: `/jsx/attributes-and-props`,
          children: `\u5C5E\u6027\u3001className\u3001style \u4E0E Props`
        }), x, S, C);
        let w = o(`li`);
        n(m, w);
        let T = s(`rue:component:start`), E = s(`rue:component:end`);
        n(w, T), n(w, E), i(c(l, {
          to: `/jsx/spread-props`,
          children: `\u5BF9\u8C61\u5C55\u5F00\u5C5E\u6027\uFF08spread props\uFF09`
        }), w, T, E);
        let D = o(`li`);
        n(m, D);
        let O = s(`rue:component:start`), k = s(`rue:component:end`);
        n(D, O), n(D, k), i(c(l, {
          to: `/jsx/conditional-rendering`,
          children: `\u6761\u4EF6\u6E32\u67D3\uFF08?:\u3001&&\u3001null\uFF09`
        }), D, O, k);
        let A = o(`li`);
        n(m, A);
        let j = s(`rue:component:start`), M = s(`rue:component:end`);
        n(A, j), n(A, M), i(c(l, {
          to: `/jsx/lists-and-keys`,
          children: `\u5217\u8868\u6E32\u67D3\u4E0E key`
        }), A, j, M);
        let N = o(`li`);
        n(m, N);
        let P = s(`rue:component:start`), F = s(`rue:component:end`);
        n(N, P), n(N, F), i(c(l, {
          to: `/jsx/fragments`,
          children: a(() => {
            let e2 = r();
            return n(e2, t(`Fragments\uFF08`)), n(e2, t(` \u2026 `)), n(e2, t(`\uFF09`)), {
              vaporElement: e2
            };
          })
        }), N, P, F);
        let I = o(`li`);
        n(m, I);
        let L = s(`rue:component:start`), R = s(`rue:component:end`);
        n(I, L), n(I, R), i(c(l, {
          to: `/jsx/children`,
          children: `children \u63D2\u69FD\u4E0E\u5D4C\u5957`
        }), I, L, R);
        let z = o(`li`);
        n(m, z);
        let B = s(`rue:component:start`), V = s(`rue:component:end`);
        n(z, B), n(z, V), i(c(l, {
          to: `/jsx/components`,
          children: `\u7EC4\u4EF6\u4E0E Props \u4F20\u9012`
        }), z, B, V);
        let H = o(`li`);
        n(m, H);
        let U = s(`rue:component:start`), W = s(`rue:component:end`);
        n(H, U), n(H, W), i(c(l, {
          to: `/jsx/events`,
          children: `\u4E8B\u4EF6\u5904\u7406`
        }), H, U, W);
        let G = o(`li`);
        n(m, G);
        let K = s(`rue:component:start`), q = s(`rue:component:end`);
        n(G, K), n(G, q), i(c(l, {
          to: `/jsx/controlled-inputs`,
          children: `\u53D7\u63A7\u8F93\u5165`
        }), G, K, q);
        let J = o(`li`);
        n(m, J);
        let Y = s(`rue:component:start`), X = s(`rue:component:end`);
        return n(J, Y), n(J, X), i(c(l, {
          to: `/jsx/refs`,
          children: `Refs \u57FA\u7840`
        }), J, Y, X), {
          vaporElement: u2
        };
      })
    }), d2, f, p), {
      vaporElement: d2
    };
  });
});
export {
  __tla,
  d as default
};

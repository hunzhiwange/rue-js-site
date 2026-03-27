import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let x;
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
  let b;
  b = ({ as: e2 = `span`, ariaLabel: t2, size: n2, color: r2, className: i2, children: a2 }) => {
    let o2 = `status`;
    return n2 && (o2 += ` status-${n2}`), r2 && (o2 += ` status-${r2}`), i2 && (o2 += ` ${i2}`), g(e2 === `div` ? `div` : `span`, {
      className: o2,
      "aria-label": t2,
      children: a2
    });
  };
  x = () => {
    let { tabBasic: x2, tabSizes: S, tabColors: C, tabPing: w, tabBounce: T } = n(`useSetup:0:0`, () => o(() => ({
      tabBasic: n(`ref:1:0`, () => m(`preview`)),
      tabSizes: n(`ref:1:1`, () => m(`preview`)),
      tabColors: n(`ref:1:2`, () => m(`preview`)),
      tabPing: n(`ref:1:3`, () => m(`preview`)),
      tabBounce: n(`ref:1:4`, () => m(`preview`))
    })));
    return u(() => {
      let n2 = c(), o2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return s(n2, o2), s(n2, m2), l(g(_, {
        children: u(() => {
          let n3 = c(), o3 = f(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          s(o3, m3), s(m3, a(`Status`));
          let _2 = f(`p`);
          s(o3, _2), e(_2, `text-sm mt-3 mb-3`), s(_2, a(`Status is a really small icon to visually show the current status of an element, like online, offline, error, etc.`));
          let E = f(`div`);
          s(o3, E), e(E, `text-sm`);
          let D = f(`a`);
          s(E, D), i(D, `href`, `https://daisyui.com/components/status/`), i(D, `target`, `_blank`), s(D, a(`View Status classnames`));
          let O = f(`div`);
          s(o3, O), e(O, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let k = f(`h2`);
          s(O, k), e(k, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(k, a(`# Status`));
          let A = p(`rue:component:start`), j = p(`rue:component:end`);
          s(O, A), s(O, j), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: x2.value,
              onChange: (e2) => x2.value = e2,
              className: `mb-3`
            }), O, A, j);
          });
          let M = p(`rue:slot:start`), N = p(`rue:slot:end`);
          s(O, M), s(O, N), d(() => {
            l(h(x2.value === `preview` ? u(() => {
              let e2 = c(), t2 = f(`div`);
              s(e2, t2), i(t2, `class`, `preview`);
              let n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                as: `span`
              }), t2, n4, r2), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Status as="span" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), O, M, N);
          });
          let P = f(`div`);
          s(o3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let F = f(`h2`);
          s(P, F), e(F, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(F, a(`# Status sizes`));
          let I = p(`rue:component:start`), L = p(`rue:component:end`);
          s(P, I), s(P, L), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: S.value,
              onChange: (e2) => S.value = e2,
              className: `mb-3`
            }), P, I, L);
          });
          let R = p(`rue:slot:start`), z = p(`rue:slot:end`);
          s(P, R), s(P, z), d(() => {
            l(h(S.value === `preview` ? u(() => {
              let e2 = c(), t2 = f(`div`);
              s(e2, t2), i(t2, `class`, `preview`);
              let n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              s(t2, n4), s(t2, r2), l(g(b, {
                ariaLabel: `status`,
                size: `xs`
              }), t2, n4, r2);
              let a2 = p(`rue:component:start`), o4 = p(`rue:component:end`);
              s(t2, a2), s(t2, o4), l(g(b, {
                ariaLabel: `status`,
                size: `sm`
              }), t2, a2, o4);
              let u2 = p(`rue:component:start`), d2 = p(`rue:component:end`);
              s(t2, u2), s(t2, d2), l(g(b, {
                ariaLabel: `status`,
                size: `md`
              }), t2, u2, d2);
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(t2, m4), s(t2, h2), l(g(b, {
                ariaLabel: `status`,
                size: `lg`
              }), t2, m4, h2);
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              return s(t2, _3), s(t2, v2), l(g(b, {
                ariaLabel: `status`,
                size: `xl`
              }), t2, _3, v2), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Status ariaLabel="status" size="xs" />
<Status ariaLabel="status" size="sm" />
<Status ariaLabel="status" size="md" />
<Status ariaLabel="status" size="lg" />
<Status ariaLabel="status" size="xl" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), P, R, z);
          });
          let B = f(`div`);
          s(o3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let V = f(`h2`);
          s(B, V), e(V, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(V, a(`# Status with colors`));
          let H = p(`rue:component:start`), U = p(`rue:component:end`);
          s(B, H), s(B, U), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: C.value,
              onChange: (e2) => C.value = e2,
              className: `mb-3`
            }), B, H, U);
          });
          let W = p(`rue:slot:start`), G = p(`rue:slot:end`);
          s(B, W), s(B, G), d(() => {
            l(h(C.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `mt-2 preview`);
              let r2 = p(`rue:component:start`), i2 = p(`rue:component:end`);
              s(n4, r2), s(n4, i2), l(g(b, {
                ariaLabel: `status`,
                color: `primary`
              }), n4, r2, i2);
              let a2 = p(`rue:component:start`), o4 = p(`rue:component:end`);
              s(n4, a2), s(n4, o4), l(g(b, {
                ariaLabel: `status`,
                color: `secondary`
              }), n4, a2, o4);
              let u2 = p(`rue:component:start`), d2 = p(`rue:component:end`);
              s(n4, u2), s(n4, d2), l(g(b, {
                ariaLabel: `status`,
                color: `accent`
              }), n4, u2, d2);
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(n4, m4), s(n4, h2), l(g(b, {
                ariaLabel: `status`,
                color: `neutral`
              }), n4, m4, h2);
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(n4, _3), s(n4, v2), l(g(b, {
                ariaLabel: `info`,
                color: `info`
              }), n4, _3, v2);
              let y2 = p(`rue:component:start`), x3 = p(`rue:component:end`);
              s(n4, y2), s(n4, x3), l(g(b, {
                ariaLabel: `success`,
                color: `success`
              }), n4, y2, x3);
              let S2 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(n4, S2), s(n4, C2), l(g(b, {
                ariaLabel: `warning`,
                color: `warning`
              }), n4, S2, C2);
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              return s(n4, w2), s(n4, T2), l(g(b, {
                ariaLabel: `error`,
                color: `error`
              }), n4, w2, T2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Status ariaLabel="status" color="primary" />
<Status ariaLabel="status" color="secondary" />
<Status ariaLabel="status" color="accent" />
<Status ariaLabel="status" color="neutral" />
<Status ariaLabel="info" color="info" />
<Status ariaLabel="success" color="success" />
<Status ariaLabel="warning" color="warning" />
<Status ariaLabel="error" color="error" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), B, W, G);
          });
          let K = f(`div`);
          s(o3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let q = f(`h2`);
          s(K, q), e(q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(q, a(`# Status with ping animation`));
          let J = p(`rue:component:start`), Y = p(`rue:component:end`);
          s(K, J), s(K, Y), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: w.value,
              onChange: (e2) => w.value = e2,
              className: `mb-3`
            }), K, J, Y);
          });
          let X = p(`rue:slot:start`), Z = p(`rue:slot:end`);
          s(K, X), s(K, Z), d(() => {
            l(h(w.value === `preview` ? u(() => {
              let n4 = c(), i2 = f(`div`);
              s(n4, i2), e(i2, `mt-2 preview`);
              let o4 = f(`div`);
              s(i2, o4), e(o4, `inline-grid *:[grid-area:1/1]`);
              let u2 = f(`div`);
              s(o4, u2), e(u2, `status status-error animate-ping`);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(o4, d2), s(o4, m4), l(g(b, {
                color: `error`,
                className: `animate-ping`
              }), o4, d2, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              s(o4, h2), s(o4, _3), l(g(b, {
                color: `error`
              }), o4, h2, _3);
              let v2 = t(i2);
              return s(i2, v2), r(v2, ` `), s(i2, a(`Server is down`)), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="relative inline-block">
  <Status color="error" className="absolute inset-0 animate-ping" />
  <Status color="error" />
</div>
<div className="ms-2">Server is down</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), K, X, Z);
          });
          let Q = f(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = f(`h2`);
          s(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s($, a(`# Status with bounce animation`));
          let ee = p(`rue:component:start`), te = p(`rue:component:end`);
          s(Q, ee), s(Q, te), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: T.value,
              onChange: (e2) => T.value = e2,
              className: `mb-3`
            }), Q, ee, te);
          });
          let ne = p(`rue:slot:start`), re = p(`rue:slot:end`);
          return s(Q, ne), s(Q, re), d(() => {
            l(h(T.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `preview`);
              let r2 = p(`rue:component:start`), i2 = p(`rue:component:end`);
              s(n4, r2), s(n4, i2), l(g(b, {
                color: `info`,
                className: `animate-bounce`
              }), n4, r2, i2);
              let o4 = f(`span`);
              return s(n4, o4), s(o4, a(`Unread messages`)), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Status color="info" className="animate-bounce" /> Unread messages`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, ne, re);
          }), {
            vaporElement: n3
          };
        })
      }), n2, o2, m2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  x as default
};

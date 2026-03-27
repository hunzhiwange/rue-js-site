import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, z as f, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as p, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as m, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as h, t as g, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as _, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let y;
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
  let v;
  v = ({ variant: e2, direction: t2, placement: n2, className: r2, children: i2 }) => {
    let a2 = `divider`;
    return t2 && (a2 += ` divider-${t2}`), e2 && (a2 += ` divider-${e2}`), n2 && (a2 += ` divider-${n2}`), r2 && (a2 += ` ${r2}`), m(`div`, {
      className: a2,
      children: i2
    });
  };
  y = () => {
    let { tabBasic: y2, tabHorizontal: b, tabNoText: x, tabResponsive: S, tabColors: C, tabPositionsV: w, tabPositionsH: T } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabHorizontal: t(`ref:1:1`, () => f(`preview`)),
      tabNoText: t(`ref:1:2`, () => f(`preview`)),
      tabResponsive: t(`ref:1:3`, () => f(`preview`)),
      tabColors: t(`ref:1:4`, () => f(`preview`)),
      tabPositionsV: t(`ref:1:5`, () => f(`preview`)),
      tabPositionsH: t(`ref:1:6`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Divider \u5206\u9694\u7EBF`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`\u5206\u9694\u7EBF\uFF08Divider\uFF09\u7528\u4E8E\u5728\u5782\u76F4\u6216\u6C34\u5E73\u5E03\u5C40\u4E2D\u5206\u9694\u5185\u5BB9\u3002`));
          let E = u(`div`);
          a(i3, E), e(E, `text-sm`);
          let D = u(`a`);
          a(E, D), n(D, `href`, `https://daisyui.com/components/divider/`), n(D, `target`, `_blank`), a(D, r(`\u67E5\u770B Divider \u9759\u6001\u6837\u5F0F`));
          let O = u(`div`);
          a(i3, O), e(O, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let k = u(`h2`);
          a(O, k), e(k, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(k, r(`# Divider`));
          let A = d(`rue:component:start`), j = d(`rue:component:end`);
          a(O, A), a(O, j), l(() => {
            s(m(g, {
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
              activeKey: y2.value,
              onChange: (e2) => y2.value = e2,
              className: `mb-3`
            }), O, A, j);
          });
          let ee = d(`rue:slot:start`), te = d(`rue:slot:end`);
          a(O, ee), a(O, te), l(() => {
            s(p(y2.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex w-full flex-col`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `grid h-20 card bg-base-300 rounded-box place-items-center`), a(i4, r(`content`));
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                children: `OR`
              }), n2, c2, l2);
              let f4 = u(`div`);
              return a(n2, f4), e(f4, `grid h-20 card bg-base-300 rounded-box place-items-center`), a(f4, r(`content`)), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Divider } from '@rue/design';
<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), O, ee, te);
          });
          let M = u(`div`);
          a(i3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = u(`h2`);
          a(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(N, r(`# Divider horizontal`));
          let P = d(`rue:component:start`), F = d(`rue:component:end`);
          a(M, P), a(M, F), l(() => {
            s(m(g, {
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
              activeKey: b.value,
              onChange: (e2) => b.value = e2,
              className: `mb-3`
            }), M, P, F);
          });
          let ne = d(`rue:slot:start`), re = d(`rue:slot:end`);
          a(M, ne), a(M, re), l(() => {
            s(p(b.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex w-full`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `grid h-20 grow card bg-base-300 rounded-box place-items-center`), a(i4, r(`content`));
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                direction: `horizontal`,
                children: `OR`
              }), n2, c2, l2);
              let f4 = u(`div`);
              return a(n2, f4), e(f4, `grid h-20 grow card bg-base-300 rounded-box place-items-center`), a(f4, r(`content`)), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), M, ne, re);
          });
          let I = u(`div`);
          a(i3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let L = u(`h2`);
          a(I, L), e(L, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(L, r(`# Divider with no text`));
          let ie = d(`rue:component:start`), R = d(`rue:component:end`);
          a(I, ie), a(I, R), l(() => {
            s(m(g, {
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
              activeKey: x.value,
              onChange: (e2) => x.value = e2,
              className: `mb-3`
            }), I, ie, R);
          });
          let z = d(`rue:slot:start`), B = d(`rue:slot:end`);
          a(I, z), a(I, B), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex w-full flex-col`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `grid h-20 card bg-base-300 rounded-box place-items-center`), a(i4, r(`content`));
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {}), n2, c2, l2);
              let f4 = u(`div`);
              return a(n2, f4), e(f4, `grid h-20 card bg-base-300 rounded-box place-items-center`), a(f4, r(`content`)), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), I, z, B);
          });
          let V = u(`div`);
          a(i3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = u(`h2`);
          a(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(H, r(`# responsive (lg:divider-horizontal)`));
          let U = d(`rue:component:start`), W = d(`rue:component:end`);
          a(V, U), a(V, W), l(() => {
            s(m(g, {
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
            }), V, U, W);
          });
          let G = d(`rue:slot:start`), K = d(`rue:slot:end`);
          a(V, G), a(V, K), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex w-full flex-col lg:flex-row`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `grid grow h-32 card bg-base-300 rounded-box place-items-center`), a(i4, r(`content`));
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                className: `lg:divider-horizontal`,
                children: `OR`
              }), n2, c2, l2);
              let f4 = u(`div`);
              return a(n2, f4), e(f4, `grid grow h-32 card bg-base-300 rounded-box place-items-center`), a(f4, r(`content`)), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), V, G, K);
          });
          let q = u(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = u(`h2`);
          a(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(J, r(`# Divider with colors`));
          let ae = d(`rue:component:start`), oe = d(`rue:component:end`);
          a(q, ae), a(q, oe), l(() => {
            s(m(g, {
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
            }), q, ae, oe);
          });
          let se = d(`rue:slot:start`), ce = d(`rue:slot:end`);
          a(q, se), a(q, ce), l(() => {
            s(p(C.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex w-full flex-col`);
              let r2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(n2, r2), a(n2, i4), s(m(v, {
                children: `Default`
              }), n2, r2, i4);
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                variant: `neutral`,
                children: `Neutral`
              }), n2, c2, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(n2, f4), a(n2, p2), s(m(v, {
                variant: `primary`,
                children: `Primary`
              }), n2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              a(n2, h3), a(n2, g2), s(m(v, {
                variant: `secondary`,
                children: `Secondary`
              }), n2, h3, g2);
              let _2 = d(`rue:component:start`), y3 = d(`rue:component:end`);
              a(n2, _2), a(n2, y3), s(m(v, {
                variant: `accent`,
                children: `Accent`
              }), n2, _2, y3);
              let b2 = d(`rue:component:start`), x2 = d(`rue:component:end`);
              a(n2, b2), a(n2, x2), s(m(v, {
                variant: `success`,
                children: `Success`
              }), n2, b2, x2);
              let S2 = d(`rue:component:start`), C2 = d(`rue:component:end`);
              a(n2, S2), a(n2, C2), s(m(v, {
                variant: `warning`,
                children: `Warning`
              }), n2, S2, C2);
              let w2 = d(`rue:component:start`), T2 = d(`rue:component:end`);
              a(n2, w2), a(n2, T2), s(m(v, {
                variant: `info`,
                children: `Info`
              }), n2, w2, T2);
              let E2 = d(`rue:component:start`), D2 = d(`rue:component:end`);
              return a(n2, E2), a(n2, D2), s(m(v, {
                variant: `error`,
                children: `Error`
              }), n2, E2, D2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex w-full flex-col">
  <Divider>Default</Divider>
  <Divider variant="neutral">Neutral</Divider>
  <Divider variant="primary">Primary</Divider>
  <Divider variant="secondary">Secondary</Divider>
  <Divider variant="accent">Accent</Divider>
  <Divider variant="success">Success</Divider>
  <Divider variant="warning">Warning</Divider>
  <Divider variant="info">Info</Divider>
  <Divider variant="error">Error</Divider>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, se, ce);
          });
          let Y = u(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = u(`h2`);
          a(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(X, r(`# Divider in different positions`));
          let Z = d(`rue:component:start`), le = d(`rue:component:end`);
          a(Y, Z), a(Y, le), l(() => {
            s(m(g, {
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
            }), Y, Z, le);
          });
          let ue = d(`rue:slot:start`), de = d(`rue:slot:end`);
          a(Y, ue), a(Y, de), l(() => {
            s(p(w.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex w-full flex-col`);
              let r2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(n2, r2), a(n2, i4), s(m(v, {
                placement: `start`,
                children: `Start`
              }), n2, r2, i4);
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                children: `Default`
              }), n2, c2, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(n2, f4), a(n2, p2), s(m(v, {
                placement: `end`,
                children: `End`
              }), n2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Y, ue, de);
          });
          let Q = u(`div`);
          a(i3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = u(`h2`);
          a(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a($, r(`# Divider in different positions (horizontal)`));
          let fe = d(`rue:component:start`), pe = d(`rue:component:end`);
          a(Q, fe), a(Q, pe), l(() => {
            s(m(g, {
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
            }), Q, fe, pe);
          });
          let me = d(`rue:slot:start`), he = d(`rue:slot:end`);
          return a(Q, me), a(Q, he), l(() => {
            s(p(T.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex w-full justify-center h-52`);
              let r2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(n2, r2), a(n2, i4), s(m(v, {
                direction: `horizontal`,
                placement: `start`,
                children: `Start`
              }), n2, r2, i4);
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                direction: `horizontal`,
                children: `Default`
              }), n2, c2, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(n2, f4), a(n2, p2), s(m(v, {
                direction: `horizontal`,
                placement: `end`,
                children: `End`
              }), n2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Q, me, he);
          }), {
            vaporElement: t3
          };
        })
      }), t2, i2, f2), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  y as default
};

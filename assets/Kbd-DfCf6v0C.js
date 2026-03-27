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
  v = ({ size: e2, className: t2, children: n2 }) => {
    let r2 = `kbd`;
    return e2 && (r2 += ` kbd-${e2}`), t2 && (r2 += ` ${t2}`), m(`kbd`, {
      className: r2,
      children: n2
    });
  };
  y = () => {
    let { tabBasic: y2, tabSizes: b, tabInText: x, tabComb: S, tabFunc: C, tabKeyboard: w, tabArrows: T } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabSizes: t(`ref:1:1`, () => f(`preview`)),
      tabInText: t(`ref:1:2`, () => f(`preview`)),
      tabComb: t(`ref:1:3`, () => f(`preview`)),
      tabFunc: t(`ref:1:4`, () => f(`preview`)),
      tabKeyboard: t(`ref:1:5`, () => f(`preview`)),
      tabArrows: t(`ref:1:6`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Kbd \u952E\u76D8\u63D0\u793A`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`\u7528\u4E8E\u5C55\u793A\u952E\u76D8\u5FEB\u6377\u952E\u6216\u6309\u952E\u6807\u8BC6\u3002`));
          let E = u(`div`);
          a(i3, E), e(E, `text-sm`);
          let D = u(`a`);
          a(E, D), n(D, `href`, `https://daisyui.com/components/kbd/`), n(D, `target`, `_blank`), a(D, r(`\u67E5\u770B Kbd \u9759\u6001\u6837\u5F0F`));
          let O = u(`div`);
          a(i3, O), e(O, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let k = u(`h2`);
          a(O, k), e(k, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(k, r(`# Kbd`));
          let ee = d(`rue:component:start`), A = d(`rue:component:end`);
          a(O, ee), a(O, A), l(() => {
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
            }), O, ee, A);
          });
          let j = d(`rue:slot:start`), te = d(`rue:slot:end`);
          a(O, j), a(O, te), l(() => {
            s(p(y2.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), s(m(v, {
                children: `K`
              }), e2, t4, n2), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Kbd } from '@rue/design';
<Kbd>K</Kbd>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), O, j, te);
          });
          let M = u(`div`);
          a(i3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = u(`h2`);
          a(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(N, r(`# Kbd sizes`));
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
          let I = d(`rue:slot:start`), L = d(`rue:slot:end`);
          a(M, I), a(M, L), l(() => {
            s(p(b.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `flex gap-2 items-center`);
              let r2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(n2, r2), a(n2, i4), s(m(v, {
                size: `xs`,
                children: `Xsmall`
              }), n2, r2, i4);
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                size: `sm`,
                children: `Small`
              }), n2, c2, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(n2, f4), a(n2, p2), s(m(v, {
                size: `md`,
                children: `Medium`
              }), n2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              a(n2, h3), a(n2, g2), s(m(v, {
                size: `lg`,
                children: `Large`
              }), n2, h3, g2);
              let _2 = d(`rue:component:start`), y3 = d(`rue:component:end`);
              return a(n2, _2), a(n2, y3), s(m(v, {
                size: `xl`,
                children: `Xlarge`
              }), n2, _2, y3), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Kbd size="xs">Xsmall</Kbd>
<Kbd size="sm">Small</Kbd>
<Kbd size="md">Medium</Kbd>
<Kbd size="lg">Large</Kbd>
<Kbd size="xl">Xlarge</Kbd>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), M, I, L);
          });
          let R = u(`div`);
          a(i3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = u(`h2`);
          a(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(z, r(`# In text`));
          let ne = d(`rue:component:start`), re = d(`rue:component:end`);
          a(R, ne), a(R, re), l(() => {
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
            }), R, ne, re);
          });
          let ie = d(`rue:slot:start`), B = d(`rue:slot:end`);
          a(R, ie), a(R, B), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let e2 = o(), t4 = u(`span`);
              a(e2, t4), a(t4, r(`Press`));
              let n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(v, {
                size: `sm`,
                children: `F`
              }), t4, n2, i4), a(t4, r(`to pay respects.`)), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<span>Press <Kbd size="sm">F</Kbd> to pay respects.</span>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), R, ie, B);
          });
          let V = u(`div`);
          a(i3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = u(`h2`);
          a(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(H, r(`# Key combination`));
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
              a(t4, n2), e(n2, `flex items-center gap-2`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              a(n2, i4), a(n2, c2), s(m(v, {
                children: `ctrl`
              }), n2, i4, c2), a(n2, r(`+`));
              let l2 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              a(n2, l2), a(n2, f4), s(m(v, {
                children: `shift`
              }), n2, l2, f4), a(n2, r(`+`));
              let p2 = d(`rue:component:start`), h3 = d(`rue:component:end`);
              return a(n2, p2), a(n2, h3), s(m(v, {
                children: `del`
              }), n2, p2, h3), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Kbd>ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>del</Kbd>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), V, G, K);
          });
          let q = u(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = u(`h2`);
          a(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(J, r(`# Function Keys`));
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
              a(t4, n2), e(n2, `flex gap-2 items-center`);
              let r2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(n2, r2), a(n2, i4), s(m(v, {
                children: `\u2318`
              }), n2, r2, i4);
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, c2), a(n2, l2), s(m(v, {
                children: `\u2325`
              }), n2, c2, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(n2, f4), a(n2, p2), s(m(v, {
                children: `\u21E7`
              }), n2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              return a(n2, h3), a(n2, g2), s(m(v, {
                children: `\u2303`
              }), n2, h3, g2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Kbd>\u2318</Kbd>
<Kbd>\u2325</Kbd>
<Kbd>\u21E7</Kbd>
<Kbd>\u2303</Kbd>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, se, ce);
          });
          let Y = u(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = u(`h2`);
          a(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(X, r(`# A full keyboard`));
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
              a(t4, n2), e(n2, `overflow-x-auto`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `flex justify-center gap-1 w-full mb-1`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              a(r2, i4), a(r2, c2), s(m(v, {
                children: `q`
              }), r2, i4, c2);
              let l2 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              a(r2, l2), a(r2, f4), s(m(v, {
                children: `w`
              }), r2, l2, f4);
              let p2 = d(`rue:component:start`), h3 = d(`rue:component:end`);
              a(r2, p2), a(r2, h3), s(m(v, {
                children: `e`
              }), r2, p2, h3);
              let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
              a(r2, g2), a(r2, _2), s(m(v, {
                children: `r`
              }), r2, g2, _2);
              let y3 = d(`rue:component:start`), b2 = d(`rue:component:end`);
              a(r2, y3), a(r2, b2), s(m(v, {
                children: `t`
              }), r2, y3, b2);
              let x2 = d(`rue:component:start`), S2 = d(`rue:component:end`);
              a(r2, x2), a(r2, S2), s(m(v, {
                children: `y`
              }), r2, x2, S2);
              let C2 = d(`rue:component:start`), w2 = d(`rue:component:end`);
              a(r2, C2), a(r2, w2), s(m(v, {
                children: `u`
              }), r2, C2, w2);
              let T2 = d(`rue:component:start`), E2 = d(`rue:component:end`);
              a(r2, T2), a(r2, E2), s(m(v, {
                children: `i`
              }), r2, T2, E2);
              let D2 = d(`rue:component:start`), O2 = d(`rue:component:end`);
              a(r2, D2), a(r2, O2), s(m(v, {
                children: `o`
              }), r2, D2, O2);
              let k2 = d(`rue:component:start`), ee2 = d(`rue:component:end`);
              a(r2, k2), a(r2, ee2), s(m(v, {
                children: `p`
              }), r2, k2, ee2);
              let A2 = u(`div`);
              a(n2, A2), e(A2, `flex justify-center gap-1 w-full mb-1`);
              let j2 = d(`rue:component:start`), te2 = d(`rue:component:end`);
              a(A2, j2), a(A2, te2), s(m(v, {
                children: `a`
              }), A2, j2, te2);
              let M2 = d(`rue:component:start`), N2 = d(`rue:component:end`);
              a(A2, M2), a(A2, N2), s(m(v, {
                children: `s`
              }), A2, M2, N2);
              let P2 = d(`rue:component:start`), F2 = d(`rue:component:end`);
              a(A2, P2), a(A2, F2), s(m(v, {
                children: `d`
              }), A2, P2, F2);
              let I2 = d(`rue:component:start`), L2 = d(`rue:component:end`);
              a(A2, I2), a(A2, L2), s(m(v, {
                children: `f`
              }), A2, I2, L2);
              let R2 = d(`rue:component:start`), z2 = d(`rue:component:end`);
              a(A2, R2), a(A2, z2), s(m(v, {
                children: `g`
              }), A2, R2, z2);
              let ne2 = d(`rue:component:start`), re2 = d(`rue:component:end`);
              a(A2, ne2), a(A2, re2), s(m(v, {
                children: `h`
              }), A2, ne2, re2);
              let ie2 = d(`rue:component:start`), B2 = d(`rue:component:end`);
              a(A2, ie2), a(A2, B2), s(m(v, {
                children: `j`
              }), A2, ie2, B2);
              let V2 = d(`rue:component:start`), H2 = d(`rue:component:end`);
              a(A2, V2), a(A2, H2), s(m(v, {
                children: `k`
              }), A2, V2, H2);
              let U2 = d(`rue:component:start`), W2 = d(`rue:component:end`);
              a(A2, U2), a(A2, W2), s(m(v, {
                children: `l`
              }), A2, U2, W2);
              let G2 = u(`div`);
              a(n2, G2), e(G2, `flex justify-center gap-1 w-full mb-1`);
              let K2 = d(`rue:component:start`), q2 = d(`rue:component:end`);
              a(G2, K2), a(G2, q2), s(m(v, {
                children: `z`
              }), G2, K2, q2);
              let J2 = d(`rue:component:start`), ae2 = d(`rue:component:end`);
              a(G2, J2), a(G2, ae2), s(m(v, {
                children: `x`
              }), G2, J2, ae2);
              let oe2 = d(`rue:component:start`), se2 = d(`rue:component:end`);
              a(G2, oe2), a(G2, se2), s(m(v, {
                children: `c`
              }), G2, oe2, se2);
              let ce2 = d(`rue:component:start`), Y2 = d(`rue:component:end`);
              a(G2, ce2), a(G2, Y2), s(m(v, {
                children: `v`
              }), G2, ce2, Y2);
              let X2 = d(`rue:component:start`), Z2 = d(`rue:component:end`);
              a(G2, X2), a(G2, Z2), s(m(v, {
                children: `b`
              }), G2, X2, Z2);
              let le2 = d(`rue:component:start`), ue2 = d(`rue:component:end`);
              a(G2, le2), a(G2, ue2), s(m(v, {
                children: `n`
              }), G2, le2, ue2);
              let de2 = d(`rue:component:start`), Q2 = d(`rue:component:end`);
              a(G2, de2), a(G2, Q2), s(m(v, {
                children: `m`
              }), G2, de2, Q2);
              let $2 = d(`rue:component:start`), fe2 = d(`rue:component:end`);
              return a(G2, $2), a(G2, fe2), s(m(v, {
                children: `/`
              }), G2, $2, fe2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="overflow-x-auto">
  <div className="flex justify-center gap-1 w-full mb-1">
    <Kbd>q</Kbd><Kbd>w</Kbd><Kbd>e</Kbd><Kbd>r</Kbd><Kbd>t</Kbd><Kbd>y</Kbd><Kbd>u</Kbd><Kbd>i</Kbd><Kbd>o</Kbd><Kbd>p</Kbd>
  </div>
  <div className="flex justify-center gap-1 w-full mb-1">
    <Kbd>a</Kbd><Kbd>s</Kbd><Kbd>d</Kbd><Kbd>f</Kbd><Kbd>g</Kbd><Kbd>h</Kbd><Kbd>j</Kbd><Kbd>k</Kbd><Kbd>l</Kbd>
  </div>
  <div className="flex justify-center gap-1 w-full mb-1">
    <Kbd>z</Kbd><Kbd>x</Kbd><Kbd>c</Kbd><Kbd>v</Kbd><Kbd>b</Kbd><Kbd>n</Kbd><Kbd>m</Kbd><Kbd>/</Kbd>
  </div>
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
          a(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a($, r(`# Arrow Keys`));
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
              a(t4, n2);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `flex justify-center w-full`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              a(r2, i4), a(r2, c2), s(m(v, {
                children: `\u25B2`
              }), r2, i4, c2);
              let l2 = u(`div`);
              a(n2, l2), e(l2, `flex justify-center gap-12 w-full`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(l2, f4), a(l2, p2), s(m(v, {
                children: `\u25C0\uFE0E`
              }), l2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              a(l2, h3), a(l2, g2), s(m(v, {
                children: `\u25B6\uFE0E`
              }), l2, h3, g2);
              let _2 = u(`div`);
              a(n2, _2), e(_2, `flex justify-center w-full`);
              let y3 = d(`rue:component:start`), b2 = d(`rue:component:end`);
              return a(_2, y3), a(_2, b2), s(m(v, {
                children: `\u25BC`
              }), _2, y3, b2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex justify-center w-full"><Kbd>\u25B2</Kbd></div>
<div className="flex justify-center gap-12 w-full"><Kbd>\u25C0\uFE0E</Kbd><Kbd>\u25B6\uFE0E</Kbd></div>
<div className="flex justify-center w-full"><Kbd>\u25BC</Kbd></div>`
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

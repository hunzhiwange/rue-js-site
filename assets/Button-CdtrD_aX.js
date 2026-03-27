import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as b, __tla as __tla_6 } from "./button-eAeY0oyU.js";
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  x = () => {
    let { tabButton: x2, tabSizes: S, tabColors: C, tabSoft: w, tabOutline: T, tabDash: E, tabNeutralStyle: D, tabActive: O, tabGhostLink: k, tabWide: A, tabResponsive: j, tabAnyTags: ee, tabDisabled: te, tabSquareCircle: ne, tabWithIcon: re, tabBlock: ie, tabLoading: ae, tabLogin: oe, tabEvents: se, clickCount: ce } = n(`useSetup:0:0`, () => o(() => ({
      tabButton: n(`ref:1:0`, () => m(`preview`)),
      tabSizes: n(`ref:1:1`, () => m(`preview`)),
      tabColors: n(`ref:1:2`, () => m(`preview`)),
      tabSoft: n(`ref:1:3`, () => m(`preview`)),
      tabOutline: n(`ref:1:4`, () => m(`preview`)),
      tabDash: n(`ref:1:5`, () => m(`preview`)),
      tabNeutralStyle: n(`ref:1:6`, () => m(`preview`)),
      tabActive: n(`ref:1:7`, () => m(`preview`)),
      tabGhostLink: n(`ref:1:8`, () => m(`preview`)),
      tabWide: n(`ref:1:9`, () => m(`preview`)),
      tabResponsive: n(`ref:1:10`, () => m(`preview`)),
      tabAnyTags: n(`ref:1:11`, () => m(`preview`)),
      tabDisabled: n(`ref:1:12`, () => m(`preview`)),
      tabSquareCircle: n(`ref:1:13`, () => m(`preview`)),
      tabWithIcon: n(`ref:1:14`, () => m(`preview`)),
      tabBlock: n(`ref:1:15`, () => m(`preview`)),
      tabLoading: n(`ref:1:16`, () => m(`preview`)),
      tabLogin: n(`ref:1:17`, () => m(`preview`)),
      tabEvents: n(`ref:1:18`, () => m(`preview`)),
      clickCount: n(`ref:1:19`, () => m(0))
    })));
    return u(() => {
      let n2 = c(), o2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return s(n2, o2), s(n2, m2), l(g(_, {
        children: u(() => {
          let n3 = c(), o3 = f(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          s(o3, m3), s(m3, a(`Button \u6309\u94AE`));
          let _2 = f(`p`);
          s(o3, _2), e(_2, `text-sm mt-3 mb-3`), s(_2, a(`\u6309\u94AE\uFF08Button\uFF09\u5141\u8BB8\u7528\u6237\u6267\u884C\u64CD\u4F5C\u6216\u505A\u51FA\u9009\u62E9\u3002`));
          let le = f(`div`);
          s(o3, le), e(le, `text-sm`);
          let M = f(`a`);
          s(le, M), i(M, `href`, `https://daisyui.com/components/button/`), i(M, `target`, `_blank`), s(M, a(`\u67E5\u770B Button \u9759\u6001\u6837\u5F0F`));
          let N = f(`div`);
          s(o3, N), e(N, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ue = f(`h2`);
          s(N, ue), e(ue, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ue, a(`# Button`));
          let de = p(`rue:component:start`), fe = p(`rue:component:end`);
          s(N, de), s(N, fe), d(() => {
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
            }), N, de, fe);
          });
          let pe = p(`rue:slot:start`), me = p(`rue:slot:end`);
          s(N, pe), s(N, me), d(() => {
            l(h(x2.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), l(g(b, {
                children: `Default`
              }), r2, i2, a2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Button } from '@rue/design';
export default () => <Button>Default</Button>;`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), N, pe, me);
          });
          let P = f(`div`);
          s(o3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let he = f(`h2`);
          s(P, he), e(he, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(he, a(`# Button sizes`));
          let ge = p(`rue:component:start`), _e = p(`rue:component:end`);
          s(P, ge), s(P, _e), d(() => {
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
            }), P, ge, _e);
          });
          let ve = p(`rue:slot:start`), ye = p(`rue:slot:end`);
          s(P, ve), s(P, ye), d(() => {
            l(h(S.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), l(g(b, {
                size: `xs`,
                children: `Xsmall`
              }), r2, i2, a2);
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), l(g(b, {
                size: `sm`,
                children: `Small`
              }), r2, o4, u2);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(r2, d2), s(r2, m4), l(g(b, {
                children: `Medium`
              }), r2, d2, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              s(r2, h2), s(r2, _3), l(g(b, {
                size: `lg`,
                children: `Large`
              }), r2, h2, _3);
              let v2 = p(`rue:component:start`), y2 = p(`rue:component:end`);
              return s(r2, v2), s(r2, y2), l(g(b, {
                size: `xl`,
                children: `Xlarge`
              }), r2, v2, y2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Button } from '@rue/design';
export default () => (
  <>
    <Button size="xs">Xsmall</Button>
    <Button size="sm">Small</Button>
    <Button>Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Xlarge</Button>
  </>
);`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), P, ve, ye);
          });
          let F = f(`div`);
          s(o3, F), e(F, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let be = f(`h2`);
          s(F, be), e(be, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(be, a(`# Responsive button`));
          let xe = p(`rue:component:start`), Se = p(`rue:component:end`);
          s(F, xe), s(F, Se), d(() => {
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
              activeKey: j.value,
              onChange: (e2) => j.value = e2,
              className: `mb-3`
            }), F, xe, Se);
          });
          let Ce = p(`rue:slot:start`), we = p(`rue:slot:end`);
          s(F, Ce), s(F, we), d(() => {
            l(h(j.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), l(g(b, {
                size: `xs`,
                className: `sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,
                children: `Responsive`
              }), r2, i2, a2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), F, Ce, we);
          });
          let I = f(`div`);
          s(o3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Te = f(`h2`);
          s(I, Te), e(Te, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Te, a(`# Button events`));
          let Ee = p(`rue:component:start`), De = p(`rue:component:end`);
          s(I, Ee), s(I, De), d(() => {
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
              activeKey: se.value,
              onChange: (e2) => se.value = e2,
              className: `mb-3`
            }), I, Ee, De);
          });
          let Oe = p(`rue:slot:start`), ke = p(`rue:slot:end`);
          s(I, Oe), s(I, ke), d(() => {
            l(h(se.value === `preview` ? u(() => {
              let n4 = c(), i2 = f(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let o4 = f(`div`);
              s(i2, o4), e(o4, `card-body flex flex-wrap items-center gap-3`);
              let m4 = f(`div`);
              s(o4, m4), s(m4, a(`count: `));
              let h2 = t(m4);
              s(m4, h2), d(() => {
                r(h2, ce.value);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(o4, _3), s(o4, v2), l(g(b, {
                onClick: () => ce.value += 1,
                children: `Click Me`
              }), o4, _3, v2);
              let y2 = p(`rue:component:start`), x3 = p(`rue:component:end`);
              s(o4, y2), s(o4, x3);
              let S2 = u(() => {
                let t2 = c(), n5 = f(`span`);
                return s(t2, n5), e(n5, `loading loading-spinner`), s(t2, a(`Loading (disabled)`)), {
                  vaporElement: t2
                };
              });
              return d(() => {
                l(g(b, {
                  loading: true,
                  onClick: () => ce.value += 1,
                  children: S2
                }), o4, y2, x3);
              }), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const count = ref(0)
<div>count: {count.value}</div>
<Button onClick={() => (count.value = count.value + 1)}>Click Me</Button>
<Button loading onClick={() => (count.value = count.value + 1)}>
  <span className="loading loading-spinner"></span>
  Loading (disabled)
</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), I, Oe, ke);
          });
          let L = f(`div`);
          s(o3, L), e(L, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ae = f(`h2`);
          s(L, Ae), e(Ae, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ae, a(`# Buttons colors`));
          let je = p(`rue:component:start`), Me = p(`rue:component:end`);
          s(L, je), s(L, Me), d(() => {
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
            }), L, je, Me);
          });
          let Ne = p(`rue:slot:start`), Pe = p(`rue:slot:end`);
          s(L, Ne), s(L, Pe), d(() => {
            l(h(C.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), l(g(b, {
                variant: `neutral`,
                children: `Neutral`
              }), r2, i2, a2);
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), l(g(b, {
                variant: `primary`,
                children: `Primary`
              }), r2, o4, u2);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(r2, d2), s(r2, m4), l(g(b, {
                variant: `secondary`,
                children: `Secondary`
              }), r2, d2, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              s(r2, h2), s(r2, _3), l(g(b, {
                variant: `accent`,
                children: `Accent`
              }), r2, h2, _3);
              let v2 = p(`rue:component:start`), y2 = p(`rue:component:end`);
              s(r2, v2), s(r2, y2), l(g(b, {
                variant: `info`,
                children: `Info`
              }), r2, v2, y2);
              let x3 = p(`rue:component:start`), S2 = p(`rue:component:end`);
              s(r2, x3), s(r2, S2), l(g(b, {
                variant: `success`,
                children: `Success`
              }), r2, x3, S2);
              let C2 = p(`rue:component:start`), w2 = p(`rue:component:end`);
              s(r2, C2), s(r2, w2), l(g(b, {
                variant: `warning`,
                children: `Warning`
              }), r2, C2, w2);
              let T2 = p(`rue:component:start`), E2 = p(`rue:component:end`);
              return s(r2, T2), s(r2, E2), l(g(b, {
                variant: `error`,
                children: `Error`
              }), r2, T2, E2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button variant="neutral">Neutral</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="error">Error</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), L, Ne, Pe);
          });
          let R = f(`div`);
          s(o3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = f(`h2`);
          s(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(z, a(`# Soft buttons`));
          let Fe = p(`rue:component:start`), Ie = p(`rue:component:end`);
          s(R, Fe), s(R, Ie), d(() => {
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
            }), R, Fe, Ie);
          });
          let Le = p(`rue:slot:start`), Re = p(`rue:slot:end`);
          s(R, Le), s(R, Re), d(() => {
            l(h(w.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  soft: true,
                  children: `Default`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  soft: true,
                  variant: `primary`,
                  children: `Primary`
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(b, {
                  soft: true,
                  variant: `secondary`,
                  children: `Secondary`
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), d(() => {
                l(g(b, {
                  soft: true,
                  variant: `accent`,
                  children: `Accent`
                }), r2, _3, v2);
              });
              let y2 = p(`rue:component:start`), x3 = p(`rue:component:end`);
              s(r2, y2), s(r2, x3), d(() => {
                l(g(b, {
                  soft: true,
                  variant: `info`,
                  children: `Info`
                }), r2, y2, x3);
              });
              let S2 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S2), s(r2, C2), d(() => {
                l(g(b, {
                  soft: true,
                  variant: `success`,
                  children: `Success`
                }), r2, S2, C2);
              });
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              s(r2, w2), s(r2, T2), d(() => {
                l(g(b, {
                  soft: true,
                  variant: `warning`,
                  children: `Warning`
                }), r2, w2, T2);
              });
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              return s(r2, E2), s(r2, D2), d(() => {
                l(g(b, {
                  soft: true,
                  variant: `error`,
                  children: `Error`
                }), r2, E2, D2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button soft>Default</Button>
<Button soft variant="primary">Primary</Button>
<Button soft variant="secondary">Secondary</Button>
<Button soft variant="accent">Accent</Button>
<Button soft variant="info">Info</Button>
<Button soft variant="success">Success</Button>
<Button soft variant="warning">Warning</Button>
<Button soft variant="error">Error</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), R, Le, Re);
          });
          let B = f(`div`);
          s(o3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ze = f(`h2`);
          s(B, ze), e(ze, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ze, a(`# Outline buttons`));
          let Be = p(`rue:component:start`), Ve = p(`rue:component:end`);
          s(B, Be), s(B, Ve), d(() => {
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
            }), B, Be, Ve);
          });
          let He = p(`rue:slot:start`), Ue = p(`rue:slot:end`);
          s(B, He), s(B, Ue), d(() => {
            l(h(T.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  outline: true,
                  children: `Default`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  outline: true,
                  variant: `primary`,
                  children: `Primary`
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(b, {
                  outline: true,
                  variant: `secondary`,
                  children: `Secondary`
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), d(() => {
                l(g(b, {
                  outline: true,
                  variant: `accent`,
                  children: `Accent`
                }), r2, _3, v2);
              });
              let y2 = p(`rue:component:start`), x3 = p(`rue:component:end`);
              s(r2, y2), s(r2, x3), d(() => {
                l(g(b, {
                  outline: true,
                  variant: `info`,
                  children: `Info`
                }), r2, y2, x3);
              });
              let S2 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S2), s(r2, C2), d(() => {
                l(g(b, {
                  outline: true,
                  variant: `success`,
                  children: `Success`
                }), r2, S2, C2);
              });
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              s(r2, w2), s(r2, T2), d(() => {
                l(g(b, {
                  outline: true,
                  variant: `warning`,
                  children: `Warning`
                }), r2, w2, T2);
              });
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              return s(r2, E2), s(r2, D2), d(() => {
                l(g(b, {
                  outline: true,
                  variant: `error`,
                  children: `Error`
                }), r2, E2, D2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button outline>Default</Button>
<Button outline variant="primary">Primary</Button>
<Button outline variant="secondary">Secondary</Button>
<Button outline variant="accent">Accent</Button>
<Button outline variant="info">Info</Button>
<Button outline variant="success">Success</Button>
<Button outline variant="warning">Warning</Button>
<Button outline variant="error">Error</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), B, He, Ue);
          });
          let V = f(`div`);
          s(o3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let We = f(`h2`);
          s(V, We), e(We, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(We, a(`# Dash buttons`));
          let Ge = p(`rue:component:start`), Ke = p(`rue:component:end`);
          s(V, Ge), s(V, Ke), d(() => {
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
              activeKey: E.value,
              onChange: (e2) => E.value = e2,
              className: `mb-3`
            }), V, Ge, Ke);
          });
          let qe = p(`rue:slot:start`), Je = p(`rue:slot:end`);
          s(V, qe), s(V, Je), d(() => {
            l(h(E.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  dash: true,
                  children: `Default`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  dash: true,
                  variant: `primary`,
                  children: `Primary`
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(b, {
                  dash: true,
                  variant: `secondary`,
                  children: `Secondary`
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), d(() => {
                l(g(b, {
                  dash: true,
                  variant: `accent`,
                  children: `Accent`
                }), r2, _3, v2);
              });
              let y2 = p(`rue:component:start`), x3 = p(`rue:component:end`);
              s(r2, y2), s(r2, x3), d(() => {
                l(g(b, {
                  dash: true,
                  variant: `info`,
                  children: `Info`
                }), r2, y2, x3);
              });
              let S2 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S2), s(r2, C2), d(() => {
                l(g(b, {
                  dash: true,
                  variant: `success`,
                  children: `Success`
                }), r2, S2, C2);
              });
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              s(r2, w2), s(r2, T2), d(() => {
                l(g(b, {
                  dash: true,
                  variant: `warning`,
                  children: `Warning`
                }), r2, w2, T2);
              });
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              return s(r2, E2), s(r2, D2), d(() => {
                l(g(b, {
                  dash: true,
                  variant: `error`,
                  children: `Error`
                }), r2, E2, D2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button dash>Default</Button>
<Button dash variant="primary">Primary</Button>
<Button dash variant="secondary">Secondary</Button>
<Button dash variant="accent">Accent</Button>
<Button dash variant="info">Info</Button>
<Button dash variant="success">Success</Button>
<Button dash variant="warning">Warning</Button>
<Button dash variant="error">Error</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), V, qe, Je);
          });
          let H = f(`div`);
          s(o3, H), e(H, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ye = f(`h2`);
          s(H, Ye), e(Ye, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ye, a(`# neutral button with outline or dash style`));
          let Xe = p(`rue:component:start`), Ze = p(`rue:component:end`);
          s(H, Xe), s(H, Ze), d(() => {
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
              activeKey: D.value,
              onChange: (e2) => D.value = e2,
              className: `mb-3`
            }), H, Xe, Ze);
          });
          let Qe = p(`rue:slot:start`), $e = p(`rue:slot:end`);
          s(H, Qe), s(H, $e), d(() => {
            l(h(D.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex gap-2 justify-center`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  variant: `neutral`,
                  outline: true,
                  children: `Outline`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              return s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  variant: `neutral`,
                  dash: true,
                  children: `Dash`
                }), r2, o4, u2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button variant="neutral" outline>Outline</Button>
<Button variant="neutral" dash>Dash</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), H, Qe, $e);
          });
          let U = f(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let et = f(`h2`);
          s(U, et), e(et, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(et, a(`# Active buttons`));
          let tt = p(`rue:component:start`), nt = p(`rue:component:end`);
          s(U, tt), s(U, nt), d(() => {
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
              activeKey: O.value,
              onChange: (e2) => O.value = e2,
              className: `mb-3`
            }), U, tt, nt);
          });
          let rt = p(`rue:slot:start`), it = p(`rue:slot:end`);
          s(U, rt), s(U, it), d(() => {
            l(h(O.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  active: true,
                  children: `Default`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  active: true,
                  variant: `primary`,
                  children: `Primary`
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(b, {
                  active: true,
                  variant: `secondary`,
                  children: `Secondary`
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), d(() => {
                l(g(b, {
                  active: true,
                  variant: `accent`,
                  children: `Accent`
                }), r2, _3, v2);
              });
              let y2 = p(`rue:component:start`), x3 = p(`rue:component:end`);
              s(r2, y2), s(r2, x3), d(() => {
                l(g(b, {
                  active: true,
                  variant: `info`,
                  children: `Info`
                }), r2, y2, x3);
              });
              let S2 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S2), s(r2, C2), d(() => {
                l(g(b, {
                  active: true,
                  variant: `success`,
                  children: `Success`
                }), r2, S2, C2);
              });
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              s(r2, w2), s(r2, T2), d(() => {
                l(g(b, {
                  active: true,
                  variant: `warning`,
                  children: `Warning`
                }), r2, w2, T2);
              });
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              return s(r2, E2), s(r2, D2), d(() => {
                l(g(b, {
                  active: true,
                  variant: `error`,
                  children: `Error`
                }), r2, E2, D2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button active>Default</Button>
<Button active variant="primary">Primary</Button>
<Button active variant="secondary">Secondary</Button>
<Button active variant="accent">Accent</Button>
<Button active variant="info">Info</Button>
<Button active variant="success">Success</Button>
<Button active variant="warning">Warning</Button>
<Button active variant="error">Error</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, rt, it);
          });
          let W = f(`div`);
          s(o3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let at = f(`h2`);
          s(W, at), e(at, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(at, a(`# Buttons ghost and button link`));
          let ot = p(`rue:component:start`), st = p(`rue:component:end`);
          s(W, ot), s(W, st), d(() => {
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
              activeKey: k.value,
              onChange: (e2) => k.value = e2,
              className: `mb-3`
            }), W, ot, st);
          });
          let ct = p(`rue:slot:start`), lt = p(`rue:slot:end`);
          s(W, ct), s(W, lt), d(() => {
            l(h(k.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  ghost: true,
                  children: `Ghost`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              return s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  link: true,
                  children: `Link`
                }), r2, o4, u2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button ghost>Ghost</Button>
<Button link>Link</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), W, ct, lt);
          });
          let G = f(`div`);
          s(o3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ut = f(`h2`);
          s(G, ut), e(ut, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ut, a(`# Wide button`));
          let dt = p(`rue:component:start`), ft = p(`rue:component:end`);
          s(G, dt), s(G, ft), d(() => {
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
              activeKey: A.value,
              onChange: (e2) => A.value = e2,
              className: `mb-3`
            }), G, dt, ft);
          });
          let pt = p(`rue:slot:start`), mt = p(`rue:slot:end`);
          s(G, pt), s(G, mt), d(() => {
            l(h(A.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  wide: true,
                  children: `Wide`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button wide>Wide</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, pt, mt);
          });
          let K = f(`div`);
          s(o3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ht = f(`h2`);
          s(K, ht), e(ht, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ht, a(`# Buttons with any HTML tags`));
          let gt = p(`rue:component:start`), _t = p(`rue:component:end`);
          s(K, gt), s(K, _t), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `HTML\u4EE3\u7801`
                }
              ],
              activeKey: ee.value,
              onChange: (e2) => ee.value = e2,
              className: `mb-3`
            }), K, gt, _t);
          });
          let vt = p(`rue:slot:start`), yt = p(`rue:slot:end`);
          s(K, vt), s(K, yt), d(() => {
            l(h(ee.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body grid gap-2`);
              let o4 = f(`a`);
              s(r2, o4), i(o4, `role`, `button`), e(o4, `btn`), s(o4, a(`Link`));
              let l2 = f(`button`);
              s(r2, l2), i(l2, `type`, `submit`), e(l2, `btn`), s(l2, a(`Button`));
              let u2 = f(`input`);
              s(r2, u2), i(u2, `type`, `button`), i(u2, `value`, `Input`), e(u2, `btn`);
              let d2 = f(`input`);
              s(r2, d2), i(d2, `type`, `submit`), i(d2, `value`, `Submit`), e(d2, `btn`);
              let p2 = f(`input`);
              s(r2, p2), i(p2, `type`, `radio`), i(p2, `aria-label`, `Radio`), e(p2, `btn`);
              let m4 = f(`input`);
              s(r2, m4), i(m4, `type`, `checkbox`), i(m4, `aria-label`, `Checkbox`), e(m4, `btn`);
              let h2 = f(`input`);
              return s(r2, h2), i(h2, `type`, `reset`), i(h2, `value`, `Reset`), e(h2, `btn`), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `html`,
                  code: `<a role="button" class="btn">Link</a>
<button type="submit" class="btn">Button</button>
<input type="button" value="Input" class="btn" />
<input type="submit" value="Submit" class="btn" />
<input type="radio" aria-label="Radio" class="btn" />
<input type="checkbox" aria-label="Checkbox" class="btn" />
<input type="reset" value="Reset" class="btn" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), K, vt, yt);
          });
          let q = f(`div`);
          s(o3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let bt = f(`h2`);
          s(q, bt), e(bt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(bt, a(`# Disabled buttons`));
          let xt = p(`rue:component:start`), St = p(`rue:component:end`);
          s(q, xt), s(q, St), d(() => {
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
              activeKey: te.value,
              onChange: (e2) => te.value = e2,
              className: `mb-3`
            }), q, xt, St);
          });
          let Ct = p(`rue:slot:start`), wt = p(`rue:slot:end`);
          s(q, Ct), s(q, wt), d(() => {
            l(h(te.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  disabled: true,
                  children: `Disabled using attribute`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              return s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  disabledClass: true,
                  children: `Disabled using class name`
                }), r2, o4, u2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button disabled>Disabled using attribute</Button>
<Button disabledClass>Disabled using class name</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, Ct, wt);
          });
          let J = f(`div`);
          s(o3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Y = f(`h2`);
          s(J, Y), e(Y, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Y, a(`# Square button and circle button`));
          let Tt = p(`rue:component:start`), Et = p(`rue:component:end`);
          s(J, Tt), s(J, Et), d(() => {
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
              activeKey: ne.value,
              onChange: (e2) => ne.value = e2,
              className: `mb-3`
            }), J, Tt, Et);
          });
          let Dt = p(`rue:slot:start`), Ot = p(`rue:slot:end`);
          s(J, Dt), s(J, Ot), d(() => {
            l(h(ne.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  square: true,
                  children: `\u25A0`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              return s(r2, o4), s(r2, u2), d(() => {
                l(g(b, {
                  circle: true,
                  children: `\u25CF`
                }), r2, o4, u2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button square>\u25A0</Button>
<Button circle>\u25CF</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), J, Dt, Ot);
          });
          let X = f(`div`);
          s(o3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let kt = f(`h2`);
          s(X, kt), e(kt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(kt, a(`# Button with Icon`));
          let At = p(`rue:component:start`), jt = p(`rue:component:end`);
          s(X, At), s(X, jt), d(() => {
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
              activeKey: re.value,
              onChange: (e2) => re.value = e2,
              className: `mb-3`
            }), X, At, jt);
          });
          let Mt = p(`rue:slot:start`), Nt = p(`rue:slot:end`);
          s(X, Mt), s(X, Nt), d(() => {
            l(h(re.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let o4 = p(`rue:component:start`), d2 = p(`rue:component:end`);
              s(r2, o4), s(r2, d2), l(g(b, {
                children: u(() => {
                  let t3 = c(), n5 = f(`svg`);
                  s(t3, n5), i(n5, `xmlns`, `http://www.w3.org/2000/svg`), i(n5, `viewBox`, `0 0 24 24`), e(n5, `size-[1.2em]`), i(n5, `fill`, `none`), i(n5, `stroke`, `currentColor`), i(n5, `strokeWidth`, `2.5`);
                  let r3 = f(`path`);
                  return s(n5, r3), i(r3, `strokeLinecap`, `round`), i(r3, `strokeLinejoin`, `round`), i(r3, `d`, `M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z`), s(t3, a(`Like`)), {
                    vaporElement: t3
                  };
                })
              }), r2, o4, d2);
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              return s(r2, m4), s(r2, h2), l(g(b, {
                children: u(() => {
                  let t3 = c();
                  s(t3, a(`Like`));
                  let n5 = f(`svg`);
                  s(t3, n5), i(n5, `xmlns`, `http://www.w3.org/2000/svg`), i(n5, `viewBox`, `0 0 24 24`), e(n5, `size-[1.2em]`), i(n5, `fill`, `none`), i(n5, `stroke`, `currentColor`), i(n5, `strokeWidth`, `2.5`);
                  let r3 = f(`path`);
                  return s(n5, r3), i(r3, `strokeLinecap`, `round`), i(r3, `strokeLinejoin`, `round`), i(r3, `d`, `M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z`), {
                    vaporElement: t3
                  };
                })
              }), r2, m4, h2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-[1.2em]" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
  Like
</Button>
<Button>
  Like
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-[1.2em]" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), X, Mt, Nt);
          });
          let Z = f(`div`);
          s(o3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Pt = f(`h2`);
          s(Z, Pt), e(Pt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Pt, a(`# Button block`));
          let Ft = p(`rue:component:start`), It = p(`rue:component:end`);
          s(Z, Ft), s(Z, It), d(() => {
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
              activeKey: ie.value,
              onChange: (e2) => ie.value = e2,
              className: `mb-3`
            }), Z, Ft, It);
          });
          let Lt = p(`rue:slot:start`), Rt = p(`rue:slot:end`);
          s(Z, Lt), s(Z, Rt), d(() => {
            l(h(ie.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(b, {
                  block: true,
                  children: `block`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button block>block</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, Lt, Rt);
          });
          let Q = f(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let zt = f(`h2`);
          s(Q, zt), e(zt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(zt, a(`# Button with loading spinner`));
          let Bt = p(`rue:component:start`), Vt = p(`rue:component:end`);
          s(Q, Bt), s(Q, Vt), d(() => {
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
              activeKey: ae.value,
              onChange: (e2) => ae.value = e2,
              className: `mb-3`
            }), Q, Bt, Vt);
          });
          let Ht = p(`rue:slot:start`), Ut = p(`rue:slot:end`);
          s(Q, Ht), s(Q, Ut), d(() => {
            l(h(ae.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), o4 = p(`rue:component:end`);
              s(r2, i2), s(r2, o4);
              let m4 = u(() => {
                let t3 = c(), n5 = f(`span`);
                return s(t3, n5), e(n5, `loading loading-spinner`), {
                  vaporElement: t3
                };
              });
              d(() => {
                l(g(b, {
                  square: true,
                  children: m4
                }), r2, i2, o4);
              });
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              return s(r2, h2), s(r2, _3), l(g(b, {
                children: u(() => {
                  let t3 = c(), n5 = f(`span`);
                  return s(t3, n5), e(n5, `loading loading-spinner`), s(t3, a(`loading`)), {
                    vaporElement: t3
                  };
                })
              }), r2, h2, _3), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button square>
  <span className="loading loading-spinner"></span>
</Button>
<Button>
  <span className="loading loading-spinner"></span>
  loading
</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, Ht, Ut);
          });
          let $ = f(`div`);
          s(o3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Wt = f(`h2`);
          s($, Wt), e(Wt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Wt, a(`# Login buttons`));
          let Gt = p(`rue:component:start`), Kt = p(`rue:component:end`);
          s($, Gt), s($, Kt), d(() => {
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
              activeKey: oe.value,
              onChange: (e2) => oe.value = e2,
              className: `mb-3`
            }), $, Gt, Kt);
          });
          let qt = p(`rue:slot:start`), Jt = p(`rue:slot:end`);
          return s($, qt), s($, Jt), d(() => {
            l(h(oe.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body grid gap-3`);
              let o4 = p(`rue:component:start`), d2 = p(`rue:component:end`);
              s(r2, o4), s(r2, d2), l(g(b, {
                className: `bg-white text-black border-[#e5e5e5]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `Email icon`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 24 24`);
                  let n5 = f(`g`);
                  s(t3, n5), i(n5, `stroke-linejoin`, `round`), i(n5, `stroke-linecap`, `round`), i(n5, `stroke-width`, `2`), i(n5, `fill`, `none`), i(n5, `stroke`, `black`);
                  let r3 = f(`rect`);
                  s(n5, r3), i(r3, `width`, `20`), i(r3, `height`, `16`), i(r3, `x`, `2`), i(r3, `y`, `4`), i(r3, `rx`, `2`);
                  let o5 = f(`path`);
                  return s(n5, o5), i(o5, `d`, `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`), s(e2, a(`Login with Email`)), {
                    vaporElement: e2
                  };
                })
              }), r2, o4, d2);
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), l(g(b, {
                className: `bg-black text-white border-[#e5e5e5]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `GitHub logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 24 24`);
                  let n5 = f(`path`);
                  return s(t3, n5), i(n5, `fill`, `white`), i(n5, `d`, `M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z`), s(e2, a(`Login with GitHub`)), {
                    vaporElement: e2
                  };
                })
              }), r2, m4, h2);
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), l(g(b, {
                className: `bg-white text-black border-[#e5e5e5]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `Google logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 512 512`);
                  let n5 = f(`g`);
                  s(t3, n5);
                  let r3 = f(`path`);
                  s(n5, r3), i(r3, `d`, `m0 0H512V512H0`), i(r3, `fill`, `#fff`);
                  let o5 = f(`path`);
                  s(n5, o5), i(o5, `fill`, `#34a853`), i(o5, `d`, `M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341`);
                  let l2 = f(`path`);
                  s(n5, l2), i(l2, `fill`, `#4285f4`), i(l2, `d`, `m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57`);
                  let u2 = f(`path`);
                  s(n5, u2), i(u2, `fill`, `#fbbc02`), i(u2, `d`, `m90 341a208 200 0 010-171l63 49q-12 37 0 73`);
                  let d3 = f(`path`);
                  return s(n5, d3), i(d3, `fill`, `#ea4335`), i(d3, `d`, `m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55`), s(e2, a(`Login with Google`)), {
                    vaporElement: e2
                  };
                })
              }), r2, _3, v2);
              let y2 = p(`rue:component:start`), x3 = p(`rue:component:end`);
              s(r2, y2), s(r2, x3), l(g(b, {
                className: `bg-[#1A77F2] text-white border-[#005fd8]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `Facebook logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 32 32`);
                  let n5 = f(`path`);
                  return s(t3, n5), i(n5, `fill`, `white`), i(n5, `d`, `M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z`), s(e2, a(`Login with Facebook`)), {
                    vaporElement: e2
                  };
                })
              }), r2, y2, x3);
              let S2 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S2), s(r2, C2), l(g(b, {
                className: `bg-black text-white border-[#e5e5e5]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `Apple logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 1195 1195`);
                  let n5 = f(`path`);
                  return s(t3, n5), i(n5, `fill`, `white`), i(n5, `d`, `M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z`), s(e2, a(`Login with Apple`)), {
                    vaporElement: e2
                  };
                })
              }), r2, S2, C2);
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              s(r2, w2), s(r2, T2), l(g(b, {
                className: `bg-[#FF9900] text-black border-[#e17d00]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `Amazon logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 16 16`);
                  let n5 = f(`g`);
                  s(t3, n5), i(n5, `fill`, `black`);
                  let r3 = f(`path`);
                  s(n5, r3), i(r3, `d`, `M14.463 13.831c-1.753 1.294-4.291 1.981-6.478 1.981-3.066 0-5.825-1.131-7.912-3.019-.163-.147-.019-.35.178-.234 2.253 1.313 5.041 2.1 7.919 2.1 1.941 0 4.075-.403 6.041-1.238.294-.125.544.197.253.409z`);
                  let o5 = f(`path`);
                  return s(n5, o5), i(o5, `d`, `M15.191 13c-.225-.287-1.481-.137-2.047-.069-.172.019-.197-.128-.044-.238 1.003-.703 2.647-.5 2.838-.266.194.238-.05 1.884-.991 2.672-.144.122-.281.056-.219-.103.216-.528.688-1.709.463-1.997zM11.053 11.838l.003.003c.387-.341 1.084-.95 1.478-1.278.156-.125.128-.334.006-.509-.353-.488-.728-.884-.728-1.784v-3c0-1.272.088-2.438-.847-3.313-.738-.706-1.963-.956-2.9-.956-1.831 0-3.875.684-4.303 2.947-.047.241.131.369.287.403l1.866.203c.175-.009.3-.181.334-.356.159-.778.813-1.156 1.547-1.156.397 0 .847.144 1.081.5.269.397.234.938.234 1.397v.25c-1.116.125-2.575.206-3.619.666-1.206.522-2.053 1.584-2.053 3.147 0 2 1.259 3 2.881 3 1.369 0 2.116-.322 3.172-1.403.35.506.463.753 1.103 1.284a.395.395 0 0 0 .456-.044zm-1.94-4.694c0 .75.019 1.375-.359 2.041-.306.544-.791.875-1.331.875-.737 0-1.169-.563-1.169-1.394 0-1.641 1.472-1.938 2.863-1.938v.416z`), s(e2, a(`Login with Amazon`)), {
                    vaporElement: e2
                  };
                })
              }), r2, w2, T2);
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              s(r2, E2), s(r2, D2), l(g(b, {
                className: `bg-[#2F2F2F] text-white border-[#e5e5e5]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `Microsoft logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 512 512`);
                  let n5 = f(`path`);
                  s(t3, n5), i(n5, `d`, `M96 96H247V247H96`), i(n5, `fill`, `#f24f23`);
                  let r3 = f(`path`);
                  s(t3, r3), i(r3, `d`, `M265 96V247H416V96`), i(r3, `fill`, `#7eba03`);
                  let o5 = f(`path`);
                  s(t3, o5), i(o5, `d`, `M96 265H247V416H96`), i(o5, `fill`, `#3ca4ef`);
                  let l2 = f(`path`);
                  return s(t3, l2), i(l2, `d`, `M265 265H416V416H265`), i(l2, `fill`, `#f9ba00`), s(e2, a(`Login with Microsoft`)), {
                    vaporElement: e2
                  };
                })
              }), r2, E2, D2);
              let O2 = p(`rue:component:start`), k2 = p(`rue:component:end`);
              s(r2, O2), s(r2, k2), l(g(b, {
                className: `bg-[#03C755] text-white border-[#00b544]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `Line logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 16 16`);
                  let n5 = f(`g`);
                  s(t3, n5), i(n5, `fill-rule`, `evenodd`), i(n5, `stroke-linejoin`, `round`), i(n5, `fill`, `white`);
                  let r3 = f(`path`);
                  return s(n5, r3), i(r3, `fill-rule`, `nonzero`), i(r3, `d`, `M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87`), s(e2, a(`Login with LINE`)), {
                    vaporElement: e2
                  };
                })
              }), r2, O2, k2);
              let A2 = p(`rue:component:start`), j2 = p(`rue:component:end`);
              return s(r2, A2), s(r2, j2), l(g(b, {
                className: `bg-[#0967C2] text-white border-[#0059b3]`,
                children: u(() => {
                  let e2 = c(), t3 = f(`svg`);
                  s(e2, t3), i(t3, `aria-label`, `LinkedIn logo`), i(t3, `width`, `16`), i(t3, `height`, `16`), i(t3, `xmlns`, `http://www.w3.org/2000/svg`), i(t3, `viewBox`, `0 0 32 32`);
                  let n5 = f(`path`);
                  return s(t3, n5), i(n5, `fill`, `white`), i(n5, `d`, `M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z`), i(n5, `fill-rule`, `evenodd`), s(e2, a(`Login with LinkedIn`)), {
                    vaporElement: e2
                  };
                })
              }), r2, A2, j2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button className="bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Login with Email
</Button>
<Button className="bg-black text-white border-[#e5e5e5]">
  <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
  Login with GitHub
</Button>
<Button className="bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</Button>
<Button className="bg-[#1A77F2] text-white border-[#005fd8]">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  Login with Facebook
</Button>
<Button className="bg-black text-white border-[#e5e5e5]">
  <svg aria-label="Apple logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195"><path fill="white" d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path></svg>
  Login with Apple
</Button>
<Button className="bg-[#FF9900] text-black border-[#e17d00]">
  <svg aria-label="Amazon logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="black"><path d="M14.463 13.831c-1.753 1.294-4.291 1.981-6.478 1.981-3.066 0-5.825-1.131-7.912-3.019-.163-.147-.019-.35.178-.234 2.253 1.313 5.041 2.1 7.919 2.1 1.941 0 4.075-.403 6.041-1.238.294-.125.544.197.253.409z"></path><path d="M15.191 13c-.225-.287-1.481-.137-2.047-.069-.172.019-.197-.128-.044-.238 1.003-.703 2.647-.5 2.838-.266.194.238-.05 1.884-.991 2.672-.144.122-.281.056-.219-.103.216-.528.688-1.709.463-1.997zM11.053 11.838l.003.003c.387-.341 1.084-.95 1.478-1.278.156-.125.128-.334.006-.509-.353-.488-.728-.884-.728-1.784v-3c0-1.272.088-2.438-.847-3.313-.738-.706-1.963-.956-2.9-.956-1.831 0-3.875.684-4.303 2.947-.047.241.131.369.287.403l1.866.203c.175-.009.3-.181.334-.356.159-.778.813-1.156 1.547-1.156.397 0 .847.144 1.081.5.269.397.234.938.234 1.397v.25c-1.116.125-2.575.206-3.619.666-1.206.522-2.053 1.584-2.053 3.147 0 2 1.259 3 2.881 3 1.369 0 2.116-.322 3.172-1.403.35.506.463.753 1.103 1.284a.395.395 0 0 0 .456-.044zm-1.94-4.694c0 .75.019 1.375-.359 2.041-.306.544-.791.875-1.331.875-.737 0-1.169-.563-1.169-1.394 0-1.641 1.472-1.938 2.863-1.938v.416z"></path></g></svg>
  Login with Amazon
</Button>
<Button className="bg-[#2F2F2F] text-white border-[#e5e5e5]">
  <svg aria-label="Microsoft logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 96H247V247H96" fill="#f24f23"></path><path d="M265 96V247H416V96" fill="#7eba03"></path><path d="M96 265H247V416H96" fill="#3ca4ef"></path><path d="M265 265H416V416H265" fill="#f9ba00"></path></svg>
  Login with Microsoft
</Button>
<Button className="bg-[#03C755] text-white border-[#00b544]">
  <svg aria-label="Line logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="evenodd" stroke-linejoin="round" fill="white"><path fill-rule="nonzero" d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"></path></g></svg>
  Login with LINE
</Button>
<Button className="bg-[#0967C2] text-white border-[#0059b3]">
  <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
  Login with LinkedIn
</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), $, qt, Jt);
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

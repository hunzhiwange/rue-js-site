import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as b, __tla as __tla_6 } from "./button-eAeY0oyU.js";
import { t as x, __tla as __tla_7 } from "./badge-C9_BaoKO.js";
let S;
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
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  S = () => {
    let { tabBasic: S2, tabSizes: C, tabColors: w, tabSoft: T, tabOutline: E, tabDash: D, tabNeutral: O, tabGhost: k, tabEmpty: A, tabIcon: ee, tabInText: te, tabInButton: j } = n(`useSetup:0:0`, () => o(() => ({
      tabBasic: n(`ref:1:0`, () => m(`preview`)),
      tabSizes: n(`ref:1:1`, () => m(`preview`)),
      tabColors: n(`ref:1:2`, () => m(`preview`)),
      tabSoft: n(`ref:1:3`, () => m(`preview`)),
      tabOutline: n(`ref:1:4`, () => m(`preview`)),
      tabDash: n(`ref:1:5`, () => m(`preview`)),
      tabNeutral: n(`ref:1:6`, () => m(`preview`)),
      tabGhost: n(`ref:1:7`, () => m(`preview`)),
      tabEmpty: n(`ref:1:8`, () => m(`preview`)),
      tabIcon: n(`ref:1:9`, () => m(`preview`)),
      tabInText: n(`ref:1:10`, () => m(`preview`)),
      tabInButton: n(`ref:1:11`, () => m(`preview`))
    })));
    return u(() => {
      let n2 = c(), o2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return s(n2, o2), s(n2, m2), l(g(_, {
        children: u(() => {
          let n3 = c(), o3 = f(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          s(o3, m3), s(m3, a(`Badge \u5FBD\u6807`));
          let _2 = f(`p`);
          s(o3, _2), e(_2, `text-sm mt-3 mb-3`), s(_2, a(`\u5FBD\u6807\u7528\u4E8E\u544A\u77E5\u7528\u6237\u7279\u5B9A\u6570\u636E\u7684\u72B6\u6001\u3002`));
          let M = f(`div`);
          s(o3, M), e(M, `text-sm`);
          let N = f(`a`);
          s(M, N), i(N, `href`, `https://daisyui.com/components/badge/`), i(N, `target`, `_blank`), s(N, a(`\u67E5\u770B Badge \u9759\u6001\u6837\u5F0F`));
          let P = f(`div`);
          s(o3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let F = f(`h2`);
          s(P, F), e(F, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(F, a(`# Badge`));
          let ne = p(`rue:component:start`), re = p(`rue:component:end`);
          s(P, ne), s(P, re), d(() => {
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
              activeKey: S2.value,
              onChange: (e2) => S2.value = e2,
              className: `mb-3`
            }), P, ne, re);
          });
          let ie = p(`rue:slot:start`), ae = p(`rue:slot:end`);
          s(P, ie), s(P, ae), d(() => {
            l(h(S2.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), l(g(x, {
                children: `Badge`
              }), r2, i2, a2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Badge } from '@rue/design';
<Badge>Badge</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), P, ie, ae);
          });
          let I = f(`div`);
          s(o3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let oe = f(`h2`);
          s(I, oe), e(oe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(oe, a(`# Badge sizes`));
          let se = p(`rue:component:start`), ce = p(`rue:component:end`);
          s(I, se), s(I, ce), d(() => {
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
            }), I, se, ce);
          });
          let le = p(`rue:slot:start`), ue = p(`rue:slot:end`);
          s(I, le), s(I, ue), d(() => {
            l(h(C.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), l(g(x, {
                size: `xs`,
                children: `Xsmall`
              }), r2, i2, a2);
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), l(g(x, {
                size: `sm`,
                children: `Small`
              }), r2, o4, u2);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(r2, d2), s(r2, m4), l(g(x, {
                size: `md`,
                children: `Medium`
              }), r2, d2, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              s(r2, h2), s(r2, _3), l(g(x, {
                size: `lg`,
                children: `Large`
              }), r2, h2, _3);
              let v2 = p(`rue:component:start`), y2 = p(`rue:component:end`);
              return s(r2, v2), s(r2, y2), l(g(x, {
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
                  code: `<Badge size="xs">Xsmall</Badge>
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
<Badge size="xl">Xlarge</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), I, le, ue);
          });
          let L = f(`div`);
          s(o3, L), e(L, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let R = f(`h2`);
          s(L, R), e(R, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(R, a(`# Badge with colors`));
          let de = p(`rue:component:start`), fe = p(`rue:component:end`);
          s(L, de), s(L, fe), d(() => {
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
            }), L, de, fe);
          });
          let pe = p(`rue:slot:start`), me = p(`rue:slot:end`);
          s(L, pe), s(L, me), d(() => {
            l(h(w.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), l(g(x, {
                variant: `primary`,
                children: `Primary`
              }), r2, i2, a2);
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), l(g(x, {
                variant: `secondary`,
                children: `Secondary`
              }), r2, o4, u2);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(r2, d2), s(r2, m4), l(g(x, {
                variant: `accent`,
                children: `Accent`
              }), r2, d2, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              s(r2, h2), s(r2, _3), l(g(x, {
                variant: `neutral`,
                children: `Neutral`
              }), r2, h2, _3);
              let v2 = p(`rue:component:start`), y2 = p(`rue:component:end`);
              s(r2, v2), s(r2, y2), l(g(x, {
                variant: `info`,
                children: `Info`
              }), r2, v2, y2);
              let b2 = p(`rue:component:start`), S3 = p(`rue:component:end`);
              s(r2, b2), s(r2, S3), l(g(x, {
                variant: `success`,
                children: `Success`
              }), r2, b2, S3);
              let C2 = p(`rue:component:start`), w2 = p(`rue:component:end`);
              s(r2, C2), s(r2, w2), l(g(x, {
                variant: `warning`,
                children: `Warning`
              }), r2, C2, w2);
              let T2 = p(`rue:component:start`), E2 = p(`rue:component:end`);
              return s(r2, T2), s(r2, E2), l(g(x, {
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
                  code: `<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="neutral">Neutral</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), L, pe, me);
          });
          let z = f(`div`);
          s(o3, z), e(z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let B = f(`h2`);
          s(z, B), e(B, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(B, a(`# Badge with soft style`));
          let he = p(`rue:component:start`), ge = p(`rue:component:end`);
          s(z, he), s(z, ge), d(() => {
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
            }), z, he, ge);
          });
          let _e = p(`rue:slot:start`), ve = p(`rue:slot:end`);
          s(z, _e), s(z, ve), d(() => {
            l(h(T.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(x, {
                  soft: true,
                  variant: `primary`,
                  children: `Primary`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(x, {
                  soft: true,
                  variant: `secondary`,
                  children: `Secondary`
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(x, {
                  soft: true,
                  variant: `accent`,
                  children: `Accent`
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), d(() => {
                l(g(x, {
                  soft: true,
                  variant: `info`,
                  children: `Info`
                }), r2, _3, v2);
              });
              let y2 = p(`rue:component:start`), b2 = p(`rue:component:end`);
              s(r2, y2), s(r2, b2), d(() => {
                l(g(x, {
                  soft: true,
                  variant: `success`,
                  children: `Success`
                }), r2, y2, b2);
              });
              let S3 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S3), s(r2, C2), d(() => {
                l(g(x, {
                  soft: true,
                  variant: `warning`,
                  children: `Warning`
                }), r2, S3, C2);
              });
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              return s(r2, w2), s(r2, T2), d(() => {
                l(g(x, {
                  soft: true,
                  variant: `error`,
                  children: `Error`
                }), r2, w2, T2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Badge soft variant="primary">Primary</Badge>
<Badge soft variant="secondary">Secondary</Badge>
<Badge soft variant="accent">Accent</Badge>
<Badge soft variant="info">Info</Badge>
<Badge soft variant="success">Success</Badge>
<Badge soft variant="warning">Warning</Badge>
<Badge soft variant="error">Error</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), z, _e, ve);
          });
          let V = f(`div`);
          s(o3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = f(`h2`);
          s(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(H, a(`# Badge with outline style`));
          let ye = p(`rue:component:start`), be = p(`rue:component:end`);
          s(V, ye), s(V, be), d(() => {
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
            }), V, ye, be);
          });
          let xe = p(`rue:slot:start`), Se = p(`rue:slot:end`);
          s(V, xe), s(V, Se), d(() => {
            l(h(E.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(x, {
                  outline: true,
                  variant: `primary`,
                  children: `Primary`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(x, {
                  outline: true,
                  variant: `secondary`,
                  children: `Secondary`
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(x, {
                  outline: true,
                  variant: `accent`,
                  children: `Accent`
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), d(() => {
                l(g(x, {
                  outline: true,
                  variant: `info`,
                  children: `Info`
                }), r2, _3, v2);
              });
              let y2 = p(`rue:component:start`), b2 = p(`rue:component:end`);
              s(r2, y2), s(r2, b2), d(() => {
                l(g(x, {
                  outline: true,
                  variant: `success`,
                  children: `Success`
                }), r2, y2, b2);
              });
              let S3 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S3), s(r2, C2), d(() => {
                l(g(x, {
                  outline: true,
                  variant: `warning`,
                  children: `Warning`
                }), r2, S3, C2);
              });
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              return s(r2, w2), s(r2, T2), d(() => {
                l(g(x, {
                  outline: true,
                  variant: `error`,
                  children: `Error`
                }), r2, w2, T2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Badge outline variant="primary">Primary</Badge>
<Badge outline variant="secondary">Secondary</Badge>
<Badge outline variant="accent">Accent</Badge>
<Badge outline variant="info">Info</Badge>
<Badge outline variant="success">Success</Badge>
<Badge outline variant="warning">Warning</Badge>
<Badge outline variant="error">Error</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), V, xe, Se);
          });
          let U = f(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = f(`h2`);
          s(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(W, a(`# Badge with dash style`));
          let Ce = p(`rue:component:start`), we = p(`rue:component:end`);
          s(U, Ce), s(U, we), d(() => {
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
            }), U, Ce, we);
          });
          let Te = p(`rue:slot:start`), Ee = p(`rue:slot:end`);
          s(U, Te), s(U, Ee), d(() => {
            l(h(D.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(x, {
                  dash: true,
                  variant: `primary`,
                  children: `Primary`
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(x, {
                  dash: true,
                  variant: `secondary`,
                  children: `Secondary`
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(x, {
                  dash: true,
                  variant: `accent`,
                  children: `Accent`
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), d(() => {
                l(g(x, {
                  dash: true,
                  variant: `info`,
                  children: `Info`
                }), r2, _3, v2);
              });
              let y2 = p(`rue:component:start`), b2 = p(`rue:component:end`);
              s(r2, y2), s(r2, b2), d(() => {
                l(g(x, {
                  dash: true,
                  variant: `success`,
                  children: `Success`
                }), r2, y2, b2);
              });
              let S3 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(r2, S3), s(r2, C2), d(() => {
                l(g(x, {
                  dash: true,
                  variant: `warning`,
                  children: `Warning`
                }), r2, S3, C2);
              });
              let w2 = p(`rue:component:start`), T2 = p(`rue:component:end`);
              return s(r2, w2), s(r2, T2), d(() => {
                l(g(x, {
                  dash: true,
                  variant: `error`,
                  children: `Error`
                }), r2, w2, T2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Badge dash variant="primary">Primary</Badge>
<Badge dash variant="secondary">Secondary</Badge>
<Badge dash variant="accent">Accent</Badge>
<Badge dash variant="info">Info</Badge>
<Badge dash variant="success">Success</Badge>
<Badge dash variant="warning">Warning</Badge>
<Badge dash variant="error">Error</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, Te, Ee);
          });
          let G = f(`div`);
          s(o3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = f(`h2`);
          s(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(K, a(`# neutral badge with outline or dash style`));
          let De = p(`rue:component:start`), Oe = p(`rue:component:end`);
          s(G, De), s(G, Oe), d(() => {
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
            }), G, De, Oe);
          });
          let ke = p(`rue:slot:start`), Ae = p(`rue:slot:end`);
          s(G, ke), s(G, Ae), d(() => {
            l(h(O.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = f(`div`);
              s(r2, i2), e(i2, `p-6 w-full lg:-my-6 rounded-box flex gap-2 justify-center`);
              let a2 = p(`rue:component:start`), o4 = p(`rue:component:end`);
              s(i2, a2), s(i2, o4), d(() => {
                l(g(x, {
                  variant: `neutral`,
                  outline: true,
                  children: `Outline`
                }), i2, a2, o4);
              });
              let u2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              return s(i2, u2), s(i2, m4), d(() => {
                l(g(x, {
                  variant: `neutral`,
                  dash: true,
                  children: `Dash`
                }), i2, u2, m4);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="p-6 w-full lg:-my-6 rounded-box flex gap-2 justify-center">
  <Badge variant="neutral" outline>Outline</Badge>
  <Badge variant="neutral" dash>Dash</Badge>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, ke, Ae);
          });
          let q = f(`div`);
          s(o3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = f(`h2`);
          s(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(J, a(`# Badge ghost`));
          let je = p(`rue:component:start`), Me = p(`rue:component:end`);
          s(q, je), s(q, Me), d(() => {
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
            }), q, je, Me);
          });
          let Ne = p(`rue:slot:start`), Pe = p(`rue:slot:end`);
          s(q, Ne), s(q, Pe), d(() => {
            l(h(k.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(x, {
                  ghost: true,
                  children: `ghost`
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
                  code: `<Badge ghost>ghost</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, Ne, Pe);
          });
          let Y = f(`div`);
          s(o3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = f(`h2`);
          s(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(X, a(`# Empty badge`));
          let Fe = p(`rue:component:start`), Ie = p(`rue:component:end`);
          s(Y, Fe), s(Y, Ie), d(() => {
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
            }), Y, Fe, Ie);
          });
          let Le = p(`rue:slot:start`), Re = p(`rue:slot:end`);
          s(Y, Le), s(Y, Re), d(() => {
            l(h(A.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-2`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), l(g(x, {
                variant: `primary`,
                size: `lg`
              }), r2, i2, a2);
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), l(g(x, {
                variant: `primary`,
                size: `md`
              }), r2, o4, u2);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(r2, d2), s(r2, m4), l(g(x, {
                variant: `primary`,
                size: `sm`
              }), r2, d2, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              return s(r2, h2), s(r2, _3), l(g(x, {
                variant: `primary`,
                size: `xs`
              }), r2, h2, _3), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Badge variant="primary" size="lg" />
<Badge variant="primary" size="md" />
<Badge variant="primary" size="sm" />
<Badge variant="primary" size="xs" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, Le, Re);
          });
          let Z = f(`div`);
          s(o3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ze = f(`h2`);
          s(Z, ze), e(ze, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ze, a(`# Badge with icon`));
          let Be = p(`rue:component:start`), Ve = p(`rue:component:end`);
          s(Z, Be), s(Z, Ve), d(() => {
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
              activeKey: ee.value,
              onChange: (e2) => ee.value = e2,
              className: `mb-3`
            }), Z, Be, Ve);
          });
          let He = p(`rue:slot:start`), Ue = p(`rue:slot:end`);
          s(Z, He), s(Z, Ue), d(() => {
            l(h(ee.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-wrap gap-3`);
              let o4 = p(`rue:component:start`), d2 = p(`rue:component:end`);
              s(r2, o4), s(r2, d2), l(g(x, {
                variant: `info`,
                children: u(() => {
                  let t3 = c(), n5 = f(`svg`);
                  s(t3, n5), e(n5, `size-[1em]`), i(n5, `xmlns`, `http://www.w3.org/2000/svg`), i(n5, `viewBox`, `0 0 24 24`);
                  let r3 = f(`g`);
                  s(n5, r3), i(r3, `fill`, `currentColor`), i(r3, `strokeLinejoin`, `miter`), i(r3, `strokeLinecap`, `butt`);
                  let o5 = f(`circle`);
                  s(r3, o5), i(o5, `cx`, `12`), i(o5, `cy`, `12`), i(o5, `r`, `10`), i(o5, `fill`, `none`), i(o5, `stroke`, `currentColor`), i(o5, `strokeLinecap`, `square`), i(o5, `strokeMiterlimit`, `10`), i(o5, `strokeWidth`, `2`);
                  let l2 = f(`path`);
                  s(r3, l2), i(l2, `d`, `m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5`), i(l2, `fill`, `none`), i(l2, `stroke`, `currentColor`), i(l2, `strokeLinecap`, `square`), i(l2, `strokeMiterlimit`, `10`), i(l2, `strokeWidth`, `2`);
                  let u2 = f(`circle`);
                  return s(r3, u2), i(u2, `cx`, `12`), i(u2, `cy`, `7.25`), i(u2, `r`, `1.25`), i(u2, `fill`, `currentColor`), i(u2, `strokeWidth`, `2`), s(t3, a(`Info`)), {
                    vaporElement: t3
                  };
                })
              }), r2, o4, d2);
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), l(g(x, {
                variant: `success`,
                children: u(() => {
                  let t3 = c(), n5 = f(`svg`);
                  s(t3, n5), e(n5, `size-[1em]`), i(n5, `xmlns`, `http://www.w3.org/2000/svg`), i(n5, `viewBox`, `0 0 24 24`);
                  let r3 = f(`g`);
                  s(n5, r3), i(r3, `fill`, `currentColor`), i(r3, `strokeLinejoin`, `miter`), i(r3, `strokeLinecap`, `butt`);
                  let o5 = f(`circle`);
                  s(r3, o5), i(o5, `cx`, `12`), i(o5, `cy`, `12`), i(o5, `r`, `10`), i(o5, `fill`, `none`), i(o5, `stroke`, `currentColor`), i(o5, `strokeLinecap`, `square`), i(o5, `strokeMiterlimit`, `10`), i(o5, `strokeWidth`, `2`);
                  let l2 = f(`polyline`);
                  return s(r3, l2), i(l2, `points`, `7 13 10 16 17 8`), i(l2, `fill`, `none`), i(l2, `stroke`, `currentColor`), i(l2, `strokeLinecap`, `square`), i(l2, `strokeMiterlimit`, `10`), i(l2, `strokeWidth`, `2`), s(t3, a(`Success`)), {
                    vaporElement: t3
                  };
                })
              }), r2, m4, h2);
              let _3 = p(`rue:component:start`), v2 = p(`rue:component:end`);
              s(r2, _3), s(r2, v2), l(g(x, {
                variant: `warning`,
                children: u(() => {
                  let t3 = c(), n5 = f(`svg`);
                  s(t3, n5), e(n5, `size-[1em]`), i(n5, `xmlns`, `http://www.w3.org/2000/svg`), i(n5, `viewBox`, `0 0 18 18`);
                  let r3 = f(`g`);
                  s(n5, r3), i(r3, `fill`, `currentColor`);
                  let o5 = f(`path`);
                  s(r3, o5), i(o5, `d`, `M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z`), i(o5, `fill`, `none`), i(o5, `stroke`, `currentColor`), i(o5, `strokeLinecap`, `round`), i(o5, `strokeLinejoin`, `round`), i(o5, `strokeWidth`, `1.5`);
                  let l2 = f(`line`);
                  s(r3, l2), i(l2, `x1`, `9`), i(l2, `y1`, `6.5`), i(l2, `x2`, `9`), i(l2, `y2`, `10`), i(l2, `fill`, `none`), i(l2, `stroke`, `currentColor`), i(l2, `strokeLinecap`, `round`), i(l2, `strokeLinejoin`, `round`), i(l2, `strokeWidth`, `1.5`);
                  let u2 = f(`path`);
                  return s(r3, u2), i(u2, `d`, `M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z`), i(u2, `fill`, `currentColor`), i(u2, `data-stroke`, `none`), i(u2, `stroke`, `none`), s(t3, a(`Warning`)), {
                    vaporElement: t3
                  };
                })
              }), r2, _3, v2);
              let y2 = p(`rue:component:start`), b2 = p(`rue:component:end`);
              return s(r2, y2), s(r2, b2), l(g(x, {
                variant: `error`,
                children: u(() => {
                  let t3 = c(), n5 = f(`svg`);
                  s(t3, n5), e(n5, `size-[1em]`), i(n5, `xmlns`, `http://www.w3.org/2000/svg`), i(n5, `viewBox`, `0 0 24 24`);
                  let r3 = f(`g`);
                  s(n5, r3), i(r3, `fill`, `currentColor`);
                  let o5 = f(`rect`);
                  s(r3, o5), i(o5, `x`, `1.972`), i(o5, `y`, `11`), i(o5, `width`, `20.056`), i(o5, `height`, `2`), i(o5, `transform`, `translate(-4.971 12) rotate(-45)`), i(o5, `fill`, `currentColor`), i(o5, `strokeWidth`, `0`);
                  let l2 = f(`path`);
                  return s(r3, l2), i(l2, `d`, `m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z`), i(l2, `strokeWidth`, `0`), i(l2, `fill`, `currentColor`), s(t3, a(`Error`)), {
                    vaporElement: t3
                  };
                })
              }), r2, y2, b2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Badge variant="info">
  <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
  Info
</Badge>
<Badge variant="success">
  <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></polyline></g></svg>
  Success
</Badge>
<Badge variant="warning">
  <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill="currentColor"><path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" data-stroke="none" stroke="none"></path></g></svg>
  Warning
</Badge>
<Badge variant="error">
  <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)" fill="currentColor" strokeWidth="0"></rect><path d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z" strokeWidth="0" fill="currentColor"></path></g></svg>
  Error
</Badge>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, He, Ue);
          });
          let Q = f(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let We = f(`h2`);
          s(Q, We), e(We, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(We, a(`# Badge in a text`));
          let Ge = p(`rue:component:start`), Ke = p(`rue:component:end`);
          s(Q, Ge), s(Q, Ke), d(() => {
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
            }), Q, Ge, Ke);
          });
          let qe = p(`rue:slot:start`), Je = p(`rue:slot:end`);
          s(Q, qe), s(Q, Je), d(() => {
            l(h(te.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body grid gap-2`);
              let i2 = f(`span`);
              s(r2, i2), e(i2, `text-xl font-semibold`), s(i2, a(`Heading 1`));
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(i2, o4), s(i2, u2), l(g(x, {
                size: `xl`,
                children: `Badge`
              }), i2, o4, u2);
              let d2 = f(`span`);
              s(r2, d2), e(d2, `text-lg font-semibold`), s(d2, a(`Heading 2`));
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(d2, m4), s(d2, h2), l(g(x, {
                size: `lg`,
                children: `Badge`
              }), d2, m4, h2);
              let _3 = f(`span`);
              s(r2, _3), e(_3, `text-base font-semibold`), s(_3, a(`Heading 3`));
              let v2 = p(`rue:component:start`), y2 = p(`rue:component:end`);
              s(_3, v2), s(_3, y2), l(g(x, {
                size: `md`,
                children: `Badge`
              }), _3, v2, y2);
              let b2 = f(`span`);
              s(r2, b2), e(b2, `text-sm font-semibold`), s(b2, a(`Heading 4`));
              let S3 = p(`rue:component:start`), C2 = p(`rue:component:end`);
              s(b2, S3), s(b2, C2), l(g(x, {
                size: `sm`,
                children: `Badge`
              }), b2, S3, C2);
              let w2 = f(`span`);
              s(r2, w2), e(w2, `text-xs font-semibold`), s(w2, a(`Heading 5`));
              let T2 = p(`rue:component:start`), E2 = p(`rue:component:end`);
              s(w2, T2), s(w2, E2), l(g(x, {
                size: `xs`,
                children: `Badge`
              }), w2, T2, E2);
              let D2 = f(`p`);
              s(r2, D2), e(D2, `text-xs`), s(D2, a(`Paragraph`));
              let O2 = p(`rue:component:start`), k2 = p(`rue:component:end`);
              return s(D2, O2), s(D2, k2), l(g(x, {
                size: `xs`,
                children: `Badge`
              }), D2, O2, k2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<span className="text-xl font-semibold">
  Heading 1 <Badge size="xl">Badge</Badge>
</span>
<span className="text-lg font-semibold">
  Heading 2 <Badge size="lg">Badge</Badge>
</span>
<span className="text-base font-semibold">
  Heading 3 <Badge size="md">Badge</Badge>
</span>
<span className="text-sm font-semibold">
  Heading 4 <Badge size="sm">Badge</Badge>
</span>
<span className="text-xs font-semibold">
  Heading 5 <Badge size="xs">Badge</Badge>
</span>
<p className="text-xs">
  Paragraph <Badge size="xs">Badge</Badge>
</p>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, qe, Je);
          });
          let $ = f(`div`);
          s(o3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ye = f(`h2`);
          s($, Ye), e(Ye, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ye, a(`# Badge in a button`));
          let Xe = p(`rue:component:start`), Ze = p(`rue:component:end`);
          s($, Xe), s($, Ze), d(() => {
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
            }), $, Xe, Ze);
          });
          let Qe = p(`rue:slot:start`), $e = p(`rue:slot:end`);
          return s($, Qe), s($, $e), d(() => {
            l(h(j.value === `preview` ? u(() => {
              let n4 = c(), i2 = f(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let o4 = f(`div`);
              s(i2, o4), e(o4, `card-body flex gap-3`);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(o4, d2), s(o4, m4), l(g(b, {
                children: u(() => {
                  let e2 = c();
                  s(e2, a(`Inbox`));
                  let t2 = p(`rue:component:start`), n5 = p(`rue:component:end`);
                  return s(e2, t2), s(e2, n5), l(g(x, {
                    size: `sm`,
                    children: `+99`
                  }), e2, t2, n5), {
                    vaporElement: e2
                  };
                })
              }), o4, d2, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              return s(o4, h2), s(o4, _3), l(g(b, {
                children: u(() => {
                  let e2 = c();
                  s(e2, a(`Inbox`));
                  let n5 = t(e2);
                  s(e2, n5), r(n5, ` `);
                  let i3 = p(`rue:component:start`), o5 = p(`rue:component:end`);
                  return s(e2, i3), s(e2, o5), l(g(x, {
                    size: `sm`,
                    variant: `secondary`,
                    children: `+99`
                  }), e2, i3, o5), {
                    vaporElement: e2
                  };
                })
              }), o4, h2, _3), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Button>
  Inbox <Badge size="sm">+99</Badge>
</Button>
<Button>
  Inbox <Badge size="sm" variant="secondary">+99</Badge>
</Button>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), $, Qe, $e);
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
  S as default
};

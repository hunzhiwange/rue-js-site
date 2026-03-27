import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, z as f, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as p, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as m, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as h, t as g, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as _, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as v, __tla as __tla_6 } from "./button-eAeY0oyU.js";
let b;
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
  let y;
  y = ({ variant: e2, outline: t2, dash: n2, soft: r2, direction: i2, className: a2, children: o2 }) => {
    let s2 = `alert`;
    return e2 && (s2 += ` alert-${e2}`), t2 && (s2 += ` alert-outline`), n2 && (s2 += ` alert-dash`), r2 && (s2 += ` alert-soft`), i2 && (s2 += ` alert-${i2}`), a2 && (s2 += ` ${a2}`), m(`div`, {
      role: `alert`,
      className: s2,
      children: o2
    });
  };
  b = () => {
    let { tabBasic: b2, tabInfo: x, tabSuccess: S, tabWarning: C, tabError: w, tabSoft: T, tabOutline: E, tabDash: D, tabResponsive: O, tabTitleDesc: k } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabInfo: t(`ref:1:1`, () => f(`preview`)),
      tabSuccess: t(`ref:1:2`, () => f(`preview`)),
      tabWarning: t(`ref:1:3`, () => f(`preview`)),
      tabError: t(`ref:1:4`, () => f(`preview`)),
      tabSoft: t(`ref:1:5`, () => f(`preview`)),
      tabOutline: t(`ref:1:6`, () => f(`preview`)),
      tabDash: t(`ref:1:7`, () => f(`preview`)),
      tabResponsive: t(`ref:1:8`, () => f(`preview`)),
      tabTitleDesc: t(`ref:1:9`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Alert \u8B66\u544A`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`\u8B66\u544A\uFF08Alert\uFF09\u7528\u4E8E\u5411\u7528\u6237\u4F20\u8FBE\u91CD\u8981\u7684\u7CFB\u7EDF\u4E8B\u4EF6\u6216\u72B6\u6001\u4FE1\u606F\u3002`));
          let A = u(`div`);
          a(i3, A), e(A, `text-sm`);
          let j = u(`a`);
          a(A, j), n(j, `href`, `https://daisyui.com/components/alert/`), n(j, `target`, `_blank`), a(j, r(`\u67E5\u770B Alert \u9759\u6001\u6837\u5F0F`));
          let M = u(`div`);
          a(i3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = u(`h2`);
          a(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(N, r(`# Alert`));
          let ee = d(`rue:component:start`), te = d(`rue:component:end`);
          a(M, ee), a(M, te), l(() => {
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
              activeKey: b2.value,
              onChange: (e2) => b2.value = e2,
              className: `mb-3`
            }), M, ee, te);
          });
          let ne = d(`rue:slot:start`), re = d(`rue:slot:end`);
          a(M, ne), a(M, re), l(() => {
            s(p(b2.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card bg-base-100 shadow`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `card-body`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(l2, f4), a(l2, p2), s(m(y, {
                className: `w-full`,
                children: c(() => {
                  let t5 = o(), i5 = u(`svg`);
                  a(t5, i5), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), n(i5, `fill`, `none`), n(i5, `viewBox`, `0 0 24 24`), e(i5, `stroke-info shrink-0 w-6 h-6`);
                  let s2 = u(`path`);
                  a(i5, s2), n(s2, `strokeLinecap`, `round`), n(s2, `strokeLinejoin`, `round`), n(s2, `strokeWidth`, `2`), n(s2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let c2 = u(`span`);
                  return a(t5, c2), a(c2, r(`12 unread messages. Tap to see.`)), {
                    vaporElement: t5
                  };
                })
              }), l2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Alert } from '@rue/design';
<Alert className="w-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>12 unread messages. Tap to see.</span>
</Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), M, ne, re);
          });
          let P = u(`div`);
          a(i3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let F = u(`h2`);
          a(P, F), e(F, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(F, r(`# Info color`));
          let ie = d(`rue:component:start`), ae = d(`rue:component:end`);
          a(P, ie), a(P, ae), l(() => {
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
            }), P, ie, ae);
          });
          let oe = d(`rue:slot:start`), se = d(`rue:slot:end`);
          a(P, oe), a(P, se), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card bg-base-100 shadow`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `card-body`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(l2, f4), a(l2, p2), s(m(y, {
                variant: `info`,
                className: `w-full`,
                children: c(() => {
                  let t5 = o(), i5 = u(`svg`);
                  a(t5, i5), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), n(i5, `fill`, `none`), n(i5, `viewBox`, `0 0 24 24`), e(i5, `stroke-current shrink-0 w-6 h-6`);
                  let s2 = u(`path`);
                  a(i5, s2), n(s2, `strokeLinecap`, `round`), n(s2, `strokeLinejoin`, `round`), n(s2, `strokeWidth`, `2`), n(s2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let c2 = u(`span`);
                  return a(t5, c2), a(c2, r(`New software update available.`)), {
                    vaporElement: t5
                  };
                })
              }), l2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert variant="info" className="w-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>New software update available.</span>
</Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), P, oe, se);
          });
          let I = u(`div`);
          a(i3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let L = u(`h2`);
          a(I, L), e(L, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(L, r(`# Success color`));
          let ce = d(`rue:component:start`), le = d(`rue:component:end`);
          a(I, ce), a(I, le), l(() => {
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
            }), I, ce, le);
          });
          let ue = d(`rue:slot:start`), de = d(`rue:slot:end`);
          a(I, ue), a(I, de), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card bg-base-100 shadow`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `card-body`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(l2, f4), a(l2, p2), s(m(y, {
                variant: `success`,
                className: `w-full`,
                children: c(() => {
                  let t5 = o(), i5 = u(`svg`);
                  a(t5, i5), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), e(i5, `stroke-current shrink-0 h-6 w-6`), n(i5, `fill`, `none`), n(i5, `viewBox`, `0 0 24 24`);
                  let s2 = u(`path`);
                  a(i5, s2), n(s2, `strokeLinecap`, `round`), n(s2, `strokeLinejoin`, `round`), n(s2, `strokeWidth`, `2`), n(s2, `d`, `M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let c2 = u(`span`);
                  return a(t5, c2), a(c2, r(`Your purchase has been confirmed!`)), {
                    vaporElement: t5
                  };
                })
              }), l2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert variant="success" className="w-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your purchase has been confirmed!</span>
</Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), I, ue, de);
          });
          let R = u(`div`);
          a(i3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = u(`h2`);
          a(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(z, r(`# Warning color`));
          let fe = d(`rue:component:start`), pe = d(`rue:component:end`);
          a(R, fe), a(R, pe), l(() => {
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
            }), R, fe, pe);
          });
          let B = d(`rue:slot:start`), me = d(`rue:slot:end`);
          a(R, B), a(R, me), l(() => {
            s(p(C.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card bg-base-100 shadow`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `card-body`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(l2, f4), a(l2, p2), s(m(y, {
                variant: `warning`,
                className: `w-full`,
                children: c(() => {
                  let t5 = o(), i5 = u(`svg`);
                  a(t5, i5), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), e(i5, `stroke-current shrink-0 h-6 w-6`), n(i5, `fill`, `none`), n(i5, `viewBox`, `0 0 24 24`);
                  let s2 = u(`path`);
                  a(i5, s2), n(s2, `strokeLinecap`, `round`), n(s2, `strokeLinejoin`, `round`), n(s2, `strokeWidth`, `2`), n(s2, `d`, `M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`);
                  let c2 = u(`span`);
                  return a(t5, c2), a(c2, r(`Warning: Invalid email address!`)), {
                    vaporElement: t5
                  };
                })
              }), l2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert variant="warning" className="w-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Warning: Invalid email address!</span>
</Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), R, B, me);
          });
          let V = u(`div`);
          a(i3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = u(`h2`);
          a(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(H, r(`# Error color`));
          let he = d(`rue:component:start`), ge = d(`rue:component:end`);
          a(V, he), a(V, ge), l(() => {
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
            }), V, he, ge);
          });
          let _e = d(`rue:slot:start`), ve = d(`rue:slot:end`);
          a(V, _e), a(V, ve), l(() => {
            s(p(w.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card bg-base-100 shadow`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `card-body`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(l2, f4), a(l2, p2), s(m(y, {
                variant: `error`,
                className: `w-full`,
                children: c(() => {
                  let t5 = o(), i5 = u(`svg`);
                  a(t5, i5), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), e(i5, `stroke-current shrink-0 h-6 w-6`), n(i5, `fill`, `none`), n(i5, `viewBox`, `0 0 24 24`);
                  let s2 = u(`path`);
                  a(i5, s2), n(s2, `strokeLinecap`, `round`), n(s2, `strokeLinejoin`, `round`), n(s2, `strokeWidth`, `2`), n(s2, `d`, `M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let c2 = u(`span`);
                  return a(t5, c2), a(c2, r(`Error! Task failed successfully.`)), {
                    vaporElement: t5
                  };
                })
              }), l2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert variant="error" className="w-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Error! Task failed successfully.</span>
</Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), V, _e, ve);
          });
          let U = u(`div`);
          a(i3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = u(`h2`);
          a(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(W, r(`# Alert soft style`));
          let ye = d(`rue:component:start`), be = d(`rue:component:end`);
          a(U, ye), a(U, be), l(() => {
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
            }), U, ye, be);
          });
          let xe = d(`rue:slot:start`), Se = d(`rue:slot:end`);
          a(U, xe), a(U, Se), l(() => {
            s(p(T.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `card-body grid gap-3`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(i4, f4), a(i4, p2);
              let h3 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`12 unread messages. Tap to see.`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `info`,
                  soft: true,
                  className: `w-full`,
                  children: h3
                }), i4, f4, p2);
              });
              let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
              a(i4, g2), a(i4, _2);
              let v2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Your purchase has been confirmed!`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `success`,
                  soft: true,
                  className: `w-full`,
                  children: v2
                }), i4, g2, _2);
              });
              let b3 = d(`rue:component:start`), x2 = d(`rue:component:end`);
              a(i4, b3), a(i4, x2);
              let S2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Warning: Invalid email address!`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `warning`,
                  soft: true,
                  className: `w-full`,
                  children: S2
                }), i4, b3, x2);
              });
              let C2 = d(`rue:component:start`), w2 = d(`rue:component:end`);
              a(i4, C2), a(i4, w2);
              let T2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Error! Task failed successfully.`)), {
                  vaporElement: e2
                };
              });
              return l(() => {
                s(m(y, {
                  variant: `error`,
                  soft: true,
                  className: `w-full`,
                  children: T2
                }), i4, C2, w2);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert variant="info" soft className="w-full"><span>12 unread messages. Tap to see.</span></Alert>
<Alert variant="success" soft className="w-full"><span>Your purchase has been confirmed!</span></Alert>
<Alert variant="warning" soft className="w-full"><span>Warning: Invalid email address!</span></Alert>
<Alert variant="error" soft className="w-full"><span>Error! Task failed successfully.</span></Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), U, xe, Se);
          });
          let G = u(`div`);
          a(i3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = u(`h2`);
          a(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(K, r(`# Alert outline style`));
          let Ce = d(`rue:component:start`), we = d(`rue:component:end`);
          a(G, Ce), a(G, we), l(() => {
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
              activeKey: E.value,
              onChange: (e2) => E.value = e2,
              className: `mb-3`
            }), G, Ce, we);
          });
          let q = d(`rue:slot:start`), Te = d(`rue:slot:end`);
          a(G, q), a(G, Te), l(() => {
            s(p(E.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `card-body grid gap-3`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(i4, f4), a(i4, p2);
              let h3 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`12 unread messages. Tap to see.`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `info`,
                  outline: true,
                  className: `w-full`,
                  children: h3
                }), i4, f4, p2);
              });
              let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
              a(i4, g2), a(i4, _2);
              let v2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Your purchase has been confirmed!`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `success`,
                  outline: true,
                  className: `w-full`,
                  children: v2
                }), i4, g2, _2);
              });
              let b3 = d(`rue:component:start`), x2 = d(`rue:component:end`);
              a(i4, b3), a(i4, x2);
              let S2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Warning: Invalid email address!`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `warning`,
                  outline: true,
                  className: `w-full`,
                  children: S2
                }), i4, b3, x2);
              });
              let C2 = d(`rue:component:start`), w2 = d(`rue:component:end`);
              a(i4, C2), a(i4, w2);
              let T2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Error! Task failed successfully.`)), {
                  vaporElement: e2
                };
              });
              return l(() => {
                s(m(y, {
                  variant: `error`,
                  outline: true,
                  className: `w-full`,
                  children: T2
                }), i4, C2, w2);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert variant="info" outline className="w-full"><span>12 unread messages. Tap to see.</span></Alert>
<Alert variant="success" outline className="w-full"><span>Your purchase has been confirmed!</span></Alert>
<Alert variant="warning" outline className="w-full"><span>Warning: Invalid email address!</span></Alert>
<Alert variant="error" outline className="w-full"><span>Error! Task failed successfully.</span></Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), G, q, Te);
          });
          let J = u(`div`);
          a(i3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Y = u(`h2`);
          a(J, Y), e(Y, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Y, r(`# Alert dash style`));
          let Ee = d(`rue:component:start`), De = d(`rue:component:end`);
          a(J, Ee), a(J, De), l(() => {
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
              activeKey: D.value,
              onChange: (e2) => D.value = e2,
              className: `mb-3`
            }), J, Ee, De);
          });
          let Oe = d(`rue:slot:start`), ke = d(`rue:slot:end`);
          a(J, Oe), a(J, ke), l(() => {
            s(p(D.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `card-body grid gap-3`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(i4, f4), a(i4, p2);
              let h3 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`12 unread messages. Tap to see.`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `info`,
                  dash: true,
                  className: `w-full`,
                  children: h3
                }), i4, f4, p2);
              });
              let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
              a(i4, g2), a(i4, _2);
              let v2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Your purchase has been confirmed!`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `success`,
                  dash: true,
                  className: `w-full`,
                  children: v2
                }), i4, g2, _2);
              });
              let b3 = d(`rue:component:start`), x2 = d(`rue:component:end`);
              a(i4, b3), a(i4, x2);
              let S2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Warning: Invalid email address!`)), {
                  vaporElement: e2
                };
              });
              l(() => {
                s(m(y, {
                  variant: `warning`,
                  dash: true,
                  className: `w-full`,
                  children: S2
                }), i4, b3, x2);
              });
              let C2 = d(`rue:component:start`), w2 = d(`rue:component:end`);
              a(i4, C2), a(i4, w2);
              let T2 = c(() => {
                let e2 = o(), t5 = u(`span`);
                return a(e2, t5), a(t5, r(`Error! Task failed successfully.`)), {
                  vaporElement: e2
                };
              });
              return l(() => {
                s(m(y, {
                  variant: `error`,
                  dash: true,
                  className: `w-full`,
                  children: T2
                }), i4, C2, w2);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert variant="info" dash className="w-full"><span>12 unread messages. Tap to see.</span></Alert>
<Alert variant="success" dash className="w-full"><span>Your purchase has been confirmed!</span></Alert>
<Alert variant="warning" dash className="w-full"><span>Warning: Invalid email address!</span></Alert>
<Alert variant="error" dash className="w-full"><span>Error! Task failed successfully.</span></Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), J, Oe, ke);
          });
          let X = u(`div`);
          a(i3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Z = u(`h2`);
          a(X, Z), e(Z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Z, r(`# Alert with buttons + responsive`));
          let Ae = d(`rue:component:start`), je = d(`rue:component:end`);
          a(X, Ae), a(X, je), l(() => {
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
              activeKey: O.value,
              onChange: (e2) => O.value = e2,
              className: `mb-3`
            }), X, Ae, je);
          });
          let Me = d(`rue:slot:start`), Ne = d(`rue:slot:end`);
          a(X, Me), a(X, Ne), l(() => {
            s(p(O.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card bg-base-100 shadow`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `card-body`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(l2, f4), a(l2, p2), s(m(y, {
                direction: `vertical`,
                className: `w-full sm:alert-horizontal`,
                children: c(() => {
                  let t5 = o(), i5 = u(`svg`);
                  a(t5, i5), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), n(i5, `fill`, `none`), n(i5, `viewBox`, `0 0 24 24`), e(i5, `stroke-info shrink-0 w-6 h-6`);
                  let c2 = u(`path`);
                  a(i5, c2), n(c2, `strokeLinecap`, `round`), n(c2, `strokeLinejoin`, `round`), n(c2, `strokeWidth`, `2`), n(c2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let l3 = u(`span`);
                  a(t5, l3), a(l3, r(`we use cookies for no reason.`));
                  let f5 = u(`div`);
                  a(t5, f5);
                  let p3 = d(`rue:component:start`), h3 = d(`rue:component:end`);
                  a(f5, p3), a(f5, h3), s(m(v, {
                    size: `sm`,
                    children: `Deny`
                  }), f5, p3, h3);
                  let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
                  return a(f5, g2), a(f5, _2), s(m(v, {
                    size: `sm`,
                    variant: `primary`,
                    children: `Accept`
                  }), f5, g2, _2), {
                    vaporElement: t5
                  };
                })
              }), l2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert direction="vertical" className="w-full sm:alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>we use cookies for no reason.</span>
  <div>
    <Button size="sm">Deny</Button>
    <Button size="sm" variant="primary">Accept</Button>
  </div>
</Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), X, Me, Ne);
          });
          let Q = u(`div`);
          a(i3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = u(`h2`);
          a(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a($, r(`# Alert with title and description`));
          let Pe = d(`rue:component:start`), Fe = d(`rue:component:end`);
          a(Q, Pe), a(Q, Fe), l(() => {
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
              activeKey: k.value,
              onChange: (e2) => k.value = e2,
              className: `mb-3`
            }), Q, Pe, Fe);
          });
          let Ie = d(`rue:slot:start`), Le = d(`rue:slot:end`);
          return a(Q, Ie), a(Q, Le), l(() => {
            s(p(k.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card bg-base-100 shadow`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `card-body`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(l2, f4), a(l2, p2), s(m(y, {
                direction: `vertical`,
                className: `w-full sm:alert-horizontal`,
                children: c(() => {
                  let t5 = o(), i5 = u(`svg`);
                  a(t5, i5), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), n(i5, `fill`, `none`), n(i5, `viewBox`, `0 0 24 24`), e(i5, `stroke-info shrink-0 w-6 h-6`);
                  let c2 = u(`path`);
                  a(i5, c2), n(c2, `strokeLinecap`, `round`), n(c2, `strokeLinejoin`, `round`), n(c2, `strokeWidth`, `2`), n(c2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let l3 = u(`div`);
                  a(t5, l3);
                  let f5 = u(`h3`);
                  a(l3, f5), e(f5, `font-bold`), a(f5, r(`New message!`));
                  let p3 = u(`div`);
                  a(l3, p3), e(p3, `text-xs`), a(p3, r(`You have 1 unread message`));
                  let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
                  return a(t5, h3), a(t5, g2), s(m(v, {
                    size: `sm`,
                    children: `See`
                  }), t5, h3, g2), {
                    vaporElement: t5
                  };
                })
              }), l2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Alert direction="vertical" className="w-full sm:alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <div>
    <h3 className="font-bold">New message!</h3>
    <div className="text-xs">You have 1 unread message</div>
  </div>
  <Button size="sm">See</Button>
</Alert>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Q, Ie, Le);
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
  b as default
};

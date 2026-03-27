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
  v = Object.assign(({ arrow: e2, plus: t2, open: n2, close: r2, tabIndex: i2, tag: a2 = `div`, className: o2, children: s2 }) => {
    let c2 = `collapse`;
    if (e2 && (c2 += ` collapse-arrow`), t2 && (c2 += ` collapse-plus`), n2 && (c2 += ` collapse-open`), r2 && (c2 += ` collapse-close`), o2 && (c2 += ` ${o2}`), a2 === `details`) return m(`details`, {
      className: c2,
      children: s2
    });
    let l2 = {
      className: c2
    };
    return typeof i2 == `number` && (l2.tabIndex = i2), m(`div`, {
      ...l2,
      children: s2
    });
  }, {
    Title: ({ as: e2 = `div`, className: t2, children: n2 }) => {
      let r2 = `collapse-title`;
      return t2 && (r2 += ` ${t2}`), m(e2 === `summary` ? `summary` : `div`, {
        className: r2,
        children: n2
      });
    },
    Content: ({ className: e2, children: t2 }) => {
      let n2 = `collapse-content`;
      return e2 && (n2 += ` ${e2}`), m(`div`, {
        className: n2,
        children: t2
      });
    }
  });
  y = () => {
    let { tabFocus: y2, tabCheckbox: ee, tabDetails: te, tabNoBorder: b, tabArrow: x, tabPlus: S, tabIconStart: C, tabOpen: w, tabClose: T, tabCustomFocus: E, tabCustomCheckbox: D } = t(`useSetup:0:0`, () => i(() => ({
      tabFocus: t(`ref:1:0`, () => f(`preview`)),
      tabCheckbox: t(`ref:1:1`, () => f(`preview`)),
      tabDetails: t(`ref:1:2`, () => f(`preview`)),
      tabNoBorder: t(`ref:1:3`, () => f(`preview`)),
      tabArrow: t(`ref:1:4`, () => f(`preview`)),
      tabPlus: t(`ref:1:5`, () => f(`preview`)),
      tabIconStart: t(`ref:1:6`, () => f(`preview`)),
      tabOpen: t(`ref:1:7`, () => f(`preview`)),
      tabClose: t(`ref:1:8`, () => f(`preview`)),
      tabCustomFocus: t(`ref:1:9`, () => f(`preview`)),
      tabCustomCheckbox: t(`ref:1:10`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Collapse \u6298\u53E0\u9762\u677F`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`\u7528\u4E8E\u5C55\u793A\u4E0E\u9690\u85CF\u5185\u5BB9\u3002`));
          let O = u(`div`);
          a(i3, O), e(O, `text-sm`);
          let k = u(`a`);
          a(O, k), n(k, `href`, `https://daisyui.com/components/collapse/`), n(k, `target`, `_blank`), a(k, r(`\u67E5\u770B Collapse \u9759\u6001\u6837\u5F0F`));
          let A = u(`div`);
          a(i3, A), e(A, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ne = u(`h2`);
          a(A, ne), e(ne, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(ne, r(`# Collapse with focus`));
          let j = u(`p`);
          a(A, j), e(j, `text-sm mt-3 mb-3`), a(j, r(`\u5F53\u5143\u7D20\u5931\u7126\u65F6\u4F1A\u5173\u95ED\u3002`));
          let re = d(`rue:component:start`), ie = d(`rue:component:end`);
          a(A, re), a(A, ie), l(() => {
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
            }), A, re, ie);
          });
          let ae = d(`rue:slot:start`), oe = d(`rue:slot:end`);
          a(A, ae), a(A, oe), l(() => {
            s(p(y2.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(v, {
                tabIndex: 0,
                className: `bg-base-100 border border-base-300`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                  let i5 = u(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                    vaporElement: t5
                  };
                })
              }), t4, n2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Collapse } from '@rue/design';
<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), A, ae, oe);
          });
          let M = u(`div`);
          a(i3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = u(`h2`);
          a(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(N, r(`# Collapse with checkbox`));
          let P = u(`p`);
          a(M, P), e(P, `text-sm mt-3 mb-3`), a(P, r(`\u4F7F\u7528\u590D\u9009\u6846\u63A7\u5236\u5C55\u5F00\u4E0E\u5173\u95ED\u3002`));
          let se = d(`rue:component:start`), ce = d(`rue:component:end`);
          a(M, se), a(M, ce), l(() => {
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
              activeKey: ee.value,
              onChange: (e2) => ee.value = e2,
              className: `mb-3`
            }), M, se, ce);
          });
          let le = d(`rue:slot:start`), ue = d(`rue:slot:end`);
          a(M, le), a(M, ue), l(() => {
            s(p(ee.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(v, {
                className: `bg-base-100 border border-base-300`,
                children: c(() => {
                  let t5 = o(), i5 = u(`input`);
                  a(t5, i5), n(i5, `type`, `checkbox`);
                  let s2 = u(`div`);
                  a(t5, s2), e(s2, `font-semibold`), a(s2, r(`How do I create an account?`));
                  let c2 = u(`div`);
                  return a(t5, c2), e(c2, `text-sm`), a(c2, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                    vaporElement: t5
                  };
                })
              }), t4, i4, l2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), M, le, ue);
          });
          let F = u(`div`);
          a(i3, F), e(F, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let I = u(`h2`);
          a(F, I), e(I, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(I, r(`# Collapse using details and summary tag`));
          let L = u(`p`);
          a(F, L), e(L, `text-sm mt-3 mb-3`), a(L, r(`\u4F7F\u7528 details/summary \u6807\u7B7E\u3002`));
          let de = d(`rue:component:start`), fe = d(`rue:component:end`);
          a(F, de), a(F, fe), l(() => {
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
              activeKey: te.value,
              onChange: (e2) => te.value = e2,
              className: `mb-3`
            }), F, de, fe);
          });
          let pe = d(`rue:slot:start`), me = d(`rue:slot:end`);
          a(F, pe), a(F, me), l(() => {
            s(p(te.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(v, {
                tag: `details`,
                className: `bg-base-100 border border-base-300`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5), n(i5, `as`, `summary`), e(i5, `font-semibold`), a(i5, r(`How do I create an account?`));
                  let s2 = u(`div`);
                  return a(t5, s2), e(s2, `text-sm`), a(s2, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                    vaporElement: t5
                  };
                })
              }), t4, i4, l2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), F, pe, me);
          });
          let R = u(`div`);
          a(i3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = u(`h2`);
          a(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(z, r(`# Without border and background color`));
          let he = d(`rue:component:start`), ge = d(`rue:component:end`);
          a(R, he), a(R, ge), l(() => {
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
            }), R, he, ge);
          });
          let _e = d(`rue:slot:start`), ve = d(`rue:slot:end`);
          a(R, _e), a(R, ve), l(() => {
            s(p(b.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(v, {
                tabIndex: 0,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                  let i5 = u(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                    vaporElement: t5
                  };
                })
              }), t4, n2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), R, _e, ve);
          });
          let B = u(`div`);
          a(i3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let V = u(`h2`);
          a(B, V), e(V, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(V, r(`# With arrow icon`));
          let ye = d(`rue:component:start`), be = d(`rue:component:end`);
          a(B, ye), a(B, be), l(() => {
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
            }), B, ye, be);
          });
          let xe = d(`rue:slot:start`), Se = d(`rue:slot:end`);
          a(B, xe), a(B, Se), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(t4, n2), a(t4, i4);
              let f4 = c(() => {
                let t5 = o(), n3 = u(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = u(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(v, {
                  tabIndex: 0,
                  arrow: true,
                  className: `bg-base-100 border border-base-300`,
                  children: f4
                }), t4, n2, i4);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), B, xe, Se);
          });
          let H = u(`div`);
          a(i3, H), e(H, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let U = u(`h2`);
          a(H, U), e(U, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(U, r(`# With plus/minus icon`));
          let Ce = d(`rue:component:start`), we = d(`rue:component:end`);
          a(H, Ce), a(H, we), l(() => {
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
            }), H, Ce, we);
          });
          let Te = d(`rue:slot:start`), Ee = d(`rue:slot:end`);
          a(H, Te), a(H, Ee), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(t4, n2), a(t4, i4);
              let f4 = c(() => {
                let t5 = o(), n3 = u(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = u(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(v, {
                  tabIndex: 0,
                  plus: true,
                  className: `bg-base-100 border border-base-300`,
                  children: f4
                }), t4, n2, i4);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), H, Te, Ee);
          });
          let W = u(`div`);
          a(i3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let G = u(`h2`);
          a(W, G), e(G, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(G, r(`# Moving collapse icon to the start`));
          let K = u(`p`);
          a(W, K), e(K, `text-sm mt-3 mb-3`), a(K, r(`\u901A\u8FC7 utility \u7C7B\u79FB\u52A8\u56FE\u6807\u4F4D\u7F6E\u3002`));
          let De = d(`rue:component:start`), Oe = d(`rue:component:end`);
          a(W, De), a(W, Oe), l(() => {
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
            }), W, De, Oe);
          });
          let ke = d(`rue:slot:start`), Ae = d(`rue:slot:end`);
          a(W, ke), a(W, Ae), l(() => {
            s(p(C.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(t4, n2), a(t4, i4);
              let f4 = c(() => {
                let t5 = o(), n3 = u(`div`);
                a(t5, n3), e(n3, `font-semibold after:start-5 after:end-auto pe-4 ps-12`), a(n3, r(`How do I create an account?`));
                let i5 = u(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(v, {
                  tabIndex: 0,
                  arrow: true,
                  className: `bg-base-100 border border-base-300`,
                  children: f4
                }), t4, n2, i4);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), W, ke, Ae);
          });
          let q = u(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = u(`h2`);
          a(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(J, r(`# Force open`));
          let je = d(`rue:component:start`), Me = d(`rue:component:end`);
          a(q, je), a(q, Me), l(() => {
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
            }), q, je, Me);
          });
          let Ne = d(`rue:slot:start`), Pe = d(`rue:slot:end`);
          a(q, Ne), a(q, Pe), l(() => {
            s(p(w.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(t4, n2), a(t4, i4);
              let f4 = c(() => {
                let t5 = o(), n3 = u(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = u(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(v, {
                  tabIndex: 0,
                  open: true,
                  className: `bg-base-100 border border-base-300`,
                  children: f4
                }), t4, n2, i4);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, Ne, Pe);
          });
          let Y = u(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = u(`h2`);
          a(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(X, r(`# Force close`));
          let Fe = d(`rue:component:start`), Ie = d(`rue:component:end`);
          a(Y, Fe), a(Y, Ie), l(() => {
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
            }), Y, Fe, Ie);
          });
          let Le = d(`rue:slot:start`), Re = d(`rue:slot:end`);
          a(Y, Le), a(Y, Re), l(() => {
            s(p(T.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(t4, n2), a(t4, i4);
              let f4 = c(() => {
                let t5 = o(), n3 = u(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = u(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(v, {
                  tabIndex: 0,
                  close: true,
                  className: `bg-base-100 border border-base-300`,
                  children: f4
                }), t4, n2, i4);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Y, Le, Re);
          });
          let Z = u(`div`);
          a(i3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Q = u(`h2`);
          a(Z, Q), e(Q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Q, r(`# Custom colors for collapse that works with focus`));
          let ze = u(`p`);
          a(Z, ze), e(ze, `text-sm mt-3 mb-3`), a(ze, r(`\u901A\u8FC7 focus \u89E6\u53D1\u989C\u8272\u53D8\u5316\u3002`));
          let Be = d(`rue:component:start`), Ve = d(`rue:component:end`);
          a(Z, Be), a(Z, Ve), l(() => {
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
            }), Z, Be, Ve);
          });
          let He = d(`rue:slot:start`), Ue = d(`rue:slot:end`);
          a(Z, He), a(Z, Ue), l(() => {
            s(p(E.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(v, {
                tabIndex: 0,
                className: `bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                  let i5 = u(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                    vaporElement: t5
                  };
                })
              }), t4, n2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse tabIndex={0} className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Z, He, Ue);
          });
          let $ = u(`div`);
          a(i3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let We = u(`h2`);
          a($, We), e(We, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(We, r(`# Custom colors for collapse that works with checkbox`));
          let Ge = u(`p`);
          a($, Ge), e(Ge, `text-sm mt-3 mb-3`), a(Ge, r(`\u901A\u8FC7 peer/peer-checked \u89E6\u53D1\u989C\u8272\u53D8\u5316\u3002`));
          let Ke = d(`rue:component:start`), qe = d(`rue:component:end`);
          a($, Ke), a($, qe), l(() => {
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
            }), $, Ke, qe);
          });
          let Je = d(`rue:slot:start`), Ye = d(`rue:slot:end`);
          return a($, Je), a($, Ye), l(() => {
            s(p(D.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(v, {
                className: `bg-base-100 border border-base-300`,
                children: c(() => {
                  let t5 = o(), i5 = u(`input`);
                  a(t5, i5), n(i5, `type`, `checkbox`), e(i5, `peer`);
                  let s2 = u(`div`);
                  a(t5, s2), e(s2, `bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`), a(s2, r(`How do I create an account?`));
                  let c2 = u(`div`);
                  return a(t5, c2), e(c2, `bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`), a(c2, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                    vaporElement: t5
                  };
                })
              }), t4, i4, l2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Collapse.Content>
</Collapse>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), $, Je, Ye);
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

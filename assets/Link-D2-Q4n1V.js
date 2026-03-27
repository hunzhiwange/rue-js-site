import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, z as f, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as p, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as m, t as h, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as g, t as _, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as v, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
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
  })()
]).then(async () => {
  let y;
  y = ({ href: e2 = `#`, target: t2, rel: n2, to: r2, onClick: i2, variant: a2, hover: o2, className: s2, children: c2 }) => {
    let l2 = `link`;
    return a2 && (l2 += ` link-${a2}`), o2 && (l2 += ` link-hover`), s2 && (l2 += ` ${s2}`), r2 ? m(h, {
      className: l2,
      to: r2,
      onClick: i2,
      children: c2
    }) : m(`a`, {
      className: l2,
      href: e2,
      target: t2,
      rel: n2,
      onClick: i2,
      children: c2
    });
  };
  b = () => {
    let { tabBasic1: h2, tabBasic2: b2, tabPrimary: x, tabSecondary: ee, tabAccent: S, tabSuccess: C, tabInfo: w, tabWarning: T, tabError: E, tabHover: D, tabHref: O, tabOnClick: k, tabPrevent: te } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic1: t(`ref:1:0`, () => f(`preview`)),
      tabBasic2: t(`ref:1:1`, () => f(`preview`)),
      tabPrimary: t(`ref:1:2`, () => f(`preview`)),
      tabSecondary: t(`ref:1:3`, () => f(`preview`)),
      tabAccent: t(`ref:1:4`, () => f(`preview`)),
      tabSuccess: t(`ref:1:5`, () => f(`preview`)),
      tabInfo: t(`ref:1:6`, () => f(`preview`)),
      tabWarning: t(`ref:1:7`, () => f(`preview`)),
      tabError: t(`ref:1:8`, () => f(`preview`)),
      tabHover: t(`ref:1:9`, () => f(`preview`)),
      tabHref: t(`ref:1:10`, () => f(`preview`)),
      tabOnClick: t(`ref:1:11`, () => f(`preview`)),
      tabPrevent: t(`ref:1:12`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(g, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Link \u94FE\u63A5`));
          let g2 = u(`p`);
          a(i3, g2), e(g2, `text-sm mt-3 mb-3`), a(g2, r(`Link \u4E3A\u94FE\u63A5\u8865\u5145\u7F3A\u5931\u7684\u4E0B\u5212\u7EBF\u6837\u5F0F\uFF0C\u4E0E DaisyUI \u4FDD\u6301\u4E00\u81F4\u3002`));
          let ne = u(`div`);
          a(i3, ne), e(ne, `text-sm`);
          let A = u(`a`);
          a(ne, A), n(A, `href`, `https://daisyui.com/components/link/`), n(A, `target`, `_blank`), a(A, r(`\u67E5\u770B Link \u9759\u6001\u6837\u5F0F`));
          let j = u(`div`);
          a(i3, j), e(j, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let re = u(`h2`);
          a(j, re), e(re, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(re, r(`# Link`));
          let ie = d(`rue:component:start`), ae = d(`rue:component:end`);
          a(j, ie), a(j, ae), l(() => {
            s(m(_, {
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
              activeKey: h2.value,
              onChange: (e2) => h2.value = e2,
              className: `mb-3`
            }), j, ie, ae);
          });
          let oe = d(`rue:slot:start`), se = d(`rue:slot:end`);
          a(j, oe), a(j, se), l(() => {
            s(p(h2.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Link } from '@rue/design';
<Link>Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), j, oe, se);
          });
          let M = u(`div`);
          a(i3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = u(`h2`);
          a(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(N, r(`# Link router`));
          let ce = d(`rue:component:start`), le = d(`rue:component:end`);
          a(M, ce), a(M, le), l(() => {
            s(m(_, {
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
              activeKey: h2.value,
              onChange: (e2) => h2.value = e2,
              className: `mb-3`
            }), M, ce, le);
          });
          let ue = d(`rue:slot:start`), de = d(`rue:slot:end`);
          a(M, ue), a(M, de), l(() => {
            s(p(h2.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                to: `/examples/hello-world`,
                children: `\u8DF3\u8F6C\u5230 Hello World \u9875`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Link } from '@rue/design';
<Link to="/examples/hello-world">\u8DF3\u8F6C\u5230 Hello World \u9875</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), M, ue, de);
          });
          let P = u(`div`);
          a(i3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let F = u(`h2`);
          a(P, F), e(F, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(F, r(`# Link href/target`));
          let fe = d(`rue:component:start`), pe = d(`rue:component:end`);
          a(P, fe), a(P, pe), l(() => {
            s(m(_, {
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
            }), P, fe, pe);
          });
          let me = d(`rue:slot:start`), he = d(`rue:slot:end`);
          a(P, me), a(P, he), l(() => {
            s(p(O.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                href: `https://example.com`,
                target: `_blank`,
                rel: `noreferrer`,
                children: `\u8DF3\u8F6C\u5230\u5916\u90E8\u7F51\u7AD9`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Link } from '@rue/design';
<Link href="https://example.com" target="_blank" rel="noreferrer">\u8DF3\u8F6C\u5230\u5916\u90E8\u7F51\u7AD9</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), P, me, he);
          });
          let I = u(`div`);
          a(i3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let L = u(`h2`);
          a(I, L), e(L, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(L, r(`# Link onClick`));
          let ge = d(`rue:component:start`), _e = d(`rue:component:end`);
          a(I, ge), a(I, _e), l(() => {
            s(m(_, {
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
            }), I, ge, _e);
          });
          let ve = d(`rue:slot:start`), ye = d(`rue:slot:end`);
          a(I, ve), a(I, ye), l(() => {
            s(p(k.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                onClick: () => alert(`clicked`),
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Link } from '@rue/design';
<Link onClick={() => alert('clicked')}>Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), I, ve, ye);
          });
          let R = u(`div`);
          a(i3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = u(`h2`);
          a(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(z, r(`# Link onClick \u963B\u6B62\u8DF3\u8F6C`));
          let be = d(`rue:component:start`), xe = d(`rue:component:end`);
          a(R, be), a(R, xe), l(() => {
            s(m(_, {
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
            }), R, be, xe);
          });
          let Se = d(`rue:slot:start`), Ce = d(`rue:slot:end`);
          a(R, Se), a(R, Ce), l(() => {
            s(p(te.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body space-y-2`);
              let i4 = u(`div`);
              a(r2, i4);
              let c2 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(i4, c2), a(i4, l2), s(m(y, {
                href: `https://example.com`,
                onClick: (e2) => e2.preventDefault(),
                children: `\u963B\u6B62\u5916\u94FE\u8DF3\u8F6C`
              }), i4, c2, l2);
              let f4 = u(`div`);
              a(r2, f4);
              let p2 = d(`rue:component:start`), h3 = d(`rue:component:end`);
              return a(f4, p2), a(f4, h3), s(m(y, {
                to: `/examples/hello-world`,
                onClick: (e2) => e2.preventDefault(),
                children: `\u963B\u6B62\u8DEF\u7531\u8DF3\u8F6C`
              }), f4, p2, h3), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Link } from '@rue/design';
<Link href="https://example.com" onClick={e => e.preventDefault()}>\u963B\u6B62\u5916\u94FE\u8DF3\u8F6C</Link>
<Link to="/examples/hello-world" onClick={e => e.preventDefault()}>\u963B\u6B62\u8DEF\u7531\u8DF3\u8F6C</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), R, Se, Ce);
          });
          let B = u(`div`);
          a(i3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let V = u(`h2`);
          a(B, V), e(V, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(V, r(`# Link`));
          let we = d(`rue:component:start`), Te = d(`rue:component:end`);
          a(B, we), a(B, Te), l(() => {
            s(m(_, {
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
            }), B, we, Te);
          });
          let Ee = d(`rue:slot:start`), De = d(`rue:slot:end`);
          a(B, Ee), a(B, De), l(() => {
            s(p(b2.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let i4 = u(`div`);
              a(n2, i4), e(i4, `card-body`);
              let c2 = u(`p`);
              a(i4, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`Tailwind CSS resets the style of links by default.`)), a(c2, u(`br`)), a(c2, r(`Add "link" class to make it look like a`));
              let l2 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              return a(c2, l2), a(c2, f4), s(m(y, {
                children: `normal link`
              }), c2, l2, f4), a(c2, r(`again.`)), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<p className="text-sm mt-3 mb-3">
  Tailwind CSS resets the style of links by default.
  <br />
  Add "link" class to make it look like a
  <Link>normal link</Link>
  again.
</p>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), B, Ee, De);
          });
          let H = u(`div`);
          a(i3, H), e(H, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let U = u(`h2`);
          a(H, U), e(U, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(U, r(`# Primary color`));
          let Oe = d(`rue:component:start`), ke = d(`rue:component:end`);
          a(H, Oe), a(H, ke), l(() => {
            s(m(_, {
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
            }), H, Oe, ke);
          });
          let Ae = d(`rue:slot:start`), je = d(`rue:slot:end`);
          a(H, Ae), a(H, je), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                variant: `primary`,
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link variant="primary">Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), H, Ae, je);
          });
          let W = u(`div`);
          a(i3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let G = u(`h2`);
          a(W, G), e(G, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(G, r(`# Secondary color`));
          let Me = d(`rue:component:start`), Ne = d(`rue:component:end`);
          a(W, Me), a(W, Ne), l(() => {
            s(m(_, {
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
            }), W, Me, Ne);
          });
          let Pe = d(`rue:slot:start`), Fe = d(`rue:slot:end`);
          a(W, Pe), a(W, Fe), l(() => {
            s(p(ee.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                variant: `secondary`,
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link variant="secondary">Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), W, Pe, Fe);
          });
          let K = u(`div`);
          a(i3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let q = u(`h2`);
          a(K, q), e(q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(q, r(`# Accent color`));
          let Ie = d(`rue:component:start`), Le = d(`rue:component:end`);
          a(K, Ie), a(K, Le), l(() => {
            s(m(_, {
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
            }), K, Ie, Le);
          });
          let Re = d(`rue:slot:start`), ze = d(`rue:slot:end`);
          a(K, Re), a(K, ze), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                variant: `accent`,
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link variant="accent">Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), K, Re, ze);
          });
          let J = u(`div`);
          a(i3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Y = u(`h2`);
          a(J, Y), e(Y, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Y, r(`# Success color`));
          let Be = d(`rue:component:start`), Ve = d(`rue:component:end`);
          a(J, Be), a(J, Ve), l(() => {
            s(m(_, {
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
            }), J, Be, Ve);
          });
          let He = d(`rue:slot:start`), Ue = d(`rue:slot:end`);
          a(J, He), a(J, Ue), l(() => {
            s(p(C.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                variant: `success`,
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link variant="success">Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), J, He, Ue);
          });
          let X = u(`div`);
          a(i3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let We = u(`h2`);
          a(X, We), e(We, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(We, r(`# Info color`));
          let Ge = d(`rue:component:start`), Ke = d(`rue:component:end`);
          a(X, Ge), a(X, Ke), l(() => {
            s(m(_, {
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
            }), X, Ge, Ke);
          });
          let qe = d(`rue:slot:start`), Je = d(`rue:slot:end`);
          a(X, qe), a(X, Je), l(() => {
            s(p(w.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                variant: `info`,
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link variant="info">Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), X, qe, Je);
          });
          let Z = u(`div`);
          a(i3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ye = u(`h2`);
          a(Z, Ye), e(Ye, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Ye, r(`# Warning color`));
          let Xe = d(`rue:component:start`), Ze = d(`rue:component:end`);
          a(Z, Xe), a(Z, Ze), l(() => {
            s(m(_, {
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
            }), Z, Xe, Ze);
          });
          let Qe = d(`rue:slot:start`), $e = d(`rue:slot:end`);
          a(Z, Qe), a(Z, $e), l(() => {
            s(p(T.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                variant: `warning`,
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link variant="warning">Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Z, Qe, $e);
          });
          let Q = u(`div`);
          a(i3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let et = u(`h2`);
          a(Q, et), e(et, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(et, r(`# Error color`));
          let tt = d(`rue:component:start`), nt = d(`rue:component:end`);
          a(Q, tt), a(Q, nt), l(() => {
            s(m(_, {
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
            }), Q, tt, nt);
          });
          let rt = d(`rue:slot:start`), it = d(`rue:slot:end`);
          a(Q, rt), a(Q, it), l(() => {
            s(p(E.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), s(m(y, {
                variant: `error`,
                children: `Click me`
              }), r2, i4, c2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link variant="error">Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Q, rt, it);
          });
          let $ = u(`div`);
          a(i3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let at = u(`h2`);
          a($, at), e(at, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(at, r(`# Show underline only on hover`));
          let ot = d(`rue:component:start`), st = d(`rue:component:end`);
          a($, ot), a($, st), l(() => {
            s(m(_, {
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
            }), $, ot, st);
          });
          let ct = d(`rue:slot:start`), lt = d(`rue:slot:end`);
          return a($, ct), a($, lt), l(() => {
            s(p(D.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = u(`div`);
              a(n2, r2), e(r2, `card-body`);
              let i4 = d(`rue:component:start`), c2 = d(`rue:component:end`);
              return a(r2, i4), a(r2, c2), l(() => {
                s(m(y, {
                  hover: true,
                  children: `Click me`
                }), r2, i4, c2);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Link hover>Click me</Link>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), $, ct, lt);
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

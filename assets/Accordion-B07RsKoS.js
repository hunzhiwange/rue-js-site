import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, t as u, x as d, y as f, z as p, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as m, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as h, s as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
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
  b = Object.assign(({ icon: e2, force: t2, use: n2 = `radio`, name: r2, open: i2, className: a2, children: o2, items: s2 }) => {
    if (s2 && s2.length) return h(u, {
      children: s2.map((i3, o3) => {
        let s3 = i3.icon ?? e2, c3 = i3.force ?? t2, l2 = i3.use ?? n2, u2 = `collapse`;
        return s3 === `arrow` && (u2 += ` collapse-arrow`), s3 === `plus` && (u2 += ` collapse-plus`), c3 === `open` && (u2 += ` collapse-open`), c3 === `close` && (u2 += ` collapse-close`), a2 && (u2 += ` ${a2}`), i3.className && (u2 += ` ${i3.className}`), l2 === `details` ? g(`details`, {
          className: u2,
          name: r2,
          open: i3.open,
          children: [
            h(`summary`, {
              className: i3.titleClassName ? `collapse-title ${i3.titleClassName}` : `collapse-title`,
              children: i3.title
            }),
            h(`div`, {
              className: i3.contentClassName ? `collapse-content ${i3.contentClassName}` : `collapse-content`,
              children: i3.content
            })
          ]
        }, o3) : g(`div`, {
          className: u2,
          children: [
            h(`input`, {
              type: `radio`,
              name: r2,
              checked: i3.open
            }),
            h(`div`, {
              className: i3.titleClassName ? `collapse-title ${i3.titleClassName}` : `collapse-title`,
              children: i3.title
            }),
            h(`div`, {
              className: i3.contentClassName ? `collapse-content ${i3.contentClassName}` : `collapse-content`,
              children: i3.content
            })
          ]
        }, o3);
      })
    });
    let c2 = `collapse`;
    return e2 === `arrow` && (c2 += ` collapse-arrow`), e2 === `plus` && (c2 += ` collapse-plus`), t2 === `open` && (c2 += ` collapse-open`), t2 === `close` && (c2 += ` collapse-close`), a2 && (c2 += ` ${a2}`), n2 === `details` ? h(`details`, {
      className: c2,
      name: r2,
      open: i2,
      children: o2
    }) : g(`div`, {
      className: c2,
      children: [
        h(`input`, {
          type: `radio`,
          name: r2,
          checked: i2
        }),
        o2
      ]
    });
  }, {
    Title: ({ className: e2, children: t2, as: n2 = `div` }) => {
      let r2 = `collapse-title`;
      return e2 && (r2 += ` ${e2}`), h(n2 === `summary` ? `summary` : `div`, {
        className: r2,
        children: t2
      });
    },
    Content: ({ className: e2, children: t2 }) => {
      let n2 = `collapse-content`;
      return e2 && (n2 += ` ${e2}`), h(`div`, {
        className: n2,
        children: t2
      });
    }
  });
  x = () => {
    let { tabRadio: u2, tabDetails: g2, tabArrow: x2, tabPlus: ee, tabJoin: te, tabArrayRadio: ne, tabArrayDetails: re } = t(`useSetup:0:0`, () => i(() => ({
      tabRadio: t(`ref:1:0`, () => p(`preview`)),
      tabDetails: t(`ref:1:1`, () => p(`preview`)),
      tabArrow: t(`ref:1:2`, () => p(`preview`)),
      tabPlus: t(`ref:1:3`, () => p(`preview`)),
      tabJoin: t(`ref:1:4`, () => p(`preview`)),
      tabArrayRadio: t(`ref:1:5`, () => p(`preview`)),
      tabArrayDetails: t(`ref:1:6`, () => p(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = f(`rue:component:start`), p2 = f(`rue:component:end`);
      return a(t2, i2), a(t2, p2), s(h(_, {
        children: c(() => {
          let t3 = o(), i3 = d(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let p3 = d(`h1`);
          a(i3, p3), a(p3, r(`Accordion \u624B\u98CE\u7434`));
          let _2 = d(`p`);
          a(i3, _2), e(_2, `text-sm mt-3 mb-3`), a(_2, r(`Accordion \u7528\u4E8E\u663E\u793A\u548C\u9690\u85CF\u5185\u5BB9\uFF0C\u4F46\u540C\u4E00\u7EC4\u4E2D\u53EA\u80FD\u6709\u4E00\u4E2A\u9879\u4FDD\u6301\u5C55\u5F00\u3002`));
          let S = d(`div`);
          a(i3, S), e(S, `text-sm mb-3`);
          let C = d(`a`);
          a(S, C), n(C, `href`, `https://daisyui.com/components/accordion/`), n(C, `target`, `_blank`), a(C, r(`\u67E5\u770B Accordion \u9759\u6001\u6837\u5F0F`));
          let w = d(`div`);
          a(i3, w), e(w, `alert mb-3`);
          let ie = d(`p`);
          a(w, ie), e(ie, `text-sm mt-3 mb-3`);
          let T = d(`svg`);
          a(ie, T), n(T, `class`, `size-4 ms-2 inline-block text-info`), n(T, `xmlns`, `http://www.w3.org/2000/svg`), n(T, `viewBox`, `0 0 24 24`);
          let E = d(`g`);
          a(T, E), n(E, `fill`, `currentColor`), n(E, `stroke-linejoin`, `miter`), n(E, `stroke-linecap`, `butt`);
          let D = d(`circle`);
          a(E, D), n(D, `cx`, `12`), n(D, `cy`, `12`), n(D, `r`, `10`), n(D, `fill`, `none`), n(D, `stroke`, `currentColor`), n(D, `stroke-linecap`, `square`), n(D, `stroke-miterlimit`, `10`), n(D, `stroke-width`, `2`);
          let O = d(`path`);
          a(E, O), n(O, `d`, `m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5`), n(O, `fill`, `none`), n(O, `stroke`, `currentColor`), n(O, `stroke-linecap`, `square`), n(O, `stroke-miterlimit`, `10`), n(O, `stroke-width`, `2`);
          let k = d(`circle`);
          a(E, k), n(k, `cx`, `12`), n(k, `cy`, `7.25`), n(k, `r`, `1.25`), n(k, `fill`, `currentColor`), n(k, `stroke-width`, `2`);
          let ae = d(`span`);
          a(w, ae), a(ae, r(`Accordion \u4F7F\u7528\u4E0E collapse \u7EC4\u4EF6\u76F8\u540C\u7684\u6837\u5F0F\uFF0C\u4F46\u5B83\u901A\u8FC7 radio \u8F93\u5165\u6216 details \u5143\u7D20\u5DE5\u4F5C\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u52FE\u9009/\u53D6\u6D88\u52FE\u9009\u9690\u85CF\u7684 radio \u8F93\u5165\u6216\u4E3A details \u5143\u7D20\u8BBE\u7F6E open \u5C5E\u6027\u6765\u63A7\u5236\u54EA\u4E00\u9879\u5904\u4E8E\u5C55\u5F00\u72B6\u6001\u3002`));
          let A = d(`div`);
          a(i3, A), e(A, `alert mb-3`);
          let j = d(`p`);
          a(A, j), e(j, `text-sm mt-3 mb-3`);
          let M = d(`svg`);
          a(j, M), n(M, `class`, `size-4 ms-2 inline-block text-info`), n(M, `xmlns`, `http://www.w3.org/2000/svg`), n(M, `viewBox`, `0 0 24 24`);
          let N = d(`g`);
          a(M, N), n(N, `fill`, `currentColor`), n(N, `stroke-linejoin`, `miter`), n(N, `stroke-linecap`, `butt`);
          let P = d(`circle`);
          a(N, P), n(P, `cx`, `12`), n(P, `cy`, `12`), n(P, `r`, `10`), n(P, `fill`, `none`), n(P, `stroke`, `currentColor`), n(P, `stroke-linecap`, `square`), n(P, `stroke-miterlimit`, `10`), n(P, `stroke-width`, `2`);
          let F = d(`path`);
          a(N, F), n(F, `d`, `m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5`), n(F, `fill`, `none`), n(F, `stroke`, `currentColor`), n(F, `stroke-linecap`, `square`), n(F, `stroke-miterlimit`, `10`), n(F, `stroke-width`, `2`);
          let I = d(`circle`);
          a(N, I), n(I, `cx`, `12`), n(I, `cy`, `7.25`), n(I, `r`, `1.25`), n(I, `fill`, `currentColor`), n(I, `stroke-width`, `2`);
          let oe = d(`span`);
          a(A, oe), a(oe, r(`\u6240\u6709\u5177\u6709\u76F8\u540C name \u7684 radio \u8F93\u5165\u4F1A\u534F\u540C\u5DE5\u4F5C\uFF0C\u540C\u4E00\u65F6\u95F4\u53EA\u6709\u4E00\u4E2A\u53EF\u4EE5\u5C55\u5F00\u3002\u5982\u679C\u9875\u9762\u4E0A\u6709\u591A\u4E2A Accordion \u7EC4\uFF0C\u8BF7\u4E3A\u6BCF\u7EC4\u4F7F\u7528\u4E0D\u540C\u7684 name\u3002`));
          let L = d(`div`);
          a(i3, L), e(L, `alert`);
          let se = d(`p`);
          a(L, se), e(se, `text-sm mt-3 mb-3`);
          let R = d(`svg`);
          a(se, R), n(R, `class`, `size-4 ms-2 inline-block text-info`), n(R, `xmlns`, `http://www.w3.org/2000/svg`), n(R, `viewBox`, `0 0 24 24`);
          let z = d(`g`);
          a(R, z), n(z, `fill`, `currentColor`), n(z, `stroke-linejoin`, `miter`), n(z, `stroke-linecap`, `butt`);
          let B = d(`circle`);
          a(z, B), n(B, `cx`, `12`), n(B, `cy`, `12`), n(B, `r`, `10`), n(B, `fill`, `none`), n(B, `stroke`, `currentColor`), n(B, `stroke-linecap`, `square`), n(B, `stroke-miterlimit`, `10`), n(B, `stroke-width`, `2`);
          let V = d(`path`);
          a(z, V), n(V, `d`, `m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5`), n(V, `fill`, `none`), n(V, `stroke`, `currentColor`), n(V, `stroke-linecap`, `square`), n(V, `stroke-miterlimit`, `10`), n(V, `stroke-width`, `2`);
          let H = d(`circle`);
          a(z, H), n(H, `cx`, `12`), n(H, `cy`, `7.25`), n(H, `r`, `1.25`), n(H, `fill`, `currentColor`), n(H, `stroke-width`, `2`);
          let ce = d(`span`);
          a(L, ce), a(ce, r(`\u5982\u679C\u5E0C\u671B\u6298\u53E0\u7684\u5185\u5BB9\u80FD\u88AB\u6D4F\u89C8\u5668\u641C\u7D22\uFF0C\u8BF7\u4F7F\u7528\u201CAccordion using details\u201D\u3002`));
          let U = d(`div`);
          a(i3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = d(`h2`);
          a(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(W, r(`# Accordion using radio inputs`));
          let le = f(`rue:component:start`), ue = f(`rue:component:end`);
          a(U, le), a(U, ue), l(() => {
            s(h(v, {
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
              activeKey: u2.value,
              onChange: (e2) => u2.value = e2,
              className: `mb-3`
            }), U, le, ue);
          });
          let de = f(`rue:slot:start`), fe = f(`rue:slot:end`);
          a(U, de), a(U, fe), l(() => {
            s(m(u2.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `grid gap-3`);
              let i4 = f(`rue:component:start`), u3 = f(`rue:component:end`);
              a(n2, i4), a(n2, u3);
              let p4 = c(() => {
                let t5 = o(), n3 = d(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = d(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              l(() => {
                s(h(b, {
                  className: `bg-base-100 border border-base-300`,
                  name: `my-accordion-1`,
                  open: true,
                  children: p4
                }), n2, i4, u3);
              });
              let m2 = f(`rue:component:start`), g3 = f(`rue:component:end`);
              a(n2, m2), a(n2, g3), s(h(b, {
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-1`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`I forgot my password. What should I do?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, m2, g3);
              let _3 = f(`rue:component:start`), v2 = f(`rue:component:end`);
              return a(n2, _3), a(n2, v2), s(h(b, {
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-1`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I update my profile information?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Go to "My Account" settings and select "Edit Profile" to make changes.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, _3, v2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Accordion } from '@rue/design';
<Accordion className="bg-base-100 border border-base-300" name="my-accordion-1" open>
  <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Accordion.Content>
</Accordion>
<Accordion className="bg-base-100 border border-base-300" name="my-accordion-1">
  <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</Accordion.Content>
</Accordion>
<Accordion className="bg-base-100 border border-base-300" name="my-accordion-1">
  <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</Accordion.Content>
</Accordion>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), U, de, fe);
          });
          let G = d(`div`);
          a(i3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let pe = d(`h2`);
          a(G, pe), e(pe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(pe, r(`# Accordion using details`));
          let me = f(`rue:component:start`), he = f(`rue:component:end`);
          a(G, me), a(G, he), l(() => {
            s(h(v, {
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
              activeKey: g2.value,
              onChange: (e2) => g2.value = e2,
              className: `mb-3`
            }), G, me, he);
          });
          let ge = f(`rue:slot:start`), _e = f(`rue:slot:end`);
          a(G, ge), a(G, _e), l(() => {
            s(m(g2.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`div`);
              a(t4, i4), e(i4, `grid gap-3`);
              let u3 = f(`rue:component:start`), p4 = f(`rue:component:end`);
              a(i4, u3), a(i4, p4);
              let m2 = c(() => {
                let t5 = o(), i5 = d(`div`);
                a(t5, i5), n(i5, `as`, `summary`), e(i5, `font-semibold`), a(i5, r(`How do I create an account?`));
                let s2 = d(`div`);
                return a(t5, s2), e(s2, `text-sm`), a(s2, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              l(() => {
                s(h(b, {
                  use: `details`,
                  className: `bg-base-100 border border-base-300`,
                  name: `my-accordion-det-1`,
                  open: true,
                  children: m2
                }), i4, u3, p4);
              });
              let g3 = f(`rue:component:start`), _3 = f(`rue:component:end`);
              a(i4, g3), a(i4, _3), s(h(b, {
                use: `details`,
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-det-1`,
                children: c(() => {
                  let t5 = o(), i5 = d(`div`);
                  a(t5, i5), n(i5, `as`, `summary`), e(i5, `font-semibold`), a(i5, r(`I forgot my password. What should I do?`));
                  let s2 = d(`div`);
                  return a(t5, s2), e(s2, `text-sm`), a(s2, r(`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`)), {
                    vaporElement: t5
                  };
                })
              }), i4, g3, _3);
              let v2 = f(`rue:component:start`), y2 = f(`rue:component:end`);
              return a(i4, v2), a(i4, y2), s(h(b, {
                use: `details`,
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-det-1`,
                children: c(() => {
                  let t5 = o(), i5 = d(`div`);
                  a(t5, i5), n(i5, `as`, `summary`), e(i5, `font-semibold`), a(i5, r(`How do I update my profile information?`));
                  let s2 = d(`div`);
                  return a(t5, s2), e(s2, `text-sm`), a(s2, r(`Go to "My Account" settings and select "Edit Profile" to make changes.`)), {
                    vaporElement: t5
                  };
                })
              }), i4, v2, y2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Accordion } from '@rue/design';
<Accordion use="details" className="bg-base-100 border border-base-300" name="my-accordion-det-1" open>
  <Accordion.Title as="summary" className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Accordion.Content>
</Accordion>
<Accordion use="details" className="bg-base-100 border border-base-300" name="my-accordion-det-1">
  <Accordion.Title as="summary" className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</Accordion.Content>
</Accordion>
<Accordion use="details" className="bg-base-100 border border-base-300" name="my-accordion-det-1">
  <Accordion.Title as="summary" className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</Accordion.Content>
</Accordion>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), G, ge, _e);
          });
          let K = d(`div`);
          a(i3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ve = d(`h2`);
          a(K, ve), e(ve, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(ve, r(`# Accordion with arrow icon`));
          let ye = f(`rue:component:start`), be = f(`rue:component:end`);
          a(K, ye), a(K, be), l(() => {
            s(h(v, {
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
              activeKey: x2.value,
              onChange: (e2) => x2.value = e2,
              className: `mb-3`
            }), K, ye, be);
          });
          let xe = f(`rue:slot:start`), Se = f(`rue:slot:end`);
          a(K, xe), a(K, Se), l(() => {
            s(m(x2.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `grid gap-3`);
              let i4 = f(`rue:component:start`), u3 = f(`rue:component:end`);
              a(n2, i4), a(n2, u3);
              let p4 = c(() => {
                let t5 = o(), n3 = d(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = d(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              l(() => {
                s(h(b, {
                  icon: `arrow`,
                  className: `bg-base-100 border border-base-300`,
                  name: `my-accordion-2`,
                  open: true,
                  children: p4
                }), n2, i4, u3);
              });
              let m2 = f(`rue:component:start`), g3 = f(`rue:component:end`);
              a(n2, m2), a(n2, g3), s(h(b, {
                icon: `arrow`,
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-2`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`I forgot my password. What should I do?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, m2, g3);
              let _3 = f(`rue:component:start`), v2 = f(`rue:component:end`);
              return a(n2, _3), a(n2, v2), s(h(b, {
                icon: `arrow`,
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-2`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I update my profile information?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Go to "My Account" settings and select "Edit Profile" to make changes.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, _3, v2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Accordion } from '@rue/design';
<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="my-accordion-2" open>
  <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Accordion.Content>
</Accordion>
<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="my-accordion-2">
  <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</Accordion.Content>
</Accordion>
<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="my-accordion-2">
  <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</Accordion.Content>
</Accordion>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), K, xe, Se);
          });
          let q = d(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ce = d(`h2`);
          a(q, Ce), e(Ce, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Ce, r(`# Accordion with plus/minus icon`));
          let we = f(`rue:component:start`), Te = f(`rue:component:end`);
          a(q, we), a(q, Te), l(() => {
            s(h(v, {
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
            }), q, we, Te);
          });
          let Ee = f(`rue:slot:start`), De = f(`rue:slot:end`);
          a(q, Ee), a(q, De), l(() => {
            s(m(ee.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `grid gap-3`);
              let i4 = f(`rue:component:start`), u3 = f(`rue:component:end`);
              a(n2, i4), a(n2, u3);
              let p4 = c(() => {
                let t5 = o(), n3 = d(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = d(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              l(() => {
                s(h(b, {
                  icon: `plus`,
                  className: `bg-base-100 border border-base-300`,
                  name: `my-accordion-3`,
                  open: true,
                  children: p4
                }), n2, i4, u3);
              });
              let m2 = f(`rue:component:start`), g3 = f(`rue:component:end`);
              a(n2, m2), a(n2, g3), s(h(b, {
                icon: `plus`,
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-3`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`I forgot my password. What should I do?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, m2, g3);
              let _3 = f(`rue:component:start`), v2 = f(`rue:component:end`);
              return a(n2, _3), a(n2, v2), s(h(b, {
                icon: `plus`,
                className: `bg-base-100 border border-base-300`,
                name: `my-accordion-3`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I update my profile information?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Go to "My Account" settings and select "Edit Profile" to make changes.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, _3, v2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Accordion } from '@rue/design';
<Accordion icon="plus" className="bg-base-100 border border-base-300" name="my-accordion-3" open>
  <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Accordion.Content>
</Accordion>
<Accordion icon="plus" className="bg-base-100 border border-base-300" name="my-accordion-3">
  <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</Accordion.Content>
</Accordion>
<Accordion icon="plus" className="bg-base-100 border border-base-300" name="my-accordion-3">
  <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</Accordion.Content>
</Accordion>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, Ee, De);
          });
          let J = d(`div`);
          a(i3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Oe = d(`h2`);
          a(J, Oe), e(Oe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Oe, r(`# Using Accordion and Join together`));
          let ke = d(`p`);
          a(J, ke), e(ke, `text-sm mt-3 mb-3`), a(ke, r(`to join the items together and handle border radius automatically`));
          let Ae = f(`rue:component:start`), je = f(`rue:component:end`);
          a(J, Ae), a(J, je), l(() => {
            s(h(v, {
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
              activeKey: te.value,
              onChange: (e2) => te.value = e2,
              className: `mb-3`
            }), J, Ae, je);
          });
          let Me = f(`rue:slot:start`), Ne = f(`rue:slot:end`);
          a(J, Me), a(J, Ne), l(() => {
            s(m(te.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `join join-vertical bg-base-100`);
              let i4 = f(`rue:component:start`), u3 = f(`rue:component:end`);
              a(n2, i4), a(n2, u3);
              let p4 = c(() => {
                let t5 = o(), n3 = d(`div`);
                a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I create an account?`));
                let i5 = d(`div`);
                return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click the "Sign Up" button in the top right corner and follow the registration process.`)), {
                  vaporElement: t5
                };
              });
              l(() => {
                s(h(b, {
                  icon: `arrow`,
                  className: `join-item border border-base-300`,
                  name: `my-accordion-4`,
                  open: true,
                  children: p4
                }), n2, i4, u3);
              });
              let m2 = f(`rue:component:start`), g3 = f(`rue:component:end`);
              a(n2, m2), a(n2, g3), s(h(b, {
                icon: `arrow`,
                className: `join-item border border-base-300`,
                name: `my-accordion-4`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`I forgot my password. What should I do?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, m2, g3);
              let _3 = f(`rue:component:start`), v2 = f(`rue:component:end`);
              return a(n2, _3), a(n2, v2), s(h(b, {
                icon: `arrow`,
                className: `join-item border border-base-300`,
                name: `my-accordion-4`,
                children: c(() => {
                  let t5 = o(), n3 = d(`div`);
                  a(t5, n3), e(n3, `font-semibold`), a(n3, r(`How do I update my profile information?`));
                  let i5 = d(`div`);
                  return a(t5, i5), e(i5, `text-sm`), a(i5, r(`Go to "My Account" settings and select "Edit Profile" to make changes.`)), {
                    vaporElement: t5
                  };
                })
              }), n2, _3, v2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Accordion } from '@rue/design';
<div className="join join-vertical bg-base-100">
  <Accordion icon="arrow" className="join-item border border-base-300" name="my-accordion-4" open>
    <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
    <Accordion.Content className="text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</Accordion.Content>
  </Accordion>
  <Accordion icon="arrow" className="join-item border border-base-300" name="my-accordion-4">
    <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
    <Accordion.Content className="text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</Accordion.Content>
  </Accordion>
  <Accordion icon="arrow" className="join-item border border-base-300" name="my-accordion-4">
    <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
    <Accordion.Content className="text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</Accordion.Content>
  </Accordion>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), J, Me, Ne);
          });
          let Y = d(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Pe = d(`h2`);
          a(Y, Pe), e(Pe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Pe, r(`# Accordion using items array (radio)`));
          let Fe = f(`rue:component:start`), Ie = f(`rue:component:end`);
          a(Y, Fe), a(Y, Ie), l(() => {
            s(h(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `TSX\u4EE3\u7801`
                }
              ],
              activeKey: ne.value,
              onChange: (e2) => ne.value = e2,
              className: `mb-3`
            }), Y, Fe, Ie);
          });
          let X = d(`div`);
          a(Y, X);
          let Le = f(`rue:slot:start`), Re = f(`rue:slot:end`);
          a(X, Le), a(X, Re), l(() => {
            s(m(ne.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`div`);
              a(e2, t4), n(t4, `class`, `grid gap-3`);
              let r2 = f(`rue:component:start`), i4 = f(`rue:component:end`);
              return a(t4, r2), a(t4, i4), l(() => {
                s(h(b, {
                  className: `bg-base-100 border border-base-300`,
                  name: `my-accordion-arr-1`,
                  items: [
                    {
                      title: `How do I create an account?`,
                      content: `Click the "Sign Up" button in the top right corner and follow the registration process.`,
                      open: true
                    },
                    {
                      title: `I forgot my password. What should I do?`,
                      content: `Click on "Forgot Password" on the login page and follow the instructions sent to your email.`
                    },
                    {
                      title: `How do I update my profile information?`,
                      content: `Go to "My Account" settings and select "Edit Profile" to make changes.`
                    }
                  ]
                }), t4, r2, i4);
              }), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Accordion } from '@rue/design';
<div class="grid gap-3">
  <Accordion className="bg-base-100 border border-base-300" name="my-accordion-arr-1" items={[
    { title: 'How do I create an account?', content: 'Click the "Sign Up" button in the top right corner and follow the registration process.', open: true },
    { title: 'I forgot my password. What should I do?', content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.' },
    { title: 'How do I update my profile information?', content: 'Go to "My Account" settings and select "Edit Profile" to make changes.' },
  ]}/>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), X, Le, Re);
          });
          let Z = d(`div`);
          a(i3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Q = d(`h2`);
          a(Z, Q), e(Q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Q, r(`# Accordion using items array (details)`));
          let ze = f(`rue:component:start`), Be = f(`rue:component:end`);
          a(Z, ze), a(Z, Be), l(() => {
            s(h(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `TSX\u4EE3\u7801`
                }
              ],
              activeKey: re.value,
              onChange: (e2) => re.value = e2,
              className: `mb-3`
            }), Z, ze, Be);
          });
          let $ = d(`div`);
          a(Z, $);
          let Ve = f(`rue:slot:start`), He = f(`rue:slot:end`);
          return a($, Ve), a($, He), l(() => {
            s(m(re.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`div`);
              a(e2, t4), n(t4, `class`, `grid gap-3`);
              let r2 = f(`rue:component:start`), i4 = f(`rue:component:end`);
              return a(t4, r2), a(t4, i4), l(() => {
                s(h(b, {
                  use: `details`,
                  className: `bg-base-100 border border-base-300`,
                  name: `my-accordion-arr-2`,
                  items: [
                    {
                      title: `How do I create an account?`,
                      content: `Click the "Sign Up" button in the top right corner and follow the registration process.`,
                      open: true
                    },
                    {
                      title: `I forgot my password. What should I do?`,
                      content: `Click on "Forgot Password" on the login page and follow the instructions sent to your email.`
                    },
                    {
                      title: `How do I update my profile information?`,
                      content: `Go to "My Account" settings and select "Edit Profile" to make changes.`
                    }
                  ]
                }), t4, r2, i4);
              }), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Accordion } from '@rue/design';
<div class="grid gap-3">
  <Accordion use="details" className="bg-base-100 border border-base-300" name="my-accordion-arr-2" items={[
    { title: 'How do I create an account?', content: 'Click the "Sign Up" button in the top right corner and follow the registration process.', open: true },
    { title: 'I forgot my password. What should I do?', content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.' },
    { title: 'How do I update my profile information?', content: 'Go to "My Account" settings and select "Edit Profile" to make changes.' },
  ]}/>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), $, Ve, He);
          }), {
            vaporElement: t3
          };
        })
      }), t2, i2, p2), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  x as default
};

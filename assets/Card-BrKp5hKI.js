import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, z as f, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as p, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as m, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as h, t as g, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as _, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as v, __tla as __tla_6 } from "./button-eAeY0oyU.js";
import { t as y, __tla as __tla_7 } from "./card-D8ypHBPA.js";
import { t as b, __tla as __tla_8 } from "./badge-C9_BaoKO.js";
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
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })()
]).then(async () => {
  x = () => {
    let { tabBasic: x2, tabPricing: S, tabSizes: C, tabBorder: w, tabDash: ee, tabBadge: T, tabBottomImage: E, tabCentered: D, tabImageOverlay: te, tabNoImage: O, tabCustomColor: k, tabNeutralCentered: A, tabActionTop: ne, tabSideImage: j, tabResponsiveSide: M, tabCompound: N } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabPricing: t(`ref:1:1`, () => f(`preview`)),
      tabSizes: t(`ref:1:2`, () => f(`preview`)),
      tabBorder: t(`ref:1:3`, () => f(`preview`)),
      tabDash: t(`ref:1:4`, () => f(`preview`)),
      tabBadge: t(`ref:1:5`, () => f(`preview`)),
      tabBottomImage: t(`ref:1:6`, () => f(`preview`)),
      tabCentered: t(`ref:1:7`, () => f(`preview`)),
      tabImageOverlay: t(`ref:1:8`, () => f(`preview`)),
      tabNoImage: t(`ref:1:9`, () => f(`preview`)),
      tabCustomColor: t(`ref:1:10`, () => f(`preview`)),
      tabNeutralCentered: t(`ref:1:11`, () => f(`preview`)),
      tabActionTop: t(`ref:1:12`, () => f(`preview`)),
      tabSideImage: t(`ref:1:13`, () => f(`preview`)),
      tabResponsiveSide: t(`ref:1:14`, () => f(`preview`)),
      tabCompound: t(`ref:1:15`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Card \u5361\u7247`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`\u5361\u7247\u7528\u4E8E\u4EE5\u6613\u8BFB\u7684\u65B9\u5F0F\u5206\u7EC4\u548C\u5C55\u793A\u5185\u5BB9\u3002`));
          let P = u(`div`);
          a(i3, P), e(P, `text-sm`);
          let F = u(`a`);
          a(P, F), n(F, `href`, `https://daisyui.com/components/card/`), n(F, `target`, `_blank`), a(F, r(`\u67E5\u770B Card \u9759\u6001\u6837\u5F0F`));
          let I = u(`div`);
          a(i3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let L = u(`h2`);
          a(I, L), e(L, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(L, r(`# Card`));
          let re = d(`rue:component:start`), R = d(`rue:component:end`);
          a(I, re), a(I, R), l(() => {
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
              activeKey: x2.value,
              onChange: (e2) => x2.value = e2,
              className: `mb-3`
            }), I, re, R);
          });
          let ie = d(`rue:slot:start`), ae = d(`rue:slot:end`);
          a(I, ie), a(I, ae), l(() => {
            s(p(x2.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`figure`);
                  a(t5, i5);
                  let c2 = u(`img`);
                  a(i5, c2), n(c2, `src`, `https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`), n(c2, `alt`, `Shoes`);
                  let l3 = u(`div`);
                  a(t5, l3), e(l3, `card-body`);
                  let f4 = u(`h2`);
                  a(l3, f4), e(f4, `card-title`), a(f4, r(`Card Title`));
                  let p2 = u(`p`);
                  a(l3, p2), e(p2, `text-sm mt-3 mb-3`), a(p2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let h3 = u(`div`);
                  a(l3, h3), e(h3, `justify-end card-actions`);
                  let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
                  return a(h3, g2), a(h3, _2), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), h3, g2, _2), {
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
                  code: `import { Card, Button } from '@rue/design';
<Card className="bg-base-100 w-96 shadow-sm">
  <figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <Button variant="primary">Buy Now</Button>
    </div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), I, ie, ae);
          });
          let z = u(`div`);
          a(i3, z), e(z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let oe = u(`h2`);
          a(z, oe), e(oe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(oe, r(`# \u4F7F\u7528\u590D\u5408\u5B50\u7EC4\u4EF6\uFF08Card.Body/Title/Actions/Figure\uFF09`));
          let se = d(`rue:component:start`), ce = d(`rue:component:end`);
          a(z, se), a(z, ce), l(() => {
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
              activeKey: N.value,
              onChange: (e2) => N.value = e2,
              className: `mb-3`
            }), z, se, ce);
          });
          let le = d(`rue:slot:start`), ue = d(`rue:slot:end`);
          a(z, le), a(z, ue), l(() => {
            s(p(N.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5);
                  let c2 = u(`img`);
                  a(i5, c2), n(c2, `src`, `https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`), n(c2, `alt`, `Shoes`);
                  let l3 = u(`div`);
                  a(t5, l3);
                  let f4 = u(`div`);
                  a(l3, f4), a(f4, r(`Card Title`));
                  let p2 = u(`p`);
                  a(l3, p2), e(p2, `text-sm mt-3 mb-3`), a(p2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let h3 = u(`div`);
                  a(l3, h3), e(h3, `justify-end`);
                  let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
                  return a(h3, g2), a(h3, _2), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), h3, g2, _2), {
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
                  code: `import { Card, Button } from '@rue/design';
<Card className="w-96 bg-base-100 shadow-sm">
  <Card.Figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </Card.Figure>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <Card.Actions className="justify-end">
      <Button variant="primary">Buy Now</Button>
    </Card.Actions>
  </Card.Body>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), z, le, ue);
          });
          let B = u(`div`);
          a(i3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let de = u(`h2`);
          a(B, de), e(de, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(de, r(`# Pricing Card`));
          let fe = d(`rue:component:start`), pe = d(`rue:component:end`);
          a(B, fe), a(B, pe), l(() => {
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
            }), B, fe, pe);
          });
          let me = d(`rue:slot:start`), he = d(`rue:slot:end`);
          a(B, me), a(B, he), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              return a(t4, i4), a(t4, f4), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5), e(i5, `card-body`);
                  let c2 = u(`span`);
                  a(i5, c2), e(c2, `badge badge-xs badge-warning`), a(c2, r(`Most Popular`));
                  let f5 = u(`div`);
                  a(i5, f5), e(f5, `flex justify-between`);
                  let p2 = u(`h2`);
                  a(f5, p2), e(p2, `text-3xl font-bold`), a(p2, r(`Premium`));
                  let h3 = u(`span`);
                  a(f5, h3), e(h3, `text-xl`), a(h3, r(`$29/mo`));
                  let g2 = u(`ul`);
                  a(i5, g2), e(g2, `mt-6 flex flex-col gap-2 text-xs`);
                  let _2 = u(`li`);
                  a(g2, _2);
                  let y2 = u(`svg`);
                  a(_2, y2), n(y2, `xmlns`, `http://www.w3.org/2000/svg`), e(y2, `size-4 me-2 inline-block text-success`), n(y2, `fill`, `none`), n(y2, `viewBox`, `0 0 24 24`), n(y2, `stroke`, `currentColor`);
                  let b2 = u(`path`);
                  a(y2, b2), n(b2, `strokeLinecap`, `round`), n(b2, `strokeLinejoin`, `round`), n(b2, `strokeWidth`, `2`), n(b2, `d`, `M5 13l4 4L19 7`);
                  let x3 = u(`span`);
                  a(_2, x3), a(x3, r(`High-resolution image generation`));
                  let S2 = u(`li`);
                  a(g2, S2);
                  let C2 = u(`svg`);
                  a(S2, C2), n(C2, `xmlns`, `http://www.w3.org/2000/svg`), e(C2, `size-4 me-2 inline-block text-success`), n(C2, `fill`, `none`), n(C2, `viewBox`, `0 0 24 24`), n(C2, `stroke`, `currentColor`);
                  let w2 = u(`path`);
                  a(C2, w2), n(w2, `strokeLinecap`, `round`), n(w2, `strokeLinejoin`, `round`), n(w2, `strokeWidth`, `2`), n(w2, `d`, `M5 13l4 4L19 7`);
                  let ee2 = u(`span`);
                  a(S2, ee2), a(ee2, r(`Customizable style templates`));
                  let T2 = u(`li`);
                  a(g2, T2);
                  let E2 = u(`svg`);
                  a(T2, E2), n(E2, `xmlns`, `http://www.w3.org/2000/svg`), e(E2, `size-4 me-2 inline-block text-success`), n(E2, `fill`, `none`), n(E2, `viewBox`, `0 0 24 24`), n(E2, `stroke`, `currentColor`);
                  let D2 = u(`path`);
                  a(E2, D2), n(D2, `strokeLinecap`, `round`), n(D2, `strokeLinejoin`, `round`), n(D2, `strokeWidth`, `2`), n(D2, `d`, `M5 13l4 4L19 7`);
                  let te2 = u(`span`);
                  a(T2, te2), a(te2, r(`Batch processing capabilities`));
                  let O2 = u(`li`);
                  a(g2, O2);
                  let k2 = u(`svg`);
                  a(O2, k2), n(k2, `xmlns`, `http://www.w3.org/2000/svg`), e(k2, `size-4 me-2 inline-block text-success`), n(k2, `fill`, `none`), n(k2, `viewBox`, `0 0 24 24`), n(k2, `stroke`, `currentColor`);
                  let A2 = u(`path`);
                  a(k2, A2), n(A2, `strokeLinecap`, `round`), n(A2, `strokeLinejoin`, `round`), n(A2, `strokeWidth`, `2`), n(A2, `d`, `M5 13l4 4L19 7`);
                  let ne2 = u(`span`);
                  a(O2, ne2), a(ne2, r(`AI-driven image enhancements`));
                  let j2 = u(`li`);
                  a(g2, j2), e(j2, `opacity-50`);
                  let M2 = u(`svg`);
                  a(j2, M2), n(M2, `xmlns`, `http://www.w3.org/2000/svg`), e(M2, `size-4 me-2 inline-block text-base-content/50`), n(M2, `fill`, `none`), n(M2, `viewBox`, `0 0 24 24`), n(M2, `stroke`, `currentColor`);
                  let N2 = u(`path`);
                  a(M2, N2), n(N2, `strokeLinecap`, `round`), n(N2, `strokeLinejoin`, `round`), n(N2, `strokeWidth`, `2`), n(N2, `d`, `M5 13l4 4L19 7`);
                  let P2 = u(`span`);
                  a(j2, P2), e(P2, `line-through`), a(P2, r(`Seamless cloud integration`));
                  let F2 = u(`li`);
                  a(g2, F2), e(F2, `opacity-50`);
                  let I2 = u(`svg`);
                  a(F2, I2), n(I2, `xmlns`, `http://www.w3.org/2000/svg`), e(I2, `size-4 me-2 inline-block text-base-content/50`), n(I2, `fill`, `none`), n(I2, `viewBox`, `0 0 24 24`), n(I2, `stroke`, `currentColor`);
                  let L2 = u(`path`);
                  a(I2, L2), n(L2, `strokeLinecap`, `round`), n(L2, `strokeLinejoin`, `round`), n(L2, `strokeWidth`, `2`), n(L2, `d`, `M5 13l4 4L19 7`);
                  let re2 = u(`span`);
                  a(F2, re2), e(re2, `line-through`), a(re2, r(`Real-time collaboration tools`));
                  let R2 = u(`div`);
                  a(i5, R2), e(R2, `mt-6`);
                  let ie2 = d(`rue:component:start`), ae2 = d(`rue:component:end`);
                  return a(R2, ie2), a(R2, ae2), l(() => {
                    s(m(v, {
                      variant: `primary`,
                      block: true,
                      children: `Subscribe`
                    }), R2, ie2, ae2);
                  }), {
                    vaporElement: t5
                  };
                })
              }), t4, i4, f4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Card className="w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Premium</h2>
      <span className="text-xl">$29/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>High-resolution image generation</span></li>
      <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>Customizable style templates</span></li>
      <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>Batch processing capabilities</span></li>
      <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>AI-driven image enhancements</span></li>
      <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span className="line-through">Seamless cloud integration</span></li>
      <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span className="line-through">Real-time collaboration tools</span></li>
    </ul>
    <div className="mt-6">
      <Button variant="primary" block>Subscribe</Button>
    </div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), B, me, he);
          });
          let V = u(`div`);
          a(i3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ge = u(`h2`);
          a(V, ge), e(ge, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(ge, r(`# Card sizes`));
          let _e = d(`rue:component:start`), ve = d(`rue:component:end`);
          a(V, _e), a(V, ve), l(() => {
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
            }), V, _e, ve);
          });
          let ye = d(`rue:slot:start`), be = d(`rue:slot:end`);
          a(V, ye), a(V, be), l(() => {
            s(p(C.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `grid gap-6`);
              let i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, i4), a(n2, l2), s(m(y, {
                size: `xs`,
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Xsmall Card`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l3 = u(`div`);
                  a(n3, l3), e(l3, `justify-end card-actions`);
                  let f5 = d(`rue:component:start`), p3 = d(`rue:component:end`);
                  return a(l3, f5), a(l3, p3), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), l3, f5, p3), {
                    vaporElement: t5
                  };
                })
              }), n2, i4, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(n2, f4), a(n2, p2), s(m(y, {
                size: `sm`,
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Small Card`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l3 = u(`div`);
                  a(n3, l3), e(l3, `justify-end card-actions`);
                  let f5 = d(`rue:component:start`), p3 = d(`rue:component:end`);
                  return a(l3, f5), a(l3, p3), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), l3, f5, p3), {
                    vaporElement: t5
                  };
                })
              }), n2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              a(n2, h3), a(n2, g2), s(m(y, {
                size: `md`,
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Medium Card`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l3 = u(`div`);
                  a(n3, l3), e(l3, `justify-end card-actions`);
                  let f5 = d(`rue:component:start`), p3 = d(`rue:component:end`);
                  return a(l3, f5), a(l3, p3), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), l3, f5, p3), {
                    vaporElement: t5
                  };
                })
              }), n2, h3, g2);
              let _2 = d(`rue:component:start`), b2 = d(`rue:component:end`);
              a(n2, _2), a(n2, b2), s(m(y, {
                size: `lg`,
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Large Card`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l3 = u(`div`);
                  a(n3, l3), e(l3, `justify-end card-actions`);
                  let f5 = d(`rue:component:start`), p3 = d(`rue:component:end`);
                  return a(l3, f5), a(l3, p3), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), l3, f5, p3), {
                    vaporElement: t5
                  };
                })
              }), n2, _2, b2);
              let x3 = d(`rue:component:start`), S2 = d(`rue:component:end`);
              return a(n2, x3), a(n2, S2), s(m(y, {
                size: `xl`,
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Xlarge Card`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l3 = u(`div`);
                  a(n3, l3), e(l3, `justify-end card-actions`);
                  let f5 = d(`rue:component:start`), p3 = d(`rue:component:end`);
                  return a(l3, f5), a(l3, p3), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), l3, f5, p3), {
                    vaporElement: t5
                  };
                })
              }), n2, x3, S2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Card size="xs" className="w-96 bg-base-100 shadow-sm"><div className="card-body"><h2 className="card-title">Xsmall Card</h2><p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p><div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div></div></Card>
<Card size="sm" className="w-96 bg-base-100 shadow-sm"><div className="card-body"><h2 className="card-title">Small Card</h2><p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p><div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div></div></Card>
<Card size="md" className="w-96 bg-base-100 shadow-sm"><div className="card-body"><h2 className="card-title">Medium Card</h2><p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p><div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div></div></Card>
<Card size="lg" className="w-96 bg-base-100 shadow-sm"><div className="card-body"><h2 className="card-title">Large Card</h2><p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p><div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div></div></Card>
<Card size="xl" className="w-96 bg-base-100 shadow-sm"><div className="card-body"><h2 className="card-title">Xlarge Card</h2><p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p><div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div></div></Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), V, ye, be);
          });
          let H = u(`div`);
          a(i3, H), e(H, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let xe = u(`h2`);
          a(H, xe), e(xe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(xe, r(`# Card with a card-border`));
          let Se = d(`rue:component:start`), Ce = d(`rue:component:end`);
          a(H, Se), a(H, Ce), l(() => {
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
            }), H, Se, Ce);
          });
          let we = d(`rue:slot:start`), Te = d(`rue:slot:end`);
          a(H, we), a(H, Te), l(() => {
            s(p(w.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(t4, n2), a(t4, i4);
              let f4 = c(() => {
                let t5 = o(), n3 = u(`div`);
                a(t5, n3), e(n3, `card-body`);
                let i5 = u(`h2`);
                a(n3, i5), e(i5, `card-title`), a(i5, r(`Card Title`));
                let c2 = u(`p`);
                a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                let l2 = u(`div`);
                a(n3, l2), e(l2, `justify-end card-actions`);
                let f5 = d(`rue:component:start`), p2 = d(`rue:component:end`);
                return a(l2, f5), a(l2, p2), s(m(v, {
                  variant: `primary`,
                  children: `Buy Now`
                }), l2, f5, p2), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(y, {
                  border: true,
                  className: `w-96 bg-base-100`,
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
                  code: `<Card border className="bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), H, we, Te);
          });
          let U = u(`div`);
          a(i3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ee = u(`h2`);
          a(U, Ee), e(Ee, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Ee, r(`# Card with a dash border`));
          let De = d(`rue:component:start`), Oe = d(`rue:component:end`);
          a(U, De), a(U, Oe), l(() => {
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
            }), U, De, Oe);
          });
          let ke = d(`rue:slot:start`), Ae = d(`rue:slot:end`);
          a(U, ke), a(U, Ae), l(() => {
            s(p(ee.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              a(t4, n2), a(t4, i4);
              let f4 = c(() => {
                let t5 = o(), n3 = u(`div`);
                a(t5, n3), e(n3, `card-body`);
                let i5 = u(`h2`);
                a(n3, i5), e(i5, `card-title`), a(i5, r(`Card Title`));
                let c2 = u(`p`);
                a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                let l2 = u(`div`);
                a(n3, l2), e(l2, `justify-end card-actions`);
                let f5 = d(`rue:component:start`), p2 = d(`rue:component:end`);
                return a(l2, f5), a(l2, p2), s(m(v, {
                  variant: `primary`,
                  children: `Buy Now`
                }), l2, f5, p2), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(y, {
                  dash: true,
                  className: `w-96 bg-base-100`,
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
                  code: `<Card dash className="bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), U, ke, Ae);
          });
          let W = u(`div`);
          a(i3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let je = u(`h2`);
          a(W, je), e(je, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(je, r(`# Card with badge`));
          let Me = d(`rue:component:start`), Ne = d(`rue:component:end`);
          a(W, Me), a(W, Ne), l(() => {
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
            }), W, Me, Ne);
          });
          let Pe = d(`rue:slot:start`), Fe = d(`rue:slot:end`);
          a(W, Pe), a(W, Fe), l(() => {
            s(p(T.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              return a(t4, i4), a(t4, f4), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`figure`);
                  a(t5, i5);
                  let c2 = u(`img`);
                  a(i5, c2), n(c2, `src`, `https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`), n(c2, `alt`, `Shoes`);
                  let f5 = u(`div`);
                  a(t5, f5), e(f5, `card-body`);
                  let p2 = u(`h2`);
                  a(f5, p2), e(p2, `card-title`), a(p2, r(`Card Title`));
                  let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
                  a(p2, h3), a(p2, g2), s(m(b, {
                    variant: `secondary`,
                    children: `NEW`
                  }), p2, h3, g2);
                  let _2 = u(`p`);
                  a(f5, _2), e(_2, `text-sm mt-3 mb-3`), a(_2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let v2 = u(`div`);
                  a(f5, v2), e(v2, `justify-end card-actions`);
                  let y2 = d(`rue:component:start`), x3 = d(`rue:component:end`);
                  a(v2, y2), a(v2, x3), l(() => {
                    s(m(b, {
                      outline: true,
                      children: `Fashion`
                    }), v2, y2, x3);
                  });
                  let S2 = d(`rue:component:start`), C2 = d(`rue:component:end`);
                  return a(v2, S2), a(v2, C2), l(() => {
                    s(m(b, {
                      outline: true,
                      children: `Products`
                    }), v2, S2, C2);
                  }), {
                    vaporElement: t5
                  };
                })
              }), t4, i4, f4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Card className="bg-base-100 w-96 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Card Title <div className="badge badge-secondary">NEW</div></h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), W, Pe, Fe);
          });
          let G = u(`div`);
          a(i3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ie = u(`h2`);
          a(G, Ie), e(Ie, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Ie, r(`# Card with bottom image`));
          let Le = d(`rue:component:start`), Re = d(`rue:component:end`);
          a(G, Le), a(G, Re), l(() => {
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
            }), G, Le, Re);
          });
          let ze = d(`rue:slot:start`), Be = d(`rue:slot:end`);
          a(G, ze), a(G, Be), l(() => {
            s(p(E.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5), e(i5, `card-body`);
                  let s2 = u(`h2`);
                  a(i5, s2), e(s2, `card-title`), a(s2, r(`Card Title`));
                  let c2 = u(`p`);
                  a(i5, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l3 = u(`figure`);
                  a(t5, l3);
                  let d2 = u(`img`);
                  return a(l3, d2), n(d2, `src`, `https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`), n(d2, `alt`, `Shoes`), {
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
                  code: `<Card className="bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), G, ze, Be);
          });
          let K = u(`div`);
          a(i3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ve = u(`h2`);
          a(K, Ve), e(Ve, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Ve, r(`# Card with centered content and paddings`));
          let He = d(`rue:component:start`), Ue = d(`rue:component:end`);
          a(K, He), a(K, Ue), l(() => {
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
            }), K, He, Ue);
          });
          let We = d(`rue:slot:start`), Ge = d(`rue:slot:end`);
          a(K, We), a(K, Ge), l(() => {
            s(p(D.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`figure`);
                  a(t5, i5), e(i5, `px-10 pt-10`);
                  let c2 = u(`img`);
                  a(i5, c2), n(c2, `src`, `https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`), n(c2, `alt`, `Shoes`), e(c2, `rounded-box`);
                  let l3 = u(`div`);
                  a(t5, l3), e(l3, `card-body items-center text-center`);
                  let f4 = u(`h2`);
                  a(l3, f4), e(f4, `card-title`), a(f4, r(`Card Title`));
                  let p2 = u(`p`);
                  a(l3, p2), e(p2, `text-sm mt-3 mb-3`), a(p2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let h3 = u(`div`);
                  a(l3, h3), e(h3, `card-actions`);
                  let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
                  return a(h3, g2), a(h3, _2), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), h3, g2, _2), {
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
                  code: `<Card className="bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <Button variant="primary">Buy Now</Button>
    </div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), K, We, Ge);
          });
          let q = u(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ke = u(`h2`);
          a(q, Ke), e(Ke, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Ke, r(`# Card with image overlay`));
          let qe = d(`rue:component:start`), Je = d(`rue:component:end`);
          a(q, qe), a(q, Je), l(() => {
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
            }), q, qe, Je);
          });
          let Ye = d(`rue:slot:start`), Xe = d(`rue:slot:end`);
          a(q, Ye), a(q, Xe), l(() => {
            s(p(te.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              a(t4, i4), a(t4, f4);
              let p2 = c(() => {
                let t5 = o(), i5 = u(`figure`);
                a(t5, i5);
                let c2 = u(`img`);
                a(i5, c2), n(c2, `src`, `https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`), n(c2, `alt`, `Shoes`);
                let l2 = u(`div`);
                a(t5, l2), e(l2, `card-body`);
                let f5 = u(`h2`);
                a(l2, f5), e(f5, `card-title`), a(f5, r(`Card Title`));
                let p3 = u(`p`);
                a(l2, p3), e(p3, `text-sm mt-3 mb-3`), a(p3, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                let h3 = u(`div`);
                a(l2, h3), e(h3, `justify-end card-actions`);
                let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
                return a(h3, g2), a(h3, _2), s(m(v, {
                  variant: `primary`,
                  children: `Buy Now`
                }), h3, g2, _2), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(y, {
                  imageFull: true,
                  className: `w-96 bg-base-100 shadow-sm`,
                  children: p2
                }), t4, i4, f4);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Card imageFull className="bg-base-100 w-96 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, Ye, Xe);
          });
          let J = u(`div`);
          a(i3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ze = u(`h2`);
          a(J, Ze), e(Ze, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Ze, r(`# Card with no image`));
          let Qe = d(`rue:component:start`), $e = d(`rue:component:end`);
          a(J, Qe), a(J, $e), l(() => {
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
            }), J, Qe, $e);
          });
          let et = d(`rue:slot:start`), tt = d(`rue:slot:end`);
          a(J, et), a(J, tt), l(() => {
            s(p(O.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Card title!`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l2 = u(`div`);
                  a(n3, l2), e(l2, `justify-end card-actions`);
                  let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
                  return a(l2, f4), a(l2, p2), s(m(v, {
                    variant: `primary`,
                    children: `Buy Now`
                  }), l2, f4, p2), {
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
                  code: `<Card className="bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end"><Button variant="primary">Buy Now</Button></div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), J, et, tt);
          });
          let Y = u(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let nt = u(`h2`);
          a(Y, nt), e(nt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(nt, r(`# Card with custom color`));
          let rt = d(`rue:component:start`), it = d(`rue:component:end`);
          a(Y, rt), a(Y, it), l(() => {
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
            }), Y, rt, it);
          });
          let at = d(`rue:slot:start`), ot = d(`rue:slot:end`);
          a(Y, at), a(Y, ot), l(() => {
            s(p(k.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(y, {
                className: `w-96 bg-primary text-primary-content`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Card title!`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`A card component has a figure, a body part, and inside body there are title and actions parts`));
                  let l2 = u(`div`);
                  a(n3, l2), e(l2, `justify-end card-actions`);
                  let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
                  return a(l2, f4), a(l2, p2), s(m(v, {
                    children: `Buy Now`
                  }), l2, f4, p2), {
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
                  code: `<Card className="bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p className="text-sm mt-3 mb-3">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end"><Button>Buy Now</Button></div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Y, at, ot);
          });
          let X = u(`div`);
          a(i3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let st = u(`h2`);
          a(X, st), e(st, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(st, r(`# Centered card with neutral color`));
          let ct = d(`rue:component:start`), lt = d(`rue:component:end`);
          a(X, ct), a(X, lt), l(() => {
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
              activeKey: A.value,
              onChange: (e2) => A.value = e2,
              className: `mb-3`
            }), X, ct, lt);
          });
          let ut = d(`rue:slot:start`), dt = d(`rue:slot:end`);
          a(X, ut), a(X, dt), l(() => {
            s(p(A.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(y, {
                className: `w-96 bg-neutral text-neutral-content`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `card-body items-center text-center`);
                  let i5 = u(`h2`);
                  a(n3, i5), e(i5, `card-title`), a(i5, r(`Cookies!`));
                  let c2 = u(`p`);
                  a(n3, c2), e(c2, `text-sm mt-3 mb-3`), a(c2, r(`We are using cookies for no reason.`));
                  let l2 = u(`div`);
                  a(n3, l2), e(l2, `justify-end card-actions`);
                  let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
                  a(l2, f4), a(l2, p2), s(m(v, {
                    variant: `primary`,
                    children: `Accept`
                  }), l2, f4, p2);
                  let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
                  return a(l2, h3), a(l2, g2), s(m(v, {
                    variant: `ghost`,
                    children: `Deny`
                  }), l2, h3, g2), {
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
                  code: `<Card className="bg-neutral text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cookies!</h2>
    <p className="text-sm mt-3 mb-3">We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      <Button variant="primary">Accept</Button>
      <Button variant="ghost">Deny</Button>
    </div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), X, ut, dt);
          });
          let Z = u(`div`);
          a(i3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ft = u(`h2`);
          a(Z, ft), e(ft, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(ft, r(`# Card with action on top`));
          let pt = d(`rue:component:start`), mt = d(`rue:component:end`);
          a(Z, pt), a(Z, mt), l(() => {
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
              activeKey: ne.value,
              onChange: (e2) => ne.value = e2,
              className: `mb-3`
            }), Z, pt, mt);
          });
          let ht = d(`rue:slot:start`), gt = d(`rue:slot:end`);
          a(Z, ht), a(Z, gt), l(() => {
            s(p(ne.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              return a(t4, i4), a(t4, f4), s(m(y, {
                className: `w-96 bg-base-100 shadow-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5), e(i5, `card-body`);
                  let f5 = u(`div`);
                  a(i5, f5), e(f5, `justify-end card-actions`);
                  let p2 = d(`rue:component:start`), h3 = d(`rue:component:end`);
                  a(f5, p2), a(f5, h3);
                  let g2 = c(() => {
                    let t6 = o(), r2 = u(`svg`);
                    a(t6, r2), n(r2, `xmlns`, `http://www.w3.org/2000/svg`), e(r2, `h-6 w-6`), n(r2, `fill`, `none`), n(r2, `viewBox`, `0 0 24 24`), n(r2, `stroke`, `currentColor`);
                    let i6 = u(`path`);
                    return a(r2, i6), n(i6, `strokeLinecap`, `round`), n(i6, `strokeLinejoin`, `round`), n(i6, `strokeWidth`, `2`), n(i6, `d`, `M6 18L18 6M6 6l12 12`), {
                      vaporElement: t6
                    };
                  });
                  l(() => {
                    s(m(v, {
                      square: true,
                      size: `sm`,
                      children: g2
                    }), f5, p2, h3);
                  });
                  let _2 = u(`p`);
                  return a(i5, _2), e(_2, `text-sm mt-3 mb-3`), a(_2, r(`We are using cookies for no reason.`)), {
                    vaporElement: t5
                  };
                })
              }), t4, i4, f4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Card className="bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <div className="card-actions justify-end">
      <Button square size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
    </div>
    <p className="text-sm mt-3 mb-3">We are using cookies for no reason.</p>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Z, ht, gt);
          });
          let Q = u(`div`);
          a(i3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let _t = u(`h2`);
          a(Q, _t), e(_t, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(_t, r(`# Card with image on side`));
          let vt = d(`rue:component:start`), yt = d(`rue:component:end`);
          a(Q, vt), a(Q, yt), l(() => {
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
              activeKey: j.value,
              onChange: (e2) => j.value = e2,
              className: `mb-3`
            }), Q, vt, yt);
          });
          let bt = d(`rue:slot:start`), xt = d(`rue:slot:end`);
          a(Q, bt), a(Q, xt), l(() => {
            s(p(j.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              a(t4, i4), a(t4, f4);
              let p2 = c(() => {
                let t5 = o(), i5 = u(`figure`);
                a(t5, i5);
                let c2 = u(`img`);
                a(i5, c2), n(c2, `src`, `https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`), n(c2, `alt`, `Movie`);
                let l2 = u(`div`);
                a(t5, l2), e(l2, `card-body`);
                let f5 = u(`h2`);
                a(l2, f5), e(f5, `card-title`), a(f5, r(`New movie is released!`));
                let p3 = u(`p`);
                a(l2, p3), e(p3, `text-sm mt-3 mb-3`), a(p3, r(`Click the button to watch on Jetflix app.`));
                let h3 = u(`div`);
                a(l2, h3), e(h3, `justify-end card-actions`);
                let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
                return a(h3, g2), a(h3, _2), s(m(v, {
                  variant: `primary`,
                  children: `Watch`
                }), h3, g2, _2), {
                  vaporElement: t5
                };
              });
              return l(() => {
                s(m(y, {
                  side: true,
                  className: `bg-base-100 shadow-sm`,
                  children: p2
                }), t4, i4, f4);
              }), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Card side className="bg-base-100 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" /></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p className="text-sm mt-3 mb-3">Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end"><Button variant="primary">Watch</Button></div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Q, bt, xt);
          });
          let $ = u(`div`);
          a(i3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let St = u(`h2`);
          a($, St), e(St, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(St, r(`# Responsive card (vertical on small screen, horizontal on large screen)`));
          let Ct = d(`rue:component:start`), wt = d(`rue:component:end`);
          a($, Ct), a($, wt), l(() => {
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
              activeKey: M.value,
              onChange: (e2) => M.value = e2,
              className: `mb-3`
            }), $, Ct, wt);
          });
          let Tt = d(`rue:slot:start`), Et = d(`rue:slot:end`);
          return a($, Tt), a($, Et), l(() => {
            s(p(M.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(y, {
                className: `bg-base-100 shadow-sm lg:card-side`,
                children: c(() => {
                  let t5 = o(), i5 = u(`figure`);
                  a(t5, i5);
                  let c2 = u(`img`);
                  a(i5, c2), n(c2, `src`, `https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp`), n(c2, `alt`, `Album`);
                  let l3 = u(`div`);
                  a(t5, l3), e(l3, `card-body`);
                  let f4 = u(`h2`);
                  a(l3, f4), e(f4, `card-title`), a(f4, r(`New album is released!`));
                  let p2 = u(`p`);
                  a(l3, p2), e(p2, `text-sm mt-3 mb-3`), a(p2, r(`Click the button to listen on Spotiwhy app.`));
                  let h3 = u(`div`);
                  a(l3, h3), e(h3, `justify-end card-actions`);
                  let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
                  return a(h3, g2), a(h3, _2), s(m(v, {
                    variant: `primary`,
                    children: `Listen`
                  }), h3, g2, _2), {
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
                  code: `<Card className="lg:card-side bg-base-100 shadow-sm">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" /></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p className="text-sm mt-3 mb-3">Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end"><Button variant="primary">Listen</Button></div>
  </div>
</Card>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), $, Tt, Et);
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
  x as default
};

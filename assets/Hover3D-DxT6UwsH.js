import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, t as u, x as d, y as f, z as p, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as m, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as h, s as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as b, __tla as __tla_6 } from "./card-D8ypHBPA.js";
let C;
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
  let x, S;
  x = () => g(u, {
    children: [
      h(`div`, {}),
      h(`div`, {}),
      h(`div`, {}),
      h(`div`, {}),
      h(`div`, {}),
      h(`div`, {}),
      h(`div`, {}),
      h(`div`, {})
    ]
  });
  S = ({ as: e2 = `div`, href: t2, className: n2, overlays: r2 = true, children: i2 }) => {
    let a2 = n2 ? `hover-3d ${n2}` : `hover-3d`;
    return e2 === `a` ? g(`a`, {
      href: t2,
      className: a2,
      children: [
        i2,
        r2 ? h(x, {}) : null
      ]
    }) : g(`div`, {
      className: a2,
      children: [
        i2,
        r2 ? h(x, {}) : null
      ]
    });
  };
  C = () => {
    let { tabImage: u2, tabCard: g2, tabGallery: x2 } = t(`useSetup:0:0`, () => i(() => ({
      tabImage: t(`ref:1:0`, () => p(`preview`)),
      tabCard: t(`ref:1:1`, () => p(`preview`)),
      tabGallery: t(`ref:1:2`, () => p(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = f(`rue:component:start`), p2 = f(`rue:component:end`);
      return a(t2, i2), a(t2, p2), s(h(_, {
        children: c(() => {
          let t3 = o(), i3 = d(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let p3 = d(`h1`);
          a(i3, p3), a(p3, r(`Hover 3D \u60AC\u6D6E 3D`));
          let _2 = d(`p`);
          a(i3, _2), e(_2, `text-sm mt-3 mb-3`), a(_2, r(`Hover 3D \u662F\u4E00\u4E2A\u5305\u88F9\u7EC4\u4EF6\uFF0C\u5728\u60AC\u6D6E\u65F6\u6839\u636E\u9F20\u6807\u4F4D\u7F6E\u4EA7\u751F\u503E\u659C\u4E0E\u65CB\u8F6C\u7684 3D \u6548\u679C\u3002`));
          let C2 = d(`div`);
          a(i3, C2), e(C2, `text-sm`);
          let w = d(`a`);
          a(C2, w), n(w, `href`, `https://daisyui.com/components/hover-3d/`), n(w, `target`, `_blank`), a(w, r(`\u67E5\u770B Hover-3D \u9759\u6001\u6837\u5F0F`));
          let T = d(`div`);
          a(i3, T), e(T, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let E = d(`h2`);
          a(T, E), e(E, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(E, r(`# 3D image hover effect`));
          let D = d(`p`);
          a(T, D), e(D, `text-sm mt-3 mb-3`), a(D, r(`Hover to see the 3D effect`));
          let O = f(`rue:component:start`), k = f(`rue:component:end`);
          a(T, O), a(T, k), l(() => {
            s(h(v, {
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
              activeKey: u2.value,
              onChange: (e2) => u2.value = e2,
              className: `mb-3`
            }), T, O, k);
          });
          let A = f(`rue:slot:start`), j = f(`rue:slot:end`);
          a(T, A), a(T, j), l(() => {
            s(m(u2.value === `preview` ? c(() => {
              let t4 = o(), r2 = f(`rue:component:start`), i4 = f(`rue:component:end`);
              return a(t4, r2), a(t4, i4), s(h(S, {
                className: `my-12 mx-2`,
                children: c(() => {
                  let t5 = o(), r3 = d(`figure`);
                  a(t5, r3), e(r3, `max-w-100 rounded-2xl`);
                  let i5 = d(`img`);
                  return a(r3, i5), n(i5, `src`, `https://img.daisyui.com/images/stock/creditcard.webp`), n(i5, `alt`, `Tailwind CSS 3D card`), {
                    vaporElement: t5
                  };
                })
              }), t4, r2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Hover3D>
  <figure className="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
</Hover3D>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), T, A, j);
          });
          let M = d(`div`);
          a(i3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = d(`h2`);
          a(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(N, r(`# 3D card hover effect`));
          let P = d(`p`);
          a(M, P), e(P, `text-sm mt-3 mb-3`), a(P, r(`The whole card can be a link`));
          let F = f(`rue:component:start`), I = f(`rue:component:end`);
          a(M, F), a(M, I), l(() => {
            s(h(v, {
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
              activeKey: g2.value,
              onChange: (e2) => g2.value = e2,
              className: `mb-3`
            }), M, F, I);
          });
          let L = f(`rue:slot:start`), R = f(`rue:slot:end`);
          a(M, L), a(M, R), l(() => {
            s(m(g2.value === `preview` ? c(() => {
              let t4 = o(), n2 = f(`rue:component:start`), i4 = f(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(h(S, {
                as: `a`,
                href: `#`,
                className: `my-12 mx-2 cursor-pointer`,
                children: c(() => {
                  let t5 = o(), n3 = f(`rue:component:start`), i5 = f(`rue:component:end`);
                  return a(t5, n3), a(t5, i5), s(h(b, {
                    className: `w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]`,
                    children: c(() => {
                      let t6 = o(), n4 = d(`div`);
                      a(t6, n4), e(n4, `card-body font-mono`);
                      let i6 = d(`div`);
                      a(n4, i6), e(i6, `flex justify-between mb-10`);
                      let s2 = d(`div`);
                      a(i6, s2), e(s2, `font-bold`), a(s2, r(`BANK OF LATVERIA`));
                      let c2 = d(`div`);
                      a(i6, c2), e(c2, `text-5xl opacity-10`), a(c2, r(`\u2741`));
                      let l2 = d(`div`);
                      a(n4, l2), e(l2, `text-lg mb-4 opacity-40`), a(l2, r(`0210 8820 1150 0222`));
                      let u3 = d(`div`);
                      a(n4, u3), e(u3, `flex justify-between`);
                      let f2 = d(`div`);
                      a(u3, f2);
                      let p4 = d(`div`);
                      a(f2, p4), e(p4, `text-xs opacity-20`), a(p4, r(`CARD HOLDER`));
                      let m2 = d(`div`);
                      a(f2, m2), a(m2, r(`VICTOR VON D.`));
                      let h2 = d(`div`);
                      a(u3, h2);
                      let g3 = d(`div`);
                      a(h2, g3), e(g3, `text-xs opacity-20`), a(g3, r(`EXPIRES`));
                      let _3 = d(`div`);
                      return a(h2, _3), a(_3, r(`29/08`)), {
                        vaporElement: t6
                      };
                    })
                  }), t5, n3, i5), {
                    vaporElement: t5
                  };
                })
              }), t4, n2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Hover3D as="a" href="#" className="my-12 mx-2 cursor-pointer">
  <Card className="w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div className="card-body font-mono">
      <div className="flex justify-between mb-10">
        <div className="font-bold">BANK OF LATVERIA</div>
        <div className="text-5xl opacity-10">\u2741</div>
      </div>
      <div className="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
      <div className="flex justify-between">
        <div>
          <div className="text-xs opacity-20">CARD HOLDER</div>
          <div>VICTOR VON D.</div>
        </div>
        <div>
          <div className="text-xs opacity-20">EXPIRES</div>
          <div>29/08</div>
        </div>
      </div>
    </div>
  </Card>
</Hover3D>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), M, L, R);
          });
          let z = d(`div`);
          a(i3, z), e(z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let B = d(`h2`);
          a(z, B), e(B, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(B, r(`# 3D hover effect for image gallery`));
          let V = d(`p`);
          a(z, V), e(V, `text-sm mt-3 mb-3`), a(V, r(`Hover to see the 3D effect`));
          let H = f(`rue:component:start`), U = f(`rue:component:end`);
          a(z, H), a(z, U), l(() => {
            s(h(v, {
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
            }), z, H, U);
          });
          let W = f(`rue:slot:start`), G = f(`rue:slot:end`);
          return a(z, W), a(z, G), l(() => {
            s(m(x2.value === `preview` ? c(() => {
              let t4 = o(), r2 = d(`div`);
              a(t4, r2), e(r2, `flex max-sm:flex-col gap-10 p-10 max-sm:w-70`);
              let i4 = f(`rue:component:start`), l2 = f(`rue:component:end`);
              a(r2, i4), a(r2, l2), s(h(S, {
                children: c(() => {
                  let t5 = o(), r3 = d(`figure`);
                  a(t5, r3), e(r3, `rounded-xl`);
                  let i5 = d(`img`);
                  return a(r3, i5), n(i5, `src`, `https://img.daisyui.com/images/stock/card-1.webp?x`), n(i5, `alt`, `Tailwind CSS 3D card`), {
                    vaporElement: t5
                  };
                })
              }), r2, i4, l2);
              let u3 = f(`rue:component:start`), p4 = f(`rue:component:end`);
              a(r2, u3), a(r2, p4), s(h(S, {
                children: c(() => {
                  let t5 = o(), r3 = d(`figure`);
                  a(t5, r3), e(r3, `rounded-xl`);
                  let i5 = d(`img`);
                  return a(r3, i5), n(i5, `src`, `https://img.daisyui.com/images/stock/card-2.webp?x`), n(i5, `alt`, `Tailwind CSS 3D hover`), {
                    vaporElement: t5
                  };
                })
              }), r2, u3, p4);
              let m2 = f(`rue:component:start`), g3 = f(`rue:component:end`);
              return a(r2, m2), a(r2, g3), s(h(S, {
                children: c(() => {
                  let t5 = o(), r3 = d(`figure`);
                  a(t5, r3), e(r3, `rounded-xl`);
                  let i5 = d(`img`);
                  return a(r3, i5), n(i5, `src`, `https://img.daisyui.com/images/stock/card-3.webp?x`), n(i5, `alt`, `Tailwind CSS Card 3D effect`), {
                    vaporElement: t5
                  };
                })
              }), r2, m2, g3), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex max-sm:flex-col gap-10 p-10 max-sm:w-70">
  <Hover3D>
    <figure className="rounded-2xl w-60">
      <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
    </figure>
  </Hover3D>
  <Hover3D>
    <figure className="rounded-2xl w-60">
      <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
    </figure>
  </Hover3D>
  <Hover3D>
    <figure className="rounded-2xl w-60">
      <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
    </figure>
  </Hover3D>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), z, W, G);
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
  C as default
};

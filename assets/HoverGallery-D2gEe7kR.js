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
  v = ({ as: e2 = `figure`, className: t2, children: n2, items: r2 }) => {
    let i2 = `hover-gallery`;
    t2 && (i2 += ` ${t2}`);
    let a2 = r2 && r2.length ? r2.map((e3, t3) => {
      if (typeof e3 == `string`) return m(`img`, {
        src: e3,
        alt: ``
      }, t3);
      if (e3 && typeof e3 == `object`) {
        let n3 = e3;
        if (n3.node) return n3.node;
        if (n3.src) return m(`img`, {
          src: n3.src,
          alt: n3.alt ?? ``,
          className: n3.className
        }, t3);
      }
      return e3;
    }) : n2;
    return m(e2 === `figure` ? `figure` : `div`, {
      className: i2,
      children: a2
    });
  };
  y = () => {
    let { tabHow: y2, tabBasic: b, tabInCard: x, tabArray: S, galleryItems: C } = t(`useSetup:0:0`, () => i(() => ({
      tabHow: t(`ref:1:0`, () => f(`preview`)),
      tabBasic: t(`ref:1:1`, () => f(`preview`)),
      tabInCard: t(`ref:1:2`, () => f(`preview`)),
      tabArray: t(`ref:1:3`, () => f(`preview`)),
      galleryItems: [
        `https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,
        {
          src: `https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,
          alt: `Tailwind CSS image hover gallery`
        },
        {
          node: m(`img`, {
            src: `https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,
            alt: `Tailwind CSS image hover gallery`
          })
        },
        `https://img.daisyui.com/images/stock/daisyui-hat-4.webp`
      ]
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Hover Gallery \u60AC\u6D6E\u753B\u5ECA`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`\u5BB9\u5668\u5305\u542B\u591A\u5F20\u56FE\u7247\uFF0C\u9ED8\u8BA4\u663E\u793A\u7B2C\u4E00\u5F20\uFF0C\u6C34\u5E73\u60AC\u505C\u65F6\u663E\u793A\u5176\u5B83\u56FE\u7247\u3002`));
          let w = u(`div`);
          a(i3, w), e(w, `text-sm`);
          let T = u(`a`);
          a(w, T), n(T, `href`, `https://daisyui.com/components/hover-gallery/`), n(T, `target`, `_blank`), a(T, r(`\u67E5\u770B Hover Gallery \u9759\u6001\u6837\u5F0F`));
          let E = u(`div`);
          a(i3, E), e(E, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let D = u(`h2`);
          a(E, D), e(D, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(D, r(`# How it works`));
          let O = u(`p`);
          a(E, O), e(O, `text-sm mt-3 mb-3`), a(O, r(`\u7B2C\u4E00\u5F20\u56FE\u7247\u9ED8\u8BA4\u53EF\u89C1\uFF0C\u5176\u4F59\u56FE\u7247\u901A\u8FC7\u4E0D\u53EF\u89C1\u5217\u8986\u76D6\uFF0C\u60AC\u505C\u5230\u6BCF\u5217\u65F6\u663E\u793A\u5BF9\u5E94\u56FE\u7247\u3002`));
          let k = d(`rue:component:start`), A = d(`rue:component:end`);
          a(E, k), a(E, A), l(() => {
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
            }), E, k, A);
          });
          let j = d(`rue:slot:start`), M = d(`rue:slot:end`);
          a(E, j), a(E, M), l(() => {
            s(p(y2.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `flex justify-center`);
              let l2 = u(`div`);
              a(i4, l2), e(l2, `grid *:[grid-area:1/1] rounded-box overflow-hidden`);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(l2, f4), a(l2, p2), s(m(v, {
                as: `figure`,
                className: `max-w-60`,
                children: c(() => {
                  let e2 = o(), t5 = u(`img`);
                  a(e2, t5), n(t5, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-1.webp`), n(t5, `alt`, `Tailwind CSS image hover gallery`);
                  let r2 = u(`img`);
                  a(e2, r2), n(r2, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-2.webp`), n(r2, `alt`, `Tailwind CSS image hover gallery`);
                  let i5 = u(`img`);
                  a(e2, i5), n(i5, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-3.webp`), n(i5, `alt`, `Tailwind CSS image hover gallery`);
                  let s2 = u(`img`);
                  return a(e2, s2), n(s2, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-4.webp`), n(s2, `alt`, `Tailwind CSS image hover gallery`), {
                    vaporElement: e2
                  };
                })
              }), l2, f4, p2);
              let h3 = u(`div`);
              a(l2, h3), e(h3, `grid grid-cols-3 pointer-events-none font-mono *:to-black/10 *:via-transparent *:from-white/10 *:bg-linear-80 *:grid *:place-content-center text-white text-shadow-lg`);
              let g2 = u(`div`);
              a(h3, g2), a(g2, r(`2`));
              let _2 = u(`div`);
              a(h3, _2), a(_2, r(`3`));
              let y3 = u(`div`);
              return a(h3, y3), a(y3, r(`4`)), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex justify-center">
  <div className="grid *:[grid-area:1/1] rounded-box overflow-hidden">
    <HoverGallery as="figure" className="max-w-60">
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
    </HoverGallery>
    <div className="grid grid-cols-3 pointer-events-none font-mono *:to-black/10 *:via-transparent *:from-white/10 *:bg-linear-80 *:grid *:place-content-center text-white text-shadow-lg">
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), E, j, M);
          });
          let N = u(`div`);
          a(i3, N), e(N, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let P = u(`h2`);
          a(N, P), e(P, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(P, r(`# Hover Gallery`));
          let F = u(`p`);
          a(N, F), e(F, `text-sm mt-3 mb-3`), a(F, r(`\u5C06\u9F20\u6807\u6C34\u5E73\u79FB\u52A8\u5230\u56FE\u7247\u4E0A\u3002`));
          let I = d(`rue:component:start`), L = d(`rue:component:end`);
          a(N, I), a(N, L), l(() => {
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
            }), N, I, L);
          });
          let R = d(`rue:slot:start`), z = d(`rue:slot:end`);
          a(N, R), a(N, z), l(() => {
            s(p(b.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), r2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, r2), s(m(v, {
                as: `figure`,
                className: `max-w-60`,
                children: c(() => {
                  let e3 = o(), t5 = u(`img`);
                  a(e3, t5), n(t5, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-1.webp`), n(t5, `alt`, `Tailwind CSS image hover gallery`);
                  let r3 = u(`img`);
                  a(e3, r3), n(r3, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-2.webp`), n(r3, `alt`, `Tailwind CSS image hover gallery`);
                  let i4 = u(`img`);
                  a(e3, i4), n(i4, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-3.webp`), n(i4, `alt`, `Tailwind CSS image hover gallery`);
                  let s2 = u(`img`);
                  return a(e3, s2), n(s2, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-4.webp`), n(s2, `alt`, `Tailwind CSS image hover gallery`), {
                    vaporElement: e3
                  };
                })
              }), e2, t4, r2), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<HoverGallery as="figure" className="max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
</HoverGallery>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), N, R, z);
          });
          let B = u(`div`);
          a(i3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let V = u(`h2`);
          a(B, V), e(V, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(V, r(`# Hover Gallery \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF09`));
          let H = d(`rue:component:start`), U = d(`rue:component:end`);
          a(B, H), a(B, U), l(() => {
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
            }), B, H, U);
          });
          let W = d(`rue:slot:start`), G = d(`rue:slot:end`);
          a(B, W), a(B, G), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  as: `figure`,
                  className: `max-w-60`,
                  items: C
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { HoverGallery } from '@rue/design';
const galleryItems = [
  'https://img.daisyui.com/images/stock/daisyui-hat-1.webp',
  { src: 'https://img.daisyui.com/images/stock/daisyui-hat-2.webp', alt: 'Tailwind CSS image hover gallery' },
  { node: (
    <img
      src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp"
      alt="Tailwind CSS image hover gallery"
    />
  ) },
  'https://img.daisyui.com/images/stock/daisyui-hat-4.webp',
];
<HoverGallery as="figure" className="max-w-60" items={galleryItems} />`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), B, W, G);
          });
          let K = u(`div`);
          a(i3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let q = u(`h2`);
          a(K, q), e(q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(q, r(`# Hover Gallery in a card`));
          let J = d(`rue:component:start`), Y = d(`rue:component:end`);
          a(K, J), a(K, Y), l(() => {
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
            }), K, J, Y);
          });
          let X = d(`rue:slot:start`), Z = d(`rue:slot:end`);
          return a(K, X), a(K, Z), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `card card-sm bg-base-200 max-w-60 shadow`);
              let l2 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              a(i4, l2), a(i4, f4), s(m(v, {
                as: `figure`,
                children: c(() => {
                  let e2 = o(), t5 = u(`img`);
                  a(e2, t5), n(t5, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-1.webp`), n(t5, `alt`, `Tailwind CSS image hover gallery`);
                  let r2 = u(`img`);
                  a(e2, r2), n(r2, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-2.webp`), n(r2, `alt`, `Tailwind CSS image hover gallery`);
                  let i5 = u(`img`);
                  a(e2, i5), n(i5, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-3.webp`), n(i5, `alt`, `Tailwind CSS image hover gallery`);
                  let s2 = u(`img`);
                  return a(e2, s2), n(s2, `src`, `https://img.daisyui.com/images/stock/daisyui-hat-4.webp`), n(s2, `alt`, `Tailwind CSS image hover gallery`), {
                    vaporElement: e2
                  };
                })
              }), i4, l2, f4);
              let p2 = u(`div`);
              a(i4, p2), e(p2, `card-body`);
              let h3 = u(`h2`);
              a(p2, h3), e(h3, `card-title flex justify-between`), a(h3, r(`daisyUI Hat`));
              let g2 = u(`span`);
              a(h3, g2), e(g2, `font-normal`), a(g2, r(`$25`));
              let _2 = u(`p`);
              return a(p2, _2), e(_2, `text-sm mt-3 mb-3`), a(_2, r(`High Quality classic cap hat with stitch logo`)), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="card card-sm bg-base-200 max-w-60 shadow">
  <HoverGallery as="figure">
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
  </HoverGallery>
  <div className="card-body">
    <h2 className="card-title flex justify-between">
      daisyUI Hat
      <span className="font-normal">$25</span>
    </h2>
    <p className="text-sm mt-3 mb-3">High Quality classic cap hat with stitch logo</p>
  </div>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), K, X, Z);
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

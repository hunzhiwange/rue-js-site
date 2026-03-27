import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, z as f, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as p, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as m, s as h, __tla as __tla_2 } from "./src-Ba80c3lX.js";
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
  y = Object.assign(({ className: e2, children: t2, items: n2 }) => {
    let r2 = `breadcrumbs`;
    return e2 && (r2 += ` ${e2}`), n2 && n2.length ? m(`div`, {
      className: r2,
      children: m(`ul`, {
        children: n2.map((e3, t3) => m(`li`, {
          className: e3.className ?? ``,
          children: e3.href ? h(`a`, {
            className: e3.linkClassName ?? ``,
            href: e3.href,
            children: [
              e3.icon ?? null,
              e3.label
            ]
          }) : h(`span`, {
            className: e3.linkClassName ?? ``,
            children: [
              e3.icon ?? null,
              e3.label
            ]
          })
        }, t3))
      })
    }) : m(`div`, {
      className: r2,
      children: m(`ul`, {
        children: t2
      })
    });
  }, {
    Item: ({ className: e2, children: t2 }) => {
      let n2 = ``;
      return e2 && (n2 += ` ${e2}`), m(`li`, {
        className: n2.trim(),
        children: t2
      });
    }
  });
  b = () => {
    let { tabBasic: h2, tabIcons: b2, tabMaxWidth: x, tabArray: S } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabIcons: t(`ref:1:1`, () => f(`preview`)),
      tabMaxWidth: t(`ref:1:2`, () => f(`preview`)),
      tabArray: t(`ref:1:3`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(g, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Breadcrumbs \u9762\u5305\u5C51`));
          let g2 = u(`p`);
          a(i3, g2), e(g2, `text-sm mt-3 mb-3`), a(g2, r(`\u9762\u5305\u5C51\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u5728\u7F51\u7AD9\u4E2D\u5BFC\u822A\u3002`));
          let C = u(`div`);
          a(i3, C), e(C, `text-sm`);
          let w = u(`a`);
          a(C, w), n(w, `href`, `https://daisyui.com/components/breadcrumbs/`), n(w, `target`, `_blank`), a(w, r(`\u67E5\u770B Breadcrumbs \u9759\u6001\u6837\u5F0F`));
          let T = u(`div`);
          a(i3, T), e(T, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let E = u(`h2`);
          a(T, E), e(E, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(E, r(`# Breadcrumbs`));
          let D = d(`rue:component:start`), O = d(`rue:component:end`);
          a(T, D), a(T, O), l(() => {
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
            }), T, D, O);
          });
          let k = d(`rue:slot:start`), A = d(`rue:slot:end`);
          a(T, k), a(T, A), l(() => {
            s(p(h2.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(y, {
                className: `text-sm`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3);
                  let i5 = u(`span`);
                  a(n3, i5), e(i5, `hover:underline cursor-pointer inline-flex gap-2 items-center`), a(i5, r(`Home`));
                  let s2 = u(`div`);
                  a(t5, s2);
                  let c2 = u(`span`);
                  a(s2, c2), e(c2, `hover:underline cursor-pointer inline-flex gap-2 items-center`), a(c2, r(`Documents`));
                  let l2 = u(`div`);
                  return a(t5, l2), a(l2, r(`Add Document`)), {
                    vaporElement: t5
                  };
                })
              }), t4, n2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Breadcrumbs } from '@rue/design';
<Breadcrumbs className="text-sm">
  <Breadcrumbs.Item>
    <span className="hover:underline cursor-pointer inline-flex gap-2 items-center">Home</span>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <span className="hover:underline cursor-pointer inline-flex gap-2 items-center">Documents</span>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item> Add Document </Breadcrumbs.Item>
</Breadcrumbs>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), T, k, A);
          });
          let j = u(`div`);
          a(i3, j), e(j, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let M = u(`h2`);
          a(j, M), e(M, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(M, r(`# Breadcrumbs with icons`));
          let N = d(`rue:component:start`), P = d(`rue:component:end`);
          a(j, N), a(j, P), l(() => {
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
            }), j, N, P);
          });
          let F = d(`rue:slot:start`), I = d(`rue:slot:end`);
          a(j, F), a(j, I), l(() => {
            s(p(b2.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(y, {
                className: `text-sm`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5);
                  let s2 = u(`span`);
                  a(i5, s2), e(s2, `hover:underline cursor-pointer inline-flex gap-2 items-center`);
                  let c2 = u(`svg`);
                  a(s2, c2), n(c2, `xmlns`, `http://www.w3.org/2000/svg`), n(c2, `fill`, `none`), n(c2, `viewBox`, `0 0 24 24`), e(c2, `w-4 h-4 stroke-current`);
                  let l3 = u(`path`);
                  a(c2, l3), n(l3, `stroke-linecap`, `round`), n(l3, `stroke-linejoin`, `round`), n(l3, `stroke-width`, `2`), n(l3, `d`, `M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z`), a(s2, r(`Home`));
                  let d2 = u(`div`);
                  a(t5, d2);
                  let f4 = u(`span`);
                  a(d2, f4), e(f4, `hover:underline cursor-pointer inline-flex gap-2 items-center`);
                  let p2 = u(`svg`);
                  a(f4, p2), n(p2, `xmlns`, `http://www.w3.org/2000/svg`), n(p2, `fill`, `none`), n(p2, `viewBox`, `0 0 24 24`), e(p2, `w-4 h-4 stroke-current`);
                  let m2 = u(`path`);
                  a(p2, m2), n(m2, `stroke-linecap`, `round`), n(m2, `stroke-linejoin`, `round`), n(m2, `stroke-width`, `2`), n(m2, `d`, `M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z`), a(f4, r(`Documents`));
                  let h3 = u(`div`);
                  a(t5, h3);
                  let g3 = u(`span`);
                  a(h3, g3), e(g3, `inline-flex gap-2 items-center`);
                  let _2 = u(`svg`);
                  a(g3, _2), n(_2, `xmlns`, `http://www.w3.org/2000/svg`), n(_2, `fill`, `none`), n(_2, `viewBox`, `0 0 24 24`), e(_2, `w-4 h-4 stroke-current`);
                  let v2 = u(`path`);
                  return a(_2, v2), n(v2, `stroke-linecap`, `round`), n(v2, `stroke-linejoin`, `round`), n(v2, `stroke-width`, `2`), n(v2, `d`, `M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`), a(g3, r(`Add Document`)), {
                    vaporElement: t5
                  };
                })
              }), t4, i4, l2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Breadcrumbs className="text-sm">
  <Breadcrumbs.Item>
    <span className="hover:underline cursor-pointer inline-flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
      Home
    </span>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <span className="hover:underline cursor-pointer inline-flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
      Documents
    </span>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <span className="inline-flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a 2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      Add Document
    </span>
  </Breadcrumbs.Item>
</Breadcrumbs>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), j, F, I);
          });
          let L = u(`div`);
          a(i3, L), e(L, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let R = u(`h2`);
          a(L, R), e(R, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(R, r(`# Breadcrumbs from items`));
          let z = d(`rue:component:start`), B = d(`rue:component:end`);
          a(L, z), a(L, B), l(() => {
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
            }), L, z, B);
          });
          let V = d(`rue:slot:start`), H = d(`rue:slot:end`);
          a(L, V), a(L, H), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(y, {
                  className: `text-sm`,
                  items: [
                    {
                      label: `Home`,
                      href: `/home`,
                      linkClassName: `hover:underline cursor-pointer inline-flex gap-2 items-center`,
                      icon: m(`svg`, {
                        xmlns: `http://www.w3.org/2000/svg`,
                        fill: `none`,
                        viewBox: `0 0 24 24`,
                        className: `w-4 h-4 stroke-current`,
                        children: m(`path`, {
                          "stroke-linecap": `round`,
                          "stroke-linejoin": `round`,
                          "stroke-width": `2`,
                          d: `M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z`
                        })
                      })
                    },
                    {
                      label: `Documents`,
                      href: `/docs`,
                      linkClassName: `hover:underline cursor-pointer inline-flex gap-2 items-center`,
                      icon: m(`svg`, {
                        xmlns: `http://www.w3.org/2000/svg`,
                        fill: `none`,
                        viewBox: `0 0 24 24`,
                        className: `w-4 h-4 stroke-current`,
                        children: m(`path`, {
                          "stroke-linecap": `round`,
                          "stroke-linejoin": `round`,
                          "stroke-width": `2`,
                          d: `M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z`
                        })
                      })
                    },
                    {
                      label: `Add Document`,
                      linkClassName: `inline-flex gap-2 items-center`,
                      icon: m(`svg`, {
                        xmlns: `http://www.w3.org/2000/svg`,
                        fill: `none`,
                        viewBox: `0 0 24 24`,
                        className: `w-4 h-4 stroke-current`,
                        children: m(`path`, {
                          "stroke-linecap": `round`,
                          "stroke-linejoin": `round`,
                          "stroke-width": `2`,
                          d: `M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`
                        })
                      })
                    }
                  ]
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Breadcrumbs className="text-sm" items={[
  {
    label: 'Home',
    href: '/home',
    linkClassName: 'hover:underline cursor-pointer inline-flex gap-2 items-center',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
      </svg>
    ),
  },
  {
    label: 'Documents',
    href: '/docs',
    linkClassName: 'hover:underline cursor-pointer inline-flex gap-2 items-center',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
      </svg>
    ),
  },
  {
    label: 'Add Document',
    linkClassName: 'inline-flex items-center gap-2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a 2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
  },
]} />`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), L, V, H);
          });
          let U = u(`div`);
          a(i3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = u(`h2`);
          a(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(W, r(`# Breadcrumbs with max-width`));
          let G = u(`p`);
          a(U, G), e(G, `text-sm mt-3 mb-3`), a(G, r(`\u5982\u679C\u8BBE\u7F6E\u4E86 max-width \u6216\u5217\u8868\u8D85\u51FA\u5BB9\u5668\u5BBD\u5EA6\uFF0C\u5C06\u4F1A\u51FA\u73B0\u6EDA\u52A8\u3002`));
          let K = d(`rue:component:start`), q = d(`rue:component:end`);
          a(U, K), a(U, q), l(() => {
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
            }), U, K, q);
          });
          let J = d(`rue:slot:start`), Y = d(`rue:slot:end`);
          return a(U, J), a(U, Y), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), s(m(y, {
                className: `max-w-xs text-sm`,
                children: c(() => {
                  let e3 = o(), t5 = u(`div`);
                  a(e3, t5), a(t5, r(`Long text 1`));
                  let n3 = u(`div`);
                  a(e3, n3), a(n3, r(`Long text 2`));
                  let i4 = u(`div`);
                  a(e3, i4), a(i4, r(`Long text 3`));
                  let s2 = u(`div`);
                  a(e3, s2), a(s2, r(`Long text 4`));
                  let c2 = u(`div`);
                  return a(e3, c2), a(c2, r(`Long text 5`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t4, n2), {
                vaporElement: e2
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(v, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Breadcrumbs className="max-w-xs text-sm">
  <Breadcrumbs.Item>Long text 1</Breadcrumbs.Item>
  <Breadcrumbs.Item>Long text 2</Breadcrumbs.Item>
  <Breadcrumbs.Item>Long text 3</Breadcrumbs.Item>
  <Breadcrumbs.Item>Long text 4</Breadcrumbs.Item>
  <Breadcrumbs.Item>Long text 5</Breadcrumbs.Item>
</Breadcrumbs>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), U, J, Y);
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

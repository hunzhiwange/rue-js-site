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
  v = Object.assign(({ className: e2, tabIndex: t2, children: n2 }) => {
    let r2 = `diff`;
    return e2 && (r2 += ` ${e2}`), m(`figure`, {
      className: r2,
      tabIndex: t2,
      children: n2
    });
  }, {
    Item1: ({ className: e2, role: t2, tabIndex: n2, children: r2 }) => {
      let i2 = `diff-item-1`;
      return e2 && (i2 += ` ${e2}`), m(`div`, {
        className: i2,
        role: t2,
        tabIndex: n2,
        children: r2
      });
    },
    Item2: ({ className: e2, role: t2, tabIndex: n2, children: r2 }) => {
      let i2 = `diff-item-2`;
      return e2 && (i2 += ` ${e2}`), m(`div`, {
        className: i2,
        role: t2,
        tabIndex: n2,
        children: r2
      });
    },
    Resizer: ({ className: e2 }) => {
      let t2 = `diff-resizer`;
      return e2 && (t2 += ` ${e2}`), m(`div`, {
        className: t2
      });
    }
  });
  y = () => {
    let { tabBasic: y2, tabText: b } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabText: t(`ref:1:1`, () => f(`preview`))
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Diff \u5BF9\u6BD4`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`Diff \u7EC4\u4EF6\u7528\u4E8E\u5E76\u6392\u6BD4\u8F83\u4E24\u9879\u5185\u5BB9\u3002`));
          let x = u(`div`);
          a(i3, x), e(x, `text-sm`);
          let S = u(`a`);
          a(x, S), n(S, `href`, `https://daisyui.com/components/diff/`), n(S, `target`, `_blank`), a(S, r(`\u67E5\u770B Diff \u9759\u6001\u6837\u5F0F`));
          let C = u(`div`);
          a(i3, C), e(C, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let w = u(`h2`);
          a(C, w), e(w, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(w, r(`# Diff`));
          let T = d(`rue:component:start`), E = d(`rue:component:end`);
          a(C, T), a(C, E), l(() => {
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
            }), C, T, E);
          });
          let D = d(`rue:slot:start`), O = d(`rue:slot:end`);
          a(C, D), a(C, O), l(() => {
            s(p(y2.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), r2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, r2), s(m(v, {
                className: `rounded-field aspect-16/9`,
                tabIndex: 0,
                children: c(() => {
                  let e3 = o(), t5 = u(`div`);
                  a(e3, t5), n(t5, `role`, `img`), l(() => {
                    n(t5, `tabIndex`, `0`);
                  });
                  let r3 = u(`img`);
                  a(t5, r3), n(r3, `alt`, `daisy`), n(r3, `src`, `https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp`);
                  let i4 = u(`div`);
                  a(e3, i4), n(i4, `role`, `img`);
                  let s2 = u(`img`);
                  return a(i4, s2), n(s2, `alt`, `daisy`), n(s2, `src`, `https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp`), a(e3, u(`div`)), {
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
                  code: `<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </Diff.Item1>
  <Diff.Item2 role="img">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), C, D, O);
          });
          let k = u(`div`);
          a(i3, k), e(k, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let A = u(`h2`);
          a(k, A), e(A, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(A, r(`# Diff text`));
          let j = d(`rue:component:start`), M = d(`rue:component:end`);
          a(k, j), a(k, M), l(() => {
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
            }), k, j, M);
          });
          let N = d(`rue:slot:start`), P = d(`rue:slot:end`);
          return a(k, N), a(k, P), l(() => {
            s(p(b.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              return a(t4, i4), a(t4, f4), s(m(v, {
                className: `rounded-field aspect-16/9`,
                tabIndex: 0,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5), n(i5, `role`, `img`), l(() => {
                    n(i5, `tabIndex`, `0`);
                  });
                  let s2 = u(`div`);
                  a(i5, s2), e(s2, `bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center`), a(s2, r(`DAISY`));
                  let c2 = u(`div`);
                  a(t5, c2), n(c2, `role`, `img`);
                  let d2 = u(`div`);
                  return a(c2, d2), e(d2, `bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center`), a(d2, r(`DAISY`)), a(t5, u(`div`)), {
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
                  code: `<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </Diff.Item1>
  <Diff.Item2 role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), k, N, P);
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

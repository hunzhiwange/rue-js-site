import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
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
  b = () => {
    let { tabBasic: b2, tabBorder: x, tabLift: S, tabBox: C, tabSizes: w, tabPlacement: T, tabDisabled: E, tabCustomColor: D, active1: ee, active2: te, active3: ne, active4: re, active5xs: ie, active5sm: ae, active5md: O, active5lg: k, active5xl: oe, activeBottom: A, activeDisabled: se, activeCustom: ce } = n(`useSetup:0:0`, () => o(() => ({
      tabBasic: n(`ref:1:0`, () => m(`preview`)),
      tabBorder: n(`ref:1:1`, () => m(`preview`)),
      tabLift: n(`ref:1:2`, () => m(`preview`)),
      tabBox: n(`ref:1:3`, () => m(`preview`)),
      tabSizes: n(`ref:1:4`, () => m(`preview`)),
      tabPlacement: n(`ref:1:5`, () => m(`preview`)),
      tabDisabled: n(`ref:1:6`, () => m(`preview`)),
      tabCustomColor: n(`ref:1:7`, () => m(`preview`)),
      active1: n(`ref:1:8`, () => m(`tab2`)),
      active2: n(`ref:1:9`, () => m(`tab2`)),
      active3: n(`ref:1:10`, () => m(`tab2`)),
      active4: n(`ref:1:11`, () => m(`tab2`)),
      active5xs: n(`ref:1:12`, () => m(`xs2`)),
      active5sm: n(`ref:1:13`, () => m(`sm2`)),
      active5md: n(`ref:1:14`, () => m(`md2`)),
      active5lg: n(`ref:1:15`, () => m(`lg2`)),
      active5xl: n(`ref:1:16`, () => m(`xl2`)),
      activeBottom: n(`ref:1:17`, () => m(`b2`)),
      activeDisabled: n(`ref:1:18`, () => m(`d1`)),
      activeCustom: n(`ref:1:19`, () => m(`c2`))
    })));
    return u(() => {
      let n2 = c(), o2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return s(n2, o2), s(n2, m2), l(g(_, {
        children: u(() => {
          let n3 = c(), o3 = f(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          s(o3, m3), s(m3, a(`Tabs \u9009\u9879\u5361`));
          let _2 = f(`p`);
          s(o3, _2), e(_2, `text-sm mt-3 mb-3`), s(_2, a(`\u9009\u9879\u5361\uFF08Tabs\uFF09\u7528\u4E8E\u5728\u6709\u9650\u7A7A\u95F4\u4E2D\u7EC4\u7EC7\u5185\u5BB9\u5206\u7EC4\uFF0C\u7528\u6237\u53EF\u5728\u540C\u4E00\u5C42\u7EA7\u95F4\u5207\u6362\u3002`));
          let j = f(`div`);
          s(o3, j), e(j, `text-sm`);
          let M = f(`a`);
          s(j, M), i(M, `href`, `https://daisyui.com/components/tab/`), i(M, `target`, `_blank`), s(M, a(`\u67E5\u770B Tabs \u9759\u6001\u6837\u5F0F`));
          let N = f(`div`);
          s(o3, N), e(N, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let P = f(`h2`);
          s(N, P), e(P, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(P, a(`# tabs`));
          let le = p(`rue:component:start`), ue = p(`rue:component:end`);
          s(N, le), s(N, ue), d(() => {
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
              activeKey: b2.value,
              onChange: (e2) => b2.value = e2,
              className: `mb-3`
            }), N, le, ue);
          });
          let de = p(`rue:slot:start`), fe = p(`rue:slot:end`);
          s(N, de), s(N, fe), d(() => {
            l(h(b2.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(v, {
                  items: [
                    {
                      key: `tab1`,
                      label: `Tab 1`
                    },
                    {
                      key: `tab2`,
                      label: `Tab 2`
                    },
                    {
                      key: `tab3`,
                      label: `Tab 3`
                    }
                  ],
                  activeKey: ee.value,
                  onChange: (e2) => ee.value = e2
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
                  code: `import { Tabs } from '@rue/design';
<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={k => console.log(k)}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), N, de, fe);
          });
          let F = f(`div`);
          s(o3, F), e(F, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let I = f(`h2`);
          s(F, I), e(I, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(I, a(`# tabs-border`));
          let L = p(`rue:component:start`), R = p(`rue:component:end`);
          s(F, L), s(F, R), d(() => {
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
              activeKey: x.value,
              onChange: (e2) => x.value = e2,
              className: `mb-3`
            }), F, L, R);
          });
          let z = p(`rue:slot:start`), B = p(`rue:slot:end`);
          s(F, z), s(F, B), d(() => {
            l(h(x.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(v, {
                  style: `border`,
                  items: [
                    {
                      key: `tab1`,
                      label: `Tab 1`
                    },
                    {
                      key: `tab2`,
                      label: `Tab 2`
                    },
                    {
                      key: `tab3`,
                      label: `Tab 3`
                    }
                  ],
                  activeKey: te.value,
                  onChange: (e2) => te.value = e2
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
                  code: `<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), F, z, B);
          });
          let V = f(`div`);
          s(o3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = f(`h2`);
          s(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(H, a(`# tabs-lift`));
          let pe = p(`rue:component:start`), me = p(`rue:component:end`);
          s(V, pe), s(V, me), d(() => {
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
              activeKey: S.value,
              onChange: (e2) => S.value = e2,
              className: `mb-3`
            }), V, pe, me);
          });
          let he = p(`rue:slot:start`), ge = p(`rue:slot:end`);
          s(V, he), s(V, ge), d(() => {
            l(h(S.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(v, {
                  style: `lift`,
                  items: [
                    {
                      key: `tab1`,
                      label: `Tab 1`
                    },
                    {
                      key: `tab2`,
                      label: `Tab 2`
                    },
                    {
                      key: `tab3`,
                      label: `Tab 3`
                    }
                  ],
                  activeKey: ne.value,
                  onChange: (e2) => ne.value = e2
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
                  code: `<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), V, he, ge);
          });
          let U = f(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = f(`h2`);
          s(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(W, a(`# tabs-box`));
          let _e = p(`rue:component:start`), ve = p(`rue:component:end`);
          s(U, _e), s(U, ve), d(() => {
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
            }), U, _e, ve);
          });
          let ye = p(`rue:slot:start`), be = p(`rue:slot:end`);
          s(U, ye), s(U, be), d(() => {
            l(h(C.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(v, {
                  style: `box`,
                  items: [
                    {
                      key: `tab1`,
                      label: `Tab 1`
                    },
                    {
                      key: `tab2`,
                      label: `Tab 2`
                    },
                    {
                      key: `tab3`,
                      label: `Tab 3`
                    }
                  ],
                  activeKey: re.value,
                  onChange: (e2) => re.value = e2
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
                  code: `<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, ye, be);
          });
          let G = f(`div`);
          s(o3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = f(`h2`);
          s(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(K, a(`# Sizes`));
          let xe = p(`rue:component:start`), Se = p(`rue:component:end`);
          s(G, xe), s(G, Se), d(() => {
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
            }), G, xe, Se);
          });
          let Ce = p(`rue:slot:start`), we = p(`rue:slot:end`);
          s(G, Ce), s(G, we), d(() => {
            l(h(w.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body flex flex-col items-center gap-6`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              s(r2, i2), s(r2, a2), d(() => {
                l(g(v, {
                  style: `lift`,
                  size: `xs`,
                  items: [
                    {
                      key: `xs1`,
                      label: `Xsmall`
                    },
                    {
                      key: `xs2`,
                      label: `Xsmall`
                    },
                    {
                      key: `xs3`,
                      label: `Xsmall`
                    }
                  ],
                  activeKey: ie.value,
                  onChange: (e2) => ie.value = e2
                }), r2, i2, a2);
              });
              let o4 = p(`rue:component:start`), u2 = p(`rue:component:end`);
              s(r2, o4), s(r2, u2), d(() => {
                l(g(v, {
                  style: `lift`,
                  size: `sm`,
                  items: [
                    {
                      key: `sm1`,
                      label: `Small`
                    },
                    {
                      key: `sm2`,
                      label: `Small`
                    },
                    {
                      key: `sm3`,
                      label: `Small`
                    }
                  ],
                  activeKey: ae.value,
                  onChange: (e2) => ae.value = e2
                }), r2, o4, u2);
              });
              let m4 = p(`rue:component:start`), h2 = p(`rue:component:end`);
              s(r2, m4), s(r2, h2), d(() => {
                l(g(v, {
                  style: `lift`,
                  items: [
                    {
                      key: `md1`,
                      label: `Medium`
                    },
                    {
                      key: `md2`,
                      label: `Medium`
                    },
                    {
                      key: `md3`,
                      label: `Medium`
                    }
                  ],
                  activeKey: O.value,
                  onChange: (e2) => O.value = e2
                }), r2, m4, h2);
              });
              let _3 = p(`rue:component:start`), y2 = p(`rue:component:end`);
              s(r2, _3), s(r2, y2), d(() => {
                l(g(v, {
                  style: `lift`,
                  size: `lg`,
                  items: [
                    {
                      key: `lg1`,
                      label: `Large`
                    },
                    {
                      key: `lg2`,
                      label: `Large`
                    },
                    {
                      key: `lg3`,
                      label: `Large`
                    }
                  ],
                  activeKey: k.value,
                  onChange: (e2) => k.value = e2
                }), r2, _3, y2);
              });
              let b3 = p(`rue:component:start`), x2 = p(`rue:component:end`);
              return s(r2, b3), s(r2, x2), d(() => {
                l(g(v, {
                  style: `lift`,
                  size: `xl`,
                  items: [
                    {
                      key: `xl1`,
                      label: `Xlarge`
                    },
                    {
                      key: `xl2`,
                      label: `Xlarge`
                    },
                    {
                      key: `xl3`,
                      label: `Xlarge`
                    }
                  ],
                  activeKey: oe.value,
                  onChange: (e2) => oe.value = e2
                }), r2, b3, x2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, Ce, we);
          });
          let q = f(`div`);
          s(o3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = f(`h2`);
          s(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(J, a(`# tabs-bottom`));
          let Te = p(`rue:component:start`), Ee = p(`rue:component:end`);
          s(q, Te), s(q, Ee), d(() => {
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
            }), q, Te, Ee);
          });
          let De = p(`rue:slot:start`), Oe = p(`rue:slot:end`);
          s(q, De), s(q, Oe), d(() => {
            l(h(T.value === `preview` ? u(() => {
              let n4 = c(), i2 = f(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let o4 = f(`div`);
              s(i2, o4), e(o4, `card-body`);
              let u2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              s(o4, u2), s(o4, m4), d(() => {
                l(g(v, {
                  style: `lift`,
                  placement: `bottom`,
                  items: [
                    {
                      key: `b1`,
                      label: `Tab 1`
                    },
                    {
                      key: `b2`,
                      label: `Tab 2`
                    },
                    {
                      key: `b3`,
                      label: `Tab 3`
                    }
                  ],
                  activeKey: A.value,
                  onChange: (e2) => A.value = e2
                }), o4, u2, m4);
              });
              let h2 = f(`div`);
              s(o4, h2), e(h2, `tab-content border-base-300 bg-base-100 p-6 mt-2`), s(h2, a(`Tab content`));
              let _3 = t(h2);
              s(h2, _3), r(_3, ` `), s(h2, a(` `));
              let y2 = t(h2);
              return s(h2, y2), d(() => {
                r(y2, A.value === `b1` && 1 || A.value === `b2` && 2 || 3);
              }), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Tabs style="lift" placement="bottom" items={[{ key: 'b1', label: 'Tab 1' }, { key: 'b2', label: 'Tab 2' }, { key: 'b3', label: 'Tab 3' }]} activeKey="b2" />
<div className="tab-content border-base-300 bg-base-100 p-6">Tab content 2</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, De, Oe);
          });
          let Y = f(`div`);
          s(o3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = f(`h2`);
          s(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(X, a(`# tab-disabled`));
          let ke = p(`rue:component:start`), Z = p(`rue:component:end`);
          s(Y, ke), s(Y, Z), d(() => {
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
            }), Y, ke, Z);
          });
          let Ae = p(`rue:slot:start`), je = p(`rue:slot:end`);
          s(Y, Ae), s(Y, je), d(() => {
            l(h(E.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(v, {
                  items: [
                    {
                      key: `d1`,
                      label: `Disabled`,
                      disabled: true
                    },
                    {
                      key: `d2`,
                      label: `Active`
                    },
                    {
                      key: `d3`,
                      label: `Tab`
                    }
                  ],
                  activeKey: se.value,
                  onChange: (e2) => se.value = e2
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
                  code: `<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d1" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, Ae, je);
          });
          let Q = f(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = f(`h2`);
          s(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s($, a(`# Tabs with custom color`));
          let Me = p(`rue:component:start`), Ne = p(`rue:component:end`);
          s(Q, Me), s(Q, Ne), d(() => {
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
            }), Q, Me, Ne);
          });
          let Pe = p(`rue:slot:start`), Fe = p(`rue:slot:end`);
          return s(Q, Pe), s(Q, Fe), d(() => {
            l(h(D.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow`);
              let r2 = f(`div`);
              s(n4, r2), e(r2, `card-body`);
              let i2 = p(`rue:component:start`), a2 = p(`rue:component:end`);
              return s(r2, i2), s(r2, a2), d(() => {
                l(g(v, {
                  style: `lift`,
                  items: [
                    {
                      key: `c1`,
                      label: `Tab 1`
                    },
                    {
                      key: `c2`,
                      label: `Tab 2`,
                      className: `tab-active text-primary [--tab-bg:orange] [--tab-border-color:red]`
                    },
                    {
                      key: `c3`,
                      label: `Tab 3`
                    }
                  ],
                  activeKey: ce.value,
                  onChange: (e2) => ce.value = e2
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
                  code: `<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'tab-active text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, Pe, Fe);
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
  b as default
};

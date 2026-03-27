import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, g as c, m as l, q as u, x as d, y as f, z as p, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as m, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as h, s as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let w;
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
  let b, x, S, C;
  b = ({ size: e2, className: t2, items: n2, activeIndex: r2, onChange: i2, children: a2 }) => {
    let o2 = `dock`;
    return e2 && (o2 += ` dock-${e2}`), t2 && (o2 += ` ${t2}`), n2 && n2.length ? h(`div`, {
      className: o2,
      children: n2.map((e3, t3) => g(x, {
        as: e3.as,
        className: e3.className,
        active: r2 == null ? !!e3.active : r2 === t3,
        href: e3.href,
        onClick: () => i2 && i2(t3),
        children: [
          e3.icon,
          e3.label == null ? null : h(S, {
            children: e3.label
          })
        ]
      }, t3))
    }) : h(`div`, {
      className: o2,
      children: a2
    });
  };
  x = ({ as: e2 = `button`, active: t2, className: n2, href: r2, onClick: i2, children: a2 }) => {
    let o2 = ``;
    t2 && (o2 += ` dock-active`), n2 && (o2 += ` ${n2}`);
    let s2 = o2.trim();
    return e2 === `a` ? h(`a`, {
      href: r2,
      className: s2,
      onClick: i2,
      children: a2
    }) : h(e2 === `div` ? `div` : `button`, {
      className: s2,
      onClick: i2,
      children: a2
    });
  };
  S = ({ className: e2, children: t2 }) => {
    let n2 = `dock-label`;
    return e2 && (n2 += ` ${e2}`), h(`span`, {
      className: n2,
      children: t2
    });
  };
  C = Object.assign(b, {
    Item: x,
    Label: S
  });
  w = () => {
    let { tabBasic: b2, tabXs: x2, tabSm: S2, tabMd: w2, tabLg: T, tabXl: E, tabCustom: D, tabAuto: O, activeBasic: ee, activeXs: te, activeSm: k, activeMd: A, activeLg: j, activeXl: M, activeCustom: N, activeAuto: ne } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => p(`preview`)),
      tabXs: t(`ref:1:1`, () => p(`preview`)),
      tabSm: t(`ref:1:2`, () => p(`preview`)),
      tabMd: t(`ref:1:3`, () => p(`preview`)),
      tabLg: t(`ref:1:4`, () => p(`preview`)),
      tabXl: t(`ref:1:5`, () => p(`preview`)),
      tabCustom: t(`ref:1:6`, () => p(`preview`)),
      tabAuto: t(`ref:1:7`, () => p(`preview`)),
      activeBasic: t(`ref:1:8`, () => p(1)),
      activeXs: t(`ref:1:9`, () => p(1)),
      activeSm: t(`ref:1:10`, () => p(1)),
      activeMd: t(`ref:1:11`, () => p(1)),
      activeLg: t(`ref:1:12`, () => p(1)),
      activeXl: t(`ref:1:13`, () => p(1)),
      activeCustom: t(`ref:1:14`, () => p(1)),
      activeAuto: t(`ref:1:15`, () => p(1))
    })));
    return l(() => {
      let t2 = o(), i2 = f(`rue:component:start`), p2 = f(`rue:component:end`);
      return a(t2, i2), a(t2, p2), s(h(_, {
        children: l(() => {
          let t3 = o(), i3 = d(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let p3 = d(`h1`);
          a(i3, p3), a(p3, r(`Dock \u5E95\u90E8\u680F`));
          let _2 = d(`p`);
          a(i3, _2), e(_2, `text-sm mt-3 mb-3`), a(_2, r(`Dock\uFF08\u4E5F\u79F0\u4E3A\u5E95\u90E8\u5BFC\u822A\uFF09\u7528\u4E8E\u4E3A\u7528\u6237\u63D0\u4F9B\u5E95\u90E8\u7684\u5BFC\u822A\u64CD\u4F5C\u3002`));
          let P = d(`div`);
          a(i3, P), e(P, `text-sm`);
          let F = d(`a`);
          a(P, F), n(F, `href`, `https://daisyui.com/components/dock/`), n(F, `target`, `_blank`), a(F, r(`\u67E5\u770B Dock \u9759\u6001\u6837\u5F0F`));
          let I = d(`div`);
          a(i3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let L = d(`h2`);
          a(I, L), e(L, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(L, r(`# Dock`));
          let re = f(`rue:component:start`), ie = f(`rue:component:end`);
          a(I, re), a(I, ie), u(() => {
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
              activeKey: b2.value,
              onChange: (e2) => b2.value = e2,
              className: `mb-3`
            }), I, re, ie);
          });
          let ae = f(`rue:slot:start`), oe = f(`rue:slot:end`);
          a(I, ae), a(I, oe), u(() => {
            s(m(b2.value === `preview` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let r2 = f(`rue:component:start`), i4 = f(`rue:component:end`);
              return a(n2, r2), a(n2, i4), u(() => {
                s(h(C, {
                  className: `relative border border-base-300`,
                  items: [
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`polyline`, {
                              points: `1 11 12 2 23 11`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`path`, {
                              d: `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`line`, {
                              x1: `12`,
                              y1: `22`,
                              x2: `12`,
                              y2: `18`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      }),
                      label: `Home`
                    },
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`polyline`, {
                              points: `3 14 9 14 9 17 15 17 15 14 21 14`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`rect`, {
                              x: `3`,
                              y: `3`,
                              width: `18`,
                              height: `18`,
                              rx: `2`,
                              ry: `2`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      }),
                      label: `Inbox`
                    },
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`circle`, {
                              cx: `12`,
                              cy: `12`,
                              r: `3`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`path`, {
                              d: `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      }),
                      label: `Settings`
                    }
                  ],
                  activeIndex: ee.value,
                  onChange: (e2) => ee.value = e2
                }), n2, r2, i4);
              }), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Dock } from '@rue/design';
<div className="bg-base-300 rounded-box w-full max-w-sm pt-32">
  <Dock className="relative border border-base-300">
    <Dock.Item>
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
      <Dock.Label>Home</Dock.Label>
    </Dock.Item>
    <Dock.Item active>
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
      <Dock.Label>Inbox</Dock.Label>
    </Dock.Item>
    <Dock.Item>
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
      <Dock.Label>Settings</Dock.Label>
    </Dock.Item>
  </Dock>
</div>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), I, ae, oe);
          });
          let R = d(`div`);
          a(i3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = d(`h2`);
          a(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(z, r(`# Dock Extra Small size`));
          let se = f(`rue:component:start`), ce = f(`rue:component:end`);
          a(R, se), a(R, ce), u(() => {
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
            }), R, se, ce);
          });
          let le = f(`rue:slot:start`), ue = f(`rue:slot:end`);
          a(R, le), a(R, ue), u(() => {
            s(m(x2.value === `preview` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let r2 = f(`rue:component:start`), i4 = f(`rue:component:end`);
              return a(n2, r2), a(n2, i4), u(() => {
                s(h(C, {
                  size: `xs`,
                  className: `relative border border-base-300`,
                  items: [
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`polyline`, {
                              points: `1 11 12 2 23 11`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`path`, {
                              d: `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`line`, {
                              x1: `12`,
                              y1: `22`,
                              x2: `12`,
                              y2: `18`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      })
                    },
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`polyline`, {
                              points: `3 14 9 14 9 17 15 17 15 14 21 14`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`rect`, {
                              x: `3`,
                              y: `3`,
                              width: `18`,
                              height: `18`,
                              rx: `2`,
                              ry: `2`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      })
                    },
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`circle`, {
                              cx: `12`,
                              cy: `12`,
                              r: `3`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`path`, {
                              d: `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      })
                    }
                  ],
                  activeIndex: te.value,
                  onChange: (e2) => te.value = e2
                }), n2, r2, i4);
              }), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Dock size="xs" className="relative border border-base-300">
  <Dock.Item><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg></Dock.Item>
  <Dock.Item active><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg></Dock.Item>
  <Dock.Item><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg></Dock.Item>
</Dock>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), R, le, ue);
          });
          let B = d(`div`);
          a(i3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let V = d(`h2`);
          a(B, V), e(V, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(V, r(`# Dock Small size`));
          let de = f(`rue:component:start`), H = f(`rue:component:end`);
          a(B, de), a(B, H), u(() => {
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
              activeKey: S2.value,
              onChange: (e2) => S2.value = e2,
              className: `mb-3`
            }), B, de, H);
          });
          let fe = f(`rue:slot:start`), pe = f(`rue:slot:end`);
          a(B, fe), a(B, pe), u(() => {
            s(m(S2.value === `preview` ? l(() => {
              let t4 = o(), r2 = d(`div`);
              a(t4, r2), e(r2, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let i4 = f(`rue:component:start`), p4 = f(`rue:component:end`);
              return a(r2, i4), a(r2, p4), s(h(C, {
                size: `sm`,
                className: `relative border border-base-300`,
                children: l(() => {
                  let t5 = o(), r3 = d(`div`);
                  a(t5, r3), u(() => {
                    n(r3, `active`, String(k.value === 0));
                  }), c(r3, `click`, () => k.value = 0);
                  let i5 = d(`svg`);
                  a(r3, i5), e(i5, `size-[1.2em]`), n(i5, `xmlns`, `http://www.w3.org/2000/svg`), n(i5, `viewBox`, `0 0 24 24`);
                  let s2 = d(`g`);
                  a(i5, s2), n(s2, `fill`, `currentColor`), n(s2, `strokeLinecap`, `butt`), n(s2, `strokeLinejoin`, `miter`);
                  let l2 = d(`polyline`);
                  a(s2, l2), n(l2, `points`, `1 11 12 2 23 11`), n(l2, `fill`, `none`), n(l2, `stroke`, `currentColor`), n(l2, `strokeMiterlimit`, `10`), n(l2, `strokeWidth`, `2`);
                  let f2 = d(`path`);
                  a(s2, f2), n(f2, `d`, `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`), n(f2, `fill`, `none`), n(f2, `stroke`, `currentColor`), n(f2, `strokeLinecap`, `square`), n(f2, `strokeMiterlimit`, `10`), n(f2, `strokeWidth`, `2`);
                  let p5 = d(`line`);
                  a(s2, p5), n(p5, `x1`, `12`), n(p5, `y1`, `22`), n(p5, `x2`, `12`), n(p5, `y2`, `18`), n(p5, `fill`, `none`), n(p5, `stroke`, `currentColor`), n(p5, `strokeLinecap`, `square`), n(p5, `strokeMiterlimit`, `10`), n(p5, `strokeWidth`, `2`);
                  let m2 = d(`div`);
                  a(t5, m2), u(() => {
                    n(m2, `active`, String(k.value === 1));
                  }), c(m2, `click`, () => k.value = 1);
                  let h2 = d(`svg`);
                  a(m2, h2), e(h2, `size-[1.2em]`), n(h2, `xmlns`, `http://www.w3.org/2000/svg`), n(h2, `viewBox`, `0 0 24 24`);
                  let g2 = d(`g`);
                  a(h2, g2), n(g2, `fill`, `currentColor`), n(g2, `strokeLinecap`, `butt`), n(g2, `strokeLinejoin`, `miter`);
                  let _3 = d(`polyline`);
                  a(g2, _3), n(_3, `points`, `3 14 9 14 9 17 15 17 15 14 21 14`), n(_3, `fill`, `none`), n(_3, `stroke`, `currentColor`), n(_3, `strokeMiterlimit`, `10`), n(_3, `strokeWidth`, `2`);
                  let v2 = d(`rect`);
                  a(g2, v2), n(v2, `x`, `3`), n(v2, `y`, `3`), n(v2, `width`, `18`), n(v2, `height`, `18`), n(v2, `rx`, `2`), n(v2, `ry`, `2`), n(v2, `fill`, `none`), n(v2, `stroke`, `currentColor`), n(v2, `strokeLinecap`, `square`), n(v2, `strokeMiterlimit`, `10`), n(v2, `strokeWidth`, `2`);
                  let y2 = d(`div`);
                  a(t5, y2), u(() => {
                    n(y2, `active`, String(k.value === 2));
                  }), c(y2, `click`, () => k.value = 2);
                  let b3 = d(`svg`);
                  a(y2, b3), e(b3, `size-[1.2em]`), n(b3, `xmlns`, `http://www.w3.org/2000/svg`), n(b3, `viewBox`, `0 0 24 24`);
                  let x3 = d(`g`);
                  a(b3, x3), n(x3, `fill`, `currentColor`), n(x3, `strokeLinecap`, `butt`), n(x3, `strokeLinejoin`, `miter`);
                  let S3 = d(`circle`);
                  a(x3, S3), n(S3, `cx`, `12`), n(S3, `cy`, `12`), n(S3, `r`, `3`), n(S3, `fill`, `none`), n(S3, `stroke`, `currentColor`), n(S3, `strokeLinecap`, `square`), n(S3, `strokeMiterlimit`, `10`), n(S3, `strokeWidth`, `2`);
                  let C2 = d(`path`);
                  return a(x3, C2), n(C2, `d`, `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`), n(C2, `fill`, `none`), n(C2, `stroke`, `currentColor`), n(C2, `strokeLinecap`, `square`), n(C2, `strokeMiterlimit`, `10`), n(C2, `strokeWidth`, `2`), {
                    vaporElement: t5
                  };
                })
              }), r2, i4, p4), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Dock size="sm" className="relative border border-base-300">
  <Dock.Item><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg></Dock.Item>
  <Dock.Item active><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg></Dock.Item>
  <Dock.Item><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg></Dock.Item>
</Dock>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), B, fe, pe);
          });
          let U = d(`div`);
          a(i3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = d(`h2`);
          a(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(W, r(`# Dock Medium size`));
          let me = f(`rue:component:start`), he = f(`rue:component:end`);
          a(U, me), a(U, he), u(() => {
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
              activeKey: w2.value,
              onChange: (e2) => w2.value = e2,
              className: `mb-3`
            }), U, me, he);
          });
          let ge = f(`rue:slot:start`), _e = f(`rue:slot:end`);
          a(U, ge), a(U, _e), u(() => {
            s(m(w2.value === `preview` ? l(() => {
              let t4 = o(), i4 = d(`div`);
              a(t4, i4), e(i4, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let p4 = f(`rue:component:start`), m2 = f(`rue:component:end`);
              return a(i4, p4), a(i4, m2), s(h(C, {
                size: `md`,
                className: `relative border border-base-300`,
                children: l(() => {
                  let t5 = o(), i5 = d(`div`);
                  a(t5, i5), u(() => {
                    n(i5, `active`, String(A.value === 0));
                  }), c(i5, `click`, () => A.value = 0);
                  let s2 = d(`svg`);
                  a(i5, s2), e(s2, `size-[1.2em]`), n(s2, `xmlns`, `http://www.w3.org/2000/svg`), n(s2, `viewBox`, `0 0 24 24`);
                  let l2 = d(`g`);
                  a(s2, l2), n(l2, `fill`, `currentColor`), n(l2, `strokeLinecap`, `butt`), n(l2, `strokeLinejoin`, `miter`);
                  let f2 = d(`polyline`);
                  a(l2, f2), n(f2, `points`, `1 11 12 2 23 11`), n(f2, `fill`, `none`), n(f2, `stroke`, `currentColor`), n(f2, `strokeMiterlimit`, `10`), n(f2, `strokeWidth`, `2`);
                  let p5 = d(`path`);
                  a(l2, p5), n(p5, `d`, `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`), n(p5, `fill`, `none`), n(p5, `stroke`, `currentColor`), n(p5, `strokeLinecap`, `square`), n(p5, `strokeMiterlimit`, `10`), n(p5, `strokeWidth`, `2`);
                  let m3 = d(`line`);
                  a(l2, m3), n(m3, `x1`, `12`), n(m3, `y1`, `22`), n(m3, `x2`, `12`), n(m3, `y2`, `18`), n(m3, `fill`, `none`), n(m3, `stroke`, `currentColor`), n(m3, `strokeLinecap`, `square`), n(m3, `strokeMiterlimit`, `10`), n(m3, `strokeWidth`, `2`);
                  let h2 = d(`div`);
                  a(i5, h2), a(h2, r(`Home`));
                  let g2 = d(`div`);
                  a(t5, g2), u(() => {
                    n(g2, `active`, String(A.value === 1));
                  }), c(g2, `click`, () => A.value = 1);
                  let _3 = d(`svg`);
                  a(g2, _3), e(_3, `size-[1.2em]`), n(_3, `xmlns`, `http://www.w3.org/2000/svg`), n(_3, `viewBox`, `0 0 24 24`);
                  let v2 = d(`g`);
                  a(_3, v2), n(v2, `fill`, `currentColor`), n(v2, `strokeLinecap`, `butt`), n(v2, `strokeLinejoin`, `miter`);
                  let y2 = d(`polyline`);
                  a(v2, y2), n(y2, `points`, `3 14 9 14 9 17 15 17 15 14 21 14`), n(y2, `fill`, `none`), n(y2, `stroke`, `currentColor`), n(y2, `strokeMiterlimit`, `10`), n(y2, `strokeWidth`, `2`);
                  let b3 = d(`rect`);
                  a(v2, b3), n(b3, `x`, `3`), n(b3, `y`, `3`), n(b3, `width`, `18`), n(b3, `height`, `18`), n(b3, `rx`, `2`), n(b3, `ry`, `2`), n(b3, `fill`, `none`), n(b3, `stroke`, `currentColor`), n(b3, `strokeLinecap`, `square`), n(b3, `strokeMiterlimit`, `10`), n(b3, `strokeWidth`, `2`);
                  let x3 = d(`div`);
                  a(g2, x3), a(x3, r(`Inbox`));
                  let S3 = d(`div`);
                  a(t5, S3), u(() => {
                    n(S3, `active`, String(A.value === 2));
                  }), c(S3, `click`, () => A.value = 2);
                  let C2 = d(`svg`);
                  a(S3, C2), e(C2, `size-[1.2em]`), n(C2, `xmlns`, `http://www.w3.org/2000/svg`), n(C2, `viewBox`, `0 0 24 24`);
                  let w3 = d(`g`);
                  a(C2, w3), n(w3, `fill`, `currentColor`), n(w3, `strokeLinecap`, `butt`), n(w3, `strokeLinejoin`, `miter`);
                  let T2 = d(`circle`);
                  a(w3, T2), n(T2, `cx`, `12`), n(T2, `cy`, `12`), n(T2, `r`, `3`), n(T2, `fill`, `none`), n(T2, `stroke`, `currentColor`), n(T2, `strokeLinecap`, `square`), n(T2, `strokeMiterlimit`, `10`), n(T2, `strokeWidth`, `2`);
                  let E2 = d(`path`);
                  a(w3, E2), n(E2, `d`, `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`), n(E2, `fill`, `none`), n(E2, `stroke`, `currentColor`), n(E2, `strokeLinecap`, `square`), n(E2, `strokeMiterlimit`, `10`), n(E2, `strokeWidth`, `2`);
                  let D2 = d(`div`);
                  return a(S3, D2), a(D2, r(`Settings`)), {
                    vaporElement: t5
                  };
                })
              }), i4, p4, m2), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Dock size="md" className="relative border border-base-300">
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Home</Dock.Label></Dock.Item>
  <Dock.Item active><svg className="size-[1.2em]" /><Dock.Label>Inbox</Dock.Label></Dock.Item>
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Settings</Dock.Label></Dock.Item>
</Dock>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), U, ge, _e);
          });
          let G = d(`div`);
          a(i3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = d(`h2`);
          a(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(K, r(`# Dock Large size`));
          let ve = f(`rue:component:start`), ye = f(`rue:component:end`);
          a(G, ve), a(G, ye), u(() => {
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
              activeKey: T.value,
              onChange: (e2) => T.value = e2,
              className: `mb-3`
            }), G, ve, ye);
          });
          let be = f(`rue:slot:start`), xe = f(`rue:slot:end`);
          a(G, be), a(G, xe), u(() => {
            s(m(T.value === `preview` ? l(() => {
              let t4 = o(), i4 = d(`div`);
              a(t4, i4), e(i4, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let p4 = f(`rue:component:start`), m2 = f(`rue:component:end`);
              return a(i4, p4), a(i4, m2), s(h(C, {
                size: `lg`,
                className: `relative border border-base-300`,
                children: l(() => {
                  let t5 = o(), i5 = d(`div`);
                  a(t5, i5), u(() => {
                    n(i5, `active`, String(j.value === 0));
                  }), c(i5, `click`, () => j.value = 0);
                  let s2 = d(`svg`);
                  a(i5, s2), e(s2, `size-[1.2em]`), n(s2, `xmlns`, `http://www.w3.org/2000/svg`), n(s2, `viewBox`, `0 0 24 24`);
                  let l2 = d(`g`);
                  a(s2, l2), n(l2, `fill`, `currentColor`), n(l2, `strokeLinecap`, `butt`), n(l2, `strokeLinejoin`, `miter`);
                  let f2 = d(`polyline`);
                  a(l2, f2), n(f2, `points`, `1 11 12 2 23 11`), n(f2, `fill`, `none`), n(f2, `stroke`, `currentColor`), n(f2, `strokeMiterlimit`, `10`), n(f2, `strokeWidth`, `2`);
                  let p5 = d(`path`);
                  a(l2, p5), n(p5, `d`, `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`), n(p5, `fill`, `none`), n(p5, `stroke`, `currentColor`), n(p5, `strokeLinecap`, `square`), n(p5, `strokeMiterlimit`, `10`), n(p5, `strokeWidth`, `2`);
                  let m3 = d(`line`);
                  a(l2, m3), n(m3, `x1`, `12`), n(m3, `y1`, `22`), n(m3, `x2`, `12`), n(m3, `y2`, `18`), n(m3, `fill`, `none`), n(m3, `stroke`, `currentColor`), n(m3, `strokeLinecap`, `square`), n(m3, `strokeMiterlimit`, `10`), n(m3, `strokeWidth`, `2`);
                  let h2 = d(`div`);
                  a(i5, h2), a(h2, r(`Home`));
                  let g2 = d(`div`);
                  a(t5, g2), u(() => {
                    n(g2, `active`, String(j.value === 1));
                  }), c(g2, `click`, () => j.value = 1);
                  let _3 = d(`svg`);
                  a(g2, _3), e(_3, `size-[1.2em]`), n(_3, `xmlns`, `http://www.w3.org/2000/svg`), n(_3, `viewBox`, `0 0 24 24`);
                  let v2 = d(`g`);
                  a(_3, v2), n(v2, `fill`, `currentColor`), n(v2, `strokeLinecap`, `butt`), n(v2, `strokeLinejoin`, `miter`);
                  let y2 = d(`polyline`);
                  a(v2, y2), n(y2, `points`, `3 14 9 14 9 17 15 17 15 14 21 14`), n(y2, `fill`, `none`), n(y2, `stroke`, `currentColor`), n(y2, `strokeMiterlimit`, `10`), n(y2, `strokeWidth`, `2`);
                  let b3 = d(`rect`);
                  a(v2, b3), n(b3, `x`, `3`), n(b3, `y`, `3`), n(b3, `width`, `18`), n(b3, `height`, `18`), n(b3, `rx`, `2`), n(b3, `ry`, `2`), n(b3, `fill`, `none`), n(b3, `stroke`, `currentColor`), n(b3, `strokeLinecap`, `square`), n(b3, `strokeMiterlimit`, `10`), n(b3, `strokeWidth`, `2`);
                  let x3 = d(`div`);
                  a(g2, x3), a(x3, r(`Inbox`));
                  let S3 = d(`div`);
                  a(t5, S3), u(() => {
                    n(S3, `active`, String(j.value === 2));
                  }), c(S3, `click`, () => j.value = 2);
                  let C2 = d(`svg`);
                  a(S3, C2), e(C2, `size-[1.2em]`), n(C2, `xmlns`, `http://www.w3.org/2000/svg`), n(C2, `viewBox`, `0 0 24 24`);
                  let w3 = d(`g`);
                  a(C2, w3), n(w3, `fill`, `currentColor`), n(w3, `strokeLinecap`, `butt`), n(w3, `strokeLinejoin`, `miter`);
                  let T2 = d(`circle`);
                  a(w3, T2), n(T2, `cx`, `12`), n(T2, `cy`, `12`), n(T2, `r`, `3`), n(T2, `fill`, `none`), n(T2, `stroke`, `currentColor`), n(T2, `strokeLinecap`, `square`), n(T2, `strokeMiterlimit`, `10`), n(T2, `strokeWidth`, `2`);
                  let E2 = d(`path`);
                  a(w3, E2), n(E2, `d`, `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`), n(E2, `fill`, `none`), n(E2, `stroke`, `currentColor`), n(E2, `strokeLinecap`, `square`), n(E2, `strokeMiterlimit`, `10`), n(E2, `strokeWidth`, `2`);
                  let D2 = d(`div`);
                  return a(S3, D2), a(D2, r(`Settings`)), {
                    vaporElement: t5
                  };
                })
              }), i4, p4, m2), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Dock size="lg" className="relative border border-base-300">
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Home</Dock.Label></Dock.Item>
  <Dock.Item active><svg className="size-[1.2em]" /><Dock.Label>Inbox</Dock.Label></Dock.Item>
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Settings</Dock.Label></Dock.Item>
</Dock>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), G, be, xe);
          });
          let q = d(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = d(`h2`);
          a(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(J, r(`# Dock Extra Large size`));
          let Se = f(`rue:component:start`), Ce = f(`rue:component:end`);
          a(q, Se), a(q, Ce), u(() => {
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
              activeKey: E.value,
              onChange: (e2) => E.value = e2,
              className: `mb-3`
            }), q, Se, Ce);
          });
          let we = f(`rue:slot:start`), Te = f(`rue:slot:end`);
          a(q, we), a(q, Te), u(() => {
            s(m(E.value === `preview` ? l(() => {
              let t4 = o(), i4 = d(`div`);
              a(t4, i4), e(i4, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let p4 = f(`rue:component:start`), m2 = f(`rue:component:end`);
              return a(i4, p4), a(i4, m2), s(h(C, {
                size: `xl`,
                className: `relative border border-base-300`,
                children: l(() => {
                  let t5 = o(), i5 = d(`div`);
                  a(t5, i5), u(() => {
                    n(i5, `active`, String(M.value === 0));
                  }), c(i5, `click`, () => M.value = 0);
                  let s2 = d(`svg`);
                  a(i5, s2), e(s2, `size-[1.2em]`), n(s2, `xmlns`, `http://www.w3.org/2000/svg`), n(s2, `viewBox`, `0 0 24 24`);
                  let l2 = d(`g`);
                  a(s2, l2), n(l2, `fill`, `currentColor`), n(l2, `strokeLinecap`, `butt`), n(l2, `strokeLinejoin`, `miter`);
                  let f2 = d(`polyline`);
                  a(l2, f2), n(f2, `points`, `1 11 12 2 23 11`), n(f2, `fill`, `none`), n(f2, `stroke`, `currentColor`), n(f2, `strokeMiterlimit`, `10`), n(f2, `strokeWidth`, `2`);
                  let p5 = d(`path`);
                  a(l2, p5), n(p5, `d`, `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`), n(p5, `fill`, `none`), n(p5, `stroke`, `currentColor`), n(p5, `strokeLinecap`, `square`), n(p5, `strokeMiterlimit`, `10`), n(p5, `strokeWidth`, `2`);
                  let m3 = d(`line`);
                  a(l2, m3), n(m3, `x1`, `12`), n(m3, `y1`, `22`), n(m3, `x2`, `12`), n(m3, `y2`, `18`), n(m3, `fill`, `none`), n(m3, `stroke`, `currentColor`), n(m3, `strokeLinecap`, `square`), n(m3, `strokeMiterlimit`, `10`), n(m3, `strokeWidth`, `2`);
                  let h2 = d(`div`);
                  a(i5, h2), a(h2, r(`Home`));
                  let g2 = d(`div`);
                  a(t5, g2), u(() => {
                    n(g2, `active`, String(M.value === 1));
                  }), c(g2, `click`, () => M.value = 1);
                  let _3 = d(`svg`);
                  a(g2, _3), e(_3, `size-[1.2em]`), n(_3, `xmlns`, `http://www.w3.org/2000/svg`), n(_3, `viewBox`, `0 0 24 24`);
                  let v2 = d(`g`);
                  a(_3, v2), n(v2, `fill`, `currentColor`), n(v2, `strokeLinecap`, `butt`), n(v2, `strokeLinejoin`, `miter`);
                  let y2 = d(`polyline`);
                  a(v2, y2), n(y2, `points`, `3 14 9 14 9 17 15 17 15 14 21 14`), n(y2, `fill`, `none`), n(y2, `stroke`, `currentColor`), n(y2, `strokeMiterlimit`, `10`), n(y2, `strokeWidth`, `2`);
                  let b3 = d(`rect`);
                  a(v2, b3), n(b3, `x`, `3`), n(b3, `y`, `3`), n(b3, `width`, `18`), n(b3, `height`, `18`), n(b3, `rx`, `2`), n(b3, `ry`, `2`), n(b3, `fill`, `none`), n(b3, `stroke`, `currentColor`), n(b3, `strokeLinecap`, `square`), n(b3, `strokeMiterlimit`, `10`), n(b3, `strokeWidth`, `2`);
                  let x3 = d(`div`);
                  a(g2, x3), a(x3, r(`Inbox`));
                  let S3 = d(`div`);
                  a(t5, S3), u(() => {
                    n(S3, `active`, String(M.value === 2));
                  }), c(S3, `click`, () => M.value = 2);
                  let C2 = d(`svg`);
                  a(S3, C2), e(C2, `size-[1.2em]`), n(C2, `xmlns`, `http://www.w3.org/2000/svg`), n(C2, `viewBox`, `0 0 24 24`);
                  let w3 = d(`g`);
                  a(C2, w3), n(w3, `fill`, `currentColor`), n(w3, `strokeLinecap`, `butt`), n(w3, `strokeLinejoin`, `miter`);
                  let T2 = d(`circle`);
                  a(w3, T2), n(T2, `cx`, `12`), n(T2, `cy`, `12`), n(T2, `r`, `3`), n(T2, `fill`, `none`), n(T2, `stroke`, `currentColor`), n(T2, `strokeLinecap`, `square`), n(T2, `strokeMiterlimit`, `10`), n(T2, `strokeWidth`, `2`);
                  let E2 = d(`path`);
                  a(w3, E2), n(E2, `d`, `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`), n(E2, `fill`, `none`), n(E2, `stroke`, `currentColor`), n(E2, `strokeLinecap`, `square`), n(E2, `strokeMiterlimit`, `10`), n(E2, `strokeWidth`, `2`);
                  let D2 = d(`div`);
                  return a(S3, D2), a(D2, r(`Settings`)), {
                    vaporElement: t5
                  };
                })
              }), i4, p4, m2), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Dock size="xl" className="relative border border-base-300">
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Home</Dock.Label></Dock.Item>
  <Dock.Item active><svg className="size-[1.2em]" /><Dock.Label>Inbox</Dock.Label></Dock.Item>
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Settings</Dock.Label></Dock.Item>
</Dock>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, we, Te);
          });
          let Y = d(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = d(`h2`);
          a(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(X, r(`# Dock with custom colors`));
          let Z = f(`rue:component:start`), Ee = f(`rue:component:end`);
          a(Y, Z), a(Y, Ee), u(() => {
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
              activeKey: D.value,
              onChange: (e2) => D.value = e2,
              className: `mb-3`
            }), Y, Z, Ee);
          });
          let De = f(`rue:slot:start`), Oe = f(`rue:slot:end`);
          a(Y, De), a(Y, Oe), u(() => {
            s(m(D.value === `preview` ? l(() => {
              let t4 = o(), i4 = d(`div`);
              a(t4, i4), e(i4, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let p4 = f(`rue:component:start`), m2 = f(`rue:component:end`);
              return a(i4, p4), a(i4, m2), s(h(C, {
                className: `relative bg-neutral text-neutral-content`,
                children: l(() => {
                  let t5 = o(), i5 = d(`div`);
                  a(t5, i5), u(() => {
                    n(i5, `active`, String(N.value === 0));
                  }), c(i5, `click`, () => N.value = 0);
                  let s2 = d(`svg`);
                  a(i5, s2), e(s2, `size-[1.2em]`), n(s2, `xmlns`, `http://www.w3.org/2000/svg`), n(s2, `viewBox`, `0 0 24 24`);
                  let l2 = d(`g`);
                  a(s2, l2), n(l2, `fill`, `currentColor`), n(l2, `strokeLinecap`, `butt`), n(l2, `strokeLinejoin`, `miter`);
                  let f2 = d(`polyline`);
                  a(l2, f2), n(f2, `points`, `1 11 12 2 23 11`), n(f2, `fill`, `none`), n(f2, `stroke`, `currentColor`), n(f2, `strokeMiterlimit`, `10`), n(f2, `strokeWidth`, `2`);
                  let p5 = d(`path`);
                  a(l2, p5), n(p5, `d`, `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`), n(p5, `fill`, `none`), n(p5, `stroke`, `currentColor`), n(p5, `strokeLinecap`, `square`), n(p5, `strokeMiterlimit`, `10`), n(p5, `strokeWidth`, `2`);
                  let m3 = d(`line`);
                  a(l2, m3), n(m3, `x1`, `12`), n(m3, `y1`, `22`), n(m3, `x2`, `12`), n(m3, `y2`, `18`), n(m3, `fill`, `none`), n(m3, `stroke`, `currentColor`), n(m3, `strokeLinecap`, `square`), n(m3, `strokeMiterlimit`, `10`), n(m3, `strokeWidth`, `2`);
                  let h2 = d(`div`);
                  a(i5, h2), a(h2, r(`Home`));
                  let g2 = d(`div`);
                  a(t5, g2), u(() => {
                    n(g2, `active`, String(N.value === 1));
                  }), c(g2, `click`, () => N.value = 1);
                  let _3 = d(`svg`);
                  a(g2, _3), e(_3, `size-[1.2em]`), n(_3, `xmlns`, `http://www.w3.org/2000/svg`), n(_3, `viewBox`, `0 0 24 24`);
                  let v2 = d(`g`);
                  a(_3, v2), n(v2, `fill`, `currentColor`), n(v2, `strokeLinecap`, `butt`), n(v2, `strokeLinejoin`, `miter`);
                  let y2 = d(`polyline`);
                  a(v2, y2), n(y2, `points`, `3 14 9 14 9 17 15 17 15 14 21 14`), n(y2, `fill`, `none`), n(y2, `stroke`, `currentColor`), n(y2, `strokeMiterlimit`, `10`), n(y2, `strokeWidth`, `2`);
                  let b3 = d(`rect`);
                  a(v2, b3), n(b3, `x`, `3`), n(b3, `y`, `3`), n(b3, `width`, `18`), n(b3, `height`, `18`), n(b3, `rx`, `2`), n(b3, `ry`, `2`), n(b3, `fill`, `none`), n(b3, `stroke`, `currentColor`), n(b3, `strokeLinecap`, `square`), n(b3, `strokeMiterlimit`, `10`), n(b3, `strokeWidth`, `2`);
                  let x3 = d(`div`);
                  a(g2, x3), a(x3, r(`Inbox`));
                  let S3 = d(`div`);
                  a(t5, S3), u(() => {
                    n(S3, `active`, String(N.value === 2));
                  }), c(S3, `click`, () => N.value = 2);
                  let C2 = d(`svg`);
                  a(S3, C2), e(C2, `size-[1.2em]`), n(C2, `xmlns`, `http://www.w3.org/2000/svg`), n(C2, `viewBox`, `0 0 24 24`);
                  let w3 = d(`g`);
                  a(C2, w3), n(w3, `fill`, `currentColor`), n(w3, `strokeLinecap`, `butt`), n(w3, `strokeLinejoin`, `miter`);
                  let T2 = d(`circle`);
                  a(w3, T2), n(T2, `cx`, `12`), n(T2, `cy`, `12`), n(T2, `r`, `3`), n(T2, `fill`, `none`), n(T2, `stroke`, `currentColor`), n(T2, `strokeLinecap`, `square`), n(T2, `strokeMiterlimit`, `10`), n(T2, `strokeWidth`, `2`);
                  let E2 = d(`path`);
                  a(w3, E2), n(E2, `d`, `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`), n(E2, `fill`, `none`), n(E2, `stroke`, `currentColor`), n(E2, `strokeLinecap`, `square`), n(E2, `strokeMiterlimit`, `10`), n(E2, `strokeWidth`, `2`);
                  let D2 = d(`div`);
                  return a(S3, D2), a(D2, r(`Settings`)), {
                    vaporElement: t5
                  };
                })
              }), i4, p4, m2), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Dock className="relative bg-neutral text-neutral-content">
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Home</Dock.Label></Dock.Item>
  <Dock.Item active><svg className="size-[1.2em]" /><Dock.Label>Inbox</Dock.Label></Dock.Item>
  <Dock.Item><svg className="size-[1.2em]" /><Dock.Label>Settings</Dock.Label></Dock.Item>
</Dock>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Y, De, Oe);
          });
          let Q = d(`div`);
          a(i3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = d(`h2`);
          a(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a($, r(`# Dock \u81EA\u52A8\u6E32\u67D3\uFF08items \u6570\u7EC4\uFF09`));
          let ke = f(`rue:component:start`), Ae = f(`rue:component:end`);
          a(Q, ke), a(Q, Ae), u(() => {
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
              activeKey: O.value,
              onChange: (e2) => O.value = e2,
              className: `mb-3`
            }), Q, ke, Ae);
          });
          let je = f(`rue:slot:start`), Me = f(`rue:slot:end`);
          return a(Q, je), a(Q, Me), u(() => {
            s(m(O.value === `preview` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `bg-base-300 rounded-box w-full max-w-sm pt-32`);
              let r2 = f(`rue:component:start`), i4 = f(`rue:component:end`);
              return a(n2, r2), a(n2, i4), u(() => {
                s(h(C, {
                  className: `relative border border-base-300`,
                  items: [
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`polyline`, {
                              points: `1 11 12 2 23 11`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`path`, {
                              d: `m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`line`, {
                              x1: `12`,
                              y1: `22`,
                              x2: `12`,
                              y2: `18`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      }),
                      label: `Home`
                    },
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`polyline`, {
                              points: `3 14 9 14 9 17 15 17 15 14 21 14`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`rect`, {
                              x: `3`,
                              y: `3`,
                              width: `18`,
                              height: `18`,
                              rx: `2`,
                              ry: `2`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      }),
                      label: `Inbox`
                    },
                    {
                      icon: h(`svg`, {
                        className: `size-[1.2em]`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        viewBox: `0 0 24 24`,
                        children: g(`g`, {
                          fill: `currentColor`,
                          strokeLinecap: `butt`,
                          strokeLinejoin: `miter`,
                          children: [
                            h(`circle`, {
                              cx: `12`,
                              cy: `12`,
                              r: `3`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            }),
                            h(`path`, {
                              d: `m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeLinecap: `square`,
                              strokeMiterlimit: `10`,
                              strokeWidth: `2`
                            })
                          ]
                        })
                      }),
                      label: `Settings`
                    }
                  ],
                  activeIndex: ne.value,
                  onChange: (e2) => ne.value = e2
                }), n2, r2, i4);
              }), {
                vaporElement: t4
              };
            }) : l(() => {
              let e2 = o(), t4 = f(`rue:component:start`), n2 = f(`rue:component:end`);
              return a(e2, t4), a(e2, n2), u(() => {
                s(h(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { ref } from 'rues';
import { Dock } from '@rue/design';
const activeAuto = ref(1);
<Dock
  className="relative border border-base-300"
  items={[
    { icon: (<svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>), label: 'Home' },
    { icon: (<svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>), label: 'Inbox' },
    { icon: (<svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>), label: 'Settings' },
  ]}
  activeIndex={activeAuto.value}
  onChange={(i) => (activeAuto.value = i)}
/>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Q, je, Me);
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
  w as default
};

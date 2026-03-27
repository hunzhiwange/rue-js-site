import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, z as f, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as p, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as m, s as h, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as g, t as _, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as v, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as y, __tla as __tla_6 } from "./button-eAeY0oyU.js";
import { t as b, __tla as __tla_7 } from "./avatar-C7SUHqoN.js";
let k;
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
  })()
]).then(async () => {
  let x, S, C, w, T, E, D, O;
  x = ({ direction: e2, className: t2, children: n2, items: r2 }) => {
    let i2 = `stats`;
    return e2 && (i2 += ` stats-${e2}`), t2 && (i2 += ` ${t2}`), r2 && r2.length ? m(`div`, {
      className: i2,
      children: r2.map((e3, t3) => {
        let n3 = e3.className;
        return h(S, {
          center: e3.center,
          className: n3,
          children: [
            e3.figure ? m(E, {
              className: e3.figureClassName,
              children: e3.figure
            }) : null,
            e3.title ? m(C, {
              className: e3.titleClassName,
              children: e3.title
            }) : null,
            e3.value ? m(w, {
              className: e3.valueClassName,
              children: e3.value
            }) : null,
            e3.desc ? m(T, {
              className: e3.descClassName,
              children: e3.desc
            }) : null,
            e3.actions ? m(D, {
              className: e3.actionsClassName,
              children: e3.actions
            }) : null
          ]
        }, t3);
      })
    }) : m(`div`, {
      className: i2,
      children: n2
    });
  };
  S = ({ center: e2, className: t2, children: n2 }) => {
    let r2 = `stat`;
    return e2 && (r2 += ` place-items-center`), t2 && (r2 += ` ${t2}`), m(`div`, {
      className: r2,
      children: n2
    });
  };
  C = ({ className: e2, children: t2 }) => {
    let n2 = `stat-title`;
    return e2 && (n2 += ` ${e2}`), m(`div`, {
      className: n2,
      children: t2
    });
  };
  w = ({ className: e2, children: t2 }) => {
    let n2 = `stat-value`;
    return e2 && (n2 += ` ${e2}`), m(`div`, {
      className: n2,
      children: t2
    });
  };
  T = ({ className: e2, children: t2 }) => {
    let n2 = `stat-desc`;
    return e2 && (n2 += ` ${e2}`), m(`div`, {
      className: n2,
      children: t2
    });
  };
  E = ({ className: e2, children: t2 }) => {
    let n2 = `stat-figure`;
    return e2 && (n2 += ` ${e2}`), m(`div`, {
      className: n2,
      children: t2
    });
  };
  D = ({ className: e2, children: t2 }) => {
    let n2 = `stat-actions`;
    return e2 && (n2 += ` ${e2}`), m(`div`, {
      className: n2,
      children: t2
    });
  };
  O = Object.assign(x, {
    Item: S,
    Title: C,
    Value: w,
    Desc: T,
    Figure: E,
    Actions: D
  });
  k = () => {
    let { tabBasic: h2, tabWithIcons: x2, tabGroup: S2, tabCentered: C2, tabVertical: w2, tabResponsive: T2, tabCustomColors: E2, tabArray: D2, statItems: k2 } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabWithIcons: t(`ref:1:1`, () => f(`preview`)),
      tabGroup: t(`ref:1:2`, () => f(`preview`)),
      tabCentered: t(`ref:1:3`, () => f(`preview`)),
      tabVertical: t(`ref:1:4`, () => f(`preview`)),
      tabResponsive: t(`ref:1:5`, () => f(`preview`)),
      tabCustomColors: t(`ref:1:6`, () => f(`preview`)),
      tabArray: t(`ref:1:7`, () => f(`preview`)),
      statItems: [
        {
          figure: m(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            fill: `none`,
            viewBox: `0 0 24 24`,
            className: `inline-block w-8 h-8 stroke-current`,
            children: m(`path`, {
              "stroke-linecap": `round`,
              "stroke-linejoin": `round`,
              "stroke-width": `2`,
              d: `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`
            })
          }),
          figureClassName: `text-secondary`,
          title: `Downloads`,
          value: `31K`,
          desc: `Jan 1st - Feb 1st`
        },
        {
          center: true,
          title: `Users`,
          value: m(`span`, {
            className: `text-secondary`,
            children: `4,200`
          }),
          desc: m(`span`, {
            className: `text-secondary`,
            children: `\u2197\uFE0E 40 (2%)`
          })
        },
        {
          title: `Account balance`,
          value: `$89,400`,
          actions: m(y, {
            variant: `success`,
            size: `xs`,
            children: `Add funds`
          })
        }
      ]
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(g, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Stat \u7EDF\u8BA1`));
          let g2 = u(`p`);
          a(i3, g2), e(g2, `text-sm mt-3 mb-3`), a(g2, r(`Stat \u7528\u4E8E\u5728\u4E00\u4E2A\u5757\u4E2D\u5C55\u793A\u6570\u5B57\u4E0E\u6570\u636E\u3002`));
          let A = u(`div`);
          a(i3, A), e(A, `text-sm`);
          let j = u(`a`);
          a(A, j), n(j, `href`, `https://daisyui.com/components/stat/`), n(j, `target`, `_blank`), a(j, r(`\u67E5\u770B Stat \u9759\u6001\u6837\u5F0F`));
          let M = u(`div`);
          a(i3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = u(`h2`);
          a(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(N, r(`# Stat`));
          let P = d(`rue:component:start`), F = d(`rue:component:end`);
          a(M, P), a(M, F), l(() => {
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
            }), M, P, F);
          });
          let ee = d(`rue:slot:start`), te = d(`rue:slot:end`);
          a(M, ee), a(M, te), l(() => {
            s(p(h2.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), s(m(O, {
                className: `shadow`,
                children: c(() => {
                  let e3 = o(), t5 = u(`div`);
                  a(e3, t5);
                  let n3 = u(`div`);
                  a(t5, n3), a(n3, r(`Total Page Views`));
                  let i4 = u(`div`);
                  a(t5, i4), a(i4, r(`89,400`));
                  let s2 = u(`div`);
                  return a(t5, s2), a(s2, r(`21% more than last month`)), {
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
                  code: `<Stat className="shadow">
  <Stat.Item>
    <Stat.Title>Total Page Views</Stat.Title>
    <Stat.Value>89,400</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
</Stat>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), M, ee, te);
          });
          let I = u(`div`);
          a(i3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let L = u(`h2`);
          a(I, L), e(L, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(L, r(`# Stat \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let ne = d(`rue:component:start`), re = d(`rue:component:end`);
          a(I, ne), a(I, re), l(() => {
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
              activeKey: D2.value,
              onChange: (e2) => D2.value = e2,
              className: `mb-3`
            }), I, ne, re);
          });
          let ie = d(`rue:slot:start`), ae = d(`rue:slot:end`);
          a(I, ie), a(I, ae), l(() => {
            s(p(D2.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(O, {
                  items: k2,
                  className: `shadow`
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
                  code: `import { Button, Stat } from '@rue/design';
const statItems = [
  {
    figure: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    figureClassName: 'text-secondary',
    title: 'Downloads',
    value: '31K',
    desc: 'Jan 1st - Feb 1st',
  },
  { center: true, title: 'Users', value: <span className="text-secondary">4,200</span>, desc: <span className="text-secondary">\u2197\uFE0E 40 (2%)</span> },
  { title: 'Account balance', value: '$89,400', actions: <Button variant="success" size="xs">Add funds</Button> },
];
<Stat items={statItems} className="shadow" />`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), I, ie, ae);
          });
          let R = u(`div`);
          a(i3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = u(`h2`);
          a(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(z, r(`# Stat with icons or image`));
          let oe = d(`rue:component:start`), se = d(`rue:component:end`);
          a(R, oe), a(R, se), l(() => {
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
              activeKey: x2.value,
              onChange: (e2) => x2.value = e2,
              className: `mb-3`
            }), R, oe, se);
          });
          let ce = d(`rue:slot:start`), B = d(`rue:slot:end`);
          a(R, ce), a(R, B), l(() => {
            s(p(x2.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(O, {
                className: `shadow`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5);
                  let l3 = u(`div`);
                  a(i5, l3), e(l3, `text-primary`);
                  let f4 = u(`svg`);
                  a(l3, f4), n(f4, `xmlns`, `http://www.w3.org/2000/svg`), n(f4, `fill`, `none`), n(f4, `viewBox`, `0 0 24 24`), e(f4, `inline-block w-8 h-8 stroke-current`);
                  let p2 = u(`path`);
                  a(f4, p2), n(p2, `stroke-linecap`, `round`), n(p2, `stroke-linejoin`, `round`), n(p2, `stroke-width`, `2`), n(p2, `d`, `M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`);
                  let h3 = u(`div`);
                  a(i5, h3), a(h3, r(`Total Likes`));
                  let g3 = u(`div`);
                  a(i5, g3), e(g3, `text-primary`), a(g3, r(`25.6K`));
                  let _2 = u(`div`);
                  a(i5, _2), a(_2, r(`21% more than last month`));
                  let v2 = u(`div`);
                  a(t5, v2);
                  let y2 = u(`div`);
                  a(v2, y2), e(y2, `text-secondary`);
                  let x3 = u(`svg`);
                  a(y2, x3), n(x3, `xmlns`, `http://www.w3.org/2000/svg`), n(x3, `fill`, `none`), n(x3, `viewBox`, `0 0 24 24`), e(x3, `inline-block w-8 h-8 stroke-current`);
                  let S3 = u(`path`);
                  a(x3, S3), n(S3, `stroke-linecap`, `round`), n(S3, `stroke-linejoin`, `round`), n(S3, `stroke-width`, `2`), n(S3, `d`, `M13 10V3L4 14h7v7l9-11h-7z`);
                  let C3 = u(`div`);
                  a(v2, C3), a(C3, r(`Page Views`));
                  let w3 = u(`div`);
                  a(v2, w3), e(w3, `text-secondary`), a(w3, r(`2.6M`));
                  let T3 = u(`div`);
                  a(v2, T3), a(T3, r(`21% more than last month`));
                  let E3 = u(`div`);
                  a(t5, E3);
                  let D3 = u(`div`);
                  a(E3, D3), e(D3, `text-secondary`);
                  let O2 = d(`rue:component:start`), k3 = d(`rue:component:end`);
                  a(D3, O2), a(D3, k3), s(m(b, {
                    status: `online`,
                    children: c(() => {
                      let t6 = o(), r2 = u(`div`);
                      a(t6, r2), e(r2, `w-16 rounded-full`);
                      let i6 = u(`img`);
                      return a(r2, i6), n(i6, `alt`, `Tailwind CSS stat example component`), n(i6, `src`, `https://img.daisyui.com/images/profile/demo/anakeen@192.webp`), {
                        vaporElement: t6
                      };
                    })
                  }), D3, O2, k3);
                  let A2 = u(`div`);
                  a(E3, A2), a(A2, r(`86%`));
                  let j2 = u(`div`);
                  a(E3, j2), a(j2, r(`Tasks done`));
                  let M2 = u(`div`);
                  return a(E3, M2), e(M2, `text-secondary`), a(M2, r(`31 tasks remaining`)), {
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
                  code: `<Stat className="shadow">
  <Stat.Item>
    <Stat.Figure className="text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </Stat.Figure>
    <Stat.Title>Total Likes</Stat.Title>
    <Stat.Value className="text-primary">25.6K</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </Stat.Figure>
    <Stat.Title>Page Views</Stat.Title>
    <Stat.Value className="text-secondary">2.6M</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary">
      <Avatar status="online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
        </div>
      </Avatar>
    </Stat.Figure>
    <Stat.Value>86%</Stat.Value>
    <Stat.Title>Tasks done</Stat.Title>
    <Stat.Desc className="text-secondary">31 tasks remaining</Stat.Desc>
  </Stat.Item>
</Stat>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), R, ce, B);
          });
          let V = u(`div`);
          a(i3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = u(`h2`);
          a(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(H, r(`# Stat`));
          let U = d(`rue:component:start`), W = d(`rue:component:end`);
          a(V, U), a(V, W), l(() => {
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
              activeKey: S2.value,
              onChange: (e2) => S2.value = e2,
              className: `mb-3`
            }), V, U, W);
          });
          let le = d(`rue:slot:start`), ue = d(`rue:slot:end`);
          a(V, le), a(V, ue), l(() => {
            s(p(S2.value === `preview` ? c(() => {
              let t4 = o(), i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              return a(t4, i4), a(t4, l2), s(m(O, {
                className: `shadow`,
                children: c(() => {
                  let t5 = o(), i5 = u(`div`);
                  a(t5, i5);
                  let s2 = u(`div`);
                  a(i5, s2), e(s2, `text-secondary`);
                  let c2 = u(`svg`);
                  a(s2, c2), n(c2, `xmlns`, `http://www.w3.org/2000/svg`), n(c2, `fill`, `none`), n(c2, `viewBox`, `0 0 24 24`), e(c2, `inline-block w-8 h-8 stroke-current`);
                  let l3 = u(`path`);
                  a(c2, l3), n(l3, `stroke-linecap`, `round`), n(l3, `stroke-linejoin`, `round`), n(l3, `stroke-width`, `2`), n(l3, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let d2 = u(`div`);
                  a(i5, d2), a(d2, r(`Downloads`));
                  let f4 = u(`div`);
                  a(i5, f4), a(f4, r(`31K`));
                  let p2 = u(`div`);
                  a(i5, p2), a(p2, r(`Jan 1st - Feb 1st`));
                  let m2 = u(`div`);
                  a(t5, m2);
                  let h3 = u(`div`);
                  a(m2, h3), e(h3, `text-secondary`);
                  let g3 = u(`svg`);
                  a(h3, g3), n(g3, `xmlns`, `http://www.w3.org/2000/svg`), n(g3, `fill`, `none`), n(g3, `viewBox`, `0 0 24 24`), e(g3, `inline-block w-8 h-8 stroke-current`);
                  let _2 = u(`path`);
                  a(g3, _2), n(_2, `stroke-linecap`, `round`), n(_2, `stroke-linejoin`, `round`), n(_2, `stroke-width`, `2`), n(_2, `d`, `M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`);
                  let v2 = u(`div`);
                  a(m2, v2), a(v2, r(`New Users`));
                  let y2 = u(`div`);
                  a(m2, y2), a(y2, r(`4,200`));
                  let b2 = u(`div`);
                  a(m2, b2), a(b2, r(`\u2197\uFE0E 400 (22%)`));
                  let x3 = u(`div`);
                  a(t5, x3);
                  let S3 = u(`div`);
                  a(x3, S3), e(S3, `text-secondary`);
                  let C3 = u(`svg`);
                  a(S3, C3), n(C3, `xmlns`, `http://www.w3.org/2000/svg`), n(C3, `fill`, `none`), n(C3, `viewBox`, `0 0 24 24`), e(C3, `inline-block w-8 h-8 stroke-current`);
                  let w3 = u(`path`);
                  a(C3, w3), n(w3, `stroke-linecap`, `round`), n(w3, `stroke-linejoin`, `round`), n(w3, `stroke-width`, `2`), n(w3, `d`, `M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`);
                  let T3 = u(`div`);
                  a(x3, T3), a(T3, r(`New Registers`));
                  let E3 = u(`div`);
                  a(x3, E3), a(E3, r(`1,200`));
                  let D3 = u(`div`);
                  return a(x3, D3), a(D3, r(`\u2198\uFE0E 90 (14%)`)), {
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
                  code: `<Stat className="shadow">
  <Stat.Item>
    <Stat.Figure className="text-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></Stat.Figure>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></Stat.Figure>
    <Stat.Title>New Users</Stat.Title>
    <Stat.Value>4,200</Stat.Value>
    <Stat.Desc>\u2197\uFE0E 400 (22%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg></Stat.Figure>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>\u2198\uFE0E 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), V, le, ue);
          });
          let G = u(`div`);
          a(i3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = u(`h2`);
          a(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(K, r(`# Centered items`));
          let de = d(`rue:component:start`), fe = d(`rue:component:end`);
          a(G, de), a(G, fe), l(() => {
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
              activeKey: C2.value,
              onChange: (e2) => C2.value = e2,
              className: `mb-3`
            }), G, de, fe);
          });
          let pe = d(`rue:slot:start`), me = d(`rue:slot:end`);
          a(G, pe), a(G, me), l(() => {
            s(p(C2.value === `preview` ? c(() => {
              let t4 = o(), n2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, n2), a(t4, i4), s(m(O, {
                className: `shadow`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3);
                  let i5 = u(`div`);
                  a(n3, i5), a(i5, r(`Downloads`));
                  let s2 = u(`div`);
                  a(n3, s2), a(s2, r(`31K`));
                  let c2 = u(`div`);
                  a(n3, c2), a(c2, r(`From January 1st to February 1st`));
                  let l2 = u(`div`);
                  a(t5, l2);
                  let d2 = u(`div`);
                  a(l2, d2), a(d2, r(`Users`));
                  let f4 = u(`div`);
                  a(l2, f4), e(f4, `text-secondary`), a(f4, r(`4,200`));
                  let p2 = u(`div`);
                  a(l2, p2), e(p2, `text-secondary`), a(p2, r(`\u2197\uFE0E 40 (2%)`));
                  let m2 = u(`div`);
                  a(t5, m2);
                  let h3 = u(`div`);
                  a(m2, h3), a(h3, r(`New Registers`));
                  let g3 = u(`div`);
                  a(m2, g3), a(g3, r(`1,200`));
                  let _2 = u(`div`);
                  return a(m2, _2), a(_2, r(`\u2198\uFE0E 90 (14%)`)), {
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
                  code: `<Stat className="shadow">
  <Stat.Item center>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>From January 1st to February 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item center>
    <Stat.Title>Users</Stat.Title>
    <Stat.Value className="text-secondary">4,200</Stat.Value>
    <Stat.Desc className="text-secondary">\u2197\uFE0E 40 (2%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item center>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>\u2198\uFE0E 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), G, pe, me);
          });
          let q = u(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = u(`h2`);
          a(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(J, r(`# Vertical`));
          let he = d(`rue:component:start`), ge = d(`rue:component:end`);
          a(q, he), a(q, ge), l(() => {
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
              activeKey: w2.value,
              onChange: (e2) => w2.value = e2,
              className: `mb-3`
            }), q, he, ge);
          });
          let _e = d(`rue:slot:start`), ve = d(`rue:slot:end`);
          a(q, _e), a(q, ve), l(() => {
            s(p(w2.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), s(m(O, {
                direction: `vertical`,
                className: `shadow`,
                children: c(() => {
                  let e3 = o(), t5 = u(`div`);
                  a(e3, t5);
                  let n3 = u(`div`);
                  a(t5, n3), a(n3, r(`Downloads`));
                  let i4 = u(`div`);
                  a(t5, i4), a(i4, r(`31K`));
                  let s2 = u(`div`);
                  a(t5, s2), a(s2, r(`Jan 1st - Feb 1st`));
                  let c2 = u(`div`);
                  a(e3, c2);
                  let l2 = u(`div`);
                  a(c2, l2), a(l2, r(`New Users`));
                  let d2 = u(`div`);
                  a(c2, d2), a(d2, r(`4,200`));
                  let f4 = u(`div`);
                  a(c2, f4), a(f4, r(`\u2197\uFE0E 400 (22%)`));
                  let p2 = u(`div`);
                  a(e3, p2);
                  let m2 = u(`div`);
                  a(p2, m2), a(m2, r(`New Registers`));
                  let h3 = u(`div`);
                  a(p2, h3), a(h3, r(`1,200`));
                  let g3 = u(`div`);
                  return a(p2, g3), a(g3, r(`\u2198\uFE0E 90 (14%)`)), {
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
                  code: `<Stat direction="vertical" className="shadow">
  <Stat.Item>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Users</Stat.Title>
    <Stat.Value>4,200</Stat.Value>
    <Stat.Desc>\u2197\uFE0E 400 (22%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>\u2198\uFE0E 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, _e, ve);
          });
          let Y = u(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = u(`h2`);
          a(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(X, r(`# Responsive (vertical on small screen, horizontal on large screen)`));
          let ye = d(`rue:component:start`), be = d(`rue:component:end`);
          a(Y, ye), a(Y, be), l(() => {
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
              activeKey: T2.value,
              onChange: (e2) => T2.value = e2,
              className: `mb-3`
            }), Y, ye, be);
          });
          let xe = d(`rue:slot:start`), Se = d(`rue:slot:end`);
          a(Y, xe), a(Y, Se), l(() => {
            s(p(T2.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), s(m(O, {
                direction: `vertical`,
                className: `shadow lg:stats-horizontal`,
                children: c(() => {
                  let e3 = o(), t5 = u(`div`);
                  a(e3, t5);
                  let n3 = u(`div`);
                  a(t5, n3), a(n3, r(`Downloads`));
                  let i4 = u(`div`);
                  a(t5, i4), a(i4, r(`31K`));
                  let s2 = u(`div`);
                  a(t5, s2), a(s2, r(`Jan 1st - Feb 1st`));
                  let c2 = u(`div`);
                  a(e3, c2);
                  let l2 = u(`div`);
                  a(c2, l2), a(l2, r(`New Users`));
                  let d2 = u(`div`);
                  a(c2, d2), a(d2, r(`4,200`));
                  let f4 = u(`div`);
                  a(c2, f4), a(f4, r(`\u2197\uFE0E 400 (22%)`));
                  let p2 = u(`div`);
                  a(e3, p2);
                  let m2 = u(`div`);
                  a(p2, m2), a(m2, r(`New Registers`));
                  let h3 = u(`div`);
                  a(p2, h3), a(h3, r(`1,200`));
                  let g3 = u(`div`);
                  return a(p2, g3), a(g3, r(`\u2198\uFE0E 90 (14%)`)), {
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
                  code: `<Stat direction="vertical" className="shadow lg:stats-horizontal">
  <Stat.Item>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Users</Stat.Title>
    <Stat.Value>4,200</Stat.Value>
    <Stat.Desc>\u2197\uFE0E 400 (22%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>\u2198\uFE0E 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Y, xe, Se);
          });
          let Z = u(`div`);
          a(i3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Q = u(`h2`);
          a(Z, Q), e(Q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(Q, r(`# With custom colors and button`));
          let Ce = d(`rue:component:start`), $ = d(`rue:component:end`);
          a(Z, Ce), a(Z, $), l(() => {
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
              activeKey: E2.value,
              onChange: (e2) => E2.value = e2,
              className: `mb-3`
            }), Z, Ce, $);
          });
          let we = d(`rue:slot:start`), Te = d(`rue:slot:end`);
          return a(Z, we), a(Z, Te), l(() => {
            s(p(E2.value === `preview` ? c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), s(m(O, {
                className: `bg-base-100 border border-base-300`,
                children: c(() => {
                  let e3 = o(), t5 = u(`div`);
                  a(e3, t5);
                  let n3 = u(`div`);
                  a(t5, n3), a(n3, r(`Account balance`));
                  let i4 = u(`div`);
                  a(t5, i4), a(i4, r(`$89,400`));
                  let c2 = u(`div`);
                  a(t5, c2);
                  let l2 = d(`rue:component:start`), f4 = d(`rue:component:end`);
                  a(c2, l2), a(c2, f4), s(m(y, {
                    variant: `success`,
                    size: `xs`,
                    children: `Add funds`
                  }), c2, l2, f4);
                  let p2 = u(`div`);
                  a(e3, p2);
                  let h3 = u(`div`);
                  a(p2, h3), a(h3, r(`Current balance`));
                  let g3 = u(`div`);
                  a(p2, g3), a(g3, r(`$89,400`));
                  let _2 = u(`div`);
                  a(p2, _2);
                  let v2 = d(`rue:component:start`), b2 = d(`rue:component:end`);
                  a(_2, v2), a(_2, b2), s(m(y, {
                    size: `xs`,
                    children: `Withdrawal`
                  }), _2, v2, b2);
                  let x3 = d(`rue:component:start`), S3 = d(`rue:component:end`);
                  return a(_2, x3), a(_2, S3), s(m(y, {
                    size: `xs`,
                    children: `Deposit`
                  }), _2, x3, S3), {
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
                  code: `<Stat className="bg-base-100 border border-base-300">
  <Stat.Item>
    <Stat.Title>Account balance</Stat.Title>
    <Stat.Value>$89,400</Stat.Value>
    <Stat.Actions>
      <Button variant="success" size="xs">Add funds</Button>
    </Stat.Actions>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>Current balance</Stat.Title>
    <Stat.Value>$89,400</Stat.Value>
    <Stat.Actions>
      <Button size="xs">Withdrawal</Button>
      <Button size="xs">Deposit</Button>
    </Stat.Actions>
  </Stat.Item>
</Stat>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Z, we, Te);
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
  k as default
};

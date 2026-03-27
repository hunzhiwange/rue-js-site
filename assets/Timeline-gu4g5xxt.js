import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, r as g, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as _, s as v, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as y, t as b, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as x, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let D;
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
  let S, C, w, T, E;
  S = ({ direction: e2, snapIcon: t2, compact: n2, className: r2, children: i2, items: a2 }) => {
    let o2 = `timeline`;
    return e2 && (o2 += ` timeline-${e2}`), t2 && (o2 += ` timeline-snap-icon`), n2 && (o2 += ` timeline-compact`), r2 && (o2 += ` ${r2}`), a2 && a2.length ? _(`ul`, {
      className: o2,
      children: a2.map((e3, t3) => v(`li`, {
        className: e3.liClassName,
        children: [
          e3.beforeLine ? _(`hr`, {}) : null,
          e3.start ? _(C, {
            box: e3.start.box,
            className: e3.start.className,
            children: e3.start.content
          }) : null,
          e3.middle ? _(w, {
            className: e3.middle.className,
            children: e3.middle.content
          }) : null,
          e3.end ? _(T, {
            box: e3.end.box,
            className: e3.end.className,
            children: e3.end.content
          }) : null,
          e3.afterLine ? _(`hr`, {}) : null
        ]
      }, t3))
    }) : _(`ul`, {
      className: o2,
      children: i2
    });
  };
  C = ({ box: e2, className: t2, children: n2 }) => {
    let r2 = `timeline-start`;
    return e2 && (r2 += ` timeline-box`), t2 && (r2 += ` ${t2}`), _(`div`, {
      className: r2,
      children: n2
    });
  };
  w = ({ className: e2, children: t2 }) => {
    let n2 = `timeline-middle`;
    return e2 && (n2 += ` ${e2}`), _(`div`, {
      className: n2,
      children: t2
    });
  };
  T = ({ box: e2, className: t2, children: n2 }) => {
    let r2 = `timeline-end`;
    return e2 && (r2 += ` timeline-box`), t2 && (r2 += ` ${t2}`), _(`div`, {
      className: r2,
      children: n2
    });
  };
  E = Object.assign(S, {
    Start: C,
    Middle: w,
    End: T
  });
  D = () => {
    let { tabBothSides: v2, tabBottomOnly: S2, tabDifferentSides: C2, tabColorfulLines: w2, tabNoIcons: T2, tabVBothSides: D2, tabVRightOnly: O, tabVDifferentSides: k, tabVColorfulLines: A, tabSnapStart: j, tabArray: M, tabArrayInternal: N, timelineData: ee, timelineItems: te } = n(`useSetup:0:0`, () => o(() => ({
      tabBothSides: n(`ref:1:0`, () => m(`preview`)),
      tabBottomOnly: n(`ref:1:1`, () => m(`preview`)),
      tabDifferentSides: n(`ref:1:2`, () => m(`preview`)),
      tabColorfulLines: n(`ref:1:3`, () => m(`preview`)),
      tabNoIcons: n(`ref:1:4`, () => m(`preview`)),
      tabVBothSides: n(`ref:1:5`, () => m(`preview`)),
      tabVRightOnly: n(`ref:1:6`, () => m(`preview`)),
      tabVDifferentSides: n(`ref:1:7`, () => m(`preview`)),
      tabVColorfulLines: n(`ref:1:8`, () => m(`preview`)),
      tabSnapStart: n(`ref:1:9`, () => m(`preview`)),
      tabArray: n(`ref:1:10`, () => m(`preview`)),
      tabArrayInternal: n(`ref:1:11`, () => m(`preview`)),
      timelineData: [
        {
          beforeLine: false,
          start: `First Macintosh computer`,
          middleIcon: _(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            className: `w-5 h-5`,
            children: _(`path`, {
              "fill-rule": `evenodd`,
              d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
              "clip-rule": `evenodd`
            })
          }),
          end: `iMac`,
          afterLine: true
        },
        {
          beforeLine: true,
          start: `iPod`,
          middleIcon: _(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            className: `w-5 h-5`,
            children: _(`path`, {
              "fill-rule": `evenodd`,
              d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
              "clip-rule": `evenodd`
            })
          }),
          end: `iPhone`,
          afterLine: true
        },
        {
          beforeLine: true,
          start: `Apple Watch`,
          middleIcon: _(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            className: `w-5 h-5`,
            children: _(`path`, {
              "fill-rule": `evenodd`,
              d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
              "clip-rule": `evenodd`
            })
          }),
          afterLine: false
        }
      ],
      timelineItems: [
        {
          beforeLine: true,
          start: {
            box: true,
            content: _(`span`, {
              children: `First Macintosh computer`
            })
          },
          middle: {
            content: _(`svg`, {
              xmlns: `http://www.w3.org/2000/svg`,
              viewBox: `0 0 20 20`,
              fill: `currentColor`,
              className: `w-5 h-5`,
              children: _(`path`, {
                "fill-rule": `evenodd`,
                d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
                "clip-rule": `evenodd`
              })
            })
          },
          end: {
            box: true,
            content: _(`span`, {
              children: `iMac`
            })
          },
          afterLine: true
        },
        {
          beforeLine: true,
          middle: {
            content: _(`span`, {
              children: `Milestone`
            })
          },
          afterLine: true
        }
      ]
    })));
    return u(() => {
      let n2 = c(), o2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return s(n2, o2), s(n2, m2), l(_(y, {
        children: u(() => {
          let n3 = c(), o3 = f(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          s(o3, m3), s(m3, a(`Timeline \u65F6\u95F4\u7EBF`));
          let y2 = f(`p`);
          s(o3, y2), e(y2, `text-sm mt-3 mb-3`), s(y2, a(`\u65F6\u95F4\u7EBF\u7528\u4E8E\u6309\u65F6\u95F4\u987A\u5E8F\u5C55\u793A\u4E00\u7CFB\u5217\u4E8B\u4EF6\u6216\u8FDB\u7A0B\u8282\u70B9\u3002`));
          let ne = f(`div`);
          s(o3, ne), e(ne, `text-sm`);
          let re = f(`a`);
          s(ne, re), i(re, `href`, `https://daisyui.com/components/timeline/`), i(re, `target`, `_blank`), s(re, a(`\u67E5\u770B Timeline \u9759\u6001\u6837\u5F0F`));
          let P = f(`div`);
          s(o3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ie = f(`h2`);
          s(P, ie), e(ie, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ie, a(`# Timeline \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF09`));
          let ae = p(`rue:component:start`), oe = p(`rue:component:end`);
          s(P, ae), s(P, oe), d(() => {
            l(_(b, {
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
            }), P, ae, oe);
          });
          let se = p(`rue:slot:start`), ce = p(`rue:slot:end`);
          s(P, se), s(P, ce), d(() => {
            l(h(M.value === `preview` ? u(() => {
              let e2 = c(), n4 = p(`rue:component:start`), o4 = p(`rue:component:end`);
              return s(e2, n4), s(e2, o4), l(_(E, {
                children: u(() => {
                  let e3 = c(), n5 = p(`rue:list:start`), o5 = p(`rue:list:end`);
                  s(e3, n5), s(e3, o5);
                  let m4 = /* @__PURE__ */ new Map();
                  return d(() => {
                    m4 = g({
                      items: ee || [],
                      getKey: (e4, t2) => t2,
                      elements: m4,
                      parent: n5.parentNode,
                      before: o5,
                      start: n5,
                      renderItem: (e4, n6, o6, m5, g2) => {
                        l(u(() => {
                          let n7 = c(), o7 = f(`li`);
                          s(n7, o7), d(() => {
                            i(o7, `key`, String(g2));
                          });
                          let m6 = p(`rue:slot:start`), _2 = p(`rue:slot:end`);
                          s(o7, m6), s(o7, _2), d(() => {
                            l(h(e4.beforeLine ? u(() => {
                              let e5 = c();
                              return s(e5, f(`hr`)), {
                                vaporElement: e5
                              };
                            }) : ``), o7, m6, _2);
                          }), s(o7, a(` `));
                          let v3 = p(`rue:slot:start`), y3 = p(`rue:slot:end`);
                          s(o7, v3), s(o7, y3), d(() => {
                            l(h(e4.start ? u(() => {
                              let n8 = c(), i2 = f(`div`);
                              s(n8, i2);
                              let a2 = t(i2);
                              return s(i2, a2), d(() => {
                                r(a2, e4.start);
                              }), {
                                vaporElement: n8
                              };
                            }) : ``), o7, v3, y3);
                          }), s(o7, a(` `));
                          let b2 = p(`rue:slot:start`), x2 = p(`rue:slot:end`);
                          s(o7, b2), s(o7, x2), d(() => {
                            l(h(e4.middleIcon ? u(() => {
                              let n8 = c(), i2 = f(`div`);
                              s(n8, i2);
                              let a2 = t(i2);
                              return s(i2, a2), d(() => {
                                r(a2, e4.middleIcon);
                              }), {
                                vaporElement: n8
                              };
                            }) : ``), o7, b2, x2);
                          }), s(o7, a(` `));
                          let S3 = p(`rue:slot:start`), C3 = p(`rue:slot:end`);
                          s(o7, S3), s(o7, C3), d(() => {
                            l(h(e4.end ? u(() => {
                              let n8 = c(), i2 = f(`div`);
                              s(n8, i2);
                              let a2 = t(i2);
                              return s(i2, a2), d(() => {
                                r(a2, e4.end);
                              }), {
                                vaporElement: n8
                              };
                            }) : ``), o7, S3, C3);
                          }), s(o7, a(` `));
                          let w3 = p(`rue:slot:start`), T3 = p(`rue:slot:end`);
                          return s(o7, w3), s(o7, T3), d(() => {
                            l(h(e4.afterLine ? u(() => {
                              let e5 = c();
                              return s(e5, f(`hr`)), {
                                vaporElement: e5
                              };
                            }) : ``), o7, w3, T3);
                          }), {
                            vaporElement: n7
                          };
                        }), n6, o6, m5);
                      }
                    });
                  }), {
                    vaporElement: e3
                  };
                })
              }), e2, n4, o4), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { ref } from 'rues'
import { Timeline } from '@rue/design'
const tabArray = ref<'preview' | 'code'>('preview')
const timelineData = [
  {
    beforeLine: false,
    start: 'First Macintosh computer',
    middleIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    end: 'iMac',
    afterLine: true,
  },
  {
    beforeLine: true,
    start: 'iPod',
    middleIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    end: 'iPhone',
    afterLine: true,
  },
  {
    beforeLine: true,
    start: 'Apple Watch',
    middleIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    afterLine: false,
  },
]
<Timeline>
  {timelineData.map((m, i) => (
    <li key={i}>
      {m.beforeLine ? <hr /> : null}
      {m.start ? <Timeline.Start box>{m.start}</Timeline.Start> : null}
      {m.middleIcon ? <Timeline.Middle>{m.middleIcon}</Timeline.Middle> : null}
      {m.end ? <Timeline.End box>{m.end}</Timeline.End> : null}
      {m.afterLine ? <hr /> : null}
    </li>
  ))}
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), P, se, ce);
          });
          let F = f(`div`);
          s(o3, F), e(F, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let le = f(`h2`);
          s(F, le), e(le, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(le, a(`# Timeline \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let ue = p(`rue:component:start`), de = p(`rue:component:end`);
          s(F, ue), s(F, de), d(() => {
            l(_(b, {
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
            }), F, ue, de);
          });
          let fe = p(`rue:slot:start`), pe = p(`rue:slot:end`);
          s(F, fe), s(F, pe), d(() => {
            l(h(N.value === `preview` ? u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(E, {
                  items: te
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Timeline } from '@rue/design'
const timelineItems = [
  {
    beforeLine: true,
    start: { box: true, content: <span>First Macintosh computer</span> },
    middle: {
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    end: { box: true, content: <span>iMac</span> },
    afterLine: true,
  },
  {
    beforeLine: true,
    middle: { content: <span>Milestone</span> },
    afterLine: true,
  },
] as const
<Timeline items={timelineItems} />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), F, fe, pe);
          });
          let me = f(`div`);
          s(F, me), e(me, `alert my-3`);
          let I = f(`p`);
          s(me, I), e(I, `text-sm mt-3 mb-3`);
          let L = f(`svg`);
          s(I, L), i(L, `class`, `size-4 ms-2 inline-block text-info`), i(L, `xmlns`, `http://www.w3.org/2000/svg`), i(L, `viewBox`, `0 0 24 24`);
          let R = f(`g`);
          s(L, R), i(R, `fill`, `currentColor`), i(R, `stroke-linejoin`, `miter`), i(R, `stroke-linecap`, `butt`);
          let z = f(`circle`);
          s(R, z), i(z, `cx`, `12`), i(z, `cy`, `12`), i(z, `r`, `10`), i(z, `fill`, `none`), i(z, `stroke`, `currentColor`), i(z, `stroke-linecap`, `square`), i(z, `stroke-miterlimit`, `10`), i(z, `stroke-width`, `2`);
          let B = f(`path`);
          s(R, B), i(B, `d`, `m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5`), i(B, `fill`, `none`), i(B, `stroke`, `currentColor`), i(B, `stroke-linecap`, `square`), i(B, `stroke-miterlimit`, `10`), i(B, `stroke-width`, `2`);
          let V = f(`circle`);
          s(R, V), i(V, `cx`, `12`), i(V, `cy`, `7.25`), i(V, `r`, `1.25`), i(V, `fill`, `currentColor`), i(V, `stroke-width`, `2`);
          let H = f(`span`);
          s(I, H), e(H, `ms-2`), s(H, a(`\u6BCF\u4E2A\u65F6\u95F4\u7EBF\u9879\u7684\u5F00\u5934\u6216\u7ED3\u5C3E\u7684`));
          let he = f(`code`);
          s(H, he), s(he, a(`hr`)), s(H, a(`\u6807\u7B7E\u7528\u4E8E\u663E\u793A\u8FDE\u63A5\u5404\u9879\u7684\u7EBF\u6761\u3002`));
          let U = f(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ge = f(`h2`);
          s(U, ge), e(ge, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ge, a(`# \u4E24\u4FA7\u6587\u5B57\u4E0E\u56FE\u6807`));
          let _e = p(`rue:component:start`), ve = p(`rue:component:end`);
          s(U, _e), s(U, ve), d(() => {
            l(_(b, {
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
              activeKey: v2.value,
              onChange: (e2) => v2.value = e2,
              className: `mb-3`
            }), U, _e, ve);
          });
          let ye = p(`rue:slot:start`), be = p(`rue:slot:end`);
          s(U, ye), s(U, be), d(() => {
            l(h(v2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3), s(r3, a(`First Macintosh computer`));
                  let o4 = f(`div`);
                  s(n5, o4);
                  let l2 = f(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), i(l2, `viewBox`, `0 0 20 20`), i(l2, `fill`, `currentColor`), e(l2, `w-5 h-5`);
                  let u2 = f(`path`);
                  s(l2, u2), i(u2, `fill-rule`, `evenodd`), i(u2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(u2, `clip-rule`, `evenodd`);
                  let d2 = f(`div`);
                  s(n5, d2), s(d2, a(`iMac`)), s(n5, f(`hr`));
                  let p2 = f(`li`);
                  s(t3, p2), s(p2, f(`hr`));
                  let m4 = f(`div`);
                  s(p2, m4), s(m4, a(`iPod`));
                  let h2 = f(`div`);
                  s(p2, h2);
                  let g2 = f(`svg`);
                  s(h2, g2), i(g2, `xmlns`, `http://www.w3.org/2000/svg`), i(g2, `viewBox`, `0 0 20 20`), i(g2, `fill`, `currentColor`), e(g2, `w-5 h-5`);
                  let _2 = f(`path`);
                  s(g2, _2), i(_2, `fill-rule`, `evenodd`), i(_2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(_2, `clip-rule`, `evenodd`);
                  let v3 = f(`div`);
                  s(p2, v3), s(v3, a(`iPhone`)), s(p2, f(`hr`));
                  let y3 = f(`li`);
                  s(t3, y3), s(y3, f(`hr`));
                  let b2 = f(`div`);
                  s(y3, b2), s(b2, a(`Apple Watch`));
                  let x2 = f(`div`);
                  s(y3, x2);
                  let S3 = f(`svg`);
                  s(x2, S3), i(S3, `xmlns`, `http://www.w3.org/2000/svg`), i(S3, `viewBox`, `0 0 20 20`), i(S3, `fill`, `currentColor`), e(S3, `w-5 h-5`);
                  let C3 = f(`path`);
                  return s(S3, C3), i(C3, `fill-rule`, `evenodd`), i(C3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(C3, `clip-rule`, `evenodd`), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline>
  <li>
    <Timeline.Start box>First Macintosh computer</Timeline.Start>
    <Timeline.Middle>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </Timeline.Middle>
    <Timeline.End box>iMac</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Start box>iPod</Timeline.Start>
    <Timeline.Middle>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </Timeline.Middle>
    <Timeline.End box>iPhone</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Start box>Apple Watch</Timeline.Start>
    <Timeline.Middle>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </Timeline.Middle>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, ye, be);
          });
          let W = f(`div`);
          s(o3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let xe = f(`h2`);
          s(W, xe), e(xe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(xe, a(`# \u4EC5\u5E95\u90E8\u4E00\u4FA7`));
          let Se = p(`rue:component:start`), Ce = p(`rue:component:end`);
          s(W, Se), s(W, Ce), d(() => {
            l(_(b, {
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
            }), W, Se, Ce);
          });
          let we = p(`rue:slot:start`), Te = p(`rue:slot:end`);
          s(W, we), s(W, Te), d(() => {
            l(h(S2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3);
                  let o4 = f(`svg`);
                  s(r3, o4), i(o4, `xmlns`, `http://www.w3.org/2000/svg`), i(o4, `viewBox`, `0 0 20 20`), i(o4, `fill`, `currentColor`), e(o4, `w-5 h-5`);
                  let l2 = f(`path`);
                  s(o4, l2), i(l2, `fill-rule`, `evenodd`), i(l2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(l2, `clip-rule`, `evenodd`);
                  let u2 = f(`div`);
                  s(n5, u2), s(u2, a(`First Macintosh computer`)), s(n5, f(`hr`));
                  let d2 = f(`li`);
                  s(t3, d2), s(d2, f(`hr`));
                  let p2 = f(`div`);
                  s(d2, p2);
                  let m4 = f(`svg`);
                  s(p2, m4), i(m4, `xmlns`, `http://www.w3.org/2000/svg`), i(m4, `viewBox`, `0 0 20 20`), i(m4, `fill`, `currentColor`), e(m4, `w-5 h-5`);
                  let h2 = f(`path`);
                  s(m4, h2), i(h2, `fill-rule`, `evenodd`), i(h2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(h2, `clip-rule`, `evenodd`);
                  let g2 = f(`div`);
                  s(d2, g2), s(g2, a(`iMac`)), s(d2, f(`hr`));
                  let _2 = f(`li`);
                  s(t3, _2), s(_2, f(`hr`));
                  let v3 = f(`div`);
                  s(_2, v3);
                  let y3 = f(`svg`);
                  s(v3, y3), i(y3, `xmlns`, `http://www.w3.org/2000/svg`), i(y3, `viewBox`, `0 0 20 20`), i(y3, `fill`, `currentColor`), e(y3, `w-5 h-5`);
                  let b2 = f(`path`);
                  s(y3, b2), i(b2, `fill-rule`, `evenodd`), i(b2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(b2, `clip-rule`, `evenodd`);
                  let x2 = f(`div`);
                  s(_2, x2), s(x2, a(`iPod`)), s(_2, f(`hr`));
                  let S3 = f(`li`);
                  s(t3, S3), s(S3, f(`hr`));
                  let C3 = f(`div`);
                  s(S3, C3);
                  let w3 = f(`svg`);
                  s(C3, w3), i(w3, `xmlns`, `http://www.w3.org/2000/svg`), i(w3, `viewBox`, `0 0 20 20`), i(w3, `fill`, `currentColor`), e(w3, `w-5 h-5`);
                  let T3 = f(`path`);
                  s(w3, T3), i(T3, `fill-rule`, `evenodd`), i(T3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(T3, `clip-rule`, `evenodd`);
                  let E2 = f(`div`);
                  s(S3, E2), s(E2, a(`iPhone`)), s(S3, f(`hr`));
                  let D3 = f(`li`);
                  s(t3, D3), s(D3, f(`hr`));
                  let O2 = f(`div`);
                  s(D3, O2);
                  let k2 = f(`svg`);
                  s(O2, k2), i(k2, `xmlns`, `http://www.w3.org/2000/svg`), i(k2, `viewBox`, `0 0 20 20`), i(k2, `fill`, `currentColor`), e(k2, `w-5 h-5`);
                  let A2 = f(`path`);
                  s(k2, A2), i(A2, `fill-rule`, `evenodd`), i(A2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(A2, `clip-rule`, `evenodd`);
                  let j2 = f(`div`);
                  return s(D3, j2), s(j2, a(`Apple Watch`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline>
  <li>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>First Macintosh computer</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iMac</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iPod</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iPhone</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>Apple Watch</Timeline.End>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), W, we, Te);
          });
          let G = f(`div`);
          s(o3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ee = f(`h2`);
          s(G, Ee), e(Ee, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ee, a(`# \u4E0D\u540C\u4FA7\u4EA4\u66FF`));
          let De = p(`rue:component:start`), Oe = p(`rue:component:end`);
          s(G, De), s(G, Oe), d(() => {
            l(_(b, {
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
            }), G, De, Oe);
          });
          let ke = p(`rue:slot:start`), Ae = p(`rue:slot:end`);
          s(G, ke), s(G, Ae), d(() => {
            l(h(C2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3), s(r3, a(`First Macintosh computer`));
                  let o4 = f(`div`);
                  s(n5, o4);
                  let l2 = f(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), i(l2, `viewBox`, `0 0 20 20`), i(l2, `fill`, `currentColor`), e(l2, `w-5 h-5`);
                  let u2 = f(`path`);
                  s(l2, u2), i(u2, `fill-rule`, `evenodd`), i(u2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(u2, `clip-rule`, `evenodd`), s(n5, f(`hr`));
                  let d2 = f(`li`);
                  s(t3, d2), s(d2, f(`hr`));
                  let p2 = f(`div`);
                  s(d2, p2);
                  let m4 = f(`svg`);
                  s(p2, m4), i(m4, `xmlns`, `http://www.w3.org/2000/svg`), i(m4, `viewBox`, `0 0 20 20`), i(m4, `fill`, `currentColor`), e(m4, `w-5 h-5`);
                  let h2 = f(`path`);
                  s(m4, h2), i(h2, `fill-rule`, `evenodd`), i(h2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(h2, `clip-rule`, `evenodd`);
                  let g2 = f(`div`);
                  s(d2, g2), s(g2, a(`iMac`)), s(d2, f(`hr`));
                  let _2 = f(`li`);
                  s(t3, _2), s(_2, f(`hr`));
                  let v3 = f(`div`);
                  s(_2, v3), s(v3, a(`iPod`));
                  let y3 = f(`div`);
                  s(_2, y3);
                  let b2 = f(`svg`);
                  s(y3, b2), i(b2, `xmlns`, `http://www.w3.org/2000/svg`), i(b2, `viewBox`, `0 0 20 20`), i(b2, `fill`, `currentColor`), e(b2, `w-5 h-5`);
                  let x2 = f(`path`);
                  s(b2, x2), i(x2, `fill-rule`, `evenodd`), i(x2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(x2, `clip-rule`, `evenodd`), s(_2, f(`hr`));
                  let S3 = f(`li`);
                  s(t3, S3), s(S3, f(`hr`));
                  let C3 = f(`div`);
                  s(S3, C3);
                  let w3 = f(`svg`);
                  s(C3, w3), i(w3, `xmlns`, `http://www.w3.org/2000/svg`), i(w3, `viewBox`, `0 0 20 20`), i(w3, `fill`, `currentColor`), e(w3, `w-5 h-5`);
                  let T3 = f(`path`);
                  s(w3, T3), i(T3, `fill-rule`, `evenodd`), i(T3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(T3, `clip-rule`, `evenodd`);
                  let E2 = f(`div`);
                  return s(S3, E2), s(E2, a(`Apple Watch`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline>
  <li>
    <Timeline.Start box>First Macintosh computer</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iMac</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Start box>iPod</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>Apple Watch</Timeline.End>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, ke, Ae);
          });
          let K = f(`div`);
          s(o3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let je = f(`h2`);
          s(K, je), e(je, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(je, a(`# \u5F69\u8272\u7EBF\u6761`));
          let Me = p(`rue:component:start`), Ne = p(`rue:component:end`);
          s(K, Me), s(K, Ne), d(() => {
            l(_(b, {
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
            }), K, Me, Ne);
          });
          let Pe = p(`rue:slot:start`), Fe = p(`rue:slot:end`);
          s(K, Pe), s(K, Fe), d(() => {
            l(h(w2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3), s(r3, a(`First Macintosh computer`));
                  let o4 = f(`div`);
                  s(n5, o4);
                  let l2 = f(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), i(l2, `viewBox`, `0 0 20 20`), i(l2, `fill`, `currentColor`), e(l2, `w-5 h-5 text-primary`);
                  let u2 = f(`path`);
                  s(l2, u2), i(u2, `fill-rule`, `evenodd`), i(u2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(u2, `clip-rule`, `evenodd`);
                  let d2 = f(`hr`);
                  s(n5, d2), e(d2, `bg-primary`);
                  let p2 = f(`li`);
                  s(t3, p2);
                  let m4 = f(`hr`);
                  s(p2, m4), e(m4, `bg-primary`);
                  let h2 = f(`div`);
                  s(p2, h2);
                  let g2 = f(`svg`);
                  s(h2, g2), i(g2, `xmlns`, `http://www.w3.org/2000/svg`), i(g2, `viewBox`, `0 0 20 20`), i(g2, `fill`, `currentColor`), e(g2, `w-5 h-5 text-primary`);
                  let _2 = f(`path`);
                  s(g2, _2), i(_2, `fill-rule`, `evenodd`), i(_2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(_2, `clip-rule`, `evenodd`);
                  let v3 = f(`div`);
                  s(p2, v3), s(v3, a(`iMac`));
                  let y3 = f(`hr`);
                  s(p2, y3), e(y3, `bg-primary`);
                  let b2 = f(`li`);
                  s(t3, b2);
                  let x2 = f(`hr`);
                  s(b2, x2), e(x2, `bg-primary`);
                  let S3 = f(`div`);
                  s(b2, S3), s(S3, a(`iPod`));
                  let C3 = f(`div`);
                  s(b2, C3);
                  let w3 = f(`svg`);
                  s(C3, w3), i(w3, `xmlns`, `http://www.w3.org/2000/svg`), i(w3, `viewBox`, `0 0 20 20`), i(w3, `fill`, `currentColor`), e(w3, `w-5 h-5 text-primary`);
                  let T3 = f(`path`);
                  s(w3, T3), i(T3, `fill-rule`, `evenodd`), i(T3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(T3, `clip-rule`, `evenodd`), s(b2, f(`hr`));
                  let E2 = f(`li`);
                  s(t3, E2), s(E2, f(`hr`));
                  let D3 = f(`div`);
                  s(E2, D3);
                  let O2 = f(`svg`);
                  s(D3, O2), i(O2, `xmlns`, `http://www.w3.org/2000/svg`), i(O2, `viewBox`, `0 0 20 20`), i(O2, `fill`, `currentColor`), e(O2, `w-5 h-5 text-primary`);
                  let k2 = f(`path`);
                  s(O2, k2), i(k2, `fill-rule`, `evenodd`), i(k2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(k2, `clip-rule`, `evenodd`);
                  let A2 = f(`div`);
                  return s(E2, A2), s(A2, a(`Apple Watch`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline>
  <li>
    <Timeline.Start box>First Macintosh computer</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-primary"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr className="bg-primary" />
  </li>
  <li>
    <hr className="bg-primary" />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-primary"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iMac</Timeline.End>
    <hr className="bg-primary" />
  </li>
  <li>
    <hr className="bg-primary" />
    <Timeline.Start box>iPod</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-primary"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-primary"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>Apple Watch</Timeline.End>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), K, Pe, Fe);
          });
          let q = f(`div`);
          s(o3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ie = f(`h2`);
          s(q, Ie), e(Ie, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ie, a(`# \u65E0\u56FE\u6807`));
          let Le = p(`rue:component:start`), Re = p(`rue:component:end`);
          s(q, Le), s(q, Re), d(() => {
            l(_(b, {
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
            }), q, Le, Re);
          });
          let ze = p(`rue:slot:start`), Be = p(`rue:slot:end`);
          s(q, ze), s(q, Be), d(() => {
            l(h(T2.value === `preview` ? u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(_(E, {
                children: u(() => {
                  let e3 = c(), t3 = f(`li`);
                  s(e3, t3);
                  let n5 = f(`div`);
                  s(t3, n5), s(n5, a(`First Macintosh computer`)), s(t3, f(`hr`));
                  let r2 = f(`li`);
                  s(e3, r2), s(r2, f(`hr`));
                  let i2 = f(`div`);
                  s(r2, i2), s(i2, a(`iMac`)), s(r2, f(`hr`));
                  let o4 = f(`li`);
                  s(e3, o4), s(o4, f(`hr`));
                  let l2 = f(`div`);
                  s(o4, l2), s(l2, a(`iPod`)), s(o4, f(`hr`));
                  let u2 = f(`li`);
                  s(e3, u2), s(u2, f(`hr`));
                  let d2 = f(`div`);
                  s(u2, d2), s(d2, a(`iPhone`)), s(u2, f(`hr`));
                  let p2 = f(`li`);
                  s(e3, p2), s(p2, f(`hr`));
                  let m4 = f(`div`);
                  return s(p2, m4), s(m4, a(`Apple Watch`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline>
  <li>
    <Timeline.Start box>First Macintosh computer</Timeline.Start>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.End box>iMac</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Start box>iPod</Timeline.Start>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.End box>iPhone</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Start box>Apple Watch</Timeline.Start>
  </li>    
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, ze, Be);
          });
          let J = f(`div`);
          s(o3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ve = f(`h2`);
          s(J, Ve), e(Ve, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ve, a(`# \u7EB5\u5411\uFF1A\u4E24\u4FA7\u6587\u5B57\u4E0E\u56FE\u6807`));
          let He = p(`rue:component:start`), Ue = p(`rue:component:end`);
          s(J, He), s(J, Ue), d(() => {
            l(_(b, {
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
            }), J, He, Ue);
          });
          let We = p(`rue:slot:start`), Ge = p(`rue:slot:end`);
          s(J, We), s(J, Ge), d(() => {
            l(h(D2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                direction: `vertical`,
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3), s(r3, a(`First Macintosh computer`));
                  let o4 = f(`div`);
                  s(n5, o4);
                  let l2 = f(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), i(l2, `viewBox`, `0 0 20 20`), i(l2, `fill`, `currentColor`), e(l2, `w-5 h-5`);
                  let u2 = f(`path`);
                  s(l2, u2), i(u2, `fill-rule`, `evenodd`), i(u2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(u2, `clip-rule`, `evenodd`), s(n5, f(`hr`));
                  let d2 = f(`li`);
                  s(t3, d2), s(d2, f(`hr`));
                  let p2 = f(`div`);
                  s(d2, p2);
                  let m4 = f(`svg`);
                  s(p2, m4), i(m4, `xmlns`, `http://www.w3.org/2000/svg`), i(m4, `viewBox`, `0 0 20 20`), i(m4, `fill`, `currentColor`), e(m4, `w-5 h-5`);
                  let h2 = f(`path`);
                  s(m4, h2), i(h2, `fill-rule`, `evenodd`), i(h2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(h2, `clip-rule`, `evenodd`);
                  let g2 = f(`div`);
                  s(d2, g2), s(g2, a(`iMac`)), s(d2, f(`hr`));
                  let _2 = f(`li`);
                  s(t3, _2), s(_2, f(`hr`));
                  let v3 = f(`div`);
                  s(_2, v3), s(v3, a(`iPod`));
                  let y3 = f(`div`);
                  s(_2, y3);
                  let b2 = f(`svg`);
                  s(y3, b2), i(b2, `xmlns`, `http://www.w3.org/2000/svg`), i(b2, `viewBox`, `0 0 20 20`), i(b2, `fill`, `currentColor`), e(b2, `w-5 h-5`);
                  let x2 = f(`path`);
                  s(b2, x2), i(x2, `fill-rule`, `evenodd`), i(x2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(x2, `clip-rule`, `evenodd`), s(_2, f(`hr`));
                  let S3 = f(`li`);
                  s(t3, S3), s(S3, f(`hr`));
                  let C3 = f(`div`);
                  s(S3, C3);
                  let w3 = f(`svg`);
                  s(C3, w3), i(w3, `xmlns`, `http://www.w3.org/2000/svg`), i(w3, `viewBox`, `0 0 20 20`), i(w3, `fill`, `currentColor`), e(w3, `w-5 h-5`);
                  let T3 = f(`path`);
                  s(w3, T3), i(T3, `fill-rule`, `evenodd`), i(T3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(T3, `clip-rule`, `evenodd`);
                  let E2 = f(`div`);
                  return s(S3, E2), s(E2, a(`Apple Watch`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline direction="vertical">
  <li>
    <Timeline.Start box>First Macintosh computer</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iMac</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Start box>iPod</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.Start box>Apple Watch</Timeline.Start>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), J, We, Ge);
          });
          let Y = f(`div`);
          s(o3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ke = f(`h2`);
          s(Y, Ke), e(Ke, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ke, a(`# \u7EB5\u5411\uFF1A\u4EC5\u53F3\u4FA7`));
          let qe = p(`rue:component:start`), Je = p(`rue:component:end`);
          s(Y, qe), s(Y, Je), d(() => {
            l(_(b, {
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
            }), Y, qe, Je);
          });
          let Ye = p(`rue:slot:start`), Xe = p(`rue:slot:end`);
          s(Y, Ye), s(Y, Xe), d(() => {
            l(h(O.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                direction: `vertical`,
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3);
                  let o4 = f(`svg`);
                  s(r3, o4), i(o4, `xmlns`, `http://www.w3.org/2000/svg`), i(o4, `viewBox`, `0 0 20 20`), i(o4, `fill`, `currentColor`), e(o4, `w-5 h-5`);
                  let l2 = f(`path`);
                  s(o4, l2), i(l2, `fill-rule`, `evenodd`), i(l2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(l2, `clip-rule`, `evenodd`);
                  let u2 = f(`div`);
                  s(n5, u2), s(u2, a(`First Macintosh computer`)), s(n5, f(`hr`));
                  let d2 = f(`li`);
                  s(t3, d2), s(d2, f(`hr`));
                  let p2 = f(`div`);
                  s(d2, p2);
                  let m4 = f(`svg`);
                  s(p2, m4), i(m4, `xmlns`, `http://www.w3.org/2000/svg`), i(m4, `viewBox`, `0 0 20 20`), i(m4, `fill`, `currentColor`), e(m4, `w-5 h-5`);
                  let h2 = f(`path`);
                  s(m4, h2), i(h2, `fill-rule`, `evenodd`), i(h2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(h2, `clip-rule`, `evenodd`);
                  let g2 = f(`div`);
                  s(d2, g2), s(g2, a(`iMac`)), s(d2, f(`hr`));
                  let _2 = f(`li`);
                  s(t3, _2), s(_2, f(`hr`));
                  let v3 = f(`div`);
                  s(_2, v3);
                  let y3 = f(`svg`);
                  s(v3, y3), i(y3, `xmlns`, `http://www.w3.org/2000/svg`), i(y3, `viewBox`, `0 0 20 20`), i(y3, `fill`, `currentColor`), e(y3, `w-5 h-5`);
                  let b2 = f(`path`);
                  s(y3, b2), i(b2, `fill-rule`, `evenodd`), i(b2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(b2, `clip-rule`, `evenodd`);
                  let x2 = f(`div`);
                  s(_2, x2), s(x2, a(`iPod`)), s(_2, f(`hr`));
                  let S3 = f(`li`);
                  s(t3, S3), s(S3, f(`hr`));
                  let C3 = f(`div`);
                  s(S3, C3);
                  let w3 = f(`svg`);
                  s(C3, w3), i(w3, `xmlns`, `http://www.w3.org/2000/svg`), i(w3, `viewBox`, `0 0 20 20`), i(w3, `fill`, `currentColor`), e(w3, `w-5 h-5`);
                  let T3 = f(`path`);
                  s(w3, T3), i(T3, `fill-rule`, `evenodd`), i(T3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(T3, `clip-rule`, `evenodd`);
                  let E2 = f(`div`);
                  s(S3, E2), s(E2, a(`iPhone`)), s(S3, f(`hr`));
                  let D3 = f(`li`);
                  s(t3, D3), s(D3, f(`hr`));
                  let O2 = f(`div`);
                  s(D3, O2);
                  let k2 = f(`svg`);
                  s(O2, k2), i(k2, `xmlns`, `http://www.w3.org/2000/svg`), i(k2, `viewBox`, `0 0 20 20`), i(k2, `fill`, `currentColor`), e(k2, `w-5 h-5`);
                  let A2 = f(`path`);
                  s(k2, A2), i(A2, `fill-rule`, `evenodd`), i(A2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(A2, `clip-rule`, `evenodd`);
                  let j2 = f(`div`);
                  return s(D3, j2), s(j2, a(`Apple Watch`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline direction="vertical">
  <li>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>First Macintosh computer</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iMac</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iPod</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iPhone</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>Apple Watch</Timeline.End>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, Ye, Xe);
          });
          let X = f(`div`);
          s(o3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ze = f(`h2`);
          s(X, Ze), e(Ze, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ze, a(`# \u7EB5\u5411\uFF1A\u4E0D\u540C\u4FA7\u4EA4\u66FF`));
          let Qe = p(`rue:component:start`), $e = p(`rue:component:end`);
          s(X, Qe), s(X, $e), d(() => {
            l(_(b, {
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
            }), X, Qe, $e);
          });
          let et = p(`rue:slot:start`), tt = p(`rue:slot:end`);
          s(X, et), s(X, tt), d(() => {
            l(h(k.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                direction: `vertical`,
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3), s(r3, a(`First Macintosh computer`));
                  let o4 = f(`div`);
                  s(n5, o4);
                  let l2 = f(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), i(l2, `viewBox`, `0 0 20 20`), i(l2, `fill`, `currentColor`), e(l2, `w-5 h-5`);
                  let u2 = f(`path`);
                  s(l2, u2), i(u2, `fill-rule`, `evenodd`), i(u2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(u2, `clip-rule`, `evenodd`), s(n5, f(`hr`));
                  let d2 = f(`li`);
                  s(t3, d2), s(d2, f(`hr`));
                  let p2 = f(`div`);
                  s(d2, p2);
                  let m4 = f(`svg`);
                  s(p2, m4), i(m4, `xmlns`, `http://www.w3.org/2000/svg`), i(m4, `viewBox`, `0 0 20 20`), i(m4, `fill`, `currentColor`), e(m4, `w-5 h-5`);
                  let h2 = f(`path`);
                  s(m4, h2), i(h2, `fill-rule`, `evenodd`), i(h2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(h2, `clip-rule`, `evenodd`);
                  let g2 = f(`div`);
                  s(d2, g2), s(g2, a(`iMac`)), s(d2, f(`hr`));
                  let _2 = f(`li`);
                  s(t3, _2), s(_2, f(`hr`));
                  let v3 = f(`div`);
                  s(_2, v3), s(v3, a(`iPod`));
                  let y3 = f(`div`);
                  s(_2, y3);
                  let b2 = f(`svg`);
                  s(y3, b2), i(b2, `xmlns`, `http://www.w3.org/2000/svg`), i(b2, `viewBox`, `0 0 20 20`), i(b2, `fill`, `currentColor`), e(b2, `w-5 h-5`);
                  let x2 = f(`path`);
                  s(b2, x2), i(x2, `fill-rule`, `evenodd`), i(x2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(x2, `clip-rule`, `evenodd`), s(_2, f(`hr`));
                  let S3 = f(`li`);
                  s(t3, S3), s(S3, f(`hr`));
                  let C3 = f(`div`);
                  s(S3, C3);
                  let w3 = f(`svg`);
                  s(C3, w3), i(w3, `xmlns`, `http://www.w3.org/2000/svg`), i(w3, `viewBox`, `0 0 20 20`), i(w3, `fill`, `currentColor`), e(w3, `w-5 h-5`);
                  let T3 = f(`path`);
                  s(w3, T3), i(T3, `fill-rule`, `evenodd`), i(T3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(T3, `clip-rule`, `evenodd`);
                  let E2 = f(`div`);
                  return s(S3, E2), s(E2, a(`Apple Watch`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline direction="vertical">
  <li>
    <Timeline.Start box>First Macintosh computer</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>iMac</Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Start box>iPod</Timeline.Start>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End box>Apple Watch</Timeline.End>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), X, et, tt);
          });
          let Z = f(`div`);
          s(o3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let nt = f(`h2`);
          s(Z, nt), e(nt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(nt, a(`# \u7EB5\u5411\uFF1A\u5F69\u8272\u7EBF\u6761`));
          let rt = p(`rue:component:start`), it = p(`rue:component:end`);
          s(Z, rt), s(Z, it), d(() => {
            l(_(b, {
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
            }), Z, rt, it);
          });
          let at = p(`rue:slot:start`), ot = p(`rue:slot:end`);
          s(Z, at), s(Z, ot), d(() => {
            l(h(A.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(_(E, {
                direction: `vertical`,
                children: u(() => {
                  let t3 = c(), n5 = f(`li`);
                  s(t3, n5);
                  let r3 = f(`div`);
                  s(n5, r3), s(r3, a(`First Macintosh computer`));
                  let o4 = f(`div`);
                  s(n5, o4);
                  let l2 = f(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), i(l2, `viewBox`, `0 0 20 20`), i(l2, `fill`, `currentColor`), e(l2, `w-5 h-5 text-primary`);
                  let u2 = f(`path`);
                  s(l2, u2), i(u2, `fill-rule`, `evenodd`), i(u2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(u2, `clip-rule`, `evenodd`);
                  let d2 = f(`hr`);
                  s(n5, d2), e(d2, `bg-primary`);
                  let p2 = f(`li`);
                  s(t3, p2);
                  let m4 = f(`hr`);
                  s(p2, m4), e(m4, `bg-primary`);
                  let h2 = f(`div`);
                  s(p2, h2);
                  let g2 = f(`svg`);
                  s(h2, g2), i(g2, `xmlns`, `http://www.w3.org/2000/svg`), i(g2, `viewBox`, `0 0 20 20`), i(g2, `fill`, `currentColor`), e(g2, `w-5 h-5 text-primary`);
                  let _2 = f(`path`);
                  s(g2, _2), i(_2, `fill-rule`, `evenodd`), i(_2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(_2, `clip-rule`, `evenodd`);
                  let v3 = f(`div`);
                  s(p2, v3), s(v3, a(`iMac`));
                  let y3 = f(`hr`);
                  s(p2, y3), e(y3, `bg-primary`);
                  let b2 = f(`li`);
                  s(t3, b2);
                  let x2 = f(`hr`);
                  s(b2, x2), e(x2, `bg-primary`);
                  let S3 = f(`div`);
                  s(b2, S3), s(S3, a(`iPod`));
                  let C3 = f(`div`);
                  s(b2, C3);
                  let w3 = f(`svg`);
                  s(C3, w3), i(w3, `xmlns`, `http://www.w3.org/2000/svg`), i(w3, `viewBox`, `0 0 20 20`), i(w3, `fill`, `currentColor`), e(w3, `w-5 h-5 text-primary`);
                  let T3 = f(`path`);
                  s(w3, T3), i(T3, `fill-rule`, `evenodd`), i(T3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(T3, `clip-rule`, `evenodd`), s(b2, f(`hr`));
                  let E2 = f(`li`);
                  s(t3, E2), s(E2, f(`hr`));
                  let D3 = f(`div`);
                  s(E2, D3);
                  let O2 = f(`svg`);
                  s(D3, O2), i(O2, `xmlns`, `http://www.w3.org/2000/svg`), i(O2, `viewBox`, `0 0 20 20`), i(O2, `fill`, `currentColor`), e(O2, `w-5 h-5 text-primary`);
                  let k2 = f(`path`);
                  s(O2, k2), i(k2, `fill-rule`, `evenodd`), i(k2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(k2, `clip-rule`, `evenodd`);
                  let A2 = f(`div`);
                  return s(E2, A2), s(A2, a(`Apple Watch`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline direction="vertical">
<li>
  <Timeline.Start box>First Macintosh computer</Timeline.Start>
  <Timeline.Middle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-primary"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clip-rule="evenodd"
      />
    </svg>
  </Timeline.Middle>
  <hr className="bg-primary" />
</li>
<li>
  <hr className="bg-primary" />
  <Timeline.Middle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-primary"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clip-rule="evenodd"
      />
    </svg>
  </Timeline.Middle>
  <Timeline.End box>iMac</Timeline.End>
  <hr className="bg-primary" />
</li>
<li>
  <hr className="bg-primary" />
  <Timeline.Start box>iPod</Timeline.Start>
  <Timeline.Middle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-primary"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clip-rule="evenodd"
      />
    </svg>
  </Timeline.Middle>
  <hr />
</li>
<li>
  <hr />
  <Timeline.Middle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-primary"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clip-rule="evenodd"
      />
    </svg>
  </Timeline.Middle>
  <Timeline.End box>Apple Watch</Timeline.End>
</li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, at, ot);
          });
          let Q = f(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let st = f(`h2`);
          s(Q, st), e(st, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(st, a(`# \u56FE\u6807\u5438\u9644\u5230\u8D77\u59CB\u4FA7\uFF08snap to start\uFF09`));
          let $ = f(`p`);
          s(Q, $), e($, `text-sm mt-3 mb-3`), s($, a(`\u7ED3\u5408\u54CD\u5E94\u5F0F\u7D27\u51D1\u6A21\u5F0F`));
          let ct = f(`code`);
          s($, ct), s(ct, a(`max-md:timeline-compact`)), s($, a(`\u3002`));
          let lt = p(`rue:component:start`), ut = p(`rue:component:end`);
          s(Q, lt), s(Q, ut), d(() => {
            l(_(b, {
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
            }), Q, lt, ut);
          });
          let dt = p(`rue:slot:start`), ft = p(`rue:slot:end`);
          return s(Q, dt), s(Q, ft), d(() => {
            l(h(j.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              s(t2, n4), s(t2, r2);
              let o4 = u(() => {
                let t3 = c(), n5 = f(`li`);
                s(t3, n5);
                let r3 = f(`div`);
                s(n5, r3);
                let o5 = f(`svg`);
                s(r3, o5), i(o5, `xmlns`, `http://www.w3.org/2000/svg`), i(o5, `viewBox`, `0 0 20 20`), i(o5, `fill`, `currentColor`), e(o5, `h-5 w-5`);
                let l2 = f(`path`);
                s(o5, l2), i(l2, `fill-rule`, `evenodd`), i(l2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(l2, `clip-rule`, `evenodd`);
                let u2 = f(`div`);
                s(n5, u2), e(u2, `md:text-end mb-10`);
                let d2 = f(`time`);
                s(u2, d2), e(d2, `font-mono italic`), s(d2, a(`1984`));
                let p2 = f(`div`);
                s(u2, p2), e(p2, `text-lg font-black`), s(p2, a(`First Macintosh computer`)), s(u2, a(`The Apple Macintosh\u2014later rebranded as the Macintosh 128K\u2014is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.`)), s(n5, f(`hr`));
                let m4 = f(`li`);
                s(t3, m4), s(m4, f(`hr`));
                let h2 = f(`div`);
                s(m4, h2);
                let g2 = f(`svg`);
                s(h2, g2), i(g2, `xmlns`, `http://www.w3.org/2000/svg`), i(g2, `viewBox`, `0 0 20 20`), i(g2, `fill`, `currentColor`), e(g2, `h-5 w-5`);
                let _2 = f(`path`);
                s(g2, _2), i(_2, `fill-rule`, `evenodd`), i(_2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(_2, `clip-rule`, `evenodd`);
                let v3 = f(`div`);
                s(m4, v3), e(v3, `mb-10`);
                let y3 = f(`time`);
                s(v3, y3), e(y3, `font-mono italic`), s(y3, a(`1998`));
                let b2 = f(`div`);
                s(v3, b2), e(b2, `text-lg font-black`), s(b2, a(`iMac`)), s(v3, a(`iMac is a family of all-in-one Macintosh desktop computers designed and built by Apple Inc. It has been the primary part of Apple\u2019s consumer desktop offerings since its introduction in August 1998 and has evolved through seven distinct forms.`)), s(m4, f(`hr`));
                let x2 = f(`li`);
                s(t3, x2), s(x2, f(`hr`));
                let S3 = f(`div`);
                s(x2, S3);
                let C3 = f(`svg`);
                s(S3, C3), i(C3, `xmlns`, `http://www.w3.org/2000/svg`), i(C3, `viewBox`, `0 0 20 20`), i(C3, `fill`, `currentColor`), e(C3, `h-5 w-5`);
                let w3 = f(`path`);
                s(C3, w3), i(w3, `fill-rule`, `evenodd`), i(w3, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(w3, `clip-rule`, `evenodd`);
                let T3 = f(`div`);
                s(x2, T3), e(T3, `mb-10`);
                let E2 = f(`time`);
                s(T3, E2), e(E2, `font-mono italic`), s(E2, a(`2007`));
                let D3 = f(`div`);
                s(T3, D3), e(D3, `text-lg font-black`), s(D3, a(`iPhone`)), s(T3, a(`iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share`)), s(x2, f(`hr`));
                let O2 = f(`li`);
                s(t3, O2), s(O2, f(`hr`));
                let k2 = f(`div`);
                s(O2, k2);
                let A2 = f(`svg`);
                s(k2, A2), i(A2, `xmlns`, `http://www.w3.org/2000/svg`), i(A2, `viewBox`, `0 0 20 20`), i(A2, `fill`, `currentColor`), e(A2, `h-5 w-5`);
                let j2 = f(`path`);
                s(A2, j2), i(j2, `fill-rule`, `evenodd`), i(j2, `d`, `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`), i(j2, `clip-rule`, `evenodd`);
                let M2 = f(`div`);
                s(O2, M2), e(M2, `mb-10 md:text-end`);
                let N2 = f(`time`);
                s(M2, N2), e(N2, `font-mono italic`), s(N2, a(`2015`));
                let ee2 = f(`div`);
                return s(M2, ee2), e(ee2, `text-lg font-black`), s(ee2, a(`Apple Watch`)), s(M2, a(`The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services`)), {
                  vaporElement: t3
                };
              });
              return d(() => {
                l(_(E, {
                  direction: `vertical`,
                  snapIcon: true,
                  className: `max-md:timeline-compact`,
                  children: o4
                }), t2, n4, r2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(_(x, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Timeline direction="vertical" snapIcon className="max-md:timeline-compact">
  <li>
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.Start className="md:text-end mb-10">
      <time className="font-mono italic">1984</time>
      <div className="text-lg font-black">First Macintosh computer</div>
      The Apple Macintosh\u2014later rebranded as the Macintosh 128K\u2014is the original Apple
      Macintosh personal computer. It played a pivotal role in establishing desktop
      publishing as a general office function. The motherboard, a 9 in (23 cm) CRT
      monitor, and a floppy drive were housed in a beige case with integrated carrying
      handle; it came with a keyboard and single-button mouse.
    </Timeline.Start>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End className="mb-10">
      <time className="font-mono italic">1998</time>
      <div className="text-lg font-black">iMac</div>
      iMac is a family of all-in-one Macintosh desktop computers designed and built by
      Apple Inc. It has been the primary part of Apple\u2019s consumer desktop offerings since
      its introduction in August 1998 and has evolved through seven distinct forms.
    </Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.End className="mb-10">
      <time className="font-mono italic">2007</time>
      <div className="text-lg font-black">iPhone</div>
      iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS
      mobile operating system. The first-generation iPhone was announced by then-Apple CEO
      Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone
      models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had
      been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market
      share
    </Timeline.End>
    <hr />
  </li>
  <li>
    <hr />
    <Timeline.Middle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </Timeline.Middle>
    <Timeline.Start className="mb-10 md:text-end">
      <time className="font-mono italic">2015</time>
      <div className="text-lg font-black">Apple Watch</div>
      The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates
      fitness tracking, health-oriented capabilities, and wireless telecommunication, and
      integrates with iOS and other Apple products and services
    </Timeline.Start>
  </li>
</Timeline>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, dt, ft);
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
  D as default
};

import { A as e, F as t, G as n, O as r, S as i, U as a, _ as o, b as s, f as c, i as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
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
  })()
]).then(async () => {
  let b, x, S;
  b = ({ className: e2, children: t2, items: n2 }) => {
    let r2 = `countdown`;
    return e2 && (r2 += ` ${e2}`), n2 && n2.length ? g(`span`, {
      className: r2,
      children: n2.map((e3, t3) => {
        if (`value` in e3) {
          let { value: n3, digits: r3, className: i2, ariaLive: a2, ariaLabel: o2, children: s2 } = e3;
          return g(x, {
            value: n3,
            digits: r3,
            className: i2,
            ariaLive: a2,
            ariaLabel: o2,
            children: s2
          }, t3);
        }
        return g(`span`, {
          className: e3.className,
          children: e3.content
        }, t3);
      })
    }) : g(`span`, {
      className: r2,
      children: t2
    });
  };
  x = ({ value: e2, digits: t2, className: n2, ariaLive: r2 = `polite`, ariaLabel: i2, children: a2 }) => {
    let o2 = `--value:${e2};${t2 == null ? `` : ` --digits:${t2};`}`, s2 = ``;
    return n2 && (s2 += ` ${n2}`), g(`span`, {
      style: o2,
      "aria-live": r2,
      "aria-label": i2 ?? String(e2),
      className: s2.trim(),
      children: a2 ?? l(`div`, null, String(e2))
    });
  };
  S = Object.assign(b, {
    Value: x
  });
  C = () => {
    let { counter: l2, tabBasic: b2, tabLarge2: x2, tabClock: C2, tabClockColon: w, tabLabels: T, tabLabelsUnder: E, tabInBoxes: D, tabArrayInternal: O, countdownItems: ee } = n(`useSetup:0:0`, () => a(() => {
      let e2 = n(`ref:1:0`, () => m(59));
      return window.__rue_countdown_timer__ ?? (window.__rue_countdown_timer__ = setInterval(() => {
        e2.value = e2.value > 0 ? e2.value - 1 : 59;
      }, 1e3)), {
        counter: e2,
        tabBasic: n(`ref:1:1`, () => m(`preview`)),
        tabLarge2: n(`ref:1:2`, () => m(`preview`)),
        tabClock: n(`ref:1:3`, () => m(`preview`)),
        tabClockColon: n(`ref:1:4`, () => m(`preview`)),
        tabLabels: n(`ref:1:5`, () => m(`preview`)),
        tabLabelsUnder: n(`ref:1:6`, () => m(`preview`)),
        tabInBoxes: n(`ref:1:7`, () => m(`preview`)),
        tabArrayInternal: n(`ref:1:8`, () => m(`preview`)),
        countdownItems: [
          {
            value: 10
          },
          {
            content: `h`
          },
          {
            value: 24,
            digits: 2
          },
          {
            content: `m`
          },
          {
            value: e2.value,
            digits: 2
          },
          {
            content: `s`
          }
        ]
      };
    }));
    return u(() => {
      let n2 = s(), a2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return o(n2, a2), o(n2, m2), c(g(_, {
        children: u(() => {
          let n3 = s(), a3 = f(`div`);
          o(n3, a3), e(a3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          o(a3, m3), o(m3, i(`Countdown \u5012\u8BA1\u65F6`));
          let _2 = f(`p`);
          o(a3, _2), e(_2, `text-sm mt-3 mb-3`), o(_2, i(`\u5728 0 \u5230 999 \u4E4B\u95F4\u53D8\u5316\u6570\u5B57\u65F6\u63D0\u4F9B\u8FC7\u6E21\u52A8\u6548\u3002`));
          let k = f(`div`);
          o(a3, k), e(k, `text-sm`);
          let A = f(`a`);
          o(k, A), r(A, `href`, `https://daisyui.com/components/countdown/`), r(A, `target`, `_blank`), o(A, i(`\u67E5\u770B Countdown \u9759\u6001\u6837\u5F0F`));
          let j = f(`div`);
          o(a3, j), e(j, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let M = f(`h2`);
          o(j, M), e(M, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(M, i(`# Countdown`));
          let te = p(`rue:component:start`), ne = p(`rue:component:end`);
          o(j, te), o(j, ne), d(() => {
            c(g(v, {
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
            }), j, te, ne);
          });
          let re = p(`rue:slot:start`), N = p(`rue:slot:end`);
          o(j, re), o(j, N), d(() => {
            c(h(b2.value === `preview` ? u(() => {
              let e2 = s(), n4 = p(`rue:component:start`), i2 = p(`rue:component:end`);
              return o(e2, n4), o(e2, i2), c(g(S, {
                children: u(() => {
                  let e3 = s(), n5 = f(`div`);
                  return o(e3, n5), d(() => {
                    t(n5, l2.value);
                  }), d(() => {
                    r(n5, `ariaLabel`, String(String(l2.value)));
                  }), {
                    vaporElement: e3
                  };
                })
              }), e2, n4, i2), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Countdown } from '@rue/design';
<Countdown>
  <Countdown.Value value={59} ariaLabel={String(59)} />
</Countdown>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), j, re, N);
          });
          let P = f(`div`);
          o(a3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let F = f(`h2`);
          o(P, F), e(F, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(F, i(`# Large text with 2 digits`));
          let ie = p(`rue:component:start`), ae = p(`rue:component:end`);
          o(P, ie), o(P, ae), d(() => {
            c(g(v, {
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
            }), P, ie, ae);
          });
          let oe = p(`rue:slot:start`), se = p(`rue:slot:end`);
          o(P, oe), o(P, se), d(() => {
            c(h(x2.value === `preview` ? u(() => {
              let e2 = s(), n4 = p(`rue:component:start`), i2 = p(`rue:component:end`);
              return o(e2, n4), o(e2, i2), c(g(S, {
                className: `font-mono text-6xl`,
                children: u(() => {
                  let e3 = s(), n5 = f(`div`);
                  return o(e3, n5), d(() => {
                    t(n5, l2.value);
                  }), d(() => {
                    r(n5, `digits`, `2`);
                  }), d(() => {
                    r(n5, `ariaLabel`, String(String(l2.value)));
                  }), {
                    vaporElement: e3
                  };
                })
              }), e2, n4, i2), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Countdown className="font-mono text-6xl">
  <Countdown.Value value={59} digits={2} ariaLabel={String(59)} />
</Countdown>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), P, oe, se);
          });
          let I = f(`div`);
          o(a3, I), e(I, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let L = f(`h2`);
          o(I, L), e(L, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(L, i(`# Clock countdown`));
          let ce = p(`rue:component:start`), le = p(`rue:component:end`);
          o(I, ce), o(I, le), d(() => {
            c(g(v, {
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
            }), I, ce, le);
          });
          let R = p(`rue:slot:start`), z = p(`rue:slot:end`);
          o(I, R), o(I, z), d(() => {
            c(h(C2.value === `preview` ? u(() => {
              let e2 = s(), n4 = p(`rue:component:start`), a4 = p(`rue:component:end`);
              return o(e2, n4), o(e2, a4), c(g(S, {
                className: `font-mono text-2xl`,
                children: u(() => {
                  let e3 = s(), n5 = f(`div`);
                  o(e3, n5), d(() => {
                    t(n5, 10);
                  }), r(n5, `ariaLabel`, `10`), o(e3, i(`h`));
                  let a5 = f(`div`);
                  o(e3, a5), d(() => {
                    t(a5, 24);
                  }), r(a5, `ariaLabel`, `24`), o(e3, i(`m`));
                  let c2 = f(`div`);
                  return o(e3, c2), d(() => {
                    t(c2, l2.value);
                  }), d(() => {
                    r(c2, `ariaLabel`, String(String(l2.value)));
                  }), o(e3, i(`s`)), {
                    vaporElement: e3
                  };
                })
              }), e2, n4, a4), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />h
  <Countdown.Value value={24} ariaLabel="24" />m
  <Countdown.Value value={59} ariaLabel={String(59)} />s
</Countdown>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), I, R, z);
          });
          let B = f(`div`);
          o(a3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let V = f(`h2`);
          o(B, V), e(V, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(V, i(`# Countdown \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let H = p(`rue:component:start`), U = p(`rue:component:end`);
          o(B, H), o(B, U), d(() => {
            c(g(v, {
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
            }), B, H, U);
          });
          let W = p(`rue:slot:start`), ue = p(`rue:slot:end`);
          o(B, W), o(B, ue), d(() => {
            c(h(O.value === `preview` ? u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(S, {
                  className: `font-mono text-2xl`,
                  items: ee
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Countdown } from '@rue/design';
const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
];
<Countdown className="font-mono text-2xl" items={items} />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), B, W, ue);
          });
          let G = f(`div`);
          o(a3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = f(`h2`);
          o(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(K, i(`# Clock countdown with colons`));
          let de = p(`rue:component:start`), fe = p(`rue:component:end`);
          o(G, de), o(G, fe), d(() => {
            c(g(v, {
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
            }), G, de, fe);
          });
          let pe = p(`rue:slot:start`), me = p(`rue:slot:end`);
          o(G, pe), o(G, me), d(() => {
            c(h(w.value === `preview` ? u(() => {
              let e2 = s(), n4 = p(`rue:component:start`), a4 = p(`rue:component:end`);
              return o(e2, n4), o(e2, a4), c(g(S, {
                className: `font-mono text-2xl`,
                children: u(() => {
                  let e3 = s(), n5 = f(`div`);
                  o(e3, n5), d(() => {
                    t(n5, 10);
                  }), r(n5, `ariaLabel`, `10`), o(e3, i(`:`));
                  let a5 = f(`div`);
                  o(e3, a5), d(() => {
                    t(a5, 24);
                  }), d(() => {
                    r(a5, `digits`, `2`);
                  }), r(a5, `ariaLabel`, `24`), o(e3, i(`:`));
                  let c2 = f(`div`);
                  return o(e3, c2), d(() => {
                    t(c2, l2.value);
                  }), d(() => {
                    r(c2, `digits`, `2`);
                  }), d(() => {
                    r(c2, `ariaLabel`, String(String(l2.value)));
                  }), {
                    vaporElement: e3
                  };
                })
              }), e2, n4, a4), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel={String(59)} />
</Countdown>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, pe, me);
          });
          let q = f(`div`);
          o(a3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = f(`h2`);
          o(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(J, i(`# Large text with labels`));
          let he = p(`rue:component:start`), ge = p(`rue:component:end`);
          o(q, he), o(q, ge), d(() => {
            c(g(v, {
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
            }), q, he, ge);
          });
          let _e = p(`rue:slot:start`), ve = p(`rue:slot:end`);
          o(q, _e), o(q, ve), d(() => {
            c(h(T.value === `preview` ? u(() => {
              let n4 = s(), a4 = f(`div`);
              o(n4, a4), e(a4, `flex gap-5`);
              let m4 = f(`div`);
              o(a4, m4);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              o(m4, h2), o(m4, _3), c(g(S, {
                className: `font-mono text-4xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 15);
                  }), r(n5, `ariaLabel`, `15`), {
                    vaporElement: e2
                  };
                })
              }), m4, h2, _3), o(m4, i(`days`));
              let v2 = f(`div`);
              o(a4, v2);
              let y2 = p(`rue:component:start`), b3 = p(`rue:component:end`);
              o(v2, y2), o(v2, b3), c(g(S, {
                className: `font-mono text-4xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 10);
                  }), r(n5, `ariaLabel`, `10`), {
                    vaporElement: e2
                  };
                })
              }), v2, y2, b3), o(v2, i(`hours`));
              let x3 = f(`div`);
              o(a4, x3);
              let C3 = p(`rue:component:start`), w2 = p(`rue:component:end`);
              o(x3, C3), o(x3, w2), c(g(S, {
                className: `font-mono text-4xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 24);
                  }), r(n5, `ariaLabel`, `24`), {
                    vaporElement: e2
                  };
                })
              }), x3, C3, w2), o(x3, i(`minutes`));
              let T2 = f(`div`);
              o(a4, T2);
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              return o(T2, E2), o(T2, D2), c(g(S, {
                className: `font-mono text-4xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, l2.value);
                  }), d(() => {
                    r(n5, `ariaLabel`, String(String(l2.value)));
                  }), {
                    vaporElement: e2
                  };
                })
              }), T2, E2, D2), o(T2, i(`sec`)), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="flex gap-5">
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={15} ariaLabel="15" />
    </Countdown>
    days
  </div>
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={10} ariaLabel="10" />
    </Countdown>
    hours
  </div>
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={24} ariaLabel="24" />
    </Countdown>
    min
  </div>
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={59} ariaLabel={String(59)} />
    </Countdown>
    sec
  </div>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, _e, ve);
          });
          let Y = f(`div`);
          o(a3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = f(`h2`);
          o(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(X, i(`# Large text with labels under`));
          let ye = p(`rue:component:start`), be = p(`rue:component:end`);
          o(Y, ye), o(Y, be), d(() => {
            c(g(v, {
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
            }), Y, ye, be);
          });
          let xe = p(`rue:slot:start`), Se = p(`rue:slot:end`);
          o(Y, xe), o(Y, Se), d(() => {
            c(h(E.value === `preview` ? u(() => {
              let n4 = s(), a4 = f(`div`);
              o(n4, a4), e(a4, `grid grid-flow-col gap-5 text-center auto-cols-max`);
              let m4 = f(`div`);
              o(a4, m4), e(m4, `flex flex-col`);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              o(m4, h2), o(m4, _3), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 15);
                  }), r(n5, `ariaLabel`, `15`), {
                    vaporElement: e2
                  };
                })
              }), m4, h2, _3), o(m4, i(`days`));
              let v2 = f(`div`);
              o(a4, v2), e(v2, `flex flex-col`);
              let y2 = p(`rue:component:start`), b3 = p(`rue:component:end`);
              o(v2, y2), o(v2, b3), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 10);
                  }), r(n5, `ariaLabel`, `10`), {
                    vaporElement: e2
                  };
                })
              }), v2, y2, b3), o(v2, i(`hours`));
              let x3 = f(`div`);
              o(a4, x3), e(x3, `flex flex-col`);
              let C3 = p(`rue:component:start`), w2 = p(`rue:component:end`);
              o(x3, C3), o(x3, w2), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 24);
                  }), r(n5, `ariaLabel`, `24`), {
                    vaporElement: e2
                  };
                })
              }), x3, C3, w2), o(x3, i(`min`));
              let T2 = f(`div`);
              o(a4, T2), e(T2, `flex flex-col`);
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              return o(T2, E2), o(T2, D2), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, l2.value);
                  }), d(() => {
                    r(n5, `ariaLabel`, String(String(l2.value)));
                  }), {
                    vaporElement: e2
                  };
                })
              }), T2, E2, D2), o(T2, i(`sec`)), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={15} ariaLabel="15" />
    </Countdown>
    days
  </div>
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={10} ariaLabel="10" />
    </Countdown>
    hours
  </div>
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={24} ariaLabel="24" />
    </Countdown>
    min
  </div>
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={59} ariaLabel={String(59)} />
    </Countdown>
    sec
  </div>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, xe, Se);
          });
          let Z = f(`div`);
          o(a3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Q = f(`h2`);
          o(Z, Q), e(Q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), o(Q, i(`# In boxes`));
          let Ce = p(`rue:component:start`), $ = p(`rue:component:end`);
          o(Z, Ce), o(Z, $), d(() => {
            c(g(v, {
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
            }), Z, Ce, $);
          });
          let we = p(`rue:slot:start`), Te = p(`rue:slot:end`);
          return o(Z, we), o(Z, Te), d(() => {
            c(h(D.value === `preview` ? u(() => {
              let n4 = s(), a4 = f(`div`);
              o(n4, a4), e(a4, `grid grid-flow-col gap-5 text-center auto-cols-max`);
              let m4 = f(`div`);
              o(a4, m4), e(m4, `flex flex-col p-2 bg-neutral rounded-box text-neutral-content`);
              let h2 = p(`rue:component:start`), _3 = p(`rue:component:end`);
              o(m4, h2), o(m4, _3), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 15);
                  }), r(n5, `ariaLabel`, `15`), {
                    vaporElement: e2
                  };
                })
              }), m4, h2, _3), o(m4, i(`days`));
              let v2 = f(`div`);
              o(a4, v2), e(v2, `flex flex-col p-2 bg-neutral rounded-box text-neutral-content`);
              let y2 = p(`rue:component:start`), b3 = p(`rue:component:end`);
              o(v2, y2), o(v2, b3), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 10);
                  }), r(n5, `ariaLabel`, `10`), {
                    vaporElement: e2
                  };
                })
              }), v2, y2, b3), o(v2, i(`hours`));
              let x3 = f(`div`);
              o(a4, x3), e(x3, `flex flex-col p-2 bg-neutral rounded-box text-neutral-content`);
              let C3 = p(`rue:component:start`), w2 = p(`rue:component:end`);
              o(x3, C3), o(x3, w2), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, 24);
                  }), r(n5, `ariaLabel`, `24`), {
                    vaporElement: e2
                  };
                })
              }), x3, C3, w2), o(x3, i(`min`));
              let T2 = f(`div`);
              o(a4, T2), e(T2, `flex flex-col p-2 bg-neutral rounded-box text-neutral-content`);
              let E2 = p(`rue:component:start`), D2 = p(`rue:component:end`);
              return o(T2, E2), o(T2, D2), c(g(S, {
                className: `font-mono text-5xl`,
                children: u(() => {
                  let e2 = s(), n5 = f(`div`);
                  return o(e2, n5), d(() => {
                    t(n5, l2.value);
                  }), d(() => {
                    r(n5, `ariaLabel`, String(String(l2.value)));
                  }), {
                    vaporElement: e2
                  };
                })
              }), T2, E2, D2), o(T2, i(`sec`)), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = s(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return o(e2, t2), o(e2, n4), d(() => {
                c(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={15} ariaLabel="15" />
    </Countdown>
    days
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={10} ariaLabel="10" />
    </Countdown>
    hours
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={24} ariaLabel="24" />
    </Countdown>
    min
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={59} ariaLabel={String(59)} />
    </Countdown>
    sec
  </div>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, we, Te);
          }), {
            vaporElement: n3
          };
        })
      }), n2, a2, m2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  C as default
};

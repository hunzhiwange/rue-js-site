import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, m as c, q as l, x as u, y as d, z as f, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as p, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as m, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as h, t as g, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as _, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as v, __tla as __tla_6 } from "./avatar-C7SUHqoN.js";
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  y = () => {
    let { tabBasic: y2, tabSizes: b, tabRounded: x, tabMask: S, tabGroup: C, tabGroupCounter: w, tabGroupArray: T, tabRing: E, tabPresence: D, tabPlaceholder: O, groupItems: ee } = t(`useSetup:0:0`, () => i(() => ({
      tabBasic: t(`ref:1:0`, () => f(`preview`)),
      tabSizes: t(`ref:1:1`, () => f(`preview`)),
      tabRounded: t(`ref:1:2`, () => f(`preview`)),
      tabMask: t(`ref:1:3`, () => f(`preview`)),
      tabGroup: t(`ref:1:4`, () => f(`preview`)),
      tabGroupCounter: t(`ref:1:5`, () => f(`preview`)),
      tabGroupArray: t(`ref:1:6`, () => f(`preview`)),
      tabRing: t(`ref:1:7`, () => f(`preview`)),
      tabPresence: t(`ref:1:8`, () => f(`preview`)),
      tabPlaceholder: t(`ref:1:9`, () => f(`preview`)),
      groupItems: [
        {
          children: m(`div`, {
            className: `w-12 bg-base-300`,
            children: m(`img`, {
              className: `h-full w-full object-cover`,
              src: `https://img.daisyui.com/images/profile/demo/batperson@192.webp`,
              alt: `Tailwind-CSS-Avatar-component`
            })
          })
        },
        {
          children: m(`div`, {
            className: `w-12 bg-base-300`,
            children: m(`img`, {
              className: `h-full w-full object-cover`,
              src: `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`,
              alt: `Tailwind-CSS-Avatar-component`
            })
          })
        },
        {
          children: m(`div`, {
            className: `w-12 bg-base-300`,
            children: m(`img`, {
              className: `h-full w-full object-cover`,
              src: `https://img.daisyui.com/images/profile/demo/averagebulk@192.webp`,
              alt: `Tailwind-CSS-Avatar-component`
            })
          })
        },
        {
          status: `placeholder`,
          children: m(`div`, {
            className: `w-12 bg-neutral text-neutral-content`,
            children: m(`span`, {
              children: `+99`
            })
          })
        }
      ]
    })));
    return c(() => {
      let t2 = o(), i2 = d(`rue:component:start`), f2 = d(`rue:component:end`);
      return a(t2, i2), a(t2, f2), s(m(h, {
        children: c(() => {
          let t3 = o(), i3 = u(`div`);
          a(t3, i3), e(i3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = u(`h1`);
          a(i3, f3), a(f3, r(`Avatar \u5934\u50CF`));
          let h2 = u(`p`);
          a(i3, h2), e(h2, `text-sm mt-3 mb-3`), a(h2, r(`\u5934\u50CF\u7528\u4E8E\u5728\u754C\u9762\u4E2D\u5C55\u793A\u4E2A\u4EBA\u6216\u4F01\u4E1A\u7684\u7F29\u7565\u56FE\u3002`));
          let k = u(`div`);
          a(i3, k), e(k, `text-sm`);
          let A = u(`a`);
          a(k, A), n(A, `href`, `https://daisyui.com/components/avatar/`), n(A, `target`, `_blank`), a(A, r(`\u67E5\u770B Avatar \u9759\u6001\u6837\u5F0F`));
          let j = u(`div`);
          a(i3, j), e(j, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let M = u(`h2`);
          a(j, M), e(M, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(M, r(`# Avatar`));
          let te = d(`rue:component:start`), ne = d(`rue:component:end`);
          a(j, te), a(j, ne), l(() => {
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
            }), j, te, ne);
          });
          let re = d(`rue:slot:start`), ie = d(`rue:slot:end`);
          a(j, re), a(j, ie), l(() => {
            s(p(y2.value === `preview` ? c(() => {
              let t4 = o(), r2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, r2), a(t4, i4), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-24 rounded bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/batperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), t4, r2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Avatar } from '@rue/design';
<Avatar>
  <div className="w-24 rounded">
    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
  </div>
</Avatar>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), j, re, ie);
          });
          let N = u(`div`);
          a(i3, N), e(N, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let P = u(`h2`);
          a(N, P), e(P, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(P, r(`# Avatar in custom sizes`));
          let ae = d(`rue:component:start`), oe = d(`rue:component:end`);
          a(N, ae), a(N, oe), l(() => {
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
            }), N, ae, oe);
          });
          let se = d(`rue:slot:start`), ce = d(`rue:slot:end`);
          a(N, se), a(N, ce), l(() => {
            s(p(b.value === `preview` ? c(() => {
              let t4 = o(), r2 = u(`div`);
              a(t4, r2), e(r2, `grid gap-3`);
              let i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(r2, i4), a(r2, l2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-24 rounded bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/superperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, i4, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(r2, f4), a(r2, p2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-16 rounded bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/superperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              a(r2, h3), a(r2, g2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-12 rounded bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/superperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, h3, g2);
              let _2 = d(`rue:component:start`), y3 = d(`rue:component:end`);
              return a(r2, _2), a(r2, y3), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-8 rounded bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/superperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, _2, y3), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar><div className="w-24 rounded"><img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" /></div></Avatar>
<Avatar><div className="w-16 rounded"><img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" /></div></Avatar>
<Avatar><div className="w-12 rounded"><img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" /></div></Avatar>
<Avatar><div className="w-8 rounded"><img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" /></div></Avatar>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), N, se, ce);
          });
          let F = u(`div`);
          a(i3, F), e(F, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let I = u(`h2`);
          a(F, I), e(I, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(I, r(`# Avatar rounded`));
          let le = d(`rue:component:start`), ue = d(`rue:component:end`);
          a(F, le), a(F, ue), l(() => {
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
            }), F, le, ue);
          });
          let de = d(`rue:slot:start`), fe = d(`rue:slot:end`);
          a(F, de), a(F, fe), l(() => {
            s(p(x.value === `preview` ? c(() => {
              let t4 = o(), r2 = u(`div`);
              a(t4, r2), e(r2, `grid gap-3`);
              let i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(r2, i4), a(r2, l2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-24 rounded-xl bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, i4, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(r2, f4), a(r2, p2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-24 rounded-full bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/yellingcat@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar><div className="w-24 rounded-xl"><img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" /></div></Avatar>
<Avatar><div className="w-24 rounded-full"><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" /></div></Avatar>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), F, de, fe);
          });
          let L = u(`div`);
          a(i3, L), e(L, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let R = u(`h2`);
          a(L, R), e(R, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(R, r(`# Avatar with mask`));
          let pe = d(`rue:component:start`), z = d(`rue:component:end`);
          a(L, pe), a(L, z), l(() => {
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
            }), L, pe, z);
          });
          let B = d(`rue:slot:start`), me = d(`rue:slot:end`);
          a(L, B), a(L, me), l(() => {
            s(p(S.value === `preview` ? c(() => {
              let t4 = o(), r2 = u(`div`);
              a(t4, r2), e(r2, `grid gap-3`);
              let i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(r2, i4), a(r2, l2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `mask mask-heart w-24 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/distracted3@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, i4, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(r2, f4), a(r2, p2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `mask mask-squircle w-24 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/distracted1@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              return a(r2, h3), a(r2, g2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `mask mask-hexagon-2 w-24 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/distracted2@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, h3, g2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar><div className="mask mask-heart w-24"><img src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp" /></div></Avatar>
<Avatar><div className="mask mask-squircle w-24"><img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" /></div></Avatar>
<Avatar><div className="mask mask-hexagon-2 w-24"><img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" /></div></Avatar>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), L, B, me);
          });
          let V = u(`div`);
          a(i3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = u(`h2`);
          a(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(H, r(`# Avatar group`));
          let he = d(`rue:component:start`), ge = d(`rue:component:end`);
          a(V, he), a(V, ge), l(() => {
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
            }), V, he, ge);
          });
          let _e = d(`rue:slot:start`), ve = d(`rue:slot:end`);
          a(V, _e), a(V, ve), l(() => {
            s(p(C.value === `preview` ? c(() => {
              let t4 = o(), r2 = u(`div`);
              a(t4, r2), e(r2, `-space-x-6`);
              let i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(r2, i4), a(r2, l2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-12 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/batperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, i4, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(r2, f4), a(r2, p2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-12 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              a(r2, h3), a(r2, g2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-12 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/averagebulk@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, h3, g2);
              let _2 = d(`rue:component:start`), y3 = d(`rue:component:end`);
              return a(r2, _2), a(r2, y3), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-12 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/wonderperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, _2, y3), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar.Group className="-space-x-6">
  <Avatar><div className="w-12"><img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" /></div></Avatar>
  <Avatar><div className="w-12"><img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" /></div></Avatar>
  <Avatar><div className="w-12"><img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" /></div></Avatar>
  <Avatar><div className="w-12"><img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" /></div></Avatar>
</Avatar.Group>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), V, _e, ve);
          });
          let U = u(`div`);
          a(i3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = u(`h2`);
          a(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(W, r(`# Avatar group \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let ye = d(`rue:component:start`), be = d(`rue:component:end`);
          a(U, ye), a(U, be), l(() => {
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
            }), U, ye, be);
          });
          let xe = d(`rue:slot:start`), Se = d(`rue:slot:end`);
          a(U, xe), a(U, Se), l(() => {
            s(p(T.value === `preview` ? c(() => {
              let t4 = o(), r2 = u(`div`);
              return a(t4, r2), l(() => {
                n(r2, `items`, String(ee));
              }), e(r2, `-space-x-6`), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Avatar } from '@rue/design';
const groupItems = [
  {
    children: (
      <div className="w-12">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
      </div>
    ),
  },
  {
    children: (
      <div className="w-12">
        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
      </div>
    ),
  },
  {
    children: (
      <div className="w-12">
        <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
      </div>
    ),
  },
  { status: 'placeholder', children: (<div className="w-12 bg-neutral text-neutral-content"><span>+99</span></div>) },
];
<Avatar.Group items={groupItems} className="-space-x-6" />`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), U, xe, Se);
          });
          let G = u(`div`);
          a(i3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = u(`h2`);
          a(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(K, r(`# Avatar group with counter`));
          let Ce = d(`rue:component:start`), we = d(`rue:component:end`);
          a(G, Ce), a(G, we), l(() => {
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
            }), G, Ce, we);
          });
          let Te = d(`rue:slot:start`), Ee = d(`rue:slot:end`);
          a(G, Te), a(G, Ee), l(() => {
            s(p(w.value === `preview` ? c(() => {
              let t4 = o(), i4 = u(`div`);
              a(t4, i4), e(i4, `-space-x-6`);
              let l2 = d(`rue:component:start`), f4 = d(`rue:component:end`);
              a(i4, l2), a(i4, f4), s(m(v, {
                children: c(() => {
                  let t5 = o(), r2 = u(`div`);
                  a(t5, r2), e(r2, `w-12 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r2, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/batperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), i4, l2, f4);
              let p2 = d(`rue:component:start`), h3 = d(`rue:component:end`);
              a(i4, p2), a(i4, h3), s(m(v, {
                children: c(() => {
                  let t5 = o(), r2 = u(`div`);
                  a(t5, r2), e(r2, `w-12 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r2, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), i4, p2, h3);
              let g2 = d(`rue:component:start`), _2 = d(`rue:component:end`);
              a(i4, g2), a(i4, _2), s(m(v, {
                children: c(() => {
                  let t5 = o(), r2 = u(`div`);
                  a(t5, r2), e(r2, `w-12 bg-base-300`);
                  let i5 = u(`img`);
                  return a(r2, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/averagebulk@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), i4, g2, _2);
              let y3 = d(`rue:component:start`), b2 = d(`rue:component:end`);
              return a(i4, y3), a(i4, b2), s(m(v, {
                status: `placeholder`,
                children: c(() => {
                  let t5 = o(), n2 = u(`div`);
                  a(t5, n2), e(n2, `w-12 bg-neutral text-neutral-content`);
                  let i5 = u(`span`);
                  return a(n2, i5), a(i5, r(`+99`)), {
                    vaporElement: t5
                  };
                })
              }), i4, y3, b2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar.Group className="-space-x-6">
  <Avatar><div className="w-12"><img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" /></div></Avatar>
  <Avatar><div className="w-12"><img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" /></div></Avatar>
  <Avatar><div className="w-12"><img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" /></div></Avatar>
  <Avatar status="placeholder"><div className="w-12 bg-neutral text-neutral-content"><span>+99</span></div></Avatar>
</Avatar.Group>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), G, Te, Ee);
          });
          let q = u(`div`);
          a(i3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = u(`h2`);
          a(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(J, r(`# Avatar with ring`));
          let De = d(`rue:component:start`), Oe = d(`rue:component:end`);
          a(q, De), a(q, Oe), l(() => {
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
            }), q, De, Oe);
          });
          let ke = d(`rue:slot:start`), Ae = d(`rue:slot:end`);
          a(q, ke), a(q, Ae), l(() => {
            s(p(E.value === `preview` ? c(() => {
              let t4 = o(), r2 = d(`rue:component:start`), i4 = d(`rue:component:end`);
              return a(t4, r2), a(t4, i4), s(m(v, {
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-24 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), t4, r2, i4), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar><div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"><img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" /></div></Avatar>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), q, ke, Ae);
          });
          let Y = u(`div`);
          a(i3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = u(`h2`);
          a(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a(X, r(`# Avatar with presence indicator`));
          let Z = d(`rue:component:start`), je = d(`rue:component:end`);
          a(Y, Z), a(Y, je), l(() => {
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
            }), Y, Z, je);
          });
          let Me = d(`rue:slot:start`), Ne = d(`rue:slot:end`);
          a(Y, Me), a(Y, Ne), l(() => {
            s(p(D.value === `preview` ? c(() => {
              let t4 = o(), r2 = u(`div`);
              a(t4, r2), e(r2, `grid gap-3 bg-base-100 relative flex min-h-[6rem] max-w-4xl min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 xl:py-10`);
              let i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(r2, i4), a(r2, l2), s(m(v, {
                status: `online`,
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-24 rounded-full bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/gordon@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, i4, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              return a(r2, f4), a(r2, p2), s(m(v, {
                status: `offline`,
                children: c(() => {
                  let t5 = o(), r3 = u(`div`);
                  a(t5, r3), e(r3, `w-24 rounded-full bg-base-300`);
                  let i5 = u(`img`);
                  return a(r3, i5), e(i5, `h-full w-full object-cover`), n(i5, `src`, `https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp`), n(i5, `alt`, `Tailwind-CSS-Avatar-component`), {
                    vaporElement: t5
                  };
                })
              }), r2, f4, p2), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar status="online"><div className="w-24 rounded-full"><img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" /></div></Avatar>
<Avatar status="offline"><div className="w-24 rounded-full"><img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" /></div></Avatar>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Y, Me, Ne);
          });
          let Q = u(`div`);
          a(i3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = u(`h2`);
          a(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), a($, r(`# Avatar placeholder`));
          let Pe = d(`rue:component:start`), Fe = d(`rue:component:end`);
          a(Q, Pe), a(Q, Fe), l(() => {
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
            }), Q, Pe, Fe);
          });
          let Ie = d(`rue:slot:start`), Le = d(`rue:slot:end`);
          return a(Q, Ie), a(Q, Le), l(() => {
            s(p(O.value === `preview` ? c(() => {
              let t4 = o(), n2 = u(`div`);
              a(t4, n2), e(n2, `grid gap-3 bg-base-100 relative flex min-h-[6rem] max-w-4xl min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 xl:py-10 `);
              let i4 = d(`rue:component:start`), l2 = d(`rue:component:end`);
              a(n2, i4), a(n2, l2), s(m(v, {
                status: `placeholder`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `bg-neutral text-neutral-content rounded-full w-24`);
                  let i5 = u(`span`);
                  return a(n3, i5), e(i5, `text-3xl`), a(i5, r(`D`)), {
                    vaporElement: t5
                  };
                })
              }), n2, i4, l2);
              let f4 = d(`rue:component:start`), p2 = d(`rue:component:end`);
              a(n2, f4), a(n2, p2), s(m(v, {
                status: `online`,
                children: c(() => {
                  let t5 = o(), n3 = d(`rue:component:start`), i5 = d(`rue:component:end`);
                  return a(t5, n3), a(t5, i5), s(m(v, {
                    status: `placeholder`,
                    children: c(() => {
                      let t6 = o(), n4 = u(`div`);
                      a(t6, n4), e(n4, `bg-neutral text-neutral-content rounded-full w-16`);
                      let i6 = u(`span`);
                      return a(n4, i6), e(i6, `text-xl`), a(i6, r(`AI`)), {
                        vaporElement: t6
                      };
                    })
                  }), t5, n3, i5), {
                    vaporElement: t5
                  };
                })
              }), n2, f4, p2);
              let h3 = d(`rue:component:start`), g2 = d(`rue:component:end`);
              a(n2, h3), a(n2, g2), s(m(v, {
                status: `placeholder`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `bg-neutral text-neutral-content rounded-full w-12`);
                  let i5 = u(`span`);
                  return a(n3, i5), a(i5, r(`SY`)), {
                    vaporElement: t5
                  };
                })
              }), n2, h3, g2);
              let _2 = d(`rue:component:start`), y3 = d(`rue:component:end`);
              return a(n2, _2), a(n2, y3), s(m(v, {
                status: `placeholder`,
                children: c(() => {
                  let t5 = o(), n3 = u(`div`);
                  a(t5, n3), e(n3, `bg-neutral text-neutral-content rounded-full w-8`);
                  let i5 = u(`span`);
                  return a(n3, i5), e(i5, `text-xs`), a(i5, r(`UI`)), {
                    vaporElement: t5
                  };
                })
              }), n2, _2, y3), {
                vaporElement: t4
              };
            }) : c(() => {
              let e2 = o(), t4 = d(`rue:component:start`), n2 = d(`rue:component:end`);
              return a(e2, t4), a(e2, n2), l(() => {
                s(m(_, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Avatar status="placeholder"><div className="bg-neutral text-neutral-content w-24 rounded-full"><span className="text-3xl">D</span></div></Avatar>
<Avatar status="online"><Avatar status="placeholder"><div className="bg-neutral text-neutral-content w-16 rounded-full"><span className="text-xl">AI</span></div></Avatar></Avatar>
<Avatar status="placeholder"><div className="bg-neutral text-neutral-content w-12 rounded-full"><span>SY</span></div></Avatar>
<Avatar status="placeholder"><div className="bg-neutral text-neutral-content w-8 rounded-full"><span className="text-xs">UI</span></div></Avatar>`
                }), e2, t4, n2);
              }), {
                vaporElement: e2
              };
            })), Q, Ie, Le);
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

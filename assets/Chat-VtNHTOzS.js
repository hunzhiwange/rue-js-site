import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, t as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, r as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as v, s as y, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as b, t as x, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as S, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
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
  })()
]).then(async () => {
  let C, w, T, E, D, O;
  C = ({ placement: e2, className: t2, children: n2, items: r2 }) => {
    if (r2 && r2.length) return v(f, {
      children: r2.map((e3, n3) => {
        let r3 = `chat`;
        return r3 += ` chat-${e3.placement}`, t2 && (r3 += ` ${t2}`), y(`div`, {
          className: r3,
          children: [
            e3.imageSrc ? v(D, {
              className: e3.imageClassName,
              children: v(`div`, {
                className: `w-10 rounded-full`,
                children: v(`img`, {
                  alt: e3.imageAlt ?? `chat image`,
                  src: e3.imageSrc
                })
              })
            }) : null,
            e3.headerName || e3.headerTime ? y(T, {
              className: e3.headerClassName,
              children: [
                e3.headerName,
                ` `,
                e3.headerTime ? v(`time`, {
                  className: `text-xs opacity-50`,
                  children: e3.headerTime
                }) : null
              ]
            }) : null,
            v(w, {
              color: e3.color,
              children: e3.text
            }),
            e3.footer ? v(E, {
              className: e3.footerClassName,
              children: e3.footer
            }) : null
          ]
        }, n3);
      })
    });
    let i2 = `chat`;
    return i2 += ` chat-${e2}`, t2 && (i2 += ` ${t2}`), v(`div`, {
      className: i2,
      children: n2
    });
  };
  w = ({ color: e2, className: t2, children: n2 }) => {
    let r2 = `chat-bubble`;
    return e2 && (r2 += ` chat-bubble-${e2}`), t2 && (r2 += ` ${t2}`), v(`div`, {
      className: r2,
      children: n2
    });
  };
  T = ({ className: e2, children: t2 }) => {
    let n2 = `chat-header`;
    return e2 && (n2 += ` ${e2}`), v(`div`, {
      className: n2,
      children: t2
    });
  };
  E = ({ className: e2, children: t2 }) => {
    let n2 = `chat-footer`;
    return e2 && (n2 += ` ${e2}`), v(`div`, {
      className: n2,
      children: t2
    });
  };
  D = ({ className: e2, children: t2 }) => {
    let n2 = `chat-image`;
    return e2 && (n2 += ` ${e2}`), v(`div`, {
      className: n2,
      children: t2
    });
  };
  O = Object.assign(C, {
    Bubble: w,
    Header: T,
    Footer: E,
    Image: D
  });
  k = () => {
    let { tabStartEnd: C2, tabWithImage: w2, tabImageHeaderFooter: T2, tabHeaderFooter: E2, tabColors: D2, tabArray: k2, tabArrayInternal: A, chatData: ee, chatItems: te } = n(`useSetup:0:0`, () => o(() => ({
      tabStartEnd: n(`ref:1:0`, () => h(`preview`)),
      tabWithImage: n(`ref:1:1`, () => h(`preview`)),
      tabImageHeaderFooter: n(`ref:1:2`, () => h(`preview`)),
      tabHeaderFooter: n(`ref:1:3`, () => h(`preview`)),
      tabColors: n(`ref:1:4`, () => h(`preview`)),
      tabArray: n(`ref:1:5`, () => h(`preview`)),
      tabArrayInternal: n(`ref:1:6`, () => h(`preview`)),
      chatData: [
        {
          placement: `start`,
          text: `It's over Anakin, I have the high ground.`
        },
        {
          placement: `end`,
          text: `You underestimate my power!`
        },
        {
          placement: `start`,
          imageSrc: `https://img.daisyui.com/images/profile/demo/kenobee@192.webp`,
          headerName: `Obi-Wan Kenobi`,
          headerTime: `12:45`,
          text: `You were the Chosen One!`,
          footer: `Delivered`
        },
        {
          placement: `end`,
          imageSrc: `https://img.daisyui.com/images/profile/demo/anakeen@192.webp`,
          headerName: `Anakin`,
          headerTime: `12:46`,
          text: `I hate you!`,
          footer: `Seen at 12:46`
        },
        {
          placement: `start`,
          color: `primary`,
          text: `What kind of nonsense is this`
        },
        {
          placement: `end`,
          color: `success`,
          text: `You have been given a great honor.`
        }
      ],
      chatItems: [
        {
          placement: `start`,
          text: y(f, {
            children: [
              v(`span`, {
                children: `It's over Anakin,`
              }),
              v(`br`, {}),
              `I have the high ground.`
            ]
          })
        },
        {
          placement: `end`,
          text: `You underestimate my power!`
        },
        {
          placement: `start`,
          imageSrc: `https://img.daisyui.com/images/profile/demo/kenobee@192.webp`,
          headerName: v(`span`, {
            children: `Obi-Wan Kenobi`
          }),
          headerTime: v(`span`, {
            children: `12:45`
          }),
          text: `You were the Chosen One!`,
          footer: v(`span`, {
            children: `Delivered`
          })
        },
        {
          placement: `end`,
          imageSrc: `https://img.daisyui.com/images/profile/demo/anakeen@192.webp`,
          headerName: v(`span`, {
            children: `Anakin`
          }),
          headerTime: v(`span`, {
            children: `12:46`
          }),
          color: `success`,
          text: v(`span`, {
            children: `I hate you!`
          }),
          footer: v(`span`, {
            children: `Seen at 12:46`
          })
        },
        {
          placement: `start`,
          color: `primary`,
          text: v(`em`, {
            children: `What kind of nonsense is this`
          })
        }
      ]
    })));
    return u(() => {
      let n2 = c(), o2 = m(`rue:component:start`), f2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, f2), l(v(b, {
        children: u(() => {
          let n3 = c(), o3 = p(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let f3 = p(`h1`);
          s(o3, f3), s(f3, a(`Chat bubble \u804A\u5929\u6C14\u6CE1`));
          let h2 = p(`p`);
          s(o3, h2), e(h2, `text-sm mt-3 mb-3`), s(h2, a(`\u804A\u5929\u6C14\u6CE1\u7528\u4E8E\u5C55\u793A\u5BF9\u8BDD\u4E2D\u7684\u4E00\u884C\u53CA\u5176\u6240\u6709\u76F8\u5173\u6570\u636E\uFF0C\u5305\u62EC\u4F5C\u8005\u5934\u50CF\u3001\u540D\u79F0\u3001\u65F6\u95F4\u7B49\u3002`));
          let y2 = p(`div`);
          s(o3, y2), e(y2, `text-sm`);
          let b2 = p(`a`);
          s(y2, b2), i(b2, `href`, `https://daisyui.com/components/chat/`), i(b2, `target`, `_blank`), s(b2, a(`\u67E5\u770B Chat \u9759\u6001\u6837\u5F0F`));
          let j = p(`div`);
          s(o3, j), e(j, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let M = p(`h2`);
          s(j, M), e(M, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(M, a(`# chat-start and chat-end`));
          let ne = m(`rue:component:start`), re = m(`rue:component:end`);
          s(j, ne), s(j, re), d(() => {
            l(v(x, {
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
            }), j, ne, re);
          });
          let ie = m(`rue:slot:start`), N = m(`rue:slot:end`);
          s(j, ie), s(j, N), d(() => {
            l(g(C2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full`);
              let r2 = m(`rue:component:start`), i2 = m(`rue:component:end`);
              s(n4, r2), s(n4, i2), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), s(t3, a(`It's over Anakin,`)), s(t3, p(`br`)), s(t3, a(`I have the high ground.`)), {
                    vaporElement: e2
                  };
                })
              }), n4, r2, i2);
              let o4 = m(`rue:component:start`), d2 = m(`rue:component:end`);
              return s(n4, o4), s(n4, d2), l(v(O, {
                placement: `end`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), s(t3, a(`You underestimate my power!`)), {
                    vaporElement: e2
                  };
                })
              }), n4, o4, d2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full">
  <Chat placement="start">
    <Chat.Bubble>
      It's over Anakin,
      <br />
      I have the high ground.
    </Chat.Bubble>
  </Chat>
  <Chat placement="end">
    <Chat.Bubble>You underestimate my power!</Chat.Bubble>
  </Chat>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), j, ie, N);
          });
          let P = p(`div`);
          s(o3, P), e(P, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let F = p(`h2`);
          s(P, F), e(F, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(F, a(`# Chat \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF09`));
          let ae = m(`rue:component:start`), I = m(`rue:component:end`);
          s(P, ae), s(P, I), d(() => {
            l(v(x, {
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
              activeKey: k2.value,
              onChange: (e2) => k2.value = e2,
              className: `mb-3`
            }), P, ae, I);
          });
          let L = m(`rue:slot:start`), oe = m(`rue:slot:end`);
          s(P, L), s(P, oe), d(() => {
            l(g(k2.value === `preview` ? u(() => {
              let n4 = c(), o4 = p(`div`);
              s(n4, o4), e(o4, `w-full`);
              let f4 = m(`rue:list:start`), h3 = m(`rue:list:end`);
              s(o4, f4), s(o4, h3);
              let y3 = /* @__PURE__ */ new Map();
              return d(() => {
                y3 = _({
                  items: ee || [],
                  getKey: (e2, t2) => t2,
                  elements: y3,
                  parent: o4,
                  before: h3,
                  start: f4,
                  renderItem: (n5, o5, f5, h4, _2) => {
                    l(u(() => {
                      let o6 = c(), f6 = m(`rue:component:start`), h5 = m(`rue:component:end`);
                      s(o6, f6), s(o6, h5);
                      let y4 = u(() => {
                        let o7 = c(), f7 = m(`rue:slot:start`), h6 = m(`rue:slot:end`);
                        s(o7, f7), s(o7, h6), d(() => {
                          l(g(n5.imageSrc ? u(() => {
                            let t2 = c(), r2 = p(`div`);
                            s(t2, r2), e(r2, `avatar`);
                            let a2 = p(`div`);
                            s(r2, a2), e(a2, `w-10 rounded-full`);
                            let o8 = p(`img`);
                            return s(a2, o8), i(o8, `alt`, `Tailwind CSS chat bubble component`), d(() => {
                              i(o8, `src`, String(n5.imageSrc));
                            }), {
                              vaporElement: t2
                            };
                          }) : ``), o7, f7, h6);
                        }), s(o7, a(` `));
                        let _3 = m(`rue:slot:start`), v2 = m(`rue:slot:end`);
                        s(o7, _3), s(o7, v2), d(() => {
                          l(g(n5.headerName ? u(() => {
                            let i2 = c(), a2 = p(`div`);
                            s(i2, a2);
                            let o8 = t(a2);
                            s(a2, o8), d(() => {
                              r(o8, n5.headerName);
                            });
                            let l2 = p(`time`);
                            s(a2, l2), e(l2, `text-xs opacity-50`);
                            let u2 = t(l2);
                            return s(l2, u2), d(() => {
                              r(u2, n5.headerTime);
                            }), {
                              vaporElement: i2
                            };
                          }) : ``), o7, _3, v2);
                        });
                        let y5 = p(`div`);
                        s(o7, y5), d(() => {
                          i(y5, `color`, String(n5.color));
                        });
                        let b3 = t(y5);
                        s(y5, b3), d(() => {
                          r(b3, n5.text);
                        });
                        let x2 = m(`rue:slot:start`), S2 = m(`rue:slot:end`);
                        return s(o7, x2), s(o7, S2), d(() => {
                          l(g(n5.footer ? u(() => {
                            let i2 = c(), a2 = p(`div`);
                            s(i2, a2), e(a2, `opacity-50`);
                            let o8 = t(a2);
                            return s(a2, o8), d(() => {
                              r(o8, n5.footer);
                            }), {
                              vaporElement: i2
                            };
                          }) : ``), o7, x2, S2);
                        }), {
                          vaporElement: o7
                        };
                      });
                      return d(() => {
                        l(v(O, {
                          placement: n5.placement,
                          children: y4
                        }, _2), o6, f6, h5);
                      }), {
                        vaporElement: o6
                      };
                    }), o5, f5, h4);
                  }
                });
              }), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { ref } from 'rues';
import { Chat } from '@rue/design';
const tabArray = ref<'preview' | 'code'>('preview');
const chatData = [
  { placement: 'start', text: "It's over Anakin, I have the high ground." },
  { placement: 'end', text: 'You underestimate my power!' },
  {
    placement: 'start',
    imageSrc: 'https://img.daisyui.com/images/profile/demo/kenobee@192.webp',
    headerName: 'Obi-Wan Kenobi',
    headerTime: '12:45',
    text: 'You were the Chosen One!',
    footer: 'Delivered',
  },
  {
    placement: 'end',
    imageSrc: 'https://img.daisyui.com/images/profile/demo/anakeen@192.webp',
    headerName: 'Anakin',
    headerTime: '12:46',
    text: 'I hate you!',
    footer: 'Seen at 12:46',
  },
  { placement: 'start', color: 'primary', text: 'What kind of nonsense is this' },
  { placement: 'end', color: 'success', text: 'You have been given a great honor.' },
];
<div className="w-full">
  {chatData.map((m, i) => (
    <Chat key={i} placement={m.placement}>
      {m.imageSrc ? (
        <Chat.Image className="avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={m.imageSrc} />
          </div>
        </Chat.Image>
      ) : null}
      {m.headerName ? (
        <Chat.Header>
          {m.headerName} <time className="text-xs opacity-50">{m.headerTime}</time>
        </Chat.Header>
      ) : null}
      <Chat.Bubble color={m.color}>{m.text}</Chat.Bubble>
      {m.footer ? <Chat.Footer className="opacity-50">{m.footer}</Chat.Footer> : null}
    </Chat>
  ))}
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), P, L, oe);
          });
          let R = p(`div`);
          s(o3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = p(`h2`);
          s(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(z, a(`# Chat \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let B = m(`rue:component:start`), V = m(`rue:component:end`);
          s(R, B), s(R, V), d(() => {
            l(v(x, {
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
            }), R, B, V);
          });
          let H = m(`rue:slot:start`), U = m(`rue:slot:end`);
          s(R, H), s(R, U), d(() => {
            l(g(A.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full`);
              let r2 = m(`rue:component:start`), i2 = m(`rue:component:end`);
              return s(n4, r2), s(n4, i2), d(() => {
                l(v(O, {
                  items: te,
                  className: `w-full`
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Chat } from '@rue/design';
const chatItems = [
  {
    placement: 'start',
    text: (
      <>
        <span>It's over Anakin,</span>
        <br />I have the high ground.
      </>
    ),
  },
  { placement: 'end', text: 'You underestimate my power!' },
  {
    placement: 'start',
    imageSrc: 'https://img.daisyui.com/images/profile/demo/kenobee@192.webp',
    headerName: <span>Obi-Wan Kenobi</span>,
    headerTime: <span>12:45</span>,
    text: 'You were the Chosen One!',
    footer: <span>Delivered</span>,
  },
  {
    placement: 'end',
    imageSrc: 'https://img.daisyui.com/images/profile/demo/anakeen@192.webp',
    headerName: <span>Anakin</span>,
    headerTime: <span>12:46</span>,
    color: 'success',
    text: <span>I hate you!</span>,
    footer: <span>Seen at 12:46</span>,
  },
  { placement: 'start', color: 'primary', text: <em>What kind of nonsense is this</em> },
];
<div className="w-full">
  <Chat items={chatItems} className="w-full" />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), R, H, U);
          });
          let W = p(`div`);
          s(o3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let G = p(`h2`);
          s(W, G), e(G, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(G, a(`# Chat with image`));
          let K = m(`rue:component:start`), q = m(`rue:component:end`);
          s(W, K), s(W, q), d(() => {
            l(v(x, {
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
            }), W, K, q);
          });
          let se = m(`rue:slot:start`), ce = m(`rue:slot:end`);
          s(W, se), s(W, ce), d(() => {
            l(g(w2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full`);
              let r2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              s(n4, r2), s(n4, o4), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `avatar`);
                  let r3 = p(`div`);
                  s(n5, r3), e(r3, `w-10 rounded-full`);
                  let o5 = p(`img`);
                  s(r3, o5), i(o5, `alt`, `Tailwind CSS chat bubble component`), i(o5, `src`, `https://img.daisyui.com/images/profile/demo/kenobee@192.webp`);
                  let l2 = p(`div`);
                  return s(t3, l2), s(l2, a(`It was said that you would, destroy the Sith, not join them.`)), {
                    vaporElement: t3
                  };
                })
              }), n4, r2, o4);
              let d2 = m(`rue:component:start`), f4 = m(`rue:component:end`);
              s(n4, d2), s(n4, f4), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `avatar`);
                  let r3 = p(`div`);
                  s(n5, r3), e(r3, `w-10 rounded-full`);
                  let o5 = p(`img`);
                  s(r3, o5), i(o5, `alt`, `Tailwind CSS chat bubble component`), i(o5, `src`, `https://img.daisyui.com/images/profile/demo/kenobee@192.webp`);
                  let l2 = p(`div`);
                  return s(t3, l2), s(l2, a(`It was you who would bring balance to the Force`)), {
                    vaporElement: t3
                  };
                })
              }), n4, d2, f4);
              let h3 = m(`rue:component:start`), g2 = m(`rue:component:end`);
              return s(n4, h3), s(n4, g2), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `avatar`);
                  let r3 = p(`div`);
                  s(n5, r3), e(r3, `w-10 rounded-full`);
                  let o5 = p(`img`);
                  s(r3, o5), i(o5, `alt`, `Tailwind CSS chat bubble component`), i(o5, `src`, `https://img.daisyui.com/images/profile/demo/kenobee@192.webp`);
                  let l2 = p(`div`);
                  return s(t3, l2), s(l2, a(`Not leave it in Darkness`)), {
                    vaporElement: t3
                  };
                })
              }), n4, h3, g2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full">
  <Chat placement="start">
    <Chat.Image className="avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
      </div>
    </Chat.Image>
    <Chat.Bubble>It was said that you would, destroy the Sith, not join them.</Chat.Bubble>
  </Chat>
  <Chat placement="start">
    <Chat.Image className="avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
      </div>
    </Chat.Image>
    <Chat.Bubble>It was you who would bring balance to the Force</Chat.Bubble>
  </Chat>
  <Chat placement="start">
    <Chat.Image className="avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
      </div>
    </Chat.Image>
    <Chat.Bubble>Not leave it in Darkness</Chat.Bubble>
  </Chat>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), W, se, ce);
          });
          let J = p(`div`);
          s(o3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Y = p(`h2`);
          s(J, Y), e(Y, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Y, a(`# Chat with image, header and footer`));
          let le = m(`rue:component:start`), ue = m(`rue:component:end`);
          s(J, le), s(J, ue), d(() => {
            l(v(x, {
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
            }), J, le, ue);
          });
          let de = m(`rue:slot:start`), fe = m(`rue:slot:end`);
          s(J, de), s(J, fe), d(() => {
            l(g(T2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full`);
              let r2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              s(n4, r2), s(n4, o4), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `avatar`);
                  let r3 = p(`div`);
                  s(n5, r3), e(r3, `w-10 rounded-full`);
                  let o5 = p(`img`);
                  s(r3, o5), i(o5, `alt`, `Tailwind CSS chat bubble component`), i(o5, `src`, `https://img.daisyui.com/images/profile/demo/kenobee@192.webp`);
                  let l2 = p(`div`);
                  s(t3, l2), s(l2, a(`Obi-Wan Kenobi`));
                  let u2 = p(`time`);
                  s(l2, u2), e(u2, `text-xs opacity-50`), s(u2, a(`12:45`));
                  let d3 = p(`div`);
                  s(t3, d3), s(d3, a(`You were the Chosen One!`));
                  let f5 = p(`div`);
                  return s(t3, f5), e(f5, `opacity-50`), s(f5, a(`Delivered`)), {
                    vaporElement: t3
                  };
                })
              }), n4, r2, o4);
              let d2 = m(`rue:component:start`), f4 = m(`rue:component:end`);
              return s(n4, d2), s(n4, f4), l(v(O, {
                placement: `end`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `avatar`);
                  let r3 = p(`div`);
                  s(n5, r3), e(r3, `w-10 rounded-full`);
                  let o5 = p(`img`);
                  s(r3, o5), i(o5, `alt`, `Tailwind CSS chat bubble component`), i(o5, `src`, `https://img.daisyui.com/images/profile/demo/anakeen@192.webp`);
                  let l2 = p(`div`);
                  s(t3, l2), s(l2, a(`Anakin`));
                  let u2 = p(`time`);
                  s(l2, u2), e(u2, `text-xs opacity-50`), s(u2, a(`12:46`));
                  let d3 = p(`div`);
                  s(t3, d3), s(d3, a(`I hate you!`));
                  let f5 = p(`div`);
                  return s(t3, f5), e(f5, `opacity-50`), s(f5, a(`Seen at 12:46`)), {
                    vaporElement: t3
                  };
                })
              }), n4, d2, f4), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full">
  <Chat placement="start">
    <Chat.Image className="avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
      </div>
    </Chat.Image>
    <Chat.Header>
      Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
    </Chat.Header>
    <Chat.Bubble>You were the Chosen One!</Chat.Bubble>
    <Chat.Footer className="opacity-50">Delivered</Chat.Footer>
  </Chat>
  <Chat placement="end">
    <Chat.Image className="avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
      </div>
    </Chat.Image>
    <Chat.Header>
      Anakin <time className="text-xs opacity-50">12:46</time>
    </Chat.Header>
    <Chat.Bubble>I hate you!</Chat.Bubble>
    <Chat.Footer className="opacity-50">Seen at 12:46</Chat.Footer>
  </Chat>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), J, de, fe);
          });
          let X = p(`div`);
          s(o3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Z = p(`h2`);
          s(X, Z), e(Z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Z, a(`# Chat with header and footer`));
          let pe = m(`rue:component:start`), me = m(`rue:component:end`);
          s(X, pe), s(X, me), d(() => {
            l(v(x, {
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
            }), X, pe, me);
          });
          let he = m(`rue:slot:start`), ge = m(`rue:slot:end`);
          s(X, he), s(X, ge), d(() => {
            l(g(E2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full`);
              let r2 = m(`rue:component:start`), i2 = m(`rue:component:end`);
              s(n4, r2), s(n4, i2), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), s(n5, a(`Obi-Wan Kenobi`));
                  let r3 = p(`time`);
                  s(n5, r3), e(r3, `text-xs opacity-50`), s(r3, a(`2 hours ago`));
                  let i3 = p(`div`);
                  s(t3, i3), s(i3, a(`You were my brother, Anakin.`));
                  let o5 = p(`div`);
                  return s(t3, o5), e(o5, `opacity-50`), s(o5, a(`Seen`)), {
                    vaporElement: t3
                  };
                })
              }), n4, r2, i2);
              let o4 = m(`rue:component:start`), d2 = m(`rue:component:end`);
              return s(n4, o4), s(n4, d2), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), s(n5, a(`Obi-Wan Kenobi`));
                  let r3 = p(`time`);
                  s(n5, r3), e(r3, `text-xs opacity-50`), s(r3, a(`2 hour ago`));
                  let i3 = p(`div`);
                  s(t3, i3), s(i3, a(`I loved you.`));
                  let o5 = p(`div`);
                  return s(t3, o5), e(o5, `opacity-50`), s(o5, a(`Delivered`)), {
                    vaporElement: t3
                  };
                })
              }), n4, o4, d2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full">
  <Chat placement="start">
    <Chat.Header>
      Obi-Wan Kenobi <time className="text-xs opacity-50">2 hours ago</time>
    </Chat.Header>
    <Chat.Bubble>You were my brother, Anakin.</Chat.Bubble>
    <Chat.Footer className="opacity-50">Seen</Chat.Footer>
  </Chat>
  <Chat placement="start">
    <Chat.Header>
      Obi-Wan Kenobi <time className="text-xs opacity-50">2 hour ago</time>
    </Chat.Header>
    <Chat.Bubble>I loved you.</Chat.Bubble>
    <Chat.Footer className="opacity-50">Delivered</Chat.Footer>
  </Chat>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), X, he, ge);
          });
          let Q = p(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = p(`h2`);
          s(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s($, a(`# Chat Bubble with colors`));
          let _e = m(`rue:component:start`), ve = m(`rue:component:end`);
          s(Q, _e), s(Q, ve), d(() => {
            l(v(x, {
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
            }), Q, _e, ve);
          });
          let ye = m(`rue:slot:start`), be = m(`rue:slot:end`);
          return s(Q, ye), s(Q, be), d(() => {
            l(g(D2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full`);
              let r2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              s(n4, r2), s(n4, o4), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `primary`), s(t3, a(`What kind of nonsense is this`)), {
                    vaporElement: e2
                  };
                })
              }), n4, r2, o4);
              let d2 = m(`rue:component:start`), f4 = m(`rue:component:end`);
              s(n4, d2), s(n4, f4), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `secondary`), s(t3, a(`Put me on the Council and not make me a Master!??`)), {
                    vaporElement: e2
                  };
                })
              }), n4, d2, f4);
              let h3 = m(`rue:component:start`), g2 = m(`rue:component:end`);
              s(n4, h3), s(n4, g2), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `accent`), s(t3, a(`That's never been done in the history of the Jedi.`)), {
                    vaporElement: e2
                  };
                })
              }), n4, h3, g2);
              let _2 = m(`rue:component:start`), y3 = m(`rue:component:end`);
              s(n4, _2), s(n4, y3), l(v(O, {
                placement: `start`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `neutral`), s(t3, a(`It's insulting!`)), {
                    vaporElement: e2
                  };
                })
              }), n4, _2, y3);
              let b3 = m(`rue:component:start`), x2 = m(`rue:component:end`);
              s(n4, b3), s(n4, x2), l(v(O, {
                placement: `end`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `info`), s(t3, a(`Calm down, Anakin.`)), {
                    vaporElement: e2
                  };
                })
              }), n4, b3, x2);
              let S2 = m(`rue:component:start`), C3 = m(`rue:component:end`);
              s(n4, S2), s(n4, C3), l(v(O, {
                placement: `end`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `success`), s(t3, a(`You have been given a great honor.`)), {
                    vaporElement: e2
                  };
                })
              }), n4, S2, C3);
              let w3 = m(`rue:component:start`), T3 = m(`rue:component:end`);
              s(n4, w3), s(n4, T3), l(v(O, {
                placement: `end`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `warning`), s(t3, a(`To be on the Council at your age.`)), {
                    vaporElement: e2
                  };
                })
              }), n4, w3, T3);
              let E3 = m(`rue:component:start`), D3 = m(`rue:component:end`);
              return s(n4, E3), s(n4, D3), l(v(O, {
                placement: `end`,
                children: u(() => {
                  let e2 = c(), t3 = p(`div`);
                  return s(e2, t3), i(t3, `color`, `error`), s(t3, a(`It's never happened before.`)), {
                    vaporElement: e2
                  };
                })
              }), n4, E3, D3), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full">
  <Chat placement="start">
    <Chat.Bubble color="primary">What kind of nonsense is this</Chat.Bubble>
  </Chat>
  <Chat placement="start">
    <Chat.Bubble color="secondary">Put me on the Council and not make me a Master!??</Chat.Bubble>
  </Chat>
  <Chat placement="start">
    <Chat.Bubble color="accent">That's never been done in the history of the Jedi.</Chat.Bubble>
  </Chat>
  <Chat placement="start">
    <Chat.Bubble color="neutral">It's insulting!</Chat.Bubble>
  </Chat>
  <Chat placement="end">
    <Chat.Bubble color="info">Calm down, Anakin.</Chat.Bubble>
  </Chat>
  <Chat placement="end">
    <Chat.Bubble color="success">You have been given a great honor.</Chat.Bubble>
  </Chat>
  <Chat placement="end">
    <Chat.Bubble color="warning">To be on the Council at your age.</Chat.Bubble>
  </Chat>
  <Chat placement="end">
    <Chat.Bubble color="error">It's never happened before.</Chat.Bubble>
  </Chat>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, ye, be);
          }), {
            vaporElement: n3
          };
        })
      }), n2, o2, f2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  k as default
};

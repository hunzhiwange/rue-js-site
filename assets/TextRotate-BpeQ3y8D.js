import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let x;
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
  let b;
  b = ({ className: e2, children: t2, items: n2, innerClassName: r2 }) => {
    let i2 = `text-rotate`;
    return e2 && (i2 += ` ${e2}`), n2 && n2.length ? g(`span`, {
      className: i2,
      children: g(`span`, {
        className: r2,
        children: n2.map((e3, t3) => g(`span`, {
          className: e3.className,
          children: e3.text
        }, t3))
      })
    }) : g(`span`, {
      className: i2,
      children: t2
    });
  };
  x = () => {
    let { tabBasic: x2, tabSix: S, tabSentence: C, tabDuration: w, tabLineHeight: T, tabArray: E } = n(`useSetup:0:0`, () => o(() => ({
      tabBasic: n(`ref:1:0`, () => m(`preview`)),
      tabSix: n(`ref:1:1`, () => m(`preview`)),
      tabSentence: n(`ref:1:2`, () => m(`preview`)),
      tabDuration: n(`ref:1:3`, () => m(`preview`)),
      tabLineHeight: n(`ref:1:4`, () => m(`preview`)),
      tabArray: n(`ref:1:5`, () => m(`preview`))
    })));
    return u(() => {
      let n2 = c(), o2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return s(n2, o2), s(n2, m2), l(g(_, {
        children: u(() => {
          let n3 = c(), o3 = f(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          s(o3, m3), s(m3, a(`Text Rotate \u6587\u672C\u8F6E\u64AD`));
          let _2 = f(`p`);
          s(o3, _2), e(_2, `text-sm mt-3 mb-3`), s(_2, a(`Text Rotate \u53EF\u4EE5\u5728\u540C\u4E00\u4F4D\u7F6E\u8F6E\u64AD\u6700\u591A 6 \u884C\u6587\u672C\uFF0C\u9ED8\u8BA4\u65F6\u957F 10s\uFF0C\u60AC\u6D6E\u65F6\u6682\u505C\u52A8\u753B\u3002`));
          let D = f(`div`);
          s(o3, D), e(D, `text-sm`);
          let O = f(`a`);
          s(D, O), i(O, `href`, `https://daisyui.com/components/text-rotate/`), i(O, `target`, `_blank`), s(O, a(`\u67E5\u770B Text Rotate \u9759\u6001\u6837\u5F0F`));
          let k = f(`div`);
          s(o3, k), e(k, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let A = f(`h2`);
          s(k, A), e(A, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(A, a(`# Text Rotate`));
          let j = f(`p`);
          s(k, j), e(j, `text-sm mt-3 mb-3`), s(j, a(`Rotates through 3 words, in 10 seconds`));
          let ee = p(`rue:component:start`), te = p(`rue:component:end`);
          s(k, ee), s(k, te), d(() => {
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
              activeKey: x2.value,
              onChange: (e2) => x2.value = e2,
              className: `mb-3`
            }), k, ee, te);
          });
          let M = p(`rue:slot:start`), ne = p(`rue:slot:end`);
          s(k, M), s(k, ne), d(() => {
            l(h(x2.value === `preview` ? u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(g(b, {
                children: u(() => {
                  let e3 = c(), t3 = f(`span`);
                  s(e3, t3);
                  let n5 = f(`span`);
                  s(t3, n5), s(n5, a(`ONE`));
                  let r2 = f(`span`);
                  s(t3, r2), s(r2, a(`TWO`));
                  let i2 = f(`span`);
                  return s(t3, i2), s(i2, a(`THREE`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<TextRotate><span><span>ONE</span><span>TWO</span><span>THREE</span></span></TextRotate>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), k, M, ne);
          });
          let N = f(`div`);
          s(o3, N), e(N, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let P = f(`h2`);
          s(N, P), e(P, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(P, a(`# Using items array`));
          let F = f(`p`);
          s(N, F), e(F, `text-sm mt-3 mb-3`), s(F, a(`Pass an array of items, each item can be text or JSX`));
          let I = p(`rue:component:start`), L = p(`rue:component:end`);
          s(N, I), s(N, L), d(() => {
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
            }), N, I, L);
          });
          let re = p(`rue:slot:start`), ie = p(`rue:slot:end`);
          s(N, re), s(N, ie), d(() => {
            l(h(E.value === `preview` ? u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(b, {
                  className: `max-md:text-3xl text-7xl font-title`,
                  innerClassName: `justify-items-center`,
                  items: [
                    {
                      text: `DESIGN`
                    },
                    {
                      text: `DEVELOP`
                    },
                    {
                      text: `DEPLOY`
                    },
                    {
                      text: `SCALE`
                    },
                    {
                      text: `MAINTAIN`
                    },
                    {
                      text: `REPEAT`
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<TextRotate className="text-7xl" innerClassName="justify-items-center" items={[{ text: 'DESIGN' }, { text: 'DEVELOP' }, { text: 'DEPLOY' }, { text: 'SCALE' }, { text: 'MAINTAIN' }, { text: 'REPEAT' }]} />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), N, re, ie);
          });
          let R = f(`div`);
          s(o3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = f(`h2`);
          s(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(z, a(`# Rotating 6 words`));
          let B = f(`p`);
          s(R, B), e(B, `text-sm mt-3 mb-3`), s(B, a(`Big font size, horizontally centered`));
          let ae = p(`rue:component:start`), oe = p(`rue:component:end`);
          s(R, ae), s(R, oe), d(() => {
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
            }), R, ae, oe);
          });
          let V = p(`rue:slot:start`), H = p(`rue:slot:end`);
          s(R, V), s(R, H), d(() => {
            l(h(S.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `max-md:text-3xl text-7xl font-title`,
                children: u(() => {
                  let t3 = c(), n5 = f(`span`);
                  s(t3, n5), e(n5, `justify-items-center`);
                  let r3 = f(`span`);
                  s(n5, r3), s(r3, a(`DESIGN`));
                  let i2 = f(`span`);
                  s(n5, i2), s(i2, a(`DEVELOP`));
                  let o4 = f(`span`);
                  s(n5, o4), s(o4, a(`DEPLOY`));
                  let l2 = f(`span`);
                  s(n5, l2), s(l2, a(`SCALE`));
                  let u2 = f(`span`);
                  s(n5, u2), s(u2, a(`MAINTAIN`));
                  let d2 = f(`span`);
                  return s(n5, d2), s(d2, a(`REPEAT`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<TextRotate className="text-7xl"><span className="justify-items-center"><span>DESIGN</span><span>DEVELOP</span><span>DEPLOY</span><span>SCALE</span><span>MAINTAIN</span><span>REPEAT</span></span></TextRotate>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), R, V, H);
          });
          let U = f(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = f(`h2`);
          s(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(W, a(`# Rotating words in a sentence`));
          let G = f(`p`);
          s(U, G), e(G, `text-sm mt-3 mb-3`), s(G, a(`Different colors for each word`));
          let K = p(`rue:component:start`), se = p(`rue:component:end`);
          s(U, K), s(U, se), d(() => {
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
            }), U, K, se);
          });
          let ce = p(`rue:slot:start`), le = p(`rue:slot:end`);
          s(U, ce), s(U, le), d(() => {
            l(h(C.value === `preview` ? u(() => {
              let n4 = c(), i2 = f(`span`);
              s(n4, i2), s(i2, a(`Providing AI Agents for`));
              let o4 = t(i2);
              s(i2, o4), r(o4, ` `);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              return s(i2, d2), s(i2, m4), l(g(b, {
                children: u(() => {
                  let t2 = c(), n5 = f(`span`);
                  s(t2, n5);
                  let r2 = f(`span`);
                  s(n5, r2), e(r2, `bg-teal-400 text-teal-800 px-2`), s(r2, a(`Designers`));
                  let i3 = f(`span`);
                  s(n5, i3), e(i3, `bg-red-400 text-red-800 px-2`), s(i3, a(`Developers`));
                  let o5 = f(`span`);
                  return s(n5, o5), e(o5, `bg-blue-400 text-blue-800 px-2`), s(o5, a(`Managers`)), {
                    vaporElement: t2
                  };
                })
              }), i2, d2, m4), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<span>Providing AI Agents for <TextRotate><span><span className="bg-teal-400 text-teal-800 px-2">Designers</span><span className="bg-red-400 text-red-800 px-2">Developers</span><span className="bg-blue-400 text-blue-800 px-2">Managers</span></span></TextRotate></span>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, ce, le);
          });
          let q = f(`div`);
          s(o3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = f(`h2`);
          s(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(J, a(`# Rotating 3 words with custom duration`));
          let Y = f(`p`);
          s(q, Y), e(Y, `text-sm mt-3 mb-3`), s(Y, a(`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`));
          let X = p(`rue:component:start`), ue = p(`rue:component:end`);
          s(q, X), s(q, ue), d(() => {
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
            }), q, X, ue);
          });
          let de = p(`rue:slot:start`), fe = p(`rue:slot:end`);
          s(q, de), s(q, fe), d(() => {
            l(h(w.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `max-md:text-3xl text-7xl font-title duration-6000`,
                children: u(() => {
                  let t3 = c(), n5 = f(`span`);
                  s(t3, n5), e(n5, `justify-items-center`);
                  let r3 = f(`span`);
                  s(n5, r3), s(r3, a(`BLAZING`));
                  let i2 = f(`span`);
                  return s(n5, i2), e(i2, `font-bold italic px-2`), s(i2, a(`FAST \u25B6\uFE0E\u25B6\uFE0E`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<TextRotate className="text-7xl duration-6000"><span className="justify-items-center"><span>BLAZING</span><span className="font-bold italic px-2">FAST \u25B6\uFE0E\u25B6\uFE0E</span></span></TextRotate>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, de, fe);
          });
          let Z = f(`div`);
          s(o3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Q = f(`h2`);
          s(Z, Q), e(Q, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Q, a(`# Custom line height`));
          let $ = f(`p`);
          s(Z, $), e($, `text-sm mt-3 mb-3`), s($, a(`In case you have a tall font or need more vertical spacing between lines`));
          let pe = p(`rue:component:start`), me = p(`rue:component:end`);
          s(Z, pe), s(Z, me), d(() => {
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
            }), Z, pe, me);
          });
          let he = p(`rue:slot:start`), ge = p(`rue:slot:end`);
          return s(Z, he), s(Z, ge), d(() => {
            l(h(T.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `max-md:text-3xl text-7xl font-title leading-[2]`,
                children: u(() => {
                  let t3 = c(), n5 = f(`span`);
                  s(t3, n5), e(n5, `justify-items-center`);
                  let r3 = f(`span`);
                  s(n5, r3), s(r3, a(`\u{1F4D0} DESIGN`));
                  let i2 = f(`span`);
                  s(n5, i2), s(i2, a(`\u2328\uFE0F DEVELOP`));
                  let o4 = f(`span`);
                  s(n5, o4), s(o4, a(`\u{1F30E} DEPLOY`));
                  let l2 = f(`span`);
                  s(n5, l2), s(l2, a(`\u{1F331} SCALE`));
                  let u2 = f(`span`);
                  s(n5, u2), s(u2, a(`\u{1F527} MAINTAIN`));
                  let d2 = f(`span`);
                  return s(n5, d2), s(d2, a(`\u267B\uFE0F REPEAT`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<TextRotate className="text-7xl leading-[2]"><span className="justify-items-center"><span>\u{1F4D0} DESIGN</span><span>\u2328\uFE0F DEVELOP</span><span>\u{1F30E} DEPLOY</span><span>\u{1F331} SCALE</span><span>\u{1F527} MAINTAIN</span><span>\u267B\uFE0F REPEAT</span></span></TextRotate>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, he, ge);
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
  x as default
};

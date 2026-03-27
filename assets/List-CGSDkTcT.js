import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, t as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, r as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as v, s as y, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as b, t as x, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as S, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let O;
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
  let C, w, T, E, D;
  C = ({ className: e2, children: t2, items: n2 }) => {
    let r2 = `list`;
    return e2 && (r2 += ` ${e2}`), n2 && n2.length ? v(`ul`, {
      className: r2,
      children: n2.map((e3, t3) => {
        var _a, _b;
        if ((e3.type ?? (e3.cols ? `row` : `item`)) === `item`) return v(`li`, {
          className: (e3.className ? `${e3.className}` : ``) || void 0,
          children: e3.content
        }, t3);
        if (e3.normal) return y(`li`, {
          className: (e3.className ? `${e3.className}` : ``) || void 0,
          children: [
            e3.content,
            (_a = e3.cols) == null ? void 0 : _a.map((e4, t4) => e4.type === `grow` ? v(T, {
              as: e4.as,
              className: e4.className,
              children: e4.content
            }, t4) : v(E, {
              as: e4.as,
              className: e4.className,
              children: e4.content
            }, t4))
          ]
        }, t3);
        let n3 = `list-row`;
        return e3.className && (n3 += ` ${e3.className}`), y(`li`, {
          className: n3,
          children: [
            e3.content,
            (_b = e3.cols) == null ? void 0 : _b.map((e4, t4) => e4.type === `grow` ? v(T, {
              as: e4.as,
              className: e4.className,
              children: e4.content
            }, t4) : v(E, {
              as: e4.as,
              className: e4.className,
              children: e4.content
            }, t4))
          ]
        }, t3);
      })
    }) : v(`ul`, {
      className: r2,
      children: t2
    });
  };
  w = ({ normal: e2, className: t2, children: n2 }) => {
    if (e2) return v(`li`, {
      className: (t2 ? `${t2}` : ``) || void 0,
      children: n2
    });
    let r2 = `list-row`;
    return t2 && (r2 += ` ${t2}`), v(`li`, {
      className: r2,
      children: n2
    });
  };
  T = ({ as: e2 = `div`, className: t2, children: n2 }) => {
    let r2 = `list-col-grow`;
    return t2 && (r2 += ` ${t2}`), v(e2 === `p` ? `p` : e2 === `span` ? `span` : `div`, {
      className: r2,
      children: n2
    });
  };
  E = ({ as: e2 = `div`, className: t2, children: n2 }) => {
    let r2 = `list-col-wrap`;
    return t2 && (r2 += ` ${t2}`), v(e2 === `p` ? `p` : e2 === `span` ? `span` : `div`, {
      className: r2,
      children: n2
    });
  };
  D = Object.assign(C, {
    Row: w,
    ColGrow: T,
    ColWrap: E,
    Item: ({ className: e2, children: t2 }) => {
      let n2 = ``;
      return e2 && (n2 += ` ${e2}`), v(`li`, {
        className: n2.trim(),
        children: t2
      });
    }
  });
  O = () => {
    let { tabDefault: C2, tabGrow: w2, tabWrap: T2, tabArray: E2, tabArrayInternal: O2, listData: k } = n(`useSetup:0:0`, () => o(() => ({
      tabDefault: n(`ref:1:0`, () => h(`preview`)),
      tabGrow: n(`ref:1:1`, () => h(`preview`)),
      tabWrap: n(`ref:1:2`, () => h(`preview`)),
      tabArray: n(`ref:1:3`, () => h(`preview`)),
      tabArrayInternal: n(`ref:1:4`, () => h(`preview`)),
      listData: [
        {
          type: `item`,
          className: `p-4 pb-2 text-xs opacity-60 tracking-wide`,
          content: `Most played songs this week`
        },
        {
          type: `row`,
          content: [
            v(`div`, {
              className: `text-4xl font-thin opacity-30 tabular-nums`,
              children: `01`
            }),
            v(`div`, {
              children: v(`img`, {
                className: `size-10 rounded-box`,
                src: `https://img.daisyui.com/images/profile/demo/1@94.webp`,
                alt: `Tailwind CSS list item`
              })
            })
          ],
          cols: [
            {
              type: `grow`,
              content: y(`div`, {
                children: [
                  v(`div`, {
                    children: `Dio Lupa`
                  }),
                  v(`div`, {
                    className: `text-xs uppercase font-semibold opacity-60`,
                    children: `Remaining Reason`
                  })
                ]
              })
            }
          ]
        },
        {
          type: `row`,
          content: [
            v(`div`, {
              className: `text-4xl font-thin opacity-30 tabular-nums`,
              children: `02`
            }),
            v(`div`, {
              children: v(`img`, {
                className: `size-10 rounded-box`,
                src: `https://img.daisyui.com/images/profile/demo/4@94.webp`,
                alt: `Tailwind CSS list item`
              })
            })
          ],
          cols: [
            {
              type: `grow`,
              content: y(`div`, {
                children: [
                  v(`div`, {
                    children: `Ellie Beilish`
                  }),
                  v(`div`, {
                    className: `text-xs uppercase font-semibold opacity-60`,
                    children: `Bears of a fever`
                  })
                ]
              })
            }
          ]
        },
        {
          type: `row`,
          content: [
            v(`div`, {
              className: `text-4xl font-thin opacity-30 tabular-nums`,
              children: `03`
            }),
            v(`div`, {
              children: v(`img`, {
                className: `size-10 rounded-box`,
                src: `https://img.daisyui.com/images/profile/demo/3@94.webp`,
                alt: `Tailwind CSS list item`
              })
            })
          ],
          cols: [
            {
              type: `grow`,
              content: y(`div`, {
                children: [
                  v(`div`, {
                    children: `Sabrino Gardener`
                  }),
                  v(`div`, {
                    className: `text-xs uppercase font-semibold opacity-60`,
                    children: `Cappuccino`
                  })
                ]
              })
            }
          ]
        }
      ]
    })));
    return u(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(v(b, {
        children: u(() => {
          let n3 = c(), o3 = p(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let h3 = p(`h1`);
          s(o3, h3), s(h3, a(`List \u5217\u8868`));
          let y2 = p(`p`);
          s(o3, y2), e(y2, `text-sm mt-3 mb-3`), s(y2, a(`\u5217\u8868\u7528\u4E8E\u4EE5\u884C\u7684\u5F62\u5F0F\u5C55\u793A\u5782\u76F4\u5E03\u5C40\u7684\u4FE1\u606F\u3002`));
          let b2 = p(`div`);
          s(o3, b2), e(b2, `text-sm`);
          let A = p(`a`);
          s(b2, A), i(A, `href`, `https://daisyui.com/components/list/`), i(A, `target`, `_blank`), s(A, a(`\u67E5\u770B List \u9759\u6001\u6837\u5F0F`));
          let j = p(`div`);
          s(o3, j), e(j, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let M = p(`h2`);
          s(j, M), e(M, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(M, a(`# List\uFF08\u7B2C\u4E8C\u5217\u9ED8\u8BA4\u586B\u5145\u5269\u4F59\u7A7A\u95F4\uFF09`));
          let N = m(`rue:component:start`), P = m(`rue:component:end`);
          s(j, N), s(j, P), d(() => {
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
            }), j, N, P);
          });
          let F = m(`rue:slot:start`), I = m(`rue:slot:end`);
          s(j, F), s(j, I), d(() => {
            l(g(C2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full max-w-lg`);
              let r2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              return s(n4, r2), s(n4, o4), l(v(D, {
                className: `bg-base-100 rounded-box shadow-md`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `p-4 pb-2 text-xs opacity-60 tracking-wide`), s(n5, a(`Most played songs this week`));
                  let r3 = p(`div`);
                  s(t3, r3);
                  let o5 = p(`div`);
                  s(r3, o5);
                  let l2 = p(`img`);
                  s(o5, l2), e(l2, `size-10 rounded-box`), i(l2, `src`, `https://img.daisyui.com/images/profile/demo/1@94.webp`), i(l2, `alt`, `Tailwind CSS list item`);
                  let u2 = p(`div`);
                  s(r3, u2);
                  let d2 = p(`div`);
                  s(u2, d2), s(d2, a(`Dio Lupa`));
                  let f2 = p(`div`);
                  s(u2, f2), e(f2, `text-xs uppercase font-semibold opacity-60`), s(f2, a(`Remaining Reason`));
                  let m2 = p(`button`);
                  s(r3, m2), e(m2, `btn btn-square btn-ghost`);
                  let h4 = p(`svg`);
                  s(m2, h4), e(h4, `size-[1.2em]`), i(h4, `xmlns`, `http://www.w3.org/2000/svg`), i(h4, `viewBox`, `0 0 24 24`);
                  let g2 = p(`g`);
                  s(h4, g2), i(g2, `stroke-linejoin`, `round`), i(g2, `stroke-linecap`, `round`), i(g2, `stroke-width`, `2`), i(g2, `fill`, `none`), i(g2, `stroke`, `currentColor`);
                  let _2 = p(`path`);
                  s(g2, _2), i(_2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let v2 = p(`button`);
                  s(r3, v2), e(v2, `btn btn-square btn-ghost`);
                  let y3 = p(`svg`);
                  s(v2, y3), e(y3, `size-[1.2em]`), i(y3, `xmlns`, `http://www.w3.org/2000/svg`), i(y3, `viewBox`, `0 0 24 24`);
                  let b3 = p(`g`);
                  s(y3, b3), i(b3, `stroke-linejoin`, `round`), i(b3, `stroke-linecap`, `round`), i(b3, `stroke-width`, `2`), i(b3, `fill`, `none`), i(b3, `stroke`, `currentColor`);
                  let x2 = p(`path`);
                  s(b3, x2), i(x2, `d`, `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`);
                  let S2 = p(`div`);
                  s(t3, S2);
                  let C3 = p(`div`);
                  s(S2, C3);
                  let w3 = p(`img`);
                  s(C3, w3), e(w3, `size-10 rounded-box`), i(w3, `src`, `https://img.daisyui.com/images/profile/demo/4@94.webp`), i(w3, `alt`, `Tailwind CSS list item`);
                  let T3 = p(`div`);
                  s(S2, T3);
                  let E3 = p(`div`);
                  s(T3, E3), s(E3, a(`Ellie Beilish`));
                  let D2 = p(`div`);
                  s(T3, D2), e(D2, `text-xs uppercase font-semibold opacity-60`), s(D2, a(`Bears of a fever`));
                  let O3 = p(`button`);
                  s(S2, O3), e(O3, `btn btn-square btn-ghost`);
                  let k2 = p(`svg`);
                  s(O3, k2), e(k2, `size-[1.2em]`), i(k2, `xmlns`, `http://www.w3.org/2000/svg`), i(k2, `viewBox`, `0 0 24 24`);
                  let A2 = p(`g`);
                  s(k2, A2), i(A2, `stroke-linejoin`, `round`), i(A2, `stroke-linecap`, `round`), i(A2, `stroke-width`, `2`), i(A2, `fill`, `none`), i(A2, `stroke`, `currentColor`);
                  let j2 = p(`path`);
                  s(A2, j2), i(j2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let M2 = p(`button`);
                  s(S2, M2), e(M2, `btn btn-square btn-ghost`);
                  let N2 = p(`svg`);
                  s(M2, N2), e(N2, `size-[1.2em]`), i(N2, `xmlns`, `http://www.w3.org/2000/svg`), i(N2, `viewBox`, `0 0 24 24`);
                  let P2 = p(`g`);
                  s(N2, P2), i(P2, `stroke-linejoin`, `round`), i(P2, `stroke-linecap`, `round`), i(P2, `stroke-width`, `2`), i(P2, `fill`, `none`), i(P2, `stroke`, `currentColor`);
                  let F2 = p(`path`);
                  s(P2, F2), i(F2, `d`, `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`);
                  let I2 = p(`div`);
                  s(t3, I2);
                  let L2 = p(`div`);
                  s(I2, L2);
                  let R2 = p(`img`);
                  s(L2, R2), e(R2, `size-10 rounded-box`), i(R2, `src`, `https://img.daisyui.com/images/profile/demo/3@94.webp`), i(R2, `alt`, `Tailwind CSS list item`);
                  let z2 = p(`div`);
                  s(I2, z2);
                  let B2 = p(`div`);
                  s(z2, B2), s(B2, a(`Sabrino Gardener`));
                  let V2 = p(`div`);
                  s(z2, V2), e(V2, `text-xs uppercase font-semibold opacity-60`), s(V2, a(`Cappuccino`));
                  let H2 = p(`button`);
                  s(I2, H2), e(H2, `btn btn-square btn-ghost`);
                  let U2 = p(`svg`);
                  s(H2, U2), e(U2, `size-[1.2em]`), i(U2, `xmlns`, `http://www.w3.org/2000/svg`), i(U2, `viewBox`, `0 0 24 24`);
                  let W2 = p(`g`);
                  s(U2, W2), i(W2, `stroke-linejoin`, `round`), i(W2, `stroke-linecap`, `round`), i(W2, `stroke-width`, `2`), i(W2, `fill`, `none`), i(W2, `stroke`, `currentColor`);
                  let G2 = p(`path`);
                  s(W2, G2), i(G2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let K2 = p(`button`);
                  s(I2, K2), e(K2, `btn btn-square btn-ghost`);
                  let q2 = p(`svg`);
                  s(K2, q2), e(q2, `size-[1.2em]`), i(q2, `xmlns`, `http://www.w3.org/2000/svg`), i(q2, `viewBox`, `0 0 24 24`);
                  let J2 = p(`g`);
                  s(q2, J2), i(J2, `stroke-linejoin`, `round`), i(J2, `stroke-linecap`, `round`), i(J2, `stroke-width`, `2`), i(J2, `fill`, `none`), i(J2, `stroke`, `currentColor`);
                  let Y2 = p(`path`);
                  return s(J2, Y2), i(Y2, `d`, `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`), {
                    vaporElement: t3
                  };
                })
              }), n4, r2, o4), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { List } from '@rue/design';
<div className="w-full max-w-lg">
  <List className="bg-base-100 rounded-box shadow-md">
    <List.Row normal className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</List.Row>
    <List.Row>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
      <div>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
      </div>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg></button>
    </List.Row>
    <List.Row>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
      <div>
        <div>Ellie Beilish</div>
        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
      </div>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg></button>
    </List.Row>
    <List.Row>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
      <div>
        <div>Sabrino Gardener</div>
        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
      </div>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg></button>
    </List.Row>
  </List>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), j, F, I);
          });
          let L = p(`div`);
          s(o3, L), e(L, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let R = p(`h2`);
          s(L, R), e(R, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(R, a(`# List\uFF08\u7B2C\u4E09\u5217\u586B\u5145\u5269\u4F59\u7A7A\u95F4\uFF09`));
          let z = m(`rue:component:start`), B = m(`rue:component:end`);
          s(L, z), s(L, B), d(() => {
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
            }), L, z, B);
          });
          let V = m(`rue:slot:start`), H = m(`rue:slot:end`);
          s(L, V), s(L, H), d(() => {
            l(g(w2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full max-w-lg`);
              let r2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              return s(n4, r2), s(n4, o4), l(v(D, {
                className: `bg-base-100 rounded-box shadow-md`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `p-4 pb-2 text-xs opacity-60 tracking-wide`), s(n5, a(`Most played songs this week`));
                  let r3 = p(`div`);
                  s(t3, r3);
                  let o5 = p(`div`);
                  s(r3, o5), e(o5, `text-4xl font-thin opacity-30 tabular-nums`), s(o5, a(`01`));
                  let l2 = p(`div`);
                  s(r3, l2);
                  let u2 = p(`img`);
                  s(l2, u2), e(u2, `size-10 rounded-box`), i(u2, `src`, `https://img.daisyui.com/images/profile/demo/1@94.webp`), i(u2, `alt`, `Tailwind CSS list item`);
                  let d2 = p(`div`);
                  s(r3, d2);
                  let f2 = p(`div`);
                  s(d2, f2), s(f2, a(`Dio Lupa`));
                  let m2 = p(`div`);
                  s(d2, m2), e(m2, `text-xs uppercase font-semibold opacity-60`), s(m2, a(`Remaining Reason`));
                  let h4 = p(`button`);
                  s(r3, h4), e(h4, `btn btn-square btn-ghost`);
                  let g2 = p(`svg`);
                  s(h4, g2), e(g2, `size-[1.2em]`), i(g2, `xmlns`, `http://www.w3.org/2000/svg`), i(g2, `viewBox`, `0 0 24 24`);
                  let _2 = p(`g`);
                  s(g2, _2), i(_2, `stroke-linejoin`, `round`), i(_2, `stroke-linecap`, `round`), i(_2, `stroke-width`, `2`), i(_2, `fill`, `none`), i(_2, `stroke`, `currentColor`);
                  let v2 = p(`path`);
                  s(_2, v2), i(v2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let y3 = p(`div`);
                  s(t3, y3);
                  let b3 = p(`div`);
                  s(y3, b3), e(b3, `text-4xl font-thin opacity-30 tabular-nums`), s(b3, a(`02`));
                  let x2 = p(`div`);
                  s(y3, x2);
                  let S2 = p(`img`);
                  s(x2, S2), e(S2, `size-10 rounded-box`), i(S2, `src`, `https://img.daisyui.com/images/profile/demo/4@94.webp`), i(S2, `alt`, `Tailwind CSS list item`);
                  let C3 = p(`div`);
                  s(y3, C3);
                  let w3 = p(`div`);
                  s(C3, w3), s(w3, a(`Ellie Beilish`));
                  let T3 = p(`div`);
                  s(C3, T3), e(T3, `text-xs uppercase font-semibold opacity-60`), s(T3, a(`Bears of a fever`));
                  let E3 = p(`button`);
                  s(y3, E3), e(E3, `btn btn-square btn-ghost`);
                  let D2 = p(`svg`);
                  s(E3, D2), e(D2, `size-[1.2em]`), i(D2, `xmlns`, `http://www.w3.org/2000/svg`), i(D2, `viewBox`, `0 0 24 24`);
                  let O3 = p(`g`);
                  s(D2, O3), i(O3, `stroke-linejoin`, `round`), i(O3, `stroke-linecap`, `round`), i(O3, `stroke-width`, `2`), i(O3, `fill`, `none`), i(O3, `stroke`, `currentColor`);
                  let k2 = p(`path`);
                  s(O3, k2), i(k2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let A2 = p(`div`);
                  s(t3, A2);
                  let j2 = p(`div`);
                  s(A2, j2), e(j2, `text-4xl font-thin opacity-30 tabular-nums`), s(j2, a(`03`));
                  let M2 = p(`div`);
                  s(A2, M2);
                  let N2 = p(`img`);
                  s(M2, N2), e(N2, `size-10 rounded-box`), i(N2, `src`, `https://img.daisyui.com/images/profile/demo/3@94.webp`), i(N2, `alt`, `Tailwind CSS list item`);
                  let P2 = p(`div`);
                  s(A2, P2);
                  let F2 = p(`div`);
                  s(P2, F2), s(F2, a(`Sabrino Gardener`));
                  let I2 = p(`div`);
                  s(P2, I2), e(I2, `text-xs uppercase font-semibold opacity-60`), s(I2, a(`Cappuccino`));
                  let L2 = p(`button`);
                  s(A2, L2), e(L2, `btn btn-square btn-ghost`);
                  let R2 = p(`svg`);
                  s(L2, R2), e(R2, `size-[1.2em]`), i(R2, `xmlns`, `http://www.w3.org/2000/svg`), i(R2, `viewBox`, `0 0 24 24`);
                  let z2 = p(`g`);
                  s(R2, z2), i(z2, `stroke-linejoin`, `round`), i(z2, `stroke-linecap`, `round`), i(z2, `stroke-width`, `2`), i(z2, `fill`, `none`), i(z2, `stroke`, `currentColor`);
                  let B2 = p(`path`);
                  return s(z2, B2), i(B2, `d`, `M6 3L20 12 6 21 6 3z`), {
                    vaporElement: t3
                  };
                })
              }), n4, r2, o4), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full max-w-lg">
  <List className="bg-base-100 rounded-box shadow-md">
    <List.Row normal className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</List.Row>
    <List.Row>
      <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
      <List.ColGrow>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
      </List.ColGrow>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
    </List.Row>
    <List.Row>
      <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
      <List.ColGrow>
        <div>Ellie Beilish</div>
        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
      </List.ColGrow>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
    </List.Row>
    <List.Row>
      <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
      <List.ColGrow>
        <div>Sabrino Gardener</div>
        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
      </List.ColGrow>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
    </List.Row>
  </List>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), L, V, H);
          });
          let U = p(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = p(`h2`);
          s(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(W, a(`# List \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF09`));
          let G = m(`rue:component:start`), K = m(`rue:component:end`);
          s(U, G), s(U, K), d(() => {
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
            }), U, G, K);
          });
          let q = m(`rue:slot:start`), J = m(`rue:slot:end`);
          s(U, q), s(U, J), d(() => {
            l(g(E2.value === `preview` ? u(() => {
              let n4 = c(), o4 = p(`div`);
              s(n4, o4), e(o4, `w-full max-w-lg`);
              let h4 = m(`rue:component:start`), g2 = m(`rue:component:end`);
              return s(o4, h4), s(o4, g2), l(v(D, {
                className: `bg-base-100 rounded-box shadow-md`,
                children: u(() => {
                  let n5 = c(), o5 = m(`rue:list:start`), h5 = m(`rue:list:end`);
                  s(n5, o5), s(n5, h5);
                  let g3 = /* @__PURE__ */ new Map();
                  return d(() => {
                    g3 = _({
                      items: k || [],
                      getKey: (e2, t2) => t2,
                      elements: g3,
                      parent: o5.parentNode,
                      before: h5,
                      start: o5,
                      renderItem: (n6, o6, m2, h6, g4) => {
                        l(u(() => {
                          let o7 = c(), l2 = p(`div`);
                          s(o7, l2), d(() => {
                            i(l2, `key`, String(g4));
                          }), d(() => {
                            e(l2, String(n6.className));
                          });
                          let u2 = t(l2);
                          s(l2, u2), d(() => {
                            r(u2, Array.isArray(n6.content) ? n6.content.map((e2) => v(f, {
                              children: e2
                            })) : n6.content);
                          }), s(l2, a(` `));
                          let m3 = t(l2);
                          return s(l2, m3), d(() => {
                            var _a;
                            r(m3, (_a = n6.cols) == null ? void 0 : _a.map((e2, t2) => e2.type === `grow` ? v(D.ColGrow, {
                              as: e2.as,
                              className: e2.className,
                              children: e2.content
                            }, t2) : v(D.ColWrap, {
                              as: e2.as,
                              className: e2.className,
                              children: e2.content
                            }, t2)));
                          }), {
                            vaporElement: o7
                          };
                        }), o6, m2, h6);
                      }
                    });
                  }), {
                    vaporElement: n5
                  };
                })
              }), o4, h4, g2), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { ref } from 'rues';
import { List } from '@rue/design';
const tabArray = ref<'preview' | 'code'>('preview');
const listData = [
  { type: 'item', className: 'p-4 pb-2 text-xs opacity-60 tracking-wide', content: 'Most played songs this week' },
  { type: 'row', content: [
      <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>,
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" alt="Tailwind CSS list item" /></div>,
    ], cols: [ { type: 'grow', content: <div><div>Dio Lupa</div><div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div></div> } ] },
  { type: 'row', content: [
      <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>,
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" alt="Tailwind CSS list item" /></div>,
    ], cols: [ { type: 'grow', content: <div><div>Ellie Beilish</div><div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div></div> } ] },
  { type: 'row', content: [
      <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>,
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" alt="Tailwind CSS list item" /></div>,
    ], cols: [ { type: 'grow', content: <div><div>Sabrino Gardener</div><div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div></div> } ] },
];
<div className="w-full max-w-lg">
  <List className="bg-base-100 rounded-box shadow-md">
    {listData.map((m, i) => (
      m.type === 'item' ? (
        <List.Item className={m.className} key={i}>{m.content}</List.Item>
      ) : (
        <List.Row key={i} className={m.className}>
          {Array.isArray(m.content) ? m.content.map((c, ci) => <>{c}</>) : m.content}
          {m.cols?.map((c, ci) => c.type === 'grow'
            ? (<List.ColGrow as={c.as} className={c.className} key={ci}>{c.content}</List.ColGrow>)
            : (<List.ColWrap as={c.as} className={c.className} key={ci}>{c.content}</List.ColWrap>)
          )}
        </List.Row>
      )
    ))}
  </List>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, q, J);
          });
          let Y = p(`div`);
          s(o3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = p(`h2`);
          s(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(X, a(`# List \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let Z = m(`rue:component:start`), Q = m(`rue:component:end`);
          s(Y, Z), s(Y, Q), d(() => {
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
              activeKey: O2.value,
              onChange: (e2) => O2.value = e2,
              className: `mb-3`
            }), Y, Z, Q);
          });
          let ee = m(`rue:slot:start`), te = m(`rue:slot:end`);
          s(Y, ee), s(Y, te), d(() => {
            l(g(O2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full max-w-lg`);
              let r2 = m(`rue:component:start`), i2 = m(`rue:component:end`);
              return s(n4, r2), s(n4, i2), d(() => {
                l(v(D, {
                  items: k,
                  className: `bg-base-100 rounded-box shadow-md`
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
                  code: `import { List } from '@rue/design';
const listItems = [
  { type: 'item', className: 'p-4 pb-2 text-xs opacity-60 tracking-wide', content: 'Most played songs this week' },
  { type: 'row', content: [
      <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>,
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" alt="Tailwind CSS list item" /></div>,
    ], cols: [ { type: 'grow', content: <div><div>Dio Lupa</div><div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div></div> } ] },
  { type: 'row', content: [
      <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>,
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" alt="Tailwind CSS list item" /></div>,
    ], cols: [ { type: 'grow', content: <div><div>Ellie Beilish</div><div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div></div> } ] },
  { type: 'row', content: [
      <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>,
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" alt="Tailwind CSS list item" /></div>,
    ], cols: [ { type: 'grow', content: <div><div>Sabrino Gardener</div><div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div></div> } ] },
];
<div className="w-full max-w-lg">
  <List items={listItems} className="bg-base-100 rounded-box shadow-md" />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, ee, te);
          });
          let $ = p(`div`);
          s(o3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ne = p(`h2`);
          s($, ne), e(ne, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ne, a(`# List\uFF08\u7B2C\u4E09\u5217\u6362\u884C\u81F3\u4E0B\u4E00\u884C\uFF09`));
          let re = m(`rue:component:start`), ie = m(`rue:component:end`);
          s($, re), s($, ie), d(() => {
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
            }), $, re, ie);
          });
          let ae = m(`rue:slot:start`), oe = m(`rue:slot:end`);
          return s($, ae), s($, oe), d(() => {
            l(g(T2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `w-full max-w-lg`);
              let r2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              return s(n4, r2), s(n4, o4), l(v(D, {
                className: `bg-base-100 rounded-box shadow-md`,
                children: u(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), e(n5, `p-4 pb-2 text-xs opacity-60 tracking-wide`), s(n5, a(`Most played songs this week`));
                  let r3 = p(`div`);
                  s(t3, r3);
                  let o5 = p(`div`);
                  s(r3, o5);
                  let l2 = p(`img`);
                  s(o5, l2), e(l2, `size-10 rounded-box`), i(l2, `src`, `https://img.daisyui.com/images/profile/demo/1@94.webp`), i(l2, `alt`, `Tailwind CSS list item`);
                  let u2 = p(`div`);
                  s(r3, u2);
                  let d2 = p(`div`);
                  s(u2, d2), s(d2, a(`Dio Lupa`));
                  let f2 = p(`div`);
                  s(u2, f2), e(f2, `text-xs uppercase font-semibold opacity-60`), s(f2, a(`Remaining Reason`));
                  let m2 = p(`div`);
                  s(r3, m2), i(m2, `as`, `p`), e(m2, `text-xs`), s(m2, a(`"Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa\u2019s most iconic tracks.`));
                  let h4 = p(`button`);
                  s(r3, h4), e(h4, `btn btn-square btn-ghost`);
                  let g2 = p(`svg`);
                  s(h4, g2), e(g2, `size-[1.2em]`), i(g2, `xmlns`, `http://www.w3.org/2000/svg`), i(g2, `viewBox`, `0 0 24 24`);
                  let _2 = p(`g`);
                  s(g2, _2), i(_2, `stroke-linejoin`, `round`), i(_2, `stroke-linecap`, `round`), i(_2, `stroke-width`, `2`), i(_2, `fill`, `none`), i(_2, `stroke`, `currentColor`);
                  let v2 = p(`path`);
                  s(_2, v2), i(v2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let y3 = p(`button`);
                  s(r3, y3), e(y3, `btn btn-square btn-ghost`);
                  let b3 = p(`svg`);
                  s(y3, b3), e(b3, `size-[1.2em]`), i(b3, `xmlns`, `http://www.w3.org/2000/svg`), i(b3, `viewBox`, `0 0 24 24`);
                  let x2 = p(`g`);
                  s(b3, x2), i(x2, `stroke-linejoin`, `round`), i(x2, `stroke-linecap`, `round`), i(x2, `stroke-width`, `2`), i(x2, `fill`, `none`), i(x2, `stroke`, `currentColor`);
                  let S2 = p(`path`);
                  s(x2, S2), i(S2, `d`, `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`);
                  let C3 = p(`div`);
                  s(t3, C3);
                  let w3 = p(`div`);
                  s(C3, w3);
                  let T3 = p(`img`);
                  s(w3, T3), e(T3, `size-10 rounded-box`), i(T3, `src`, `https://img.daisyui.com/images/profile/demo/4@94.webp`), i(T3, `alt`, `Tailwind CSS list item`);
                  let E3 = p(`div`);
                  s(C3, E3);
                  let D2 = p(`div`);
                  s(E3, D2), s(D2, a(`Ellie Beilish`));
                  let O3 = p(`div`);
                  s(E3, O3), e(O3, `text-xs uppercase font-semibold opacity-60`), s(O3, a(`Bears of a fever`));
                  let k2 = p(`div`);
                  s(C3, k2), i(k2, `as`, `p`), e(k2, `text-xs`), s(k2, a(`"Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.`));
                  let A2 = p(`button`);
                  s(C3, A2), e(A2, `btn btn-square btn-ghost`);
                  let j2 = p(`svg`);
                  s(A2, j2), e(j2, `size-[1.2em]`), i(j2, `xmlns`, `http://www.w3.org/2000/svg`), i(j2, `viewBox`, `0 0 24 24`);
                  let M2 = p(`g`);
                  s(j2, M2), i(M2, `stroke-linejoin`, `round`), i(M2, `stroke-linecap`, `round`), i(M2, `stroke-width`, `2`), i(M2, `fill`, `none`), i(M2, `stroke`, `currentColor`);
                  let N2 = p(`path`);
                  s(M2, N2), i(N2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let P2 = p(`button`);
                  s(C3, P2), e(P2, `btn btn-square btn-ghost`);
                  let F2 = p(`svg`);
                  s(P2, F2), e(F2, `size-[1.2em]`), i(F2, `xmlns`, `http://www.w3.org/2000/svg`), i(F2, `viewBox`, `0 0 24 24`);
                  let I2 = p(`g`);
                  s(F2, I2), i(I2, `stroke-linejoin`, `round`), i(I2, `stroke-linecap`, `round`), i(I2, `stroke-width`, `2`), i(I2, `fill`, `none`), i(I2, `stroke`, `currentColor`);
                  let L2 = p(`path`);
                  s(I2, L2), i(L2, `d`, `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`);
                  let R2 = p(`div`);
                  s(t3, R2);
                  let z2 = p(`div`);
                  s(R2, z2);
                  let B2 = p(`img`);
                  s(z2, B2), e(B2, `size-10 rounded-box`), i(B2, `src`, `https://img.daisyui.com/images/profile/demo/3@94.webp`), i(B2, `alt`, `Tailwind CSS list item`);
                  let V2 = p(`div`);
                  s(R2, V2);
                  let H2 = p(`div`);
                  s(V2, H2), s(H2, a(`Sabrino Gardener`));
                  let U2 = p(`div`);
                  s(V2, U2), e(U2, `text-xs uppercase font-semibold opacity-60`), s(U2, a(`Cappuccino`));
                  let W2 = p(`div`);
                  s(R2, W2), i(W2, `as`, `p`), e(W2, `text-xs`), s(W2, a(`"Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song\u2019s success propelled Sabrino into the spotlight, solidifying their status as a rising star.`));
                  let G2 = p(`button`);
                  s(R2, G2), e(G2, `btn btn-square btn-ghost`);
                  let K2 = p(`svg`);
                  s(G2, K2), e(K2, `size-[1.2em]`), i(K2, `xmlns`, `http://www.w3.org/2000/svg`), i(K2, `viewBox`, `0 0 24 24`);
                  let q2 = p(`g`);
                  s(K2, q2), i(q2, `stroke-linejoin`, `round`), i(q2, `stroke-linecap`, `round`), i(q2, `stroke-width`, `2`), i(q2, `fill`, `none`), i(q2, `stroke`, `currentColor`);
                  let J2 = p(`path`);
                  s(q2, J2), i(J2, `d`, `M6 3L20 12 6 21 6 3z`);
                  let Y2 = p(`button`);
                  s(R2, Y2), e(Y2, `btn btn-square btn-ghost`);
                  let X2 = p(`svg`);
                  s(Y2, X2), e(X2, `size-[1.2em]`), i(X2, `xmlns`, `http://www.w3.org/2000/svg`), i(X2, `viewBox`, `0 0 24 24`);
                  let Z2 = p(`g`);
                  s(X2, Z2), i(Z2, `stroke-linejoin`, `round`), i(Z2, `stroke-linecap`, `round`), i(Z2, `stroke-width`, `2`), i(Z2, `fill`, `none`), i(Z2, `stroke`, `currentColor`);
                  let Q2 = p(`path`);
                  return s(Z2, Q2), i(Q2, `d`, `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`), {
                    vaporElement: t3
                  };
                })
              }), n4, r2, o4), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(v(S, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full max-w-lg">
  <List className="bg-base-100 rounded-box shadow-md">
    <List.Item className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</List.Item>
    <List.Row>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
      <div>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
      </div>
      <List.ColWrap as="p" className="text-xs">"Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa\u2019s most iconic tracks.</List.ColWrap>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg></button>
    </List.Row>
    <List.Row>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
      <div>
        <div>Ellie Beilish</div>
        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
      </div>
      <List.ColWrap as="p" className="text-xs">"Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.</List.ColWrap>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg></button>
    </List.Row>
    <List.Row>
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
      <div>
        <div>Sabrino Gardener</div>
        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
      </div>
      <List.ColWrap as="p" className="text-xs">"Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song\u2019s success propelled Sabrino into the spotlight, solidifying their status as a rising star.</List.ColWrap>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button>
      <button className="btn btn-square btn-ghost"><svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg></button>
    </List.Row>
  </List>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), $, ae, oe);
          }), {
            vaporElement: n3
          };
        })
      }), n2, o2, h2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  O as default
};

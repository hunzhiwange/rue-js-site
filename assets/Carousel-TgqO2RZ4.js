import { A as e, C as t, G as n, H as r, I as i, K as a, O as o, S as s, U as c, _ as l, b as u, f as d, g as f, l as p, m, q as h, t as g, u as _, x as v, y, z as b, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as x, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as S, s as C, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as w, t as T, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as E, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as D, __tla as __tla_6 } from "./button-eAeY0oyU.js";
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
  })()
]).then(async () => {
  let O;
  O = Object.assign(({ align: e2 = `start`, direction: t2 = `horizontal`, auto: n2 = false, interval: i2 = 3e3, loop: o2 = true, autoDirection: s2 = `forward`, activeIndex: c2, onIndexChange: l2, className: u2, children: d2, items: f2 }) => {
    let m2 = r(), h2 = `carousel`;
    e2 === `center` && (h2 += ` carousel-center`), e2 === `end` && (h2 += ` carousel-end`), t2 === `vertical` ? h2 += ` carousel-vertical` : h2 += ` carousel-horizontal`, u2 && (h2 += ` ${u2}`);
    let g2 = () => {
      let e3 = m2.current;
      return e3 ? Array.from(e3.querySelectorAll(`.carousel-item`)) : [];
    }, v2 = (e3) => {
      let n3 = g2();
      if (!n3.length) return;
      let r2 = Math.max(0, Math.min(e3, n3.length - 1)), i3 = n3[r2], a2 = m2.current;
      if (!a2 || !i3) return;
      let o3 = typeof a2.scrollTo == `function`;
      t2 === `vertical` ? o3 ? a2.scrollTo({
        top: i3.offsetTop,
        behavior: `smooth`
      }) : a2.scrollTop = i3.offsetTop : o3 ? a2.scrollTo({
        left: i3.offsetLeft,
        behavior: `smooth`
      }) : a2.scrollLeft = i3.offsetLeft, l2 && l2(r2);
    }, y2 = () => {
      let e3 = g2(), n3 = m2.current;
      if (!n3 || !e3.length) return 0;
      let r2 = t2 === `vertical` ? n3.scrollTop : n3.scrollLeft, i3 = 0;
      for (let n4 = 0; n4 < e3.length && (t2 === `vertical` ? e3[n4].offsetTop : e3[n4].offsetLeft) <= r2 + 1; n4++) i3 = n4;
      return i3;
    }, b2 = null, x2 = (e3) => {
      let n3 = m2.current;
      if (!n3) return;
      let r2 = typeof n3.scrollTo == `function`;
      t2 === `vertical` ? requestAnimationFrame(() => {
        r2 ? n3.scrollTo({
          top: e3,
          behavior: `smooth`
        }) : n3.scrollTop = e3;
      }) : requestAnimationFrame(() => {
        r2 ? n3.scrollTo({
          left: e3,
          behavior: `smooth`
        }) : n3.scrollLeft = e3;
      });
    }, C2 = (e3) => {
      let n3 = m2.current;
      if (!n3) return;
      let r2 = t2 === `vertical` ? n3.clientHeight : n3.clientWidth, i3 = t2 === `vertical` ? n3.scrollTop : n3.scrollLeft, a2 = t2 === `vertical` ? n3.scrollHeight : n3.scrollWidth, s3 = i3;
      s3 = e3 === `forward` ? o2 ? i3 - r2 >= 0 ? i3 - r2 : Math.max(0, a2 - r2) : Math.max(i3 - r2, 0) : o2 ? i3 + r2 <= Math.max(0, a2 - r2) ? i3 + r2 : 0 : Math.min(i3 + r2, Math.max(0, a2 - r2)), x2(s3);
      let c3 = y2();
      l2 && l2(c3);
    }, w2 = () => {
      n2 && (T2(), b2 = setInterval(() => {
        C2(s2 === `backward` ? `backward` : `forward`);
      }, i2));
    }, T2 = () => {
      b2 && (b2 = (clearInterval(b2), null));
    };
    return p(() => {
      let e3 = m2.current;
      if (e3 && o2) {
        let n3 = t2 === `vertical` ? e3.clientHeight : e3.clientWidth, r2 = t2 === `vertical` ? e3.scrollHeight : e3.scrollWidth;
        s2 === `forward` ? t2 === `vertical` ? e3.scrollTop = Math.max(0, r2 - n3) : e3.scrollLeft = Math.max(0, r2 - n3) : t2 === `vertical` ? e3.scrollTop = 0 : e3.scrollLeft = 0;
      }
      w2();
    }), _(() => {
      T2();
    }), a(() => c2, (e3) => {
      typeof e3 == `number` && v2(e3);
    }, {
      immediate: true
    }), S(`div`, {
      ref: m2,
      className: h2,
      children: f2 && f2.length ? f2.map((e3, t3) => S(`div`, {
        className: `carousel-item${e3.className ? ` ${e3.className}` : ``}`,
        children: e3.content
      }, t3)) : d2
    });
  }, {
    Item: ({ className: e2, children: t2 }) => {
      let n2 = `carousel-item`;
      return e2 && (n2 += ` ${e2}`), S(`div`, {
        className: n2,
        children: t2
      });
    }
  });
  k = () => {
    let { tabStart: r2, tabCenter: a2, tabEnd: p2, tabFullWidth: _2, tabVertical: k2, tabHalfWidth: A, tabFullBleed: j, tabIndicators: M, tabNextPrev: N, tabNextPrevLeft: P, indicatorIndex: F, nextPrevIndex: I, nextPrevIndexLeft: L, tabBasic: R, tabVertical2: ee, tabControlled: te, tabAuto: ne, tabArrayInternal: re, controlledIndex: ie, items: ae } = n(`useSetup:0:0`, () => c(() => ({
      tabStart: n(`ref:1:0`, () => b(`preview`)),
      tabCenter: n(`ref:1:1`, () => b(`preview`)),
      tabEnd: n(`ref:1:2`, () => b(`preview`)),
      tabFullWidth: n(`ref:1:3`, () => b(`preview`)),
      tabVertical: n(`ref:1:4`, () => b(`preview`)),
      tabHalfWidth: n(`ref:1:5`, () => b(`preview`)),
      tabFullBleed: n(`ref:1:6`, () => b(`preview`)),
      tabIndicators: n(`ref:1:7`, () => b(`preview`)),
      tabNextPrev: n(`ref:1:8`, () => b(`preview`)),
      tabNextPrevLeft: n(`ref:1:9`, () => b(`preview`)),
      indicatorIndex: n(`ref:1:10`, () => b(0)),
      nextPrevIndex: n(`ref:1:11`, () => b(0)),
      nextPrevIndexLeft: n(`ref:1:12`, () => b(0)),
      tabBasic: n(`ref:1:13`, () => b(`preview`)),
      tabVertical2: n(`ref:1:14`, () => b(`preview`)),
      tabControlled: n(`ref:1:15`, () => b(`preview`)),
      tabAuto: n(`ref:1:16`, () => b(`preview`)),
      tabArrayInternal: n(`ref:1:17`, () => b(`preview`)),
      controlledIndex: n(`ref:1:18`, () => b(0)),
      items: [
        {
          content: S(`img`, {
            alt: `1`,
            src: `https://picsum.photos/id/1011/600/300`
          }),
          className: `relative`
        },
        {
          content: S(`img`, {
            alt: `2`,
            src: `https://picsum.photos/id/1015/600/300`
          }),
          className: `relative`
        },
        {
          content: S(`img`, {
            alt: `3`,
            src: `https://picsum.photos/id/1016/600/300`
          }),
          className: `relative`
        }
      ]
    })));
    return m(() => {
      let n2 = u(), c2 = y(`rue:component:start`), b2 = y(`rue:component:end`);
      return l(n2, c2), l(n2, b2), d(S(w, {
        children: m(() => {
          let n3 = u(), c3 = v(`div`);
          l(n3, c3), e(c3, `max-w-none prose prose-sm md:prose-base`);
          let b3 = v(`h1`);
          l(c3, b3), l(b3, s(`Carousel \u8DD1\u9A6C\u706F`));
          let w2 = v(`p`);
          l(c3, w2), e(w2, `text-sm mt-3 mb-3`), l(w2, s(`Carousel \u5728\u53EF\u6EDA\u52A8\u533A\u57DF\u5185\u5C55\u793A\u56FE\u7247\u6216\u5185\u5BB9\uFF0C\u652F\u6301\u81EA\u52A8\u6EDA\u52A8\u4E0E\u4EE3\u7801\u63A7\u5236\u3002`));
          let oe = v(`div`);
          l(c3, oe), e(oe, `text-sm`);
          let se = v(`a`);
          l(oe, se), o(se, `href`, `https://daisyui.com/components/carousel/`), o(se, `target`, `_blank`), l(se, s(`\u67E5\u770B Carousel \u9759\u6001\u6837\u5F0F`));
          let z = v(`div`);
          l(c3, z), e(z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ce = v(`h2`);
          l(z, ce), e(ce, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(ce, s(`# Snap to start (default)`));
          let le = y(`rue:component:start`), ue = y(`rue:component:end`);
          l(z, le), l(z, ue), h(() => {
            d(S(T, {
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
              activeKey: r2.value,
              onChange: (e2) => r2.value = e2,
              className: `mb-3`
            }), z, le, ue);
          });
          let de = y(`rue:slot:start`), fe = y(`rue:slot:end`);
          l(z, de), l(z, fe), h(() => {
            d(x(r2.value === `preview` ? m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              l(e2, t2), l(e2, n4);
              let r3 = m(() => {
                let e3 = u(), t3 = v(`div`);
                l(e3, t3);
                let n5 = v(`img`);
                l(t3, n5), o(n5, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(n5, `alt`, `Carousel slider`);
                let r4 = v(`div`);
                l(e3, r4);
                let i2 = v(`img`);
                l(r4, i2), o(i2, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(i2, `alt`, `Carousel slider`);
                let a3 = v(`div`);
                l(e3, a3);
                let s2 = v(`img`);
                l(a3, s2), o(s2, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(s2, `alt`, `Carousel slider`);
                let c4 = v(`div`);
                l(e3, c4);
                let d2 = v(`img`);
                l(c4, d2), o(d2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(d2, `alt`, `Carousel slider`);
                let f2 = v(`div`);
                l(e3, f2);
                let p3 = v(`img`);
                l(f2, p3), o(p3, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(p3, `alt`, `Carousel slider`);
                let m2 = v(`div`);
                l(e3, m2);
                let h2 = v(`img`);
                l(m2, h2), o(h2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(h2, `alt`, `Carousel slider`);
                let g2 = v(`div`);
                l(e3, g2);
                let _3 = v(`img`);
                l(g2, _3), o(_3, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(_3, `alt`, `Carousel slider`);
                let y2 = v(`div`);
                l(e3, y2);
                let b4 = v(`img`);
                l(y2, b4), o(b4, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(b4, `alt`, `Carousel slider`);
                let x2 = v(`div`);
                l(e3, x2);
                let S2 = v(`img`);
                l(x2, S2), o(S2, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(S2, `alt`, `Carousel slider`);
                let C2 = v(`div`);
                l(e3, C2);
                let w3 = v(`img`);
                l(C2, w3), o(w3, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(w3, `alt`, `Carousel slider`);
                let T2 = v(`div`);
                l(e3, T2);
                let E2 = v(`img`);
                l(T2, E2), o(E2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(E2, `alt`, `Carousel slider`);
                let D2 = v(`div`);
                l(e3, D2);
                let O2 = v(`img`);
                l(D2, O2), o(O2, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(O2, `alt`, `Carousel slider`);
                let k3 = v(`div`);
                l(e3, k3);
                let A2 = v(`img`);
                l(k3, A2), o(A2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(A2, `alt`, `Carousel slider`);
                let j2 = v(`div`);
                l(e3, j2);
                let M2 = v(`img`);
                return l(j2, M2), o(M2, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(M2, `alt`, `Carousel slider`), {
                  vaporElement: e3
                };
              });
              return h(() => {
                d(S(O, {
                  align: `start`,
                  className: `rounded-box`,
                  auto: true,
                  interval: 1e3,
                  children: r3
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel align="start" className="rounded-box" auto interval={1000}>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Carousel slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Carousel slider" /></Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), z, de, fe);
          });
          let B = v(`div`);
          l(c3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let pe = v(`h2`);
          l(B, pe), e(pe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(pe, s(`# Snap to center`));
          let me = y(`rue:component:start`), he = y(`rue:component:end`);
          l(B, me), l(B, he), h(() => {
            d(S(T, {
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
              activeKey: a2.value,
              onChange: (e2) => a2.value = e2,
              className: `mb-3`
            }), B, me, he);
          });
          let ge = y(`rue:slot:start`), _e = y(`rue:slot:end`);
          l(B, ge), l(B, _e), h(() => {
            d(x(a2.value === `preview` ? m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              l(e2, t2), l(e2, n4);
              let r3 = m(() => {
                let e3 = u(), t3 = v(`div`);
                l(e3, t3);
                let n5 = v(`img`);
                l(t3, n5), o(n5, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(n5, `alt`, `Tailwind CSS slider`);
                let r4 = v(`div`);
                l(e3, r4);
                let i2 = v(`img`);
                l(r4, i2), o(i2, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(i2, `alt`, `Tailwind CSS slider`);
                let a3 = v(`div`);
                l(e3, a3);
                let s2 = v(`img`);
                l(a3, s2), o(s2, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(s2, `alt`, `Tailwind CSS slider`);
                let c4 = v(`div`);
                l(e3, c4);
                let d2 = v(`img`);
                l(c4, d2), o(d2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(d2, `alt`, `Tailwind CSS slider`);
                let f2 = v(`div`);
                l(e3, f2);
                let p3 = v(`img`);
                l(f2, p3), o(p3, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(p3, `alt`, `Tailwind CSS slider`);
                let m2 = v(`div`);
                l(e3, m2);
                let h2 = v(`img`);
                l(m2, h2), o(h2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(h2, `alt`, `Tailwind CSS slider`);
                let g2 = v(`div`);
                l(e3, g2);
                let _3 = v(`img`);
                l(g2, _3), o(_3, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(_3, `alt`, `Tailwind CSS slider`);
                let y2 = v(`div`);
                l(e3, y2);
                let b4 = v(`img`);
                l(y2, b4), o(b4, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(b4, `alt`, `Tailwind CSS slider`);
                let x2 = v(`div`);
                l(e3, x2);
                let S2 = v(`img`);
                l(x2, S2), o(S2, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(S2, `alt`, `Tailwind CSS slider`);
                let C2 = v(`div`);
                l(e3, C2);
                let w3 = v(`img`);
                l(C2, w3), o(w3, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(w3, `alt`, `Tailwind CSS slider`);
                let T2 = v(`div`);
                l(e3, T2);
                let E2 = v(`img`);
                l(T2, E2), o(E2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(E2, `alt`, `Tailwind CSS slider`);
                let D2 = v(`div`);
                l(e3, D2);
                let O2 = v(`img`);
                l(D2, O2), o(O2, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(O2, `alt`, `Tailwind CSS slider`);
                let k3 = v(`div`);
                l(e3, k3);
                let A2 = v(`img`);
                l(k3, A2), o(A2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(A2, `alt`, `Tailwind CSS slider`);
                let j2 = v(`div`);
                l(e3, j2);
                let M2 = v(`img`);
                return l(j2, M2), o(M2, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(M2, `alt`, `Tailwind CSS slider`), {
                  vaporElement: e3
                };
              });
              return h(() => {
                d(S(O, {
                  align: `center`,
                  className: `rounded-box`,
                  auto: true,
                  interval: 1500,
                  children: r3
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel align="center" className="rounded-box" auto interval={1500}>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Tailwind CSS slider" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Tailwind CSS slider" /></Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), B, ge, _e);
          });
          let V = v(`div`);
          l(c3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ve = v(`h2`);
          l(V, ve), e(ve, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(ve, s(`# Snap to end`));
          let ye = y(`rue:component:start`), be = y(`rue:component:end`);
          l(V, ye), l(V, be), h(() => {
            d(S(T, {
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
              activeKey: p2.value,
              onChange: (e2) => p2.value = e2,
              className: `mb-3`
            }), V, ye, be);
          });
          let xe = y(`rue:slot:start`), Se = y(`rue:slot:end`);
          l(V, xe), l(V, Se), h(() => {
            d(x(p2.value === `preview` ? m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              l(e2, t2), l(e2, n4);
              let r3 = m(() => {
                let e3 = u(), t3 = v(`div`);
                l(e3, t3);
                let n5 = v(`img`);
                l(t3, n5), o(n5, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(n5, `alt`, `Tailwind CSS slide component`);
                let r4 = v(`div`);
                l(e3, r4);
                let i2 = v(`img`);
                l(r4, i2), o(i2, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(i2, `alt`, `Tailwind CSS slide component`);
                let a3 = v(`div`);
                l(e3, a3);
                let s2 = v(`img`);
                l(a3, s2), o(s2, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(s2, `alt`, `Tailwind CSS slide component`);
                let c4 = v(`div`);
                l(e3, c4);
                let d2 = v(`img`);
                l(c4, d2), o(d2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(d2, `alt`, `Tailwind CSS slide component`);
                let f2 = v(`div`);
                l(e3, f2);
                let p3 = v(`img`);
                l(f2, p3), o(p3, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(p3, `alt`, `Tailwind CSS slide component`);
                let m2 = v(`div`);
                l(e3, m2);
                let h2 = v(`img`);
                l(m2, h2), o(h2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(h2, `alt`, `Tailwind CSS slide component`);
                let g2 = v(`div`);
                l(e3, g2);
                let _3 = v(`img`);
                l(g2, _3), o(_3, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(_3, `alt`, `Tailwind CSS slide component`);
                let y2 = v(`div`);
                l(e3, y2);
                let b4 = v(`img`);
                l(y2, b4), o(b4, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(b4, `alt`, `Tailwind CSS slide component`);
                let x2 = v(`div`);
                l(e3, x2);
                let S2 = v(`img`);
                l(x2, S2), o(S2, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(S2, `alt`, `Tailwind CSS slide component`);
                let C2 = v(`div`);
                l(e3, C2);
                let w3 = v(`img`);
                l(C2, w3), o(w3, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(w3, `alt`, `Tailwind CSS slide component`);
                let T2 = v(`div`);
                l(e3, T2);
                let E2 = v(`img`);
                l(T2, E2), o(E2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(E2, `alt`, `Tailwind CSS slide component`);
                let D2 = v(`div`);
                l(e3, D2);
                let O2 = v(`img`);
                l(D2, O2), o(O2, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(O2, `alt`, `Tailwind CSS slide component`);
                let k3 = v(`div`);
                l(e3, k3);
                let A2 = v(`img`);
                l(k3, A2), o(A2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(A2, `alt`, `Tailwind CSS slide component`);
                let j2 = v(`div`);
                l(e3, j2);
                let M2 = v(`img`);
                return l(j2, M2), o(M2, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(M2, `alt`, `Tailwind CSS slide component`), {
                  vaporElement: e3
                };
              });
              return h(() => {
                d(S(O, {
                  align: `end`,
                  className: `rounded-box`,
                  auto: true,
                  interval: 1500,
                  children: r3
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel align="end" className="rounded-box" auto interval={1500}>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
  <Carousel.Item><img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Tailwind CSS slide component" /></Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), V, xe, Se);
          });
          let H = v(`div`);
          l(c3, H), e(H, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ce = v(`h2`);
          l(H, Ce), e(Ce, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(Ce, s(`# Carousel with full width items`));
          let we = y(`rue:component:start`), Te = y(`rue:component:end`);
          l(H, we), l(H, Te), h(() => {
            d(S(T, {
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
              activeKey: _2.value,
              onChange: (e2) => _2.value = e2,
              className: `mb-3`
            }), H, we, Te);
          });
          let Ee = y(`rue:slot:start`), De = y(`rue:slot:end`);
          l(H, Ee), l(H, De), h(() => {
            d(x(_2.value === `preview` ? m(() => {
              let t2 = u(), n4 = y(`rue:component:start`), r3 = y(`rue:component:end`);
              l(t2, n4), l(t2, r3);
              let i2 = m(() => {
                let t3 = u(), n5 = v(`div`);
                l(t3, n5), e(n5, `w-full`);
                let r4 = v(`img`);
                l(n5, r4), e(r4, `w-full`), o(r4, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(r4, `alt`, `Tailwind CSS carousel component`);
                let i3 = v(`div`);
                l(t3, i3), e(i3, `w-full`);
                let a3 = v(`img`);
                l(i3, a3), e(a3, `w-full`), o(a3, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(a3, `alt`, `Tailwind CSS carousel component`);
                let s2 = v(`div`);
                l(t3, s2), e(s2, `w-full`);
                let c4 = v(`img`);
                l(s2, c4), e(c4, `w-full`), o(c4, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(c4, `alt`, `Tailwind CSS carousel component`);
                let d2 = v(`div`);
                l(t3, d2), e(d2, `w-full`);
                let f2 = v(`img`);
                l(d2, f2), e(f2, `w-full`), o(f2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(f2, `alt`, `Tailwind CSS carousel component`);
                let p3 = v(`div`);
                l(t3, p3), e(p3, `w-full`);
                let m2 = v(`img`);
                l(p3, m2), e(m2, `w-full`), o(m2, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(m2, `alt`, `Tailwind CSS carousel component`);
                let h2 = v(`div`);
                l(t3, h2), e(h2, `w-full`);
                let g2 = v(`img`);
                l(h2, g2), e(g2, `w-full`), o(g2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(g2, `alt`, `Tailwind CSS carousel component`);
                let _3 = v(`div`);
                l(t3, _3), e(_3, `w-full`);
                let y2 = v(`img`);
                return l(_3, y2), e(y2, `w-full`), o(y2, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(y2, `alt`, `Tailwind CSS carousel component`), {
                  vaporElement: t3
                };
              });
              return h(() => {
                d(S(O, {
                  className: `w-64 rounded-box`,
                  auto: true,
                  interval: 1500,
                  children: i2
                }), t2, n4, r3);
              }), {
                vaporElement: t2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel className="w-64 rounded-box" auto interval={1500}>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS carousel component" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS carousel component" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS carousel component" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Tailwind CSS carousel component" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Tailwind CSS carousel component" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Tailwind CSS carousel component" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Tailwind CSS carousel component" /></Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), H, Ee, De);
          });
          let U = v(`div`);
          l(c3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Oe = v(`h2`);
          l(U, Oe), e(Oe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(Oe, s(`# Vertical carousel`));
          let ke = y(`rue:component:start`), Ae = y(`rue:component:end`);
          l(U, ke), l(U, Ae), h(() => {
            d(S(T, {
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
            }), U, ke, Ae);
          });
          let je = y(`rue:slot:start`), Me = y(`rue:slot:end`);
          l(U, je), l(U, Me), h(() => {
            d(x(k2.value === `preview` ? m(() => {
              let t2 = u(), n4 = y(`rue:component:start`), r3 = y(`rue:component:end`);
              l(t2, n4), l(t2, r3);
              let i2 = m(() => {
                let t3 = u(), n5 = v(`div`);
                l(t3, n5), e(n5, `h-full`);
                let r4 = v(`img`);
                l(n5, r4), o(r4, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(r4, `alt`, `Free Tailwind CSS Slider`);
                let i3 = v(`div`);
                l(t3, i3), e(i3, `h-full`);
                let a3 = v(`img`);
                l(i3, a3), o(a3, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(a3, `alt`, `Free Tailwind CSS Slider`);
                let s2 = v(`div`);
                l(t3, s2), e(s2, `h-full`);
                let c4 = v(`img`);
                l(s2, c4), o(c4, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(c4, `alt`, `Free Tailwind CSS Slider`);
                let d2 = v(`div`);
                l(t3, d2), e(d2, `h-full`);
                let f2 = v(`img`);
                l(d2, f2), o(f2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(f2, `alt`, `Free Tailwind CSS Slider`);
                let p3 = v(`div`);
                l(t3, p3), e(p3, `h-full`);
                let m2 = v(`img`);
                l(p3, m2), o(m2, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(m2, `alt`, `Free Tailwind CSS Slider`);
                let h2 = v(`div`);
                l(t3, h2), e(h2, `h-full`);
                let g2 = v(`img`);
                l(h2, g2), o(g2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(g2, `alt`, `Free Tailwind CSS Slider`);
                let _3 = v(`div`);
                l(t3, _3), e(_3, `h-full`);
                let y2 = v(`img`);
                return l(_3, y2), o(y2, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(y2, `alt`, `Free Tailwind CSS Slider`), {
                  vaporElement: t3
                };
              });
              return h(() => {
                d(S(O, {
                  direction: `vertical`,
                  className: `h-96 rounded-box`,
                  auto: true,
                  interval: 1500,
                  children: i2
                }), t2, n4, r3);
              }), {
                vaporElement: t2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel direction="vertical" className="h-96 rounded-box" auto interval={1500}>
  <Carousel.Item className="h-full"><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Free Tailwind CSS Slider" /></Carousel.Item>
  <Carousel.Item className="h-full"><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Free Tailwind CSS Slider" /></Carousel.Item>
  <Carousel.Item className="h-full"><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Free Tailwind CSS Slider" /></Carousel.Item>
  <Carousel.Item className="h-full"><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Free Tailwind CSS Slider" /></Carousel.Item>
  <Carousel.Item className="h-full"><img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Free Tailwind CSS Slider" /></Carousel.Item>
  <Carousel.Item className="h-full"><img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Free Tailwind CSS Slider" /></Carousel.Item>
  <Carousel.Item className="h-full"><img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Free Tailwind CSS Slider" /></Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, je, Me);
          });
          let W = v(`div`);
          l(c3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ne = v(`h2`);
          l(W, Ne), e(Ne, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(Ne, s(`# Carousel with half width items`));
          let Pe = y(`rue:component:start`), Fe = y(`rue:component:end`);
          l(W, Pe), l(W, Fe), h(() => {
            d(S(T, {
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
            }), W, Pe, Fe);
          });
          let Ie = y(`rue:slot:start`), Le = y(`rue:slot:end`);
          l(W, Ie), l(W, Le), h(() => {
            d(x(A.value === `preview` ? m(() => {
              let t2 = u(), n4 = y(`rue:component:start`), r3 = y(`rue:component:end`);
              l(t2, n4), l(t2, r3);
              let i2 = m(() => {
                let t3 = u(), n5 = v(`div`);
                l(t3, n5), e(n5, `w-1/2`);
                let r4 = v(`img`);
                l(n5, r4), e(r4, `w-full`), o(r4, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(r4, `alt`, `Tailwind CSS slide plugin`);
                let i3 = v(`div`);
                l(t3, i3), e(i3, `w-1/2`);
                let a3 = v(`img`);
                l(i3, a3), e(a3, `w-full`), o(a3, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(a3, `alt`, `Tailwind CSS slide plugin`);
                let s2 = v(`div`);
                l(t3, s2), e(s2, `w-1/2`);
                let c4 = v(`img`);
                l(s2, c4), e(c4, `w-full`), o(c4, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(c4, `alt`, `Tailwind CSS slide plugin`);
                let d2 = v(`div`);
                l(t3, d2), e(d2, `w-1/2`);
                let f2 = v(`img`);
                l(d2, f2), e(f2, `w-full`), o(f2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(f2, `alt`, `Tailwind CSS slide plugin`);
                let p3 = v(`div`);
                l(t3, p3), e(p3, `w-1/2`);
                let m2 = v(`img`);
                l(p3, m2), e(m2, `w-full`), o(m2, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(m2, `alt`, `Tailwind CSS slide plugin`);
                let h2 = v(`div`);
                l(t3, h2), e(h2, `w-1/2`);
                let g2 = v(`img`);
                l(h2, g2), e(g2, `w-full`), o(g2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(g2, `alt`, `Tailwind CSS slide plugin`);
                let _3 = v(`div`);
                l(t3, _3), e(_3, `w-1/2`);
                let y2 = v(`img`);
                return l(_3, y2), e(y2, `w-full`), o(y2, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(y2, `alt`, `Tailwind CSS slide plugin`), {
                  vaporElement: t3
                };
              });
              return h(() => {
                d(S(O, {
                  className: `w-96 rounded-box`,
                  auto: true,
                  interval: 1500,
                  children: i2
                }), t2, n4, r3);
              }), {
                vaporElement: t2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel className="w-96 rounded-box" auto interval={1500}>
  <Carousel.Item className="w-1/2"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS slide plugin" /></Carousel.Item>
  <Carousel.Item className="w-1/2"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS slide plugin" /></Carousel.Item>
  <Carousel.Item className="w-1/2"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS slide plugin" /></Carousel.Item>
  <Carousel.Item className="w-1/2"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Tailwind CSS slide plugin" /></Carousel.Item>
  <Carousel.Item className="w-1/2"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Tailwind CSS slide plugin" /></Carousel.Item>
  <Carousel.Item className="w-1/2"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Tailwind CSS slide plugin" /></Carousel.Item>
  <Carousel.Item className="w-1/2"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Tailwind CSS slide plugin" /></Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), W, Ie, Le);
          });
          let G = v(`div`);
          l(c3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Re = v(`h2`);
          l(G, Re), e(Re, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(Re, s(`# Full-bleed carousel`));
          let ze = y(`rue:component:start`), Be = y(`rue:component:end`);
          l(G, ze), l(G, Be), h(() => {
            d(S(T, {
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
            }), G, ze, Be);
          });
          let Ve = y(`rue:slot:start`), He = y(`rue:slot:end`);
          l(G, Ve), l(G, He), h(() => {
            d(x(j.value === `preview` ? m(() => {
              let t2 = u(), n4 = y(`rue:component:start`), r3 = y(`rue:component:end`);
              l(t2, n4), l(t2, r3);
              let i2 = m(() => {
                let t3 = u(), n5 = v(`div`);
                l(t3, n5);
                let r4 = v(`img`);
                l(n5, r4), e(r4, `rounded-box`), o(r4, `src`, `https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`), o(r4, `alt`, `Tailwind CSS component`);
                let i3 = v(`div`);
                l(t3, i3);
                let a3 = v(`img`);
                l(i3, a3), e(a3, `rounded-box`), o(a3, `src`, `https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`), o(a3, `alt`, `Tailwind CSS component`);
                let s2 = v(`div`);
                l(t3, s2);
                let c4 = v(`img`);
                l(s2, c4), e(c4, `rounded-box`), o(c4, `src`, `https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`), o(c4, `alt`, `Tailwind CSS component`);
                let d2 = v(`div`);
                l(t3, d2);
                let f2 = v(`img`);
                l(d2, f2), e(f2, `rounded-box`), o(f2, `src`, `https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`), o(f2, `alt`, `Tailwind CSS component`);
                let p3 = v(`div`);
                l(t3, p3);
                let m2 = v(`img`);
                l(p3, m2), e(m2, `rounded-box`), o(m2, `src`, `https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp`), o(m2, `alt`, `Tailwind CSS component`);
                let h2 = v(`div`);
                l(t3, h2);
                let g2 = v(`img`);
                l(h2, g2), e(g2, `rounded-box`), o(g2, `src`, `https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp`), o(g2, `alt`, `Tailwind CSS component`);
                let _3 = v(`div`);
                l(t3, _3);
                let y2 = v(`img`);
                return l(_3, y2), e(y2, `rounded-box`), o(y2, `src`, `https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`), o(y2, `alt`, `Tailwind CSS component`), {
                  vaporElement: t3
                };
              });
              return h(() => {
                d(S(O, {
                  align: `center`,
                  className: `max-w-md p-4 space-x-4 bg-neutral rounded-box`,
                  auto: true,
                  interval: 1500,
                  children: i2
                }), t2, n4, r3);
              }), {
                vaporElement: t2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel align="center" className="max-w-md p-4 space-x-4 bg-neutral rounded-box" auto interval={1500}>
  <Carousel.Item><img className="rounded-box" src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Tailwind CSS component" /></Carousel.Item>
  <Carousel.Item><img className="rounded-box" src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Tailwind CSS component" /></Carousel.Item>
  <Carousel.Item><img className="rounded-box" src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Tailwind CSS component" /></Carousel.Item>
  <Carousel.Item><img className="rounded-box" src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Tailwind CSS component" /></Carousel.Item>
  <Carousel.Item><img className="rounded-box" src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Tailwind CSS component" /></Carousel.Item>
  <Carousel.Item><img className="rounded-box" src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Tailwind CSS component" /></Carousel.Item>
  <Carousel.Item><img className="rounded-box" src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Tailwind CSS component" /></Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, Ve, He);
          });
          let K = v(`div`);
          l(c3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ue = v(`h2`);
          l(K, Ue), e(Ue, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(Ue, s(`# Carousel with next/prev buttons`));
          let We = v(`p`);
          l(K, We), e(We, `text-sm text-base-content/70`), l(We, s(`\u4E0A\u4E00/\u4E0B\u4E00\u6309\u94AE\u63A7\u5236\u7D22\u5F15\uFF0C\u81EA\u52A8\u53F3\u6EDA\u4E14\u5FAA\u73AF\uFF08\u9ED8\u8BA4\uFF09\u3002`));
          let Ge = y(`rue:component:start`), Ke = y(`rue:component:end`);
          l(K, Ge), l(K, Ke), h(() => {
            d(S(T, {
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
            }), K, Ge, Ke);
          });
          let qe = y(`rue:slot:start`), Je = y(`rue:slot:end`);
          l(K, qe), l(K, Je), h(() => {
            d(x(N.value === `preview` ? m(() => {
              let t2 = u(), n4 = y(`rue:component:start`), r3 = y(`rue:component:end`);
              l(t2, n4), l(t2, r3);
              let i2 = m(() => {
                let t3 = u(), n5 = v(`div`);
                l(t3, n5), e(n5, `relative w-full`);
                let r4 = v(`img`);
                l(n5, r4), e(r4, `w-full`), o(r4, `src`, `https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp`), o(r4, `alt`, `Tailwind CSS slider with prev/next`);
                let i3 = v(`div`);
                l(n5, i3), e(i3, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let a3 = y(`rue:component:start`), s2 = y(`rue:component:end`);
                l(i3, a3), l(i3, s2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => L.value = (L.value + 3) % 4,
                    children: `\u276E`
                  }), i3, a3, s2);
                });
                let c4 = y(`rue:component:start`), f2 = y(`rue:component:end`);
                l(i3, c4), l(i3, f2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => L.value = (L.value + 1) % 4,
                    children: `\u276F`
                  }), i3, c4, f2);
                });
                let p3 = v(`div`);
                l(t3, p3), e(p3, `relative w-full`);
                let m2 = v(`img`);
                l(p3, m2), e(m2, `w-full`), o(m2, `src`, `https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp`), o(m2, `alt`, `Tailwind CSS slider with prev/next`);
                let g2 = v(`div`);
                l(p3, g2), e(g2, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let _3 = y(`rue:component:start`), b4 = y(`rue:component:end`);
                l(g2, _3), l(g2, b4), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => L.value = (L.value + 3) % 4,
                    children: `\u276E`
                  }), g2, _3, b4);
                });
                let x2 = y(`rue:component:start`), C2 = y(`rue:component:end`);
                l(g2, x2), l(g2, C2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => L.value = (L.value + 1) % 4,
                    children: `\u276F`
                  }), g2, x2, C2);
                });
                let w3 = v(`div`);
                l(t3, w3), e(w3, `relative w-full`);
                let T2 = v(`img`);
                l(w3, T2), e(T2, `w-full`), o(T2, `src`, `https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp`), o(T2, `alt`, `Tailwind CSS slider with prev/next`);
                let E2 = v(`div`);
                l(w3, E2), e(E2, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let O2 = y(`rue:component:start`), k3 = y(`rue:component:end`);
                l(E2, O2), l(E2, k3), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => L.value = (L.value + 3) % 4,
                    children: `\u276E`
                  }), E2, O2, k3);
                });
                let A2 = y(`rue:component:start`), j2 = y(`rue:component:end`);
                l(E2, A2), l(E2, j2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => L.value = (L.value + 1) % 4,
                    children: `\u276F`
                  }), E2, A2, j2);
                });
                let M2 = v(`div`);
                l(t3, M2), e(M2, `relative w-full`);
                let N2 = v(`img`);
                l(M2, N2), e(N2, `w-full`), o(N2, `src`, `https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp`), o(N2, `alt`, `Tailwind CSS slider with prev/next`);
                let P2 = v(`div`);
                l(M2, P2), e(P2, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let F2 = y(`rue:component:start`), R2 = y(`rue:component:end`);
                l(P2, F2), l(P2, R2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 3) % 4,
                    children: `\u276E`
                  }), P2, F2, R2);
                });
                let ee2 = y(`rue:component:start`), te2 = y(`rue:component:end`);
                return l(P2, ee2), l(P2, te2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 1) % 4,
                    children: `\u276F`
                  }), P2, ee2, te2);
                }), {
                  vaporElement: t3
                };
              });
              return h(() => {
                d(S(O, {
                  className: `w-full rounded-box`,
                  activeIndex: I.value,
                  auto: true,
                  interval: 1500,
                  loop: true,
                  autoDirection: `forward`,
                  children: i2
                }), t2, n4, r3);
              }), {
                vaporElement: t2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const nextPrevIndex = ref(0);
<Carousel className="w-full rounded-box" activeIndex={nextPrevIndex.value} auto interval={1500} loop autoDirection="forward">
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), K, qe, Je);
          });
          let q = v(`div`);
          l(c3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ye = v(`h2`);
          l(q, Ye), e(Ye, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(Ye, s(`# Carousel with next/prev buttons (auto left)`));
          let Xe = v(`p`);
          l(q, Xe), e(Xe, `text-sm text-base-content/70`), l(Xe, s(`\u4E0A\u4E00/\u4E0B\u4E00\u6309\u94AE\u63A7\u5236\u7D22\u5F15\uFF0C\u81EA\u52A8\u5DE6\u6EDA\u4E14\u5FAA\u73AF\u3002`));
          let Ze = y(`rue:component:start`), Qe = y(`rue:component:end`);
          l(q, Ze), l(q, Qe), h(() => {
            d(S(T, {
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
              activeKey: P.value,
              onChange: (e2) => P.value = e2,
              className: `mb-3`
            }), q, Ze, Qe);
          });
          let $e = y(`rue:slot:start`), et = y(`rue:slot:end`);
          l(q, $e), l(q, et), h(() => {
            d(x(P.value === `preview` ? m(() => {
              let t2 = u(), n4 = y(`rue:component:start`), r3 = y(`rue:component:end`);
              l(t2, n4), l(t2, r3);
              let i2 = m(() => {
                let t3 = u(), n5 = v(`div`);
                l(t3, n5), e(n5, `relative w-full`);
                let r4 = v(`img`);
                l(n5, r4), e(r4, `w-full`), o(r4, `src`, `https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp`), o(r4, `alt`, `Tailwind CSS slider with prev/next`);
                let i3 = v(`div`);
                l(n5, i3), e(i3, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let a3 = y(`rue:component:start`), s2 = y(`rue:component:end`);
                l(i3, a3), l(i3, s2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 3) % 4,
                    children: `\u276E`
                  }), i3, a3, s2);
                });
                let c4 = y(`rue:component:start`), f2 = y(`rue:component:end`);
                l(i3, c4), l(i3, f2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 1) % 4,
                    children: `\u276F`
                  }), i3, c4, f2);
                });
                let p3 = v(`div`);
                l(t3, p3), e(p3, `relative w-full`);
                let m2 = v(`img`);
                l(p3, m2), e(m2, `w-full`), o(m2, `src`, `https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp`), o(m2, `alt`, `Tailwind CSS slider with prev/next`);
                let g2 = v(`div`);
                l(p3, g2), e(g2, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let _3 = y(`rue:component:start`), b4 = y(`rue:component:end`);
                l(g2, _3), l(g2, b4), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 3) % 4,
                    children: `\u276E`
                  }), g2, _3, b4);
                });
                let x2 = y(`rue:component:start`), C2 = y(`rue:component:end`);
                l(g2, x2), l(g2, C2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 1) % 4,
                    children: `\u276F`
                  }), g2, x2, C2);
                });
                let w3 = v(`div`);
                l(t3, w3), e(w3, `relative w-full`);
                let T2 = v(`img`);
                l(w3, T2), e(T2, `w-full`), o(T2, `src`, `https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp`), o(T2, `alt`, `Tailwind CSS slider with prev/next`);
                let E2 = v(`div`);
                l(w3, E2), e(E2, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let O2 = y(`rue:component:start`), k3 = y(`rue:component:end`);
                l(E2, O2), l(E2, k3), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 3) % 4,
                    children: `\u276E`
                  }), E2, O2, k3);
                });
                let A2 = y(`rue:component:start`), j2 = y(`rue:component:end`);
                l(E2, A2), l(E2, j2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 1) % 4,
                    children: `\u276F`
                  }), E2, A2, j2);
                });
                let M2 = v(`div`);
                l(t3, M2), e(M2, `relative w-full`);
                let N2 = v(`img`);
                l(M2, N2), e(N2, `w-full`), o(N2, `src`, `https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp`), o(N2, `alt`, `Tailwind CSS slider with prev/next`);
                let P2 = v(`div`);
                l(M2, P2), e(P2, `absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`);
                let F2 = y(`rue:component:start`), L2 = y(`rue:component:end`);
                l(P2, F2), l(P2, L2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 3) % 4,
                    children: `\u276E`
                  }), P2, F2, L2);
                });
                let R2 = y(`rue:component:start`), ee2 = y(`rue:component:end`);
                return l(P2, R2), l(P2, ee2), h(() => {
                  d(S(D, {
                    circle: true,
                    onClick: () => I.value = (I.value + 1) % 4,
                    children: `\u276F`
                  }), P2, R2, ee2);
                }), {
                  vaporElement: t3
                };
              });
              return h(() => {
                d(S(O, {
                  className: `w-full rounded-box`,
                  activeIndex: L.value,
                  auto: true,
                  interval: 1500,
                  loop: true,
                  autoDirection: `backward`,
                  children: i2
                }), t2, n4, r3);
              }), {
                vaporElement: t2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const nextPrevIndex = ref(0);
<Carousel className="w-full rounded-box" activeIndex={nextPrevIndex.value} auto interval={1500} loop autoDirection="backward">
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
  <Carousel.Item className="relative w-full">
    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 3) % 4)}>\u276E</Button>
      <Button circle onClick={() => (nextPrevIndex.value = (nextPrevIndex.value + 1) % 4)}>\u276F</Button>
    </div>
  </Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, $e, et);
          });
          let J = v(`div`);
          l(c3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let tt = v(`h2`);
          l(J, tt), e(tt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(tt, s(`# Carousel with indicator buttons`));
          let nt = v(`p`);
          l(J, nt), e(nt, `text-sm text-base-content/70`), l(nt, s(`\u4F7F\u7528\u4EE3\u7801\u63A7\u5236\u7D22\u5F15\uFF0C\u4E0D\u4F9D\u8D56\u951A\u94FE\u3002`));
          let rt = y(`rue:component:start`), it = y(`rue:component:end`);
          l(J, rt), l(J, it), h(() => {
            d(S(T, {
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
            }), J, rt, it);
          });
          let at = y(`rue:slot:start`), ot = y(`rue:slot:end`);
          l(J, at), l(J, ot), h(() => {
            d(x(M.value === `preview` ? C(g, {
              children: [
                C(O, {
                  className: `w-full rounded-box`,
                  activeIndex: F.value,
                  children: [
                    S(O.Item, {
                      className: `w-full`,
                      children: S(`img`, {
                        className: `w-full`,
                        src: `https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp`,
                        alt: `Tailwind CSS gallery`
                      })
                    }),
                    S(O.Item, {
                      className: `w-full`,
                      children: S(`img`, {
                        className: `w-full`,
                        src: `https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp`,
                        alt: `Tailwind CSS gallery`
                      })
                    }),
                    S(O.Item, {
                      className: `w-full`,
                      children: S(`img`, {
                        className: `w-full`,
                        src: `https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp`,
                        alt: `Tailwind CSS gallery`
                      })
                    }),
                    S(O.Item, {
                      className: `w-full`,
                      children: S(`img`, {
                        className: `w-full`,
                        src: `https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp`,
                        alt: `Tailwind CSS gallery`
                      })
                    })
                  ]
                }),
                C(`div`, {
                  className: `flex justify-center w-full py-2 gap-2`,
                  children: [
                    S(D, {
                      size: `xs`,
                      onClick: () => F.value = 0,
                      children: `1`
                    }),
                    S(D, {
                      size: `xs`,
                      onClick: () => F.value = 1,
                      children: `2`
                    }),
                    S(D, {
                      size: `xs`,
                      onClick: () => F.value = 2,
                      children: `3`
                    }),
                    S(D, {
                      size: `xs`,
                      onClick: () => F.value = 3,
                      children: `4`
                    })
                  ]
                })
              ]
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const indicatorIndex = ref(0);
<Carousel className="w-full rounded-box" activeIndex={indicatorIndex.value}>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" /></Carousel.Item>
  <Carousel.Item className="w-full"><img className="w-full" src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" /></Carousel.Item>
</Carousel>
<div className="flex justify-center w-full py-2 gap-2">
  <Button size="xs" onClick={() => (indicatorIndex.value = 0)}>1</Button>
  <Button size="xs" onClick={() => (indicatorIndex.value = 1)}>2</Button>
  <Button size="xs" onClick={() => (indicatorIndex.value = 2)}>3</Button>
  <Button size="xs" onClick={() => (indicatorIndex.value = 3)}>4</Button>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), J, at, ot);
          });
          let Y = v(`div`);
          l(c3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let st = v(`h2`);
          l(Y, st), e(st, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(st, s(`# \u57FA\u7840\uFF08\u6C34\u5E73\u5C45\u4E2D\uFF09`));
          let ct = y(`rue:component:start`), lt = y(`rue:component:end`);
          l(Y, ct), l(Y, lt), h(() => {
            d(S(T, {
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
              activeKey: R.value,
              onChange: (e2) => R.value = e2,
              className: `mb-3`
            }), Y, ct, lt);
          });
          let ut = y(`rue:slot:start`), dt = y(`rue:slot:end`);
          l(Y, ut), l(Y, dt), h(() => {
            d(x(R.value === `preview` ? m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), d(S(O, {
                align: `center`,
                className: `rounded-box w-full`,
                children: m(() => {
                  let e3 = u(), t3 = v(`div`);
                  l(e3, t3);
                  let n5 = v(`img`);
                  l(t3, n5), o(n5, `alt`, `1`), o(n5, `src`, `https://picsum.photos/id/1011/600/300`);
                  let r3 = v(`div`);
                  l(e3, r3);
                  let i2 = v(`img`);
                  l(r3, i2), o(i2, `alt`, `2`), o(i2, `src`, `https://picsum.photos/id/1015/600/300`);
                  let a3 = v(`div`);
                  l(e3, a3);
                  let s2 = v(`img`);
                  return l(a3, s2), o(s2, `alt`, `3`), o(s2, `src`, `https://picsum.photos/id/1016/600/300`), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel align="center" className="rounded-box w-full">
  <Carousel.Item>
    <img alt="1" src="https://picsum.photos/id/1011/600/300" />
  </Carousel.Item>
  <Carousel.Item>
    <img alt="2" src="https://picsum.photos/id/1015/600/300" />
  </Carousel.Item>
  <Carousel.Item>
    <img alt="3" src="https://picsum.photos/id/1016/600/300" />
  </Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, ut, dt);
          });
          let X = v(`div`);
          l(c3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ft = v(`h2`);
          l(X, ft), e(ft, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(ft, s(`# \u5782\u76F4\u65B9\u5411`));
          let pt = y(`rue:component:start`), mt = y(`rue:component:end`);
          l(X, pt), l(X, mt), h(() => {
            d(S(T, {
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
              activeKey: ee.value,
              onChange: (e2) => ee.value = e2,
              className: `mb-3`
            }), X, pt, mt);
          });
          let ht = y(`rue:slot:start`), gt = y(`rue:slot:end`);
          l(X, ht), l(X, gt), h(() => {
            d(x(ee.value === `preview` ? m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), d(S(O, {
                direction: `vertical`,
                className: `rounded-box w-80 h-64`,
                children: m(() => {
                  let e3 = u(), t3 = v(`div`);
                  l(e3, t3);
                  let n5 = v(`img`);
                  l(t3, n5), o(n5, `alt`, `1`), o(n5, `src`, `https://picsum.photos/id/1005/320/200`);
                  let r3 = v(`div`);
                  l(e3, r3);
                  let i2 = v(`img`);
                  l(r3, i2), o(i2, `alt`, `2`), o(i2, `src`, `https://picsum.photos/id/1018/320/200`);
                  let a3 = v(`div`);
                  l(e3, a3);
                  let s2 = v(`img`);
                  return l(a3, s2), o(s2, `alt`, `3`), o(s2, `src`, `https://picsum.photos/id/1025/320/200`), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel direction="vertical" className="rounded-box w-80 h-64">
  <Carousel.Item>
    <img alt="1" src="https://picsum.photos/id/1005/320/200" />
  </Carousel.Item>
  <Carousel.Item>
    <img alt="2" src="https://picsum.photos/id/1018/320/200" />
  </Carousel.Item>
  <Carousel.Item>
    <img alt="3" src="https://picsum.photos/id/1025/320/200" />
  </Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), X, ht, gt);
          });
          let Z = v(`div`);
          l(c3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let _t = v(`h2`);
          l(Z, _t), e(_t, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(_t, s(`# \u53D7\u63A7\u5207\u6362\uFF08activeIndex\uFF09`));
          let vt = y(`rue:component:start`), yt = y(`rue:component:end`);
          l(Z, vt), l(Z, yt), h(() => {
            d(S(T, {
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
              activeKey: te.value,
              onChange: (e2) => te.value = e2,
              className: `mb-3`
            }), Z, vt, yt);
          });
          let bt = y(`rue:slot:start`), xt = y(`rue:slot:end`);
          l(Z, bt), l(Z, xt), h(() => {
            d(x(te.value === `preview` ? m(() => {
              let n4 = u(), r3 = v(`div`);
              l(n4, r3), e(r3, `prose prose-sm md:prose-basese`);
              let a3 = v(`div`);
              l(r3, a3), e(a3, `mb-2 flex gap-2`);
              let c4 = v(`button`);
              l(a3, c4), e(c4, `btn btn-sm`), f(c4, `click`, () => ie.value = Math.max(0, ie.value - 1)), l(c4, s(`Prev`));
              let p3 = v(`button`);
              l(a3, p3), e(p3, `btn btn-sm`), f(p3, `click`, () => ie.value = Math.min(2, ie.value + 1)), l(p3, s(`Next`));
              let g2 = v(`span`);
              l(a3, g2), e(g2, `text-sm opacity-60`), l(g2, s(`index: `));
              let _3 = t(g2);
              l(g2, _3), h(() => {
                i(_3, ie.value);
              });
              let b4 = y(`rue:component:start`), x2 = y(`rue:component:end`);
              l(r3, b4), l(r3, x2);
              let C2 = m(() => {
                let e2 = u(), t2 = v(`div`);
                l(e2, t2);
                let n5 = v(`img`);
                l(t2, n5), o(n5, `alt`, `1`), o(n5, `src`, `https://picsum.photos/id/1011/600/300`);
                let r4 = v(`div`);
                l(e2, r4);
                let i2 = v(`img`);
                l(r4, i2), o(i2, `alt`, `2`), o(i2, `src`, `https://picsum.photos/id/1015/600/300`);
                let a4 = v(`div`);
                l(e2, a4);
                let s2 = v(`img`);
                return l(a4, s2), o(s2, `alt`, `3`), o(s2, `src`, `https://picsum.photos/id/1016/600/300`), {
                  vaporElement: e2
                };
              });
              return h(() => {
                d(S(O, {
                  align: `center`,
                  activeIndex: ie.value,
                  onIndexChange: (e2) => ie.value = e2,
                  className: `rounded-box w-full`,
                  children: C2
                }), r3, b4, x2);
              }), {
                vaporElement: n4
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const controlledIndex = ref(0)
<div>
  <button className="btn btn-sm" onClick={() => (controlledIndex.value = Math.max(0, controlledIndex.value - 1))}>Prev</button>
  <button className="btn btn-sm" onClick={() => (controlledIndex.value = Math.min(2, controlledIndex.value + 1))}>Next</button>
  <Carousel align="center" activeIndex={controlledIndex.value} onIndexChange={i => (controlledIndex.value = i)} className="rounded-box w-full">
    <Carousel.Item>
      <img alt="1" src="https://picsum.photos/id/1011/600/300" />
    </Carousel.Item>
    <Carousel.Item>
      <img alt="2" src="https://picsum.photos/id/1015/600/300" />
    </Carousel.Item>
    <Carousel.Item>
      <img alt="3" src="https://picsum.photos/id/1016/600/300" />
    </Carousel.Item>
  </Carousel>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, bt, xt);
          });
          let Q = v(`div`);
          l(c3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let St = v(`h2`);
          l(Q, St), e(St, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(St, s(`# \u81EA\u52A8\u64AD\u653E\uFF08\u5FAA\u73AF\uFF09`));
          let Ct = y(`rue:component:start`), wt = y(`rue:component:end`);
          l(Q, Ct), l(Q, wt), h(() => {
            d(S(T, {
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
              activeKey: ne.value,
              onChange: (e2) => ne.value = e2,
              className: `mb-3`
            }), Q, Ct, wt);
          });
          let Tt = y(`rue:slot:start`), Et = y(`rue:slot:end`);
          l(Q, Tt), l(Q, Et), h(() => {
            d(x(ne.value === `preview` ? m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              l(e2, t2), l(e2, n4);
              let r3 = m(() => {
                let e3 = u(), t3 = v(`div`);
                l(e3, t3);
                let n5 = v(`img`);
                l(t3, n5), o(n5, `alt`, `1`), o(n5, `src`, `https://picsum.photos/id/1011/600/300`);
                let r4 = v(`div`);
                l(e3, r4);
                let i2 = v(`img`);
                l(r4, i2), o(i2, `alt`, `2`), o(i2, `src`, `https://picsum.photos/id/1015/600/300`);
                let a3 = v(`div`);
                l(e3, a3);
                let s2 = v(`img`);
                return l(a3, s2), o(s2, `alt`, `3`), o(s2, `src`, `https://picsum.photos/id/1016/600/300`), {
                  vaporElement: e3
                };
              });
              return h(() => {
                d(S(O, {
                  align: `center`,
                  auto: true,
                  loop: true,
                  interval: 2500,
                  className: `rounded-box w-full`,
                  children: r3
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Carousel align="center" auto loop interval={2500} className="rounded-box w-full">
  <Carousel.Item>
    <img alt="1" src="https://picsum.photos/id/1011/600/300" />
  </Carousel.Item>
  <Carousel.Item>
    <img alt="2" src="https://picsum.photos/id/1015/600/300" />
  </Carousel.Item>
  <Carousel.Item>
    <img alt="3" src="https://picsum.photos/id/1016/600/300" />
  </Carousel.Item>
</Carousel>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, Tt, Et);
          });
          let $ = v(`div`);
          l(c3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Dt = v(`h2`);
          l($, Dt), e(Dt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), l(Dt, s(`# Carousel \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let Ot = y(`rue:component:start`), kt = y(`rue:component:end`);
          l($, Ot), l($, kt), h(() => {
            d(S(T, {
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
              activeKey: re.value,
              onChange: (e2) => re.value = e2,
              className: `mb-3`
            }), $, Ot, kt);
          });
          let At = y(`rue:slot:start`), jt = y(`rue:slot:end`);
          return l($, At), l($, jt), h(() => {
            d(x(re.value === `preview` ? m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(O, {
                  className: `rounded-box w-full`,
                  align: `center`,
                  items: ae
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : m(() => {
              let e2 = u(), t2 = y(`rue:component:start`), n4 = y(`rue:component:end`);
              return l(e2, t2), l(e2, n4), h(() => {
                d(S(E, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Carousel } from '@rue/design';
const items = [
  { content: <img alt="1" src="https://picsum.photos/id/1011/600/300" />, className: 'relative' },
  { content: <img alt="2" src="https://picsum.photos/id/1015/600/300" />, className: 'relative' },
  { content: <img alt="3" src="https://picsum.photos/id/1016/600/300" />, className: 'relative' },
];
<Carousel className="rounded-box w-full" align="center" items={items} />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), $, At, jt);
          }), {
            vaporElement: n3
          };
        })
      }), n2, c2, b2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  k as default
};

import { A as e, G as t, I as n, O as r, S as i, T as a, U as o, _ as s, b as c, f as l, g as u, i as d, l as f, m as p, n as m, q as h, t as g, u as _, v, x as y, y as b, z as x, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { a as S, i as C, n as w, o as T, r as E, s as D, t as O, __tla as __tla_1 } from "./BaseTransition-BHDYj6x4.js";
import { n as k, __tla as __tla_2 } from "./vapor-runtime-DlsvThgv.js";
import { o as A, s as j, __tla as __tla_3 } from "./src-Ba80c3lX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as M, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as N, __tla as __tla_6 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let F;
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
  const P = (e2) => {
    let t2 = e2.name || `rue`, n2 = e2.moveClass ?? `${t2}-move`, r2 = e2.tag ? y(e2.tag) : y(`span`);
    e2.tag || (r2.style.display = `contents`);
    let i2 = b(`rue-tg-start`), o2 = b(`rue-tg-end`), c2 = m(e2), { runEnter: u2, runLeave: x2 } = O(e2);
    function k2() {
      let e3 = [], t3 = i2.nextSibling || null;
      for (; t3 && t3 !== o2; ) t3.nodeType === 1 && e3.push(t3), t3 = t3.nextSibling || null;
      return e3;
    }
    return f(() => {
      s(r2, i2), s(r2, o2);
      let t3 = true;
      h(() => {
        let f2 = /* @__PURE__ */ new Map(), p2 = /* @__PURE__ */ new Map();
        {
          let e3 = i2.nextSibling || null;
          for (; e3 && e3 !== o2; ) {
            if (e3.nodeType === 1) {
              let t4 = e3, n3 = t4.getAttribute(`data-rue-key`);
              n3 && (f2.set(n3, t4), p2.set(n3, t4.getBoundingClientRect()));
            }
            e3 = e3.nextSibling || null;
          }
        }
        let m2 = e2.children, h2 = Array.isArray(m2) ? m2 : m2 ? [
          m2
        ] : [];
        l(d(g, null, ...h2), r2, i2, o2);
        let _2 = h2.map((e3) => String(e3.key ?? ``)), y2 = k2(), b2 = /* @__PURE__ */ new Map(), O2 = 0;
        for (let e3 = 0; e3 < _2.length; e3++) {
          let t4 = _2[e3];
          if (!t4) continue;
          for (; O2 < y2.length && !y2[O2]; ) O2++;
          let n3 = y2[O2++];
          n3 && (n3.setAttribute(`data-rue-key`, t4), b2.set(t4, n3));
        }
        _2.forEach((n3) => {
          if (!n3) return;
          let r3 = b2.get(n3);
          r3 && (f2.has(n3) || u2(r3, t3 && e2.appear ? `appear` : `enter`));
        }), p2.forEach((t4, r3) => {
          let i3 = b2.get(r3);
          if (!i3) return;
          let a2 = i3.getBoundingClientRect(), o3 = t4.left - a2.left, s2 = t4.top - a2.top;
          if (o3 || s2) {
            i3.style.transform = `translate(${o3}px, ${s2}px)`, i3.style.transition = `transform 0s`, E(i3), i3.style.transform = ``, i3.style.transition = ``, w(i3, n2);
            let t5 = e2.type ?? C(i3), r4 = Math.max(T(i3, `transition`, void 0, `enter`), T(i3, `animation`, void 0, `enter`));
            D(i3, t5 ?? null, r4, () => S(i3, n2));
          }
        }), f2.forEach((e3, t4) => {
          if (!_2.includes(t4)) {
            let t5 = o2.nextSibling;
            t5 && v(r2, t5) ? a(r2, e3, t5) : s(r2, e3), x2(e3, () => {
              e3.remove(), c2(`after-leave`);
            });
          }
        }), t3 = false;
      });
    }), _(() => {
    }), p(() => ({
      vaporElement: r2
    }));
  };
  F = () => {
    let { items: a2, nextId: d2, activeTab: f2, insert: m2, reset: g2, shuffle: _2, remove: v2, code: S2 } = t(`useSetup:0:0`, () => o(() => {
      let e2 = t(`ref:1:0`, () => x([
        1,
        2,
        3,
        4,
        5
      ])), n2 = t(`ref:1:1`, () => x(e2.value.length + 1)), r2 = t(`ref:1:2`, () => x(`preview`));
      function i2() {
        let t2 = Math.round(Math.random() * e2.value.length);
        e2.value.splice(t2, 0, n2.value++);
      }
      function a3() {
        e2.value = [
          1,
          2,
          3,
          4,
          5
        ], n2.value = e2.value.length + 1;
      }
      function o2() {
        let t2 = e2.value.slice(), n3 = t2.length;
        for (; n3 !== 0; ) {
          let e3 = Math.floor(Math.random() * n3);
          n3--;
          let r3 = t2[n3];
          t2[n3] = t2[e3], t2[e3] = r3;
        }
        e2.value = t2;
      }
      function s2(t2) {
        let n3 = e2.value.indexOf(t2);
        n3 > -1 && e2.value.splice(n3, 1);
      }
      return {
        items: e2,
        nextId: n2,
        activeTab: r2,
        insert: i2,
        reset: a3,
        shuffle: o2,
        remove: s2,
        code: `import { type FC, ref, TransitionGroup } from 'rues';

const ListTransitionExample: FC = () => {
  const items = ref<number[]>([1, 2, 3, 4, 5]);
  const nextId = ref(items.value.length + 1);

  function insert() {
    const i = Math.round(Math.random() * items.value.length);
    items.value.splice(i, 0, nextId.value++);
  }

  function reset() {
    items.value = [1, 2, 3, 4, 5];
    nextId.value = items.value.length + 1;
  }

  function shuffle() {
    // Fisher\u2013Yates shuffle to avoid external deps
    const arr = items.value.slice();
    let currentIndex = arr.length;
    while (currentIndex !== 0) {
      const randomIdx = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      const tmp = arr[currentIndex];
      arr[currentIndex] = arr[randomIdx];
      arr[randomIdx] = tmp;
    }
    items.value = arr;
  }

  function remove(item: number) {
    const i = items.value.indexOf(item);
    if (i > -1) items.value.splice(i, 1);
  }

  return (
    <>
        <style>{\`
.container {
  position: relative;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* Items visuals are mainly controlled by Tailwind utility classes */
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 1. \u58F0\u660E\u8FC7\u6E21\u6548\u679C */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: transform, opacity;
}

/* 2. \u58F0\u660E\u8FDB\u5165\u548C\u79BB\u5F00\u7684\u72B6\u6001 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.98) translate(24px, 0);
}

/* 3. \u79BB\u5F00\u9879\u79FB\u51FA\u5E03\u5C40\u6D41\uFF0C\u4FBF\u4E8E\u8BA1\u7B97\u79FB\u52A8\u52A8\u753B */
.fade-leave-active {
  position: absolute;
  pointer-events: none;
}
      \`}</style>
      <div className="card bg-base-100 shadow">
        <div className="card-body grid gap-4">
          <div className="flex gap-3">
            <button className="btn btn-primary" onClick={insert}>
              Insert at random index
            </button>
            <button className="btn" onClick={reset}>
              Reset
            </button>
            <button className="btn" onClick={shuffle}>
              Shuffle
            </button>
          </div>

          <ul className="container space-y-3 rounded-xl border border-base-200 bg-base-100 p-3">
            <TransitionGroup name="fade" keepJSX>
              {items.value.map(item => (
                <li
                  className="item px-3 py-2 rounded-md border border-base-200 bg-base-100 shadow-sm"
                  key={item}
                >
                  <span className="text-base-content">{item}</span>
                  <button className="btn btn-sm" onClick={() => remove(item)}>
                    x
                  </button>
                </li>
              ))}
            </TransitionGroup>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListTransitionExample;`
      };
    }));
    return p(() => {
      let t2 = c(), o2 = b(`rue:component:start`), d3 = b(`rue:component:end`);
      return s(t2, o2), s(t2, d3), l(A(N, {
        children: p(() => {
          let t3 = c(), o3 = y(`h1`);
          s(t3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, i(`\u5E26\u8FC7\u6E21\u52A8\u6548\u7684\u5217\u8868\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let d4 = y(`div`);
          s(t3, d4), r(d4, `role`, `tablist`), e(d4, `tabs tabs-box`);
          let x2 = y(`button`);
          s(d4, x2), r(x2, `role`, `tab`), h(() => {
            e(x2, String(`tab ${f2.value === `preview` ? `tab-active` : ``}`));
          }), u(x2, `click`, () => {
            f2.value = `preview`;
          }), s(x2, i(`\u6548\u679C`));
          let C2 = y(`button`);
          s(d4, C2), r(C2, `role`, `tab`), h(() => {
            e(C2, String(`tab ${f2.value === `code` ? `tab-active` : ``}`));
          }), u(C2, `click`, () => {
            f2.value = `code`;
          }), s(C2, i(`\u4EE3\u7801`));
          let w2 = y(`style`);
          s(t3, w2), h(() => {
            n(w2, `
.container {
  position: relative;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* Items visuals are mainly controlled by Tailwind utility classes */
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 1. \u58F0\u660E\u8FC7\u6E21\u6548\u679C */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: transform, opacity;
}

/* 2. \u58F0\u660E\u8FDB\u5165\u548C\u79BB\u5F00\u7684\u72B6\u6001 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.98) translate(24px, 0);
}

/* 3. \u79BB\u5F00\u9879\u79FB\u51FA\u5E03\u5C40\u6D41\uFF0C\u4FBF\u4E8E\u8BA1\u7B97\u79FB\u52A8\u52A8\u753B */
.fade-leave-active {
  position: absolute;
  pointer-events: none;
}
      `);
          });
          let T2 = y(`div`);
          s(t3, T2), e(T2, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let E2 = b(`rue:slot:start`), D2 = b(`rue:slot:end`);
          s(T2, E2), s(T2, D2), h(() => {
            l(k(f2.value === `code` ? p(() => {
              let t4 = c(), n2 = y(`div`);
              s(t4, n2), e(n2, `card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);
              let r2 = b(`rue:component:start`), i2 = b(`rue:component:end`);
              return s(n2, r2), s(n2, i2), h(() => {
                l(A(M, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: S2
                }), n2, r2, i2);
              }), {
                vaporElement: t4
              };
            }) : ``), T2, E2, D2);
          }), s(T2, i(` `));
          let O2 = b(`rue:slot:start`), N2 = b(`rue:slot:end`);
          return s(T2, O2), s(T2, N2), h(() => {
            l(k(f2.value === `preview` ? p(() => {
              let t4 = c(), n2 = y(`div`);
              s(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = y(`div`);
              s(n2, r2), e(r2, `card-body grid gap-4`);
              let o4 = y(`div`);
              s(r2, o4), e(o4, `flex gap-3`);
              let d5 = y(`button`);
              s(o4, d5), e(d5, `btn btn-primary`), u(d5, `click`, m2), s(d5, i(`Insert at random index`));
              let f3 = y(`button`);
              s(o4, f3), e(f3, `btn`), u(f3, `click`, g2), s(f3, i(`Reset`));
              let p2 = y(`button`);
              s(o4, p2), e(p2, `btn`), u(p2, `click`, _2), s(p2, i(`Shuffle`));
              let x3 = y(`ul`);
              s(r2, x3), e(x3, `container space-y-3 rounded-xl border border-base-200 bg-base-100 p-3`);
              let S3 = b(`rue:component:start`), C3 = b(`rue:component:end`);
              return s(x3, S3), s(x3, C3), h(() => {
                l(A(P, {
                  name: `fade`,
                  keepJSX: true,
                  children: a2.value.map((e2) => j(`li`, {
                    className: `item px-3 py-2 rounded-md border border-base-200 bg-base-100 shadow-sm`,
                    children: [
                      A(`span`, {
                        className: `text-base-content`,
                        children: e2
                      }),
                      A(`button`, {
                        className: `btn btn-sm`,
                        onClick: () => v2(e2),
                        children: `x`
                      })
                    ]
                  }, e2))
                }), x3, S3, C3);
              }), {
                vaporElement: t4
              };
            }) : ``), T2, O2, N2);
          }), {
            vaporElement: t3
          };
        })
      }), t2, o2, d3), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  F as default
};

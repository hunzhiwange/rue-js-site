import { A as e, C as t, G as n, I as r, L as i, O as a, S as o, U as s, _ as c, a as l, b as u, f as d, g as f, l as p, m, o as h, q as g, s as _, x as v, y, z as b, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as x, r as S, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { t as C } from "./general-BmFRDxl1.js";
let E;
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
  })()
]).then(async () => {
  var w = b([]);
  const T = () => ({
    items: w,
    add: (e2) => {
      let t2 = w.value.findIndex((t3) => t3.id === e2.id);
      if (t2 === -1) w.value = [
        ...w.value,
        C(e2, {
          qty: 1
        })
      ];
      else {
        let e3 = w.value.slice();
        e3[t2] = C(e3[t2], {
          qty: e3[t2].qty + 1
        }), w.value = e3;
      }
    },
    remove: (e2) => {
      w.value = w.value.filter((t2) => t2.id !== e2);
    },
    clear: () => {
      w.value = [];
    },
    total: i(() => w.value.reduce((e2, t2) => e2 + t2.price * t2.qty, 0))
  });
  E = () => {
    let { cart: i2, products: b2 } = n(`useSetup:0:0`, () => s(() => {
      let e2 = T();
      return l(() => {
        console.info(`UseCart beforeCreate`);
      }), _(() => {
        console.info(`UseCart created`);
      }), p(() => {
        console.info(`UseCart mounted`);
      }), h(() => {
        console.info(`UseCart will unmount, cleanup here`);
      }), {
        cart: e2,
        products: [
          {
            id: 1,
            name: `\u82F9\u679C`,
            price: 3
          },
          {
            id: 2,
            name: `\u9999\u8549`,
            price: 2
          },
          {
            id: 3,
            name: `\u6A58\u5B50`,
            price: 4
          }
        ]
      };
    }));
    return m(() => {
      let n2 = v(`div`);
      e(n2, `max-w-3xl mx-auto p-6`);
      let s2 = v(`div`);
      c(n2, s2), e(s2, `card bg-base-100 shadow`);
      let l2 = v(`div`);
      c(s2, l2), e(l2, `card-body`);
      let p2 = v(`h2`);
      c(l2, p2), e(p2, `card-title`), c(p2, o(`\u8D2D\u7269\u8F66\u793A\u4F8B\uFF08useCart\uFF09`));
      let h2 = v(`div`);
      c(l2, h2), e(h2, `grid grid-cols-1 sm:grid-cols-2 gap-4`);
      let _2 = y(`rue:list:start`), C2 = y(`rue:list:end`);
      c(h2, _2), c(h2, C2);
      let w2 = /* @__PURE__ */ new Map();
      g(() => {
        w2 = S({
          items: b2 || [],
          getKey: (e2, t2) => e2.id,
          elements: w2,
          parent: h2,
          before: C2,
          start: _2,
          renderItem: (n3, s3, l3, p3, h3) => {
            d(m(() => {
              let s4 = u(), l4 = v(`div`);
              c(s4, l4), g(() => {
                a(l4, `key`, String(n3.id));
              }), e(l4, `card bg-base-100 border`);
              let d2 = v(`div`);
              c(l4, d2), e(d2, `card-body flex-row items-center justify-between gap-4`);
              let p4 = v(`span`);
              c(d2, p4), e(p4, `text-base-content`);
              let m2 = t(p4);
              c(p4, m2), g(() => {
                r(m2, n3.name);
              }), c(p4, o(` \uFFE5`));
              let h4 = t(p4);
              c(p4, h4), g(() => {
                r(h4, n3.price);
              });
              let _3 = v(`button`);
              return c(d2, _3), e(_3, `btn btn-primary btn-sm`), f(_3, `click`, () => i2.add(n3)), c(_3, o(`\u52A0\u5165`)), {
                vaporElement: s4
              };
            }), s3, l3, p3);
          }
        });
      });
      let T2 = v(`h3`);
      c(l2, T2), e(T2, `mt-4 text-xl font-semibold`), c(T2, o(`\u8D2D\u7269\u8F66`));
      let E2 = y(`rue:slot:start`), D = y(`rue:slot:end`);
      c(l2, E2), c(l2, D), g(() => {
        d(x(i2.items.value.length === 0 ? m(() => {
          let t2 = u(), n3 = v(`div`);
          return c(t2, n3), e(n3, `alert`), c(n3, o(`\u8D2D\u7269\u8F66\u4E3A\u7A7A`)), {
            vaporElement: t2
          };
        }) : m(() => {
          let n3 = u(), s3 = v(`ul`);
          c(n3, s3), e(s3, `divide-y divide-base-200 mt-2`);
          let l3 = y(`rue:list:start`), p3 = y(`rue:list:end`);
          c(s3, l3), c(s3, p3);
          let h3 = /* @__PURE__ */ new Map();
          return g(() => {
            h3 = S({
              items: i2.items.value || [],
              getKey: (e2, t2) => e2.id,
              elements: h3,
              parent: s3,
              before: p3,
              start: l3,
              renderItem: (n4, s4, l4, p4, h4) => {
                d(m(() => {
                  let s5 = u(), l5 = v(`li`);
                  c(s5, l5), g(() => {
                    a(l5, `key`, String(n4.id));
                  }), e(l5, `flex items-center justify-between py-3`);
                  let d2 = v(`span`);
                  c(l5, d2), e(d2, `text-base-content`);
                  let p5 = t(d2);
                  c(d2, p5), g(() => {
                    r(p5, n4.name);
                  });
                  let m2 = v(`span`);
                  c(d2, m2), e(m2, `badge badge-neutral ml-1`), c(m2, o(`x `));
                  let h5 = t(m2);
                  c(m2, h5), g(() => {
                    r(h5, n4.qty);
                  });
                  let _3 = v(`button`);
                  return c(l5, _3), e(_3, `btn btn-error btn-ghost btn-sm`), f(_3, `click`, () => i2.remove(n4.id)), c(_3, o(`\u79FB\u9664`)), {
                    vaporElement: s5
                  };
                }), s4, l4, p4);
              }
            });
          }), {
            vaporElement: n3
          };
        })), l2, E2, D);
      });
      let O = v(`p`);
      c(l2, O), e(O, `mt-4 text-right text-lg font-medium`), c(O, o(`\u603B\u4EF7\uFF1A\uFFE5`));
      let k = t(O);
      c(O, k), g(() => {
        r(k, i2.total.get());
      });
      let A = v(`div`);
      c(l2, A), e(A, `card-actions justify-end`);
      let j = v(`button`);
      return c(A, j), e(j, `btn btn-outline`), f(j, `click`, i2.clear), c(j, o(`\u6E05\u7A7A`)), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  E as default
};

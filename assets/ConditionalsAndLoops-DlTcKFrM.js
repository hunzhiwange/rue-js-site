import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, r as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as v, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as b, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
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
  x = () => {
    let { show: x2, list: S, toggleShow: C, pushNumber: w, popNumber: T, reverseList: E, activeTab: D } = n(`useSetup:0:0`, () => o(() => {
      console.log(`hello1`);
      let e2 = n(`ref:1:0`, () => h(true)), t2 = n(`ref:1:1`, () => h([
        1,
        2,
        3
      ]));
      console.log(`hello2`);
      let r2 = () => {
        e2.value = !e2.value;
      };
      console.log(`i am here1`);
      let i2 = () => {
        t2.value = [
          ...t2.value,
          t2.value.length + 1
        ];
      }, a2 = () => {
        t2.value = t2.value.slice(0, -1);
      }, o2 = () => {
        t2.value = [
          ...t2.value
        ].reverse();
      }, s2 = n(`ref:1:2`, () => h(`preview`));
      return console.log(`i am here2`), {
        show: e2,
        list: t2,
        toggleShow: r2,
        pushNumber: i2,
        popNumber: a2,
        reverseList: o2,
        activeTab: s2
      };
    }));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(v(b, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`\u6761\u4EF6\u4E0E\u5FAA\u73AF\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let b2 = p(`button`);
          s(h3, b2), i(b2, `role`, `tab`), f(() => {
            e(b2, String(`tab ${D.value === `preview` ? `tab-active` : ``}`));
          }), u(b2, `click`, () => {
            D.value = `preview`;
          }), s(b2, a(`\u6548\u679C`));
          let O = p(`button`);
          s(h3, O), i(O, `role`, `tab`), f(() => {
            e(O, String(`tab ${D.value === `code` ? `tab-active` : ``}`));
          }), u(O, `click`, () => {
            D.value = `code`;
          }), s(O, a(`\u4EE3\u7801`));
          let k = p(`div`);
          s(n3, k), e(k, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let A = m(`rue:slot:start`), j = m(`rue:slot:end`);
          s(k, A), s(k, j), f(() => {
            l(g(D.value === `code` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);
              let r2 = p(`div`);
              s(n4, r2), e(r2, `card-body p-0`);
              let i2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(r2, i2), s(r2, a2), f(() => {
                l(v(y, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';

const ConditionalsAndLoops: FC = () => {
  const show = ref(true);
  const list = ref<number[]>([1, 2, 3]);

  const toggleShow = () => {
    show.value = !show.value;
  };
  const pushNumber = () => {
    list.value = [...list.value, list.value.length + 1];
  };
  const popNumber = () => {
    list.value = list.value.slice(0, -1);
  };
  const reverseList = () => {
    list.value = [...list.value].reverse();
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={toggleShow}>
            Toggle List
          </button>
          <button className="btn btn-primary" onClick={pushNumber}>
            Push Number
          </button>
          <button className="btn btn-primary" onClick={popNumber}>
            Pop Number
          </button>
          <button className="btn btn-primary" onClick={reverseList}>
            Reverse List
          </button>
        </div>

        {show.value && list.value.length ? (
          <ul className="list-disc pl-6 space-y-1">
            {list.value.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : list.value.length ? (
          <p className="text-gray-700">List is not empty, but hidden.</p>
        ) : (
          <p className="text-gray-700">List is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ConditionalsAndLoops;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), k, A, j);
          }), s(k, a(` `));
          let M = m(`rue:slot:start`), N = m(`rue:slot:end`);
          return s(k, M), s(k, N), f(() => {
            l(g(D.value === `preview` ? d(() => {
              let n4 = c(), o4 = p(`div`);
              s(n4, o4), e(o4, `card bg-base-100 shadow`);
              let h4 = p(`div`);
              s(o4, h4), e(h4, `card-body grid gap-4`);
              let y2 = p(`div`);
              s(h4, y2), e(y2, `flex flex-wrap gap-2`);
              let b3 = p(`button`);
              s(y2, b3), e(b3, `btn btn-primary`), u(b3, `click`, C), s(b3, a(`Toggle List`));
              let D2 = p(`button`);
              s(y2, D2), e(D2, `btn btn-primary`), u(D2, `click`, w), s(D2, a(`Push Number`));
              let O2 = p(`button`);
              s(y2, O2), e(O2, `btn btn-primary`), u(O2, `click`, T), s(O2, a(`Pop Number`));
              let k2 = p(`button`);
              s(y2, k2), e(k2, `btn btn-primary`), u(k2, `click`, E), s(k2, a(`Reverse List`));
              let A2 = m(`rue:slot:start`), j2 = m(`rue:slot:end`);
              return s(h4, A2), s(h4, j2), f(() => {
                l(g(x2.value && S.value.length ? d(() => {
                  let n5 = c(), a2 = p(`ul`);
                  s(n5, a2), e(a2, `list-disc pl-6 space-y-1`);
                  let o5 = m(`rue:list:start`), u2 = m(`rue:list:end`);
                  s(a2, o5), s(a2, u2);
                  let h5 = /* @__PURE__ */ new Map();
                  return f(() => {
                    h5 = _({
                      items: S.value || [],
                      getKey: (e2, t2) => e2,
                      elements: h5,
                      parent: a2,
                      before: u2,
                      start: o5,
                      renderItem: (e2, n6, a3, o6, u3) => {
                        l(d(() => {
                          let n7 = c(), a4 = p(`li`);
                          s(n7, a4), f(() => {
                            i(a4, `key`, String(e2));
                          });
                          let o7 = t(a4);
                          return s(a4, o7), f(() => {
                            r(o7, e2);
                          }), {
                            vaporElement: n7
                          };
                        }), n6, a3, o6);
                      }
                    });
                  }), {
                    vaporElement: n5
                  };
                }) : S.value.length ? v(`p`, {
                  className: `text-gray-700`,
                  children: `List is not empty, but hidden.`
                }) : v(`p`, {
                  className: `text-gray-700`,
                  children: `List is empty.`
                })), h4, A2, j2);
              }), {
                vaporElement: n4
              };
            }) : ``), k, M, N);
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
  x as default
};

import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, g as c, m as l, q as u, x as d, y as f, z as p, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as m, r as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as _, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as v, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let b;
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
  let y;
  y = (e2) => l(() => {
    let t2 = d(`span`), n2 = f(`rue:slot:start`), r2 = f(`rue:slot:end`);
    return a(t2, n2), a(t2, r2), u(() => {
      let i2 = e2.todo.text;
      s(m(i2), t2, n2, r2);
    }), {
      vaporElement: t2
    };
  });
  b = () => {
    let { groceryList: b2, activeTab: x } = t(`useSetup:0:0`, () => i(() => ({
      groceryList: t(`ref:1:0`, () => p([
        {
          id: 0,
          text: `Vegetables`
        },
        {
          id: 1,
          text: `Cheese`
        },
        {
          id: 2,
          text: `Whatever else humans are supposed to eat`
        }
      ])),
      activeTab: t(`ref:1:1`, () => p(`preview`))
    })));
    return l(() => {
      let t2 = o(), i2 = f(`rue:component:start`), p2 = f(`rue:component:end`);
      return a(t2, i2), a(t2, p2), s(g(v, {
        children: l(() => {
          let t3 = o(), i3 = d(`h1`);
          a(t3, i3), e(i3, `text-5xl font-semibold mb-4 md:mb-4`), a(i3, r(`\u7B80\u5355\u7EC4\u4EF6\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let p3 = d(`div`);
          a(t3, p3), n(p3, `role`, `tablist`), e(p3, `tabs tabs-box`);
          let v2 = d(`button`);
          a(p3, v2), n(v2, `role`, `tab`), u(() => {
            e(v2, String(`tab ${x.value === `preview` ? `tab-active` : ``}`));
          }), c(v2, `click`, () => {
            x.value = `preview`;
          }), a(v2, r(`\u6548\u679C`));
          let S = d(`button`);
          a(p3, S), n(S, `role`, `tab`), u(() => {
            e(S, String(`tab ${x.value === `code` ? `tab-active` : ``}`));
          }), c(S, `click`, () => {
            x.value = `code`;
          }), a(S, r(`\u4EE3\u7801`));
          let C = d(`div`);
          a(t3, C), e(C, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let w = f(`rue:slot:start`), T = f(`rue:slot:end`);
          a(C, w), a(C, T), u(() => {
            s(m(x.value === `code` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);
              let r2 = d(`div`);
              a(n2, r2), e(r2, `card-body p-0`);
              let i4 = f(`rue:component:start`), c2 = f(`rue:component:end`);
              return a(r2, i4), a(r2, c2), u(() => {
                s(g(_, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';

type Item = { id: number; text: string };

const TodoItem: FC<{ todo: Item }> = (props) => (
  <span>{props.todo.text}</span>
);

const SimpleComponent: FC = () => {
  const groceryList = ref<Item[]>([
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' },
  ]);
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-2">
        <ol className="list-decimal pl-6 space-y-2">
          {groceryList.value.map(item => (
            <li key={item.id} className="px-3 py-2 rounded-md bg-base-200">
              <TodoItem todo={item} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SimpleComponent;`
                }), r2, i4, c2);
              }), {
                vaporElement: t4
              };
            }) : ``), C, w, T);
          }), a(C, r(` `));
          let E = f(`rue:slot:start`), D = f(`rue:slot:end`);
          return a(C, E), a(C, D), u(() => {
            s(m(x.value === `preview` ? l(() => {
              let t4 = o(), r2 = d(`div`);
              a(t4, r2), e(r2, `card bg-base-100 shadow`);
              let i4 = d(`div`);
              a(r2, i4), e(i4, `card-body grid gap-2`);
              let c2 = d(`ol`);
              a(i4, c2), e(c2, `list-decimal pl-6 space-y-2`);
              let p4 = f(`rue:list:start`), m2 = f(`rue:list:end`);
              a(c2, p4), a(c2, m2);
              let _2 = /* @__PURE__ */ new Map();
              return u(() => {
                _2 = h({
                  items: b2.value || [],
                  getKey: (e2, t5) => e2.id,
                  elements: _2,
                  parent: c2,
                  before: m2,
                  start: p4,
                  renderItem: (t5, r3, i5, c3, p5) => {
                    s(l(() => {
                      let r4 = o(), i6 = d(`li`);
                      a(r4, i6), u(() => {
                        n(i6, `key`, String(t5.id));
                      }), e(i6, `px-3 py-2 rounded-md bg-base-200`);
                      let c4 = f(`rue:component:start`), l2 = f(`rue:component:end`);
                      return a(i6, c4), a(i6, l2), u(() => {
                        s(g(y, {
                          todo: t5
                        }), i6, c4, l2);
                      }), {
                        vaporElement: r4
                      };
                    }), r3, i5, c3);
                  }
                });
              }), {
                vaporElement: t4
              };
            }) : ``), C, E, D);
          }), {
            vaporElement: t3
          };
        })
      }), t2, i2, p2), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  b as default
};

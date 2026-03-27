import { A as e, C as t, G as n, I as r, L as i, O as a, S as o, U as s, _ as c, b as l, f as u, g as d, m as f, q as p, x as m, y as h, z as g, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as _, r as v, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as y, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as b, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as x, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
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
  let S;
  S = (a2) => {
    let { isOpen: b2, isFolder: x2, toggle: C2, addChild: w, changeType: T } = n(`useSetup:0:0`, () => s(() => {
      let e2 = n(`ref:1:0`, () => g(false)), t2 = n(`computed:1:1`, () => i(() => !!a2.model.children && a2.model.children.length > 0)), r2 = () => {
        e2.value = !e2.value;
      }, o2 = () => {
        (a2.model.children = a2.model.children || []).push({
          name: `new stuff`
        });
      };
      return {
        isOpen: e2,
        isFolder: t2,
        toggle: r2,
        addChild: o2,
        changeType: () => {
          t2.get() || (a2.model.children = [], o2(), e2.value = true);
        }
      };
    }));
    return f(() => {
      let n2 = m(`li`), i2 = m(`div`);
      c(n2, i2), p(() => {
        e(i2, String(`${x2.get() ? `font-bold` : ``} cursor-pointer leading-6 ${a2.className || ``}`));
      }), d(i2, `click`, C2), d(i2, `dblclick`, T);
      let s2 = t(i2);
      c(i2, s2), p(() => {
        r(s2, a2.model.name);
      }), c(i2, o(` `));
      let g2 = h(`rue:slot:start`), E = h(`rue:slot:end`);
      c(i2, g2), c(i2, E), p(() => {
        u(_(x2.get() ? f(() => {
          let n3 = l(), i3 = m(`span`);
          c(n3, i3), e(i3, `ml-2`), c(i3, o(`[`));
          let a3 = t(i3);
          return c(i3, a3), p(() => {
            r(a3, b2.value ? `-` : `+`);
          }), c(i3, o(`]`)), {
            vaporElement: n3
          };
        }) : ``), i2, g2, E);
      });
      let D = h(`rue:slot:start`), O = h(`rue:slot:end`);
      return c(n2, D), c(n2, O), p(() => {
        u(_(x2.get() && b2.value ? f(() => {
          let t2 = l(), n3 = m(`ul`);
          c(t2, n3), e(n3, `pl-6`);
          let r2 = h(`rue:list:start`), i3 = h(`rue:list:end`);
          c(n3, r2), c(n3, i3);
          let s3 = /* @__PURE__ */ new Map();
          p(() => {
            s3 = v({
              items: a2.model.children || [],
              getKey: (e2, t3) => t3,
              elements: s3,
              parent: n3,
              before: i3,
              start: r2,
              renderItem: (e2, t3, n4, r3, i4) => {
                u(f(() => {
                  let t4 = l(), n5 = h(`rue:component:start`), r4 = h(`rue:component:end`);
                  return c(t4, n5), c(t4, r4), p(() => {
                    u(y(S, {
                      className: `item`,
                      model: e2
                    }, i4), t4, n5, r4);
                  }), {
                    vaporElement: t4
                  };
                }), t3, n4, r3);
              }
            });
          });
          let g3 = m(`li`);
          return c(n3, g3), e(g3, `item text-emerald-600 select-none`), d(g3, `click`, w), c(g3, o(`+`)), {
            vaporElement: t2
          };
        }) : ``), n2, D, O);
      }), {
        vaporElement: n2
      };
    });
  };
  C = () => {
    let { treeData: t2, activeTab: r2 } = n(`useSetup:0:0`, () => s(() => ({
      treeData: n(`ref:1:2`, () => g({
        name: `My Tree`,
        children: [
          {
            name: `hello`
          },
          {
            name: `world`
          },
          {
            name: `child folder`,
            children: [
              {
                name: `child folder`,
                children: [
                  {
                    name: `hello`
                  },
                  {
                    name: `world`
                  }
                ]
              },
              {
                name: `hello`
              },
              {
                name: `world`
              },
              {
                name: `child folder`,
                children: [
                  {
                    name: `hello`
                  },
                  {
                    name: `world`
                  }
                ]
              }
            ]
          }
        ]
      })),
      activeTab: n(`ref:1:3`, () => g(`preview`))
    })));
    return f(() => {
      let n2 = l(), i2 = h(`rue:component:start`), s2 = h(`rue:component:end`);
      return c(n2, i2), c(n2, s2), u(y(x, {
        children: f(() => {
          let n3 = l(), i3 = m(`h1`);
          c(n3, i3), e(i3, `text-5xl font-semibold mb-4 md:mb-4`), c(i3, o(`\u6811\u72B6\u89C6\u56FE\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let s3 = m(`div`);
          c(n3, s3), a(s3, `role`, `tablist`), e(s3, `tabs tabs-box`);
          let g2 = m(`button`);
          c(s3, g2), a(g2, `role`, `tab`), p(() => {
            e(g2, String(`tab ${r2.value === `preview` ? `tab-active` : ``}`));
          }), d(g2, `click`, () => {
            r2.value = `preview`;
          }), c(g2, o(`\u6548\u679C`));
          let v2 = m(`button`);
          c(s3, v2), a(v2, `role`, `tab`), p(() => {
            e(v2, String(`tab ${r2.value === `code` ? `tab-active` : ``}`));
          }), d(v2, `click`, () => {
            r2.value = `code`;
          }), c(v2, o(`\u4EE3\u7801`));
          let x2 = m(`div`);
          c(n3, x2), e(x2, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let C2 = h(`rue:slot:start`), w = h(`rue:slot:end`);
          c(x2, C2), c(x2, w), p(() => {
            u(_(r2.value === `code` ? f(() => {
              let t3 = l(), n4 = m(`div`);
              c(t3, n4), e(n4, `card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);
              let r3 = m(`div`);
              c(n4, r3), e(r3, `card-body p-0`);
              let i4 = h(`rue:component:start`), a2 = h(`rue:component:end`);
              return c(r3, i4), c(r3, a2), p(() => {
                u(y(b, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref, computed } from 'rues';

type Node = { name: string; children?: Node[] };

const TreeItem: FC<{ model: Node; className?: string }> = (props) => {
  const isOpen = ref(false);
  const isFolder = computed(() => !!props.model.children && props.model.children.length > 0);
  const toggle = () => { isOpen.value = !isOpen.value; };
  const addChild = () => { (props.model.children = props.model.children || []).push({ name: 'new stuff' }); };
  const changeType = () => {
    if (!isFolder.value) {
      props.model.children = [];
      addChild();
      isOpen.value = true;
    }
  };
  return (
    <li>
      <div className={\`
        \${isFolder.value ? 'font-bold' : ''} cursor-pointer leading-6      \`} onClick={toggle} onDblClick={changeType}>
        {props.model.name}
        {isFolder.value ? (<span className="ml-2">[{isOpen.value ? '-' : '+'}]</span>) : null}
      </div>
      {isFolder.value && isOpen.value ? (
        <ul className="pl-6">
          {props.model.children!.map((m, idx) => (
            <TreeItem key={idx} className="item" model={m} />
          ))}
          <li className="item text-emerald-600 select-none" onClick={addChild}>+</li>
        </ul>
      ) : null}
    </li>
  );
};

const TreeView: FC = () => {
  const treeData = ref<Node>({
    name: 'My Tree',
    children: [
      { name: 'hello' },
      { name: 'world' },
      {
        name: 'child folder',
        children: [
          { name: 'child folder', children: [{ name: 'hello' }, { name: 'world' }] },
          { name: 'hello' },
          { name: 'world' },
          { name: 'child folder', children: [{ name: 'hello' }, { name: 'world' }] },
        ],
      },
    ],
  });
  return (
    <div className="grid gap-4">
      <ul>
        <TreeItem className="item" model={treeData.value} />
      </ul>
    </div>
  );
};

export default TreeView;`
                }), r3, i4, a2);
              }), {
                vaporElement: t3
              };
            }) : ``), x2, C2, w);
          }), c(x2, o(` `));
          let T = h(`rue:slot:start`), E = h(`rue:slot:end`);
          return c(x2, T), c(x2, E), p(() => {
            u(_(r2.value === `preview` ? f(() => {
              let n4 = l(), r3 = m(`div`);
              c(n4, r3), e(r3, `card bg-base-100 shadow`);
              let i4 = m(`div`);
              c(r3, i4), e(i4, `card-body grid gap-4`);
              let a2 = m(`ul`);
              c(i4, a2);
              let o2 = h(`rue:component:start`), s4 = h(`rue:component:end`);
              return c(a2, o2), c(a2, s4), p(() => {
                u(y(S, {
                  className: `item`,
                  model: t2.value
                }), a2, o2, s4);
              }), {
                vaporElement: n4
              };
            }) : ``), x2, T, E);
          }), {
            vaporElement: n3
          };
        })
      }), n2, i2, s2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  C as default
};

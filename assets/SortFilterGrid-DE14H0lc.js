import { A as e, C as t, F as n, G as r, I as i, L as a, O as o, S as s, U as c, _ as l, b as u, f as d, g as f, m as p, q as m, x as h, y as g, z as _, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as v, r as y, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as b, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as x, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as S, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let w;
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
  let C;
  C = (n2) => {
    let { sortKey: b2, sortOrders: x2, filteredData: S2, sortBy: C2, capitalize: w2 } = r(`useSetup:0:0`, () => c(() => {
      let e2 = r(`ref:1:0`, () => _(``)), t2 = r(`ref:1:1`, () => _(n2.columns.reduce((e3, t3) => (e3[t3] = 1, e3), {})));
      return {
        sortKey: e2,
        sortOrders: t2,
        filteredData: r(`computed:1:2`, () => a(() => {
          let r2 = n2.data, i2 = n2.filterKey;
          if (i2) {
            let e3 = String(i2).toLowerCase();
            r2 = r2.filter((t3) => Object.keys(t3).some((n3) => String(t3[n3]).toLowerCase().includes(e3)));
          }
          let a2 = e2.value;
          if (a2) {
            let e3 = t2.value[a2];
            r2 = r2.slice().sort((t3, n3) => {
              let r3 = t3[a2], i3 = n3[a2];
              return (r3 === i3 ? 0 : r3 > i3 ? 1 : -1) * e3;
            });
          }
          return r2;
        })),
        sortBy: (n3) => {
          e2.value = n3, t2.value[n3] = (t2.value[n3] || 1) * -1;
        },
        capitalize: (e3) => e3.charAt(0).toUpperCase() + e3.slice(1)
      };
    }));
    return p(() => {
      let r2 = h(`div`), a2 = g(`rue:slot:start`), c2 = g(`rue:slot:end`);
      return l(r2, a2), l(r2, c2), m(() => {
        d(v(S2.get().length ? p(() => {
          let r3 = u(), a3 = h(`table`);
          l(r3, a3), e(a3, `min-w-full border-2 border-emerald-500 rounded-md bg-white`);
          let s2 = h(`thead`);
          l(a3, s2);
          let c3 = h(`tr`);
          l(s2, c3);
          let _2 = g(`rue:list:start`), v2 = g(`rue:list:end`);
          l(c3, _2), l(c3, v2);
          let T = /* @__PURE__ */ new Map();
          m(() => {
            T = y({
              items: n2.columns || [],
              getKey: (e2, t2) => e2,
              elements: T,
              parent: c3,
              before: v2,
              start: _2,
              renderItem: (n3, r4, a4, s3, c4) => {
                d(p(() => {
                  let r5 = u(), a5 = h(`th`);
                  l(r5, a5), m(() => {
                    o(a5, `key`, String(n3));
                  }), m(() => {
                    e(a5, String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${b2.value === n3 ? `text-white` : ``}`));
                  }), f(a5, `click`, () => C2(n3));
                  let s4 = t(a5);
                  l(a5, s4), m(() => {
                    i(s4, w2(n3));
                  });
                  let c5 = h(`span`);
                  return l(a5, c5), m(() => {
                    e(c5, String(`ml-2 inline-block align-middle opacity-80 ${x2.value[n3] > 0 ? `border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0` : `border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`));
                  }), {
                    vaporElement: r5
                  };
                }), r4, a4, s3);
              }
            });
          });
          let E = h(`tbody`);
          l(a3, E);
          let D = g(`rue:list:start`), O = g(`rue:list:end`);
          l(E, D), l(E, O);
          let k = /* @__PURE__ */ new Map();
          return m(() => {
            k = y({
              items: S2.get() || [],
              getKey: (e2, t2) => t2,
              elements: k,
              parent: E,
              before: O,
              start: D,
              renderItem: (r4, a4, s3, c4, f2) => {
                d(p(() => {
                  let a5 = u(), s4 = h(`tr`);
                  l(a5, s4), m(() => {
                    o(s4, `key`, String(f2));
                  });
                  let c5 = g(`rue:list:start`), _3 = g(`rue:list:end`);
                  l(s4, c5), l(s4, _3);
                  let v3 = /* @__PURE__ */ new Map();
                  return m(() => {
                    v3 = y({
                      items: n2.columns || [],
                      getKey: (e2, t2) => e2,
                      elements: v3,
                      parent: s4,
                      before: _3,
                      start: c5,
                      renderItem: (n3, a6, s5, c6, f3) => {
                        d(p(() => {
                          let a7 = u(), s6 = h(`td`);
                          l(a7, s6), m(() => {
                            o(s6, `key`, String(n3));
                          }), e(s6, `bg-gray-50 min-w-[120px] px-5 py-2`);
                          let c7 = t(s6);
                          return l(s6, c7), m(() => {
                            i(c7, String(r4[n3]));
                          }), {
                            vaporElement: a7
                          };
                        }), a6, s5, c6);
                      }
                    });
                  }), {
                    vaporElement: a5
                  };
                }), a4, s3, c4);
              }
            });
          }), {
            vaporElement: r3
          };
        }) : p(() => {
          let t2 = u(), n3 = h(`p`);
          return l(t2, n3), e(n3, `text-gray-700`), l(n3, s(`No matches found.`)), {
            vaporElement: t2
          };
        })), r2, a2, c2);
      }), {
        vaporElement: r2
      };
    });
  };
  w = () => {
    let { searchQuery: t2, gridColumns: i2, gridData: a2, updateQuery: y2, activeTab: w2 } = r(`useSetup:0:0`, () => c(() => {
      let e2 = r(`ref:1:3`, () => _(``));
      return {
        searchQuery: e2,
        gridColumns: [
          `name`,
          `power`
        ],
        gridData: [
          {
            name: `Chuck Norris`,
            power: 1 / 0
          },
          {
            name: `Bruce Lee`,
            power: 9e3
          },
          {
            name: `Jackie Chan`,
            power: 7e3
          },
          {
            name: `Jet Li`,
            power: 8e3
          }
        ],
        updateQuery: (t3) => {
          e2.value = t3.target.value;
        },
        activeTab: r(`ref:1:4`, () => _(`preview`))
      };
    }));
    return p(() => {
      let r2 = u(), c2 = g(`rue:component:start`), _2 = g(`rue:component:end`);
      return l(r2, c2), l(r2, _2), d(b(S, {
        children: p(() => {
          let r3 = u(), c3 = h(`h1`);
          l(r3, c3), e(c3, `text-5xl font-semibold mb-4 md:mb-4`), l(c3, s(`\u5E26\u6709\u6392\u5E8F\u548C\u8FC7\u6EE4\u5668\u7684\u7F51\u683C\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let _3 = h(`div`);
          l(r3, _3), o(_3, `role`, `tablist`), e(_3, `tabs tabs-box`);
          let S2 = h(`button`);
          l(_3, S2), o(S2, `role`, `tab`), m(() => {
            e(S2, String(`tab ${w2.value === `preview` ? `tab-active` : ``}`));
          }), f(S2, `click`, () => {
            w2.value = `preview`;
          }), l(S2, s(`\u6548\u679C`));
          let T = h(`button`);
          l(_3, T), o(T, `role`, `tab`), m(() => {
            e(T, String(`tab ${w2.value === `code` ? `tab-active` : ``}`));
          }), f(T, `click`, () => {
            w2.value = `code`;
          }), l(T, s(`\u4EE3\u7801`));
          let E = h(`div`);
          l(r3, E), e(E, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let D = g(`rue:slot:start`), O = g(`rue:slot:end`);
          l(E, D), l(E, O), m(() => {
            d(v(w2.value === `code` ? p(() => {
              let t3 = u(), n2 = h(`div`);
              l(t3, n2), e(n2, `card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);
              let r4 = h(`div`);
              l(n2, r4), e(r4, `card-body p-0`);
              let i3 = g(`rue:component:start`), a3 = g(`rue:component:end`);
              return l(r4, i3), l(r4, a3), m(() => {
                d(b(x, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref, computed } from 'rues';

type Row = Record<string, string | number>;

const DemoGrid: FC<{ data: Row[]; columns: string[]; filterKey: string }> = (props) => {
  const sortKey = ref<string>('');
  const sortOrders = ref<Record<string, number>>(props.columns.reduce((o, k) => { (o as any)[k] = 1; return o; }, {} as Record<string, number>));

  const filteredData = computed(() => {
    let data: Row[] = props.data;
    let filterKey = props.filterKey;
    if (filterKey) {
      const q = String(filterKey).toLowerCase();
      data = data.filter((row) => Object.keys(row).some((key) => String(row[key]).toLowerCase().includes(q)));
    }
    const key = sortKey.value;
    if (key) {
      const order = sortOrders.value[key];
      data = data.slice().sort((a, b) => {
        const av = a[key] as any;
        const bv = b[key] as any;
        return (av === bv ? 0 : av > bv ? 1 : -1) * order;
      });
    }
    return data;
  });

  const sortBy = (key: string) => {
    sortKey.value = key;
    sortOrders.value[key] = (sortOrders.value[key] || 1) * -1;
  };

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div>
      {filteredData.value.length ? (
        <table className="min-w-full border-2 border-emerald-500 rounded-md bg-white">
          <thead>
            <tr>
              {props.columns.map((key) => (
                <th
                  key={key}
                  className={\`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 \${sortKey.value === key ? 'text-white' : ''}\`}
                  onClick={() => sortBy(key)}
                >
                  {capitalize(key)}
                  <span className={\`ml-2 inline-block align-middle opacity-80 \${sortOrders.value[key] > 0 ? 'border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0' : 'border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0'}\`}></span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.value.map((entry, idx) => (
              <tr key={idx}>
                {props.columns.map((key) => (
                  <td key={key} className="bg-gray-50 min-w-[120px] px-5 py-2">{String(entry[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No matches found.</p>
      )}
    </div>
  );
};

const SortFilterGrid: FC = () => {
  const searchQuery = ref('');
  const gridColumns = ['name', 'power'];
  const gridData: Row[] = [
    { name: 'Chuck Norris', power: Infinity },
    { name: 'Bruce Lee', power: 9000 },
    { name: 'Jackie Chan', power: 7000 },
    { name: 'Jet Li', power: 8000 },
  ];
  const updateQuery = (e: any) => { searchQuery.value = (e.target as HTMLInputElement).value; };
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <form id="search" className="flex items-center gap-2">
          <span>Search</span>
          <input
            name="query"
            className="input input-bordered"
            value={searchQuery.value}
            onInput={updateQuery}
          />
        </form>
        <DemoGrid data={gridData} columns={gridColumns} filterKey={searchQuery.value} />
      </div>
    </div>
  );
};

export default SortFilterGrid;`
                }), r4, i3, a3);
              }), {
                vaporElement: t3
              };
            }) : ``), E, D, O);
          }), l(E, s(` `));
          let k = g(`rue:slot:start`), A = g(`rue:slot:end`);
          return l(E, k), l(E, A), m(() => {
            d(v(w2.value === `preview` ? p(() => {
              let r4 = u(), c4 = h(`div`);
              l(r4, c4), e(c4, `card bg-base-100 shadow`);
              let p2 = h(`div`);
              l(c4, p2), e(p2, `card-body grid gap-4`);
              let _4 = h(`form`);
              l(p2, _4), o(_4, `id`, `search`), e(_4, `flex items-center gap-2`);
              let v2 = h(`span`);
              l(_4, v2), l(v2, s(`Search`));
              let x2 = h(`input`);
              l(_4, x2), o(x2, `name`, `query`), e(x2, `input input-bordered`), m(() => {
                n(x2, t2.value);
              }), f(x2, `input`, y2);
              let S3 = g(`rue:component:start`), w3 = g(`rue:component:end`);
              return l(p2, S3), l(p2, w3), m(() => {
                d(b(C, {
                  data: a2,
                  columns: i2,
                  filterKey: t2.value
                }), p2, S3, w3);
              }), {
                vaporElement: r4
              };
            }) : ``), E, k, A);
          }), {
            vaporElement: r3
          };
        })
      }), r2, c2, _2), {
        vaporElement: r2
      };
    });
  };
});
export {
  __tla,
  w as default
};

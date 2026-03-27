import { A as e, C as t, F as n, G as r, I as i, L as a, O as o, R as s, S as c, U as l, _ as u, b as d, f, g as p, m, q as h, x as g, y as _, z as v, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as y, r as b, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as x, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as S, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as C, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let D;
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
  function w(e2, t2, n2) {
    let r2 = -e2 * 0.8, i2 = Math.PI * 2 / n2 * t2, a2 = Math.cos(i2), o2 = Math.sin(i2);
    return {
      x: 0 * a2 - r2 * o2 + 100,
      y: 0 * o2 + r2 * a2 + 100
    };
  }
  let T, E;
  T = (e2) => {
    let { point: t2 } = r(`useSetup:0:0`, () => l(() => ({
      point: r(`computed:1:0`, () => a(() => w(+e2.stat.value + 10, e2.index, e2.total)))
    })));
    return m(() => {
      let n2 = g(`text`);
      h(() => {
        o(n2, `x`, String(t2.get().x));
      }), h(() => {
        o(n2, `y`, String(t2.get().y));
      });
      let r2 = _(`rue:slot:start`), i2 = _(`rue:slot:end`);
      return u(n2, r2), u(n2, i2), h(() => {
        let t3 = e2.stat.label;
        f(y(t3), n2, r2, i2);
      }), {
        vaporElement: n2
      };
    });
  };
  E = (e2) => {
    let { points: t2 } = r(`useSetup:0:0`, () => l(() => ({
      points: r(`computed:1:1`, () => a(() => {
        let t3 = e2.stats.length;
        return e2.stats.map((e3, n2) => {
          let { x: r2, y: i2 } = w(e3.value, n2, t3);
          return `${r2},${i2}`;
        }).join(` `);
      }))
    })));
    return m(() => {
      let n2 = g(`g`), r2 = g(`polygon`);
      u(n2, r2), h(() => {
        o(r2, `points`, String(t2.get()));
      });
      let i2 = g(`circle`);
      u(n2, i2), h(() => {
        o(i2, `cx`, `100`);
      }), h(() => {
        o(i2, `cy`, `100`);
      }), h(() => {
        o(i2, `r`, `80`);
      });
      let a2 = _(`rue:list:start`), s2 = _(`rue:list:end`);
      u(n2, a2), u(n2, s2);
      let c2 = /* @__PURE__ */ new Map();
      return h(() => {
        c2 = b({
          items: e2.stats || [],
          getKey: (e3, t3) => e3.label + t3,
          elements: c2,
          parent: a2.parentNode,
          before: s2,
          start: a2,
          renderItem: (t3, n3, r3, i3, a3) => {
            f(m(() => {
              let n4 = d(), r4 = _(`rue:component:start`), i4 = _(`rue:component:end`);
              return u(n4, r4), u(n4, i4), h(() => {
                f(x(T, {
                  stat: t3,
                  index: a3,
                  total: e2.stats.length
                }, t3.label + a3), n4, r4, i4);
              }), {
                vaporElement: n4
              };
            }), n3, r3, i3);
          }
        });
      }), {
        vaporElement: n2
      };
    });
  };
  D = () => {
    let { newLabel: a2, stats: w2, activeTab: T2, add: D2, remove: O, updateValue: k } = r(`useSetup:0:0`, () => l(() => {
      let e2 = r(`ref:1:2`, () => v(``)), t2 = r(`reactive:1:3`, () => s([
        {
          label: `A`,
          value: 100
        },
        {
          label: `B`,
          value: 100
        },
        {
          label: `C`,
          value: 100
        },
        {
          label: `D`,
          value: 100
        },
        {
          label: `E`,
          value: 100
        },
        {
          label: `F`,
          value: 100
        }
      ]));
      return {
        newLabel: e2,
        stats: t2,
        activeTab: r(`ref:1:4`, () => v(`preview`)),
        add: (n2) => {
          n2.preventDefault(), e2.value.trim() && (t2.push({
            label: e2.value,
            value: 100
          }), e2.value = ``);
        },
        remove: (e3) => {
          t2.length > 3 ? t2.splice(t2.indexOf(e3), 1) : alert(`Can't delete more!`);
        },
        updateValue: (e3, t3) => {
          e3.value = Number(t3.target.value);
        }
      };
    }));
    return m(() => {
      let r2 = d(), s2 = _(`rue:component:start`), l2 = _(`rue:component:end`);
      return u(r2, s2), u(r2, l2), f(x(C, {
        children: m(() => {
          let r3 = d(), s3 = g(`style`);
          u(r3, s3), h(() => {
            i(s3, `
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`);
          });
          let l3 = g(`h1`);
          u(r3, l3), e(l3, `text-5xl font-semibold mb-4 md:mb-4`), u(l3, c(`SVG \u56FE\u50CF\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let v2 = g(`div`);
          u(r3, v2), o(v2, `role`, `tablist`), e(v2, `tabs tabs-box`);
          let C2 = g(`button`);
          u(v2, C2), o(C2, `role`, `tab`), h(() => {
            e(C2, String(`tab ${T2.value === `preview` ? `tab-active` : ``}`));
          }), p(C2, `click`, () => {
            T2.value = `preview`;
          }), u(C2, c(`\u6548\u679C`));
          let A = g(`button`);
          u(v2, A), o(A, `role`, `tab`), h(() => {
            e(A, String(`tab ${T2.value === `code` ? `tab-active` : ``}`));
          }), p(A, `click`, () => {
            T2.value = `code`;
          }), u(A, c(`\u4EE3\u7801`));
          let j = g(`div`);
          u(r3, j), e(j, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let M = _(`rue:slot:start`), N = _(`rue:slot:end`);
          u(j, M), u(j, N), h(() => {
            f(y(T2.value === `code` ? m(() => {
              let t2 = d(), n2 = g(`div`);
              u(t2, n2), e(n2, `card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);
              let r4 = _(`rue:component:start`), i2 = _(`rue:component:end`);
              return u(n2, r4), u(n2, i2), h(() => {
                f(x(S, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref, reactive, computed } from 'rues';

type Stat = { label: string; value: number };

function valueToPoint(value: number, index: number, total: number) {
  const x = 0;
  const y = -value * 0.8;
  const angle = ((Math.PI * 2) / total) * index;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = x * cos - y * sin + 100;
  const ty = x * sin + y * cos + 100;
  return { x: tx, y: ty };
}

const AxisLabel: FC<{ stat: Stat; index: number; total: number }> = (props) => {
  const point = computed(() => valueToPoint(+props.stat.value + 10, props.index, props.total));
  return <text x={point.value.x} y={point.value.y}>{props.stat.label}</text>;
};

const PolyGraph: FC<{ stats: Stat[] }> = (props) => {
  const points = computed(() => {
    const total = props.stats.length;
    return props.stats
      .map((stat, i) => {
        const { x, y } = valueToPoint(stat.value, i, total);
        return '\${x},\${y}';
      })
      .join(' ');
  });
  return (
    <g>
      <polygon points={points.value}></polygon>
      <circle cx={100} cy={100} r={80}></circle>
      {props.stats.map((stat, index) => (
        <AxisLabel key={stat.label + index} stat={stat} index={index} total={props.stats.length} />
      ))}
    </g>
  );
};

const SVGGraph: FC = () => {
  const newLabel = ref('');
  const stats = reactive<Stat[]>([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 100 },
  ]);
  const add = (e: any) => { e.preventDefault(); if (!newLabel.value.trim()) return; stats.push({ label: newLabel.value, value: 100 }); newLabel.value = ''; };
  const remove = (stat: Stat) => { if (stats.length > 3) { stats.splice(stats.indexOf(stat), 1); } else { alert("Can't delete more!"); } };
  const updateValue = (s: Stat, e: any) => { s.value = Number((e.target as HTMLInputElement).value); };
  return (
      <>
      <style>{\`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph .raw { padding: 10px; }
\`}</style>
      <div className="card bg-base-100 shadow">
        <div className="card-body grid gap-4 rue-svg-graph">
          <svg width={200} height={200}>
            <PolyGraph stats={stats} />
          </svg>
          <div className="grid gap-3">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center gap-3">
                <label>{stat.label}</label>
                <input
                  type="range"
                  className="range range-primary flex-1"
                  value={stat.value}
                  min={0}
                  max={100}
                  onInput={(e: any) => updateValue(stat, e)}
                />
                <span className="w-10 text-right">{stat.value}</span>
                <button className="btn btn-error btn-sm" onClick={() => remove(stat)}>
                  X
                </button>
              </div>
            ))}
          </div>
          <form className="flex items-center gap-2" onSubmit={add}>
            <input
              name="newlabel"
              className="input input-bordered"
              value={newLabel.value}
              onInput={(e: any) => {
                newLabel.value = (e.target as HTMLInputElement).value
              }}
            />
            <button className="btn btn-success" onClick={add}>
              Add a Stat
            </button>
          </form>
          <pre className="raw">{JSON.stringify(stats, null, 2)}</pre>
        </div>
      </div>
    </>
  );
};

export default SVGGraph;`
                }), n2, r4, i2);
              }), {
                vaporElement: t2
              };
            }) : ``), j, M, N);
          }), u(j, c(` `));
          let P = _(`rue:slot:start`), F = _(`rue:slot:end`);
          return u(j, P), u(j, F), h(() => {
            f(y(T2.value === `preview` ? m(() => {
              let r4 = d(), s4 = g(`div`);
              u(r4, s4), e(s4, `card bg-base-100 shadow`);
              let l4 = g(`div`);
              u(s4, l4), e(l4, `card-body grid gap-4 rue-svg-graph`);
              let v3 = g(`svg`);
              u(l4, v3), h(() => {
                o(v3, `width`, `200`);
              }), h(() => {
                o(v3, `height`, `200`);
              });
              let y2 = _(`rue:component:start`), S2 = _(`rue:component:end`);
              u(v3, y2), u(v3, S2), h(() => {
                f(x(E, {
                  stats: w2
                }), v3, y2, S2);
              });
              let C3 = g(`div`);
              u(l4, C3), e(C3, `grid gap-3`);
              let T3 = _(`rue:list:start`), A2 = _(`rue:list:end`);
              u(C3, T3), u(C3, A2);
              let j2 = /* @__PURE__ */ new Map();
              h(() => {
                j2 = b({
                  items: w2 || [],
                  getKey: (e2, t2) => e2.label,
                  elements: j2,
                  parent: C3,
                  before: A2,
                  start: T3,
                  renderItem: (r5, a3, s5, l5, _2) => {
                    f(m(() => {
                      let a4 = d(), s6 = g(`div`);
                      u(a4, s6), h(() => {
                        o(s6, `key`, String(r5.label));
                      }), e(s6, `flex items-center gap-3`);
                      let l6 = g(`label`);
                      u(s6, l6);
                      let f2 = t(l6);
                      u(l6, f2), h(() => {
                        i(f2, r5.label);
                      });
                      let m2 = g(`input`);
                      u(s6, m2), o(m2, `type`, `range`), e(m2, `range range-primary flex-1`), h(() => {
                        n(m2, r5.value);
                      }), h(() => {
                        o(m2, `min`, `0`);
                      }), h(() => {
                        o(m2, `max`, `100`);
                      }), p(m2, `input`, (e2) => k(r5, e2));
                      let _3 = g(`span`);
                      u(s6, _3), e(_3, `w-10 text-right`);
                      let v4 = t(_3);
                      u(_3, v4), h(() => {
                        i(v4, r5.value);
                      });
                      let y3 = g(`button`);
                      return u(s6, y3), e(y3, `btn btn-error btn-sm`), p(y3, `click`, () => O(r5)), u(y3, c(`X`)), {
                        vaporElement: a4
                      };
                    }), a3, s5, l5);
                  }
                });
              });
              let M2 = g(`form`);
              u(l4, M2), e(M2, `flex items-center gap-2`), p(M2, `submit`, D2);
              let N2 = g(`input`);
              u(M2, N2), o(N2, `name`, `newlabel`), e(N2, `input input-bordered`), h(() => {
                n(N2, a2.value);
              }), p(N2, `input`, (e2) => {
                a2.value = e2.target.value;
              });
              let P2 = g(`button`);
              u(M2, P2), e(P2, `btn btn-success`), p(P2, `click`, D2), u(P2, c(`Add a Stat`));
              let F2 = g(`pre`);
              u(l4, F2), e(F2, `raw`);
              let I = t(F2);
              return u(F2, I), h(() => {
                i(I, JSON.stringify(w2, null, 2));
              }), {
                vaporElement: r4
              };
            }) : ``), j, P, F);
          }), {
            vaporElement: r3
          };
        })
      }), r2, s2, l2), {
        vaporElement: r2
      };
    });
  };
});
export {
  __tla,
  D as default
};

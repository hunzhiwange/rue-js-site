import { A as e, C as t, F as n, G as r, I as i, O as a, S as o, U as s, _ as c, b as l, f as u, g as d, k as f, m as p, q as m, x as h, y as g, z as _, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as v, r as ee, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as y, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as b, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as x, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let S;
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
  S = () => {
    let { text: S2, checked: C, checkedNames: te, picked: w, selected: T, multiSelected: ne, toggleCheckedName: re, onMultiSelectChange: ie, activeTab: E } = r(`useSetup:0:0`, () => s(() => {
      let e2 = r(`ref:1:0`, () => _(`Edit me`)), t2 = r(`ref:1:1`, () => _(true)), n2 = r(`ref:1:2`, () => _([
        `Jack`
      ])), i2 = r(`ref:1:3`, () => _(`One`)), a2 = r(`ref:1:4`, () => _(`A`)), o2 = r(`ref:1:5`, () => _([
        `A`
      ]));
      return {
        text: e2,
        checked: t2,
        checkedNames: n2,
        picked: i2,
        selected: a2,
        multiSelected: o2,
        toggleCheckedName: (e3, t3) => {
          n2.value = t3 ? Array.from(/* @__PURE__ */ new Set([
            ...n2.value,
            e3
          ])) : n2.value.filter((t4) => t4 !== e3);
        },
        onMultiSelectChange: (e3) => {
          o2.value = Array.from(e3.target.selectedOptions).map((e4) => e4.value);
        },
        activeTab: r(`ref:1:6`, () => _(`preview`))
      };
    }));
    return p(() => {
      let r2 = l(), s2 = g(`rue:component:start`), _2 = g(`rue:component:end`);
      return c(r2, s2), c(r2, _2), u(y(x, {
        children: p(() => {
          let r3 = l(), s3 = h(`h1`);
          c(r3, s3), e(s3, `text-5xl font-semibold mb-4 md:mb-4`), c(s3, o(`\u8868\u5355\u7ED1\u5B9A\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let _3 = h(`div`);
          c(r3, _3), a(_3, `role`, `tablist`), e(_3, `tabs tabs-box`);
          let x2 = h(`button`);
          c(_3, x2), a(x2, `role`, `tab`), m(() => {
            e(x2, String(`tab ${E.value === `preview` ? `tab-active` : ``}`));
          }), d(x2, `click`, () => {
            E.value = `preview`;
          }), c(x2, o(`\u6548\u679C`));
          let D = h(`button`);
          c(_3, D), a(D, `role`, `tab`), m(() => {
            e(D, String(`tab ${E.value === `code` ? `tab-active` : ``}`));
          }), d(D, `click`, () => {
            E.value = `code`;
          }), c(D, o(`\u4EE3\u7801`));
          let O = h(`div`);
          c(r3, O), e(O, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let k = g(`rue:slot:start`), A = g(`rue:slot:end`);
          c(O, k), c(O, A), m(() => {
            u(v(E.value === `code` ? p(() => {
              let t2 = l(), n2 = h(`div`);
              c(t2, n2), e(n2, `card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);
              let r4 = h(`div`);
              c(n2, r4), e(r4, `card-body p-0`);
              let i2 = g(`rue:component:start`), a2 = g(`rue:component:end`);
              return c(r4, i2), c(r4, a2), m(() => {
                u(y(b, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';

const FormBindings: FC = () => {
  const text = ref('Edit me');
  const checked = ref(true);
  const checkedNames = ref<string[]>(['Jack']);
  const picked = ref<'One' | 'Two'>('One');
  const selected = ref<'A' | 'B' | 'C'>('A');
  const multiSelected = ref<string[]>(['A']);

  const toggleCheckedName = (name: string, nextChecked: boolean) => {
    checkedNames.value = nextChecked
      ? Array.from(new Set([...checkedNames.value, name]))
      : checkedNames.value.filter(n => n !== name);
  };

  const onMultiSelectChange = (e: any) => {
    const opts = Array.from((e.target as HTMLSelectElement).selectedOptions);
    multiSelected.value = opts.map(o => o.value);
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Text Input</h2>
          <input
            className="input input-bordered w-full"
            value={text.value}
            onInput={(e: any) => {
              text.value = (e.target as HTMLInputElement).value
            }}
            placeholder="Edit me"
          />
          <p className="mt-2 text-gray-700">{text.value}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Checkbox</h2>
          <div className="flex items-center gap-2">
            <input
              id="checkbox"
              type="checkbox"
              className="checkbox"
              checked={checked.value}
              onChange={(e: any) => {
                checked.value = (e.target as HTMLInputElement).checked
              }}
            />
            <label htmlFor="checkbox" className="select-none">
              Checked: {String(checked.value)}
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Multi Checkbox</h2>
          <div className="flex items-center gap-4 flex-wrap">
            {['Jack', 'John', 'Mike'].map(name => (
              <label key={name} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={name}
                  checked={checkedNames.value.includes(name)}
                  onChange={(e: any) =>
                    toggleCheckedName(name, (e.target as HTMLInputElement).checked)
                  }
                />
                <span>{name}</span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-gray-700">Checked names: {checkedNames.value.join(', ')}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Radio</h2>
          <div className="flex items-center gap-4 flex-wrap">
            <label htmlFor="one" className="inline-flex items-center gap-2">
              <input
                id="one"
                type="radio"
                className="radio"
                value="One"
                checked={picked.value === 'One'}
                onChange={() => {
                  picked.value = 'One'
                }}
              />
              <span>One</span>
            </label>
            <label htmlFor="two" className="inline-flex items-center gap-2">
              <input
                id="two"
                type="radio"
                className="radio"
                value="Two"
                checked={picked.value === 'Two'}
                onChange={() => {
                  picked.value = 'Two'
                }}
              />
              <span>Two</span>
            </label>
          </div>
          <p className="mt-2 text-gray-700">Picked: {picked.value}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Select</h2>
          <select
            className="select select-bordered"
            value={selected.value}
            onChange={(e: any) => {
              selected.value = (e.target as HTMLSelectElement).value as any
            }}
          >
            <option value="">Please select one</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <p className="mt-2 text-gray-700">Selected: {selected.value}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Multi Select</h2>
          <select
            className="select select-bordered w-[160px]"
            multiple
            value={multiSelected.value}
            onChange={onMultiSelectChange}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <p className="mt-2 text-gray-700">Selected: {multiSelected.value.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default FormBindings;`
                }), r4, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), O, k, A);
          }), c(O, o(` `));
          let j = g(`rue:slot:start`), M = g(`rue:slot:end`);
          return c(O, j), c(O, M), m(() => {
            u(v(E.value === `preview` ? p(() => {
              let r4 = l(), s4 = h(`div`);
              c(r4, s4), e(s4, `card bg-base-100 shadow`);
              let _4 = h(`div`);
              c(s4, _4), e(_4, `card-body grid gap-6`);
              let v2 = h(`div`);
              c(_4, v2);
              let y2 = h(`h2`);
              c(v2, y2), e(y2, `text-lg font-semibold mb-2`), c(y2, o(`Text Input`));
              let b2 = h(`input`);
              c(v2, b2), e(b2, `input input-bordered w-full`), m(() => {
                n(b2, S2.value);
              }), d(b2, `input`, (e2) => {
                S2.value = e2.target.value;
              }), a(b2, `placeholder`, `Edit me`);
              let x3 = h(`p`);
              c(v2, x3), e(x3, `mt-2 text-gray-700`);
              let E2 = t(x3);
              c(x3, E2), m(() => {
                i(E2, S2.value);
              });
              let D2 = h(`div`);
              c(_4, D2);
              let O2 = h(`h2`);
              c(D2, O2), e(O2, `text-lg font-semibold mb-2`), c(O2, o(`Checkbox`));
              let k2 = h(`div`);
              c(D2, k2), e(k2, `flex items-center gap-2`);
              let A2 = h(`input`);
              c(k2, A2), a(A2, `id`, `checkbox`), a(A2, `type`, `checkbox`), e(A2, `checkbox`), m(() => {
                f(A2, !!C.value);
              }), d(A2, `change`, (e2) => {
                C.value = e2.target.checked;
              });
              let j2 = h(`label`);
              c(k2, j2), a(j2, `htmlFor`, `checkbox`), e(j2, `select-none`), c(j2, o(`Checked: `));
              let M2 = t(j2);
              c(j2, M2), m(() => {
                i(M2, String(C.value));
              });
              let N = h(`div`);
              c(_4, N);
              let P = h(`h2`);
              c(N, P), e(P, `text-lg font-semibold mb-2`), c(P, o(`Multi Checkbox`));
              let F = h(`div`);
              c(N, F), e(F, `flex items-center gap-4 flex-wrap`);
              let ae = g(`rue:list:start`), oe = g(`rue:list:end`);
              c(F, ae), c(F, oe);
              let se = /* @__PURE__ */ new Map();
              m(() => {
                se = ee({
                  items: [
                    `Jack`,
                    `John`,
                    `Mike`
                  ],
                  getKey: (e2, t2) => e2,
                  elements: se,
                  parent: F,
                  before: oe,
                  start: ae,
                  renderItem: (r5, o2, s5, g2, _5) => {
                    u(p(() => {
                      let o3 = l(), s6 = h(`label`);
                      c(o3, s6), m(() => {
                        a(s6, `key`, String(r5));
                      }), e(s6, `inline-flex items-center gap-2`);
                      let u2 = h(`input`);
                      c(s6, u2), a(u2, `type`, `checkbox`), e(u2, `checkbox`), m(() => {
                        n(u2, r5);
                      }), m(() => {
                        f(u2, !!te.value.includes(r5));
                      }), d(u2, `change`, (e2) => re(r5, e2.target.checked));
                      let p2 = h(`span`);
                      c(s6, p2);
                      let g3 = t(p2);
                      return c(p2, g3), m(() => {
                        i(g3, r5);
                      }), {
                        vaporElement: o3
                      };
                    }), o2, s5, g2);
                  }
                });
              });
              let I = h(`p`);
              c(N, I), e(I, `mt-2 text-gray-700`), c(I, o(`Checked names: `));
              let ce = t(I);
              c(I, ce), m(() => {
                i(ce, te.value.join(`, `));
              });
              let L = h(`div`);
              c(_4, L);
              let R = h(`h2`);
              c(L, R), e(R, `text-lg font-semibold mb-2`), c(R, o(`Radio`));
              let z = h(`div`);
              c(L, z), e(z, `flex items-center gap-4 flex-wrap`);
              let B = h(`label`);
              c(z, B), a(B, `htmlFor`, `one`), e(B, `inline-flex items-center gap-2`);
              let V = h(`input`);
              c(B, V), a(V, `id`, `one`), a(V, `type`, `radio`), e(V, `radio`), a(V, `value`, `One`), m(() => {
                f(V, w.value === `One`);
              }), d(V, `change`, () => {
                w.value = `One`;
              });
              let le = h(`span`);
              c(B, le), c(le, o(`One`));
              let H = h(`label`);
              c(z, H), a(H, `htmlFor`, `two`), e(H, `inline-flex items-center gap-2`);
              let U = h(`input`);
              c(H, U), a(U, `id`, `two`), a(U, `type`, `radio`), e(U, `radio`), a(U, `value`, `Two`), m(() => {
                f(U, w.value === `Two`);
              }), d(U, `change`, () => {
                w.value = `Two`;
              });
              let ue = h(`span`);
              c(H, ue), c(ue, o(`Two`));
              let W = h(`p`);
              c(L, W), e(W, `mt-2 text-gray-700`), c(W, o(`Picked: `));
              let de = t(W);
              c(W, de), m(() => {
                i(de, w.value);
              });
              let G = h(`div`);
              c(_4, G);
              let K = h(`h2`);
              c(G, K), e(K, `text-lg font-semibold mb-2`), c(K, o(`Select`));
              let q = h(`select`);
              c(G, q), e(q, `select select-bordered`), m(() => {
                n(q, T.value);
              }), d(q, `change`, (e2) => {
                T.value = e2.target.value;
              });
              let J = h(`option`);
              c(q, J), a(J, `value`, ``), c(J, o(`Please select one`));
              let Y = h(`option`);
              c(q, Y), a(Y, `value`, `A`), c(Y, o(`A`));
              let fe = h(`option`);
              c(q, fe), a(fe, `value`, `B`), c(fe, o(`B`));
              let pe = h(`option`);
              c(q, pe), a(pe, `value`, `C`), c(pe, o(`C`));
              let X = h(`p`);
              c(G, X), e(X, `mt-2 text-gray-700`), c(X, o(`Selected: `));
              let me = t(X);
              c(X, me), m(() => {
                i(me, T.value);
              });
              let Z = h(`div`);
              c(_4, Z);
              let he = h(`h2`);
              c(Z, he), e(he, `text-lg font-semibold mb-2`), c(he, o(`Multi Select`));
              let Q = h(`select`);
              c(Z, Q), e(Q, `select select-bordered w-[160px]`), a(Q, `multiple`, ``), m(() => {
                n(Q, ne.value);
              }), d(Q, `change`, ie);
              let ge = h(`option`);
              c(Q, ge), a(ge, `value`, `A`), c(ge, o(`A`));
              let _e = h(`option`);
              c(Q, _e), a(_e, `value`, `B`), c(_e, o(`B`));
              let ve = h(`option`);
              c(Q, ve), a(ve, `value`, `C`), c(ve, o(`C`));
              let $ = h(`p`);
              c(Z, $), e($, `mt-2 text-gray-700`), c($, o(`Selected: `));
              let ye = t($);
              return c($, ye), m(() => {
                i(ye, ne.value.join(`, `));
              }), {
                vaporElement: r4
              };
            }) : ``), O, j, M);
          }), {
            vaporElement: r3
          };
        })
      }), r2, s2, _2), {
        vaporElement: r2
      };
    });
  };
});
export {
  __tla,
  S as default
};

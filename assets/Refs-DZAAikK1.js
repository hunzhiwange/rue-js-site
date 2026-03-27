import { A as e, G as t, H as n, O as r, S as i, U as a, _ as o, b as s, f as c, g as l, m as u, o as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, t as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
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
    let { inputRef: x2, focus: S, activeTab: C } = t(`useSetup:0:0`, () => a(() => {
      let e2 = t(`useRef:1:0`, () => n());
      return {
        inputRef: e2,
        focus: () => {
          let t2 = e2.current;
          console.info(t2), t2 && typeof t2.focus == `function` && t2.focus();
        },
        activeTab: t(`ref:1:1`, () => h(`code`))
      };
    }));
    return u(() => {
      let t2 = s(), n2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
      return o(t2, n2), o(t2, a2), c(v(b, {
        children: u(() => {
          let t3 = s(), n3 = p(`h1`);
          o(t3, n3), e(n3, `text-5xl font-semibold mb-4 md:mb-4`), o(n3, i(`Refs \u57FA\u7840`));
          let a3 = p(`div`);
          o(t3, a3), r(a3, `role`, `tablist`), e(a3, `tabs tabs-box`);
          let h2 = p(`button`);
          o(a3, h2), r(h2, `role`, `tab`), f(() => {
            e(h2, String(`tab ${C.value === `preview` ? `tab-active` : ``}`));
          }), l(h2, `click`, () => {
            C.value = `preview`;
          }), o(h2, i(`\u6548\u679C`));
          let b2 = p(`button`);
          o(a3, b2), r(b2, `role`, `tab`), f(() => {
            e(b2, String(`tab ${C.value === `code` ? `tab-active` : ``}`));
          }), l(b2, `click`, () => {
            C.value = `code`;
          }), o(b2, i(`\u4EE3\u7801`));
          let w = p(`div`);
          o(t3, w), e(w, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let T = m(`rue:slot:start`), E = m(`rue:slot:end`);
          o(w, T), o(w, E), f(() => {
            c(g(C.value === `code` ? u(() => {
              let t4 = s(), n4 = p(`div`);
              o(t4, n4), e(n4, `card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);
              let r2 = p(`div`);
              o(n4, r2), e(r2, `card-body p-0`);
              let i2 = m(`rue:component:start`), a4 = m(`rue:component:end`);
              return o(r2, i2), o(r2, a4), f(() => {
                c(v(y, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, useRef } from 'rues';

const Refs: FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const focus = () => {
    console.log(inputRef.current);
    inputRef.current?.focus?.();
  };
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <input
          ref={inputRef}
          className="input input-bordered"
          placeholder="\u70B9\u51FB\u6309\u94AE\u81EA\u52A8\u805A\u7126"
        />
        <button className="btn btn-primary" onClick={focus}>
          \u805A\u7126
        </button>
      </div>
    </div>
  );
};

export default Refs;`
                }), r2, i2, a4);
              }), {
                vaporElement: t4
              };
            }) : ``), w, T, E);
          }), o(w, i(` `));
          let D = m(`rue:slot:start`), O = m(`rue:slot:end`);
          return o(w, D), o(w, O), f(() => {
            c(g(C.value === `preview` ? u(() => {
              let t4 = s(), n4 = p(`div`);
              o(t4, n4), e(n4, `card bg-base-100 shadow`);
              let a4 = p(`div`);
              o(n4, a4), e(a4, `card-body grid gap-4`);
              let c2 = p(`input`);
              o(a4, c2);
              let u2 = _(c2, () => x2);
              d(() => {
                u2();
              }), e(c2, `input input-bordered`), r(c2, `placeholder`, `\u70B9\u51FB\u6309\u94AE\u81EA\u52A8\u805A\u7126`);
              let f2 = p(`button`);
              return o(a4, f2), e(f2, `btn btn-primary`), l(f2, `click`, S), o(f2, i(`\u805A\u7126`)), {
                vaporElement: t4
              };
            }) : ``), w, D, O);
          }), {
            vaporElement: t3
          };
        })
      }), t2, n2, a2), {
        vaporElement: t2
      };
    });
  };
});
export {
  __tla,
  x as default
};

import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as _, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as v, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as y, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
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
  b = () => {
    let { message: b2, reverseMessage: x, notify: S, activeTab: C } = n(`useSetup:0:0`, () => o(() => {
      let e2 = n(`ref:1:0`, () => h(`Hello World!`));
      return {
        message: e2,
        reverseMessage: () => {
          e2.value = e2.value.split(``).reverse().join(``);
        },
        notify: () => {
          alert(`navigation was prevented.`);
        },
        activeTab: n(`ref:1:1`, () => h(`preview`))
      };
    }));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(_(y, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`\u5904\u7406\u8F93\u5165\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let y2 = p(`button`);
          s(h3, y2), i(y2, `role`, `tab`), f(() => {
            e(y2, String(`tab ${C.value === `preview` ? `tab-active` : ``}`));
          }), u(y2, `click`, () => {
            C.value = `preview`;
          }), s(y2, a(`\u6548\u679C`));
          let w = p(`button`);
          s(h3, w), i(w, `role`, `tab`), f(() => {
            e(w, String(`tab ${C.value === `code` ? `tab-active` : ``}`));
          }), u(w, `click`, () => {
            C.value = `code`;
          }), s(w, a(`\u4EE3\u7801`));
          let T = p(`div`);
          s(n3, T), e(T, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let E = m(`rue:slot:start`), D = m(`rue:slot:end`);
          s(T, E), s(T, D), f(() => {
            l(g(C.value === `code` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);
              let r2 = p(`div`);
              s(n4, r2), e(r2, `card-body p-0`);
              let i2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(r2, i2), s(r2, a2), f(() => {
                l(_(v, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';

const HandlingInput: FC = () => {
  const message = ref('Hello World!');
  const reverseMessage = () => {
    message.value = message.value.split('').reverse().join('');
  };
  const notify = () => {
    alert('navigation was prevented.');
  };
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h1 className="text-2xl font-semibold">{message.value}</h1>
        <button className="btn btn-primary" onClick={reverseMessage}>
          Reverse Message
        </button>
        <button className="btn btn-outline" onClick={() => (message.value += '!')}>
          Append "!"
        </button>
        <a
          className="link link-primary"
          href="https://google.com"
          onClick={(e: any) => {
            e.preventDefault()
            notify()
          }}
        >
          A link with e.preventDefault()
        </a>
      </div>
    </div>
  );
};

export default HandlingInput;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), T, E, D);
          }), s(T, a(` `));
          let O = m(`rue:slot:start`), k = m(`rue:slot:end`);
          return s(T, O), s(T, k), f(() => {
            l(g(C.value === `preview` ? d(() => {
              let n4 = c(), o4 = p(`div`);
              s(n4, o4), e(o4, `card bg-base-100 shadow`);
              let l2 = p(`div`);
              s(o4, l2), e(l2, `card-body`);
              let d2 = p(`h1`);
              s(l2, d2), e(d2, `text-2xl font-semibold`);
              let m2 = t(d2);
              s(d2, m2), f(() => {
                r(m2, b2.value);
              });
              let h4 = p(`button`);
              s(l2, h4), e(h4, `btn btn-primary`), u(h4, `click`, x), s(h4, a(`Reverse Message`));
              let g2 = p(`button`);
              s(l2, g2), e(g2, `btn btn-outline`), u(g2, `click`, () => b2.value += `!`), s(g2, a(`Append "!"`));
              let _2 = p(`a`);
              return s(l2, _2), e(_2, `link link-primary`), i(_2, `href`, `https://google.com`), u(_2, `click`, (e2) => {
                e2.preventDefault(), S();
              }), s(_2, a(`A link with e.preventDefault()`)), {
                vaporElement: n4
              };
            }) : ``), T, O, k);
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
  b as default
};

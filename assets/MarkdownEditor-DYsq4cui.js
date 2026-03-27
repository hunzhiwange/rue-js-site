import { A as e, F as t, G as n, N as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as _, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as v, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as y, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
import { t as b, __tla as __tla_6 } from "./markdown-it-CM2LYWyj.js";
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  var x = new b({
    html: true,
    linkify: true,
    breaks: true
  });
  function S(e2, t2 = 100) {
    let n2;
    return (...r2) => {
      n2 && clearTimeout(n2), n2 = setTimeout(() => e2(...r2), t2);
    };
  }
  C = () => {
    let { input: b2, update: C2, activeTab: w } = n(`useSetup:0:0`, () => o(() => {
      let e2 = n(`ref:1:0`, () => h(`# hello`));
      return {
        input: e2,
        update: S((t2) => {
          e2.value = t2.target.value;
        }, 100),
        activeTab: n(`ref:1:1`, () => h(`preview`))
      };
    }));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(_(y, {
        children: d(() => {
          let n3 = c(), o3 = p(`h1`);
          s(n3, o3), e(o3, `text-5xl font-semibold mb-4 md:mb-4`), s(o3, a(`Markdown \u7F16\u8F91\u5668\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let h3 = p(`div`);
          s(n3, h3), i(h3, `role`, `tablist`), e(h3, `tabs tabs-box`);
          let y2 = p(`button`);
          s(h3, y2), i(y2, `role`, `tab`), f(() => {
            e(y2, String(`tab ${w.value === `preview` ? `tab-active` : ``}`));
          }), u(y2, `click`, () => {
            w.value = `preview`;
          }), s(y2, a(`\u6548\u679C`));
          let S2 = p(`button`);
          s(h3, S2), i(S2, `role`, `tab`), f(() => {
            e(S2, String(`tab ${w.value === `code` ? `tab-active` : ``}`));
          }), u(S2, `click`, () => {
            w.value = `code`;
          }), s(S2, a(`\u4EE3\u7801`));
          let T = p(`div`);
          s(n3, T), e(T, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let E = m(`rue:slot:start`), D = m(`rue:slot:end`);
          s(T, E), s(T, D), f(() => {
            l(g(w.value === `code` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);
              let r2 = p(`div`);
              s(n4, r2), e(r2, `card-body p-0`);
              let i2 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(r2, i2), s(r2, a2), f(() => {
                l(_(v, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, ref } from 'rues';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true, linkify: true, breaks: true });

function debounce<T extends (...args: any[]) => void>(fn: T, wait = 100) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), wait) as unknown as number;
  };
}

const MarkdownEditor: FC = () => {
  const input = ref<string>('# hello');
  const update = debounce((e: any) => { input.value = (e.target as HTMLTextAreaElement).value; }, 100);
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5">
          <textarea
            className="textarea textarea-bordered rounded-none border-r"
            value={input.value}
            onInput={update}
          />
          <div
            className="p-4 overflow-auto"
            dangerouslySetInnerHTML={{ __html: md.render(input.value) }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;`
                }), r2, i2, a2);
              }), {
                vaporElement: t2
              };
            }) : ``), T, E, D);
          }), s(T, a(` `));
          let O = m(`rue:slot:start`), k = m(`rue:slot:end`);
          return s(T, O), s(T, k), f(() => {
            l(g(w.value === `preview` ? d(() => {
              let n4 = c(), i2 = p(`div`);
              s(n4, i2), e(i2, `card bg-base-100 shadow`);
              let a2 = p(`div`);
              s(i2, a2), e(a2, `card-body grid gap-4`);
              let o4 = p(`div`);
              s(a2, o4), e(o4, `grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);
              let l2 = p(`textarea`);
              s(o4, l2), e(l2, `textarea textarea-bordered rounded-none border-r`), f(() => {
                t(l2, b2.value);
              }), u(l2, `input`, C2);
              let d2 = p(`div`);
              return s(o4, d2), e(d2, `p-4 overflow-auto`), f(() => {
                let e2 = {
                  __html: x.render(b2.value)
                };
                r(d2, e2 && `__html` in e2 ? e2.__html : ``);
              }), {
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
  C as default
};

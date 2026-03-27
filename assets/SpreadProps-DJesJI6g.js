import { A as e, G as t, O as n, S as r, U as i, _ as a, b as o, f as s, g as c, m as l, q as u, x as d, y as f, z as p, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as m, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as h, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as g, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
import { t as _, __tla as __tla_5 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let y;
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
  let v;
  v = (t2) => l(() => {
    let n2 = d(`button`);
    u(() => {
      e(n2, String(t2.className));
    });
    let r2 = f(`rue:slot:start`), i2 = f(`rue:slot:end`);
    return a(n2, r2), a(n2, i2), u(() => {
      let e2 = t2.text;
      s(m(e2), n2, r2, i2);
    }), {
      vaporElement: n2
    };
  });
  y = () => {
    let { base: y2, extra: b, activeTab: x } = t(`useSetup:0:0`, () => i(() => ({
      base: {
        className: `btn btn-primary`
      },
      extra: {
        text: `\u786E\u5B9A\u6309\u94AE`
      },
      activeTab: t(`ref:1:0`, () => p(`code`))
    })));
    return l(() => {
      let t2 = o(), i2 = f(`rue:component:start`), p2 = f(`rue:component:end`);
      return a(t2, i2), a(t2, p2), s(h(_, {
        children: l(() => {
          let t3 = o(), i3 = d(`h1`);
          a(t3, i3), e(i3, `text-5xl font-semibold mb-4 md:mb-4`), a(i3, r(`\u5BF9\u8C61\u5C55\u5F00\u5C5E\u6027\uFF08spread props\uFF09`));
          let p3 = d(`div`);
          a(t3, p3), n(p3, `role`, `tablist`), e(p3, `tabs tabs-box`);
          let _2 = d(`button`);
          a(p3, _2), n(_2, `role`, `tab`), u(() => {
            e(_2, String(`tab ${x.value === `preview` ? `tab-active` : ``}`));
          }), c(_2, `click`, () => {
            x.value = `preview`;
          }), a(_2, r(`\u6548\u679C`));
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
              a(t4, n2), e(n2, `card bg-base-100 shadow overflow-auto`);
              let r2 = d(`div`);
              a(n2, r2), e(r2, `card-body p-0`);
              let i4 = f(`rue:component:start`), c2 = f(`rue:component:end`);
              return a(r2, i4), a(r2, c2), u(() => {
                s(h(g, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC } from 'rues';

const Button: FC<{ text: string; className?: string }> = (props) => (
  <button className={props.className}>{props.text}</button>
);

const SpreadProps: FC = () => {
  const base = { className: 'px-3 py-2 rounded-md bg-blue-600 text-white' };
  const extra = { text: '\u786E\u5B9A\u6309\u94AE' };
  return (
    <div className="grid gap-4">
      <Button {...base} {...extra} />
    </div>
  );
};

export default SpreadProps;`
                }), r2, i4, c2);
              }), {
                vaporElement: t4
              };
            }) : ``), C, w, T);
          }), a(C, r(` `));
          let E = f(`rue:slot:start`), D = f(`rue:slot:end`);
          return a(C, E), a(C, D), u(() => {
            s(m(x.value === `preview` ? l(() => {
              let t4 = o(), n2 = d(`div`);
              a(t4, n2), e(n2, `card bg-base-100 shadow`);
              let r2 = d(`div`);
              a(n2, r2), e(r2, `card-body grid gap-4`);
              let i4 = f(`rue:component:start`), c2 = f(`rue:component:end`);
              return a(r2, i4), a(r2, c2), u(() => {
                s(h(v, {
                  ...y2,
                  ...b
                }), r2, i4, c2);
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
  y as default
};

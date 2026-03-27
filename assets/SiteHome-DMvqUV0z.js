import { A as e, C as t, F as n, G as r, I as i, L as a, O as o, R as s, S as c, U as l, W as u, _ as d, b as f, f as p, g as m, k as h, m as g, q as _, x as v, y, z as b, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as x, r as ee, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as S, t as C, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { __tla as __tla_3 } from "./tokyo-night-BJol8me2.js";
import { t as w, __tla as __tla_4 } from "./Code-Di3lP1nD.js";
let le;
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
  })()
]).then(async () => {
  let T, te, ne, re, ie, ae, E, oe, se, ce;
  T = (n2) => g(() => {
    let r2 = v(`div`);
    e(r2, `card bg-base-100 border border-base-200 shadow-sm`);
    let a2 = v(`div`);
    d(r2, a2), e(a2, `card-body`);
    let o2 = v(`div`);
    d(a2, o2), e(o2, `flex items-center gap-3 mb-1`);
    let s2 = v(`div`);
    d(o2, s2), e(s2, `w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);
    let c2 = v(`span`);
    d(s2, c2), e(c2, `text-lg`);
    let l2 = t(c2);
    d(c2, l2), _(() => {
      i(l2, n2.icon || `\u26A1\uFE0F`);
    });
    let u2 = v(`div`);
    d(o2, u2), e(u2, `font-semibold text-base-content`);
    let f2 = t(u2);
    d(u2, f2), _(() => {
      i(f2, n2.title);
    });
    let p2 = v(`p`);
    d(a2, p2), e(p2, `text-sm text-base-content/70`);
    let m2 = t(p2);
    return d(p2, m2), _(() => {
      i(m2, n2.desc);
    }), {
      vaporElement: r2
    };
  });
  te = () => g(() => {
    let t2 = v(`div`);
    e(t2, `card bg-primary text-primary-content shadow-sm`);
    let n2 = v(`div`);
    d(t2, n2), e(n2, `card-body items-center text-center`);
    let r2 = v(`div`);
    d(n2, r2), e(r2, `text-3xl font-extrabold`), d(r2, c(`Hello`));
    let i2 = v(`div`);
    return d(n2, i2), e(i2, `mt-2 text-sm opacity-90`), d(i2, c(`Hello component`)), {
      vaporElement: t2
    };
  });
  ne = () => g(() => {
    let t2 = v(`div`);
    e(t2, `card bg-base-100 text-base-content border border-base-200 shadow-sm`);
    let n2 = v(`div`);
    d(t2, n2), e(n2, `card-body items-center text-center`);
    let r2 = v(`div`);
    d(n2, r2), e(r2, `text-3xl font-extrabold`), d(r2, c(`World`));
    let i2 = v(`div`);
    return d(n2, i2), e(i2, `mt-2 text-sm text-base-content/70`), d(i2, c(`World component`)), {
      vaporElement: t2
    };
  });
  re = () => g(() => {
    let t2 = v(`div`);
    e(t2, `card bg-accent text-accent-content shadow-sm`);
    let n2 = v(`div`);
    d(t2, n2), e(n2, `card-body items-center text-center`);
    let r2 = v(`div`);
    d(n2, r2), e(r2, `text-3xl font-extrabold`), d(r2, c(`Hi`));
    let i2 = v(`div`);
    return d(n2, i2), e(i2, `mt-2 text-sm opacity-90`), d(i2, c(`Rue`)), {
      vaporElement: t2
    };
  });
  ie = () => g(() => {
    let t2 = v(`div`);
    e(t2, `card bg-base-100 text-base-content border border-base-200 shadow-sm`);
    let n2 = v(`div`);
    d(t2, n2), e(n2, `card-body items-center text-center`);
    let r2 = v(`div`);
    d(n2, r2), e(r2, `text-3xl font-extrabold`), d(r2, c(`Yes`));
    let i2 = v(`div`);
    return d(n2, i2), e(i2, `mt-2 text-sm text-base-content/70`), d(i2, c(`My name is Rue`)), {
      vaporElement: t2
    };
  });
  ae = [
    {
      title: `\u539F\u59CB DOM \u7F16\u7A0B`,
      desc: `\u76F4\u63A5\u64CD\u4F5C\u8282\u70B9\u4E0E\u4E8B\u4EF6`
    },
    {
      title: `jQuery \u7684\u5D1B\u8D77`,
      desc: `Write Less, Do More`
    },
    {
      title: `Backbone.js \u4E0E MVC`,
      desc: `\u65E9\u671F\u524D\u7AEF\u67B6\u6784\u63A2\u7D22`
    },
    {
      title: `Web Components`,
      desc: `\u539F\u751F\u7EC4\u4EF6\u6807\u51C6`
    },
    {
      title: `\u73B0\u4EE3\u6784\u5EFA\u5DE5\u5177\u4E0E\u751F\u6001`,
      desc: `\u6A21\u5757\u5316\u4E0E\u5F00\u53D1\u4F53\u9A8C`
    }
  ];
  E = (t2) => g(() => {
    let r2 = v(`input`);
    return e(r2, `w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200 px-3 py-2`), _(() => {
      n(r2, t2.value);
    }), m(r2, `input`, (e2) => t2.onChange(e2.target.value)), o(r2, `placeholder`, `\u641C\u7D22\u89C6\u9891`), {
      vaporElement: r2
    };
  });
  oe = (n2) => g(() => {
    let r2 = v(`div`);
    e(r2, `mt-3 space-y-2`);
    let a2 = v(`div`);
    d(r2, a2), e(a2, `text-sm text-gray-700`);
    let s2 = t(a2);
    d(a2, s2), _(() => {
      i(s2, n2.videos.length);
    }), d(a2, c(` \u4E2A\u89C6\u9891`));
    let l2 = y(`rue:slot:start`), u2 = y(`rue:slot:end`);
    return d(r2, l2), d(r2, u2), _(() => {
      p(x(n2.videos.length === 0 ? g(() => {
        let r3 = f(), a3 = v(`div`);
        d(r3, a3), e(a3, `rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3 text-sm`);
        let o2 = t(a3);
        return d(a3, o2), _(() => {
          i(o2, n2.emptyHeading || `\u6682\u65E0\u5339\u914D`);
        }), {
          vaporElement: r3
        };
      }) : g(() => {
        let r3 = f(), a3 = v(`ul`);
        d(r3, a3), e(a3, `space-y-2`);
        let s3 = y(`rue:list:start`), c2 = y(`rue:list:end`);
        d(a3, s3), d(a3, c2);
        let l3 = /* @__PURE__ */ new Map();
        return _(() => {
          l3 = ee({
            items: n2.videos || [],
            getKey: (e2, t2) => t2,
            elements: l3,
            parent: a3,
            before: c2,
            start: s3,
            renderItem: (n3, r4, a4, s4, c3) => {
              p(g(() => {
                let r5 = f(), a5 = v(`li`);
                d(r5, a5), _(() => {
                  o(a5, `key`, String(c3));
                }), e(a5, `rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3`);
                let s5 = v(`div`);
                d(a5, s5), e(s5, `font-medium`);
                let l4 = t(s5);
                d(s5, l4), _(() => {
                  i(l4, n3.title);
                });
                let u3 = v(`div`);
                d(a5, u3), e(u3, `text-sm text-gray-500`);
                let p2 = t(u3);
                return d(u3, p2), _(() => {
                  i(p2, n3.desc);
                }), {
                  vaporElement: r5
                };
              }), r4, a4, s4);
            }
          });
        }), {
          vaporElement: r3
        };
      })), r2, l2, u2);
    }), {
      vaporElement: r2
    };
  });
  se = (e2) => {
    let { searchText: t2, setSearchText: n2, foundVideos: i2 } = r(`useSetup:0:0`, () => l(() => {
      let [t3, n3] = r(`useState:1:0`, () => u(``));
      return {
        searchText: t3,
        setSearchText: n3,
        foundVideos: r(`computed:1:1`, () => a(() => e2.videos.filter((e3) => e3.title.toLowerCase().includes(t3.value.toLowerCase()))))
      };
    }));
    return g(() => {
      let e3 = f(), r2 = y(`rue:component:start`), a2 = y(`rue:component:end`);
      d(e3, r2), d(e3, a2), _(() => {
        p(S(E, {
          value: t2.value,
          onChange: n2
        }), e3, r2, a2);
      });
      let o2 = y(`rue:component:start`), s2 = y(`rue:component:end`);
      return d(e3, o2), d(e3, s2), _(() => {
        p(S(oe, {
          videos: i2.get(),
          emptyHeading: `\u6CA1\u6709\u5339\u914D \u201C${t2.value}\u201D`
        }), e3, o2, s2);
      }), {
        vaporElement: e3
      };
    });
  };
  ce = () => {
    let { count: n2, state: a2 } = r(`useSetup:0:0`, () => l(() => ({
      count: r(`ref:1:2`, () => b(0)),
      state: r(`reactive:1:3`, () => s({
        enabled: false
      }))
    })));
    return g(() => {
      let r2 = v(`div`);
      e(r2, `rounded-xl border border-gray-200/70 bg-white/60 backdrop-blur-sm p-4`);
      let s2 = v(`div`);
      d(r2, s2), e(s2, `flex items-center gap-3`);
      let l2 = v(`button`);
      d(s2, l2), e(l2, `btn btn-primary`), m(l2, `click`, () => n2.value++), d(l2, c(`+1`));
      let u2 = v(`button`);
      d(s2, u2), e(u2, `btn btn-outline`), m(u2, `click`, () => n2.value = 0), d(u2, c(`\u91CD\u7F6E`));
      let f2 = v(`label`);
      d(s2, f2), e(f2, `flex items-center gap-2 ml-auto`);
      let p2 = v(`input`);
      d(f2, p2), o(p2, `type`, `checkbox`), e(p2, `checkbox`), _(() => {
        h(p2, !!a2.enabled);
      }), m(p2, `change`, (e2) => a2.enabled = e2.target.checked);
      let g2 = v(`span`);
      d(f2, g2), e(g2, `text-sm`), d(g2, c(`\u542F\u7528`));
      let y2 = v(`div`);
      d(r2, y2), e(y2, `mt-2 text-sm text-gray-700`), d(y2, c(`\u8BA1\u6570\uFF1A`));
      let b2 = t(y2);
      d(y2, b2), _(() => {
        i(b2, n2.value);
      }), d(y2, c(`\uFF0C\u542F\u7528\uFF1A`));
      let x2 = t(y2);
      return d(y2, x2), _(() => {
        i(x2, a2.enabled ? `\u662F` : `\u5426`);
      }), {
        vaporElement: r2
      };
    });
  };
  le = () => g(() => {
    let t2 = f(), n2 = v(`section`);
    d(t2, n2), e(n2, `relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);
    let r2 = v(`div`);
    d(n2, r2), e(r2, `absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);
    let i2 = v(`div`);
    d(n2, i2), e(i2, `absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);
    let a2 = v(`div`);
    d(n2, a2), e(a2, `relative max-w-[1100px] mx-auto text-center`);
    let o2 = v(`div`);
    d(a2, o2), e(o2, `hover-3d`);
    let s2 = v(`figure`);
    d(o2, s2);
    let l2 = v(`div`);
    d(s2, l2), e(l2, `inline-flex items-center justify-center gap-3`);
    let u2 = v(`span`);
    d(l2, u2), e(u2, `inline-flex items-center justify-center w-22 h-22 rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg ring-1 ring-white/30`);
    let m2 = v(`span`);
    d(u2, m2), e(m2, `text-white font-extrabold text-[64px] md:text-[92px] leading-none`), d(m2, c(`T`));
    let h2 = v(`span`);
    d(l2, h2), e(h2, `text-6xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`), d(h2, c(`he Wasm`));
    let g2 = v(`div`);
    d(s2, g2), e(g2, `mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`), d(g2, c(`Framework For Vapor Native DOM`));
    let b2 = v(`p`);
    d(s2, b2), e(b2, `mt-6 text-lg md:text-xl text-gray-700`), d(b2, c(`Rust \u8FD0\u884C\u65F6\uFF0CRust \u54CD\u5E94\u5F0F\u7CFB\u7EDF\uFF0CRust \u539F\u751F DOM \u7F16\u8BD1\u5668`)), d(o2, v(`div`)), d(o2, v(`div`)), d(o2, v(`div`)), d(o2, v(`div`)), d(o2, v(`div`)), d(o2, v(`div`)), d(o2, v(`div`)), d(o2, v(`div`));
    let x2 = v(`div`);
    d(a2, x2), e(x2, `mt-8 flex flex-wrap justify-center gap-3`);
    let ee2 = y(`rue:component:start`), E2 = y(`rue:component:end`);
    d(x2, ee2), d(x2, E2), p(S(C, {
      to: `/guide/guide/quick-start`,
      className: `btn btn-primary btn-lg`,
      children: `\u5FEB\u901F\u4E0A\u624B`
    }), x2, ee2, E2);
    let oe2 = y(`rue:component:start`), le2 = y(`rue:component:end`);
    d(x2, oe2), d(x2, le2), p(S(C, {
      to: `/guide/guide/introduction`,
      className: `btn btn-outline btn-lg`,
      children: `\u6587\u6863`
    }), x2, oe2, le2);
    let ue = y(`rue:component:start`), de = y(`rue:component:end`);
    d(x2, ue), d(x2, de), p(S(C, {
      to: `/api/api/index`,
      className: `btn btn-outline btn-lg`,
      children: `API`
    }), x2, ue, de);
    let D = v(`section`);
    d(t2, D), e(D, `grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);
    let fe = y(`rue:component:start`), pe = y(`rue:component:end`);
    d(D, fe), d(D, pe), p(S(T, {
      title: `\u7B80\u6D01\u6613\u7528`,
      desc: `\u57FA\u4E8E\u6807\u51C6 HTML/CSS/TSX/WebAssembly\uFF0C\u865A\u62DF DOM \u4E0E\u539F\u751F DOM \u53CC\u5F15\u64CE\u6E32\u67D3\uFF0C\u7EC4\u4EF6\u8BED\u6CD5\u76F4\u89C2\uFF0C\u5F00\u53D1\u4F53\u9A8C\u8F7B\u677E\u9AD8\u6548\u3002`,
      icon: `\u2705`
    }), D, fe, pe);
    let me = y(`rue:component:start`), he = y(`rue:component:end`);
    d(D, me), d(D, he), p(S(T, {
      title: `Rust \u7F16\u8BD1\u5668 \xB7 Vapor \u6A21\u5F0F`,
      desc: `\u7531 Rust \u5B9E\u73B0\u7684 Vapor \u539F\u751F DOM \u7F16\u8BD1\u4E0E\u7EC6\u7C92\u5EA6\u66F4\u65B0\uFF0C\u4F4E\u5185\u5B58\u3001\u9AD8\u6027\u80FD\uFF0C\u9002\u7528\u4E8E\u590D\u6742\u754C\u9762\u3002`,
      icon: `\u{1F980}`
    }), D, me, he);
    let ge = y(`rue:component:start`), _e = y(`rue:component:end`);
    d(D, ge), d(D, _e), p(S(T, {
      title: `\u517C\u5BB9 React / Vue \u8BED\u6CD5`,
      desc: `\u540C\u65F6\u652F\u6301 useState / useEffect \u4E0E ref / reactive / watchEffect \u7B49\u76F8\u5173 API\uFF0C\u4FDD\u7559\u719F\u6089\u7684\u5FC3\u667A\u6A21\u578B\uFF0C\u6E10\u8FDB\u5F0F\u878D\u5165\u73B0\u6709\u4EE3\u7801\u3002`,
      icon: `\u{1F91D}`
    }), D, ge, _e);
    let O = v(`section`);
    d(t2, O), e(O, `mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);
    let k = v(`div`);
    d(O, k), e(k, `md:flex items-center justify-between`);
    let A = v(`div`);
    d(k, A);
    let j = v(`h2`);
    d(A, j), e(j, `text-2xl font-semibold mb-2 text-white`), d(j, c(`\u751F\u6001\u4E0E\u63D2\u4EF6`));
    let M = v(`p`);
    d(A, M), e(M, `text-white/90`), d(M, c(`\u53EF\u4F7F\u7528 AI \u5F00\u53D1\u4F60\u81EA\u5DF1\u7684\u63D2\u4EF6\uFF0C\u53EF\u6E10\u8FDB\u5F0F\u96C6\u6210\u5230\u4F60\u7684\u5E94\u7528\u3002`));
    let N = v(`div`);
    d(k, N), e(N, `mt-4 md:mt-0 flex gap-3`);
    let ve = y(`rue:component:start`), ye = y(`rue:component:end`);
    d(N, ve), d(N, ye), p(S(C, {
      to: `/plugins`,
      className: `btn btn-outline`,
      children: `\u63D2\u4EF6`
    }), N, ve, ye);
    let be = y(`rue:component:start`), xe = y(`rue:component:end`);
    d(N, be), d(N, xe), p(S(C, {
      to: `/design/button`,
      className: `btn btn-outline`,
      children: `\u7EC4\u4EF6\u5E93`
    }), N, be, xe);
    let P = v(`section`);
    d(t2, P), e(P, `max-w-[1100px] mx-auto mt-12`);
    let F = v(`h2`);
    d(P, F), e(F, `text-2xl font-semibold mb-2`), d(F, c(`\u7528\u7EC4\u4EF6\u7EC4\u7EC7\u754C\u9762`));
    let I = v(`p`);
    d(P, I), e(I, `text-gray-600`), d(I, c(`Rue \u4EE5\u7EC4\u4EF6\u8868\u8FBE\u754C\u9762\u4E2D\u7684\u53EF\u590D\u7528\u7247\u6BB5\u3002\u7EC4\u4EF6\u540C\u65F6\u5305\u542B\u7ED3\u6784\u4E0E\u903B\u8F91\uFF0C\u6309\u9700\u7EC4\u5408\u5373\u53EF\u5F62\u6210\u9875\u9762\u6216\u6A21\u5757\uFF0C\u8BED\u6CD5\u7B80\u6D01\u3001\u5FC3\u667A\u8D1F\u62C5\u4F4E\u3002`));
    let L = v(`div`);
    d(P, L), e(L, `mt-6 grid md:grid-cols-2 gap-6 items-start`);
    let R = v(`div`);
    d(L, R), e(R, `card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);
    let Se = y(`rue:component:start`), Ce = y(`rue:component:end`);
    d(R, Se), d(R, Ce), _(() => {
      p(S(w, {
        className: `h-full`,
        lang: `tsx`,
        code: `import { type FC } from 'rues'

const Hello: FC = () => (
  <div className="card bg-primary text-primary-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hello</div>
      <div className="mt-2 text-sm opacity-90">Hello component</div>
    </div>
  </div>
)

const World: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">World</div>
      <div className="mt-2 text-sm text-base-content/70">World component</div>
    </div>
  </div>
)

const HelloRue: FC = () => (
  <div className="card bg-accent text-accent-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hi</div>
      <div className="mt-2 text-sm opacity-90">Rue</div>
    </div>
  </div>
)

const IAmRue: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Yes</div>
      <div className="mt-2 text-sm text-base-content/70">My name is Rue</div>
    </div>
  </div>
)

const HelloWorld: FC = () => (
  <div className="grid gap-6">
    <Hello />
    <World />
    <HelloRue />
    <IAmRue />
  </div>
)

export default HelloWorld`
      }), R, Se, Ce);
    });
    let z = v(`div`);
    d(L, z), e(z, `grid gap-6`);
    let we = y(`rue:component:start`), Te = y(`rue:component:end`);
    d(z, we), d(z, Te), p(S(te, {}), z, we, Te);
    let Ee = y(`rue:component:start`), De = y(`rue:component:end`);
    d(z, Ee), d(z, De), p(S(ne, {}), z, Ee, De);
    let Oe = y(`rue:component:start`), ke = y(`rue:component:end`);
    d(z, Oe), d(z, ke), p(S(re, {}), z, Oe, ke);
    let Ae = y(`rue:component:start`), je = y(`rue:component:end`);
    d(z, Ae), d(z, je), p(S(ie, {}), z, Ae, je);
    let B = v(`p`);
    d(P, B), e(B, `mt-6 text-gray-600`), d(B, c(`Rue \u7684\u7EC4\u4EF6\u5F3A\u8C03\u53EF\u590D\u7528\u4E0E\u53EF\u7EC4\u5408\uFF0C\u5173\u6CE8\u6E05\u6670\u7684\u6570\u636E\u4E0E\u4E8B\u4EF6\u6D41\u3002\u4F60\u53EF\u4EE5\u6309\u9700\u62FC\u88C5\u6765\u81EA\u4E0D\u540C\u56E2\u961F\u7684\u6A21\u5757\uFF0C\u4FDD\u6301\u4E00\u81F4\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u800C\u4E0D\u53D7\u6C89\u91CD\u6846\u67B6\u7EA6\u675F\u3002`));
    let V = v(`section`);
    d(t2, V), e(V, `max-w-[1100px] mx-auto mt-12`);
    let H = v(`h2`);
    d(V, H), e(H, `text-2xl font-semibold mb-2`), d(H, c(`Vapor \u6A21\u5F0F\uFF1ARust \u7F16\u8BD1\u5230\u539F\u751F DOM`));
    let Me = v(`p`);
    d(V, Me), e(Me, `text-gray-600`), d(Me, c(`Rue \u4EE5 JSX/TSX \u63CF\u8FF0\u7ED3\u6784\u4E0E\u903B\u8F91\uFF0C\u4F7F\u7528 Vapor \u539F\u751F DOM \u6E32\u67D3\u8DEF\u5F84\u3002`));
    let Ne = v(`p`);
    d(V, Ne), e(Ne, `text-gray-600`), d(Ne, c(`Vapor \u7F16\u8BD1\u5668\u7531 Rust \u5B9E\u73B0\uFF0C\u5BF9\u5C0F\u5757\u66F4\u65B0\u8FDB\u884C\u7EC6\u7C92\u5EA6\u4F18\u5316\uFF1B\u9AD8\u6027\u80FD\u533A\u57DF\u91C7\u7528 Vapor\uFF0C\u901A\u7528\u533A\u57DF\u6CBF\u7528\u865A\u62DF DOM\uFF0C\u4E8C\u8005\u53EF\u6E10\u8FDB\u6DF7\u7528\u3002`));
    let U = v(`div`);
    d(V, U), e(U, `mt-6 grid md:grid-cols-2 gap-6 items-start`);
    let W = v(`div`);
    d(U, W), e(W, `card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);
    let Pe = y(`rue:component:start`), Fe = y(`rue:component:end`);
    d(W, Pe), d(W, Fe), _(() => {
      p(S(w, {
        className: `h-full`,
        lang: `tsx`,
        code: `const Hello: FC = () => (
  <div className="card bg-primary text-primary-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hello</div>
      <div className="mt-2 text-sm opacity-90">Hello component</div>
    </div>
  </div>
)

const World: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">World</div>
      <div className="mt-2 text-sm text-base-content/70">World component</div>
    </div>
  </div>
)

const HelloRue: FC = () => (
  <div className="card bg-accent text-accent-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hi</div>
      <div className="mt-2 text-sm opacity-90">Rue</div>
    </div>
  </div>
)

const IAmRue: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Yes</div>
      <div className="mt-2 text-sm text-base-content/70">My name is Rue</div>
    </div>
  </div>
)

const HelloWorld: FC = () => (
  <div className="grid gap-6">
    <Hello />
    <World />
    <HelloRue />
    <IAmRue />
  </div>
)

export default HelloWorld`
      }), W, Pe, Fe);
    });
    let G = v(`div`);
    d(U, G), e(G, `card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);
    let Ie = y(`rue:component:start`), Le = y(`rue:component:end`);
    d(G, Ie), d(G, Le), _(() => {
      p(S(w, {
        className: `h-full`,
        lang: `ts`,
        code: `/* RUE_VAPOR_TRANSFORMED */
import { jsxDEV as _jsxDEV } from "@rue/jsx-dev-runtime";
import { vapor, renderBetween, _$createElement, _$createComment, _$createTextNode, _$appendChild, _$setClassName } from "rues";
const Hello = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-primary text-primary-content shadow-sm");
        const _el1 = _$createElement("div");
        _$appendChild(_root, _el1);
        _$setClassName(_el1, "card-body items-center text-center");
        const _el2 = _$createElement("div");
        _$appendChild(_el1, _el2);
        _$setClassName(_el2, "text-3xl font-extrabold");
        _$appendChild(_el2, _$createTextNode("Hello"));
        const _el3 = _$createElement("div");
        _$appendChild(_el1, _el3);
        _$setClassName(_el3, "mt-2 text-sm opacity-90");
        _$appendChild(_el3, _$createTextNode("Hello component"));
        return {
            vaporElement: _root
        };
    });
const World = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-base-100 text-base-content border border-base-200 shadow-sm");
        const _el4 = _$createElement("div");
        _$appendChild(_root, _el4);
        _$setClassName(_el4, "card-body items-center text-center");
        const _el5 = _$createElement("div");
        _$appendChild(_el4, _el5);
        _$setClassName(_el5, "text-3xl font-extrabold");
        _$appendChild(_el5, _$createTextNode("World"));
        const _el6 = _$createElement("div");
        _$appendChild(_el4, _el6);
        _$setClassName(_el6, "mt-2 text-sm text-base-content/70");
        _$appendChild(_el6, _$createTextNode("World component"));
        return {
            vaporElement: _root
        };
    });
const HelloRue = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-accent text-accent-content shadow-sm");
        const _el7 = _$createElement("div");
        _$appendChild(_root, _el7);
        _$setClassName(_el7, "card-body items-center text-center");
        const _el8 = _$createElement("div");
        _$appendChild(_el7, _el8);
        _$setClassName(_el8, "text-3xl font-extrabold");
        _$appendChild(_el8, _$createTextNode("Hi"));
        const _el9 = _$createElement("div");
        _$appendChild(_el7, _el9);
        _$setClassName(_el9, "mt-2 text-sm opacity-90");
        _$appendChild(_el9, _$createTextNode("Rue"));
        return {
            vaporElement: _root
        };
    });
const IAmRue = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-base-100 text-base-content border border-base-200 shadow-sm");
        const _el10 = _$createElement("div");
        _$appendChild(_root, _el10);
        _$setClassName(_el10, "card-body items-center text-center");
        const _el11 = _$createElement("div");
        _$appendChild(_el10, _el11);
        _$setClassName(_el11, "text-3xl font-extrabold");
        _$appendChild(_el11, _$createTextNode("Yes"));
        const _el12 = _$createElement("div");
        _$appendChild(_el10, _el12);
        _$setClassName(_el12, "mt-2 text-sm text-base-content/70");
        _$appendChild(_el12, _$createTextNode("My name is Rue"));
        return {
            vaporElement: _root
        };
    });
const HelloWorld = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "grid gap-6");
        const _list1 = _$createComment("rue:component:start");
        const _list2 = _$createComment("rue:component:end");
        _$appendChild(_root, _list1);
        _$appendChild(_root, _list2);
        const __slot3 = /*#__PURE__*/ _jsxDEV(Hello, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 39,
            columnNumber: 5
        }, this);
        renderBetween(__slot3, _root, _list1, _list2);
        const _list4 = _$createComment("rue:component:start");
        const _list5 = _$createComment("rue:component:end");
        _$appendChild(_root, _list4);
        _$appendChild(_root, _list5);
        const __slot6 = /*#__PURE__*/ _jsxDEV(World, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, this);
        renderBetween(__slot6, _root, _list4, _list5);
        const _list7 = _$createComment("rue:component:start");
        const _list8 = _$createComment("rue:component:end");
        _$appendChild(_root, _list7);
        _$appendChild(_root, _list8);
        const __slot9 = /*#__PURE__*/ _jsxDEV(HelloRue, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, this);
        renderBetween(__slot9, _root, _list7, _list8);
        const _list10 = _$createComment("rue:component:start");
        const _list11 = _$createComment("rue:component:end");
        _$appendChild(_root, _list10);
        _$appendChild(_root, _list11);
        const __slot12 = /*#__PURE__*/ _jsxDEV(IAmRue, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 42,
            columnNumber: 5
        }, this);
        renderBetween(__slot12, _root, _list10, _list11);
        return {
            vaporElement: _root
        };
    });
export default HelloWorld;`
      }), G, Ie, Le);
    });
    let K = v(`div`);
    d(V, K), e(K, `mt-6 space-y-3 text-gray-700`);
    let Re = v(`p`);
    d(K, Re), d(Re, c(`Vapor \u6A21\u5F0F\u4F18\u52BF\uFF1A \u76F4\u63A5\u521B\u5EFA\u4E0E\u66F4\u65B0\u539F\u751F DOM\uFF0C\u907F\u514D\u865A\u62DF DOM \u534F\u8C03\u5F00\u9500\uFF1B\u6309\u9700\u3001\u7EC6\u7C92\u5EA6\u54CD\u5E94\u5F0F\u66F4\u65B0\uFF0C\u7EC4\u4EF6\u7EA7\u6302\u8F7D\u4E0E\u5378\u8F7D\u66F4\u9AD8\u6548\uFF1B\u66F4\u5C0F\u7684\u8FD0\u884C\u65F6\u8DEF\u5F84\u4E0E\u66F4\u5C11\u7684\u5185\u5B58\u5360\u7528\uFF0C\u5728\u590D\u6742\u754C\u9762\u4E2D\u8868\u73B0\u5C24\u4E3A\u7A33\u5B9A\u3002`));
    let q = v(`section`);
    d(t2, q), e(q, `max-w-[1100px] mx-auto mt-12`);
    let ze = v(`h2`);
    d(q, ze), e(ze, `text-2xl font-semibold mb-2`), d(ze, c(`\u5728\u9700\u8981\u7684\u5730\u65B9\u6DFB\u52A0\u4EA4\u4E92\uFF08\u517C\u5BB9 React / Vue\uFF09`));
    let Be = v(`p`);
    d(q, Be), e(Be, `text-gray-600`), d(Be, c(`Rue \u7EC4\u4EF6\u53EF\u4EE5\u63A5\u6536\u6570\u636E\u5E76\u8FD4\u56DE\u89C6\u56FE\u3002\u4F60\u65E2\u53EF\u4EE5\u7528 React \u98CE\u683C\u7684 useState\uFF0C \u4E5F\u53EF\u4EE5\u7528 Vue \u98CE\u683C\u7684 ref / reactive \u5728\u4EFB\u4F55\u4F4D\u7F6E\u589E\u52A0\u4EA4\u4E92\u3002`));
    let J = v(`div`);
    d(q, J), e(J, `mt-6 grid md:grid-cols-2 gap-6 items-start`);
    let Y = v(`div`);
    d(J, Y), e(Y, `card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);
    let Ve = y(`rue:component:start`), He = y(`rue:component:end`);
    d(Y, Ve), d(Y, He), _(() => {
      p(S(w, {
        className: `h-full`,
        lang: `tsx`,
        code: `import { type FC, useState, ref, reactive, computed } from 'rues';

type Video = { title: string; desc: string };
const videos: Video[] = [
  { title: '\u539F\u59CB DOM \u7F16\u7A0B', desc: '\u76F4\u63A5\u64CD\u4F5C\u8282\u70B9\u4E0E\u4E8B\u4EF6' },
  { title: 'jQuery \u7684\u5D1B\u8D77', desc: 'Write Less, Do More' },
  { title: 'Backbone.js \u4E0E MVC', desc: '\u65E9\u671F\u524D\u7AEF\u67B6\u6784\u63A2\u7D22' },
  { title: 'Web Components', desc: '\u539F\u751F\u7EC4\u4EF6\u6807\u51C6' },
  { title: '\u73B0\u4EE3\u6784\u5EFA\u5DE5\u5177\u4E0E\u751F\u6001', desc: '\u6A21\u5757\u5316\u4E0E\u5F00\u53D1\u4F53\u9A8C' },
];

const SearchInput: FC<{ value: string; onChange: (t: string) => void }> = p => (
  <input
    className="w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200 px-3 py-2"
    value={p.value}
    onInput={(e: any) => p.onChange((e.target as HTMLInputElement).value)}
    placeholder="\u641C\u7D22\u89C6\u9891"
  />
)

// VideoList \u7EC4\u4EF6
const VideoList: FC<{ videos: Video[]; emptyHeading?: string }> = p => (
  <div className="mt-3 space-y-2">
    <div className="text-sm text-gray-700">{p.videos.length} \u4E2A\u89C6\u9891</div>
    {p.videos.length === 0 ? (
      <div className="rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3 text-sm">
        {p.emptyHeading || '\u6682\u65E0\u5339\u914D'}
      </div>
    ) : (
      <ul className="space-y-2">
        {p.videos.map((v, i) => (
          <li
            key={i}
            className="rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3"
          >
            <div className="font-medium">{v.title}</div>
            <div className="text-sm text-gray-500">{v.desc}</div>
          </li>
        ))}
      </ul>
    )}
  </div>
)

const SearchableVideoList: FC<{ videos: Video[] }> = (p) => {
  const [searchText, setSearchText] = useState('');
  const foundVideos = computed(() =>
    p.videos.filter(v =>
      v.title.toLowerCase().includes(searchText.value.toLowerCase()),
    )
  )

  return (
    <>
      <SearchInput value={searchText.value} onChange={setSearchText} />
      <VideoList videos={foundVideos} emptyHeading={\`\u6CA1\u6709\u5339\u914D \u201C\${searchText.value}\u201D\`} />
    </>
  );
};

const ReactiveDemo: FC = () => {
  const count = ref(0);
  const state = reactive({ enabled: false });
  return (
    <div className="rounded-xl border border-gray-200/70 bg-white/60 backdrop-blur-sm p-4">
      <div className="flex items-center gap-3">
        <button className="btn btn-primary" onClick={() => (count.value++)}>+1</button>
        <button className="btn btn-outline" onClick={() => (count.value = 0)}>\u91CD\u7F6E</button>
        <label className="flex items-center gap-2 ml-auto">
          <input
            type="checkbox"
            className="checkbox"
            checked={state.enabled}
            onChange={(e: any) => (state.enabled = (e.target as HTMLInputElement).checked)}
          />
          <span className="text-sm">\u542F\u7528</span>
        </label>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        \u8BA1\u6570\uFF1A{count.value}\uFF0C\u542F\u7528\uFF1A{state.enabled ? '\u662F' : '\u5426'}
      </div>
    </div>
  );
};

const Reactive: FC = () => (
  <div className="grid gap-6">
    <div>
      <h3 className="text-lg font-semibold mb-2">\u524D\u7AEF\u7684\u53D1\u5C55\uFF0C\u4ECE\u539F\u59CBDOM\uFF0C\u5230 JQUERY\u7B49</h3>
      <SearchableVideoList videos={videos} />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">ref / reactive \u793A\u4F8B</h3>
      <ReactiveDemo />
    </div>
  </div>
)

export default Reactive;`
      }), Y, Ve, He);
    });
    let X = v(`div`);
    d(J, X), e(X, `grid gap-6`);
    let Z = v(`div`);
    d(X, Z);
    let Ue = v(`h3`);
    d(Z, Ue), e(Ue, `text-lg font-semibold mb-2`), d(Ue, c(`\u524D\u7AEF\u7684\u53D1\u5C55\uFF0C\u4ECE\u539F\u59CBDOM\uFF0C\u5230 JQUERY\u7B49`));
    let We = y(`rue:component:start`), Ge = y(`rue:component:end`);
    d(Z, We), d(Z, Ge), _(() => {
      p(S(se, {
        videos: ae
      }), Z, We, Ge);
    });
    let Q = v(`div`);
    d(X, Q);
    let Ke = v(`h3`);
    d(Q, Ke), e(Ke, `text-lg font-semibold mb-2`), d(Ke, c(`ref / reactive \u793A\u4F8B`));
    let qe = y(`rue:component:start`), Je = y(`rue:component:end`);
    d(Q, qe), d(Q, Je), p(S(ce, {}), Q, qe, Je);
    let $ = v(`p`);
    return d(q, $), e($, `mt-6 text-gray-600`), d($, c(`Rue \u652F\u6301\u6E10\u8FDB\u96C6\u6210\uFF1A\u5728\u4EFB\u610F DOM \u8282\u70B9\u6302\u8F7D\u4EA4\u4E92\u7247\u6BB5\uFF0C\u4E0E\u73B0\u6709\u9875\u9762\u5171\u5B58\uFF0C\u65E0\u9700\u91CD\u5199\u6574\u7AD9\u3002`)), {
      vaporElement: t2
    };
  });
});
export {
  __tla,
  le as default
};

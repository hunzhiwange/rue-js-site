import { A as e, C as t, F as n, G as r, I as i, K as a, L as o, O as s, P as c, R as l, S as u, U as d, W as f, _ as p, b as m, f as h, g, i as _, k as v, m as y, n as b, q as x, x as S, y as C, z as w, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as T, r as E, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as D, s as O, t as k, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { t as A } from "./general-BmFRDxl1.js";
let Te;
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
  })()
]).then(async () => {
  var j = r(`ref:1:0`, () => w(0));
  r(`watch:1:1`, () => a(j, (e2, t2) => {
    console.info(`watch\u8BA1\u6570\u4ECE ${t2} \u53D8\u4E3A ${e2}`);
  }, {
    immediate: true
  }));
  var ee = () => {
    let { count: n2 } = r(`useSetup:0:0`, () => d(() => ({
      count: j
    })));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let a2 = S(`h2`);
      p(r2, a2), e(a2, `text-xl font-semibold mb-2`), p(a2, u(`\u8BA1\u6570\u5668\u793A\u4F8B 123456`));
      let o2 = S(`div`);
      p(r2, o2), e(o2, `text-4xl font-bold mb-3`);
      let s2 = t(o2);
      p(o2, s2), x(() => {
        i(s2, n2.value);
      });
      let c2 = S(`div`);
      p(r2, c2), e(c2, `flex flex-wrap justify-center gap-2`);
      let l2 = S(`button`);
      p(c2, l2), e(l2, `rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`), g(l2, `click`, () => n2.value++), p(l2, u(`+1`));
      let d2 = S(`button`);
      p(c2, d2), e(d2, `rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`), g(d2, `click`, () => n2.value--), p(d2, u(`-1`));
      let f2 = S(`button`);
      return p(c2, f2), e(f2, `rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`), g(f2, `click`, () => n2.value = 0), p(f2, u(`\u91CD\u7F6E`)), {
        vaporElement: r2
      };
    });
  }, M = r(`ref:1:2`, () => w(0)), te = () => {
    let e2 = M;
    return _(`div`, {
      className: `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`
    }, _(`h2`, {
      className: `text-xl font-semibold mb-2`
    }, `\u8BA1\u6570\u5668\u793A\u4F8B`), _(`div`, {
      className: `text-3xl font-bold mb-3`
    }, e2.value), _(`div`, {
      className: `flex flex-wrap justify-center gap-2`
    }, _(`button`, {
      className: `rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`,
      onClick: () => e2.value++
    }, `+1`), _(`button`, {
      className: `rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`,
      onClick: () => e2.value--
    }, `-1`), _(`button`, {
      className: `rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`,
      onClick: () => e2.value = 0
    }, `\u91CD\u7F6E`)));
  };
  r(`watchEffect:1:3`, () => x(() => {
    console.info(`watchEffect\u8BA1\u6570\u53D1\u751F\u4E86counter\u53D8\u5316\uFF1A${j.value}`), console.info(`watchEffect\u8BA1\u6570counter2\u53D1\u751F\u4E86\u53D8\u5316\uFF1A${M.value}`);
  }));
  let ne, N, P, F, re, I, L, R, z, ie, B, V, H, ae, U, W, oe, se, G, ce, le, K, q, ue, de, fe, J, Y, X, Z, pe, me, he, Q, $, ge, _e, ve, ye, be, xe, Se, Ce, we;
  ne = () => {
    let { count: n2, setCount: a2 } = r(`useSetup:0:0`, () => d(() => {
      let [e2, t2] = r(`useState:1:4`, () => f(0));
      return {
        count: e2,
        setCount: t2
      };
    }));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let o2 = S(`h2`);
      p(r2, o2), e(o2, `text-xl font-semibold mb-2`), p(o2, u(`\u8BA1\u6570\u5668\u793A\u4F8B useState`));
      let s2 = S(`div`);
      p(r2, s2), e(s2, `text-4xl font-bold mb-3`);
      let c2 = t(s2);
      p(s2, c2), x(() => {
        i(c2, n2.value);
      });
      let l2 = S(`div`);
      p(r2, l2), e(l2, `flex flex-wrap justify-center gap-2`);
      let d2 = S(`button`);
      p(l2, d2), e(d2, `rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`), g(d2, `click`, () => a2((e2) => {
        e2.value += 1;
      })), p(d2, u(`+1`));
      let f2 = S(`button`);
      p(l2, f2), e(f2, `rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`), g(f2, `click`, () => a2((e2) => {
        --e2.value;
      })), p(f2, u(`-1`));
      let m2 = S(`button`);
      return p(l2, m2), e(m2, `rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`), g(m2, `click`, () => a2(0)), p(m2, u(`\u91CD\u7F6E`)), {
        vaporElement: r2
      };
    });
  };
  N = r(`reactive:1:5`, () => l({
    todos: [
      {
        id: 1,
        text: `\u5B66\u4E60\u54CD\u5E94\u5F0F\u6846\u67B6`,
        completed: false
      },
      {
        id: 2,
        text: `\u7F16\u5199\u793A\u4F8B\u4EE3\u7801`,
        completed: true
      },
      {
        id: 3,
        text: `\u6D4B\u8BD5\u529F\u80FD`,
        completed: false
      }
    ],
    newTodo: ``
  }));
  P = () => {
    let { state: a2, addTodo: c2, toggleTodo: l2, deleteTodo: f2, completedCount: _2 } = r(`useSetup:0:0`, () => d(() => {
      let e2 = N;
      function t2() {
        e2.newTodo.trim() && (e2.todos.push({
          id: Date.now(),
          text: e2.newTodo,
          completed: false
        }), e2.newTodo = ``);
      }
      function n2(t3) {
        let n3 = e2.todos.find((e3) => e3.id === t3);
        n3 && (n3.completed = !n3.completed);
      }
      function i2(t3) {
        let n3 = e2.todos.findIndex((e3) => e3.id === t3);
        n3 !== -1 && e2.todos.splice(n3, 1);
      }
      return {
        state: e2,
        addTodo: t2,
        toggleTodo: n2,
        deleteTodo: i2,
        completedCount: r(`computed:1:6`, () => o(() => e2.todos.filter((e3) => e3.completed).length))
      };
    }));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let o2 = S(`h2`);
      p(r2, o2), e(o2, `text-xl font-semibold mb-3`), p(o2, u(`\u5F85\u529E\u4E8B\u9879`));
      let d2 = S(`div`);
      p(r2, d2), e(d2, `flex items-center gap-2 mb-3`);
      let v2 = S(`input`);
      p(d2, v2), s(v2, `type`, `text`), x(() => {
        n(v2, a2.newTodo);
      }), g(v2, `input`, (e2) => {
        a2.newTodo = e2.target.value;
      }), g(v2, `keypress`, (e2) => {
        e2.key === `Enter` && c2();
      }), e(v2, `flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);
      let b2 = S(`button`);
      p(d2, b2), e(b2, `rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300`), g(b2, `click`, c2), p(b2, u(`\u6DFB\u52A0`));
      let w2 = S(`div`);
      p(r2, w2);
      let T2 = C(`rue:list:start`), D2 = C(`rue:list:end`);
      p(w2, T2), p(w2, D2);
      let O2 = /* @__PURE__ */ new Map();
      x(() => {
        O2 = E({
          items: a2.todos || [],
          getKey: (e2, t2) => e2.id,
          elements: O2,
          parent: w2,
          before: D2,
          start: T2,
          renderItem: (n2, r3, a3, o3, c3) => {
            h(y(() => {
              let r4 = m(), a4 = S(`div`);
              p(r4, a4), x(() => {
                s(a4, `key`, String(n2.id));
              }), x(() => {
                e(a4, String(`flex items-center justify-between rounded-lg border p-3 mb-2 ${n2.completed ? `bg-gray-50` : `bg-white`}`));
              });
              let o4 = S(`span`);
              p(a4, o4), g(o4, `click`, () => l2(n2.id)), x(() => {
                e(o4, String(`cursor-pointer ${n2.completed ? `line-through text-gray-500` : `text-gray-800`}`));
              });
              let c4 = t(o4);
              p(o4, c4), x(() => {
                i(c4, n2.text);
              });
              let d3 = S(`button`);
              return p(a4, d3), e(d3, `rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`), g(d3, `click`, () => f2(n2.id)), p(d3, u(`\u5220\u9664`)), {
                vaporElement: r4
              };
            }), r3, a3, o3);
          }
        });
      });
      let k2 = S(`p`);
      p(r2, k2);
      let A2 = t(k2);
      return p(k2, A2), x(() => {
        i(A2, `\u603B\u8BA1: ${a2.todos.length} | \u5DF2\u5B8C\u6210: ${_2.get()}`);
      }), {
        vaporElement: r2
      };
    });
  };
  F = r(`reactive:1:7`, () => l({
    name: `\u5F20\u4E09`,
    age: 25,
    email: `zhangsan@example.com`,
    isEditing: false
  }));
  re = () => y(() => {
    let r2 = S(`div`);
    e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
    let a2 = S(`h2`);
    p(r2, a2), e(a2, `text-xl font-semibold mb-4`), p(a2, u(`\u7528\u6237\u4FE1\u606F`));
    let o2 = C(`rue:slot:start`), c2 = C(`rue:slot:end`);
    return p(r2, o2), p(r2, c2), x(() => {
      h(T(F.isEditing ? y(() => {
        let t2 = m(), r3 = S(`div`);
        p(t2, r3), e(r3, `space-y-3`);
        let i2 = S(`p`);
        p(r3, i2), e(i2, `flex items-center gap-2`);
        let a3 = S(`span`);
        p(i2, a3), p(a3, u(`\u59D3\u540D:`));
        let o3 = S(`input`);
        p(i2, o3), e(o3, `flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`), x(() => {
          n(o3, F.name);
        }), g(o3, `input`, (e2) => {
          F.name = e2.target.value;
        });
        let c3 = S(`p`);
        p(r3, c3), e(c3, `flex items-center gap-2`);
        let l2 = S(`span`);
        p(c3, l2), p(l2, u(`\u5E74\u9F84:`));
        let d2 = S(`input`);
        p(c3, d2), e(d2, `w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`), s(d2, `type`, `number`), x(() => {
          n(d2, F.age);
        }), g(d2, `input`, (e2) => {
          F.age = parseInt(e2.target.value) || 0;
        });
        let f2 = S(`p`);
        p(r3, f2), e(f2, `flex items-center gap-2`);
        let h2 = S(`span`);
        p(f2, h2), p(h2, u(`\u90AE\u7BB1:`));
        let _2 = S(`input`);
        p(f2, _2), e(_2, `flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`), x(() => {
          n(_2, F.email);
        }), g(_2, `input`, (e2) => {
          F.email = e2.target.value;
        });
        let v2 = S(`button`);
        return p(r3, v2), e(v2, `rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`), g(v2, `click`, () => F.isEditing = false), p(v2, u(`\u4FDD\u5B58`)), {
          vaporElement: t2
        };
      }) : y(() => {
        let e2 = m(), n2 = S(`div`);
        p(e2, n2);
        let r3 = S(`p`);
        p(n2, r3), p(r3, u(`\u59D3\u540D: `));
        let a3 = t(r3);
        p(r3, a3), x(() => {
          i(a3, F.name);
        });
        let o3 = S(`p`);
        p(n2, o3), p(o3, u(`\u5E74\u9F84: `));
        let s2 = t(o3);
        p(o3, s2), x(() => {
          i(s2, F.age);
        });
        let c3 = S(`p`);
        p(n2, c3), p(c3, u(`\u90AE\u7BB1: `));
        let l2 = t(c3);
        p(c3, l2), x(() => {
          i(l2, F.email);
        });
        let d2 = S(`button`);
        return p(n2, d2), g(d2, `click`, () => F.isEditing = true), p(d2, u(`\u7F16\u8F91`)), {
          vaporElement: e2
        };
      })), r2, o2, c2);
    }), {
      vaporElement: r2
    };
  });
  I = (n2) => y(() => {
    let r2 = S(`div`);
    e(r2, `box`), x(() => {
      c(r2, {
        border: `1px solid #ddd`,
        padding: `12px`,
        marginBottom: `12px`,
        background: n2.background
      });
    });
    let a2 = S(`h3`);
    p(r2, a2), x(() => {
      c(a2, {
        margin: `0 0 8px`
      });
    });
    let o2 = t(a2);
    p(a2, o2), x(() => {
      i(o2, n2.title);
    });
    let s2 = S(`div`);
    p(r2, s2), e(s2, `content`);
    let l2 = C(`rue:children:start`), u2 = C(`rue:children:end`);
    return p(s2, l2), p(s2, u2), x(() => {
      let e2 = n2.children;
      h(T(e2), s2, l2, u2);
    }), {
      vaporElement: r2
    };
  });
  L = (n2) => y(() => {
    let r2 = S(`div`);
    e(r2, `layout border border-gray-300 p-4 rounded-md`);
    let a2 = S(`div`);
    p(r2, a2), e(a2, `layout-header bg-gray-100 p-3`);
    let o2 = t(a2);
    p(a2, o2), x(() => {
      i(o2, n2.header);
    });
    let s2 = S(`div`);
    p(r2, s2), e(s2, `layout-content p-3`);
    let c2 = C(`rue:children:start`), l2 = C(`rue:children:end`);
    p(s2, c2), p(s2, l2), x(() => {
      let e2 = n2.children;
      h(T(e2), s2, c2, l2);
    });
    let u2 = S(`div`);
    p(r2, u2), e(u2, `layout-footer bg-gray-100 p-3`);
    let d2 = t(u2);
    p(u2, d2), x(() => {
      i(d2, n2.footer);
    });
    let f2 = S(`div`);
    p(r2, f2), e(f2, `layout-content bg-gray-100 p-3`);
    let m2 = t(f2);
    return p(f2, m2), x(() => {
      i(m2, n2.content);
    }), {
      vaporElement: r2
    };
  });
  R = r(`ref:1:8`, () => w([
    `\u82F9\u679C`,
    `\u9999\u8549`,
    `\u6A58\u5B50`
  ]));
  z = r(`ref:1:9`, () => w(``));
  ie = () => {
    let { addItem: a2, removeAt: o2 } = r(`useSetup:0:0`, () => d(() => {
      function e2() {
        let e3 = z.value.trim();
        e3 && (R.value = [
          ...R.value,
          e3
        ], z.value = ``);
      }
      function t2(e3) {
        R.value = R.value.filter((t3, n2) => n2 !== e3);
      }
      return {
        addItem: e2,
        removeAt: t2
      };
    }));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let c2 = S(`h2`);
      p(r2, c2), e(c2, `text-xl font-semibold text-blue-600 mb-3`), p(c2, u(`React \u98CE\u683C map \u5217\u8868\u6E32\u67D3`));
      let l2 = S(`div`);
      p(r2, l2), e(l2, `flex items-center gap-2`);
      let d2 = S(`input`);
      p(l2, d2), s(d2, `type`, `text`), x(() => {
        n(d2, z.value);
      }), g(d2, `input`, (e2) => {
        z.value = e2.target.value;
      }), g(d2, `keypress`, (e2) => {
        e2.key === `Enter` && a2();
      }), e(d2, `rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);
      let f2 = S(`button`);
      p(l2, f2), e(f2, `rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`), g(f2, `click`, a2), p(f2, u(`\u6DFB\u52A0`));
      let _2 = S(`ul`);
      p(r2, _2), e(_2, `mt-3 space-y-2`);
      let v2 = C(`rue:list:start`), b2 = C(`rue:list:end`);
      p(_2, v2), p(_2, b2);
      let w2 = /* @__PURE__ */ new Map();
      return x(() => {
        w2 = E({
          items: R.value || [],
          getKey: (e2, t2) => t2,
          elements: w2,
          parent: _2,
          before: b2,
          start: v2,
          renderItem: (n2, r3, a3, c3, l3) => {
            h(y(() => {
              let r4 = m(), a4 = S(`li`);
              p(r4, a4), x(() => {
                s(a4, `key`, String(l3));
              }), e(a4, `flex items-center gap-3 mb-2`);
              let c4 = S(`span`);
              p(a4, c4), e(c4, `text-gray-800`);
              let d3 = t(c4);
              p(c4, d3), x(() => {
                i(d3, n2);
              });
              let f3 = S(`button`);
              return p(a4, f3), e(f3, `rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`), g(f3, `click`, () => o2(l3)), p(f3, u(`\u5220\u9664`)), {
                vaporElement: r4
              };
            }), r3, a3, c3);
          }
        });
      }), {
        vaporElement: r2
      };
    });
  };
  B = r(`ref:1:10`, () => w(true));
  V = r(`ref:1:11`, () => w(1));
  H = r(`ref:1:12`, () => w(`Hello`));
  ae = () => y(() => {
    let n2 = S(`div`);
    e(n2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
    let r2 = S(`h2`);
    p(n2, r2), e(r2, `text-xl font-semibold text-purple-600 mb-3`), p(r2, u(`React \u98CE\u683C\u6761\u4EF6\u6E32\u67D3`));
    let a2 = S(`div`);
    p(n2, a2), e(a2, `flex flex-wrap justify-center gap-2`);
    let o2 = S(`button`);
    p(a2, o2), e(o2, `rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`), g(o2, `click`, () => B.value = !B.value);
    let s2 = t(o2);
    p(o2, s2), x(() => {
      i(s2, B.value ? `\u9690\u85CF\u8BE6\u60C5` : `\u663E\u793A\u8BE6\u60C5`);
    });
    let c2 = S(`button`);
    p(a2, c2), e(c2, `rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`), g(c2, `click`, () => V.value++), p(c2, u(`\u7B49\u7EA7+1`));
    let l2 = S(`button`);
    p(a2, l2), e(l2, `rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`), g(l2, `click`, () => H.value = H.value ? `` : `Hello`);
    let d2 = t(l2);
    p(l2, d2), x(() => {
      i(d2, H.value ? `\u6E05\u7A7A\u6D88\u606F` : `\u6062\u590D\u6D88\u606F`);
    });
    let f2 = C(`rue:slot:start`), _2 = C(`rue:slot:end`);
    p(n2, f2), p(n2, _2), x(() => {
      h(T(B.value ? y(() => {
        let t2 = m(), n3 = S(`div`);
        p(t2, n3), e(n3, `mt-2`);
        let r3 = S(`p`);
        return p(n3, r3), e(r3, `text-gray-700`), p(r3, u(`\u8BE6\u60C5\u533A\u57DF\uFF1A\u4EC5\u5728 show \u4E3A true \u65F6\u663E\u793A`)), {
          vaporElement: t2
        };
      }) : ``), n2, f2, _2);
    });
    let v2 = S(`p`);
    p(n2, v2), e(v2, `text-gray-700`), p(v2, u(`\u7B49\u7EA7\u72B6\u6001\uFF1A`));
    let b2 = t(v2);
    p(v2, b2), x(() => {
      i(b2, V.value >= 3 ? `\u9AD8\u7EA7` : `\u666E\u901A`);
    });
    let w2 = C(`rue:slot:start`), E2 = C(`rue:slot:end`);
    return p(n2, w2), p(n2, E2), x(() => {
      h(T(H.value ? y(() => {
        let n3 = m(), r3 = S(`p`);
        p(n3, r3), e(r3, `text-gray-700`), p(r3, u(`\u6D88\u606F\uFF1A`));
        let a3 = t(r3);
        return p(r3, a3), x(() => {
          i(a3, H.value);
        }), {
          vaporElement: n3
        };
      }) : ``), n2, w2, E2);
    }), {
      vaporElement: n2
    };
  });
  U = r(`ref:1:13`, () => w(``));
  W = r(`ref:1:14`, () => w(``));
  oe = (t2) => y(() => {
    let r2 = S(`div`);
    e(r2, `flex items-center gap-2`);
    let i2 = S(`input`);
    p(r2, i2), e(i2, `rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`), x(() => {
      n(i2, W.value);
    }), g(i2, `input`, (e2) => {
      W.value = e2.target.value;
    }), s(i2, `placeholder`, `\u8F93\u5165\u6D88\u606F`);
    let a2 = S(`button`);
    return p(r2, a2), e(a2, `rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`), g(a2, `click`, () => t2.onNotify(W.value)), p(a2, u(`\u5B50\u89E6\u53D1\u901A\u77E5`)), {
      vaporElement: r2
    };
  });
  se = () => {
    let { onNotify: n2 } = r(`useSetup:0:0`, () => d(() => ({
      onNotify: (e2) => {
        U.value = e2;
      }
    })));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let a2 = S(`h2`);
      p(r2, a2), e(a2, `text-xl font-semibold text-teal-600 mb-3`), p(a2, u(`\u5B50\u7EC4\u4EF6\u8C03\u7528\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5`));
      let o2 = C(`rue:component:start`), s2 = C(`rue:component:end`);
      p(r2, o2), p(r2, s2), h(D(oe, {
        onNotify: n2
      }), r2, o2, s2);
      let c2 = S(`p`);
      p(r2, c2), e(c2, `text-gray-700`), p(c2, u(`\u7236\u7EC4\u4EF6\u63A5\u6536\u7684\u6D88\u606F\uFF1A`));
      let l2 = t(c2);
      return p(c2, l2), x(() => {
        i(l2, U.value || `\uFF08\u6682\u65E0\uFF09`);
      }), {
        vaporElement: r2
      };
    });
  };
  G = r(`ref:1:15`, () => w(0));
  ce = (n2) => y(() => {
    let r2 = S(`div`);
    x(() => {
      c(r2, {
        display: `flex`,
        gap: `8px`,
        alignItems: `center`
      });
    });
    let a2 = S(`span`);
    p(r2, a2), p(a2, u(`\u5B50\u8BA1\u6570\uFF1A`));
    let o2 = t(a2);
    p(a2, o2), x(() => {
      i(o2, n2.count);
    });
    let s2 = S(`button`);
    p(r2, s2), e(s2, `rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`), g(s2, `click`, n2.onInc), p(s2, u(`\u5B50\u81EA\u589E`));
    let l2 = S(`button`);
    return p(r2, l2), e(l2, `rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`), g(l2, `click`, n2.onReset), p(l2, u(`\u5B50\u91CD\u7F6E`)), {
      vaporElement: r2
    };
  });
  le = () => y(() => {
    let n2 = S(`div`);
    e(n2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
    let r2 = S(`h2`);
    p(n2, r2), e(r2, `text-xl font-semibold text-sky-600 mb-3`), p(r2, u(`\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\uFF08\u72B6\u6001\u63D0\u5347 + \u4E8B\u4EF6\u56DE\u8C03\uFF09`));
    let a2 = S(`div`);
    p(n2, a2), e(a2, `flex items-center gap-2`);
    let o2 = S(`button`);
    p(a2, o2), e(o2, `rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`), g(o2, `click`, () => G.value++), p(o2, u(`\u7236\u89E6\u53D1\u5B50\u81EA\u589E`));
    let s2 = S(`button`);
    p(a2, s2), e(s2, `rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`), g(s2, `click`, () => G.value = 0), p(s2, u(`\u7236\u89E6\u53D1\u5B50\u91CD\u7F6E`));
    let c2 = S(`p`);
    p(n2, c2), e(c2, `mt-2 text-gray-700`), p(c2, u(`\uFF08\u7236\u89C6\u56FE\u5C55\u793A\u5B50\u8BA1\u6570\uFF09\uFF1A`));
    let l2 = t(c2);
    p(c2, l2), x(() => {
      i(l2, G.value);
    });
    let d2 = C(`rue:component:start`), f2 = C(`rue:component:end`);
    return p(n2, d2), p(n2, f2), x(() => {
      h(D(ce, {
        count: G.value,
        onInc: () => G.value++,
        onReset: () => G.value = 0
      }), n2, d2, f2);
    }), {
      vaporElement: n2
    };
  });
  K = r(`ref:1:16`, () => w(`\u5C0F\u660E`));
  q = r(`ref:1:17`, () => w(false));
  ue = (t2) => y(() => {
    let r2 = S(`input`);
    return e(r2, `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`), x(() => {
      n(r2, t2.modelValue ?? ``);
    }), g(r2, `input`, (e2) => {
      var _a;
      return (_a = t2[`onUpdate:modelValue`]) == null ? void 0 : _a.call(t2, e2.target.value);
    }), {
      vaporElement: r2
    };
  });
  de = (t2) => y(() => {
    let n2 = S(`label`);
    e(n2, `flex items-center space-x-2`);
    let r2 = S(`input`);
    p(n2, r2), s(r2, `type`, `checkbox`), e(r2, `h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`), x(() => {
      v(r2, !!t2.modelValue);
    }), g(r2, `change`, (e2) => {
      var _a;
      return (_a = t2[`onUpdate:modelValue`]) == null ? void 0 : _a.call(t2, e2.target.checked);
    });
    let i2 = S(`span`);
    return p(n2, i2), e(i2, `text-sm font-medium text-gray-700`), p(i2, u(`\u540C\u610F\u534F\u8BAE`)), {
      vaporElement: n2
    };
  });
  fe = () => y(() => {
    let n2 = S(`div`);
    e(n2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
    let r2 = S(`h2`);
    p(n2, r2), e(r2, `text-xl font-semibold text-emerald-600 mb-3`), p(r2, u(`\u7EC4\u4EF6\u7EA7 vModel`));
    let a2 = C(`rue:component:start`), o2 = C(`rue:component:end`);
    p(n2, a2), p(n2, o2), x(() => {
      h(D(ue, {
        vModel: K
      }), n2, a2, o2);
    });
    let s2 = S(`p`);
    p(n2, s2), e(s2, `text-gray-700`), p(s2, u(`\u59D3\u540D\uFF1A`));
    let c2 = t(s2);
    p(s2, c2), x(() => {
      i(c2, K.value);
    });
    let l2 = C(`rue:component:start`), d2 = C(`rue:component:end`);
    p(n2, l2), p(n2, d2), x(() => {
      h(D(de, {
        vModel: q
      }), n2, l2, d2);
    });
    let f2 = S(`p`);
    p(n2, f2), e(f2, `text-gray-700`), p(f2, u(`\u540C\u610F\u72B6\u6001\uFF1A`));
    let m2 = t(f2);
    return p(f2, m2), x(() => {
      i(m2, q.value ? `\u662F` : `\u5426`);
    }), {
      vaporElement: n2
    };
  });
  J = r(`ref:1:18`, () => w(`\u521D\u59CB\u6807\u9898`));
  Y = r(`ref:1:19`, () => w(false));
  X = r(`ref:1:20`, () => w(`\u9ED8\u8BA4\u8F93\u5165`));
  Z = r(`ref:1:21`, () => w(`\u521D\u59CB\u5185\u5BB9`));
  pe = (t2) => y(() => {
    let n2 = S(`label`);
    e(n2, `flex items-center space-x-2`);
    let r2 = S(`input`);
    p(n2, r2), s(r2, `type`, `checkbox`), e(r2, `h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`), x(() => {
      v(r2, !!t2.enabled);
    }), g(r2, `change`, (e2) => {
      var _a;
      return (_a = t2[`onUpdate:enabled`]) == null ? void 0 : _a.call(t2, e2.target.checked);
    });
    let i2 = S(`span`);
    return p(n2, i2), e(i2, `text-sm font-medium text-gray-700`), p(i2, u(`\u542F\u7528`)), {
      vaporElement: n2
    };
  });
  me = (t2) => y(() => {
    let r2 = S(`div`);
    x(() => {
      c(r2, {
        display: `grid`,
        gap: `8px`
      });
    });
    let i2 = S(`div`);
    p(r2, i2), x(() => {
      c(i2, {
        display: `flex`,
        gap: `8px`,
        alignItems: `center`
      });
    });
    let a2 = S(`span`);
    p(i2, a2), p(a2, u(`\u9ED8\u8BA4`));
    let o2 = S(`input`);
    p(i2, o2), e(o2, `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`), x(() => {
      n(o2, t2.modelValue ?? ``);
    }), g(o2, `input`, (e2) => {
      var _a;
      return (_a = t2[`onUpdate:modelValue`]) == null ? void 0 : _a.call(t2, e2.target.value);
    });
    let s2 = S(`div`);
    p(r2, s2), x(() => {
      c(s2, {
        display: `flex`,
        gap: `8px`,
        alignItems: `center`
      });
    });
    let l2 = S(`span`);
    p(s2, l2), p(l2, u(`\u6807\u9898`));
    let d2 = S(`input`);
    p(s2, d2), e(d2, `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`), x(() => {
      n(d2, t2.title ?? ``);
    }), g(d2, `input`, (e2) => {
      var _a;
      return (_a = t2[`onUpdate:title`]) == null ? void 0 : _a.call(t2, e2.target.value);
    });
    let f2 = S(`div`);
    p(r2, f2), x(() => {
      c(f2, {
        display: `flex`,
        gap: `8px`,
        alignItems: `center`
      });
    });
    let m2 = S(`span`);
    p(f2, m2), p(m2, u(`\u5185\u5BB9`));
    let h2 = S(`textarea`);
    return p(f2, h2), e(h2, `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`), x(() => {
      n(h2, t2.content ?? ``);
    }), g(h2, `input`, (e2) => {
      var _a;
      return (_a = t2[`onUpdate:content`]) == null ? void 0 : _a.call(t2, e2.target.value);
    }), {
      vaporElement: r2
    };
  });
  he = () => y(() => {
    let n2 = S(`div`);
    e(n2, `container`);
    let r2 = S(`h2`);
    p(n2, r2), p(r2, u(`\u547D\u540D vModel:hello\uFF08\u53C2\u8003 Vue3\uFF09`));
    let a2 = C(`rue:component:start`), o2 = C(`rue:component:end`);
    p(n2, a2), p(n2, o2), x(() => {
      h(D(me, {
        vModel: X,
        "vModel:title": J,
        "vModel:content": Z
      }), n2, a2, o2);
    });
    let s2 = S(`p`);
    p(n2, s2), p(s2, u(`\u9ED8\u8BA4 vModel\uFF1A`));
    let c2 = t(s2);
    p(s2, c2), x(() => {
      i(c2, X.value);
    });
    let l2 = S(`p`);
    p(n2, l2), p(l2, u(`\u6807\u9898\uFF1A`));
    let d2 = t(l2);
    p(l2, d2), x(() => {
      i(d2, J.value);
    });
    let f2 = S(`p`);
    p(n2, f2), p(f2, u(`\u5185\u5BB9\uFF1A`));
    let m2 = t(f2);
    p(f2, m2), x(() => {
      i(m2, Z.value);
    });
    let g2 = C(`rue:component:start`), _2 = C(`rue:component:end`);
    p(n2, g2), p(n2, _2), x(() => {
      h(D(pe, {
        "vModel:enabled": Y
      }), n2, g2, _2);
    });
    let v2 = S(`p`);
    p(n2, v2), p(v2, u(`\u542F\u7528\u72B6\u6001\uFF1A`));
    let y2 = t(v2);
    return p(v2, y2), x(() => {
      i(y2, Y.value ? `\u662F` : `\u5426`);
    }), {
      vaporElement: n2
    };
  });
  Q = r(`ref:1:22`, () => w(``));
  $ = r(`ref:1:23`, () => w(``));
  ge = (t2) => {
    let { emit: n2 } = r(`useSetup:0:0`, () => d(() => ({
      emit: b(t2)
    })));
    return y(() => {
      let t3 = S(`button`);
      return e(t3, `rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`), g(t3, `click`, () => n2(`save`, `\u5DF2\u4FDD\u5B58\u7684\u662F\u6570\u636E\u662F123456`)), p(t3, u(`\u89E6\u53D1\u4FDD\u5B58`)), {
        vaporElement: t3
      };
    });
  };
  _e = (t2) => {
    let { emit: i2 } = r(`useSetup:0:0`, () => d(() => ({
      emit: b(t2)
    })));
    return y(() => {
      let r2 = S(`input`);
      return e(r2, `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`), x(() => {
        n(r2, t2.modelValue ?? ``);
      }), g(r2, `input`, (e2) => i2(`update:modelValue`, e2.target.value)), {
        vaporElement: r2
      };
    });
  };
  ve = () => y(() => {
    let n2 = S(`div`);
    e(n2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
    let r2 = S(`h2`);
    p(n2, r2), e(r2, `text-xl font-semibold text-pink-600 mb-3`), p(r2, u(`\u7EC4\u4EF6 emit\uFF08\u53C2\u8003 Vue3\uFF09`));
    let a2 = C(`rue:component:start`), o2 = C(`rue:component:end`);
    p(n2, a2), p(n2, o2), h(D(ge, {
      onSave: (e2) => Q.value = e2
    }), n2, a2, o2);
    let s2 = S(`p`);
    p(n2, s2), e(s2, `text-gray-700`), p(s2, u(`\u4FDD\u5B58\u6D88\u606F\uFF1A`));
    let c2 = t(s2);
    p(s2, c2), x(() => {
      i(c2, Q.value || `\uFF08\u6682\u65E0\uFF09`);
    });
    let l2 = C(`rue:component:start`), d2 = C(`rue:component:end`);
    p(n2, l2), p(n2, d2), x(() => {
      h(D(_e, {
        vModel: $
      }), n2, l2, d2);
    });
    let f2 = S(`p`);
    p(n2, f2), e(f2, `text-gray-700`), p(f2, u(`\u8F93\u5165\u7684\u540D\u79F0\uFF1A`));
    let m2 = t(f2);
    return p(f2, m2), x(() => {
      i(m2, $.value);
    }), {
      vaporElement: n2
    };
  });
  ye = () => {
    let { list: n2, setList: a2, addItem: o2, removeLast: c2 } = r(`useSetup:0:0`, () => d(() => {
      let [e2, t2] = r(`useState:1:24`, () => f([
        `\u82F9\u679C`,
        `\u9999\u8549`
      ]));
      return {
        list: e2,
        setList: t2,
        addItem: () => t2((e3) => [
          ...e3,
          `\u9879\u76EE${e3.length + 1}`
        ]),
        removeLast: () => t2((e3) => e3.slice(0, -1))
      };
    }));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `container`);
      let a3 = S(`h2`);
      p(r2, a3), p(a3, u(`useState \u6570\u7EC4\u793A\u4F8B`));
      let l2 = S(`div`);
      p(r2, l2), e(l2, `flex gap-2 mb-2`);
      let d2 = S(`button`);
      p(l2, d2), e(d2, `rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`), g(d2, `click`, o2), p(d2, u(`\u6DFB\u52A0`));
      let f2 = S(`button`);
      p(l2, f2), x(() => {
        e(f2, String(`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${n2.length === 0 ? `opacity-60 cursor-not-allowed` : ``}`));
      }), g(f2, `click`, () => {
        n2.length > 0 && c2();
      }), p(f2, u(`\u5220\u9664\u6700\u540E\u4E00\u4E2A`));
      let _2 = S(`ul`);
      p(r2, _2);
      let v2 = C(`rue:list:start`), b2 = C(`rue:list:end`);
      p(_2, v2), p(_2, b2);
      let w2 = /* @__PURE__ */ new Map();
      x(() => {
        w2 = E({
          items: n2 || [],
          getKey: (e2, t2) => t2,
          elements: w2,
          parent: _2,
          before: b2,
          start: v2,
          renderItem: (e2, n3, r3, a4, o3) => {
            h(y(() => {
              let n4 = m(), r4 = S(`li`);
              p(n4, r4), x(() => {
                s(r4, `key`, String(o3));
              });
              let a5 = t(r4);
              return p(r4, a5), x(() => {
                i(a5, e2);
              }), {
                vaporElement: n4
              };
            }), n3, r3, a4);
          }
        });
      });
      let T2 = S(`p`);
      p(r2, T2), p(T2, u(`\u957F\u5EA6\uFF1A`));
      let D2 = t(T2);
      return p(T2, D2), x(() => {
        i(D2, n2.length);
      }), {
        vaporElement: r2
      };
    });
  };
  be = () => {
    let { profile: a2, setProfile: o2, incAge: s2, changeName: c2, changeName2: l2 } = r(`useSetup:0:0`, () => d(() => {
      let [e2, t2] = r(`useState:1:25`, () => f({
        name: `\u5C0F\u660E`,
        age: 18
      }));
      return {
        profile: e2,
        setProfile: t2,
        incAge: () => t2((e3) => A(e3, {
          age: e3.age + 1
        })),
        changeName: (e3) => t2((t3) => A(t3, {
          name: e3.target.value
        })),
        changeName2: (e3) => t2((t3) => A(t3, {
          name: e3.target.value
        }))
      };
    }));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let o3 = S(`h2`);
      p(r2, o3), e(o3, `text-xl font-semibold text-amber-600 mb-3`), p(o3, u(`useState \u5BF9\u8C61\u793A\u4F8B`));
      let d2 = S(`div`);
      p(r2, d2), e(d2, `flex gap-2 items-center mb-2`);
      let f2 = S(`input`);
      p(d2, f2), e(f2, `rounded-md border-gray-300 shadow-sm px-3 py-1`), x(() => {
        n(f2, a2.name);
      }), g(f2, `input`, c2);
      let m2 = S(`input`);
      p(d2, m2), e(m2, `rounded-md border-gray-300 shadow-sm px-3 py-1`), x(() => {
        n(m2, a2.name);
      }), g(m2, `input`, l2);
      let h2 = S(`button`);
      p(d2, h2), e(h2, `rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`), g(h2, `click`, s2), p(h2, u(`\u5E74\u9F84+1`));
      let _2 = S(`p`);
      p(r2, _2), e(_2, `text-gray-700`), p(_2, u(`\u59D3\u540D\uFF1A`));
      let v2 = t(_2);
      p(_2, v2), x(() => {
        i(v2, a2.name);
      });
      let y2 = S(`p`);
      p(r2, y2), e(y2, `text-gray-700`), p(y2, u(`\u5E74\u9F84\uFF1A`));
      let b2 = t(y2);
      return p(y2, b2), x(() => {
        i(b2, a2.age);
      }), {
        vaporElement: r2
      };
    });
  };
  xe = () => {
    let { count: n2 } = r(`useSetup:0:0`, () => d(() => ({
      count: r(`ref:1:26`, () => w(5))
    })));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let a2 = S(`h2`);
      p(r2, a2), e(a2, `text-xl font-semibold mb-2`), p(a2, u(`\u8BA1\u6570\u5668\u793A\u4F8B 123456`));
      let o2 = S(`div`);
      p(r2, o2), e(o2, `text-4xl font-bold mb-3`);
      let s2 = t(o2);
      p(o2, s2), x(() => {
        i(s2, n2.value);
      });
      let c2 = S(`div`);
      p(r2, c2), e(c2, `flex flex-wrap justify-center gap-2`);
      let l2 = S(`button`);
      p(c2, l2), e(l2, `rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`), g(l2, `click`, () => n2.value++), p(l2, u(`+1`));
      let d2 = S(`button`);
      p(c2, d2), e(d2, `rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`), g(d2, `click`, () => n2.value--), p(d2, u(`-1`));
      let f2 = S(`button`);
      return p(c2, f2), e(f2, `rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`), g(f2, `click`, () => n2.value = 0), p(f2, u(`\u91CD\u7F6E`)), {
        vaporElement: r2
      };
    });
  };
  Se = () => {
    let { state: a2, addTodo: c2, toggleTodo: f2, deleteTodo: _2, completedCount: v2 } = r(`useSetup:0:0`, () => d(() => {
      let e2 = r(`reactive:1:27`, () => l({
        todos: [
          {
            id: 1,
            text: `\u5B66\u4E60\u54CD\u5E94\u5F0F\u6846\u67B6`,
            completed: false
          },
          {
            id: 2,
            text: `\u7F16\u5199\u793A\u4F8B\u4EE3\u7801`,
            completed: true
          },
          {
            id: 3,
            text: `\u6D4B\u8BD5\u529F\u80FD`,
            completed: false
          }
        ],
        newTodo: ``
      }));
      function t2() {
        e2.newTodo.trim() && (e2.todos.push({
          id: Date.now(),
          text: e2.newTodo,
          completed: false
        }), e2.newTodo = ``);
      }
      function n2(t3) {
        let n3 = e2.todos.find((e3) => e3.id === t3);
        n3 && (n3.completed = !n3.completed);
      }
      function i2(t3) {
        let n3 = e2.todos.findIndex((e3) => e3.id === t3);
        n3 !== -1 && e2.todos.splice(n3, 1);
      }
      return {
        state: e2,
        addTodo: t2,
        toggleTodo: n2,
        deleteTodo: i2,
        completedCount: r(`computed:1:28`, () => o(() => e2.todos.filter((e3) => e3.completed).length))
      };
    }));
    return y(() => {
      let r2 = S(`div`);
      e(r2, `max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow-sm`);
      let o2 = S(`h2`);
      p(r2, o2), e(o2, `text-xl font-semibold mb-3`), p(o2, u(`\u5F85\u529E\u4E8B\u9879`));
      let l2 = S(`div`);
      p(r2, l2), e(l2, `flex items-center gap-2 mb-3`);
      let d2 = S(`input`);
      p(l2, d2), s(d2, `type`, `text`), x(() => {
        n(d2, a2.newTodo);
      }), g(d2, `input`, (e2) => {
        a2.newTodo = e2.target.value;
      }), g(d2, `keypress`, (e2) => {
        e2.key === `Enter` && c2();
      }), e(d2, `flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);
      let b2 = S(`button`);
      p(l2, b2), e(b2, `rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300`), g(b2, `click`, c2), p(b2, u(`\u6DFB\u52A0`));
      let w2 = S(`div`);
      p(r2, w2);
      let T2 = C(`rue:list:start`), D2 = C(`rue:list:end`);
      p(w2, T2), p(w2, D2);
      let O2 = /* @__PURE__ */ new Map();
      x(() => {
        O2 = E({
          items: a2.todos || [],
          getKey: (e2, t2) => e2.id,
          elements: O2,
          parent: w2,
          before: D2,
          start: T2,
          renderItem: (n2, r3, a3, o3, c3) => {
            h(y(() => {
              let r4 = m(), a4 = S(`div`);
              p(r4, a4), x(() => {
                s(a4, `key`, String(n2.id));
              }), x(() => {
                e(a4, String(`flex items-center justify-between rounded-lg border p-3 mb-2 ${n2.completed ? `bg-gray-50` : `bg-white`}`));
              });
              let o4 = S(`span`);
              p(a4, o4), g(o4, `click`, () => f2(n2.id)), x(() => {
                e(o4, String(`cursor-pointer ${n2.completed ? `line-through text-gray-500` : `text-gray-800`}`));
              });
              let c4 = t(o4);
              p(o4, c4), x(() => {
                i(c4, n2.text);
              });
              let l3 = S(`button`);
              return p(a4, l3), e(l3, `rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`), g(l3, `click`, () => _2(n2.id)), p(l3, u(`\u5220\u9664`)), {
                vaporElement: r4
              };
            }), r3, a3, o3);
          }
        });
      });
      let k2 = S(`p`);
      p(r2, k2);
      let A2 = t(k2);
      return p(k2, A2), x(() => {
        i(A2, `\u603B\u8BA1: ${a2.todos.length} | \u5DF2\u5B8C\u6210: ${v2.get()}`);
      }), {
        vaporElement: r2
      };
    });
  };
  Ce = (t2) => y(() => {
    let n2 = S(`div`);
    e(n2, `rounded-md border bg-white p-3 space-y-1`);
    let r2 = S(`p`);
    p(n2, r2), e(r2, `text-gray-800`), p(r2, u(`\u6211\u662Fhello\u7EC4\u4EF6`));
    let i2 = S(`span`);
    p(n2, i2), e(i2, `text-gray-600`), p(i2, u(`\u8FD9\u662F\u6211\u7684children `));
    let a2 = C(`rue:children:start`), o2 = C(`rue:children:end`);
    return p(i2, a2), p(i2, o2), x(() => {
      let e2 = t2.children;
      h(T(e2), i2, a2, o2);
    }), {
      vaporElement: n2
    };
  });
  we = () => y(() => {
    let t2 = S(`div`);
    return e(t2, `rounded-md border bg-white p-3 space-y-1`), p(t2, u(`\u6211\u662F world`)), {
      vaporElement: t2
    };
  });
  Te = () => y(() => {
    let t2 = S(`div`);
    e(t2, `space-y-6`);
    let n2 = C(`rue:slot:start`), r2 = C(`rue:slot:end`);
    p(t2, n2), p(t2, r2), x(() => {
      h(T(y(() => {
        let t3 = m(), n3 = S(`nav`);
        p(t3, n3), e(n3, `navbar bg-base-100 mb-3 border-b border-base-200`);
        let r3 = S(`div`);
        p(n3, r3), e(r3, `max-w-5xl mx-auto w-full`);
        let i3 = S(`div`);
        p(r3, i3), e(i3, `flex flex-wrap items-center justify-center gap-2 px-4 py-3`);
        let a3 = C(`rue:component:start`), o3 = C(`rue:component:end`);
        p(i3, a3), p(i3, o3), h(D(k, {
          to: `/`,
          className: `btn btn-ghost btn-sm`,
          children: `\u9996\u9875`
        }), i3, a3, o3);
        let s3 = C(`rue:component:start`), c2 = C(`rue:component:end`);
        p(i3, s3), p(i3, c2), h(D(k, {
          to: `/about`,
          className: `btn btn-ghost btn-sm`,
          children: `\u5173\u4E8E`
        }), i3, s3, c2);
        let l3 = C(`rue:component:start`), u2 = C(`rue:component:end`);
        p(i3, l3), p(i3, u2), h(D(k, {
          to: `/posts`,
          className: `btn btn-ghost btn-sm`,
          children: `\u6587\u7AE0`
        }), i3, l3, u2);
        let d3 = C(`rue:component:start`), f3 = C(`rue:component:end`);
        p(i3, d3), p(i3, f3), h(D(k, {
          to: `/vapor`,
          className: `btn btn-ghost btn-sm`,
          children: `Vapor`
        }), i3, d3, f3);
        let g3 = C(`rue:component:start`), _3 = C(`rue:component:end`);
        p(i3, g3), p(i3, _3), h(D(k, {
          to: `/vapor-jsx`,
          className: `btn btn-ghost btn-sm`,
          children: `Vapor(JSX)`
        }), i3, g3, _3);
        let v3 = C(`rue:component:start`), y2 = C(`rue:component:end`);
        p(i3, v3), p(i3, y2), h(D(k, {
          to: `/react`,
          className: `btn btn-ghost btn-sm`,
          children: `React(JSX)`
        }), i3, v3, y2);
        let b3 = C(`rue:component:start`), x2 = C(`rue:component:end`);
        p(i3, b3), p(i3, x2), h(D(k, {
          to: `/shop`,
          className: `btn btn-ghost btn-sm`,
          children: `\u5546\u57CE`
        }), i3, b3, x2);
        let w3 = C(`rue:component:start`), T2 = C(`rue:component:end`);
        p(i3, w3), p(i3, T2), h(D(k, {
          to: `/use-cart`,
          className: `btn btn-ghost btn-sm`,
          children: `\u8D2D\u7269\u8F66`
        }), i3, w3, T2);
        let E3 = C(`rue:component:start`), O2 = C(`rue:component:end`);
        p(i3, E3), p(i3, O2), h(D(k, {
          to: `/shop/checkout`,
          className: `btn btn-ghost btn-sm`,
          children: `\u5FEB\u901F\u4E0B\u5355`
        }), i3, E3, O2);
        let A3 = C(`rue:component:start`), j3 = C(`rue:component:end`);
        p(i3, A3), p(i3, j3), h(D(k, {
          to: `/rue`,
          className: `btn btn-ghost btn-sm`,
          children: `Rue \u5B98\u7F51`
        }), i3, A3, j3);
        let ee2 = C(`rue:component:start`), M3 = C(`rue:component:end`);
        p(i3, ee2), p(i3, M3), h(D(k, {
          to: `/page`,
          className: `btn btn-ghost btn-sm`,
          children: `\u6587\u6863`
        }), i3, ee2, M3);
        let te2 = C(`rue:component:start`), ne2 = C(`rue:component:end`);
        p(i3, te2), p(i3, ne2), h(D(k, {
          to: `/rue/guide`,
          className: `btn btn-ghost btn-sm`,
          children: `\u6307\u5357`
        }), i3, te2, ne2);
        let N3 = C(`rue:component:start`), P2 = C(`rue:component:end`);
        p(i3, N3), p(i3, P2), h(D(k, {
          to: `/rue/api`,
          className: `btn btn-ghost btn-sm`,
          children: `API`
        }), i3, N3, P2);
        let F3 = C(`rue:component:start`), re2 = C(`rue:component:end`);
        p(i3, F3), p(i3, re2), h(D(k, {
          to: `/plugins`,
          className: `btn btn-ghost btn-sm`,
          children: `\u63D2\u4EF6`
        }), i3, F3, re2);
        let I2 = C(`rue:component:start`), L2 = C(`rue:component:end`);
        return p(i3, I2), p(i3, L2), h(D(k, {
          to: `/ecosystem`,
          className: `btn btn-ghost btn-sm`,
          children: `\u751F\u6001`
        }), i3, I2, L2), {
          vaporElement: t3
        };
      })), t2, n2, r2);
    });
    let i2 = S(`h1`);
    p(t2, i2), e(i2, `text-center text-orange-500 font-semibold`), p(i2, u(`Rue \u54CD\u5E94\u5F0F\u6846\u67B6\u793A\u4F8B`));
    let a2 = C(`rue:component:start`), o2 = C(`rue:component:end`);
    p(t2, a2), p(t2, o2), h(D(ee, {}), t2, a2, o2);
    let s2 = C(`rue:component:start`), l2 = C(`rue:component:end`);
    p(t2, s2), p(t2, l2), h(D(te, {}), t2, s2, l2);
    let d2 = C(`rue:component:start`), f2 = C(`rue:component:end`);
    p(t2, d2), p(t2, f2), h(D(ne, {}), t2, d2, f2);
    let g2 = C(`rue:component:start`), _2 = C(`rue:component:end`);
    p(t2, g2), p(t2, _2), h(D(P, {}), t2, g2, _2);
    let v2 = C(`rue:component:start`), b2 = C(`rue:component:end`);
    p(t2, v2), p(t2, b2), h(D(re, {}), t2, v2, b2);
    let w2 = C(`rue:component:start`), E2 = C(`rue:component:end`);
    p(t2, w2), p(t2, E2), h(D(ie, {}), t2, w2, E2);
    let A2 = C(`rue:component:start`), j2 = C(`rue:component:end`);
    p(t2, A2), p(t2, j2), h(D(ae, {}), t2, A2, j2);
    let M2 = C(`rue:component:start`), N2 = C(`rue:component:end`);
    p(t2, M2), p(t2, N2), h(D(se, {}), t2, M2, N2);
    let F2 = C(`rue:component:start`), R2 = C(`rue:component:end`);
    p(t2, F2), p(t2, R2), h(D(le, {}), t2, F2, R2);
    let z2 = C(`rue:component:start`), B2 = C(`rue:component:end`);
    p(t2, z2), p(t2, B2), h(D(fe, {}), t2, z2, B2);
    let V2 = C(`rue:component:start`), H2 = C(`rue:component:end`);
    p(t2, V2), p(t2, H2), h(D(he, {}), t2, V2, H2);
    let U2 = C(`rue:component:start`), W2 = C(`rue:component:end`);
    p(t2, U2), p(t2, W2), h(D(ve, {}), t2, U2, W2);
    let oe2 = C(`rue:component:start`), G2 = C(`rue:component:end`);
    p(t2, oe2), p(t2, G2), h(D(ye, {}), t2, oe2, G2);
    let ce2 = C(`rue:component:start`), K2 = C(`rue:component:end`);
    p(t2, ce2), p(t2, K2), h(D(be, {}), t2, ce2, K2);
    let q2 = C(`rue:component:start`), ue2 = C(`rue:component:end`);
    p(t2, q2), p(t2, ue2), h(D(xe, {}), t2, q2, ue2);
    let de2 = C(`rue:component:start`), J2 = C(`rue:component:end`);
    p(t2, de2), p(t2, J2), h(D(Se, {}), t2, de2, J2);
    let Y2 = C(`rue:component:start`), X2 = C(`rue:component:end`);
    p(t2, Y2), p(t2, X2), h(D(Ce, {
      children: y(() => {
        let e2 = m(), t3 = C(`rue:component:start`), n3 = C(`rue:component:end`);
        return p(e2, t3), p(e2, n3), h(D(we, {}), e2, t3, n3), {
          vaporElement: e2
        };
      })
    }), t2, Y2, X2);
    let Z2 = S(`h2`);
    p(t2, Z2), x(() => {
      c(Z2, {
        textAlign: `center`
      });
    }), p(Z2, u(`Children \u5C5E\u6027\u6F14\u793A`));
    let pe2 = C(`rue:component:start`), me2 = C(`rue:component:end`);
    p(t2, pe2), p(t2, me2), h(D(I, {
      title: `\u57FA\u672C children`,
      background: `purple`,
      children: y(() => {
        let e2 = m(), t3 = S(`p`);
        p(e2, t3), p(t3, u(`\u8FD9\u662F\u5B50\u5185\u5BB9 A`));
        let n3 = S(`p`);
        return p(e2, n3), p(n3, u(`\u8FD9\u662F\u5B50\u5185\u5BB9 B`)), {
          vaporElement: e2
        };
      })
    }), t2, pe2, me2);
    let Q2 = C(`rue:component:start`), $2 = C(`rue:component:end`);
    p(t2, Q2), p(t2, $2), h(D(I, {
      title: `\u5D4C\u5957 children`,
      background: `blue`,
      children: y(() => {
        let e2 = m(), t3 = C(`rue:component:start`), n3 = C(`rue:component:end`);
        return p(e2, t3), p(e2, n3), h(D(I, {
          title: `\u5185\u5C42 Box`,
          background: `red`,
          children: y(() => {
            let e3 = m(), t4 = S(`span`);
            p(e3, t4), p(t4, u(`\u5D4C\u5957\u7684\u5B50\u5143\u7D20`));
            let n4 = C(`rue:component:start`), r3 = C(`rue:component:end`);
            return p(e3, n4), p(e3, r3), h(D(I, {
              title: `\u5185\u5C42 Box2`,
              background: `yellow`,
              children: y(() => {
                let e4 = m(), t5 = S(`span`);
                p(e4, t5), p(t5, u(`\u5D4C\u5957\u7684\u5B50\u5143\u7D202`));
                let n5 = C(`rue:component:start`), r4 = C(`rue:component:end`);
                return p(e4, n5), p(e4, r4), h(D(I, {
                  title: `\u5185\u5C42 Box3`,
                  background: `green`,
                  children: y(() => {
                    let e5 = m(), t6 = S(`span`);
                    return p(e5, t6), p(t6, u(`\u5D4C\u5957\u7684\u5B50\u5143\u7D203`)), {
                      vaporElement: e5
                    };
                  })
                }), e4, n5, r4), {
                  vaporElement: e4
                };
              })
            }), e3, n4, r3), {
              vaporElement: e3
            };
          })
        }), e2, t3, n3), {
          vaporElement: e2
        };
      })
    }), t2, Q2, $2);
    let ge2 = C(`rue:component:start`), _e2 = C(`rue:component:end`);
    p(t2, ge2), p(t2, _e2);
    let Te2 = y(() => {
      let t3 = m(), n3 = S(`p`);
      p(t3, n3), e(n3, `text-gray-700`), p(n3, u(`\u4E3B\u4F53\u5185\u5BB9\u901A\u8FC7 props.children \u4F20\u5165`));
      let r3 = S(`p`);
      return p(t3, r3), e(r3, `text-gray-600`), p(r3, u(`\u8FD9\u4E0E React \u7684 children \u8BED\u4E49\u4E00\u81F4`)), {
        vaporElement: t3
      };
    });
    return x(() => {
      h(D(L, {
        header: D(`div`, {
          className: `text-gray-800 font-semibold`,
          children: `\u81EA\u5B9A\u4E49 Header`
        }),
        footer: D(`div`, {
          className: `text-gray-600`,
          children: `\u81EA\u5B9A\u4E49 Footer`
        }),
        content: D(`div`, {
          className: `space-y-2`,
          children: D(Ce, {
            children: O(`p`, {
              className: `text-gray-700`,
              children: [
                `\u4F60\u597D`,
                D(Ce, {
                  children: `123456`
                })
              ]
            })
          })
        }),
        children: Te2
      }), t2, ge2, _e2);
    }), {
      vaporElement: t2
    };
  });
});
export {
  __tla,
  Te as default
};

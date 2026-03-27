import { A as e, C as t, G as n, I as r, L as i, O as a, U as o, W as s, _ as c, b as l, f as u, g as d, m as f, q as p, x as m, y as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, r as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { a as v, o as y, t as b, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { t as x } from "./general-BmFRDxl1.js";
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
  })()
]).then(async () => {
  const S = {
    examples: [
      {
        id: `examples1`,
        title: `\u57FA\u7840`,
        items: [
          {
            id: `hello-world`,
            title: `\u4F60\u597D\uFF0C\u4E16\u754C`,
            href: `/examples/hello-world`
          },
          {
            id: `handling-input`,
            title: `\u5904\u7406\u8F93\u5165`,
            href: `/examples/handling-input`
          },
          {
            id: `attribute-bindings`,
            title: `Attribute \u7ED1\u5B9A`,
            href: `/examples/attribute-bindings`
          },
          {
            id: `conditionals-and-loops`,
            title: `\u6761\u4EF6\u4E0E\u5FAA\u73AF`,
            href: `/examples/conditionals-and-loops`
          },
          {
            id: `form-bindings`,
            title: `\u8868\u5355\u7ED1\u5B9A`,
            href: `/examples/form-bindings`
          },
          {
            id: `simple-component`,
            title: `\u7B80\u5355\u7EC4\u4EF6`,
            href: `/examples/simple-component`
          }
        ]
      },
      {
        id: `jsx`,
        title: `JSX`,
        items: [
          {
            id: `basic-elements`,
            title: `\u57FA\u7840\u5143\u7D20\u4E0E\u81EA\u95ED\u5408\u6807\u7B7E`,
            href: `/jsx/basic-elements`
          },
          {
            id: `expressions`,
            title: `\u8868\u8FBE\u5F0F\u4E0E\u63D2\u503C`,
            href: `/jsx/expressions`
          },
          {
            id: `attributes-and-props`,
            title: `\u5C5E\u6027\u3001className\u3001style \u4E0E Props`,
            href: `/jsx/attributes-and-props`
          },
          {
            id: `spread-props`,
            title: `\u5BF9\u8C61\u5C55\u5F00\u5C5E\u6027\uFF08spread props\uFF09`,
            href: `/jsx/spread-props`
          },
          {
            id: `conditional-rendering`,
            title: `\u6761\u4EF6\u6E32\u67D3\uFF08?:\u3001&&\u3001null\uFF09`,
            href: `/jsx/conditional-rendering`
          },
          {
            id: `lists-and-keys`,
            title: `\u5217\u8868\u6E32\u67D3\u4E0E key`,
            href: `/jsx/lists-and-keys`
          },
          {
            id: `fragments`,
            title: `Fragments\uFF08<> \u2026 </>\uFF09`,
            href: `/jsx/fragments`
          },
          {
            id: `children`,
            title: `children \u63D2\u69FD\u4E0E\u5D4C\u5957`,
            href: `/jsx/children`
          },
          {
            id: `components`,
            title: `\u7EC4\u4EF6\u4E0E Props \u4F20\u9012`,
            href: `/jsx/components`
          },
          {
            id: `events`,
            title: `\u4E8B\u4EF6\u5904\u7406`,
            href: `/jsx/events`
          },
          {
            id: `controlled-inputs`,
            title: `\u53D7\u63A7\u8F93\u5165`,
            href: `/jsx/controlled-inputs`
          },
          {
            id: `refs`,
            title: `Refs \u57FA\u7840`,
            href: `/jsx/refs`
          }
        ]
      },
      {
        id: `examples2`,
        title: `\u5B9E\u6218`,
        items: [
          {
            id: `markdown-editor`,
            title: `Markdown \u7F16\u8F91\u5668`,
            href: `/examples/markdown-editor`
          },
          {
            id: `fetching-data`,
            title: `\u83B7\u53D6\u6570\u636E`,
            href: `/examples/fetching-data`
          },
          {
            id: `sort-filter-grid`,
            title: `\u6392\u5E8F\u3001\u7B5B\u9009\u4E0E\u7F51\u683C`,
            href: `/examples/sort-filter-grid`
          },
          {
            id: `tree-view`,
            title: `\u6811\u72B6\u89C6\u56FE`,
            href: `/examples/tree-view`
          },
          {
            id: `svg-graph`,
            title: `SVG \u56FE\u8868`,
            href: `/examples/svg-graph`
          },
          {
            id: `modal`,
            title: `\u5E26\u8FC7\u6E21\u52A8\u6548\u7684\u6A21\u6001\u6846`,
            href: `/examples/modal`
          },
          {
            id: `list-transition`,
            title: `\u8FC7\u6E21\u52A8\u6548`,
            href: `/examples/list-transition`
          }
        ]
      }
    ]
  };
  C = (C2) => {
    let { route: w, pathname: T, currentType: E, sections: D, openSections: O, setOpenSections: k, toggleSection: A } = n(`useSetup:0:0`, () => o(() => {
      let e2 = v(), t2 = n(`computed:1:0`, () => i(() => {
        let t3 = e2.get();
        return t3 && t3.path || ``;
      })), r2 = `examples`, a2 = S[r2], [o2, c2] = n(`useState:1:1`, () => s(() => {
        let e3 = {};
        return a2.forEach((t3) => e3[t3.id] = true), e3;
      }));
      return {
        route: e2,
        pathname: t2,
        currentType: r2,
        sections: a2,
        openSections: o2,
        setOpenSections: c2,
        toggleSection: (e3) => {
          c2((t3) => x(t3, {
            [e3]: !t3[e3]
          }));
        }
      };
    }));
    return f(() => {
      let n2 = m(`div`);
      e(n2, `sidebar-playground md:flex md:items-start md:gap-6`);
      let i2 = m(`aside`);
      c(n2, i2), e(i2, `md:w-45 shrink-0`);
      let o2 = m(`div`);
      c(i2, o2), e(o2, `sticky top-20`);
      let s2 = m(`nav`);
      c(o2, s2), e(s2, `space-y-3 w-full`);
      let v2 = h(`rue:list:start`), x2 = h(`rue:list:end`);
      c(s2, v2), c(s2, x2);
      let S2 = /* @__PURE__ */ new Map();
      p(() => {
        S2 = _({
          items: D || [],
          getKey: (e2, t2) => e2.id,
          elements: S2,
          parent: s2,
          before: x2,
          start: v2,
          renderItem: (n3, i3, o3, s3, v3) => {
            u(f(() => {
              let i4 = l(), o4 = m(`div`);
              c(i4, o4), p(() => {
                a(o4, `key`, String(n3.id));
              }), p(() => {
                e(o4, String(`collapse collapse-arrow bg-base-100 rounded-box shadow w-full ${O[n3.id] ? `collapse-open` : ``}`));
              });
              let s4 = m(`button`);
              c(o4, s4), e(s4, `collapse-title px-3 py-2 font-medium text-base-content w-full text-left`), d(s4, `click`, () => A(n3.id));
              let v4 = t(s4);
              c(s4, v4), p(() => {
                r(v4, n3.title);
              });
              let x3 = m(`div`);
              c(o4, x3), e(x3, `collapse-content px-0`);
              let S3 = m(`ul`);
              c(x3, S3), e(S3, `menu menu-sm bg-transparent rounded-box w-full`);
              let C3 = h(`rue:list:start`), w3 = h(`rue:list:end`);
              c(S3, C3), c(S3, w3);
              let E3 = /* @__PURE__ */ new Map();
              return p(() => {
                E3 = _({
                  items: n3.items || [],
                  getKey: (e2, t2) => e2.id,
                  elements: E3,
                  parent: S3,
                  before: w3,
                  start: C3,
                  renderItem: (n4, i5, o5, s5, d2) => {
                    u(f(() => {
                      let i6 = l(), o6 = m(`li`);
                      c(i6, o6), p(() => {
                        a(o6, `key`, String(n4.id));
                      });
                      let s6 = h(`rue:slot:start`), d3 = h(`rue:slot:end`);
                      return c(o6, s6), c(o6, d3), p(() => {
                        u(g(n4.children && n4.children.length ? f(() => {
                          let i7 = l(), o7 = m(`div`);
                          c(i7, o7);
                          let s7 = m(`div`);
                          c(o7, s7), e(s7, `px-3 py-2 font-medium text-base-content/80`);
                          let d4 = t(s7);
                          c(s7, d4), p(() => {
                            r(d4, n4.title);
                          });
                          let g2 = m(`ul`);
                          c(o7, g2), e(g2, `menu menu-sm bg-transparent rounded-box w-full`);
                          let v5 = h(`rue:list:start`), x4 = h(`rue:list:end`);
                          c(g2, v5), c(g2, x4);
                          let S4 = /* @__PURE__ */ new Map();
                          return p(() => {
                            S4 = _({
                              items: n4.children || [],
                              getKey: (e2, t2) => e2.id,
                              elements: S4,
                              parent: g2,
                              before: x4,
                              start: v5,
                              renderItem: (e2, n5, i8, o8, s8) => {
                                u(f(() => {
                                  let n6 = l(), i9 = m(`li`);
                                  c(n6, i9), p(() => {
                                    a(i9, `key`, String(e2.id));
                                  });
                                  let o9 = h(`rue:component:start`), s9 = h(`rue:component:end`);
                                  c(i9, o9), c(i9, s9);
                                  let d5 = f(() => {
                                    let n7 = l(), i10 = t(n7);
                                    return c(n7, i10), p(() => {
                                      r(i10, e2.title);
                                    }), {
                                      vaporElement: n7
                                    };
                                  });
                                  return p(() => {
                                    u(y(b, {
                                      to: `${e2.href}`,
                                      className: `${T.get() === e2.href ? `active` : ``} w-full`,
                                      children: d5
                                    }), i9, o9, s9);
                                  }), {
                                    vaporElement: n6
                                  };
                                }), n5, i8, o8);
                              }
                            });
                          }), {
                            vaporElement: i7
                          };
                        }) : f(() => {
                          let e2 = l(), i7 = h(`rue:component:start`), a2 = h(`rue:component:end`);
                          c(e2, i7), c(e2, a2);
                          let o7 = f(() => {
                            let e3 = l(), i8 = t(e3);
                            return c(e3, i8), p(() => {
                              r(i8, n4.title);
                            }), {
                              vaporElement: e3
                            };
                          });
                          return p(() => {
                            u(y(b, {
                              to: `${n4.href}`,
                              className: `${T.get() === n4.href ? `active` : ``} w-full`,
                              children: o7
                            }), e2, i7, a2);
                          }), {
                            vaporElement: e2
                          };
                        })), o6, s6, d3);
                      }), {
                        vaporElement: i6
                      };
                    }), i5, o5, s5);
                  }
                });
              }), {
                vaporElement: i4
              };
            }), i3, o3, s3);
          }
        });
      });
      let w2 = m(`article`);
      c(n2, w2), a(w2, `class`, `component-preview`);
      let E2 = h(`rue:children:start`), k2 = h(`rue:children:end`);
      return c(w2, E2), c(w2, k2), p(() => {
        let e2 = C2.children;
        u(g(e2), w2, E2, k2);
      }), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  C as t
};

import { A as e, C as t, G as n, I as r, L as i, O as a, U as o, W as s, _ as c, b as l, f as u, g as d, m as f, q as p, x as m, y as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, r as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { a as v, o as y, t as b, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { t as x } from "./general-BmFRDxl1.js";
let C, w;
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
    design: [
      {
        id: `design1`,
        title: `\u64CD\u4F5C`,
        items: [
          {
            id: `button`,
            title: `\u6309\u94AE`,
            href: `/design/button`
          }
        ]
      },
      {
        id: `design5`,
        title: `\u6570\u636E\u5C55\u793A`,
        items: [
          {
            id: `card`,
            title: `\u5361\u7247`,
            href: `/design/card`
          },
          {
            id: `collapse`,
            title: `\u6298\u53E0\u9762\u677F`,
            href: `/design/collapse`
          },
          {
            id: `countdown`,
            title: `\u5012\u8BA1\u65F6`,
            href: `/design/countdown`
          },
          {
            id: `chat`,
            title: `\u804A\u5929`,
            href: `/design/chat`
          },
          {
            id: `diff`,
            title: `\u5BF9\u6BD4`,
            href: `/design/diff`
          },
          {
            id: `carousel`,
            title: `\u8DD1\u9A6C\u706F`,
            href: `/design/carousel`
          },
          {
            id: `badge`,
            title: `\u5FBD\u6807`,
            href: `/design/badge`
          },
          {
            id: `avatar`,
            title: `\u5934\u50CF`,
            href: `/design/avatar`
          },
          {
            id: `accordion`,
            title: `\u624B\u98CE\u7434`,
            href: `/design/accordion`
          },
          {
            id: `hover-3d`,
            title: `\u60AC\u6D6E 3D`,
            href: `/design/hover-3d`
          },
          {
            id: `hover-gallery`,
            title: `\u60AC\u6D6E\u753B\u5ECA`,
            href: `/design/hover-gallery`
          },
          {
            id: `kbd`,
            title: `\u952E\u76D8\u63D0\u793A`,
            href: `/design/kbd`
          },
          {
            id: `list`,
            title: `\u5217\u8868`,
            href: `/design/list`
          },
          {
            id: `table`,
            title: `\u8868\u683C`,
            href: `/design/table`
          },
          {
            id: `timeline`,
            title: `\u65F6\u95F4\u7EBF`,
            href: `/design/timeline`
          },
          {
            id: `text-rotate`,
            title: `\u6587\u672C\u8F6E\u64AD`,
            href: `/design/text-rotate`
          },
          {
            id: `status`,
            title: `\u72B6\u6001`,
            href: `/design/status`
          },
          {
            id: `stat`,
            title: `\u7EDF\u8BA1`,
            href: `/design/stat`
          }
        ]
      },
      {
        id: `design4`,
        title: `\u5BFC\u822A`,
        items: [
          {
            id: `link`,
            title: `\u94FE\u63A5`,
            href: `/design/link`
          },
          {
            id: `tabs`,
            title: `\u9009\u9879\u5361`,
            href: `/design/tabs`
          },
          {
            id: `breadcrumbs`,
            title: `\u9762\u5305\u5C51`,
            href: `/design/breadcrumbs`
          },
          {
            id: `dock`,
            title: `\u5E95\u90E8\u680F`,
            href: `/design/dock`
          },
          {
            id: `menu`,
            title: `\u83DC\u5355`,
            href: `/design/menu`
          }
        ]
      },
      {
        id: `design2`,
        title: `\u53CD\u9988`,
        items: [
          {
            id: `alert`,
            title: `\u8B66\u544A`,
            href: `/design/alert`
          }
        ]
      },
      {
        id: `design3`,
        title: `\u5E03\u5C40`,
        items: [
          {
            id: `divider`,
            title: `\u5206\u9694\u7EBF`,
            href: `/design/divider`
          },
          {
            id: `footer`,
            title: `\u9875\u811A`,
            href: `/design/footer`
          }
        ]
      }
    ]
  };
  C = (C2) => {
    let { route: w2, pathname: T, currentType: E, sections: D, openSections: O, setOpenSections: k, toggleSection: A } = n(`useSetup:0:0`, () => o(() => {
      let e2 = v(), t2 = n(`computed:1:0`, () => i(() => {
        let t3 = e2.get();
        return t3 && t3.path || ``;
      })), r2 = `design`, a2 = S[r2], [o2, c2] = n(`useState:1:1`, () => s(() => {
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
              let C3 = h(`rue:list:start`), w4 = h(`rue:list:end`);
              c(S3, C3), c(S3, w4);
              let E3 = /* @__PURE__ */ new Map();
              return p(() => {
                E3 = _({
                  items: n3.items || [],
                  getKey: (e2, t2) => e2.id,
                  elements: E3,
                  parent: S3,
                  before: w4,
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
      let w3 = m(`article`);
      c(n2, w3), a(w3, `class`, `component-preview`);
      let E2 = h(`rue:children:start`), k2 = h(`rue:children:end`);
      return c(w3, E2), c(w3, k2), p(() => {
        let e2 = C2.children;
        u(g(e2), w3, E2, k2);
      }), {
        vaporElement: n2
      };
    });
  };
  w = ({ items: e2, activeKey: t2, onChange: n2, style: r2, placement: i2, size: a2, className: o2 }) => {
    let s2 = `tabs`;
    return r2 === `box` && (s2 += ` tabs-box`), r2 === `border` && (s2 += ` tabs-border`), r2 === `lift` && (s2 += ` tabs-lift`), i2 === `bottom` && (s2 += ` tabs-bottom`), a2 && (s2 += ` tabs-${a2}`), o2 && (s2 += ` ${o2}`), y(`div`, {
      role: `tablist`,
      className: s2,
      children: e2.map((e3) => y(`button`, {
        role: `tab`,
        className: `tab ${t2 === e3.key ? `tab-active` : ``} ${e3.disabled ? `tab-disabled` : ``} ${e3.className ?? ``}`,
        disabled: e3.disabled,
        onClick: () => !e3.disabled && n2 && n2(e3.key),
        children: e3.label
      }, e3.key))
    });
  };
});
export {
  __tla,
  C as n,
  w as t
};

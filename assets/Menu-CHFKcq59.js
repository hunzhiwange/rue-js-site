import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, g as u, m as d, q as f, x as p, y as m, z as h, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as g, r as _, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as v, s as y, t as b, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as x, t as S, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as C, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as ee, __tla as __tla_6 } from "./badge-C9_BaoKO.js";
let M;
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
  let w, T, E, D, O, k, A, j;
  w = (e2, t2) => {
    var _a, _b;
    if (e2.kind === `title`) return v(D, {
      as: e2.as,
      className: e2.className,
      children: e2.children
    }, t2);
    let n2 = [
      e2.disabled ? `menu-disabled` : ``,
      e2.active ? `menu-active` : ``,
      e2.focus ? `menu-focus` : ``,
      e2.className ?? ``
    ].filter(Boolean).join(` `).trim();
    return y(`li`, {
      className: e2.liClassName ? e2.liClassName : void 0,
      children: [
        e2.as === `button` ? v(`button`, {
          className: n2 || void 0,
          ...e2,
          children: e2.children
        }) : e2.as === `span` ? v(`span`, {
          className: n2 || void 0,
          ...e2,
          children: e2.children
        }) : e2.to ? v(b, {
          className: n2 || void 0,
          to: e2.to,
          onClick: e2.onClick,
          children: e2.children
        }) : e2.href ? v(`a`, {
          className: n2 || void 0,
          href: e2.href,
          target: e2.target,
          rel: e2.rel,
          onClick: e2.onClick,
          children: e2.children
        }) : v(`a`, {
          className: n2 || void 0,
          onClick: e2.onClick,
          children: e2.children
        }),
        e2.dropdownToggle ? v(k, {
          visible: e2.dropdownToggle.visible,
          className: e2.dropdownToggle.className,
          children: e2.dropdownToggle.children
        }) : null,
        e2.dropdown ? v(O, {
          visible: e2.dropdown.visible,
          className: e2.dropdown.className,
          children: (_a = e2.dropdown.items) == null ? void 0 : _a.map((e3, t3) => w(e3, t3))
        }) : null,
        e2.submenu ? v(A, {
          className: e2.submenu.className,
          children: (_b = e2.submenu.items) == null ? void 0 : _b.map((e3, t3) => w(e3, t3))
        }) : null
      ]
    }, t2);
  };
  T = ({ size: e2, direction: t2 = `vertical`, className: n2, children: r2, items: i2 }) => {
    let a2 = `menu`;
    return t2 === `horizontal` ? a2 += ` menu-horizontal` : t2 === `vertical` && (a2 += ` menu-vertical`), e2 && (a2 += ` menu-${e2}`), n2 && (a2 += ` ${n2}`), i2 && i2.length ? v(`ul`, {
      className: a2,
      children: i2.map((e3, t3) => w(e3, t3))
    }) : v(`ul`, {
      className: a2,
      children: r2
    });
  };
  E = ({ as: e2 = `a`, href: t2, to: n2, target: r2, rel: i2, onClick: a2, disabled: o2, active: s2, focus: c2, liClassName: l2, className: u2, children: d2, ...f2 }) => {
    let p2 = [
      o2 ? `menu-disabled` : ``,
      s2 ? `menu-active` : ``,
      c2 ? `menu-focus` : ``,
      u2 ?? ``
    ].filter(Boolean).join(` `).trim();
    return v(`li`, {
      className: l2 || void 0,
      children: e2 === `button` ? v(`button`, {
        className: p2 || void 0,
        onClick: a2,
        ...f2,
        children: d2
      }) : e2 === `span` ? v(`span`, {
        className: p2 || void 0,
        onClick: a2,
        ...f2,
        children: d2
      }) : n2 ? v(b, {
        className: p2 || void 0,
        to: n2,
        onClick: a2,
        children: d2
      }) : t2 ? v(`a`, {
        className: p2 || void 0,
        href: t2,
        target: r2,
        rel: i2,
        onClick: a2,
        ...f2,
        children: d2
      }) : v(`a`, {
        className: p2 || void 0,
        onClick: a2,
        ...f2,
        children: d2
      })
    });
  };
  D = ({ as: e2 = `li`, className: t2, children: n2 }) => {
    let r2 = `menu-title`;
    return t2 && (r2 += ` ${t2}`), v(e2 === `h2` ? `h2` : `li`, {
      className: r2,
      children: n2
    });
  };
  O = ({ visible: e2, className: t2, children: n2 }) => {
    let r2 = `menu-dropdown`;
    return e2 && (r2 += ` menu-dropdown-visible`), t2 && (r2 += ` ${t2}`), v(`ul`, {
      className: r2,
      children: n2
    });
  };
  k = ({ visible: e2, className: t2, children: n2 }) => {
    let r2 = `menu-dropdown-toggle`;
    return e2 && (r2 += ` menu-dropdown-visible`), t2 && (r2 += ` ${t2}`), v(`span`, {
      className: r2,
      children: n2
    });
  };
  A = ({ className: e2, children: t2 }) => v(`ul`, {
    className: e2 || void 0,
    children: t2
  });
  j = Object.assign(T, {
    Item: E,
    Title: D,
    Dropdown: O,
    DropdownToggle: k,
    Submenu: A
  });
  M = () => {
    let { tBasic: y2, tResponsive: b2, tIconOnly: w2, tIconOnlyH: T2, tIconOnlyTooltip: E2, tIconOnlyHTooltip: D2, tSizes: O2, tDisabled: k2, tIcons: A2, tIconsBadge: M2, tNoPadRadius: N, tTitle: te, tTitleParent: ne, tSubmenu: re, tCollapsible: P, tDropdownClassJS: ie, tFileTree: ae, tActiveItem: oe, tHorizontal: F, tHorizontalSubmenu: se, tMega: ce, tCollapsibleResponsive: I, tArray: le, tArrayInternal: ue, tNavigation: de, menuData: fe, menuItems: pe } = n(`useSetup:0:0`, () => o(() => ({
      tBasic: n(`ref:1:0`, () => h(`preview`)),
      tResponsive: n(`ref:1:1`, () => h(`preview`)),
      tIconOnly: n(`ref:1:2`, () => h(`preview`)),
      tIconOnlyH: n(`ref:1:3`, () => h(`preview`)),
      tIconOnlyTooltip: n(`ref:1:4`, () => h(`preview`)),
      tIconOnlyHTooltip: n(`ref:1:5`, () => h(`preview`)),
      tSizes: n(`ref:1:6`, () => h(`preview`)),
      tDisabled: n(`ref:1:7`, () => h(`preview`)),
      tIcons: n(`ref:1:8`, () => h(`preview`)),
      tIconsBadge: n(`ref:1:9`, () => h(`preview`)),
      tNoPadRadius: n(`ref:1:10`, () => h(`preview`)),
      tTitle: n(`ref:1:11`, () => h(`preview`)),
      tTitleParent: n(`ref:1:12`, () => h(`preview`)),
      tSubmenu: n(`ref:1:13`, () => h(`preview`)),
      tCollapsible: n(`ref:1:14`, () => h(`preview`)),
      tDropdownClassJS: n(`ref:1:15`, () => h(`preview`)),
      tFileTree: n(`ref:1:16`, () => h(`preview`)),
      tActiveItem: n(`ref:1:17`, () => h(`preview`)),
      tHorizontal: n(`ref:1:18`, () => h(`preview`)),
      tHorizontalSubmenu: n(`ref:1:19`, () => h(`preview`)),
      tMega: n(`ref:1:20`, () => h(`preview`)),
      tCollapsibleResponsive: n(`ref:1:21`, () => h(`preview`)),
      tArray: n(`ref:1:22`, () => h(`preview`)),
      tArrayInternal: n(`ref:1:23`, () => h(`preview`)),
      tNavigation: n(`ref:1:24`, () => h(`preview`)),
      menuData: [
        {
          label: `Solutions`,
          children: [
            `Design`,
            `Development`,
            `Hosting`,
            `Domain register`
          ]
        },
        {
          label: `Enterprise`,
          children: [
            `CRM software`,
            `Marketing management`,
            `Security`,
            `Consulting`
          ]
        },
        {
          label: `Products`,
          children: [
            `UI Kit`,
            `WordPress themes`,
            `WordPress plugins`,
            {
              label: `Open source`,
              children: [
                `Auth management system`,
                `VScode theme`,
                `Color picker app`
              ]
            }
          ]
        },
        {
          label: `Company`,
          children: [
            `About us`,
            `Contact us`,
            `Privacy policy`,
            `Press kit`
          ]
        }
      ],
      menuItems: [
        {
          kind: `title`,
          children: `Main`
        },
        {
          kind: `item`,
          children: `Solutions`,
          submenu: {
            items: [
              `Design`,
              `Development`,
              `Hosting`,
              `Domain register`
            ].map((e2) => ({
              kind: `item`,
              children: e2
            }))
          }
        },
        {
          kind: `item`,
          children: `Enterprise`,
          dropdownToggle: {
            children: `More`
          },
          dropdown: {
            visible: true,
            items: [
              `CRM software`,
              `Marketing management`,
              `Security`,
              `Consulting`
            ].map((e2) => ({
              kind: `item`,
              children: e2
            }))
          }
        },
        {
          kind: `item`,
          children: `Products`,
          submenu: {
            items: [
              {
                kind: `item`,
                children: `UI Kit`
              },
              {
                kind: `item`,
                children: `WordPress themes`
              },
              {
                kind: `item`,
                children: `WordPress plugins`
              },
              {
                kind: `item`,
                children: `Open source`,
                submenu: {
                  items: [
                    `Auth management system`,
                    `VScode theme`,
                    `Color picker app`
                  ].map((e2) => ({
                    kind: `item`,
                    children: e2
                  }))
                }
              }
            ]
          }
        },
        {
          kind: `item`,
          children: `Company`,
          submenu: {
            items: [
              `About us`,
              `Contact us`,
              `Privacy policy`,
              `Press kit`
            ].map((e2) => ({
              kind: `item`,
              children: e2
            }))
          }
        }
      ]
    })));
    return d(() => {
      let n2 = c(), o2 = m(`rue:component:start`), h2 = m(`rue:component:end`);
      return s(n2, o2), s(n2, h2), l(v(x, {
        children: d(() => {
          let n3 = c(), o3 = p(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let h3 = p(`h1`);
          s(o3, h3), s(h3, a(`Menu \u83DC\u5355`));
          let x2 = p(`p`);
          s(o3, x2), e(x2, `text-sm mt-3 mb-3`), s(x2, a(`Menu \u7528\u4E8E\u5782\u76F4\u6216\u6C34\u5E73\u5C55\u793A\u5BFC\u822A\u94FE\u63A5\u3002`));
          let me = p(`div`);
          s(o3, me), e(me, `text-sm`);
          let he = p(`a`);
          s(me, he), i(he, `href`, `https://daisyui.com/components/menu/`), i(he, `target`, `_blank`), s(he, a(`\u67E5\u770B Menu \u9759\u6001\u6837\u5F0F`));
          let L = p(`div`);
          s(o3, L), e(L, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ge = p(`h2`);
          s(L, ge), e(ge, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ge, a(`# \u5BFC\u822A\u8DF3\u8F6C`));
          let _e = m(`rue:component:start`), ve = m(`rue:component:end`);
          s(L, _e), s(L, ve), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: de.value,
              onChange: (e2) => de.value = e2,
              className: `mb-3`
            }), L, _e, ve);
          });
          let ye = m(`rue:slot:start`), be = m(`rue:slot:end`);
          s(L, ye), s(L, be), f(() => {
            l(g(de.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), i(t3, `to`, `/examples/hello-world`), s(t3, a(`\u8DEF\u7531\u8DF3\u8F6C\u5230 Hello World`));
                  let n5 = p(`div`);
                  s(e3, n5), i(n5, `href`, `https://example.com`), i(n5, `target`, `_blank`), i(n5, `rel`, `noreferrer`), s(n5, a(`\u8DF3\u8F6C\u5230\u5916\u90E8\u7F51\u7AD9`));
                  let r2 = p(`div`);
                  return s(e3, r2), u(r2, `click`, () => alert(`clicked`)), s(r2, a(`\u70B9\u51FB\u6267\u884C\u903B\u8F91`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Menu } from '@rue/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">\u8DEF\u7531\u8DF3\u8F6C\u5230 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">\u8DF3\u8F6C\u5230\u5916\u90E8\u7F51\u7AD9</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>\u70B9\u51FB\u6267\u884C\u903B\u8F91</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), L, ye, be);
          });
          let R = p(`div`);
          s(o3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let xe = p(`h2`);
          s(R, xe), e(xe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(xe, a(`# Menu \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF09`));
          let Se = m(`rue:component:start`), Ce = m(`rue:component:end`);
          s(R, Se), s(R, Ce), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: le.value,
              onChange: (e2) => le.value = e2,
              className: `mb-3`
            }), R, Se, Ce);
          });
          let we = m(`rue:slot:start`), Te = m(`rue:slot:end`);
          s(R, we), s(R, Te), f(() => {
            l(g(le.value === `preview` ? d(() => {
              let e2 = c(), n4 = m(`rue:component:start`), a2 = m(`rue:component:end`);
              return s(e2, n4), s(e2, a2), l(v(j, {
                className: `xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,
                children: d(() => {
                  let e3 = c(), n5 = m(`rue:list:start`), a3 = m(`rue:list:end`);
                  s(e3, n5), s(e3, a3);
                  let o4 = /* @__PURE__ */ new Map();
                  return f(() => {
                    o4 = _({
                      items: fe || [],
                      getKey: (e4, t2) => t2,
                      elements: o4,
                      parent: n5.parentNode,
                      before: a3,
                      start: n5,
                      renderItem: (e4, n6, a4, o5, u2) => {
                        l(d(() => {
                          let n7 = c(), a5 = p(`li`);
                          s(n7, a5), f(() => {
                            i(a5, `key`, String(u2));
                          });
                          let o6 = p(`div`);
                          s(a5, o6);
                          let h4 = t(o6);
                          s(o6, h4), f(() => {
                            r(h4, e4.label);
                          });
                          let g2 = p(`div`);
                          s(a5, g2);
                          let v2 = m(`rue:list:start`), y3 = m(`rue:list:end`);
                          s(g2, v2), s(g2, y3);
                          let b3 = /* @__PURE__ */ new Map();
                          return f(() => {
                            b3 = _({
                              items: e4.children || [],
                              getKey: (e5, t2) => t2,
                              elements: b3,
                              parent: g2,
                              before: y3,
                              start: v2,
                              renderItem: (e5, t2, n8, r2, i2) => {
                                l(d(() => ({
                                  vaporElement: c()
                                })), t2, n8, r2);
                              }
                            });
                          }), {
                            vaporElement: n7
                          };
                        }), n6, a4, o5);
                      }
                    });
                  }), {
                    vaporElement: e3
                  };
                })
              }), e2, n4, a2), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Menu } from '@rue/design';
const menuData = [
  { label: 'Solutions', children: ['Design', 'Development', 'Hosting', 'Domain register'] },
  { label: 'Enterprise', children: ['CRM software', 'Marketing management', 'Security', 'Consulting'] },
  {
    label: 'Products',
    children: [
      'UI Kit',
      'WordPress themes',
      'WordPress plugins',
      { label: 'Open source', children: ['Auth management system', 'VScode theme', 'Color picker app'] },
    ],
  },
  { label: 'Company', children: ['About us', 'Contact us', 'Privacy policy', 'Press kit'] },
];
<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
  {menuData.map((g, i) => (
    <li key={i}>
      <Menu.Item>{g.label}</Menu.Item>
      <Menu.Submenu>
        {g.children.map((c, j) =>
          typeof c === 'string' ? (
            <Menu.Item key={j}>{c}</Menu.Item>
          ) : (
            <li key={j}>
              <Menu.Item>{c.label}</Menu.Item>
              <Menu.Submenu>
                {c.children.map((x, k) => (
                  <Menu.Item key={k}>{x}</Menu.Item>
                ))}
              </Menu.Submenu>
            </li>
          )
        )}
      </Menu.Submenu>
    </li>
  ))}
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), R, we, Te);
          });
          let z = p(`div`);
          s(o3, z), e(z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ee = p(`h2`);
          s(z, Ee), e(Ee, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ee, a(`# Menu \u901A\u8FC7\u6570\u636E\u6E32\u67D3\uFF08\u6570\u7EC4\uFF0C\u7EC4\u4EF6\u5185\u90E8\uFF09`));
          let De = m(`rue:component:start`), Oe = m(`rue:component:end`);
          s(z, De), s(z, Oe), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: ue.value,
              onChange: (e2) => ue.value = e2,
              className: `mb-3`
            }), z, De, Oe);
          });
          let ke = m(`rue:slot:start`), Ae = m(`rue:slot:end`);
          s(z, ke), s(z, Ae), f(() => {
            l(g(ue.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(j, {
                  items: pe,
                  className: `xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Menu } from '@rue/design';
const menuItems = [
  { kind: 'title', children: 'Main' },
  { kind: 'item', children: 'Solutions', submenu: { items: ['Design', 'Development', 'Hosting', 'Domain register'].map(t => ({ kind: 'item', children: t })) } },
  { kind: 'item', children: 'Enterprise', dropdownToggle: { children: 'More' }, dropdown: { visible: true, items: ['CRM software', 'Marketing management', 'Security', 'Consulting'].map(t => ({ kind: 'item', children: t })) } },
  { kind: 'item', children: 'Products', submenu: { items: [
    { kind: 'item', children: 'UI Kit' },
    { kind: 'item', children: 'WordPress themes' },
    { kind: 'item', children: 'WordPress plugins' },
    { kind: 'item', children: 'Open source', submenu: { items: ['Auth management system', 'VScode theme', 'Color picker app'].map(t => ({ kind: 'item', children: t })) } },
  ] } },
  { kind: 'item', children: 'Company', submenu: { items: ['About us', 'Contact us', 'Privacy policy', 'Press kit'].map(t => ({ kind: 'item', children: t })) } },
];
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), z, ke, Ae);
          });
          let B = p(`div`);
          s(o3, B), e(B, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let je = p(`h2`);
          s(B, je), e(je, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(je, a(`# Menu`));
          let Me = m(`rue:component:start`), Ne = m(`rue:component:end`);
          s(B, Me), s(B, Ne), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: y2.value,
              onChange: (e2) => y2.value = e2,
              className: `mb-3`
            }), B, Me, Ne);
          });
          let Pe = m(`rue:slot:start`), Fe = m(`rue:slot:end`);
          s(B, Pe), s(B, Fe), f(() => {
            l(g(y2.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), i(t3, `as`, `button`), s(t3, a(`Item 1`));
                  let n5 = p(`div`);
                  s(e3, n5), i(n5, `as`, `button`), s(n5, a(`Item 2`));
                  let r2 = p(`div`);
                  return s(e3, r2), i(r2, `as`, `button`), s(r2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), B, Pe, Fe);
          });
          let V = p(`div`);
          s(o3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ie = p(`h2`);
          s(V, Ie), e(Ie, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ie, a(`# \u54CD\u5E94\u5F0F\uFF1A\u5C0F\u5C4F\u5782\u76F4\uFF0C\u5927\u5C4F\u6C34\u5E73`));
          let Le = m(`rue:component:start`), Re = m(`rue:component:end`);
          s(V, Le), s(V, Re), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: b2.value,
              onChange: (e2) => b2.value = e2,
              className: `mb-3`
            }), V, Le, Re);
          });
          let ze = m(`rue:slot:start`), Be = m(`rue:slot:end`);
          s(V, ze), s(V, Be), f(() => {
            l(g(b2.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), i(t3, `as`, `button`), s(t3, a(`Item 1`));
                  let n5 = p(`div`);
                  s(e3, n5), i(n5, `as`, `button`), s(n5, a(`Item 2`));
                  let r2 = p(`div`);
                  return s(e3, r2), i(r2, `as`, `button`), s(r2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), V, ze, Be);
          });
          let H = p(`div`);
          s(o3, H), e(H, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ve = p(`h2`);
          s(H, Ve), e(Ve, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ve, a(`# \u4EC5\u56FE\u6807`));
          let He = m(`rue:component:start`), Ue = m(`rue:component:end`);
          s(H, He), s(H, Ue), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: w2.value,
              onChange: (e2) => w2.value = e2,
              className: `mb-3`
            }), H, He, Ue);
          });
          let We = m(`rue:slot:start`), Ge = m(`rue:slot:end`);
          s(H, We), s(H, Ge), f(() => {
            l(g(w2.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                className: `bg-base-200 rounded-box`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `button`);
                  let r3 = p(`svg`);
                  s(n5, r3), i(r3, `xmlns`, `http://www.w3.org/2000/svg`), e(r3, `h-5 w-5`), i(r3, `fill`, `none`), i(r3, `viewBox`, `0 0 24 24`), i(r3, `stroke`, `currentColor`);
                  let a2 = p(`path`);
                  s(r3, a2), i(a2, `strokeLinecap`, `round`), i(a2, `strokeLinejoin`, `round`), i(a2, `strokeWidth`, `2`), i(a2, `d`, `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`);
                  let o4 = p(`div`);
                  s(t3, o4), i(o4, `as`, `button`);
                  let l2 = p(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), e(l2, `h-5 w-5`), i(l2, `fill`, `none`), i(l2, `viewBox`, `0 0 24 24`), i(l2, `stroke`, `currentColor`);
                  let u2 = p(`path`);
                  s(l2, u2), i(u2, `strokeLinecap`, `round`), i(u2, `strokeLinejoin`, `round`), i(u2, `strokeWidth`, `2`), i(u2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let d2 = p(`div`);
                  s(t3, d2), i(d2, `as`, `button`);
                  let f2 = p(`svg`);
                  s(d2, f2), i(f2, `xmlns`, `http://www.w3.org/2000/svg`), e(f2, `h-5 w-5`), i(f2, `fill`, `none`), i(f2, `viewBox`, `0 0 24 24`), i(f2, `stroke`, `currentColor`);
                  let m2 = p(`path`);
                  return s(f2, m2), i(m2, `strokeLinecap`, `round`), i(m2, `strokeLinejoin`, `round`), i(m2, `strokeWidth`, `2`), i(m2, `d`, `M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), H, We, Ge);
          });
          let U = p(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ke = p(`h2`);
          s(U, Ke), e(Ke, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ke, a(`# \u4EC5\u56FE\u6807\uFF08\u6C34\u5E73\uFF09`));
          let qe = m(`rue:component:start`), Je = m(`rue:component:end`);
          s(U, qe), s(U, Je), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: T2.value,
              onChange: (e2) => T2.value = e2,
              className: `mb-3`
            }), U, qe, Je);
          });
          let Ye = m(`rue:slot:start`), Xe = m(`rue:slot:end`);
          s(U, Ye), s(U, Xe), f(() => {
            l(g(T2.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                direction: `horizontal`,
                className: `bg-base-200 rounded-box`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `button`);
                  let r3 = p(`svg`);
                  s(n5, r3), i(r3, `xmlns`, `http://www.w3.org/2000/svg`), e(r3, `h-5 w-5`), i(r3, `fill`, `none`), i(r3, `viewBox`, `0 0 24 24`), i(r3, `stroke`, `currentColor`);
                  let a2 = p(`path`);
                  s(r3, a2), i(a2, `strokeLinecap`, `round`), i(a2, `strokeLinejoin`, `round`), i(a2, `strokeWidth`, `2`), i(a2, `d`, `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`);
                  let o4 = p(`div`);
                  s(t3, o4), i(o4, `as`, `button`);
                  let l2 = p(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), e(l2, `h-5 w-5`), i(l2, `fill`, `none`), i(l2, `viewBox`, `0 0 24 24`), i(l2, `stroke`, `currentColor`);
                  let u2 = p(`path`);
                  s(l2, u2), i(u2, `strokeLinecap`, `round`), i(u2, `strokeLinejoin`, `round`), i(u2, `strokeWidth`, `2`), i(u2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let d2 = p(`div`);
                  s(t3, d2), i(d2, `as`, `button`);
                  let f2 = p(`svg`);
                  s(d2, f2), i(f2, `xmlns`, `http://www.w3.org/2000/svg`), e(f2, `h-5 w-5`), i(f2, `fill`, `none`), i(f2, `viewBox`, `0 0 24 24`), i(f2, `stroke`, `currentColor`);
                  let m2 = p(`path`);
                  return s(f2, m2), i(m2, `strokeLinecap`, `round`), i(m2, `strokeLinejoin`, `round`), i(m2, `strokeWidth`, `2`), i(m2, `d`, `M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, Ye, Xe);
          });
          let Ze = p(`div`);
          s(o3, Ze), e(Ze, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Qe = p(`h2`);
          s(Ze, Qe), e(Qe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Qe, a(`# \u4EC5\u56FE\u6807\uFF08\u5E26 tooltip\uFF09`));
          let $e = m(`rue:component:start`), et = m(`rue:component:end`);
          s(Ze, $e), s(Ze, et), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: E2.value,
              onChange: (e2) => E2.value = e2,
              className: `mb-3`
            }), Ze, $e, et);
          });
          let tt = m(`rue:slot:start`), nt = m(`rue:slot:end`);
          s(Ze, tt), s(Ze, nt), f(() => {
            l(g(E2.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                className: `bg-base-200 rounded-box`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `button`), e(n5, `tooltip tooltip-right`), i(n5, `data-tip`, `Home`);
                  let r3 = p(`svg`);
                  s(n5, r3), i(r3, `xmlns`, `http://www.w3.org/2000/svg`), e(r3, `h-5 w-5`), i(r3, `fill`, `none`), i(r3, `viewBox`, `0 0 24 24`), i(r3, `stroke`, `currentColor`);
                  let a2 = p(`path`);
                  s(r3, a2), i(a2, `strokeLinecap`, `round`), i(a2, `strokeLinejoin`, `round`), i(a2, `strokeWidth`, `2`), i(a2, `d`, `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`);
                  let o4 = p(`div`);
                  s(t3, o4), i(o4, `as`, `button`), e(o4, `tooltip tooltip-right`), i(o4, `data-tip`, `Details`);
                  let l2 = p(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), e(l2, `h-5 w-5`), i(l2, `fill`, `none`), i(l2, `viewBox`, `0 0 24 24`), i(l2, `stroke`, `currentColor`);
                  let u2 = p(`path`);
                  s(l2, u2), i(u2, `strokeLinecap`, `round`), i(u2, `strokeLinejoin`, `round`), i(u2, `strokeWidth`, `2`), i(u2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let d2 = p(`div`);
                  s(t3, d2), i(d2, `as`, `button`), e(d2, `tooltip tooltip-right`), i(d2, `data-tip`, `Stats`);
                  let f2 = p(`svg`);
                  s(d2, f2), i(f2, `xmlns`, `http://www.w3.org/2000/svg`), e(f2, `h-5 w-5`), i(f2, `fill`, `none`), i(f2, `viewBox`, `0 0 24 24`), i(f2, `stroke`, `currentColor`);
                  let m2 = p(`path`);
                  return s(f2, m2), i(m2, `strokeLinecap`, `round`), i(m2, `strokeLinejoin`, `round`), i(m2, `strokeWidth`, `2`), i(m2, `d`, `M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box">
  <Menu.Item as="button" className="tooltip tooltip-right" data-tip="Home">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip tooltip-right" data-tip="Details">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip tooltip-right" data-tip="Stats">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2a2 2 0 002-2zm0 0 V9a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Ze, tt, nt);
          });
          let W = p(`div`);
          s(o3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let rt = p(`h2`);
          s(W, rt), e(rt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(rt, a(`# \u4EC5\u56FE\u6807\uFF08\u6C34\u5E73\uFF0Ctooltip\uFF09`));
          let it = m(`rue:component:start`), at = m(`rue:component:end`);
          s(W, it), s(W, at), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: D2.value,
              onChange: (e2) => D2.value = e2,
              className: `mb-3`
            }), W, it, at);
          });
          let ot = m(`rue:slot:start`), st = m(`rue:slot:end`);
          s(W, ot), s(W, st), f(() => {
            l(g(D2.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                direction: `horizontal`,
                className: `bg-base-200 rounded-box mt-6`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `button`), e(n5, `tooltip`), i(n5, `data-tip`, `Home`);
                  let r3 = p(`svg`);
                  s(n5, r3), i(r3, `xmlns`, `http://www.w3.org/2000/svg`), e(r3, `h-5 w-5`), i(r3, `fill`, `none`), i(r3, `viewBox`, `0 0 24 24`), i(r3, `stroke`, `currentColor`);
                  let a2 = p(`path`);
                  s(r3, a2), i(a2, `strokeLinecap`, `round`), i(a2, `strokeLinejoin`, `round`), i(a2, `strokeWidth`, `2`), i(a2, `d`, `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`);
                  let o4 = p(`div`);
                  s(t3, o4), i(o4, `as`, `button`), e(o4, `tooltip`), i(o4, `data-tip`, `Details`);
                  let l2 = p(`svg`);
                  s(o4, l2), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), e(l2, `h-5 w-5`), i(l2, `fill`, `none`), i(l2, `viewBox`, `0 0 24 24`), i(l2, `stroke`, `currentColor`);
                  let u2 = p(`path`);
                  s(l2, u2), i(u2, `strokeLinecap`, `round`), i(u2, `strokeLinejoin`, `round`), i(u2, `strokeWidth`, `2`), i(u2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`);
                  let d2 = p(`div`);
                  s(t3, d2), i(d2, `as`, `button`), e(d2, `tooltip`), i(d2, `data-tip`, `Stats`);
                  let f2 = p(`svg`);
                  s(d2, f2), i(f2, `xmlns`, `http://www.w3.org/2000/svg`), e(f2, `h-5 w-5`), i(f2, `fill`, `none`), i(f2, `viewBox`, `0 0 24 24`), i(f2, `stroke`, `currentColor`);
                  let m2 = p(`path`);
                  return s(f2, m2), i(m2, `strokeLinecap`, `round`), i(m2, `strokeLinejoin`, `round`), i(m2, `strokeWidth`, `2`), i(m2, `d`, `M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
  <Menu.Item as="button" className="tooltip" data-tip="Home">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip" data-tip="Details">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip" data-tip="Stats">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), W, ot, st);
          });
          let G = p(`div`);
          s(o3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ct = p(`h2`);
          s(G, ct), e(ct, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(ct, a(`# Menu \u5C3A\u5BF8`));
          let lt = m(`rue:component:start`), ut = m(`rue:component:end`);
          s(G, lt), s(G, ut), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: O2.value,
              onChange: (e2) => O2.value = e2,
              className: `mb-3`
            }), G, lt, ut);
          });
          let dt = m(`rue:slot:start`), ft = m(`rue:slot:end`);
          s(G, dt), s(G, ft), f(() => {
            l(g(O2.value === `preview` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `grid gap-6`);
              let r2 = m(`rue:component:start`), o4 = m(`rue:component:end`);
              s(n4, r2), s(n4, o4), l(v(j, {
                size: `xs`,
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e2 = c(), t3 = p(`div`);
                  s(e2, t3), i(t3, `as`, `button`), s(t3, a(`Xsmall 1`));
                  let n5 = p(`div`);
                  return s(e2, n5), i(n5, `as`, `button`), s(n5, a(`Xsmall 2`)), {
                    vaporElement: e2
                  };
                })
              }), n4, r2, o4);
              let u2 = m(`rue:component:start`), f2 = m(`rue:component:end`);
              s(n4, u2), s(n4, f2), l(v(j, {
                size: `sm`,
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e2 = c(), t3 = p(`div`);
                  s(e2, t3), i(t3, `as`, `button`), s(t3, a(`Small 1`));
                  let n5 = p(`div`);
                  return s(e2, n5), i(n5, `as`, `button`), s(n5, a(`Small 2`)), {
                    vaporElement: e2
                  };
                })
              }), n4, u2, f2);
              let h4 = m(`rue:component:start`), g2 = m(`rue:component:end`);
              s(n4, h4), s(n4, g2), l(v(j, {
                size: `md`,
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e2 = c(), t3 = p(`div`);
                  s(e2, t3), i(t3, `as`, `button`), s(t3, a(`Medium 1`));
                  let n5 = p(`div`);
                  return s(e2, n5), i(n5, `as`, `button`), s(n5, a(`Medium 2`)), {
                    vaporElement: e2
                  };
                })
              }), n4, h4, g2);
              let _2 = m(`rue:component:start`), y3 = m(`rue:component:end`);
              s(n4, _2), s(n4, y3), l(v(j, {
                size: `lg`,
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e2 = c(), t3 = p(`div`);
                  s(e2, t3), i(t3, `as`, `button`), s(t3, a(`Large 1`));
                  let n5 = p(`div`);
                  return s(e2, n5), i(n5, `as`, `button`), s(n5, a(`Large 2`)), {
                    vaporElement: e2
                  };
                })
              }), n4, _2, y3);
              let b3 = m(`rue:component:start`), x3 = m(`rue:component:end`);
              return s(n4, b3), s(n4, x3), l(v(j, {
                size: `xl`,
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e2 = c(), t3 = p(`div`);
                  s(e2, t3), i(t3, `as`, `button`), s(t3, a(`Xlarge 1`));
                  let n5 = p(`div`);
                  return s(e2, n5), i(n5, `as`, `button`), s(n5, a(`Xlarge 2`)), {
                    vaporElement: e2
                  };
                })
              }), n4, b3, x3), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="grid gap-6">
  <Menu size="xs" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Xsmall 1</Menu.Item>
    <Menu.Item as="button">Xsmall 2</Menu.Item>
  </Menu>
  <Menu size="sm" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Small 1</Menu.Item>
    <Menu.Item as="button">Small 2</Menu.Item>
  </Menu>
  <Menu size="md" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Medium 1</Menu.Item>
    <Menu.Item as="button">Medium 2</Menu.Item>
  </Menu>
  <Menu size="lg" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Large 1</Menu.Item>
    <Menu.Item as="button">Large 2</Menu.Item>
  </Menu>
  <Menu size="xl" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Xlarge 1</Menu.Item>
    <Menu.Item as="button">Xlarge 2</Menu.Item>
  </Menu>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, dt, ft);
          });
          let K = p(`div`);
          s(o3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let pt = p(`h2`);
          s(K, pt), e(pt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(pt, a(`# \u7981\u7528\u9879\u76EE`));
          let mt = m(`rue:component:start`), ht = m(`rue:component:end`);
          s(K, mt), s(K, ht), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: k2.value,
              onChange: (e2) => k2.value = e2,
              className: `mb-3`
            }), K, mt, ht);
          });
          let gt = m(`rue:slot:start`), _t = m(`rue:slot:end`);
          s(K, gt), s(K, _t), f(() => {
            l(g(k2.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `button`), s(n5, a(`Enabled item`));
                  let r3 = p(`div`);
                  s(t3, r3), i(r3, `as`, `button`), i(r3, `liClassName`, `menu-disabled`), s(r3, a(`disabled item`));
                  let o4 = p(`div`);
                  return s(t3, o4), i(o4, `as`, `a`), e(o4, `menu-disabled`), s(o4, a(`disabled item`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), K, gt, _t);
          });
          let q = p(`div`);
          s(o3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let vt = p(`h2`);
          s(q, vt), e(vt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(vt, a(`# \u5E26\u56FE\u6807`));
          let yt = m(`rue:component:start`), bt = m(`rue:component:end`);
          s(q, yt), s(q, bt), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: A2.value,
              onChange: (e2) => A2.value = e2,
              className: `mb-3`
            }), q, yt, bt);
          });
          let xt = m(`rue:slot:start`), St = m(`rue:slot:end`);
          s(q, xt), s(q, St), f(() => {
            l(g(A2.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `button`);
                  let r3 = p(`svg`);
                  s(n5, r3), i(r3, `xmlns`, `http://www.w3.org/2000/svg`), e(r3, `h-5 w-5`), i(r3, `fill`, `none`), i(r3, `viewBox`, `0 0 24 24`), i(r3, `stroke`, `currentColor`);
                  let o4 = p(`path`);
                  s(r3, o4), i(o4, `strokeLinecap`, `round`), i(o4, `strokeLinejoin`, `round`), i(o4, `strokeWidth`, `2`), i(o4, `d`, `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`), s(n5, a(`Item 2`));
                  let l2 = p(`div`);
                  s(t3, l2), i(l2, `as`, `button`);
                  let u2 = p(`svg`);
                  s(l2, u2), i(u2, `xmlns`, `http://www.w3.org/2000/svg`), e(u2, `h-5 w-5`), i(u2, `fill`, `none`), i(u2, `viewBox`, `0 0 24 24`), i(u2, `stroke`, `currentColor`);
                  let d2 = p(`path`);
                  s(u2, d2), i(d2, `strokeLinecap`, `round`), i(d2, `strokeLinejoin`, `round`), i(d2, `strokeWidth`, `2`), i(d2, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`), s(l2, a(`Item 1`));
                  let f2 = p(`div`);
                  s(t3, f2), i(f2, `as`, `button`);
                  let m2 = p(`svg`);
                  s(f2, m2), i(m2, `xmlns`, `http://www.w3.org/2000/svg`), e(m2, `h-5 w-5`), i(m2, `fill`, `none`), i(m2, `viewBox`, `0 0 24 24`), i(m2, `stroke`, `currentColor`);
                  let h4 = p(`path`);
                  return s(m2, h4), i(h4, `strokeLinecap`, `round`), i(h4, `strokeLinejoin`, `round`), i(h4, `strokeWidth`, `2`), i(h4, `d`, `M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`), s(f2, a(`Item 3`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    Item 2
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Item 1
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    Item 3
  </Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, xt, St);
          });
          let J = p(`div`);
          s(o3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ct = p(`h2`);
          s(J, Ct), e(Ct, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ct, a(`# \u5E26\u56FE\u6807\u4E0E\u5FBD\u7AE0\uFF08\u54CD\u5E94\u5F0F\uFF09`));
          let wt = m(`rue:component:start`), Tt = m(`rue:component:end`);
          s(J, wt), s(J, Tt), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: M2.value,
              onChange: (e2) => M2.value = e2,
              className: `mb-3`
            }), J, wt, Tt);
          });
          let Et = m(`rue:slot:start`), Dt = m(`rue:slot:end`);
          s(J, Et), s(J, Dt), f(() => {
            l(g(M2.value === `preview` ? d(() => {
              let n4 = c(), o4 = m(`rue:component:start`), u2 = m(`rue:component:end`);
              return s(n4, o4), s(n4, u2), l(v(j, {
                className: `bg-base-200 lg:menu-horizontal rounded-box`,
                children: d(() => {
                  let n5 = c(), o5 = p(`div`);
                  s(n5, o5), i(o5, `as`, `button`);
                  let u3 = p(`svg`);
                  s(o5, u3), i(u3, `xmlns`, `http://www.w3.org/2000/svg`), e(u3, `h-5 w-5`), i(u3, `fill`, `none`), i(u3, `viewBox`, `0 0 24 24`), i(u3, `stroke`, `currentColor`);
                  let d2 = p(`path`);
                  s(u3, d2), i(d2, `strokeLinecap`, `round`), i(d2, `strokeLinejoin`, `round`), i(d2, `strokeWidth`, `2`), i(d2, `d`, `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`), s(o5, a(`Inbox`));
                  let f2 = m(`rue:component:start`), h4 = m(`rue:component:end`);
                  s(o5, f2), s(o5, h4), l(v(ee, {
                    size: `xs`,
                    children: `99+`
                  }), o5, f2, h4);
                  let g2 = p(`div`);
                  s(n5, g2), i(g2, `as`, `button`);
                  let _2 = p(`svg`);
                  s(g2, _2), i(_2, `xmlns`, `http://www.w3.org/2000/svg`), e(_2, `h-5 w-5`), i(_2, `fill`, `none`), i(_2, `viewBox`, `0 0 24 24`), i(_2, `stroke`, `currentColor`);
                  let y3 = p(`path`);
                  s(_2, y3), i(y3, `strokeLinecap`, `round`), i(y3, `strokeLinejoin`, `round`), i(y3, `strokeWidth`, `2`), i(y3, `d`, `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`), s(g2, a(`Updates`));
                  let b3 = t(g2);
                  s(g2, b3), r(b3, ` `);
                  let x3 = m(`rue:component:start`), S2 = m(`rue:component:end`);
                  s(g2, x3), s(g2, S2), l(v(ee, {
                    size: `xs`,
                    variant: `warning`,
                    children: `NEW`
                  }), g2, x3, S2);
                  let C2 = p(`div`);
                  s(n5, C2), i(C2, `as`, `button`), s(C2, a(`Stats`));
                  let w3 = m(`rue:component:start`), T3 = m(`rue:component:end`);
                  return s(C2, w3), s(C2, T3), l(v(ee, {
                    size: `xs`,
                    variant: `info`
                  }), C2, w3, T3), {
                    vaporElement: n5
                  };
                })
              }), n4, o4, u2), {
                vaporElement: n4
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    Inbox <Badge size="xs">99+</Badge>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Updates <Badge size="xs" variant="warning">NEW</Badge>
  </Menu.Item>
  <Menu.Item as="button">
    Stats <Badge size="xs" variant="info" />
  </Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), J, Et, Dt);
          });
          let Y = p(`div`);
          s(o3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ot = p(`h2`);
          s(Y, Ot), e(Ot, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ot, a(`# \u53BB\u9664\u5185\u8FB9\u8DDD\u548C\u5706\u89D2`));
          let kt = m(`rue:component:start`), At = m(`rue:component:end`);
          s(Y, kt), s(Y, At), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: N.value,
              onChange: (e2) => N.value = e2,
              className: `mb-3`
            }), Y, kt, At);
          });
          let jt = m(`rue:slot:start`), Mt = m(`rue:slot:end`);
          s(Y, jt), s(Y, Mt), f(() => {
            l(g(N.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `bg-base-200 w-56 [&_li>*]:rounded-none p-0`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), s(t3, a(`Item 1`));
                  let n5 = p(`div`);
                  s(e3, n5), s(n5, a(`Item 2`));
                  let r2 = p(`div`);
                  return s(e3, r2), s(r2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, jt, Mt);
          });
          let X = p(`div`);
          s(o3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Nt = p(`h2`);
          s(X, Nt), e(Nt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Nt, a(`# \u5E26\u6807\u9898`));
          let Pt = m(`rue:component:start`), Ft = m(`rue:component:end`);
          s(X, Pt), s(X, Ft), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: te.value,
              onChange: (e2) => te.value = e2,
              className: `mb-3`
            }), X, Pt, Ft);
          });
          let It = m(`rue:slot:start`), Lt = m(`rue:slot:end`);
          s(X, It), s(X, Lt), f(() => {
            l(g(te.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), s(t3, a(`Title`));
                  let n5 = p(`div`);
                  s(e3, n5), s(n5, a(`Item 1`));
                  let r2 = p(`div`);
                  s(e3, r2), s(r2, a(`Item 2`));
                  let i2 = p(`div`);
                  return s(e3, i2), s(i2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), X, It, Lt);
          });
          let Z = p(`div`);
          s(o3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Rt = p(`h2`);
          s(Z, Rt), e(Rt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Rt, a(`# \u6807\u9898\u4F5C\u4E3A\u7236\u7EA7`));
          let zt = m(`rue:component:start`), Bt = m(`rue:component:end`);
          s(Z, zt), s(Z, Bt), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: ne.value,
              onChange: (e2) => ne.value = e2,
              className: `mb-3`
            }), Z, zt, Bt);
          });
          let Vt = m(`rue:slot:start`), Ht = m(`rue:slot:end`);
          s(Z, Vt), s(Z, Ht), f(() => {
            l(g(ne.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e3 = c(), t3 = p(`li`);
                  s(e3, t3);
                  let n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `h2`), s(n5, a(`Title`));
                  let r2 = p(`ul`);
                  s(t3, r2);
                  let o4 = p(`div`);
                  s(r2, o4), s(o4, a(`Item 1`));
                  let l2 = p(`div`);
                  s(r2, l2), s(l2, a(`Item 2`));
                  let u2 = p(`div`);
                  return s(r2, u2), s(u2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, Vt, Ht);
          });
          let Ut = p(`div`);
          s(o3, Ut), e(Ut, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Wt = p(`h2`);
          s(Ut, Wt), e(Wt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Wt, a(`# \u5B50\u83DC\u5355`));
          let Gt = m(`rue:component:start`), Kt = m(`rue:component:end`);
          s(Ut, Gt), s(Ut, Kt), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: re.value,
              onChange: (e2) => re.value = e2,
              className: `mb-3`
            }), Ut, Gt, Kt);
          });
          let qt = m(`rue:slot:start`), Jt = m(`rue:slot:end`);
          s(Ut, qt), s(Ut, Jt), f(() => {
            l(g(re.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), i(t3, `as`, `button`), s(t3, a(`Item 1`));
                  let n5 = p(`li`);
                  s(e3, n5);
                  let r2 = p(`div`);
                  s(n5, r2), i(r2, `as`, `button`), s(r2, a(`Parent`));
                  let o4 = p(`div`);
                  s(n5, o4);
                  let l2 = p(`div`);
                  s(o4, l2), i(l2, `as`, `button`), s(l2, a(`Submenu 1`));
                  let u2 = p(`div`);
                  s(o4, u2), i(u2, `as`, `button`), s(u2, a(`Submenu 2`));
                  let d2 = p(`li`);
                  s(o4, d2);
                  let f2 = p(`div`);
                  s(d2, f2), i(f2, `as`, `button`), s(f2, a(`Parent`));
                  let m2 = p(`div`);
                  s(d2, m2);
                  let h4 = p(`div`);
                  s(m2, h4), i(h4, `as`, `button`), s(h4, a(`Submenu 1`));
                  let g2 = p(`div`);
                  s(m2, g2), i(g2, `as`, `button`), s(g2, a(`Submenu 2`));
                  let _2 = p(`div`);
                  return s(e3, _2), i(_2, `as`, `button`), s(_2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <li>
    <Menu.Item as="button">Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item as="button">Submenu 1</Menu.Item>
      <Menu.Item as="button">Submenu 2</Menu.Item>
      <li>
        <Menu.Item as="button">Parent</Menu.Item>
        <Menu.Submenu>
          <Menu.Item as="button">Submenu 1</Menu.Item>
          <Menu.Item as="button">Submenu 2</Menu.Item>
        </Menu.Submenu>
      </li>
    </Menu.Submenu>
  </li>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Ut, qt, Jt);
          });
          let Q = p(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Yt = p(`h2`);
          s(Q, Yt), e(Yt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Yt, a(`# \u53EF\u6298\u53E0\u5B50\u83DC\u5355`));
          let Xt = m(`rue:component:start`), Zt = m(`rue:component:end`);
          s(Q, Xt), s(Q, Zt), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: P.value,
              onChange: (e2) => P.value = e2,
              className: `mb-3`
            }), Q, Xt, Zt);
          });
          let Qt = m(`rue:slot:start`), $t = m(`rue:slot:end`);
          s(Q, Qt), s(Q, $t), f(() => {
            l(g(P.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), i(t3, `as`, `button`), s(t3, a(`Item 1`));
                  let n5 = p(`li`);
                  s(e3, n5);
                  let r2 = p(`details`);
                  s(n5, r2);
                  let o4 = p(`summary`);
                  s(r2, o4), s(o4, a(`Parent`));
                  let l2 = p(`ul`);
                  s(r2, l2);
                  let u2 = p(`div`);
                  s(l2, u2), i(u2, `as`, `button`), s(u2, a(`Submenu 1`));
                  let d2 = p(`div`);
                  s(l2, d2), i(d2, `as`, `button`), s(d2, a(`Submenu 2`));
                  let f2 = p(`li`);
                  s(l2, f2);
                  let m2 = p(`details`);
                  s(f2, m2);
                  let h4 = p(`summary`);
                  s(m2, h4), s(h4, a(`Parent`));
                  let g2 = p(`ul`);
                  s(m2, g2);
                  let _2 = p(`div`);
                  s(g2, _2), i(_2, `as`, `button`), s(_2, a(`Submenu 1`));
                  let v2 = p(`div`);
                  s(g2, v2), i(v2, `as`, `button`), s(v2, a(`Submenu 2`));
                  let y3 = p(`div`);
                  return s(e3, y3), i(y3, `as`, `button`), s(y3, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <Menu.Item as="button">Submenu 1</Menu.Item>
        <Menu.Item as="button">Submenu 2</Menu.Item>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <Menu.Item as="button">Submenu 1</Menu.Item>
              <Menu.Item as="button">Submenu 2</Menu.Item>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, Qt, $t);
          });
          let en = p(`div`);
          s(o3, en), e(en, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let tn = p(`h2`);
          s(en, tn), e(tn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(tn, a(`# \u901A\u8FC7\u7C7B\u540D\u63A7\u5236\u5C55\u5F00\uFF08JS\uFF09`));
          let nn = m(`rue:component:start`), rn = m(`rue:component:end`);
          s(en, nn), s(en, rn), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: ie.value,
              onChange: (e2) => ie.value = e2,
              className: `mb-3`
            }), en, nn, rn);
          });
          let an = m(`rue:slot:start`), on = m(`rue:slot:end`);
          s(en, an), s(en, on), f(() => {
            l(g(ie.value === `preview` ? d(() => {
              let t2 = c(), n4 = p(`div`);
              s(t2, n4), e(n4, `grid gap-6`);
              let r2 = m(`rue:component:start`), i2 = m(`rue:component:end`);
              s(n4, r2), s(n4, i2), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e2 = c(), t3 = p(`div`);
                  s(e2, t3), s(t3, a(`Item 1`));
                  let n5 = p(`li`);
                  s(e2, n5);
                  let r3 = p(`div`);
                  s(n5, r3), s(r3, a(`Parent`));
                  let i3 = p(`div`);
                  s(n5, i3);
                  let o5 = p(`div`);
                  s(i3, o5), s(o5, a(`Submenu 1`));
                  let l2 = p(`div`);
                  return s(i3, l2), s(l2, a(`Submenu 2`)), {
                    vaporElement: e2
                  };
                })
              }), n4, r2, i2);
              let o4 = m(`rue:component:start`), u2 = m(`rue:component:end`);
              return s(n4, o4), s(n4, u2), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let e2 = c(), t3 = p(`div`);
                  s(e2, t3), s(t3, a(`Item 1`));
                  let n5 = p(`li`);
                  s(e2, n5);
                  let r3 = p(`div`);
                  s(n5, r3), s(r3, a(`Parent`));
                  let i3 = p(`div`);
                  s(n5, i3);
                  let o5 = p(`div`);
                  s(i3, o5), s(o5, a(`Submenu 1`));
                  let l2 = p(`div`);
                  return s(i3, l2), s(l2, a(`Submenu 2`)), {
                    vaporElement: e2
                  };
                })
              }), n4, o4, u2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.DropdownToggle>Parent</Menu.DropdownToggle>
    <Menu.Dropdown>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Dropdown>
  </li>
</Menu>
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.DropdownToggle visible>Parent</Menu.DropdownToggle>
    <Menu.Dropdown visible>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Dropdown>
  </li>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), en, an, on);
          });
          let sn = p(`div`);
          s(o3, sn), e(sn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let cn = p(`h2`);
          s(sn, cn), e(cn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(cn, a(`# \u6587\u4EF6\u6811`));
          let ln = m(`rue:component:start`), un = m(`rue:component:end`);
          s(sn, ln), s(sn, un), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: ae.value,
              onChange: (e2) => ae.value = e2,
              className: `mb-3`
            }), sn, ln, un);
          });
          let dn = m(`rue:slot:start`), fn = m(`rue:slot:end`);
          s(sn, dn), s(sn, fn), f(() => {
            l(g(ae.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                size: `xs`,
                className: `bg-base-200 rounded-box max-w-xs w-full`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), i(n5, `as`, `button`);
                  let r3 = p(`svg`);
                  s(n5, r3), i(r3, `xmlns`, `http://www.w3.org/2000/svg`), i(r3, `fill`, `none`), i(r3, `viewBox`, `0 0 24 24`), f(() => {
                    i(r3, `strokeWidth`, `1.5`);
                  }), i(r3, `stroke`, `currentColor`), e(r3, `w-4 h-4`);
                  let o4 = p(`path`);
                  s(r3, o4), i(o4, `strokeLinecap`, `round`), i(o4, `strokeLinejoin`, `round`), i(o4, `d`, `M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`), s(n5, a(`resume.pdf`));
                  let l2 = p(`li`);
                  s(t3, l2);
                  let u2 = p(`details`);
                  s(l2, u2);
                  let d2 = p(`summary`);
                  s(u2, d2);
                  let m2 = p(`svg`);
                  s(d2, m2), i(m2, `xmlns`, `http://www.w3.org/2000/svg`), i(m2, `fill`, `none`), i(m2, `viewBox`, `0 0 24 24`), f(() => {
                    i(m2, `strokeWidth`, `1.5`);
                  }), i(m2, `stroke`, `currentColor`), e(m2, `w-4 h-4`);
                  let h4 = p(`path`);
                  s(m2, h4), i(h4, `strokeLinecap`, `round`), i(h4, `strokeLinejoin`, `round`), i(h4, `d`, `M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`), s(d2, a(`My Files`));
                  let g2 = p(`ul`);
                  s(u2, g2);
                  let _2 = p(`div`);
                  s(g2, _2), i(_2, `as`, `button`);
                  let v2 = p(`svg`);
                  s(_2, v2), i(v2, `xmlns`, `http://www.w3.org/2000/svg`), i(v2, `fill`, `none`), i(v2, `viewBox`, `0 0 24 24`), f(() => {
                    i(v2, `strokeWidth`, `1.5`);
                  }), i(v2, `stroke`, `currentColor`), e(v2, `w-4 h-4`);
                  let y3 = p(`path`);
                  s(v2, y3), i(y3, `strokeLinecap`, `round`), i(y3, `strokeLinejoin`, `round`), i(y3, `d`, `M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`), s(_2, a(`Project-final.psd`));
                  let b3 = p(`div`);
                  s(g2, b3), i(b3, `as`, `button`);
                  let x3 = p(`svg`);
                  s(b3, x3), i(x3, `xmlns`, `http://www.w3.org/2000/svg`), i(x3, `fill`, `none`), i(x3, `viewBox`, `0 0 24 24`), f(() => {
                    i(x3, `strokeWidth`, `1.5`);
                  }), i(x3, `stroke`, `currentColor`), e(x3, `w-4 h-4`);
                  let S2 = p(`path`);
                  s(x3, S2), i(S2, `strokeLinecap`, `round`), i(S2, `strokeLinejoin`, `round`), i(S2, `d`, `M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`), s(b3, a(`Project-final-2.psd`));
                  let C2 = p(`li`);
                  s(g2, C2);
                  let ee2 = p(`details`);
                  s(C2, ee2);
                  let w3 = p(`summary`);
                  s(ee2, w3);
                  let T3 = p(`svg`);
                  s(w3, T3), i(T3, `xmlns`, `http://www.w3.org/2000/svg`), i(T3, `fill`, `none`), i(T3, `viewBox`, `0 0 24 24`), f(() => {
                    i(T3, `strokeWidth`, `1.5`);
                  }), i(T3, `stroke`, `currentColor`), e(T3, `w-4 h-4`);
                  let E3 = p(`path`);
                  s(T3, E3), i(E3, `strokeLinecap`, `round`), i(E3, `strokeLinejoin`, `round`), i(E3, `d`, `M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`), s(w3, a(`Images`));
                  let D3 = p(`ul`);
                  s(ee2, D3);
                  let O3 = p(`div`);
                  s(D3, O3), i(O3, `as`, `button`);
                  let k3 = p(`svg`);
                  s(O3, k3), i(k3, `xmlns`, `http://www.w3.org/2000/svg`), i(k3, `fill`, `none`), i(k3, `viewBox`, `0 0 24 24`), f(() => {
                    i(k3, `strokeWidth`, `1.5`);
                  }), i(k3, `stroke`, `currentColor`), e(k3, `w-4 h-4`);
                  let A3 = p(`path`);
                  s(k3, A3), i(A3, `strokeLinecap`, `round`), i(A3, `strokeLinejoin`, `round`), i(A3, `d`, `M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`), s(O3, a(`Screenshot1.png`));
                  let j2 = p(`div`);
                  s(D3, j2), i(j2, `as`, `button`);
                  let M3 = p(`svg`);
                  s(j2, M3), i(M3, `xmlns`, `http://www.w3.org/2000/svg`), i(M3, `fill`, `none`), i(M3, `viewBox`, `0 0 24 24`), f(() => {
                    i(M3, `strokeWidth`, `1.5`);
                  }), i(M3, `stroke`, `currentColor`), e(M3, `w-4 h-4`);
                  let N2 = p(`path`);
                  s(M3, N2), i(N2, `strokeLinecap`, `round`), i(N2, `strokeLinejoin`, `round`), i(N2, `d`, `M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`), s(j2, a(`Screenshot2.png`));
                  let te2 = p(`li`);
                  s(D3, te2);
                  let ne2 = p(`details`);
                  s(te2, ne2);
                  let re2 = p(`summary`);
                  s(ne2, re2);
                  let P2 = p(`svg`);
                  s(re2, P2), i(P2, `xmlns`, `http://www.w3.org/2000/svg`), i(P2, `fill`, `none`), i(P2, `viewBox`, `0 0 24 24`), f(() => {
                    i(P2, `strokeWidth`, `1.5`);
                  }), i(P2, `stroke`, `currentColor`), e(P2, `w-4 h-4`);
                  let ie2 = p(`path`);
                  s(P2, ie2), i(ie2, `strokeLinecap`, `round`), i(ie2, `strokeLinejoin`, `round`), i(ie2, `d`, `M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`), s(re2, a(`Others`));
                  let ae2 = p(`ul`);
                  s(ne2, ae2);
                  let oe2 = p(`div`);
                  s(ae2, oe2), i(oe2, `as`, `button`);
                  let F2 = p(`svg`);
                  s(oe2, F2), i(F2, `xmlns`, `http://www.w3.org/2000/svg`), i(F2, `fill`, `none`), i(F2, `viewBox`, `0 0 24 24`), f(() => {
                    i(F2, `strokeWidth`, `1.5`);
                  }), i(F2, `stroke`, `currentColor`), e(F2, `w-4 h-4`);
                  let se2 = p(`path`);
                  s(F2, se2), i(se2, `strokeLinecap`, `round`), i(se2, `strokeLinejoin`, `round`), i(se2, `d`, `M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`), s(oe2, a(`Screenshot3.png`));
                  let ce2 = p(`div`);
                  s(t3, ce2), i(ce2, `as`, `button`);
                  let I2 = p(`svg`);
                  s(ce2, I2), i(I2, `xmlns`, `http://www.w3.org/2000/svg`), i(I2, `fill`, `none`), i(I2, `viewBox`, `0 0 24 24`), f(() => {
                    i(I2, `strokeWidth`, `1.5`);
                  }), i(I2, `stroke`, `currentColor`), e(I2, `w-4 h-4`);
                  let le2 = p(`path`);
                  return s(I2, le2), i(le2, `strokeLinecap`, `round`), i(le2, `strokeLinejoin`, `round`), i(le2, `d`, `M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`), s(ce2, a(`reports-final-2.pdf`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
    resume.pdf
  </Menu.Item>
  <li>
    <details open>
      <summary>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        My Files
      </summary>
      <ul>
        <Menu.Item as="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Project-final.psd
        </Menu.Item>
        <Menu.Item as="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Project-final-2.psd
        </Menu.Item>
        <li>
          <details open>
            <summary>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
              Images
            </summary>
            <ul>
              <Menu.Item as="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Screenshot1.png
              </Menu.Item>
              <Menu.Item as="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Screenshot2.png
              </Menu.Item>
              <li>
                <details open>
                  <summary>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    Others
                  </summary>
                  <ul>
                    <Menu.Item as="button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      Screenshot3.png
                    </Menu.Item>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
    reports-final-2.pdf
  </Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), sn, dn, fn);
          });
          let pn = p(`div`);
          s(o3, pn), e(pn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let mn = p(`h2`);
          s(pn, mn), e(mn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(mn, a(`# \u6FC0\u6D3B\u9879`));
          let hn = m(`rue:component:start`), gn = m(`rue:component:end`);
          s(pn, hn), s(pn, gn), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: oe.value,
              onChange: (e2) => oe.value = e2,
              className: `mb-3`
            }), pn, hn, gn);
          });
          let _n = m(`rue:slot:start`), vn = m(`rue:slot:end`);
          s(pn, _n), s(pn, vn), f(() => {
            l(g(oe.value === `preview` ? d(() => {
              let t2 = c(), n4 = m(`rue:component:start`), r2 = m(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(v(j, {
                className: `bg-base-200 rounded-box w-56`,
                children: d(() => {
                  let t3 = c(), n5 = p(`div`);
                  s(t3, n5), s(n5, a(`Item 1`));
                  let r3 = p(`div`);
                  s(t3, r3), e(r3, `menu-active`), s(r3, a(`Item 2`));
                  let i2 = p(`div`);
                  return s(t3, i2), s(i2, a(`Item 3`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), pn, _n, vn);
          });
          let yn = p(`div`);
          s(o3, yn), e(yn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let bn = p(`h2`);
          s(yn, bn), e(bn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(bn, a(`# \u6C34\u5E73\u83DC\u5355`));
          let xn = m(`rue:component:start`), Sn = m(`rue:component:end`);
          s(yn, xn), s(yn, Sn), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: F.value,
              onChange: (e2) => F.value = e2,
              className: `mb-3`
            }), yn, xn, Sn);
          });
          let Cn = m(`rue:slot:start`), wn = m(`rue:slot:end`);
          s(yn, Cn), s(yn, wn), f(() => {
            l(g(F.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                direction: `horizontal`,
                className: `bg-base-200 rounded-box`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), s(t3, a(`Item 1`));
                  let n5 = p(`div`);
                  s(e3, n5), s(n5, a(`Item 2`));
                  let r2 = p(`div`);
                  return s(e3, r2), s(r2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), yn, Cn, wn);
          });
          let Tn = p(`div`);
          s(o3, Tn), e(Tn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let En = p(`h2`);
          s(Tn, En), e(En, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(En, a(`# \u6C34\u5E73\u5B50\u83DC\u5355`));
          let Dn = m(`rue:component:start`), On = m(`rue:component:end`);
          s(Tn, Dn), s(Tn, On), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: se.value,
              onChange: (e2) => se.value = e2,
              className: `mb-3`
            }), Tn, Dn, On);
          });
          let kn = m(`rue:slot:start`), An = m(`rue:slot:end`);
          s(Tn, kn), s(Tn, An), f(() => {
            l(g(se.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                direction: `horizontal`,
                className: `bg-base-200 rounded-box`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), s(t3, a(`Item 1`));
                  let n5 = p(`li`);
                  s(e3, n5);
                  let r2 = p(`div`);
                  s(n5, r2), s(r2, a(`Parent`));
                  let i2 = p(`div`);
                  s(n5, i2);
                  let o4 = p(`div`);
                  s(i2, o4), s(o4, a(`Submenu 1`));
                  let l2 = p(`div`);
                  s(i2, l2), s(l2, a(`Submenu 2`));
                  let u2 = p(`div`);
                  return s(e3, u2), s(u2, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Tn, kn, An);
          });
          let jn = p(`div`);
          s(o3, jn), e(jn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Mn = p(`h2`);
          s(jn, Mn), e(Mn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Mn, a(`# Mega \u83DC\u5355\uFF08\u54CD\u5E94\u5F0F\uFF09`));
          let Nn = m(`rue:component:start`), Pn = m(`rue:component:end`);
          s(jn, Nn), s(jn, Pn), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: ce.value,
              onChange: (e2) => ce.value = e2,
              className: `mb-3`
            }), jn, Nn, Pn);
          });
          let Fn = m(`rue:slot:start`), In = m(`rue:slot:end`);
          s(jn, Fn), s(jn, In), f(() => {
            l(g(ce.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,
                children: d(() => {
                  let e3 = c(), t3 = p(`li`);
                  s(e3, t3);
                  let n5 = p(`div`);
                  s(t3, n5), s(n5, a(`Solutions`));
                  let r2 = p(`div`);
                  s(t3, r2);
                  let i2 = p(`div`);
                  s(r2, i2), s(i2, a(`Design`));
                  let o4 = p(`div`);
                  s(r2, o4), s(o4, a(`Development`));
                  let l2 = p(`div`);
                  s(r2, l2), s(l2, a(`Hosting`));
                  let u2 = p(`div`);
                  s(r2, u2), s(u2, a(`Domain register`));
                  let d2 = p(`li`);
                  s(e3, d2);
                  let f2 = p(`div`);
                  s(d2, f2), s(f2, a(`Enterprise`));
                  let m2 = p(`div`);
                  s(d2, m2);
                  let h4 = p(`div`);
                  s(m2, h4), s(h4, a(`CRM software`));
                  let g2 = p(`div`);
                  s(m2, g2), s(g2, a(`Marketing management`));
                  let _2 = p(`div`);
                  s(m2, _2), s(_2, a(`Security`));
                  let v2 = p(`div`);
                  s(m2, v2), s(v2, a(`Consulting`));
                  let y3 = p(`li`);
                  s(e3, y3);
                  let b3 = p(`div`);
                  s(y3, b3), s(b3, a(`Products`));
                  let x3 = p(`div`);
                  s(y3, x3);
                  let S2 = p(`div`);
                  s(x3, S2), s(S2, a(`UI Kit`));
                  let C2 = p(`div`);
                  s(x3, C2), s(C2, a(`WordPress themes`));
                  let ee2 = p(`div`);
                  s(x3, ee2), s(ee2, a(`WordPress plugins`));
                  let w3 = p(`li`);
                  s(x3, w3);
                  let T3 = p(`div`);
                  s(w3, T3), s(T3, a(`Open source`));
                  let E3 = p(`div`);
                  s(w3, E3);
                  let D3 = p(`div`);
                  s(E3, D3), s(D3, a(`Auth management system`));
                  let O3 = p(`div`);
                  s(E3, O3), s(O3, a(`VScode theme`));
                  let k3 = p(`div`);
                  s(E3, k3), s(k3, a(`Color picker app`));
                  let A3 = p(`li`);
                  s(e3, A3);
                  let j2 = p(`div`);
                  s(A3, j2), s(j2, a(`Company`));
                  let M3 = p(`div`);
                  s(A3, M3);
                  let N2 = p(`div`);
                  s(M3, N2), s(N2, a(`About us`));
                  let te2 = p(`div`);
                  s(M3, te2), s(te2, a(`Contact us`));
                  let ne2 = p(`div`);
                  s(M3, ne2), s(ne2, a(`Privacy policy`));
                  let re2 = p(`div`);
                  return s(M3, re2), s(re2, a(`Press kit`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
  <li>
    <Menu.Item>Solutions</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Design</Menu.Item>
      <Menu.Item>Development</Menu.Item>
      <Menu.Item>Hosting</Menu.Item>
      <Menu.Item>Domain register</Menu.Item>
    </Menu.Submenu>
  </li>
  <li>
    <Menu.Item>Enterprise</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>CRM software</Menu.Item>
      <Menu.Item>Marketing management</Menu.Item>
      <Menu.Item>Security</Menu.Item>
      <Menu.Item>Consulting</Menu.Item>
    </Menu.Submenu>
  </li>
  <li>
    <Menu.Item>Products</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>UI Kit</Menu.Item>
      <Menu.Item>WordPress themes</Menu.Item>
      <Menu.Item>WordPress plugins</Menu.Item>
      <li>
        <Menu.Item>Open source</Menu.Item>
        <Menu.Submenu>
          <Menu.Item>Auth management system</Menu.Item>
          <Menu.Item>VScode theme</Menu.Item>
          <Menu.Item>Color picker app</Menu.Item>
        </Menu.Submenu>
      </li>
    </Menu.Submenu>
  </li>
  <li>
    <Menu.Item>Company</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>About us</Menu.Item>
      <Menu.Item>Contact us</Menu.Item>
      <Menu.Item>Privacy policy</Menu.Item>
      <Menu.Item>Press kit</Menu.Item>
    </Menu.Submenu>
  </li>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), jn, Fn, In);
          });
          let $ = p(`div`);
          s(o3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ln = p(`h2`);
          s($, Ln), e(Ln, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ln, a(`# \u53EF\u6298\u53E0\uFF08\u54CD\u5E94\u5F0F\uFF09`));
          let Rn = m(`rue:component:start`), zn = m(`rue:component:end`);
          s($, Rn), s($, zn), f(() => {
            l(v(S, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: I.value,
              onChange: (e2) => I.value = e2,
              className: `mb-3`
            }), $, Rn, zn);
          });
          let Bn = m(`rue:slot:start`), Vn = m(`rue:slot:end`);
          return s($, Bn), s($, Vn), f(() => {
            l(g(I.value === `preview` ? d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), l(v(j, {
                className: `lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,
                children: d(() => {
                  let e3 = c(), t3 = p(`div`);
                  s(e3, t3), i(t3, `as`, `button`), s(t3, a(`Item 1`));
                  let n5 = p(`li`);
                  s(e3, n5);
                  let r2 = p(`details`);
                  s(n5, r2);
                  let o4 = p(`summary`);
                  s(r2, o4), s(o4, a(`Parent item`));
                  let l2 = p(`ul`);
                  s(r2, l2);
                  let u2 = p(`div`);
                  s(l2, u2), i(u2, `as`, `button`), s(u2, a(`Submenu 1`));
                  let d2 = p(`div`);
                  s(l2, d2), i(d2, `as`, `button`), s(d2, a(`Submenu 2`));
                  let f2 = p(`li`);
                  s(l2, f2);
                  let m2 = p(`details`);
                  s(f2, m2);
                  let h4 = p(`summary`);
                  s(m2, h4), s(h4, a(`Parent`));
                  let g2 = p(`ul`);
                  s(m2, g2);
                  let _2 = p(`div`);
                  s(g2, _2), i(_2, `as`, `button`), s(_2, a(`item 1`));
                  let v2 = p(`div`);
                  s(g2, v2), i(v2, `as`, `button`), s(v2, a(`item 2`));
                  let y3 = p(`div`);
                  return s(e3, y3), i(y3, `as`, `button`), s(y3, a(`Item 3`)), {
                    vaporElement: e3
                  };
                })
              }), e2, t2, n4), {
                vaporElement: e2
              };
            }) : d(() => {
              let e2 = c(), t2 = m(`rue:component:start`), n4 = m(`rue:component:end`);
              return s(e2, t2), s(e2, n4), f(() => {
                l(v(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
  <Menu.Item as="button">Item 1</Menu.Item>
  <li>
    <details open>
      <summary>Parent item</summary>
      <ul>
        <Menu.Item as="button">Submenu 1</Menu.Item>
        <Menu.Item as="button">Submenu 2</Menu.Item>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <Menu.Item as="button">item 1</Menu.Item>
              <Menu.Item as="button">item 2</Menu.Item>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), $, Bn, Vn);
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
  M as default
};

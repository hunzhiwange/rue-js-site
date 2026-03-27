import { A as e, C as t, G as n, I as r, M as i, O as a, S as o, U as s, _ as c, b as l, f as u, g as d, m as f, q as p, t as m, x as h, y as g, z as _, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as v, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as y, s as b, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as x, t as S, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as C, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let te;
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
  let ee, w, T;
  ee = (e2, t2) => {
    if (t2) {
      if (Array.isArray(t2)) {
        let n2 = e2;
        for (let e3 of t2) {
          if (n2 == null) return;
          n2 = n2[e3];
        }
        return n2;
      }
      return e2 == null ? void 0 : e2[t2];
    }
  };
  w = (e2) => e2 === `right` ? `text-right` : e2 === `center` ? `text-center` : `text-left`;
  T = Object.assign(({ size: e2, zebra: t2, pinRows: n2, pinCols: r2, className: i2, children: a2, dataSource: o2, columns: s2, rowKey: c2 = `key`, showHeader: l2 = true, onRow: u2, onHeaderRow: d2, onChange: f2, rowSelection: p2, pagination: h2, expandable: g2, rowClassName: _2, summary: v2, emptyText: x2, title: S2, footer: C2, rowHoverable: T2 = false, rowHoverClass: te2, tableLayout: ne, scroll: E, height: D, onScroll: re }) => {
    let O = `table`;
    if (e2 && (O += ` table-${e2}`), t2 && (O += ` table-zebra`), n2 && (O += ` table-pin-rows`), r2 && (O += ` table-pin-cols`), i2 && (O += ` ${i2}`), !(a2 == null || Array.isArray(a2) && a2.length === 0)) return y(`table`, {
      className: O,
      children: a2
    });
    if (Array.isArray(s2) && Array.isArray(o2)) {
      let e3 = Math.random().toString(36).slice(2), t3 = d2 && d2(s2, 0) || {}, n3 = s2.filter((e4) => !e4.hidden), i3 = null, a3 = null;
      n3.forEach((e4, t4) => {
        e4.sortOrder == null ? i3 == null && e4.defaultSortOrder && (i3 = t4, a3 = e4.defaultSortOrder) : (i3 = t4, a3 = e4.sortOrder);
      });
      let k = o2.slice(), A = {}, j = (e4) => typeof e4.dataIndex == `string` ? e4.dataIndex : Array.isArray(e4.dataIndex) ? e4.dataIndex.join(`.`) : e4.key;
      if (n3.forEach((e4) => {
        let t4 = e4.filteredValue ?? e4.defaultFilteredValue;
        if (Array.isArray(t4) && t4.length > 0) {
          let n4 = j(e4);
          n4 && (A[n4] = t4), k = k.filter((n5) => {
            if (e4.onFilter) return e4.filterCombine === `and` ? t4.every((t5) => e4.onFilter(t5, n5)) : t4.some((t5) => e4.onFilter(t5, n5));
            let r3 = ee(n5, e4.dataIndex);
            return t4.includes(r3);
          });
        }
      }), i3 != null && a3 && n3[i3]) {
        let e4 = n3[i3], t4 = typeof e4.sorter == `function` ? e4.sorter : (t5, n4) => {
          let r3 = ee(t5, e4.dataIndex), i4 = ee(n4, e4.dataIndex);
          return r3 == null && i4 == null ? 0 : r3 == null ? -1 : i4 == null || r3 > i4 ? 1 : r3 < i4 ? -1 : 0;
        };
        k.sort((e5, n4) => a3 === `ascend` ? t4(e5, n4) : -t4(e5, n4));
      }
      let M = 1, N = k.length;
      h2 !== false && h2 != null && (M = h2.current || 1, N = h2.pageSize || 10);
      let ie = k.length, ae = Math.ceil(ie / N) || 1, oe = (M - 1) * N, se = oe + N, P = k.slice(oe, se), F = !!p2, I = !!g2 && typeof g2.expandedRowRender == `function`, ce = new Set((g2 == null ? void 0 : g2.expandedRowKeys) || ((g2 == null ? void 0 : g2.defaultExpandAllRows) ? k.map((e4) => typeof c2 == `function` ? c2(e4) : e4 == null ? void 0 : e4[c2]) : [])), le = (p2 == null ? void 0 : p2.selectedRowKeys) ?? (p2 == null ? void 0 : p2.defaultSelectedRowKeys) ?? [], L = (e4) => Array.isArray(le) && le.includes(e4), ue = (e4) => {
        let t4 = n3[e4];
        if (!t4.sorter) return;
        let r3 = `ascend`;
        i3 === e4 && a3 === `ascend` ? r3 = `descend` : i3 === e4 && a3 === `descend` && (r3 = null), f2 && f2({
          current: M,
          pageSize: N
        }, A, {
          column: t4,
          order: r3
        }, {
          action: `sort`,
          currentDataSource: P
        });
      }, R = (e4) => {
        h2 !== false && h2 != null && h2.onChange && h2.onChange(e4, N), f2 && f2({
          current: e4,
          pageSize: N
        }, A, {
          order: a3,
          column: i3 == null ? null : n3[i3]
        }, {
          action: `paginate`,
          currentDataSource: P
        });
      }, de = (e4, t4) => {
        let r3 = n3[e4];
        r3.sorter && f2 && f2({
          current: M,
          pageSize: N
        }, A, {
          column: r3,
          order: t4
        }, {
          action: `sort`,
          currentDataSource: P
        });
      }, fe = (e4, t4) => {
        let r3 = n3[e4], i4 = t4 || document.getElementById(`table-filter-menu-${e4}`);
        if (!r3 || !i4) return;
        let a4 = r3.filterResetToDefaultFilteredValue ? r3.defaultFilteredValue ?? [] : [];
        i4.querySelectorAll(`input[type="checkbox"], input[type="radio"]`).forEach((e5) => {
          let t5 = e5.getAttribute(`data-value`) || e5.value;
          e5.type === `checkbox` ? e5.checked = a4.includes(t5) : e5.checked = a4[0] === t5;
        });
      };
      ((e4) => {
        let t4 = globalThis, n4 = `__rue_table_outside_close_${e4}`;
        if (t4[n4]) return;
        let r3 = (t5) => {
          let n5 = t5.target, r4 = n5.closest(`[data-rue-table-id="${e4}"] .rue-table-filter-icon`), i4 = n5.closest(`[data-rue-table-id="${e4}"] .rue-table-filter-menu`);
          if (!r4 && !i4) {
            let t6 = document.querySelector(`table[data-rue-table-id="${e4}"]`);
            if (!t6) return;
            t6.querySelectorAll(`.rue-table-filter-menu`).forEach((e5) => e5.style.display = `none`);
          }
        };
        t4 && t4.addEventListener && t4.addEventListener(`pointerdown`, r3), t4[n4] = r3;
      })(e3);
      let z = (e4, t4, n4) => {
        let r3 = null;
        if (n4) {
          let e5 = n4.closest(`th, td`);
          r3 = e5 ? e5.querySelector(`.rue-table-filter-menu`) : null;
        }
        if (r3 || (r3 = document.getElementById(`table-filter-menu-${e4}`)), !r3) return;
        let i4 = r3.style.display === `none`;
        if (!(t4 ?? i4)) {
          r3.style.display = `none`;
          return;
        }
        r3.style.position = `fixed`, r3.style.visibility = `hidden`, r3.style.display = ``;
        let a4 = (n4 || r3).getBoundingClientRect(), o3 = r3.offsetWidth || 176, s3 = r3.offsetHeight || 160, c3 = window.innerWidth, l3 = window.innerHeight, u3 = a4.bottom + 8, d3 = a4.left;
        l3 - a4.bottom < s3 + 8 && (u3 = Math.max(8, a4.top - s3 - 8)), c3 - a4.left < o3 + 8 && (d3 = Math.max(8, a4.right - o3)), r3.style.visibility = ``, r3.style.top = `${u3}px`, r3.style.left = `${d3}px`, r3.style.maxHeight = `calc(100vh - 16px)`, r3.style.overflow = `auto`, r3.style.zIndex = `50`;
      }, pe = (e4, t4) => {
        let n4 = t4 || document.getElementById(`table-filter-menu-${e4}`);
        if (!n4) return [];
        let r3 = n4.querySelectorAll(`input[type="checkbox"], input[type="radio"]`), i4 = [];
        return r3.forEach((e5) => {
          let t5 = e5.getAttribute(`data-value`) || e5.value;
          e5.checked && i4.push(t5);
        }), i4;
      }, B = (e4, t4, r3) => {
        let o3 = n3[e4];
        if (!o3 || !Array.isArray(o3.filters) || o3.filters.length === 0) return;
        let s3 = j(o3), c3 = Array.isArray(t4) ? t4 : pe(e4, r3), l3 = {
          ...A
        };
        s3 && (l3[s3] = c3), f2 && f2({
          current: M,
          pageSize: N
        }, l3, {
          order: a3,
          column: i3 == null ? null : n3[i3]
        }, {
          action: `filter`,
          currentDataSource: P
        }), z(e4, false, r3 || void 0);
      }, me = (e4, t4, n4) => {
        var _a;
        let r3 = n4 == null ? void 0 : n4.currentTarget, i4 = (_a = r3 ? r3.closest(`tr`) : null) == null ? void 0 : _a.nextElementSibling;
        if (i4) {
          let e5 = i4.style.display === `none`;
          i4.style.display = e5 ? `` : `none`, r3 && (r3.textContent = e5 ? `-` : `+`);
        }
        let a4 = ce.has(e4);
        (g2 == null ? void 0 : g2.onExpand) && g2.onExpand(!a4, t4);
      }, he = (e4) => {
        if (!p2 || p2.type === `radio`) return;
        let t4 = e4 ? P.map((e5) => typeof c2 == `function` ? c2(e5) : e5 == null ? void 0 : e5[c2]) : [];
        if (p2.onChange) {
          let e5 = k.filter((e6) => t4.includes(typeof c2 == `function` ? c2(e6) : e6 == null ? void 0 : e6[c2]));
          p2.onChange(t4, e5, {
            type: `checkbox`
          });
        }
        if (p2.onSelectAll) {
          let n4 = k.filter((e5) => t4.includes(typeof c2 == `function` ? c2(e5) : e5 == null ? void 0 : e5[c2]));
          p2.onSelectAll(e4, n4);
        }
      }, V = P.map((e4) => typeof c2 == `function` ? c2(e4) : e4 == null ? void 0 : e4[c2]), H = V.length > 0 && V.every((e4) => L(e4)), ge = V.some((e4) => L(e4)) && !H, U = {}, _e = n3.some((e4) => !!e4.ellipsis);
      ne ? U.tableLayout = ne : _e && (U.tableLayout = `fixed`);
      let ve = !!((E == null ? void 0 : E.x) || (E == null ? void 0 : E.y) || D !== void 0 || re), ye = {}, be = `${(E == null ? void 0 : E.x) ? `overflow-x-auto` : ``} ${(E == null ? void 0 : E.y) || D !== void 0 ? `overflow-y-auto` : ``}`.trim() || void 0;
      return (E == null ? void 0 : E.y) !== void 0 && (ye.maxHeight = typeof E.y == `number` ? `${E.y}px` : E.y), D !== void 0 && (ye.height = typeof D == `number` ? `${D}px` : D), ve ? b(`div`, {
        className: be,
        style: ye,
        onScroll: re,
        children: [
          typeof S2 == `function` ? y(`div`, {
            className: `p-2`,
            children: S2(P)
          }) : null,
          b(`table`, {
            className: O,
            style: U,
            "data-rue-table-id": e3,
            children: [
              l2 ? y(`thead`, {
                ...t3,
                children: b(`tr`, {
                  children: [
                    I ? y(`th`, {
                      className: w(`center`)
                    }) : null,
                    F ? y(`th`, {
                      style: (p2 == null ? void 0 : p2.columnWidth) ? {
                        width: p2.columnWidth
                      } : void 0,
                      className: w(`center`),
                      children: (p2 == null ? void 0 : p2.type) === `radio` ? null : y(`label`, {
                        children: y(`input`, {
                          type: `checkbox`,
                          className: `checkbox`,
                          checked: H,
                          "aria-checked": ge ? `mixed` : H ? `true` : `false`,
                          disabled: !!(p2 == null ? void 0 : p2.disabled),
                          onChange: (e4) => he(e4.target.checked)
                        })
                      })
                    }) : null,
                    n3.map((e4, t4) => {
                      let n4 = e4.onHeaderCell && e4.onHeaderCell(e4, t4) || {}, i4 = e4.key ?? e4.dataIndex ?? t4, a4 = `${w(e4.align)}${e4.className ? ` ${e4.className}` : ``}${n4.className ? ` ${n4.className}` : ``}`.trim() || void 0, o3 = e4.width ? {
                        width: e4.width
                      } : n4.style;
                      return r2 && !e4.fixedCol ? y(`td`, {
                        className: a4,
                        style: o3,
                        onClick: () => ue(t4),
                        ...n4,
                        children: e4.title
                      }, i4) : y(`th`, {
                        className: a4,
                        style: o3,
                        onClick: () => ue(t4),
                        ...n4,
                        children: e4.title
                      }, i4);
                    })
                  ]
                })
              }) : null,
              b(`tbody`, {
                children: [
                  P.map((e4, t4) => {
                    let i4 = typeof c2 == `function` ? c2(e4) : e4 == null ? void 0 : e4[c2], a4 = u2 && u2(e4, t4) || {}, o3 = typeof _2 == `function` ? _2(e4, t4) : ``, s3 = T2 ? te2 || `hover:bg-base-200` : ``, l3 = `${o3}${s3 ? ` ${s3}` : ``}`.trim() || void 0, d3 = (n3.length || 0) + (F ? 1 : 0) + (I ? 1 : 0);
                    return b(m, {
                      children: [
                        b(`tr`, {
                          ...a4,
                          className: l3 || a4.className,
                          children: [
                            I ? y(`td`, {
                              className: w(`center`),
                              children: y(`button`, {
                                className: `btn btn-ghost btn-xs`,
                                onClick: (t5) => me(i4, e4, t5),
                                children: ce.has(i4) ? `-` : `+`
                              })
                            }) : null,
                            F ? y(`td`, {
                              className: w(`center`),
                              style: (p2 == null ? void 0 : p2.columnWidth) ? {
                                width: p2.columnWidth
                              } : void 0,
                              children: y(`label`, {
                                children: (p2 == null ? void 0 : p2.type) === `radio` ? y(`input`, {
                                  type: `radio`,
                                  className: `radio`,
                                  checked: !!L(i4),
                                  onChange: () => {
                                    let e5 = [
                                      i4
                                    ];
                                    if (p2 == null ? void 0 : p2.onChange) {
                                      let t5 = k.filter((t6) => e5.includes(typeof c2 == `function` ? c2(t6) : t6 == null ? void 0 : t6[c2]));
                                      p2.onChange(e5, t5, {
                                        type: `radio`
                                      });
                                    }
                                  },
                                  ...(p2 == null ? void 0 : p2.getCheckboxProps) ? p2.getCheckboxProps(e4) : {}
                                }) : y(`input`, {
                                  type: `checkbox`,
                                  className: `checkbox`,
                                  checked: !!L(i4),
                                  onChange: (e5) => {
                                    let t5 = e5.target.checked, n4 = (p2 == null ? void 0 : p2.selectedRowKeys) ?? (p2 == null ? void 0 : p2.defaultSelectedRowKeys) ?? [], r3 = new Set(n4);
                                    t5 ? r3.add(i4) : r3.delete(i4);
                                    let a5 = Array.from(r3);
                                    if (p2 == null ? void 0 : p2.onChange) {
                                      let e6 = k.filter((e7) => a5.includes(typeof c2 == `function` ? c2(e7) : e7 == null ? void 0 : e7[c2]));
                                      p2.onChange(a5, e6, {
                                        type: `checkbox`
                                      });
                                    }
                                  },
                                  ...(p2 == null ? void 0 : p2.getCheckboxProps) ? p2.getCheckboxProps(e4) : {}
                                })
                              })
                            }) : null,
                            n3.map((n4, i5) => {
                              let a5 = ee(e4, n4.dataIndex), o4 = n4.render ? n4.render(a5, e4, t4) : a5, s4 = `${w(n4.align)}${n4.className ? ` ${n4.className}` : ``}${n4.ellipsis ? ` truncate` : ``}`, c3 = n4.onCell && n4.onCell(e4, t4) || {}, l4 = n4.key ?? `${t4}-${i5}`, u3 = `${s4}${c3.className ? ` ${c3.className}` : ``}`.trim() || void 0, d4 = n4.width ? {
                                width: n4.width
                              } : c3.style;
                              return r2 && n4.fixedCol ? y(`th`, {
                                className: u3,
                                style: d4,
                                ...c3,
                                children: o4
                              }, l4) : y(`td`, {
                                className: u3,
                                style: d4,
                                ...c3,
                                children: o4
                              }, l4);
                            })
                          ]
                        }, i4 ?? t4),
                        I && (g2 == null ? void 0 : g2.expandedRowRender) ? y(`tr`, {
                          style: {
                            display: ce.has(i4) ? `` : `none`
                          },
                          children: y(`td`, {
                            colSpan: d3,
                            children: g2.expandedRowRender(e4, t4)
                          })
                        }, `expanded-${i4}`) : null
                      ]
                    });
                  }),
                  P.length === 0 ? y(`tr`, {
                    children: y(`td`, {
                      colSpan: (n3.length || 0) + (F ? 1 : 0) + (I ? 1 : 0),
                      className: w(`center`),
                      children: x2 === void 0 ? `No Data` : x2
                    })
                  }) : null
                ]
              }),
              (() => {
                let e4 = (n3.length || 0) + (F ? 1 : 0) + (I ? 1 : 0), t4 = {
                  total: ie,
                  page: M,
                  pageSize: N
                }, r3 = P.slice();
                r3.total = ie;
                let i4 = typeof v2 == `function` ? v2(r3, t4) : null, a4 = h2 !== false && h2 != null && !(h2.hideOnSinglePage && ae <= 1);
                return !i4 && !a4 ? null : b(`tfoot`, {
                  children: [
                    i4 ? y(`tr`, {
                      children: y(`td`, {
                        colSpan: e4,
                        children: i4
                      })
                    }) : null,
                    a4 ? y(`tr`, {
                      children: y(`td`, {
                        colSpan: e4,
                        children: b(`div`, {
                          className: `flex items-center justify-end gap-2 p-2`,
                          children: [
                            y(`button`, {
                              className: `btn btn-ghost btn-xs`,
                              disabled: M <= 1,
                              onClick: () => R(M - 1),
                              children: `Prev`
                            }),
                            Array.from({
                              length: ae
                            }).map((e5, t5) => y(`button`, {
                              className: `btn btn-ghost btn-xs${M === t5 + 1 ? ` btn-active` : ``}`,
                              onClick: () => R(t5 + 1),
                              children: t5 + 1
                            }, t5)),
                            y(`button`, {
                              className: `btn btn-ghost btn-xs`,
                              disabled: M >= ae,
                              onClick: () => R(M + 1),
                              children: `Next`
                            })
                          ]
                        })
                      })
                    }) : null
                  ]
                });
              })()
            ]
          }),
          typeof C2 == `function` ? y(`div`, {
            className: `p-2`,
            children: C2(P)
          }) : null
        ]
      }) : b(`table`, {
        className: O,
        style: U,
        "data-rue-table-id": e3,
        children: [
          l2 ? y(`thead`, {
            ...t3,
            children: b(`tr`, {
              children: [
                I ? y(`th`, {
                  className: w(`center`)
                }) : null,
                F ? y(`th`, {
                  style: (p2 == null ? void 0 : p2.columnWidth) ? {
                    width: p2.columnWidth
                  } : void 0,
                  className: w(`center`),
                  children: (p2 == null ? void 0 : p2.type) === `radio` ? null : y(`label`, {
                    children: y(`input`, {
                      type: `checkbox`,
                      className: `checkbox`,
                      checked: H,
                      "aria-checked": ge ? `mixed` : H ? `true` : `false`,
                      disabled: !!(p2 == null ? void 0 : p2.disabled),
                      onChange: (e4) => he(e4.target.checked)
                    })
                  })
                }) : null,
                n3.map((e4, t4) => {
                  var _a, _b;
                  let n4 = e4.onHeaderCell && e4.onHeaderCell(e4, t4) || {}, o3 = e4.key ?? e4.dataIndex ?? t4, s3 = `${w(e4.align)}${e4.className ? ` ${e4.className}` : ``}${n4.className ? ` ${n4.className}` : ``}`.trim() || void 0, c3 = e4.width ? {
                    width: e4.width
                  } : n4.style;
                  return r2 && !e4.fixedCol ? b(`td`, {
                    className: s3,
                    style: c3,
                    onClick: () => ue(t4),
                    ...n4,
                    children: [
                      b(`div`, {
                        className: `flex items-center relative`,
                        children: [
                          y(`span`, {
                            children: e4.title
                          }),
                          e4.sorter ? b(`span`, {
                            className: `ml-1 inline-flex flex-col leading-none`,
                            children: [
                              y(`span`, {
                                className: `${i3 === t4 && a3 === `ascend` ? `text-base-content` : `opacity-40`} cursor-pointer`,
                                onClick: (e5) => {
                                  e5.stopPropagation(), de(t4, `ascend`);
                                },
                                children: `\u25B2`
                              }),
                              y(`span`, {
                                className: `${i3 === t4 && a3 === `descend` ? `text-base-content` : `opacity-40`} cursor-pointer -mt-0.5`,
                                onClick: (e5) => {
                                  e5.stopPropagation(), de(t4, `descend`);
                                },
                                children: `\u25BC`
                              })
                            ]
                          }) : null,
                          Array.isArray(e4.filters) && e4.filters.length > 0 ? y(`span`, {
                            className: `rue-table-filter-icon ml-2 cursor-pointer ${((_a = A[j(e4)]) == null ? void 0 : _a.length) ? `text-base-content` : `opacity-40`}`,
                            onClick: (e5) => {
                              e5.stopPropagation(), z(t4, void 0, e5.currentTarget);
                            },
                            children: `\u2630`
                          }) : null
                        ]
                      }),
                      Array.isArray(e4.filters) && e4.filters.length > 0 ? (() => {
                        let n5 = `header-filter-${t4}-${Math.random().toString(36).slice(2)}`;
                        return b(`div`, {
                          id: `table-filter-menu-${t4}`,
                          className: `rue-table-filter-menu fixed z-50 w-44 rounded-box border border-base-content/10 bg-base-100 p-2 shadow`,
                          style: {
                            display: `none`
                          },
                          children: [
                            y(`div`, {
                              className: `space-y-1`,
                              children: e4.filters.map((r3) => b(`label`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  y(`input`, {
                                    type: e4.filterMultiple === false ? `radio` : `checkbox`,
                                    name: n5,
                                    className: e4.filterMultiple === false ? `radio radio-xs` : `checkbox checkbox-xs`,
                                    defaultChecked: (A[j(e4)] ?? e4.defaultFilteredValue ?? []).includes(r3.value),
                                    "data-value": String(r3.value),
                                    onChange: (n6) => {
                                      e4.filterOnClose || B(t4, void 0, n6.currentTarget.closest(`.rue-table-filter-menu`) || void 0);
                                    }
                                  }),
                                  y(`span`, {
                                    className: `text-sm`,
                                    children: r3.text
                                  })
                                ]
                              }, r3.value ?? String(r3.text)))
                            }),
                            e4.filterOnClose ? b(`div`, {
                              className: `mt-2 flex justify-end gap-2`,
                              children: [
                                y(`button`, {
                                  className: `btn btn-ghost btn-xs`,
                                  onClick: (e5) => {
                                    fe(t4, e5.currentTarget.closest(`.rue-table-filter-menu`) || void 0);
                                  },
                                  children: `\u91CD\u7F6E`
                                }),
                                y(`button`, {
                                  className: `btn btn-primary btn-xs`,
                                  onClick: (e5) => {
                                    B(t4, void 0, e5.currentTarget.closest(`.rue-table-filter-menu`) || void 0);
                                  },
                                  children: `\u5E94\u7528`
                                })
                              ]
                            }) : null
                          ]
                        });
                      })() : null
                    ]
                  }, o3) : y(`th`, {
                    className: s3,
                    style: c3,
                    onClick: () => ue(t4),
                    ...n4,
                    children: b(`div`, {
                      className: `flex items-center relative`,
                      children: [
                        y(`span`, {
                          children: e4.title
                        }),
                        e4.sorter ? b(`span`, {
                          className: `ml-1 inline-flex flex-col leading-none`,
                          children: [
                            y(`span`, {
                              className: `${i3 === t4 && a3 === `ascend` ? `text-base-content` : `opacity-40`} cursor-pointer`,
                              onClick: (e5) => {
                                e5.stopPropagation(), de(t4, `ascend`);
                              },
                              children: `\u25B2`
                            }),
                            y(`span`, {
                              className: `${i3 === t4 && a3 === `descend` ? `text-base-content` : `opacity-40`} cursor-pointer -mt-0.5`,
                              onClick: (e5) => {
                                e5.stopPropagation(), de(t4, `descend`);
                              },
                              children: `\u25BC`
                            })
                          ]
                        }) : null,
                        Array.isArray(e4.filters) && e4.filters.length > 0 ? y(`span`, {
                          className: `rue-table-filter-icon ml-2 cursor-pointer ${((_b = A[j(e4)]) == null ? void 0 : _b.length) ? `text-base-content` : `opacity-40`}`,
                          onClick: (e5) => {
                            e5.stopPropagation(), z(t4, void 0, e5.currentTarget);
                          },
                          children: `\u2630`
                        }) : null,
                        Array.isArray(e4.filters) && e4.filters.length > 0 ? (() => {
                          let n5 = `header-filter-${t4}-${Math.random().toString(36).slice(2)}`;
                          return b(`div`, {
                            id: `table-filter-menu-${t4}`,
                            className: `rue-table-filter-menu fixed z-50 w-44 rounded-box border border-base-content/10 bg-base-100 p-2 shadow`,
                            style: {
                              display: `none`
                            },
                            children: [
                              y(`div`, {
                                className: `space-y-1`,
                                children: e4.filters.map((r3) => b(`label`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    y(`input`, {
                                      type: e4.filterMultiple === false ? `radio` : `checkbox`,
                                      name: n5,
                                      className: e4.filterMultiple === false ? `radio radio-xs` : `checkbox checkbox-xs`,
                                      defaultChecked: (A[j(e4)] ?? e4.defaultFilteredValue ?? []).includes(r3.value),
                                      "data-value": String(r3.value),
                                      onChange: (n6) => {
                                        e4.filterOnClose || B(t4, void 0, n6.currentTarget.closest(`.rue-table-filter-menu`) || void 0);
                                      }
                                    }),
                                    y(`span`, {
                                      className: `text-sm`,
                                      children: r3.text
                                    })
                                  ]
                                }, r3.value ?? String(r3.text)))
                              }),
                              e4.filterOnClose ? b(`div`, {
                                className: `mt-2 flex justify-end gap-2`,
                                children: [
                                  y(`button`, {
                                    className: `btn btn-ghost btn-xs`,
                                    onClick: (e5) => {
                                      fe(t4, e5.currentTarget.closest(`.rue-table-filter-menu`) || void 0);
                                    },
                                    children: `\u91CD\u7F6E`
                                  }),
                                  y(`button`, {
                                    className: `btn btn-primary btn-xs`,
                                    onClick: (e5) => {
                                      B(t4, void 0, e5.currentTarget.closest(`.rue-table-filter-menu`) || void 0);
                                    },
                                    children: `\u5E94\u7528`
                                  })
                                ]
                              }) : null
                            ]
                          });
                        })() : null
                      ]
                    })
                  }, o3);
                })
              ]
            })
          }) : null,
          b(`tbody`, {
            children: [
              P.map((e4, t4) => {
                let i4 = typeof c2 == `function` ? c2(e4) : e4 == null ? void 0 : e4[c2], a4 = u2 && u2(e4, t4) || {}, o3 = typeof _2 == `function` ? _2(e4, t4) : ``, s3 = T2 ? te2 || `hover:bg-base-200` : ``, l3 = `${o3}${s3 ? ` ${s3}` : ``}`.trim() || void 0;
                return b(m, {
                  children: [
                    b(`tr`, {
                      ...a4,
                      className: l3 || a4.className,
                      children: [
                        I ? y(`td`, {
                          className: w(`center`),
                          children: y(`button`, {
                            className: `btn btn-ghost btn-xs`,
                            onClick: (t5) => me(i4, e4, t5),
                            children: ce.has(i4) ? `-` : `+`
                          })
                        }) : null,
                        F ? y(`td`, {
                          className: w(`center`),
                          style: (p2 == null ? void 0 : p2.columnWidth) ? {
                            width: p2.columnWidth
                          } : void 0,
                          children: y(`label`, {
                            children: (() => {
                              let t5 = (p2 == null ? void 0 : p2.getCheckboxProps) ? {
                                ...p2.getCheckboxProps(e4)
                              } : {};
                              return (p2 == null ? void 0 : p2.disabled) && (t5.disabled = true), (p2 == null ? void 0 : p2.type) === `radio` ? y(`input`, {
                                type: `radio`,
                                className: `radio`,
                                checked: !!L(i4),
                                onChange: () => {
                                  let e5 = [
                                    i4
                                  ];
                                  if (p2 == null ? void 0 : p2.onChange) {
                                    let t6 = k.filter((t7) => e5.includes(typeof c2 == `function` ? c2(t7) : t7 == null ? void 0 : t7[c2]));
                                    p2.onChange(e5, t6, {
                                      type: `radio`
                                    });
                                  }
                                },
                                ...t5
                              }) : y(`input`, {
                                type: `checkbox`,
                                className: `checkbox`,
                                checked: !!L(i4),
                                onChange: (e5) => {
                                  let t6 = e5.target.checked, n4 = (p2 == null ? void 0 : p2.selectedRowKeys) ?? (p2 == null ? void 0 : p2.defaultSelectedRowKeys) ?? [], r3 = new Set(n4);
                                  t6 ? r3.add(i4) : r3.delete(i4);
                                  let a5 = Array.from(r3);
                                  if (p2 == null ? void 0 : p2.onChange) {
                                    let e6 = k.filter((e7) => a5.includes(typeof c2 == `function` ? c2(e7) : e7 == null ? void 0 : e7[c2]));
                                    p2.onChange(a5, e6, {
                                      type: `checkbox`
                                    });
                                  }
                                },
                                ...t5
                              });
                            })()
                          })
                        }) : null,
                        n3.map((n4, i5) => {
                          let a5 = ee(e4, n4.dataIndex), o4 = n4.render ? n4.render(a5, e4, t4) : a5, s4 = `${w(n4.align)}${n4.className ? ` ${n4.className}` : ``}${n4.ellipsis ? ` truncate` : ``}`, c3 = n4.onCell && n4.onCell(e4, t4) || {}, l4 = n4.key ?? `${t4}-${i5}`, u3 = `${s4}${c3.className ? ` ${c3.className}` : ``}`.trim() || void 0, d3 = n4.width ? {
                            width: n4.width
                          } : c3.style;
                          return r2 && n4.fixedCol ? y(`th`, {
                            className: u3,
                            style: d3,
                            ...c3,
                            children: o4
                          }, l4) : y(`td`, {
                            className: u3,
                            style: d3,
                            ...c3,
                            children: o4
                          }, l4);
                        })
                      ]
                    }, i4 ?? t4),
                    I && (g2 == null ? void 0 : g2.expandedRowRender) ? y(`tr`, {
                      style: {
                        display: ce.has(i4) ? `` : `none`
                      },
                      children: y(`td`, {
                        colSpan: (n3.length || 0) + (F ? 1 : 0) + (I ? 1 : 0),
                        children: g2.expandedRowRender(e4, t4)
                      })
                    }, `expanded-${i4}`) : null
                  ]
                });
              }),
              P.length === 0 ? y(`tr`, {
                children: y(`td`, {
                  colSpan: (n3.length || 0) + (F ? 1 : 0) + (I ? 1 : 0),
                  className: w(`center`),
                  children: x2 === void 0 ? `No Data` : x2
                })
              }) : null
            ]
          }),
          (() => {
            let e4 = (n3.length || 0) + (F ? 1 : 0) + (I ? 1 : 0), t4 = {
              total: ie,
              page: M,
              pageSize: N
            }, r3 = P.slice();
            r3.total = ie;
            let i4 = typeof v2 == `function` ? v2(r3, t4) : null, a4 = h2 !== false && h2 != null && !(h2.hideOnSinglePage && ae <= 1);
            return !i4 && !a4 ? null : b(`tfoot`, {
              children: [
                i4 ? y(`tr`, {
                  children: y(`td`, {
                    colSpan: e4,
                    children: i4
                  })
                }) : null,
                a4 ? y(`tr`, {
                  children: y(`td`, {
                    colSpan: e4,
                    children: b(`div`, {
                      className: `flex items-center justify-end gap-2 p-2`,
                      children: [
                        y(`button`, {
                          className: `btn btn-ghost btn-xs`,
                          disabled: M <= 1,
                          onClick: () => R(M - 1),
                          children: `Prev`
                        }),
                        Array.from({
                          length: ae
                        }).map((e5, t5) => y(`button`, {
                          className: `btn btn-ghost btn-xs${M === t5 + 1 ? ` btn-active` : ``}`,
                          onClick: () => R(t5 + 1),
                          children: t5 + 1
                        }, t5)),
                        y(`button`, {
                          className: `btn btn-ghost btn-xs`,
                          disabled: M >= ae,
                          onClick: () => R(M + 1),
                          children: `Next`
                        })
                      ]
                    })
                  })
                }) : null
              ]
            });
          })()
        ]
      });
    }
    return y(`table`, {
      className: O
    });
  }, {
    Head: ({ className: e2, children: t2 }) => y(`thead`, {
      className: e2 || void 0,
      children: t2
    }),
    Body: ({ className: e2, children: t2 }) => y(`tbody`, {
      className: e2 || void 0,
      children: t2
    }),
    Foot: ({ className: e2, children: t2 }) => y(`tfoot`, {
      className: e2 || void 0,
      children: t2
    }),
    TR: ({ className: e2, children: t2 }) => y(`tr`, {
      className: e2 || void 0,
      children: t2
    }),
    TH: ({ className: e2, children: t2 }) => {
      let n2 = ``;
      return e2 && (n2 += ` ${e2}`), y(`th`, {
        className: n2.trim() || void 0,
        children: t2
      });
    },
    TD: ({ className: e2, children: t2 }) => {
      let n2 = ``;
      return e2 && (n2 += ` ${e2}`), y(`td`, {
        className: n2.trim() || void 0,
        children: t2
      });
    }
  });
  te = () => {
    let { tabBasic: m2, tabBorderBg: ee2, tabActiveRow: w2, tabHoverRow: te2, tabSelection: ne, tabSelectionRadio: E, tabSort: D, tabExpand: re, tabPaginate: O, tabZebra: k, tabXs: A, tabVisual: j, tabPinnedRowsFull: M, tabPinnedRowsCols: N, tabFilters: ie, tabHidden: ae, tabSummary: oe, tabEmpty: se, tabRowEvents: P, tabCellAttrs: F, tabScroll: I, tabTitleFooter: ce, tabEllipsis: le, tabSelectionPart: L, tabSelectionRadioPart: ue, tabFilterFn: R, tabFilterInline: de, selectedVisual: fe, selectedSelection: z, paginateCurrent: pe, selectedRadio: B, selectedSelectionDisabled: me, selectedRadioDisabled: he, selectedSelectionPart: V, selectedRadioPart: H, sortOrderName: ge, filteredAge: U, filteredAgeInline: _e, filterMultipleEnabled: ve, filterOnCloseEnabled: ye, dataVisual: be } = n(`useSetup:0:0`, () => s(() => ({
      tabBasic: n(`ref:1:0`, () => _(`preview`)),
      tabBorderBg: n(`ref:1:1`, () => _(`preview`)),
      tabActiveRow: n(`ref:1:2`, () => _(`preview`)),
      tabHoverRow: n(`ref:1:3`, () => _(`preview`)),
      tabSelection: n(`ref:1:4`, () => _(`preview`)),
      tabSelectionRadio: n(`ref:1:5`, () => _(`preview`)),
      tabSort: n(`ref:1:6`, () => _(`preview`)),
      tabExpand: n(`ref:1:7`, () => _(`preview`)),
      tabPaginate: n(`ref:1:8`, () => _(`preview`)),
      tabZebra: n(`ref:1:9`, () => _(`preview`)),
      tabXs: n(`ref:1:10`, () => _(`preview`)),
      tabVisual: n(`ref:1:11`, () => _(`preview`)),
      tabPinnedRowsFull: n(`ref:1:12`, () => _(`preview`)),
      tabPinnedRowsCols: n(`ref:1:13`, () => _(`preview`)),
      tabFilters: n(`ref:1:14`, () => _(`preview`)),
      tabHidden: n(`ref:1:15`, () => _(`preview`)),
      tabSummary: n(`ref:1:16`, () => _(`preview`)),
      tabEmpty: n(`ref:1:17`, () => _(`preview`)),
      tabRowEvents: n(`ref:1:18`, () => _(`preview`)),
      tabCellAttrs: n(`ref:1:19`, () => _(`preview`)),
      tabScroll: n(`ref:1:20`, () => _(`preview`)),
      tabTitleFooter: n(`ref:1:21`, () => _(`preview`)),
      tabEllipsis: n(`ref:1:22`, () => _(`preview`)),
      tabSelectionPart: n(`ref:1:23`, () => _(`preview`)),
      tabSelectionRadioPart: n(`ref:1:24`, () => _(`preview`)),
      tabFilterFn: n(`ref:1:25`, () => _(`preview`)),
      tabFilterInline: n(`ref:1:26`, () => _(`preview`)),
      selectedVisual: n(`ref:1:27`, () => _([])),
      selectedSelection: n(`ref:1:28`, () => _([
        `2`
      ])),
      paginateCurrent: n(`ref:1:29`, () => _(1)),
      selectedRadio: n(`ref:1:30`, () => _(`2`)),
      selectedSelectionDisabled: n(`ref:1:31`, () => _([
        `2`
      ])),
      selectedRadioDisabled: n(`ref:1:32`, () => _(`2`)),
      selectedSelectionPart: n(`ref:1:33`, () => _([
        `1`
      ])),
      selectedRadioPart: n(`ref:1:34`, () => _(null)),
      sortOrderName: n(`ref:1:35`, () => _(`ascend`)),
      filteredAge: n(`ref:1:36`, () => _([
        `gte40`
      ])),
      filteredAgeInline: n(`ref:1:37`, () => _(null)),
      filterMultipleEnabled: n(`ref:1:38`, () => _(true)),
      filterOnCloseEnabled: n(`ref:1:39`, () => _(true)),
      dataVisual: [
        {
          key: `2`,
          id: 2,
          name: `Hart Hagerty`,
          country: `United States`,
          company: `Zemlak, Daniel and Leannon`,
          job: `Desktop Support Technician`,
          color: `Purple`
        },
        {
          key: `3`,
          id: 3,
          name: `Brice Swyre`,
          country: `China`,
          company: `Carroll Group`,
          job: `Tax Accountant`,
          color: `Red`
        },
        {
          key: `4`,
          id: 4,
          name: `Marjy Ferencz`,
          country: `Russia`,
          company: `Rowe-Schoen`,
          job: `Office Assistant I`,
          color: `Crimson`
        },
        {
          key: `5`,
          id: 5,
          name: `Yancy Tear`,
          country: `Brazil`,
          company: `Wyman-Ledner`,
          job: `Community Outreach Specialist`,
          color: `Indigo`
        }
      ]
    })));
    return f(() => {
      let n2 = l(), s2 = g(`rue:component:start`), _2 = g(`rue:component:end`);
      return c(n2, s2), c(n2, _2), u(y(x, {
        children: f(() => {
          let n3 = l(), s3 = h(`div`);
          c(n3, s3), e(s3, `max-w-none prose prose-sm md:prose-base`);
          let _3 = h(`h1`);
          c(s3, _3), c(_3, o(`Table \u8868\u683C`));
          let x2 = h(`p`);
          c(s3, x2), e(x2, `text-sm mt-3 mb-3`), c(x2, o(`\u8868\u683C\u7528\u4E8E\u4EE5\u8868\u683C\u5F62\u5F0F\u5C55\u793A\u5217\u8868\u6570\u636E\u3002`));
          let xe = h(`div`);
          c(s3, xe), e(xe, `text-sm`);
          let Se = h(`a`);
          c(xe, Se), a(Se, `href`, `https://daisyui.com/components/table/`), a(Se, `target`, `_blank`), c(Se, o(`\u67E5\u770B Table \u9759\u6001\u6837\u5F0F`));
          let W = h(`div`);
          c(s3, W), e(W, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ce = h(`h2`);
          c(W, Ce), e(Ce, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Ce, o(`# Table`));
          let we = g(`rue:component:start`), Te = g(`rue:component:end`);
          c(W, we), c(W, Te), p(() => {
            u(y(S, {
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
              activeKey: m2.value,
              onChange: (e2) => m2.value = e2,
              className: `mb-3`
            }), W, we, Te);
          });
          let Ee = g(`rue:slot:start`), De = g(`rue:slot:end`);
          c(W, Ee), c(W, De), p(() => {
            u(v(m2.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 22,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    }
                  ]
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  className="w-full"
  columns={[
    { title: '\u59D3\u540D', dataIndex: 'name' },
    { title: '\u5E74\u9F84', dataIndex: 'age' },
    { title: '\u4F4F\u5740', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '3', name: '\u738B\u4E8C', age: 22, address: '\u9AD8\u6D1E\u67512\u53F7' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), W, Ee, De);
          });
          let G = h(`div`);
          c(s3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Oe = h(`h2`);
          c(G, Oe), e(Oe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Oe, o(`# \u7B5B\u9009\uFF08\u5185\u7F6E\u56FE\u6807\u83DC\u5355/\u591A\u9009/\u5355\u9009/\u5173\u95ED\u89E6\u53D1\uFF09`));
          let ke = g(`rue:component:start`), Ae = g(`rue:component:end`);
          c(G, ke), c(G, Ae), p(() => {
            u(y(S, {
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
            }), G, ke, Ae);
          });
          let je = g(`rue:slot:start`), Me = g(`rue:slot:end`);
          c(G, je), c(G, Me), p(() => {
            u(v(de.value === `preview` ? f(() => {
              let n4 = l(), i2 = h(`div`);
              c(n4, i2), e(i2, `overflow-x-auto`);
              let a2 = h(`div`);
              c(i2, a2), e(a2, `mb-2 flex items-center gap-2`);
              let s4 = h(`span`);
              c(a2, s4), e(s4, `text-sm`), c(s4, o(`\u7B5B\u9009\uFF1A`));
              let f2 = t(s4);
              c(s4, f2), p(() => {
                r(f2, (_e.value ?? [
                  `\u9ED8\u8BA4\u226540`
                ]).join(`, `));
              });
              let m3 = h(`button`);
              c(a2, m3), e(m3, `btn btn-ghost btn-xs`), d(m3, `click`, () => ve.value = true), c(m3, o(`\u591A\u9009`));
              let _4 = h(`button`);
              c(a2, _4), e(_4, `btn btn-ghost btn-xs`), d(_4, `click`, () => ve.value = false), c(_4, o(`\u5355\u9009`));
              let v2 = h(`button`);
              c(a2, v2), e(v2, `btn btn-ghost btn-xs`), d(v2, `click`, () => ye.value = !ye.value);
              let b2 = t(v2);
              c(v2, b2), p(() => {
                r(b2, ye.value ? `\u5173\u95ED\u65F6\u89E6\u53D1` : `\u5373\u65F6\u89E6\u53D1`);
              });
              let x3 = g(`rue:component:start`), S2 = g(`rue:component:end`);
              return c(i2, x3), c(i2, S2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`,
                      filters: [
                        {
                          text: `\u226540`,
                          value: `gte40`
                        },
                        {
                          text: `<40`,
                          value: `lt40`
                        },
                        {
                          text: `\u5076\u6570`,
                          value: `even`
                        }
                      ],
                      filteredValue: _e.value ?? void 0,
                      defaultFilteredValue: [
                        `gte40`
                      ],
                      filterMultiple: ve.value,
                      filterOnClose: ye.value,
                      onFilter: (e2, t2) => e2 === `gte40` ? t2.age >= 40 : e2 === `lt40` ? t2.age < 40 : e2 === `even` ? t2.age % 2 == 0 : true
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 21,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    },
                    {
                      key: `4`,
                      name: `\u8D75\u516D`,
                      age: 40,
                      address: `\u9AD8\u6D1E\u67513\u53F7`
                    }
                  ],
                  onChange: (e2, t2, n5, r2) => {
                    if ((r2 == null ? void 0 : r2.action) === `filter`) {
                      let e3 = (t2 == null ? void 0 : t2.age) ?? (t2 == null ? void 0 : t2.age) ?? [];
                      _e.value = Array.isArray(e3) ? e3 : [];
                    }
                  }
                }), i2, x3, S2);
              }), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const filtered = ref<any[] | null>(null)
const multiple = ref(true)
const onCloseTrigger = ref(true)

<Table
  columns={[
    { title: '\u59D3\u540D', dataIndex: 'name' },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      filters: [
        { text: '\u226540', value: 'gte40' },
        { text: '<40', value: 'lt40' },
        { text: '\u5076\u6570', value: 'even' },
      ],
      filteredValue: filtered.value ?? undefined,
      defaultFilteredValue: ['gte40'],
      filterMultiple: multiple.value,
      filterOnClose: onCloseTrigger.value,
      onFilter: (val, rec) => {
        if (val === 'gte40') return rec.age >= 40
        if (val === 'lt40') return rec.age < 40
        if (val === 'even') return rec.age % 2 === 0
        return true
      },
    },
    { title: '\u4F4F\u5740', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '2', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '3', name: '\u738B\u4E8C', age: 21, address: '\u9AD8\u6D1E\u67512\u53F7' },
    { key: '4', name: '\u8D75\u516D', age: 40, address: '\u9AD8\u6D1E\u67513\u53F7' },
  ]}
  onChange={(p, filters, sorter, extra) => {
    if (extra?.action === 'filter') {
      const vals = filters?.age ?? filters?.['age'] ?? []
      filtered.value = Array.isArray(vals) ? vals : []
    }
  }}
/>
`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, je, Me);
          });
          let Ne = h(`div`);
          c(s3, Ne), e(Ne, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Pe = h(`h2`);
          c(Ne, Pe), e(Pe, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Pe, o(`# \u7B5B\u9009\uFF08\u81EA\u5B9A\u4E49\u51FD\u6570\uFF09`));
          let Fe = g(`rue:component:start`), Ie = g(`rue:component:end`);
          c(Ne, Fe), c(Ne, Ie), p(() => {
            u(y(S, {
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
              activeKey: R.value,
              onChange: (e2) => R.value = e2,
              className: `mb-3`
            }), Ne, Fe, Ie);
          });
          let Le = g(`rue:slot:start`), Re = g(`rue:slot:end`);
          c(Ne, Le), c(Ne, Re), p(() => {
            u(v(R.value === `preview` ? f(() => {
              let n4 = l(), i2 = h(`div`);
              c(n4, i2), e(i2, `overflow-x-auto`);
              let a2 = h(`div`);
              c(i2, a2), e(a2, `mb-2 flex items-center gap-2`);
              let s4 = h(`span`);
              c(a2, s4), e(s4, `text-sm`), c(s4, o(`\u7B5B\u9009\uFF1A`));
              let f2 = t(s4);
              c(s4, f2), p(() => {
                r(f2, U.value.join(`, `) || `\u65E0`);
              });
              let m3 = h(`button`);
              c(a2, m3), e(m3, `btn btn-ghost btn-xs`), d(m3, `click`, () => U.value = [
                `gte40`
              ]), c(m3, o(`\u5E74\u9F84\u226540`));
              let _4 = h(`button`);
              c(a2, _4), e(_4, `btn btn-ghost btn-xs`), d(_4, `click`, () => U.value = [
                `lt40`
              ]), c(_4, o(`\u5E74\u9F84\uFF1C40`));
              let v2 = h(`button`);
              c(a2, v2), e(v2, `btn btn-ghost btn-xs`), d(v2, `click`, () => U.value = [
                `even`
              ]), c(v2, o(`\u5076\u6570\u5E74\u9F84`));
              let b2 = h(`button`);
              c(a2, b2), e(b2, `btn btn-ghost btn-xs`), d(b2, `click`, () => U.value = []), c(b2, o(`\u6E05\u7A7A`));
              let x3 = g(`rue:component:start`), S2 = g(`rue:component:end`);
              return c(i2, x3), c(i2, S2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`,
                      filters: [
                        {
                          text: `\u226540`,
                          value: `gte40`
                        },
                        {
                          text: `<40`,
                          value: `lt40`
                        },
                        {
                          text: `\u5076\u6570`,
                          value: `even`
                        }
                      ],
                      filteredValue: U.value,
                      filterOnClose: true,
                      onFilter: (e2, t2) => e2 === `gte40` ? t2.age >= 40 : e2 === `lt40` ? t2.age < 40 : e2 === `even` ? t2.age % 2 == 0 : true
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 21,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    },
                    {
                      key: `4`,
                      name: `\u8D75\u516D`,
                      age: 40,
                      address: `\u9AD8\u6D1E\u67513\u53F7`
                    }
                  ],
                  onChange: (e2, t2, n5, r2) => {
                    if ((r2 == null ? void 0 : r2.action) === `filter`) {
                      let e3 = (t2 == null ? void 0 : t2.age) ?? (t2 == null ? void 0 : t2.age) ?? [];
                      U.value = Array.isArray(e3) ? e3 : [];
                    }
                  }
                }), i2, x3, S2);
              }), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const filteredAge = ref<any[]>(['gte40'])

<div className="mb-2 flex items-center gap-2">
  <span className="text-sm">\u7B5B\u9009\uFF1A{filteredAge.value.join(', ') || '\u65E0'}</span>
  <button className="btn btn-ghost btn-xs" onClick={() => (filteredAge.value = ['gte40'])}>\u5E74\u9F84\u226540</button>
  <button className="btn btn-ghost btn-xs" onClick={() => (filteredAge.value = ['lt40'])}>\u5E74\u9F84\uFF1C40</button>
  <button className="btn btn-ghost btn-xs" onClick={() => (filteredAge.value = ['even'])}>\u5076\u6570\u5E74\u9F84</button>
  <button className="btn btn-ghost btn-xs" onClick={() => (filteredAge.value = [])}>\u6E05\u7A7A</button>
</div>

<Table
  className="w-full"
  columns={[
    { title: '\u59D3\u540D', dataIndex: 'name' },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      filters: [
        { text: '\u226540', value: 'gte40' },
        { text: '<40', value: 'lt40' },
        { text: '\u5076\u6570', value: 'even' },
      ],
      filteredValue: filteredAge.value,
      filterOnClose: true,
      onFilter: (val, rec) => {
        if (val === 'gte40') return rec.age >= 40
        if (val === 'lt40') return rec.age < 40
        if (val === 'even') return rec.age % 2 === 0
        return true
      },
    },
    { title: '\u4F4F\u5740', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '2', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '3', name: '\u738B\u4E8C', age: 21, address: '\u9AD8\u6D1E\u67512\u53F7' },
    { key: '4', name: '\u8D75\u516D', age: 40, address: '\u9AD8\u6D1E\u67513\u53F7' },
  ]}
  onChange={(p, filters, sorter, extra) => {
    if (extra?.action === 'filter') {
      const vals = filters?.age ?? filters?.['age'] ?? []
      filteredAge.value = Array.isArray(vals) ? vals : []
    }
  }}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Ne, Le, Re);
          });
          let K = h(`div`);
          c(s3, K), e(K, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ze = h(`h2`);
          c(K, ze), e(ze, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(ze, o(`# \u53EF\u9009\u62E9\uFF08\u591A\u9009\u90E8\u5206\u7981\u7528\uFF09`));
          let Be = g(`rue:component:start`), Ve = g(`rue:component:end`);
          c(K, Be), c(K, Ve), p(() => {
            u(y(S, {
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
              activeKey: L.value,
              onChange: (e2) => L.value = e2,
              className: `mb-3`
            }), K, Be, Ve);
          });
          let He = g(`rue:slot:start`), Ue = g(`rue:slot:end`);
          c(K, He), c(K, Ue), p(() => {
            u(v(L.value === `preview` ? f(() => {
              let n4 = l(), i2 = h(`div`);
              c(n4, i2), e(i2, `overflow-x-auto`);
              let a2 = h(`div`);
              c(i2, a2), e(a2, `mb-2 flex items-center gap-2`);
              let s4 = h(`span`);
              c(a2, s4), e(s4, `text-sm`), c(s4, o(`\u5DF2\u9009\uFF1A `));
              let f2 = t(s4);
              c(s4, f2), p(() => {
                r(f2, V.value.length ? V.value.join(`, `) : `\u65E0`);
              });
              let m3 = h(`button`);
              c(a2, m3), e(m3, `btn btn-ghost btn-xs`), d(m3, `click`, () => V.value = [
                `1`
              ]), c(m3, o(`\u9009\u4E2D1`));
              let _4 = h(`button`);
              c(a2, _4), e(_4, `btn btn-ghost btn-xs`), d(_4, `click`, () => V.value = [
                `1`,
                `3`
              ]), c(_4, o(`\u9009\u4E2D1,3`));
              let v2 = h(`button`);
              c(a2, v2), e(v2, `btn btn-ghost btn-xs`), d(v2, `click`, () => V.value = []), c(v2, o(`\u6E05\u7A7A`));
              let b2 = g(`rue:component:start`), x3 = g(`rue:component:end`);
              c(i2, b2), c(i2, x3), p(() => {
                u(y(T, {
                  className: `w-full`,
                  rowSelection: {
                    selectedRowKeys: V.value,
                    onChange: (e2) => V.value = e2,
                    getCheckboxProps: (e2) => ({
                      disabled: e2.key === `2`
                    })
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 22,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    }
                  ]
                }), i2, b2, x3);
              });
              let S2 = h(`div`);
              return c(i2, S2), e(S2, `mt-2 text-xs opacity-60`), c(S2, o(`\u6CE8\uFF1A\u7B2C2\u884C\u7981\u7528\u4E0D\u53EF\u9009`)), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const selected = ref<Array<string | number>>(['1'])

<div className="overflow-x-auto">
  <div className="mb-2 flex items-center gap-2">
    <span className="text-sm">\u5DF2\u9009\uFF1A{selected.value.length ? selected.value.join(', ') : '\u65E0'}</span>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = ['1'])}>\u9009\u4E2D1</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = ['1','3'])}>\u9009\u4E2D1,3</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = [])}>\u6E05\u7A7A</button>
  </div>
  <Table
    className="w-full"
    rowSelection={{ selectedRowKeys: selected.value, onChange: (keys) => (selected.value = keys), getCheckboxProps: (record) => ({ disabled: record.key === '2' }) }}
    columns={[{ title: '\u59D3\u540D', dataIndex: 'name' }, { title: '\u5E74\u9F84', dataIndex: 'age' }, { title: '\u4F4F\u5740', dataIndex: 'address' }]}
    dataSource={[{ key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '3', name: '\u738B\u4E8C', age: 22, address: '\u9AD8\u6D1E\u67512\u53F7' }]}
  />
  <div className="mt-2 text-xs opacity-60">\u6CE8\uFF1A\u7B2C2\u884C\u7981\u7528\u4E0D\u53EF\u9009</div>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), K, He, Ue);
          });
          let q = h(`div`);
          c(s3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let We = h(`h2`);
          c(q, We), e(We, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(We, o(`# \u53EF\u9009\u62E9\uFF08\u5355\u9009\u90E8\u5206\u7981\u7528\uFF09`));
          let Ge = g(`rue:component:start`), Ke = g(`rue:component:end`);
          c(q, Ge), c(q, Ke), p(() => {
            u(y(S, {
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
            }), q, Ge, Ke);
          });
          let qe = g(`rue:slot:start`), Je = g(`rue:slot:end`);
          c(q, qe), c(q, Je), p(() => {
            u(v(ue.value === `preview` ? f(() => {
              let n4 = l(), i2 = h(`div`);
              c(n4, i2), e(i2, `overflow-x-auto`);
              let a2 = h(`div`);
              c(i2, a2), e(a2, `mb-2 flex items-center gap-2`);
              let s4 = h(`span`);
              c(a2, s4), e(s4, `text-sm`), c(s4, o(`\u5DF2\u9009\uFF1A`));
              let f2 = t(s4);
              c(s4, f2), p(() => {
                r(f2, H.value == null ? `\u65E0` : String(H.value));
              });
              let m3 = h(`button`);
              c(a2, m3), e(m3, `btn btn-ghost btn-xs`), d(m3, `click`, () => H.value = `1`), c(m3, o(`\u9009\u4E2D1`));
              let _4 = h(`button`);
              c(a2, _4), e(_4, `btn btn-ghost btn-xs`), d(_4, `click`, () => H.value = `3`), c(_4, o(`\u9009\u4E2D3`));
              let v2 = h(`button`);
              c(a2, v2), e(v2, `btn btn-ghost btn-xs`), d(v2, `click`, () => H.value = null), c(v2, o(`\u6E05\u7A7A`));
              let b2 = g(`rue:component:start`), x3 = g(`rue:component:end`);
              c(i2, b2), c(i2, x3), p(() => {
                u(y(T, {
                  className: `w-full`,
                  rowSelection: {
                    type: `radio`,
                    selectedRowKeys: H.value == null ? [] : [
                      H.value
                    ],
                    onChange: (e2) => H.value = e2[0] ?? null,
                    getCheckboxProps: (e2) => ({
                      disabled: e2.key === `2`
                    })
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 22,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    }
                  ]
                }), i2, b2, x3);
              });
              let S2 = h(`div`);
              return c(i2, S2), e(S2, `mt-2 text-xs opacity-60`), c(S2, o(`\u6CE8\uFF1A\u7B2C2\u884C\u7981\u7528\u4E0D\u53EF\u9009`)), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const selected = ref<string | number | null>(null)

<div className="overflow-x-auto">
  <div className="mb-2 flex items-center gap-2">
    <span className="text-sm">\u5DF2\u9009\uFF1A{selected.value != null ? String(selected.value) : '\u65E0'}</span>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = '1')}>\u9009\u4E2D1</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = '3')}>\u9009\u4E2D3</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = null)}>\u6E05\u7A7A</button>
  </div>
  <Table
    className="w-full"
    rowSelection={{ type: 'radio', selectedRowKeys: selected.value != null ? [selected.value] : [], onChange: (keys) => (selected.value = keys[0] ?? null), getCheckboxProps: (record) => ({ disabled: record.key === '2' }) }}
    columns={[{ title: '\u59D3\u540D', dataIndex: 'name' }, { title: '\u5E74\u9F84', dataIndex: 'age' }, { title: '\u4F4F\u5740', dataIndex: 'address' }]}
    dataSource={[{ key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '3', name: '\u738B\u4E8C', age: 22, address: '\u9AD8\u6D1E\u67512\u53F7' }]}
  />
  <div className="mt-2 text-xs opacity-60">\u6CE8\uFF1A\u7B2C2\u884C\u7981\u7528\u4E0D\u53EF\u9009</div>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, qe, Je);
          });
          let J = h(`div`);
          c(s3, J), e(J, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ye = h(`h2`);
          c(J, Ye), e(Ye, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Ye, o(`# \u53EF\u9009\u62E9\uFF08\u591A\u9009\u7981\u7528\uFF09`));
          let Xe = g(`rue:component:start`), Ze = g(`rue:component:end`);
          c(J, Xe), c(J, Ze), p(() => {
            u(y(S, {
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
              activeKey: E.value,
              onChange: (e2) => E.value = e2,
              className: `mb-3`
            }), J, Xe, Ze);
          });
          let Qe = g(`rue:slot:start`), $e = g(`rue:slot:end`);
          c(J, Qe), c(J, $e), p(() => {
            u(v(E.value === `preview` ? f(() => {
              let n4 = l(), a2 = h(`div`);
              c(n4, a2), e(a2, `overflow-x-auto`);
              let s4 = h(`div`);
              c(a2, s4), e(s4, `mb-2 flex items-center gap-2`);
              let d2 = h(`span`);
              c(s4, d2), e(d2, `text-sm`), c(d2, o(`\u5DF2\u9009\uFF1A `));
              let f2 = t(d2);
              c(d2, f2), p(() => {
                r(f2, me.value.length ? me.value.join(`, `) : `\u65E0`);
              });
              let m3 = h(`button`);
              c(s4, m3), e(m3, `btn btn-ghost btn-xs`), i(m3, true), c(m3, o(`\u9009\u4E2D1`));
              let _4 = h(`button`);
              c(s4, _4), e(_4, `btn btn-ghost btn-xs`), i(_4, true), c(_4, o(`\u9009\u4E2D1,3`));
              let v2 = h(`button`);
              c(s4, v2), e(v2, `btn btn-ghost btn-xs`), i(v2, true), c(v2, o(`\u6E05\u7A7A`));
              let b2 = g(`rue:component:start`), x3 = g(`rue:component:end`);
              return c(a2, b2), c(a2, x3), p(() => {
                u(y(T, {
                  className: `w-full`,
                  rowSelection: {
                    disabled: true,
                    selectedRowKeys: me.value,
                    onChange: (e2) => me.value = e2
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 22,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    }
                  ]
                }), a2, b2, x3);
              }), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const selected = ref<Array<string | number>>(['2'])

<div className="overflow-x-auto">
  <div className="mb-2 flex items-center gap-2">
    <span className="text-sm">\u5DF2\u9009\uFF1A{selected.value.length ? selected.value.join(', ') : '\u65E0'}</span>
    <button className="btn btn-ghost btn-xs" disabled>\u9009\u4E2D1</button>
    <button className="btn btn-ghost btn-xs" disabled>\u9009\u4E2D1,3</button>
    <button className="btn btn-ghost btn-xs" disabled>\u6E05\u7A7A</button>
  </div>
  <Table
    className="w-full"
    rowSelection={{ disabled: true, selectedRowKeys: selected.value, onChange: (keys) => (selected.value = keys) }}
    columns={[{ title: '\u59D3\u540D', dataIndex: 'name' }, { title: '\u5E74\u9F84', dataIndex: 'age' }, { title: '\u4F4F\u5740', dataIndex: 'address' }]}
    dataSource={[{ key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '3', name: '\u738B\u4E8C', age: 22, address: '\u9AD8\u6D1E\u67512\u53F7' }]}
  />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), J, Qe, $e);
          });
          let Y = h(`div`);
          c(s3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let et = h(`h2`);
          c(Y, et), e(et, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(et, o(`# \u53EF\u9009\u62E9\uFF08\u5355\u9009\u7981\u7528\uFF09`));
          let tt = g(`rue:component:start`), nt = g(`rue:component:end`);
          c(Y, tt), c(Y, nt), p(() => {
            u(y(S, {
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
              activeKey: E.value,
              onChange: (e2) => E.value = e2,
              className: `mb-3`
            }), Y, tt, nt);
          });
          let rt = g(`rue:slot:start`), it = g(`rue:slot:end`);
          c(Y, rt), c(Y, it), p(() => {
            u(v(E.value === `preview` ? f(() => {
              let n4 = l(), a2 = h(`div`);
              c(n4, a2), e(a2, `overflow-x-auto`);
              let s4 = h(`div`);
              c(a2, s4), e(s4, `mb-2 flex items-center gap-2`);
              let d2 = h(`span`);
              c(s4, d2), e(d2, `text-sm`), c(d2, o(`\u5DF2\u9009\uFF1A `));
              let f2 = t(d2);
              c(d2, f2), p(() => {
                r(f2, he.value == null ? `\u65E0` : String(he.value));
              });
              let m3 = h(`button`);
              c(s4, m3), e(m3, `btn btn-ghost btn-xs`), i(m3, true), c(m3, o(`\u9009\u4E2D1`));
              let _4 = h(`button`);
              c(s4, _4), e(_4, `btn btn-ghost btn-xs`), i(_4, true), c(_4, o(`\u9009\u4E2D3`));
              let v2 = h(`button`);
              c(s4, v2), e(v2, `btn btn-ghost btn-xs`), i(v2, true), c(v2, o(`\u6E05\u7A7A`));
              let b2 = g(`rue:component:start`), x3 = g(`rue:component:end`);
              return c(a2, b2), c(a2, x3), p(() => {
                u(y(T, {
                  className: `w-full`,
                  rowSelection: {
                    type: `radio`,
                    disabled: true,
                    selectedRowKeys: he.value == null ? [] : [
                      he.value
                    ],
                    onChange: (e2) => he.value = e2[0] ?? null
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 22,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    }
                  ]
                }), a2, b2, x3);
              }), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const selected = ref<string | number | null>('2')

<div className="overflow-x-auto">
  <div className="mb-2 flex items-center gap-2">
    <span className="text-sm">\u5DF2\u9009\uFF1A{selected.value != null ? String(selected.value) : '\u65E0'}</span>
    <button className="btn btn-ghost btn-xs" disabled>\u9009\u4E2D1</button>
    <button className="btn btn-ghost btn-xs" disabled>\u9009\u4E2D3</button>
    <button className="btn btn-ghost btn-xs" disabled>\u6E05\u7A7A</button>
  </div>
  <Table
    className="w-full"
    rowSelection={{ type: 'radio', disabled: true, selectedRowKeys: selected.value != null ? [selected.value] : [], onChange: (keys) => (selected.value = keys[0] ?? null) }}
    columns={[{ title: '\u59D3\u540D', dataIndex: 'name' }, { title: '\u5E74\u9F84', dataIndex: 'age' }, { title: '\u4F4F\u5740', dataIndex: 'address' }]}
    dataSource={[{ key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '3', name: '\u738B\u4E8C', age: 22, address: '\u9AD8\u6D1E\u67512\u53F7' }]}
  />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, rt, it);
          });
          let X = h(`div`);
          c(s3, X), e(X, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let at = h(`h2`);
          c(X, at), e(at, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(at, o(`# Table with border and background`));
          let ot = g(`rue:component:start`), st = g(`rue:component:end`);
          c(X, ot), c(X, st), p(() => {
            u(y(S, {
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
              activeKey: ee2.value,
              onChange: (e2) => ee2.value = e2,
              className: `mb-3`
            }), X, ot, st);
          });
          let ct = g(`rue:slot:start`), lt = g(`rue:slot:end`);
          c(X, ct), c(X, lt), p(() => {
            u(v(ee2.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto rounded-box border border-base-content/5 bg-base-100`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  columns: [
                    {
                      title: `No.`,
                      dataIndex: `no`
                    },
                    {
                      title: `Name`,
                      dataIndex: `name`
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`
                    },
                    {
                      title: `Favorite Color`,
                      dataIndex: `color`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      no: 1,
                      name: `Cy Ganderton`,
                      job: `Quality Control Specialist`,
                      color: `Blue`
                    },
                    {
                      key: `2`,
                      no: 2,
                      name: `Hart Hagerty`,
                      job: `Desktop Support Technician`,
                      color: `Purple`
                    },
                    {
                      key: `3`,
                      no: 3,
                      name: `Brice Swyre`,
                      job: `Tax Accountant`,
                      color: `Red`
                    }
                  ]
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <Table
    className="w-full"
    columns={[
      { title: 'No.', dataIndex: 'no' },
      { title: 'Name', dataIndex: 'name' },
      { title: 'Job', dataIndex: 'job' },
      { title: 'Favorite Color', dataIndex: 'color' },
    ]}
    dataSource={[
      { key: '1', no: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
      { key: '2', no: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', color: 'Purple' },
      { key: '3', no: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    ]}
  />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), X, ct, lt);
          });
          let Z = h(`div`);
          c(s3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ut = h(`h2`);
          c(Z, ut), e(ut, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(ut, o(`# Table with an active row`));
          let dt = g(`rue:component:start`), ft = g(`rue:component:end`);
          c(Z, dt), c(Z, ft), p(() => {
            u(y(S, {
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
            }), Z, dt, ft);
          });
          let pt = g(`rue:slot:start`), mt = g(`rue:slot:end`);
          c(Z, pt), c(Z, mt), p(() => {
            u(v(w2.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  rowHoverable: false,
                  rowClassName: (e3, t3) => t3 === 0 ? `bg-base-200` : ``,
                  columns: [
                    {
                      title: `No.`,
                      dataIndex: `no`
                    },
                    {
                      title: `Name`,
                      dataIndex: `name`
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`
                    },
                    {
                      title: `Favorite Color`,
                      dataIndex: `color`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      no: 1,
                      name: `Cy Ganderton`,
                      job: `Quality Control Specialist`,
                      color: `Blue`
                    },
                    {
                      key: `2`,
                      no: 2,
                      name: `Hart Hagerty`,
                      job: `Desktop Support Technician`,
                      color: `Purple`
                    },
                    {
                      key: `3`,
                      no: 3,
                      name: `Brice Swyre`,
                      job: `Tax Accountant`,
                      color: `Red`
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  rowHoverable={false}
  rowClassName={(_, i) => (i === 0 ? 'bg-base-200' : '')}
  columns={[
    { title: 'No.', dataIndex: 'no' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Job', dataIndex: 'job' },
    { title: 'Favorite Color', dataIndex: 'color' },
  ]}
  dataSource={[
    { key: '1', no: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
    { key: '2', no: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', color: 'Purple' },
    { key: '3', no: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, pt, mt);
          });
          let ht = h(`div`);
          c(s3, ht), e(ht, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let gt = h(`h2`);
          c(ht, gt), e(gt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(gt, o(`# A row that highlights on hover`));
          let _t = g(`rue:component:start`), vt = g(`rue:component:end`);
          c(ht, _t), c(ht, vt), p(() => {
            u(y(S, {
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
              activeKey: te2.value,
              onChange: (e2) => te2.value = e2,
              className: `mb-3`
            }), ht, _t, vt);
          });
          let yt = g(`rue:slot:start`), bt = g(`rue:slot:end`);
          c(ht, yt), c(ht, bt), p(() => {
            u(v(te2.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  rowHoverable: true,
                  rowHoverClass: `hover:bg-base-300`,
                  columns: [
                    {
                      title: `No.`,
                      dataIndex: `no`
                    },
                    {
                      title: `Name`,
                      dataIndex: `name`
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`
                    },
                    {
                      title: `Favorite Color`,
                      dataIndex: `color`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      no: 1,
                      name: `Cy Ganderton`,
                      job: `Quality Control Specialist`,
                      color: `Blue`
                    },
                    {
                      key: `2`,
                      no: 2,
                      name: `Hart Hagerty`,
                      job: `Desktop Support Technician`,
                      color: `Purple`
                    },
                    {
                      key: `3`,
                      no: 3,
                      name: `Brice Swyre`,
                      job: `Tax Accountant`,
                      color: `Red`
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  rowHoverable
  rowHoverClass="hover:bg-base-300"
  columns={[
    { title: 'No.', dataIndex: 'no' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Job', dataIndex: 'job' },
    { title: 'Favorite Color', dataIndex: 'color' },
  ]}
  dataSource={[
    { key: '1', no: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
    { key: '2', no: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', color: 'Purple' },
    { key: '3', no: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), ht, yt, bt);
          });
          let xt = h(`div`);
          c(s3, xt), e(xt, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let St = h(`h2`);
          c(xt, St), e(St, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(St, o(`# Table with visual elements`));
          let Ct = g(`rue:component:start`), wt = g(`rue:component:end`);
          c(xt, Ct), c(xt, wt), p(() => {
            u(y(S, {
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
              activeKey: j.value,
              onChange: (e2) => j.value = e2,
              className: `mb-3`
            }), xt, Ct, wt);
          });
          let Tt = g(`rue:slot:start`), Et = g(`rue:slot:end`);
          c(xt, Tt), c(xt, Et), p(() => {
            u(v(j.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto`);
              let r2 = h(`div`);
              c(n4, r2), e(r2, `mb-2 flex gap-2`);
              let i2 = h(`button`);
              c(r2, i2), e(i2, `btn btn-ghost btn-xs`), d(i2, `click`, () => fe.value = be.map((e2) => e2.key)), c(i2, o(`\u5168\u9009`));
              let a2 = h(`button`);
              c(r2, a2), e(a2, `btn btn-ghost btn-xs`), d(a2, `click`, () => fe.value = []), c(a2, o(`\u53D6\u6D88\u5168\u9009`));
              let s4 = g(`rue:component:start`), f2 = g(`rue:component:end`);
              return c(n4, s4), c(n4, f2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  rowSelection: {
                    selectedRowKeys: fe.value,
                    onChange: (e2) => fe.value = e2
                  },
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`,
                      render: (e2, t3) => b(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          y(`div`, {
                            className: `avatar`,
                            children: y(`div`, {
                              className: `w-12 h-12 mask mask-squircle`,
                              children: y(`img`, {
                                src: `https://img.daisyui.com/images/profile/demo/${t3.id}@94.webp`,
                                alt: `Tailwind CSS list item`
                              })
                            })
                          }),
                          b(`div`, {
                            children: [
                              y(`div`, {
                                className: `font-bold`,
                                children: t3.name
                              }),
                              y(`div`, {
                                className: `text-sm opacity-50`,
                                children: t3.country
                              })
                            ]
                          })
                        ]
                      })
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`,
                      render: (e2, t3) => b(`div`, {
                        children: [
                          t3.company,
                          y(`br`, {}),
                          y(`span`, {
                            className: `badge badge-ghost badge-sm`,
                            children: t3.job
                          })
                        ]
                      })
                    },
                    {
                      title: `Favorite Color`,
                      dataIndex: `color`
                    },
                    {
                      key: `actions`,
                      title: ``,
                      render: () => y(`button`, {
                        className: `btn btn-ghost btn-xs`,
                        children: `details`
                      })
                    }
                  ],
                  dataSource: be
                }), n4, s4, f2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const selectedVisual = ref<Array<string | number>>([])

const dataVisual = [
  {
    key: '2',
    id: 2,
    name: 'Hart Hagerty',
    country: 'United States',
    company: 'Zemlak, Daniel and Leannon',
    job: 'Desktop Support Technician',
    color: 'Purple',
  },
  {
    key: '3',
    id: 3,
    name: 'Brice Swyre',
    country: 'China',
    company: 'Carroll Group',
    job: 'Tax Accountant',
    color: 'Red',
  },
  {
    key: '4',
    id: 4,
    name: 'Marjy Ferencz',
    country: 'Russia',
    company: 'Rowe-Schoen',
    job: 'Office Assistant I',
    color: 'Crimson',
  },
  {
    key: '5',
    id: 5,
    name: 'Yancy Tear',
    country: 'Brazil',
    company: 'Wyman-Ledner',
    job: 'Community Outreach Specialist',
    color: 'Indigo',
  },
]

<div className="overflow-x-auto">
  <div className="mb-2 flex gap-2">
    <button
      className="btn btn-ghost btn-xs"
      onClick={() => (selectedVisual.value = dataVisual.map(d => d.key))}
    >
      \u5168\u9009
    </button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selectedVisual.value = [])}>
      \u53D6\u6D88\u5168\u9009
    </button>
  </div>
  <Table
    className="w-full"
    rowSelection={{
      selectedRowKeys: selectedVisual.value,
      onChange: (keys: Array<string | number>) => (selectedVisual.value = keys),
    }}
    columns={[
      {
        title: 'Name',
        dataIndex: 'name',
        render: (_: any, rec: any) => (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <img
                  src={\`https://img.daisyui.com/images/profile/demo/\${rec.id}@94.webp\`}
                  alt="Tailwind CSS list item"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{rec.name}</div>
              <div className="text-sm opacity-50">{rec.country}</div>
            </div>
          </div>
        ),
      },
      {
        title: 'Job',
        dataIndex: 'job',
        render: (_: any, rec: any) => (
          <div>
            {rec.company}
            <br />
            <span className="badge badge-ghost badge-sm">{rec.job}</span>
          </div>
        ),
      },
      { title: 'Favorite Color', dataIndex: 'color' },
      {
        key: 'actions',
        title: '',
        render: () => <button className="btn btn-ghost btn-xs">details</button>,
      },
    ]}
    dataSource={dataVisual}
  />
</div>
`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), xt, Tt, Et);
          });
          let Dt = h(`div`);
          c(s3, Dt), e(Dt, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ot = h(`h2`);
          c(Dt, Ot), e(Ot, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Ot, o(`# \u8FC7\u6EE4\uFF08\u65E0 UI\uFF09`));
          let kt = g(`rue:component:start`), At = g(`rue:component:end`);
          c(Dt, kt), c(Dt, At), p(() => {
            u(y(S, {
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
            }), Dt, kt, At);
          });
          let jt = g(`rue:slot:start`), Mt = g(`rue:slot:end`);
          c(Dt, jt), c(Dt, Mt), p(() => {
            u(v(ie.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`,
                      filteredValue: [
                        `A`
                      ]
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `A`,
                      job: `Dev`
                    },
                    {
                      key: `2`,
                      name: `B`,
                      job: `Ops`
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  columns={[
    { title: 'Name', dataIndex: 'name', filteredValue: ['A'] },
    { title: 'Job', dataIndex: 'job' },
  ]}
  dataSource={[
    { key: '1', name: 'A', job: 'Dev' },
    { key: '2', name: 'B', job: 'Ops' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Dt, jt, Mt);
          });
          let Nt = h(`div`);
          c(s3, Nt), e(Nt, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Pt = h(`h2`);
          c(Nt, Pt), e(Pt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Pt, o(`# \u9690\u85CF\u5217`));
          let Ft = g(`rue:component:start`), It = g(`rue:component:end`);
          c(Nt, Ft), c(Nt, It), p(() => {
            u(y(S, {
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
            }), Nt, Ft, It);
          });
          let Lt = g(`rue:slot:start`), Rt = g(`rue:slot:end`);
          c(Nt, Lt), c(Nt, Rt), p(() => {
            u(v(ae.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`,
                      hidden: true
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `A`,
                      job: `Dev`
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  columns={[
    { title: 'Name', dataIndex: 'name' },
    { title: 'Job', dataIndex: 'job', hidden: true },
  ]}
  dataSource={[
    { key: '1', name: 'A', job: 'Dev' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Nt, Lt, Rt);
          });
          let zt = h(`div`);
          c(s3, zt), e(zt, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Bt = h(`h2`);
          c(zt, Bt), e(Bt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Bt, o(`# \u6458\u8981`));
          let Vt = g(`rue:component:start`), Ht = g(`rue:component:end`);
          c(zt, Vt), c(zt, Ht), p(() => {
            u(y(S, {
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
            }), zt, Vt, Ht);
          });
          let Ut = g(`rue:slot:start`), Wt = g(`rue:slot:end`);
          c(zt, Ut), c(zt, Wt), p(() => {
            u(v(oe.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `A`
                    },
                    {
                      key: `2`,
                      name: `B`
                    },
                    {
                      key: `3`,
                      name: `C`
                    }
                  ],
                  summary: (e3) => b(`div`, {
                    className: `p-2`,
                    children: [
                      `Total: `,
                      e3.total
                    ]
                  })
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  columns={[{ title: 'Name', dataIndex: 'name' }]}
  dataSource={[{ key: '1', name: 'A' }, { key: '2', name: 'B' }, { key: '3', name: 'C' }]}
  summary={(rows) => <div className="p-2">Total: {rows.total}</div>}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), zt, Ut, Wt);
          });
          let Gt = h(`div`);
          c(s3, Gt), e(Gt, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Kt = h(`h2`);
          c(Gt, Kt), e(Kt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Kt, o(`# \u7A7A\u6570\u636E`));
          let qt = g(`rue:component:start`), Jt = g(`rue:component:end`);
          c(Gt, qt), c(Gt, Jt), p(() => {
            u(y(S, {
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
            }), Gt, qt, Jt);
          });
          let Yt = g(`rue:slot:start`), Xt = g(`rue:slot:end`);
          c(Gt, Yt), c(Gt, Xt), p(() => {
            u(v(se.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`
                    }
                  ],
                  dataSource: [],
                  emptyText: y(`div`, {
                    className: `p-4 text-base-400`,
                    children: `Empty`
                  })
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  columns={[
    { title: 'Name', dataIndex: 'name' },
  ]}
  dataSource={[]}
  emptyText={<div className="p-4 text-base-400">Empty</div>}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Gt, Yt, Xt);
          });
          let Zt = h(`div`);
          c(s3, Zt), e(Zt, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Qt = h(`h2`);
          c(Zt, Qt), e(Qt, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Qt, o(`# \u884C\u4E8B\u4EF6\u4E0E\u56DE\u8C03\uFF08onRow\uFF09`));
          let $t = g(`rue:component:start`), en = g(`rue:component:end`);
          c(Zt, $t), c(Zt, en), p(() => {
            u(y(S, {
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
            }), Zt, $t, en);
          });
          let tn = g(`rue:slot:start`), nn = g(`rue:slot:end`);
          c(Zt, tn), c(Zt, nn), p(() => {
            u(v(P.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `Click Row`
                    }
                  ],
                  onRow: (e3) => ({
                    onClick: () => console.log(`row click`, e3),
                    onMouseEnter: () => console.log(`row enter`)
                  })
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  columns={[{ title: 'Name', dataIndex: 'name' }]}
  dataSource={[{ key: '1', name: 'Click Row' }]}
  onRow={(row) => ({
    onClick: () => console.log('row click', row),
    onMouseEnter: () => console.log('row enter'),
  })}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Zt, tn, nn);
          });
          let rn = h(`div`);
          c(s3, rn), e(rn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let an = h(`h2`);
          c(rn, an), e(an, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(an, o(`# \u5934/\u5355\u5143\u683C\u5C5E\u6027\uFF08onHeaderCell/onCell\uFF09`));
          let on = g(`rue:component:start`), sn = g(`rue:component:end`);
          c(rn, on), c(rn, sn), p(() => {
            u(y(S, {
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
            }), rn, on, sn);
          });
          let cn = g(`rue:slot:start`), ln = g(`rue:slot:end`);
          c(rn, cn), c(rn, ln), p(() => {
            u(v(F.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`,
                      onHeaderCell: () => ({
                        className: `bg-base-200`
                      }),
                      onCell: () => ({
                        className: `text-primary`
                      })
                    },
                    {
                      title: `Age`,
                      dataIndex: `age`,
                      onCell: () => ({
                        style: {
                          width: `120px`
                        }
                      })
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `A`,
                      age: 18
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  columns={[
    {
      title: 'Name',
      dataIndex: 'name',
      onHeaderCell: () => ({ className: 'bg-base-200' }),
      onCell: () => ({ className: 'text-primary' }),
    },
    { title: 'Age', dataIndex: 'age', onCell: () => ({ style: { width: '120px' } }) },
  ]}
  dataSource={[{ key: '1', name: 'A', age: 18 }]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), rn, cn, ln);
          });
          let un = h(`div`);
          c(s3, un), e(un, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let dn = h(`h2`);
          c(un, dn), e(dn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(dn, o(`# \u6EDA\u52A8\u4E0E onScroll`));
          let fn = g(`rue:component:start`), pn = g(`rue:component:end`);
          c(un, fn), c(un, pn), p(() => {
            u(y(S, {
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
            }), un, fn, pn);
          });
          let mn = g(`rue:slot:start`), hn = g(`rue:slot:end`);
          c(un, mn), c(un, hn), p(() => {
            u(v(I.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  height: 160,
                  onScroll: () => console.log(`table scrolled`),
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`
                    }
                  ],
                  dataSource: Array.from({
                    length: 20
                  }).map((e3, t3) => ({
                    key: String(t3 + 1),
                    name: `Item ${t3 + 1}`
                  }))
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  height={160}
  onScroll={() => console.log('table scrolled')}
  columns={[{ title: 'Name', dataIndex: 'name' }]}
  dataSource={Array.from({ length: 20 }).map((_, i) => ({
    key: String(i + 1),
    name: 'Item ' + (i + 1),
  }))}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), un, mn, hn);
          });
          let gn = h(`div`);
          c(s3, gn), e(gn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let _n = h(`h2`);
          c(gn, _n), e(_n, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(_n, o(`# \u6807\u9898\u4E0E\u5C3E\u90E8\uFF08title/footer\uFF09`));
          let vn = g(`rue:component:start`), yn = g(`rue:component:end`);
          c(gn, vn), c(gn, yn), p(() => {
            u(y(S, {
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
            }), gn, vn, yn);
          });
          let bn = g(`rue:slot:start`), xn = g(`rue:slot:end`);
          c(gn, bn), c(gn, xn), p(() => {
            u(v(ce.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  scroll: {
                    x: true
                  },
                  title: (e3) => b(`div`, {
                    className: `p-2`,
                    children: [
                      `Title: `,
                      e3.length,
                      ` rows`
                    ]
                  }),
                  footer: (e3) => b(`div`, {
                    className: `p-2`,
                    children: [
                      `Footer: `,
                      e3.length,
                      ` rows`
                    ]
                  }),
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `A`
                    },
                    {
                      key: `2`,
                      name: `B`
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  scroll={{ x: true }}
  title={(rows) => <div className="p-2">Title: {rows.length} rows</div>}
  footer={(rows) => <div className="p-2">Footer: {rows.length} rows</div>}
  columns={[{ title: 'Name', dataIndex: 'name' }]}
  dataSource={[{ key: '1', name: 'A' }, { key: '2', name: 'B' }]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), gn, bn, xn);
          });
          let Q = h(`div`);
          c(s3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Sn = h(`h2`);
          c(Q, Sn), e(Sn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Sn, o(`# \u7701\u7565\u4E0E\u56FA\u5B9A\u5E03\u5C40\uFF08ellipsis/fixed\uFF09`));
          let Cn = g(`rue:component:start`), wn = g(`rue:component:end`);
          c(Q, Cn), c(Q, wn), p(() => {
            u(y(S, {
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
            }), Q, Cn, wn);
          });
          let Tn = g(`rue:slot:start`), En = g(`rue:slot:end`);
          c(Q, Tn), c(Q, En), p(() => {
            u(v(le.value === `preview` ? f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(T, {
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`,
                      width: 120
                    },
                    {
                      title: `Description`,
                      dataIndex: `desc`,
                      ellipsis: true
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `A`,
                      desc: `\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A\uFF0C\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A\uFF0C\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A\uFF0C\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A`
                    }
                  ]
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  columns={[
    { title: 'Name', dataIndex: 'name', width: 120 },
    { title: 'Description', dataIndex: 'desc', ellipsis: true },
  ]}
  dataSource={[{
    key: '1',
    name: 'A',
    desc:
      '\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A\uFF0C\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A\uFF0C\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A\uFF0C\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57\uFF0C\u8D85\u8FC7\u5217\u5BBD\u4F1A\u81EA\u52A8\u7701\u7565\u663E\u793A',
  }]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, Tn, En);
          });
          let Dn = h(`div`);
          c(s3, Dn), e(Dn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let On = h(`h2`);
          c(Dn, On), e(On, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(On, o(`# Table with pinned-rows`));
          let kn = g(`rue:component:start`), An = g(`rue:component:end`);
          c(Dn, kn), c(Dn, An), p(() => {
            u(y(S, {
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
              activeKey: M.value,
              onChange: (e2) => M.value = e2,
              className: `mb-3`
            }), Dn, kn, An);
          });
          let jn = g(`rue:slot:start`), Mn = g(`rue:slot:end`);
          c(Dn, jn), c(Dn, Mn), p(() => {
            u(v(M.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto h-96`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  pinRows: true,
                  className: `bg-base-200`,
                  columns: [
                    {
                      title: `Name`,
                      dataIndex: `name`
                    }
                  ],
                  dataSource: [
                    `Ant-Man`,
                    `Aquaman`,
                    `Asterix`,
                    `The Atom`,
                    `The Avengers`,
                    `Batgirl`,
                    `Batman`,
                    `Batwoman`,
                    `Black Canary`,
                    `Black Panther`,
                    `Captain America`,
                    `Captain Marvel`,
                    `Catwoman`,
                    `Conan the Barbarian`
                  ].map((e2, t3) => ({
                    key: String(t3 + 1),
                    name: e2
                  }))
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="overflow-x-auto h-96">
  <Table
    pinRows
    className="bg-base-200"
    columns={[{ title: 'Name', dataIndex: 'name' }]}
    dataSource={[
      'Ant-Man',
      'Aquaman',
      'Asterix',
      'The Atom',
      'The Avengers',
      'Batgirl',
      'Batman',
      'Batwoman',
      'Black Canary',
      'Black Panther',
      'Captain America',
      'Captain Marvel',
      'Catwoman',
      'Conan the Barbarian',
    ].map((x, i) => ({ key: String(i + 1), name: x }))}
  />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Dn, jn, Mn);
          });
          let Nn = h(`div`);
          c(s3, Nn), e(Nn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Pn = h(`h2`);
          c(Nn, Pn), e(Pn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Pn, o(`# Table with pinned-rows and pinned-cols`));
          let Fn = g(`rue:component:start`), In = g(`rue:component:end`);
          c(Nn, Fn), c(Nn, In), p(() => {
            u(y(S, {
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
            }), Nn, Fn, In);
          });
          let Ln = g(`rue:slot:start`), Rn = g(`rue:slot:end`);
          c(Nn, Ln), c(Nn, Rn), p(() => {
            u(v(N.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto h-96 w-96`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  size: `xs`,
                  pinRows: true,
                  pinCols: true,
                  columns: [
                    {
                      title: `#`,
                      dataIndex: `no`,
                      fixedCol: true
                    },
                    {
                      title: `Name`,
                      dataIndex: `name`
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`
                    },
                    {
                      title: `company`,
                      dataIndex: `company`
                    },
                    {
                      title: `location`,
                      dataIndex: `location`
                    },
                    {
                      title: `Last Login`,
                      dataIndex: `last`
                    },
                    {
                      title: `Favorite Color`,
                      dataIndex: `color`
                    },
                    {
                      title: `#`,
                      dataIndex: `noEnd`,
                      fixedCol: true
                    }
                  ],
                  dataSource: [
                    1,
                    2,
                    3,
                    4,
                    5
                  ].map((e2) => ({
                    key: String(e2),
                    no: e2,
                    name: [
                      `Cy Ganderton`,
                      `Hart Hagerty`,
                      `Brice Swyre`,
                      `Marjy Ferencz`,
                      `Yancy Tear`
                    ][e2 - 1],
                    job: [
                      `Quality Control Specialist`,
                      `Desktop Support Technician`,
                      `Tax Accountant`,
                      `Office Assistant I`,
                      `Community Outreach Specialist`
                    ][e2 - 1],
                    company: [
                      `Littel, Schaden and Vandervort`,
                      `Zemlak, Daniel and Leannon`,
                      `Carroll Group`,
                      `Rowe-Schoen`,
                      `Wyman-Ledner`
                    ][e2 - 1],
                    location: [
                      `Canada`,
                      `United States`,
                      `China`,
                      `Russia`,
                      `Brazil`
                    ][e2 - 1],
                    last: [
                      `12/16/2020`,
                      `12/5/2020`,
                      `8/15/2020`,
                      `3/25/2021`,
                      `5/22/2020`
                    ][e2 - 1],
                    color: [
                      `Blue`,
                      `Purple`,
                      `Red`,
                      `Crimson`,
                      `Indigo`
                    ][e2 - 1],
                    noEnd: e2
                  }))
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="overflow-x-auto h-96 w-96">
  <Table
    size="xs"
    pinRows
    pinCols
    columns={[
      { title: '#', dataIndex: 'no', fixedCol: true },
      { title: 'Name', dataIndex: 'name' },
      { title: 'Job', dataIndex: 'job' },
      { title: 'company', dataIndex: 'company' },
      { title: 'location', dataIndex: 'location' },
      { title: 'Last Login', dataIndex: 'last' },
      { title: 'Favorite Color', dataIndex: 'color' },
      { title: '#', dataIndex: 'noEnd', fixedCol: true },
    ]}
    dataSource={[1, 2, 3, 4, 5].map(i => ({
      key: String(i),
      no: i,
      name: ['Cy Ganderton', 'Hart Hagerty', 'Brice Swyre', 'Marjy Ferencz', 'Yancy Tear'][i - 1],
      job: [
        'Quality Control Specialist',
        'Desktop Support Technician',
        'Tax Accountant',
        'Office Assistant I',
        'Community Outreach Specialist',
      ][i - 1],
      company: [
        'Littel, Schaden and Vandervort',
        'Zemlak, Daniel and Leannon',
        'Carroll Group',
        'Rowe-Schoen',
        'Wyman-Ledner',
      ][i - 1],
      location: ['Canada', 'United States', 'China', 'Russia', 'Brazil'][i - 1],
      last: ['12/16/2020', '12/5/2020', '8/15/2020', '3/25/2021', '5/22/2020'][i - 1],
      color: ['Blue', 'Purple', 'Red', 'Crimson', 'Indigo'][i - 1],
      noEnd: i,
    }))}
  />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Nn, Ln, Rn);
          });
          let zn = h(`div`);
          c(s3, zn), e(zn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Bn = h(`h2`);
          c(zn, Bn), e(Bn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Bn, o(`# \u53EF\u9009\u62E9`));
          let Vn = g(`rue:component:start`), Hn = g(`rue:component:end`);
          c(zn, Vn), c(zn, Hn), p(() => {
            u(y(S, {
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
            }), zn, Vn, Hn);
          });
          let Un = g(`rue:slot:start`), Wn = g(`rue:slot:end`);
          c(zn, Un), c(zn, Wn), p(() => {
            u(v(ne.value === `preview` ? f(() => {
              let n4 = l(), i2 = h(`div`);
              c(n4, i2), e(i2, `overflow-x-auto`);
              let a2 = h(`div`);
              c(i2, a2), e(a2, `mb-2 flex items-center gap-2`);
              let s4 = h(`span`);
              c(a2, s4), e(s4, `text-sm`), c(s4, o(`\u5DF2\u9009\uFF1A `));
              let f2 = t(s4);
              c(s4, f2), p(() => {
                r(f2, (() => {
                  let e2 = (z == null ? void 0 : z.value) || [];
                  return Array.isArray(e2) && e2.length > 0 ? String(e2.join(`, `)) : `\u65E0`;
                })());
              });
              let m3 = h(`button`);
              c(a2, m3), e(m3, `btn btn-ghost btn-xs`), d(m3, `click`, () => z.value = [
                `1`
              ]), c(m3, o(`\u9009\u4E2D1`));
              let _4 = h(`button`);
              c(a2, _4), e(_4, `btn btn-ghost btn-xs`), d(_4, `click`, () => z.value = [
                `1`,
                `3`
              ]), c(_4, o(`\u9009\u4E2D1,3`));
              let v2 = h(`button`);
              c(a2, v2), e(v2, `btn btn-ghost btn-xs`), d(v2, `click`, () => z.value = []), c(v2, o(`\u6E05\u7A7A`));
              let b2 = g(`rue:component:start`), x3 = g(`rue:component:end`);
              return c(i2, b2), c(i2, x3), p(() => {
                u(y(T, {
                  className: `w-full`,
                  rowSelection: {
                    selectedRowKeys: z.value,
                    onChange: (e2) => z.value = e2
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 22,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    }
                  ]
                }), i2, b2, x3);
              }), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const selected = ref<Array<string | number>>(['2'])

<div className="overflow-x-auto">
  <div className="mb-2 flex items-center gap-2">
    <span className="text-sm">\u5DF2\u9009\uFF1A{selected.value.length ? selected.value.join(', ') : '\u65E0'}</span>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = ['1'])}>\u9009\u4E2D1</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = ['1','3'])}>\u9009\u4E2D1,3</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = [])}>\u6E05\u7A7A</button>
  </div>
  <Table
    className="w-full"
    rowSelection={{ selectedRowKeys: selected.value, onChange: (keys) => (selected.value = keys) }}
    columns={[
      { title: '\u59D3\u540D', dataIndex: 'name' },
      { title: '\u5E74\u9F84', dataIndex: 'age' },
      { title: '\u4F4F\u5740', dataIndex: 'address' },
    ]}
    dataSource={[
      { key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' },
      { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' },
      { key: '3', name: '\u738B\u4E8C', age: 22, address: '\u9AD8\u6D1E\u67512\u53F7' },
    ]}
  />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), zn, Un, Wn);
          });
          let Gn = h(`div`);
          c(s3, Gn), e(Gn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Kn = h(`h2`);
          c(Gn, Kn), e(Kn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Kn, o(`# \u53EF\u9009\u62E9\uFF08\u5355\u9009\uFF09`));
          let qn = g(`rue:component:start`), Jn = g(`rue:component:end`);
          c(Gn, qn), c(Gn, Jn), p(() => {
            u(y(S, {
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
              activeKey: E.value,
              onChange: (e2) => E.value = e2,
              className: `mb-3`
            }), Gn, qn, Jn);
          });
          let Yn = g(`rue:slot:start`), Xn = g(`rue:slot:end`);
          c(Gn, Yn), c(Gn, Xn), p(() => {
            u(v(E.value === `preview` ? f(() => {
              let n4 = l(), i2 = h(`div`);
              c(n4, i2), e(i2, `overflow-x-auto`);
              let a2 = h(`div`);
              c(i2, a2), e(a2, `mb-2 flex items-center gap-2`);
              let s4 = h(`span`);
              c(a2, s4), e(s4, `text-sm`), c(s4, o(`\u5DF2\u9009\uFF1A`));
              let f2 = t(s4);
              c(s4, f2), p(() => {
                r(f2, B.value == null ? `\u65E0` : String(B.value));
              });
              let m3 = h(`button`);
              c(a2, m3), e(m3, `btn btn-ghost btn-xs`), d(m3, `click`, () => B.value = `1`), c(m3, o(`\u9009\u4E2D1`));
              let _4 = h(`button`);
              c(a2, _4), e(_4, `btn btn-ghost btn-xs`), d(_4, `click`, () => B.value = `3`), c(_4, o(`\u9009\u4E2D3`));
              let v2 = h(`button`);
              c(a2, v2), e(v2, `btn btn-ghost btn-xs`), d(v2, `click`, () => B.value = null), c(v2, o(`\u6E05\u7A7A`));
              let b2 = g(`rue:component:start`), x3 = g(`rue:component:end`);
              return c(i2, b2), c(i2, x3), p(() => {
                u(y(T, {
                  className: `w-full`,
                  rowSelection: {
                    type: `radio`,
                    selectedRowKeys: B.value == null ? [] : [
                      B.value
                    ],
                    onChange: (e2) => B.value = e2[0] ?? null
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E8C`,
                      age: 22,
                      address: `\u9AD8\u6D1E\u67512\u53F7`
                    }
                  ]
                }), i2, b2, x3);
              }), {
                vaporElement: n4
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const selected = ref<string | number | null>('2')

<div className="overflow-x-auto">
  <div className="mb-2 flex items-center gap-2">
    <span className="text-sm">\u5DF2\u9009\uFF1A{selected.value != null ? String(selected.value) : '\u65E0'}</span>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = '1')}>\u9009\u4E2D1</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = '3')}>\u9009\u4E2D3</button>
    <button className="btn btn-ghost btn-xs" onClick={() => (selected.value = null)}>\u6E05\u7A7A</button>
  </div>
  <Table
    className="w-full"
    rowSelection={{ type: 'radio', selectedRowKeys: selected.value != null ? [selected.value] : [], onChange: (keys) => (selected.value = keys[0] ?? null) }}
    columns={[{ title: '\u59D3\u540D', dataIndex: 'name' }, { title: '\u5E74\u9F84', dataIndex: 'age' }, { title: '\u4F4F\u5740', dataIndex: 'address' }]}
    dataSource={[{ key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' }, { key: '3', name: '\u738B\u4E8C', age: 22, address: '\u9AD8\u6D1E\u67512\u53F7' }]}
  />
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Gn, Yn, Xn);
          });
          let Zn = h(`div`);
          c(s3, Zn), e(Zn, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Qn = h(`h2`);
          c(Zn, Qn), e(Qn, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(Qn, o(`# \u6392\u5E8F`));
          let $n = g(`rue:component:start`), er = g(`rue:component:end`);
          c(Zn, $n), c(Zn, er), p(() => {
            u(y(S, {
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
              activeKey: D.value,
              onChange: (e2) => D.value = e2,
              className: `mb-3`
            }), Zn, $n, er);
          });
          let tr = g(`rue:slot:start`), nr = g(`rue:slot:end`);
          c(Zn, tr), c(Zn, nr), p(() => {
            u(v(D.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`,
                      sorter: true,
                      sortOrder: ge.value
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    }
                  ],
                  onChange: (e2, t3, n5, r3) => {
                    (r3 == null ? void 0 : r3.action) === `sort` && (ge.value = (n5 == null ? void 0 : n5.order) ?? null);
                  }
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const sortOrder = ref<'ascend' | 'descend' | null>('ascend')

<Table
  columns={[
    { title: '\u59D3\u540D', dataIndex: 'name', sorter: true, sortOrder: sortOrder.value },
    { title: '\u5E74\u9F84', dataIndex: 'age' },
    { title: '\u4F4F\u5740', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '2', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' },
  ]}
  onChange={(pagination, filters, sorter, extra) => {
    if (extra?.action === 'sort') sortOrder.value = sorter?.order ?? null
  }}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Zn, tr, nr);
          });
          let rr = h(`div`);
          c(s3, rr), e(rr, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ir = h(`h2`);
          c(rr, ir), e(ir, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(ir, o(`# \u53EF\u5C55\u5F00`));
          let ar = g(`rue:component:start`), or = g(`rue:component:end`);
          c(rr, ar), c(rr, or), p(() => {
            u(y(S, {
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
            }), rr, ar, or);
          });
          let sr = g(`rue:slot:start`), cr = g(`rue:slot:end`);
          c(rr, sr), c(rr, cr), p(() => {
            u(v(re.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  expandable: {
                    defaultExpandAllRows: false,
                    expandedRowRender: (e2) => b(`div`, {
                      className: `p-3`,
                      children: [
                        `\u66F4\u591A\u4FE1\u606F\uFF1A`,
                        e2.name
                      ]
                    })
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5C0F\u660E`,
                      age: 32,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    },
                    {
                      key: `2`,
                      name: `\u5C0F\u7EA2`,
                      age: 42,
                      address: `\u9AD8\u6D1E\u67511\u53F7`
                    }
                  ]
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  expandable={{ defaultExpandAllRows: true, expandedRowRender: (r: any) => <div className="p-3">\u66F4\u591A\u4FE1\u606F\uFF1A{r.name}</div> }}
  columns={[
    { title: '\u59D3\u540D', dataIndex: 'name' },
    { title: '\u5E74\u9F84', dataIndex: 'age' },
    { title: '\u4F4F\u5740', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: '\u5C0F\u660E', age: 32, address: '\u9AD8\u6D1E\u67511\u53F7' },
    { key: '2', name: '\u5C0F\u7EA2', age: 42, address: '\u9AD8\u6D1E\u67511\u53F7' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), rr, sr, cr);
          });
          let lr = h(`div`);
          c(s3, lr), e(lr, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let ur = h(`h2`);
          c(lr, ur), e(ur, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(ur, o(`# \u5206\u9875\u8BBE\u7F6E`));
          let dr = g(`rue:component:start`), fr = g(`rue:component:end`);
          c(lr, dr), c(lr, fr), p(() => {
            u(y(S, {
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
              activeKey: O.value,
              onChange: (e2) => O.value = e2,
              className: `mb-3`
            }), lr, dr, fr);
          });
          let pr = g(`rue:slot:start`), mr = g(`rue:slot:end`);
          c(lr, pr), c(lr, mr), p(() => {
            u(v(O.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  className: `w-full`,
                  pagination: {
                    current: pe.value,
                    pageSize: 2,
                    onChange: (e2) => pe.value = e2
                  },
                  columns: [
                    {
                      title: `\u59D3\u540D`,
                      dataIndex: `name`
                    },
                    {
                      title: `\u5E74\u9F84`,
                      dataIndex: `age`
                    },
                    {
                      title: `\u4F4F\u5740`,
                      dataIndex: `address`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      name: `\u5F20\u4E09`,
                      age: 23,
                      address: `\u676D\u5DDE`
                    },
                    {
                      key: `2`,
                      name: `\u674E\u56DB`,
                      age: 28,
                      address: `\u4E0A\u6D77`
                    },
                    {
                      key: `3`,
                      name: `\u738B\u4E94`,
                      age: 30,
                      address: `\u5317\u4EAC`
                    },
                    {
                      key: `4`,
                      name: `\u8D75\u516D`,
                      age: 25,
                      address: `\u6DF1\u5733`
                    }
                  ]
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `const page = ref(1)

<Table
  pagination={{ current: page.value, pageSize: 2, onChange: (p) => (page.value = p) }}
  columns={[
    { title: '\u59D3\u540D', dataIndex: 'name' },
    { title: '\u5E74\u9F84', dataIndex: 'age' },
    { title: '\u4F4F\u5740', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: '\u5F20\u4E09', age: 23, address: '\u676D\u5DDE' },
    { key: '2', name: '\u674E\u56DB', age: 28, address: '\u4E0A\u6D77' },
    { key: '3', name: '\u738B\u4E94', age: 30, address: '\u5317\u4EAC' },
    { key: '4', name: '\u8D75\u516D', age: 25, address: '\u6DF1\u5733' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), lr, pr, mr);
          });
          let hr = h(`div`);
          c(s3, hr), e(hr, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let gr = h(`h2`);
          c(hr, gr), e(gr, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(gr, o(`# Table zebra`));
          let _r = g(`rue:component:start`), vr = g(`rue:component:end`);
          c(hr, _r), c(hr, vr), p(() => {
            u(y(S, {
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
              activeKey: k.value,
              onChange: (e2) => k.value = e2,
              className: `mb-3`
            }), hr, _r, vr);
          });
          let yr = g(`rue:slot:start`), br = g(`rue:slot:end`);
          c(hr, yr), c(hr, br), p(() => {
            u(v(k.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  zebra: true,
                  className: `w-full`,
                  columns: [
                    {
                      title: `No.`,
                      dataIndex: `no`
                    },
                    {
                      title: `Name`,
                      dataIndex: `name`
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`
                    },
                    {
                      title: `Favorite Color`,
                      dataIndex: `color`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      no: 1,
                      name: `Cy Ganderton`,
                      job: `Quality Control Specialist`,
                      color: `Blue`
                    },
                    {
                      key: `2`,
                      no: 2,
                      name: `Hart Hagerty`,
                      job: `Desktop Support Technician`,
                      color: `Purple`
                    },
                    {
                      key: `3`,
                      no: 3,
                      name: `Brice Swyre`,
                      job: `Tax Accountant`,
                      color: `Red`
                    }
                  ]
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  zebra
  className="w-full"
  columns={[
    { title: 'No.', dataIndex: 'no' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Job', dataIndex: 'job' },
    { title: 'Favorite Color', dataIndex: 'color' },
  ]}
  dataSource={[
    { key: '1', no: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
    { key: '2', no: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', color: 'Purple' },
    { key: '3', no: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), hr, yr, br);
          });
          let $ = h(`div`);
          c(s3, $), e($, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let xr = h(`h2`);
          c($, xr), e(xr, `component-preview-title mt-2 mb-1 text-lg font-semibold`), c(xr, o(`# Table xs`));
          let Sr = g(`rue:component:start`), Cr = g(`rue:component:end`);
          c($, Sr), c($, Cr), p(() => {
            u(y(S, {
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
              activeKey: A.value,
              onChange: (e2) => A.value = e2,
              className: `mb-3`
            }), $, Sr, Cr);
          });
          let wr = g(`rue:slot:start`), Tr = g(`rue:slot:end`);
          return c($, wr), c($, Tr), p(() => {
            u(v(A.value === `preview` ? f(() => {
              let t2 = l(), n4 = h(`div`);
              c(t2, n4), e(n4, `overflow-x-auto`);
              let r2 = g(`rue:component:start`), i2 = g(`rue:component:end`);
              return c(n4, r2), c(n4, i2), p(() => {
                u(y(T, {
                  size: `xs`,
                  className: `w-full`,
                  columns: [
                    {
                      title: `#`,
                      dataIndex: `no`
                    },
                    {
                      title: `Name`,
                      dataIndex: `name`
                    },
                    {
                      title: `Job`,
                      dataIndex: `job`
                    },
                    {
                      title: `company`,
                      dataIndex: `company`
                    },
                    {
                      title: `location`,
                      dataIndex: `location`
                    },
                    {
                      title: `Last Login`,
                      dataIndex: `last`
                    },
                    {
                      title: `Favorite Color`,
                      dataIndex: `color`
                    }
                  ],
                  dataSource: [
                    {
                      key: `1`,
                      no: 1,
                      name: `Cy Ganderton`,
                      job: `Quality Control Specialist`,
                      company: `Littel, Schaden and Vandervort`,
                      location: `Canada`,
                      last: `12/16/2020`,
                      color: `Blue`
                    },
                    {
                      key: `2`,
                      no: 2,
                      name: `Hart Hagerty`,
                      job: `Desktop Support Technician`,
                      company: `Zemlak, Daniel and Leannon`,
                      location: `United States`,
                      last: `12/5/2020`,
                      color: `Purple`
                    },
                    {
                      key: `3`,
                      no: 3,
                      name: `Brice Swyre`,
                      job: `Tax Accountant`,
                      company: `Carroll Group`,
                      location: `China`,
                      last: `8/15/2020`,
                      color: `Red`
                    },
                    {
                      key: `4`,
                      no: 4,
                      name: `Marjy Ferencz`,
                      job: `Office Assistant I`,
                      company: `Rowe-Schoen`,
                      location: `Russia`,
                      last: `3/25/2021`,
                      color: `Crimson`
                    },
                    {
                      key: `5`,
                      no: 5,
                      name: `Yancy Tear`,
                      job: `Community Outreach Specialist`,
                      company: `Wyman-Ledner`,
                      location: `Brazil`,
                      last: `5/22/2020`,
                      color: `Indigo`
                    },
                    {
                      key: `6`,
                      no: 6,
                      name: `Irma Vasilik`,
                      job: `Editor`,
                      company: `Wiza, Bins and Emard`,
                      location: `Venezuela`,
                      last: `12/8/2020`,
                      color: `Purple`
                    },
                    {
                      key: `7`,
                      no: 7,
                      name: `Meghann Durtnal`,
                      job: `Staff Accountant IV`,
                      company: `Schuster-Schimmel`,
                      location: `Philippines`,
                      last: `2/17/2021`,
                      color: `Yellow`
                    },
                    {
                      key: `8`,
                      no: 8,
                      name: `Sammy Seston`,
                      job: `Accountant I`,
                      company: `O'Hara, Welch and Keebler`,
                      location: `Indonesia`,
                      last: `5/23/2020`,
                      color: `Crimson`
                    },
                    {
                      key: `9`,
                      no: 9,
                      name: `Lesya Tinham`,
                      job: `Safety Technician IV`,
                      company: `Turner-Kuhlman`,
                      location: `Philippines`,
                      last: `2/21/2021`,
                      color: `Maroon`
                    },
                    {
                      key: `10`,
                      no: 10,
                      name: `Zaneta Tewkesbury`,
                      job: `VP Marketing`,
                      company: `Sauer LLC`,
                      location: `Chad`,
                      last: `6/23/2020`,
                      color: `Green`
                    },
                    {
                      key: `11`,
                      no: 11,
                      name: `Andy Tipple`,
                      job: `Librarian`,
                      company: `Hilpert Group`,
                      location: `Poland`,
                      last: `7/9/2020`,
                      color: `Indigo`
                    },
                    {
                      key: `12`,
                      no: 12,
                      name: `Sophi Biles`,
                      job: `Recruiting Manager`,
                      company: `Gutmann Inc`,
                      location: `Indonesia`,
                      last: `2/12/2021`,
                      color: `Maroon`
                    },
                    {
                      key: `13`,
                      no: 13,
                      name: `Florida Garces`,
                      job: `Web Developer IV`,
                      company: `Gaylord, Pacocha and Baumbach`,
                      location: `Poland`,
                      last: `5/31/2020`,
                      color: `Purple`
                    },
                    {
                      key: `14`,
                      no: 14,
                      name: `Maribeth Popping`,
                      job: `Analyst Programmer`,
                      company: `Deckow-Pouros`,
                      location: `Portugal`,
                      last: `4/27/2021`,
                      color: `Aquamarine`
                    },
                    {
                      key: `15`,
                      no: 15,
                      name: `Moritz Dryburgh`,
                      job: `Dental Hygienist`,
                      company: `Schiller, Cole and Hackett`,
                      location: `Sri Lanka`,
                      last: `8/8/2020`,
                      color: `Crimson`
                    },
                    {
                      key: `16`,
                      no: 16,
                      name: `Reid Semiras`,
                      job: `Teacher`,
                      company: `Sporer, Sipes and Rogahn`,
                      location: `Poland`,
                      last: `7/30/2020`,
                      color: `Green`
                    },
                    {
                      key: `17`,
                      no: 17,
                      name: `Alec Lethby`,
                      job: `Teacher`,
                      company: `Reichel, Glover and Hamill`,
                      location: `China`,
                      last: `2/28/2021`,
                      color: `Khaki`
                    },
                    {
                      key: `18`,
                      no: 18,
                      name: `Aland Wilber`,
                      job: `Quality Control Specialist`,
                      company: `Kshlerin, Rogahn and Swaniawski`,
                      location: `Czech Republic`,
                      last: `9/29/2020`,
                      color: `Purple`
                    },
                    {
                      key: `19`,
                      no: 19,
                      name: `Teddie Duerden`,
                      job: `Staff Accountant III`,
                      company: `Pouros, Ullrich and Windler`,
                      location: `France`,
                      last: `10/27/2020`,
                      color: `Aquamarine`
                    },
                    {
                      key: `20`,
                      no: 20,
                      name: `Lorelei Blackstone`,
                      job: `Data Coordinator`,
                      company: `Witting, Kutch and Greenfelder`,
                      location: `Kazakhstan`,
                      last: `6/3/2020`,
                      color: `Red`
                    }
                  ]
                }), n4, r2, i2);
              }), {
                vaporElement: t2
              };
            }) : f(() => {
              let e2 = l(), t2 = g(`rue:component:start`), n4 = g(`rue:component:end`);
              return c(e2, t2), c(e2, n4), p(() => {
                u(y(C, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Table
  size="xs"
  className="w-full"
  columns={[
    { title: '#', dataIndex: 'no' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Job', dataIndex: 'job' },
    { title: 'company', dataIndex: 'company' },
    { title: 'location', dataIndex: 'location' },
    { title: 'Last Login', dataIndex: 'last' },
    { title: 'Favorite Color', dataIndex: 'color' },
  ]}
  dataSource={[
    { key: '1', no: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', company: 'Littel, Schaden and Vandervort', location: 'Canada', last: '12/16/2020', color: 'Blue' },
    { key: '2', no: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', company: 'Zemlak, Daniel and Leannon', location: 'United States', last: '12/5/2020', color: 'Purple' },
    { key: '3', no: 3, name: 'Brice Swyre', job: 'Tax Accountant', company: 'Carroll Group', location: 'China', last: '8/15/2020', color: 'Red' },
    { key: '4', no: 4, name: 'Marjy Ferencz', job: 'Office Assistant I', company: 'Rowe-Schoen', location: 'Russia', last: '3/25/2021', color: 'Crimson' },
    { key: '5', no: 5, name: 'Yancy Tear', job: 'Community Outreach Specialist', company: 'Wyman-Ledner', location: 'Brazil', last: '5/22/2020', color: 'Indigo' },
    { key: '6', no: 6, name: 'Irma Vasilik', job: 'Editor', company: 'Wiza, Bins and Emard', location: 'Venezuela', last: '12/8/2020', color: 'Purple' },
    { key: '7', no: 7, name: 'Meghann Durtnal', job: 'Staff Accountant IV', company: 'Schuster-Schimmel', location: 'Philippines', last: '2/17/2021', color: 'Yellow' },
    { key: '8', no: 8, name: 'Sammy Seston', job: 'Accountant I', company: "O'Hara, Welch and Keebler", location: 'Indonesia', last: '5/23/2020', color: 'Crimson' },
    { key: '9', no: 9, name: 'Lesya Tinham', job: 'Safety Technician IV', company: 'Turner-Kuhlman', location: 'Philippines', last: '2/21/2021', color: 'Maroon' },
    { key: '10', no: 10, name: 'Zaneta Tewkesbury', job: 'VP Marketing', company: 'Sauer LLC', location: 'Chad', last: '6/23/2020', color: 'Green' },
    { key: '11', no: 11, name: 'Andy Tipple', job: 'Librarian', company: 'Hilpert Group', location: 'Poland', last: '7/9/2020', color: 'Indigo' },
    { key: '12', no: 12, name: 'Sophi Biles', job: 'Recruiting Manager', company: 'Gutmann Inc', location: 'Indonesia', last: '2/12/2021', color: 'Maroon' },
    { key: '13', no: 13, name: 'Florida Garces', job: 'Web Developer IV', company: 'Gaylord, Pacocha and Baumbach', location: 'Poland', last: '5/31/2020', color: 'Purple' },
    { key: '14', no: 14, name: 'Maribeth Popping', job: 'Analyst Programmer', company: 'Deckow-Pouros', location: 'Portugal', last: '4/27/2021', color: 'Aquamarine' },
    { key: '15', no: 15, name: 'Moritz Dryburgh', job: 'Dental Hygienist', company: 'Schiller, Cole and Hackett', location: 'Sri Lanka', last: '8/8/2020', color: 'Crimson' },
    { key: '16', no: 16, name: 'Reid Semiras', job: 'Teacher', company: 'Sporer, Sipes and Rogahn', location: 'Poland', last: '7/30/2020', color: 'Green' },
    { key: '17', no: 17, name: 'Alec Lethby', job: 'Teacher', company: 'Reichel, Glover and Hamill', location: 'China', last: '2/28/2021', color: 'Khaki' },
    { key: '18', no: 18, name: 'Aland Wilber', job: 'Quality Control Specialist', company: 'Kshlerin, Rogahn and Swaniawski', location: 'Czech Republic', last: '9/29/2020', color: 'Purple' },
    { key: '19', no: 19, name: 'Teddie Duerden', job: 'Staff Accountant III', company: 'Pouros, Ullrich and Windler', location: 'France', last: '10/27/2020', color: 'Aquamarine' },
    { key: '20', no: 20, name: 'Lorelei Blackstone', job: 'Data Coordinator', company: 'Witting, Kutch and Greenfelder', location: 'Kazakhstan', last: '6/3/2020', color: 'Red' },
  ]}
/>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), $, wr, Tr);
          }), {
            vaporElement: n3
          };
        })
      }), n2, s2, _2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  te as default
};

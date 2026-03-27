import { A as e, C as t, D as n, E as r, G as i, I as a, O as o, P as s, S as c, T as l, U as u, W as d, _ as f, b as p, f as m, g as h, i as g, l as _, m as v, q as y, t as b, u as x, v as S, w as C, x as w, y as T, z as E, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { t as D, __tla as __tla_1 } from "./BaseTransition-BHDYj6x4.js";
import { n as O, __tla as __tla_2 } from "./vapor-runtime-DlsvThgv.js";
import { o as k, s as A, __tla as __tla_3 } from "./src-Ba80c3lX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as j, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
import { t as M, __tla as __tla_6 } from "./SidebarPlaygroundExample-BuS2tx3s.js";
let L;
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
  var N = (e2) => e2 ? typeof e2 == `string` ? r(e2 === `body` ? `body` : e2) : e2 : null;
  const P = (e2) => {
    let t2 = null, r2, i2 = T(`rue-teleport-start`), o2 = T(`rue-teleport-end`), c2 = () => g(`fragment`, null, ...(Array.isArray(e2.children) ? e2.children : [
      e2.children
    ]).filter((e3) => e3 != null)), u2 = () => {
      let e3 = i2.nextSibling || null;
      for (; e3 && e3 !== o2; ) {
        if (e3.nodeType !== 8) return true;
        e3 = e3.nextSibling || null;
      }
      return false;
    }, d2 = (e3) => {
      e3 && m(v(() => ({
        vaporElement: p()
      })), e3, i2, o2);
    }, h2 = (e3) => {
      if (e3) {
        if (!S(e3, i2)) {
          let t3 = p();
          {
            let e4 = i2.nextSibling || null;
            for (; e4 && e4 !== o2; ) {
              let n2 = e4.nextSibling;
              f(t3, e4), e4 = n2;
            }
            let r3 = C(i2);
            r3 && S(r3, i2) && n(r3, i2), r3 && S(r3, o2) && n(r3, o2);
          }
          f(e3, i2), f(e3, o2), l(e3, t3, o2);
        }
        if (m(c2(), e3, i2, o2), !u2()) {
          let t3 = w(`span`);
          a(t3, `[Teleport] fallback: empty region after renderBetween`), s(t3, {
            display: `contents`
          }), l(e3, t3, o2);
        }
      }
    };
    return _(() => {
      t2 = e2.disabled ? null : N(e2.to), h2(t2);
      let a2 = y(() => {
        e2.children;
        let r3 = e2.disabled ? null : N(e2.to);
        r3 !== t2 && (!r3 && t2 && (d2(t2), S(t2, i2) && n(t2, i2), S(t2, o2) && n(t2, o2)), t2 = r3), h2(t2);
      });
      r2 = () => a2.dispose();
    }), x(() => {
      r2 && r2(), t2 && (d2(t2), S(t2, i2) && n(t2, i2), S(t2, o2) && n(t2, o2));
    }), g(`fragment`, null, e2.disabled ? e2.children : null);
  }, F = (e2) => {
    let t2 = w(`span`);
    t2.style.display = `contents`;
    let n2 = T(`rue-transition-start`), r2 = T(`rue-transition-end`), { runEnter: i2, runLeave: a2 } = D(e2), o2 = false;
    function s2() {
      let e3 = n2.nextSibling || null;
      for (; e3 && e3 !== r2; ) {
        if (e3.nodeType === 1) return e3;
        e3 = e3.nextSibling || null;
      }
      return null;
    }
    function c2() {
      m(v(() => ({
        vaporElement: p()
      })), t2, n2, r2);
    }
    return _(() => {
      f(t2, n2), f(t2, r2), y(() => {
        let l2 = e2.children, u2 = null;
        u2 = Array.isArray(l2) ? l2[0] ?? null : l2;
        let d2 = !!u2;
        if (d2) {
          m(u2, t2, n2, r2);
          let a3 = s2();
          a3 && i2(a3, !o2 && e2.appear ? `appear` : `enter`);
        } else if (o2) {
          let e3 = s2();
          e3 ? a2(e3, () => c2()) : c2();
        } else c2();
        o2 = d2;
      });
    }), x(() => {
    }), v(() => ({
      vaporElement: t2
    }));
  };
  let I;
  I = (e2) => {
    let { content: t2 } = i(`useSetup:0:0`, () => u(() => (_(() => {
      let t3 = (t4) => {
        t4.key === `Escape` && e2.visible && e2.onClose && e2.onClose();
      }, n2 = globalThis.addEventListener;
      typeof n2 == `function` && n2(`keydown`, t3), x(() => {
        let e3 = globalThis.removeEventListener;
        typeof e3 == `function` && e3(`keydown`, t3);
      });
    }), {
      content: A(b, {
        children: [
          k(`style`, {
            children: `
/* Modal styles (Transition-driven) */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 300ms ease;
  opacity: 1;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  backface-visibility: hidden;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/* Transition classes for modal */
.modal-enter-active, .modal-leave-active { transition: opacity 300ms ease; }
.modal-enter-from { opacity: 0; }
.modal-leave-to { opacity: 0; }

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 600ms ease, opacity 600ms ease;
  will-change: transform, opacity;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(2.5);
  opacity: 0.70;
}
`
          }),
          e2.visible ? A(F, {
            name: `modal`,
            type: `transition`,
            duration: {
              enter: 1220,
              leave: 2200
            },
            appear: true,
            children: [
              k(`div`, {
                className: `modal-mask`,
                onClick: () => {
                  e2.onClose && e2.onClose();
                },
                children: A(`div`, {
                  className: `modal-container`,
                  onClick: (e3) => {
                    e3.stopPropagation();
                  },
                  children: [
                    k(`div`, {
                      className: `modal-header`,
                      children: e2.header ?? k(`h3`, {
                        children: `default header`
                      })
                    }),
                    k(`div`, {
                      className: `modal-body`,
                      children: e2.body ?? k(`p`, {
                        children: `default body`
                      })
                    }),
                    k(`div`, {
                      className: `modal-footer`,
                      children: e2.footer ?? A(`fragment`, {
                        children: [
                          `default footer`,
                          k(`button`, {
                            className: `modal-default-button`,
                            onClick: () => {
                              e2.onClose && e2.onClose();
                            },
                            children: `OK`
                          })
                        ]
                      })
                    })
                  ]
                })
              }),
              ` `
            ]
          }) : null
        ]
      })
    })));
    return v(() => {
      let n2 = p(), r2 = T(`rue:component:start`), i2 = T(`rue:component:end`);
      f(n2, r2), f(n2, i2);
      let a2 = v(() => {
        let e3 = p(), n3 = T(`rue:slot:start`), r3 = T(`rue:slot:end`);
        return f(e3, n3), f(e3, r3), y(() => {
          m(O(t2), e3, n3, r3);
        }), {
          vaporElement: e3
        };
      });
      return y(() => {
        m(k(P, {
          to: e2.to ?? `body`,
          children: a2
        }), n2, r2, i2);
      }), {
        vaporElement: n2
      };
    });
  };
  L = () => {
    let { visibleModal: n2, setVisibleModal: r2, activeTab: s2 } = i(`useSetup:0:0`, () => u(() => {
      let [e2, t2] = i(`useState:1:0`, () => d(false));
      return {
        visibleModal: e2,
        setVisibleModal: t2,
        activeTab: i(`ref:1:1`, () => E(`preview`))
      };
    }));
    return v(() => {
      let i2 = p(), l2 = T(`rue:component:start`), u2 = T(`rue:component:end`);
      return f(i2, l2), f(i2, u2), m(k(M, {
        children: v(() => {
          let i3 = p(), l3 = w(`h1`);
          f(i3, l3), e(l3, `text-5xl font-semibold mb-4 md:mb-4`), f(l3, c(`\u5E26\u8FC7\u6E21\u52A8\u6548\u7684\u6A21\u6001\u6846\uFF08\u79FB\u690D\u81EA Vue\uFF09`));
          let u3 = w(`div`);
          f(i3, u3), o(u3, `role`, `tablist`), e(u3, `tabs tabs-box`);
          let d2 = w(`button`);
          f(u3, d2), o(d2, `role`, `tab`), y(() => {
            e(d2, String(`tab ${s2.value === `preview` ? `tab-active` : ``}`));
          }), h(d2, `click`, () => {
            s2.value = `preview`;
          }), f(d2, c(`\u6548\u679C`));
          let g2 = w(`button`);
          f(u3, g2), o(g2, `role`, `tab`), y(() => {
            e(g2, String(`tab ${s2.value === `code` ? `tab-active` : ``}`));
          }), h(g2, `click`, () => {
            s2.value = `code`;
          }), f(g2, c(`\u4EE3\u7801`));
          let _2 = w(`div`);
          f(i3, _2), e(_2, `mt-4 grid md:grid-cols-1 gap-6 items-start`);
          let b2 = T(`rue:slot:start`), x2 = T(`rue:slot:end`);
          f(_2, b2), f(_2, x2), y(() => {
            m(O(s2.value === `code` ? v(() => {
              let t2 = p(), n3 = w(`div`);
              f(t2, n3), e(n3, `card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);
              let r3 = T(`rue:component:start`), i4 = T(`rue:component:end`);
              return f(n3, r3), f(n3, i4), y(() => {
                m(k(j, {
                  className: `h-full`,
                  lang: `tsx`,
                  code: `import { type FC, useState, onMounted, onUnmounted, Transition, Teleport, ref } from 'rues';
            
// Modal component with customizable header/body/footer and CSS transitions
const Modal: FC<{
  visible: boolean;
  onClose?: () => void;
  header?: any;
  body?: any;
  footer?: any;
  to?: string | HTMLElement;
}> = (props) => {
  // \u952E\u76D8 ESC \u5173\u95ED\u652F\u6301
  onMounted(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && props.visible) {
        props.onClose && props.onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    onUnmounted(() => {
      document.removeEventListener('keydown', onKey);
    });
  });

  const content = (
    <>
    <style>{\`
/* Modal styles (Transition-driven) */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 300ms ease;
  opacity: 1;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  backface-visibility: hidden;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/* Transition classes for modal */
.modal-enter-active, .modal-leave-active { transition: opacity 300ms ease; }
.modal-enter-from { opacity: 0; }
.modal-leave-to { opacity: 0; }

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 600ms ease, opacity 600ms ease;
  will-change: transform, opacity;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(2.5);
  opacity: 0.70;
}
\`}</style>

      {props.visible ? (
            <Transition name="modal" type="transition" duration={{ enter: 1220, leave: 2200 }} appear>
        <div className="modal-mask" onClick={() => props.onClose && props.onClose()}>
          <div className="modal-container" onClick={(e: any) => { e.stopPropagation(); }}>
            <div className="modal-header">
              {props.header ?? <h3>default header</h1>}
            </div>
            <div className="modal-body">
              {props.body ?? <p>default body</p>}
            </div>
            <div className="modal-footer">
              {props.footer ?? (
                <>
                  default footer
                  <button className="modal-default-button" onClick={() => props.onClose && props.onClose()}>OK</button>
                </>
              )}
            </div>
          </div>
        </div>    </Transition>
      ) : null} 

      </>
  );

  return props.to ? (<Teleport to={props.to}>{content}</Teleport>) : (<Teleport to={document.body as any}>{content}</Teleport>);
};   

const ModalExample: FC = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <button
          id="visible-modal"
          className="btn btn-primary w-fit"
          onClick={() => setVisibleModal(true)}
        >
          Visible Modal
        </button>
        {/* Teleport \u5230 body */}
        <Modal
          visible={visibleModal.value}
          onClose={() => setVisibleModal(false)}
          header={<h3>Custom Header</h1>}
          body={<p>Custom body content here...</p>}
          to="body"
        />
      </div>
    </div>
  );
};

export default ModalExample;`
                }), n3, r3, i4);
              }), {
                vaporElement: t2
              };
            }) : ``), _2, b2, x2);
          }), f(_2, c(` `));
          let S2 = T(`rue:slot:start`), C2 = T(`rue:slot:end`);
          return f(_2, S2), f(_2, C2), y(() => {
            m(O(s2.value === `preview` ? v(() => {
              let i4 = p(), s3 = w(`div`);
              f(i4, s3), e(s3, `card bg-base-100 shadow`);
              let l4 = w(`div`);
              f(s3, l4), e(l4, `card-body grid gap-4`);
              let u4 = w(`button`);
              f(l4, u4), o(u4, `id`, `visible-modal`), e(u4, `btn btn-primary w-fit`), h(u4, `click`, () => r2(true)), f(u4, c(`Visible Modal`)), f(l4, c(` --------`));
              let d3 = t(l4);
              f(l4, d3), y(() => {
                a(d3, n2.value);
              }), f(l4, c(`-------`));
              let g3 = T(`rue:component:start`), _3 = T(`rue:component:end`);
              return f(l4, g3), f(l4, _3), y(() => {
                m(k(I, {
                  visible: n2.value,
                  onClose: () => r2(false),
                  header: k(`h3`, {
                    children: `Custom Header`
                  }),
                  body: k(`p`, {
                    children: `Custom body content here...`
                  }),
                  to: `body`
                }), l4, g3, _3);
              }), {
                vaporElement: i4
              };
            }) : ``), _2, S2, C2);
          }), {
            vaporElement: i3
          };
        })
      }), i2, l2, u2), {
        vaporElement: i2
      };
    });
  };
});
export {
  __tla,
  L as default
};

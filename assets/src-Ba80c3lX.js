import { B as e, U as t, f as n, i as r, m as i, q as a, r as o, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { t as s } from "./general-BmFRDxl1.js";
let v, p, g, c, m, l, _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  c = function(e2, t2, n2) {
    let i2 = n2 === void 0 ? t2 || null : (() => {
      let e3 = {};
      if (t2) for (let n3 in t2) e3[n3] = t2[n3];
      return e3.key = n2, e3;
    })(), a2 = t2 ? t2.children : void 0;
    return Array.isArray(a2) ? r(e2, i2, ...a2) : a2 === void 0 ? r(e2, i2) : r(e2, i2, a2);
  };
  l = c;
  var u = /* @__PURE__ */ new WeakMap(), d = null;
  let f, h;
  f = (e2) => {
    let t2 = o();
    t2 && u.set(t2, e2), d = e2;
  };
  p = () => {
    let e2 = globalThis;
    e2 && e2.location && (e2.location.hash || (e2.location.hash = `#/`));
    let t2 = () => (e2 && e2.location && e2.location.hash ? String(e2.location.hash).replace(/^#/, ``) : ``) || `/`;
    return {
      location: t2,
      push: (n2) => {
        let r2 = n2.startsWith(`#`) ? n2.slice(1) : n2;
        r2 !== t2() && (e2 && e2.location && (e2.location.hash = r2), e2 && e2.dispatchEvent && e2.HashChangeEvent && e2.dispatchEvent(new e2.HashChangeEvent(`hashchange`)));
      },
      replace: (n2) => {
        let r2 = n2.startsWith(`#`) ? n2.slice(1) : n2;
        if (r2 === t2()) return;
        let i2 = `#` + r2;
        e2 && e2.location && typeof e2.location.replace == `function` && e2.location.replace(i2), e2 && e2.dispatchEvent && e2.HashChangeEvent && e2.dispatchEvent(new e2.HashChangeEvent(`hashchange`));
      },
      listen: (t3) => {
        e2 && e2.addEventListener && e2.addEventListener(`hashchange`, t3);
      },
      back: () => {
        e2 && e2.history && typeof e2.history.back == `function` && e2.history.back();
      }
    };
  };
  m = (t2) => {
    let n2 = e(t2.history.location(), {}, true), r2 = (e2) => {
      let t3 = [], n3 = `^` + e2.replace(/\/:([^/()]+)(?:\(([^)]+)\))?/g, (e3, n4, r3) => (t3.push(n4), `/${r3 ? `(${r3})` : `([^/]+)`}`)) + `$`;
      return {
        re: new RegExp(n3),
        keys: t3
      };
    }, i2 = t2.routes.map((e2) => s(e2, {
      _c: r2(e2.path)
    })), a2 = (e2) => {
      for (let t3 = 0; t3 < i2.length; t3++) {
        let n3 = i2[t3], r3 = n3._c.re.exec(e2);
        if (r3) {
          let t4 = {};
          return n3._c.keys.forEach((e3, n4) => {
            t4[e3] = decodeURIComponent(r3[n4 + 1] || ``);
          }), {
            record: n3,
            params: t4,
            path: e2
          };
        }
      }
      return null;
    }, o2 = a2(n2.get());
    if (o2 === null) throw Error(`No route matched path ` + n2.get());
    let c2 = e(o2, {}, true);
    t2.history.listen(() => {
      let e2 = t2.history.location();
      if (e2 === n2.get()) return;
      let r3 = a2(e2);
      if (r3 === null) throw Error(`No route matched path ` + e2);
      n2.set(e2), c2.set(r3);
    });
    let l2 = {
      currentPath: n2,
      route: c2,
      push: (e2) => t2.history.push(e2),
      replace: (e2) => t2.history.replace(e2),
      back: () => {
        if (t2.history.back) return t2.history.back();
        let e2 = globalThis;
        e2.history && typeof e2.history.back == `function` && e2.history.back();
      },
      routes: t2.routes,
      history: t2.history,
      install: (e2, t3) => {
        f(l2);
      }
    };
    return l2;
  };
  h = () => {
    let e2 = o(), t2 = e2 && u.get(e2) || d;
    if (!t2) throw Error(`Router not installed for current application/container`);
    return t2;
  };
  g = () => {
    let { container: e2 } = t(() => {
      let e3 = h(), t2 = document.createDocumentFragment(), o2 = document.createComment(`rue-router-view-start`), s2 = document.createComment(`rue-router-view-end`);
      t2.appendChild(o2), t2.appendChild(s2);
      let c2 = () => {
        n(i(() => ({
          vaporElement: document.createDocumentFragment()
        })), o2.parentNode || t2, o2, s2);
      }, l2 = null;
      return a(() => {
        let i2 = e3.route.get();
        if (!i2) c2(), l2 = null;
        else {
          let e4 = i2.record.component;
          if (l2 && e4 === l2) return;
          l2 = e4, n(r(e4, {
            params: i2.params
          }), o2.parentNode || t2, o2, s2);
        }
      }), {
        container: t2
      };
    });
    return i(() => ({
      vaporElement: e2
    }));
  };
  _ = (e2) => {
    let { container: s2 } = t(() => {
      let t2 = o(), i2 = t2 && u.get(t2) || d;
      if (!i2) throw Error(`Router not installed for current application/container`);
      let s3 = document.createDocumentFragment(), c2 = document.createComment(`rue-router-link-start`), l2 = document.createComment(`rue-router-link-end`);
      return s3.appendChild(c2), s3.appendChild(l2), a(() => {
        let t3 = String(e2.to || ``), a2 = !!e2.replace, { children: o2, to: u2, replace: d2, ...f2 } = e2, p2 = (e3) => {
          e3.defaultPrevented || e3.button !== 0 || e3.metaKey || e3.ctrlKey || e3.shiftKey || e3.altKey || (e3.preventDefault(), (a2 ? i2.replace : i2.push)(t3));
        }, m2 = Array.isArray(o2) ? o2 : o2 == null ? [] : [
          o2
        ];
        n(r(`a`, {
          href: `#` + t3,
          onClick: p2,
          ...f2
        }, ...m2), c2.parentNode || s3, c2, l2);
      }), {
        container: s3
      };
    });
    return i(() => ({
      vaporElement: s2
    }));
  };
  v = () => {
    let e2 = o(), t2 = e2 && u.get(e2) || d;
    if (!t2) throw Error(`Router not installed for current application/container`);
    return t2.route;
  };
});
export {
  __tla,
  v as a,
  p as i,
  g as n,
  c as o,
  m as r,
  l as s,
  _ as t
};

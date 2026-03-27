import { D as e, T as t, _ as n, b as r, i, o as a, q as o, v as s, y as c, __tla as __tla_0 } from "./rue-CEPv9khA.js";
let l, u, d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  l = (e2) => e2 == null || typeof e2 == `boolean` ? i(`fragment`, null) : typeof e2 == `object` ? `vaporElement` in e2 ? e2 : Array.isArray(e2) ? i(`fragment`, null, ...e2) : e2.nodeType ? i(`fragment`, null, e2) : e2 : {
    vaporElement: document.createTextNode(String(e2))
  };
  u = (i2) => {
    let { items: a2, getKey: l2, elements: u2, parent: d2, before: f, renderItem: p } = i2, m = /* @__PURE__ */ new Map(), h = f;
    for (let e2 = a2.length - 1; e2 >= 0; e2--) {
      let i3 = a2[e2], f2 = l2(i3, e2), g = u2.get(f2), _, v;
      if (g) _ = g.start, v = g.end;
      else {
        _ = c(`rue:list:item:start`), v = c(`rue:list:item:end`), t(d2, v, h), t(d2, _, v);
        let n2 = {
          start: _,
          end: v
        };
        o(() => {
          p(i3, d2, _, v, e2);
        }), g = n2;
      }
      if (v.nextSibling !== h && h !== _) {
        let e3 = r(), i4 = _;
        for (; i4; ) {
          let t2 = i4.nextSibling;
          if (n(e3, i4), i4 === v) break;
          i4 = t2;
        }
        h && s(d2, h) ? t(d2, e3, h) : n(d2, e3);
      }
      m.set(f2, g), h = _;
    }
    return u2.forEach((t2, n2) => {
      if (!m.has(n2)) {
        let n3 = t2.start.nextSibling || null;
        for (; n3 && n3 !== t2.end; ) {
          let t3 = n3.nextSibling || null;
          s(d2, n3) && e(d2, n3), n3 = t3;
        }
        s(d2, t2.start) && e(d2, t2.start), s(d2, t2.end) && e(d2, t2.end);
      }
    }), u2.clear(), m.forEach((e2, t2) => u2.set(t2, e2)), u2;
  };
  d = (e2, t2) => {
    let n2, r2 = o(() => {
      let r3 = t2(), i2 = n2;
      i2 && i2 !== r3 && (typeof i2 == `function` ? i2(null) : typeof i2 == `object` && `current` in i2 && (i2.current = void 0)), typeof r3 == `function` ? r3(e2) : typeof r3 == `object` && `current` in r3 && (r3.current = e2), n2 = r3;
    });
    return a(() => {
      let e3 = n2;
      e3 && (typeof e3 == `function` ? e3(null) : typeof e3 == `object` && `current` in e3 && (e3.current = void 0));
    }), r2;
  };
});
export {
  __tla,
  l as n,
  u as r,
  d as t
};

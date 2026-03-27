import { n as e, __tla as __tla_0 } from "./rue-CEPv9khA.js";
let n, s, t, c, i, l, d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  t = function(e2, t2) {
    t2 && t2.split(/\s+/).forEach((t3) => t3 && e2.classList.add(t3));
  };
  n = function(e2, t2) {
    t2 && t2.split(/\s+/).forEach((t3) => t3 && e2.classList.remove(t3));
  };
  function r(e2) {
    requestAnimationFrame(() => requestAnimationFrame(e2));
  }
  i = function(e2) {
    return (e2 ? e2.ownerDocument : document).body.offsetHeight;
  };
  function a(e2) {
    return e2 === `auto` ? 0 : e2.split(`,`).map((e3) => e3.trim()).filter(Boolean).map((e3) => e3.endsWith(`ms`) ? parseFloat(e3) : parseFloat(e3) * 1e3).reduce((e3, t2) => e3 + (isNaN(t2) ? 0 : t2), 0);
  }
  function o(e2) {
    return e2 ? e2.split(`,`).map((e3) => e3.trim()).filter(Boolean).map((e3) => {
      let t2 = e3.split(/\s+/), n2 = [];
      for (let e4 of t2) if (/[0-9.]+m?s$/.test(e4)) {
        let t3 = e4.endsWith(`ms`) ? parseFloat(e4) : parseFloat(e4) * 1e3;
        isNaN(t3) || n2.push(t3);
      }
      return (n2[0] || 0) + (n2[1] || 0);
    }).reduce((e3, t2) => e3 + t2, 0) : 0;
  }
  s = function(e2, t2) {
    let n2 = window.getComputedStyle(e2), r2 = a(n2.transitionDuration) + a(n2.transitionDelay), i2 = a(n2.animationDuration) + a(n2.animationDelay);
    if (t2) return t2 === `transition` ? r2 > 0 || o(e2.style.transition) > 0 ? `transition` : null : i2 > 0 || o(e2.style.animation) > 0 ? `animation` : null;
    if (r2 === 0 && i2 === 0) {
      let t3 = o(e2.style.transition), n3 = o(e2.style.animation);
      return t3 === 0 && n3 === 0 ? null : t3 >= n3 ? `transition` : `animation`;
    }
    return r2 >= i2 ? `transition` : `animation`;
  };
  c = function(e2, t2, n2, r2) {
    if (n2 != null) return typeof n2 == `number` ? n2 : r2 === `leave` ? n2.leave : n2.enter;
    let i2 = window.getComputedStyle(e2), s2 = a(i2.transitionDuration) + a(i2.transitionDelay), c2 = a(i2.animationDuration) + a(i2.animationDelay);
    if (s2 === 0 && c2 === 0) {
      let n3 = o(e2.style.transition), r3 = o(e2.style.animation);
      return t2 ? t2 === `transition` ? n3 : r3 : Math.max(n3, r3);
    }
    return t2 ? t2 === `transition` ? s2 : c2 : Math.max(s2, c2);
  };
  l = function(e2, t2, n2, r2) {
    if (!t2 || n2 === 0) {
      r2();
      return;
    }
    let i2 = false, a2 = t2 === `transition` ? `transitionend` : `animationend`, o2 = (t3) => {
      i2 || t3.target === e2 && (i2 = true, e2.removeEventListener(a2, o2), r2());
    };
    e2.addEventListener(a2, o2), setTimeout(() => {
      i2 || (i2 = true, e2.removeEventListener(a2, o2), r2());
    }, n2 + 50);
  };
  function u(e2, t2, n2) {
    return n2 === `appear` ? {
      from: t2.appearFromClass ?? t2.enterFromClass ?? `${e2}-enter-from`,
      active: t2.appearActiveClass ?? t2.enterActiveClass ?? `${e2}-enter-active`,
      to: t2.appearToClass ?? t2.enterToClass ?? `${e2}-enter-to`
    } : n2 === `enter` ? {
      from: t2.enterFromClass ?? `${e2}-enter-from`,
      active: t2.enterActiveClass ?? `${e2}-enter-active`,
      to: t2.enterToClass ?? `${e2}-enter-to`
    } : {
      from: t2.leaveFromClass ?? `${e2}-leave-from`,
      active: t2.leaveActiveClass ?? `${e2}-leave-active`,
      to: t2.leaveToClass ?? `${e2}-leave-to`
    };
  }
  d = function(a2) {
    let o2 = a2.name || `rue`, d2 = a2.css !== false, f = e(a2);
    function p(e2, p2 = `enter`, m2) {
      let h = u(o2, a2, p2);
      a2.onBeforeEnter && a2.onBeforeEnter(e2), p2 === `appear` && a2.onBeforeAppear && a2.onBeforeAppear(e2), f(p2 === `appear` ? `before-appear` : `before-enter`), d2 && (t(e2, h.from), t(e2, h.active), i(e2), r(() => {
        n(e2, h.from), t(e2, h.to);
      }));
      let g = a2.type ?? s(e2), _ = c(e2, a2.type, a2.duration, p2), v = () => {
        d2 && (n(e2, h.active), n(e2, h.to)), a2.onAfterEnter && a2.onAfterEnter(e2), p2 === `appear` && a2.onAfterAppear && a2.onAfterAppear(e2), f(p2 === `appear` ? `after-appear` : `after-enter`), m2 && m2();
      };
      a2.onEnter || p2 === `appear` && a2.onAppear ? (p2 === `appear` ? a2.onAppear : a2.onEnter)(e2, v) : l(e2, g ?? null, _, v);
    }
    function m(e2, p2) {
      let m2 = u(o2, a2, `leave`);
      a2.onBeforeLeave && a2.onBeforeLeave(e2), f(`before-leave`), d2 && (t(e2, m2.from), t(e2, m2.active), i(e2), r(() => {
        n(e2, m2.from), t(e2, m2.to);
      }));
      let h = a2.type ?? s(e2), g = c(e2, a2.type, a2.duration, `leave`), _ = () => {
        d2 && (n(e2, m2.active), n(e2, m2.to)), a2.onAfterLeave && a2.onAfterLeave(e2), f(`after-leave`), p2 && p2();
      };
      a2.onLeave ? a2.onLeave(e2, _) : l(e2, h ?? null, g, _);
    }
    return {
      runEnter: p,
      runLeave: m
    };
  };
});
export {
  __tla,
  n as a,
  s as i,
  t as n,
  c as o,
  i as r,
  l as s,
  d as t
};

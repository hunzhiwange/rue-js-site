import { o as e, __tla as __tla_0 } from "./src-Ba80c3lX.js";
let t;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  t = ({ variant: t2, size: n, outline: r, dash: i, soft: a, ghost: o, link: s, active: c, block: l, wide: u, square: d, circle: f, disabled: p, disabledClass: m, loading: h, type: g, className: _, onClick: v, children: y }) => {
    let b = `btn`;
    return t2 && (b += ` btn-${t2}`), n && (b += ` btn-${n}`), r && (b += ` btn-outline`), i && (b += ` btn-dash`), a && (b += ` btn-soft`), o && (b += ` btn-ghost`), s && (b += ` btn-link`), c && (b += ` btn-active`), l && (b += ` btn-block`), u && (b += ` btn-wide`), d && (b += ` btn-square`), f && (b += ` btn-circle`), m && (b += ` btn-disabled`), _ && (b += ` ${_}`), e(`button`, {
      className: b,
      disabled: p || h,
      type: g,
      onClick: v,
      children: y
    });
  };
});
export {
  __tla,
  t
};

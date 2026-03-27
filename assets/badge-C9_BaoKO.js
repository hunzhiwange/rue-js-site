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
  t = ({ variant: t2, size: n, outline: r, dash: i, soft: a, ghost: o, className: s, children: c }) => {
    let l = `badge`;
    return t2 && (l += ` badge-${t2}`), n && (l += ` badge-${n}`), r && (l += ` badge-outline`), i && (l += ` badge-dash`), a && (l += ` badge-soft`), o && (l += ` badge-ghost`), s && (l += ` ${s}`), e(`div`, {
      className: l,
      children: c
    });
  };
});
export {
  __tla,
  t
};

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
  t = Object.assign(({ size: t2, border: n, dash: r, side: i, imageFull: a, className: o, children: s }) => {
    let c = `card`;
    return t2 && (c += ` card-${t2}`), n && (c += ` card-border`), r && (c += ` card-dash`), i && (c += ` card-side`), a && (c += ` image-full`), o && (c += ` ${o}`), e(`div`, {
      className: c,
      children: s
    });
  }, {
    Body: ({ className: t2, children: n }) => {
      let r = `card-body`;
      return t2 && (r += ` ${t2}`), e(`div`, {
        className: r,
        children: n
      });
    },
    Title: ({ className: t2, children: n }) => {
      let r = `card-title`;
      return t2 && (r += ` ${t2}`), e(`h2`, {
        className: r,
        children: n
      });
    },
    Actions: ({ className: t2, children: n }) => {
      let r = `card-actions`;
      return t2 && (r += ` ${t2}`), e(`div`, {
        className: r,
        children: n
      });
    },
    Figure: ({ className: t2, children: n }) => {
      let r = `figure`;
      return t2 && (r += ` ${t2}`), e(`figure`, {
        className: r,
        children: n
      });
    }
  });
});
export {
  __tla,
  t
};

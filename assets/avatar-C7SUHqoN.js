import { o as e, __tla as __tla_0 } from "./src-Ba80c3lX.js";
let n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let t;
  t = ({ status: t2, className: n2, children: r }) => {
    let i = `avatar not-prose`;
    return t2 && (i += ` avatar-${t2}`), n2 && (i += ` ${n2}`), e(`div`, {
      className: i,
      children: r
    });
  };
  n = Object.assign(t, {
    Group: ({ className: n2, children: r, items: i }) => {
      let a = `avatar-group`;
      return n2 && (a += ` ${n2}`), i && i.length ? e(`div`, {
        className: a,
        children: i.map((n3, r2) => e(t, {
          status: n3.status,
          children: n3.children
        }, r2))
      }) : e(`div`, {
        className: a,
        children: r
      });
    }
  });
});
export {
  __tla,
  n as t
};

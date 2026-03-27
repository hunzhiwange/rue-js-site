import { A as e, I as t, _ as n, b as r, m as i, q as a, x as o, __tla as __tla_0 } from "./rue-CEPv9khA.js";
let s;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  s = () => i(() => {
    let i2 = r(), s2 = o(`style`);
    n(i2, s2), a(() => {
      t(s2, `
    canvas {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #454545;
    }
  `);
    });
    let c = o(`div`);
    return n(i2, c), e(c, `space-y-4`), {
      vaporElement: i2
    };
  });
});
export {
  __tla,
  s as default
};

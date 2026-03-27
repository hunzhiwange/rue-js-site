import { G as e, m as t, o as n, q as r, z as i, __tla as __tla_0 } from "./rue-CEPv9khA.js";
let o, s;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var a = e(`ref:1:0`, () => i(0));
  o = () => t(() => {
    let t2 = globalThis.document.createElement(`div`), i2 = globalThis.document.createElement(`button`), o2 = globalThis.document.createElement(`span`);
    t2.className = `max-w-sm mx-auto p-6 card bg-base-100 shadow flex items-center gap-3`, i2.className = `btn btn-primary btn-sm`, o2.className = `text-2xl font-bold text-primary`, i2.textContent = `\u52A01`, i2.onclick = () => {
      a.value++;
    }, t2.appendChild(i2), t2.appendChild(o2);
    let s2 = () => {
      o2.textContent = String(a.value);
    }, c = e(`watchEffect:1:1`, () => r(s2));
    return n(() => {
      c.dispose();
    }), {
      vaporElement: t2,
      update: s2
    };
  });
  s = o;
});
export {
  o as VaporCounter,
  __tla,
  s as default
};

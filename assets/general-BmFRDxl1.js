function e(...e2) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n = 0; n < e2.length; n++) {
    let r = e2[n];
    if (r) for (let e3 in r) t[e3] = r[e3];
  }
  return t;
}
export {
  e as t
};

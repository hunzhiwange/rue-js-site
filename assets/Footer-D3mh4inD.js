import { A as e, C as t, G as n, I as r, O as i, S as a, U as o, _ as s, b as c, f as l, m as u, q as d, x as f, y as p, z as m, __tla as __tla_0 } from "./rue-CEPv9khA.js";
import { n as h, __tla as __tla_1 } from "./vapor-runtime-DlsvThgv.js";
import { o as g, __tla as __tla_2 } from "./src-Ba80c3lX.js";
import { n as _, t as v, __tla as __tla_3 } from "./tabs-Dt8xTanX.js";
import { __tla as __tla_4 } from "./tokyo-night-BJol8me2.js";
import { t as y, __tla as __tla_5 } from "./Code-Di3lP1nD.js";
let x;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  let b;
  b = ({ direction: e2, center: t2, className: n2, children: r2 }) => {
    let i2 = `footer`;
    return e2 && (i2 += ` footer-${e2}`), t2 && (i2 += ` footer-center`), n2 && (i2 += ` ${n2}`), g(`footer`, {
      className: i2,
      children: r2
    });
  };
  x = () => {
    let { tabBasic: x2, tabLogo: S, tabForm: C, tabSocial: w, tabLinks: T, tabLinks2: E, tabLinks3: D, tabCentered: O, tabTwo: k } = n(`useSetup:0:0`, () => o(() => ({
      tabBasic: n(`ref:1:0`, () => m(`preview`)),
      tabLogo: n(`ref:1:1`, () => m(`preview`)),
      tabForm: n(`ref:1:2`, () => m(`preview`)),
      tabSocial: n(`ref:1:3`, () => m(`preview`)),
      tabLinks: n(`ref:1:4`, () => m(`preview`)),
      tabLinks2: n(`ref:1:5`, () => m(`preview`)),
      tabLinks3: n(`ref:1:6`, () => m(`preview`)),
      tabCentered: n(`ref:1:7`, () => m(`preview`)),
      tabTwo: n(`ref:1:8`, () => m(`preview`))
    })));
    return u(() => {
      let n2 = c(), o2 = p(`rue:component:start`), m2 = p(`rue:component:end`);
      return s(n2, o2), s(n2, m2), l(g(_, {
        children: u(() => {
          let n3 = c(), o3 = f(`div`);
          s(n3, o3), e(o3, `max-w-none prose prose-sm md:prose-base`);
          let m3 = f(`h1`);
          s(o3, m3), s(m3, a(`Footer \u9875\u811A`));
          let _2 = f(`p`);
          s(o3, _2), e(_2, `text-sm mt-3 mb-3`), s(_2, a(`\u9875\u811A\uFF08Footer\uFF09\u7528\u4E8E\u5C55\u793A\u54C1\u724C\u4FE1\u606F\u3001\u7248\u6743\u58F0\u660E\u548C\u5BFC\u822A\u94FE\u63A5\u3002`));
          let A = f(`div`);
          s(o3, A), e(A, `text-sm`);
          let j = f(`a`);
          s(A, j), i(j, `href`, `https://daisyui.com/components/footer/`), i(j, `target`, `_blank`), s(j, a(`\u67E5\u770B Footer \u9759\u6001\u6837\u5F0F`));
          let M = f(`div`);
          s(o3, M), e(M, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let N = f(`h2`);
          s(M, N), e(N, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(N, a(`# Footer (vertical by default, horizontal for sm and up)`));
          let P = p(`rue:component:start`), F = p(`rue:component:end`);
          s(M, P), s(M, F), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: x2.value,
              onChange: (e2) => x2.value = e2,
              className: `mb-3`
            }), M, P, F);
          });
          let I = p(`rue:slot:start`), L = p(`rue:slot:end`);
          s(M, I), s(M, L), d(() => {
            l(h(x2.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,
                children: u(() => {
                  let t3 = c(), n5 = f(`nav`);
                  s(t3, n5);
                  let r3 = f(`h6`);
                  s(n5, r3), e(r3, `footer-title`), s(r3, a(`Services`));
                  let i2 = f(`button`);
                  s(n5, i2), e(i2, `link link-hover`), s(i2, a(`Branding`));
                  let o4 = f(`button`);
                  s(n5, o4), e(o4, `link link-hover`), s(o4, a(`Design`));
                  let l2 = f(`button`);
                  s(n5, l2), e(l2, `link link-hover`), s(l2, a(`Marketing`));
                  let u2 = f(`button`);
                  s(n5, u2), e(u2, `link link-hover`), s(u2, a(`Advertisement`));
                  let d2 = f(`nav`);
                  s(t3, d2);
                  let p2 = f(`h6`);
                  s(d2, p2), e(p2, `footer-title`), s(p2, a(`Company`));
                  let m4 = f(`button`);
                  s(d2, m4), e(m4, `link link-hover`), s(m4, a(`About us`));
                  let h2 = f(`button`);
                  s(d2, h2), e(h2, `link link-hover`), s(h2, a(`Contact`));
                  let g2 = f(`button`);
                  s(d2, g2), e(g2, `link link-hover`), s(g2, a(`Jobs`));
                  let _3 = f(`button`);
                  s(d2, _3), e(_3, `link link-hover`), s(_3, a(`Press kit`));
                  let v2 = f(`nav`);
                  s(t3, v2);
                  let y2 = f(`h6`);
                  s(v2, y2), e(y2, `footer-title`), s(y2, a(`Legal`));
                  let b2 = f(`button`);
                  s(v2, b2), e(b2, `link link-hover`), s(b2, a(`Terms of use`));
                  let x3 = f(`button`);
                  s(v2, x3), e(x3, `link link-hover`), s(x3, a(`Privacy policy`));
                  let S2 = f(`button`);
                  return s(v2, S2), e(S2, `link link-hover`), s(S2, a(`Cookie policy`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `import { Footer } from '@rue/design';
<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal">
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <button className="link link-hover">Terms of use</button>
    <button className="link link-hover">Privacy policy</button>
    <button className="link link-hover">Cookie policy</button>
  </nav>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), M, I, L);
          });
          let R = f(`div`);
          s(o3, R), e(R, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let z = f(`h2`);
          s(R, z), e(z, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(z, a(`# Footer with a logo section`));
          let B = p(`rue:component:start`), ee = p(`rue:component:end`);
          s(R, B), s(R, ee), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: S.value,
              onChange: (e2) => S.value = e2,
              className: `mb-3`
            }), R, B, ee);
          });
          let te = p(`rue:slot:start`), ne = p(`rue:slot:end`);
          s(R, te), s(R, ne), d(() => {
            l(h(S.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,
                children: u(() => {
                  let t3 = c(), n5 = f(`aside`);
                  s(t3, n5);
                  let r3 = f(`svg`);
                  s(n5, r3), i(r3, `width`, `40`), i(r3, `height`, `40`), i(r3, `viewBox`, `0 0 24 24`), e(r3, `fill-current`);
                  let o4 = f(`path`);
                  s(r3, o4), i(o4, `d`, `M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`);
                  let l2 = f(`p`);
                  s(n5, l2), e(l2, `text-sm mt-3 mb-3`), s(l2, a(`ACME Industries Ltd.`)), s(l2, f(`br`)), s(l2, a(`Providing reliable tech since 1992`));
                  let u2 = f(`nav`);
                  s(t3, u2);
                  let d2 = f(`h6`);
                  s(u2, d2), e(d2, `footer-title`), s(d2, a(`Services`));
                  let p2 = f(`button`);
                  s(u2, p2), e(p2, `link link-hover`), s(p2, a(`Branding`));
                  let m4 = f(`button`);
                  s(u2, m4), e(m4, `link link-hover`), s(m4, a(`Design`));
                  let h2 = f(`button`);
                  s(u2, h2), e(h2, `link link-hover`), s(h2, a(`Marketing`));
                  let g2 = f(`button`);
                  s(u2, g2), e(g2, `link link-hover`), s(g2, a(`Advertisement`));
                  let _3 = f(`nav`);
                  s(t3, _3);
                  let v2 = f(`h6`);
                  s(_3, v2), e(v2, `footer-title`), s(v2, a(`Company`));
                  let y2 = f(`button`);
                  s(_3, y2), e(y2, `link link-hover`), s(y2, a(`About us`));
                  let b2 = f(`button`);
                  s(_3, b2), e(b2, `link link-hover`), s(b2, a(`Contact`));
                  let x3 = f(`button`);
                  s(_3, x3), e(x3, `link link-hover`), s(x3, a(`Jobs`));
                  let S2 = f(`button`);
                  s(_3, S2), e(S2, `link link-hover`), s(S2, a(`Press kit`));
                  let C2 = f(`nav`);
                  s(t3, C2);
                  let w2 = f(`h6`);
                  s(C2, w2), e(w2, `footer-title`), s(w2, a(`Legal`));
                  let T2 = f(`button`);
                  s(C2, T2), e(T2, `link link-hover`), s(T2, a(`Terms of use`));
                  let E2 = f(`button`);
                  s(C2, E2), e(E2, `link link-hover`), s(E2, a(`Privacy policy`));
                  let D2 = f(`button`);
                  return s(C2, D2), e(D2, `link link-hover`), s(D2, a(`Cookie policy`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Footer className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal">
  <aside>
    <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p className="text-sm mt-3 mb-3">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <button className="link link-hover">Terms of use</button>
    <button className="link link-hover">Privacy policy</button>
    <button className="link link-hover">Cookie policy</button>
  </nav>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), R, te, ne);
          });
          let V = f(`div`);
          s(o3, V), e(V, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let H = f(`h2`);
          s(V, H), e(H, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(H, a(`# Footer with a form`));
          let re = p(`rue:component:start`), ie = p(`rue:component:end`);
          s(V, re), s(V, ie), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: C.value,
              onChange: (e2) => C.value = e2,
              className: `mb-3`
            }), V, re, ie);
          });
          let ae = p(`rue:slot:start`), oe = p(`rue:slot:end`);
          s(V, ae), s(V, oe), d(() => {
            l(h(C.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,
                children: u(() => {
                  let t3 = c(), n5 = f(`nav`);
                  s(t3, n5);
                  let r3 = f(`h6`);
                  s(n5, r3), e(r3, `footer-title`), s(r3, a(`Services`));
                  let o4 = f(`button`);
                  s(n5, o4), e(o4, `link link-hover`), s(o4, a(`Branding`));
                  let l2 = f(`button`);
                  s(n5, l2), e(l2, `link link-hover`), s(l2, a(`Design`));
                  let u2 = f(`button`);
                  s(n5, u2), e(u2, `link link-hover`), s(u2, a(`Marketing`));
                  let d2 = f(`button`);
                  s(n5, d2), e(d2, `link link-hover`), s(d2, a(`Advertisement`));
                  let p2 = f(`nav`);
                  s(t3, p2);
                  let m4 = f(`h6`);
                  s(p2, m4), e(m4, `footer-title`), s(m4, a(`Company`));
                  let h2 = f(`button`);
                  s(p2, h2), e(h2, `link link-hover`), s(h2, a(`About us`));
                  let g2 = f(`button`);
                  s(p2, g2), e(g2, `link link-hover`), s(g2, a(`Contact`));
                  let _3 = f(`button`);
                  s(p2, _3), e(_3, `link link-hover`), s(_3, a(`Jobs`));
                  let v2 = f(`button`);
                  s(p2, v2), e(v2, `link link-hover`), s(v2, a(`Press kit`));
                  let y2 = f(`nav`);
                  s(t3, y2);
                  let b2 = f(`h6`);
                  s(y2, b2), e(b2, `footer-title`), s(b2, a(`Legal`));
                  let x3 = f(`button`);
                  s(y2, x3), e(x3, `link link-hover`), s(x3, a(`Terms of use`));
                  let S2 = f(`button`);
                  s(y2, S2), e(S2, `link link-hover`), s(S2, a(`Privacy policy`));
                  let C2 = f(`button`);
                  s(y2, C2), e(C2, `link link-hover`), s(C2, a(`Cookie policy`));
                  let w2 = f(`form`);
                  s(t3, w2);
                  let T2 = f(`h6`);
                  s(w2, T2), e(T2, `footer-title`), s(T2, a(`Newsletter`));
                  let E2 = f(`fieldset`);
                  s(w2, E2), e(E2, `w-80`);
                  let D2 = f(`label`);
                  s(E2, D2), s(D2, a(`Enter your email address`));
                  let O2 = f(`div`);
                  s(E2, O2), e(O2, `join`);
                  let k2 = f(`input`);
                  s(O2, k2), i(k2, `type`, `text`), i(k2, `placeholder`, `username@site.com`), e(k2, `input input-bordered join-item`);
                  let A2 = f(`button`);
                  return s(O2, A2), e(A2, `join-item btn btn-primary`), s(A2, a(`Subscribe`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Footer className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal">
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <button className="link link-hover">Terms of use</button>
    <button className="link link-hover">Privacy policy</button>
    <button className="link link-hover">Cookie policy</button>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
        <button className="join-item btn btn-primary">Subscribe</button>
      </div>
    </fieldset>
  </form>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), V, ae, oe);
          });
          let U = f(`div`);
          s(o3, U), e(U, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let W = f(`h2`);
          s(U, W), e(W, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(W, a(`# Footer with logo and social icons`));
          let se = p(`rue:component:start`), ce = p(`rue:component:end`);
          s(U, se), s(U, ce), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: w.value,
              onChange: (e2) => w.value = e2,
              className: `mb-3`
            }), U, se, ce);
          });
          let le = p(`rue:slot:start`), ue = p(`rue:slot:end`);
          s(U, le), s(U, ue), d(() => {
            l(h(w.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,
                children: u(() => {
                  let t3 = c(), n5 = f(`aside`);
                  s(t3, n5);
                  let r3 = f(`svg`);
                  s(n5, r3), i(r3, `width`, `40`), i(r3, `height`, `40`), i(r3, `viewBox`, `0 0 24 24`), e(r3, `fill-current`);
                  let o4 = f(`path`);
                  s(r3, o4), i(o4, `d`, `M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431 .809c-1.135 .328-2.145-.317-2.463-1.229-.329-1.018 .211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432 .808c-1.355 .384-2.558-.59-2.558-1.839 0-.817 .509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02 .211-2.129 1.232-2.458 1.02-.329 2.13 .209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238 .484-2.553 1.843-2.553.819 0 1.585 .509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131 .211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433 .809 1.622 4.823 2.433-.809c1.242-.401 2.557 .484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`);
                  let l2 = f(`p`);
                  s(n5, l2), e(l2, `text-sm mt-3 mb-3`), s(l2, a(`ACME Industries Ltd.`)), s(l2, f(`br`)), s(l2, a(`Providing reliable tech since 1992`));
                  let u2 = f(`nav`);
                  s(t3, u2);
                  let d2 = f(`h6`);
                  s(u2, d2), e(d2, `footer-title`), s(d2, a(`Social`));
                  let p2 = f(`div`);
                  s(u2, p2), e(p2, `grid grid-flow-col gap-4`);
                  let m4 = f(`button`);
                  s(p2, m4);
                  let h2 = f(`svg`);
                  s(m4, h2), i(h2, `xmlns`, `http://www.w3.org/2000/svg`), i(h2, `width`, `24`), i(h2, `height`, `24`), e(h2, `fill-current`);
                  let g2 = f(`path`);
                  s(h2, g2), i(g2, `d`, `M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693 .188-1.452 .232-2.224 .084 .626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 .962-.695 1.797-1.562 2.457-2.549z`);
                  let _3 = f(`button`);
                  s(p2, _3);
                  let v2 = f(`svg`);
                  s(_3, v2), i(v2, `xmlns`, `http://www.w3.org/2000/svg`), i(v2, `width`, `24`), i(v2, `height`, `24`), e(v2, `fill-current`);
                  let y2 = f(`path`);
                  s(v2, y2), i(y2, `d`, `M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897 .266-4.356 2.62-4.385 8.816 .029 6.185 .484 8.549 4.385 8.816 3.6 .245 11.626 .246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`);
                  let b2 = f(`button`);
                  s(p2, b2);
                  let x3 = f(`svg`);
                  s(b2, x3), i(x3, `xmlns`, `http://www.w3.org/2000/svg`), i(x3, `width`, `24`), i(x3, `height`, `24`), e(x3, `fill-current`);
                  let S2 = f(`path`);
                  return s(x3, S2), i(S2, `d`, `M9 8h-3v4h3v12h5v-12h3.642l .358-4h-4v-1.667c0-.955 .192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal">
  <aside>
    <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431 .809c-1.135 .328-2.145-.317-2.463-1.229-.329-1.018 .211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432 .808c-1.355 .384-2.558-.59-2.558-1.839 0-.817 .509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02 .211-2.129 1.232-2.458 1.02-.329 2.13 .209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238 .484-2.553 1.843-2.553.819 0 1.585 .509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131 .211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433 .809 1.622 4.823 2.433-.809c1.242-.401 2.557 .484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p className="text-sm mt-3 mb-3">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693 .188-1.452 .232-2.224 .084 .626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 .962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897 .266-4.356 2.62-4.385 8.816 .029 6.185 .484 8.549 4.385 8.816 3.6 .245 11.626 .246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l .358-4h-4v-1.667c0-.955 .192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </button>
    </div>
  </nav>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), U, le, ue);
          });
          let G = f(`div`);
          s(o3, G), e(G, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let K = f(`h2`);
          s(G, K), e(K, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(K, a(`# Footer with links and social icons`));
          let de = p(`rue:component:start`), fe = p(`rue:component:end`);
          s(G, de), s(G, fe), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: T.value,
              onChange: (e2) => T.value = e2,
              className: `mb-3`
            }), G, de, fe);
          });
          let pe = p(`rue:slot:start`), me = p(`rue:slot:end`);
          s(G, pe), s(G, me), d(() => {
            l(h(T.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,
                children: u(() => {
                  let t3 = c(), n5 = f(`nav`);
                  s(t3, n5);
                  let r3 = f(`h6`);
                  s(n5, r3), e(r3, `footer-title`), s(r3, a(`Services`));
                  let o4 = f(`button`);
                  s(n5, o4), e(o4, `link link-hover`), s(o4, a(`Branding`));
                  let l2 = f(`button`);
                  s(n5, l2), e(l2, `link link-hover`), s(l2, a(`Design`));
                  let u2 = f(`button`);
                  s(n5, u2), e(u2, `link link-hover`), s(u2, a(`Marketing`));
                  let d2 = f(`button`);
                  s(n5, d2), e(d2, `link link-hover`), s(d2, a(`Advertisement`));
                  let p2 = f(`nav`);
                  s(t3, p2);
                  let m4 = f(`h6`);
                  s(p2, m4), e(m4, `footer-title`), s(m4, a(`Company`));
                  let h2 = f(`button`);
                  s(p2, h2), e(h2, `link link-hover`), s(h2, a(`About us`));
                  let g2 = f(`button`);
                  s(p2, g2), e(g2, `link link-hover`), s(g2, a(`Contact`));
                  let _3 = f(`button`);
                  s(p2, _3), e(_3, `link link-hover`), s(_3, a(`Jobs`));
                  let v2 = f(`button`);
                  s(p2, v2), e(v2, `link link-hover`), s(v2, a(`Press kit`));
                  let y2 = f(`nav`);
                  s(t3, y2);
                  let b2 = f(`h6`);
                  s(y2, b2), e(b2, `footer-title`), s(b2, a(`Social`));
                  let x3 = f(`div`);
                  s(y2, x3), e(x3, `grid grid-flow-col gap-4`);
                  let S2 = f(`button`);
                  s(x3, S2);
                  let C2 = f(`svg`);
                  s(S2, C2), i(C2, `xmlns`, `http://www.w3.org/2000/svg`), i(C2, `width`, `24`), i(C2, `height`, `24`), e(C2, `fill-current`);
                  let w2 = f(`path`);
                  s(C2, w2), i(w2, `d`, `M24 4.557c-.883.392-1.832 .656-2.828 .775 1.017-.609 1.798-1.574 2.165-2.724-.951 .564-2.005 .974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693 .188-1.452 .232-2.224 .084 .626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 .962-.695 1.797-1.562 2.457-2.549z`);
                  let T2 = f(`button`);
                  s(x3, T2);
                  let E2 = f(`svg`);
                  s(T2, E2), i(E2, `xmlns`, `http://www.w3.org/2000/svg`), i(E2, `width`, `24`), i(E2, `height`, `24`), e(E2, `fill-current`);
                  let D2 = f(`path`);
                  s(E2, D2), i(D2, `d`, `M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897 .266-4.356 2.62-4.385 8.816 .029 6.185 .484 8.549 4.385 8.816 3.6 .245 11.626 .246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`);
                  let O2 = f(`button`);
                  s(x3, O2);
                  let k2 = f(`svg`);
                  s(O2, k2), i(k2, `xmlns`, `http://www.w3.org/2000/svg`), i(k2, `width`, `24`), i(k2, `height`, `24`), e(k2, `fill-current`);
                  let A2 = f(`path`);
                  return s(k2, A2), i(A2, `d`, `M9 8h-3v4h3v12h5v-12h3.642l .358-4h-4v-1.667c0-.955 .192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
          <path d="M24 4.557c-.883.392-1.832 .656-2.828 .775 1.017-.609 1.798-1.574 2.165-2.724-.951 .564-2.005 .974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693 .188-1.452 .232-2.224 .084 .626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 .962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897 .266-4.356 2.62-4.385 8.816 .029 6.185 .484 8.549 4.385 8.816 3.6 .245 11.626 .246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l .358-4h-4v-1.667c0-.955 .192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </button>
    </div>
  </nav>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), G, pe, me);
          });
          let q = f(`div`);
          s(o3, q), e(q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let J = f(`h2`);
          s(q, J), e(J, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(J, a(`# Links and social icons (two rows)`));
          let he = p(`rue:component:start`), ge = p(`rue:component:end`);
          s(q, he), s(q, ge), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: E.value,
              onChange: (e2) => E.value = e2,
              className: `mb-3`
            }), q, he, ge);
          });
          let _e = p(`rue:slot:start`), ve = p(`rue:slot:end`);
          s(q, _e), s(q, ve), d(() => {
            l(h(E.value === `preview` ? u(() => {
              let t2 = c(), n4 = p(`rue:component:start`), r2 = p(`rue:component:end`);
              return s(t2, n4), s(t2, r2), l(g(b, {
                className: `p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,
                children: u(() => {
                  let t3 = c(), n5 = f(`nav`);
                  s(t3, n5);
                  let r3 = f(`h6`);
                  s(n5, r3), e(r3, `footer-title`), s(r3, a(`Services`));
                  let i2 = f(`button`);
                  s(n5, i2), e(i2, `link link-hover`), s(i2, a(`Branding`));
                  let o4 = f(`button`);
                  s(n5, o4), e(o4, `link link-hover`), s(o4, a(`Design`));
                  let l2 = f(`button`);
                  s(n5, l2), e(l2, `link link-hover`), s(l2, a(`Marketing`));
                  let u2 = f(`button`);
                  s(n5, u2), e(u2, `link link-hover`), s(u2, a(`Advertisement`));
                  let d2 = f(`nav`);
                  s(t3, d2);
                  let p2 = f(`h6`);
                  s(d2, p2), e(p2, `footer-title`), s(p2, a(`Company`));
                  let m4 = f(`button`);
                  s(d2, m4), e(m4, `link link-hover`), s(m4, a(`About us`));
                  let h2 = f(`button`);
                  s(d2, h2), e(h2, `link link-hover`), s(h2, a(`Contact`));
                  let g2 = f(`button`);
                  s(d2, g2), e(g2, `link link-hover`), s(g2, a(`Jobs`));
                  let _3 = f(`button`);
                  s(d2, _3), e(_3, `link link-hover`), s(_3, a(`Press kit`));
                  let v2 = f(`nav`);
                  s(t3, v2);
                  let y2 = f(`h6`);
                  s(v2, y2), e(y2, `footer-title`), s(y2, a(`Legal`));
                  let b2 = f(`button`);
                  s(v2, b2), e(b2, `link link-hover`), s(b2, a(`Terms of use`));
                  let x3 = f(`button`);
                  s(v2, x3), e(x3, `link link-hover`), s(x3, a(`Privacy policy`));
                  let S2 = f(`button`);
                  s(v2, S2), e(S2, `link link-hover`), s(S2, a(`Cookie policy`));
                  let C2 = f(`nav`);
                  s(t3, C2);
                  let w2 = f(`h6`);
                  s(C2, w2), e(w2, `footer-title`), s(w2, a(`Social`));
                  let T2 = f(`button`);
                  s(C2, T2), e(T2, `link link-hover`), s(T2, a(`Twitter`));
                  let E2 = f(`button`);
                  s(C2, E2), e(E2, `link link-hover`), s(E2, a(`Instagram`));
                  let D2 = f(`button`);
                  s(C2, D2), e(D2, `link link-hover`), s(D2, a(`Facebook`));
                  let O2 = f(`button`);
                  s(C2, O2), e(O2, `link link-hover`), s(O2, a(`GitHub`));
                  let k2 = f(`nav`);
                  s(t3, k2);
                  let A2 = f(`h6`);
                  s(k2, A2), e(A2, `footer-title`), s(A2, a(`Explore`));
                  let j2 = f(`button`);
                  s(k2, j2), e(j2, `link link-hover`), s(j2, a(`Features`));
                  let M2 = f(`button`);
                  s(k2, M2), e(M2, `link link-hover`), s(M2, a(`Enterprise`));
                  let N2 = f(`button`);
                  s(k2, N2), e(N2, `link link-hover`), s(N2, a(`Security`));
                  let P2 = f(`button`);
                  s(k2, P2), e(P2, `link link-hover`), s(P2, a(`Pricing`));
                  let F2 = f(`nav`);
                  s(t3, F2);
                  let I2 = f(`h6`);
                  s(F2, I2), e(I2, `footer-title`), s(I2, a(`Apps`));
                  let L2 = f(`button`);
                  s(F2, L2), e(L2, `link link-hover`), s(L2, a(`Mac`));
                  let R2 = f(`button`);
                  s(F2, R2), e(R2, `link link-hover`), s(R2, a(`Windows`));
                  let z2 = f(`button`);
                  s(F2, z2), e(z2, `link link-hover`), s(z2, a(`Linux`));
                  let B2 = f(`button`);
                  return s(F2, B2), e(B2, `link link-hover`), s(B2, a(`Android`)), {
                    vaporElement: t3
                  };
                })
              }), t2, n4, r2), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Footer className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal">
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <button className="link link-hover">Terms of use</button>
    <button className="link link-hover">Privacy policy</button>
    <button className="link link-hover">Cookie policy</button>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <button className="link link-hover">Twitter</button>
    <button className="link link-hover">Instagram</button>
    <button className="link link-hover">Facebook</button>
    <button className="link link-hover">GitHub</button>
  </nav>
  <nav>
    <h6 className="footer-title">Explore</h6>
    <button className="link link-hover">Features</button>
    <button className="link link-hover">Enterprise</button>
    <button className="link link-hover">Security</button>
    <button className="link link-hover">Pricing</button>
  </nav>
  <nav>
    <h6 className="footer-title">Apps</h6>
    <button className="link link-hover">Mac</button>
    <button className="link link-hover">Windows</button>
    <button className="link link-hover">Linux</button>
    <button className="link link-hover">Android</button>
  </nav>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), q, _e, ve);
          });
          let Y = f(`div`);
          s(o3, Y), e(Y, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let X = f(`h2`);
          s(Y, X), e(X, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(X, a(`# Centered footer with logo and social icons`));
          let ye = p(`rue:component:start`), be = p(`rue:component:end`);
          s(Y, ye), s(Y, be), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: D.value,
              onChange: (e2) => D.value = e2,
              className: `mb-3`
            }), Y, ye, be);
          });
          let xe = p(`rue:slot:start`), Se = p(`rue:slot:end`);
          s(Y, xe), s(Y, Se), d(() => {
            l(h(D.value === `preview` ? u(() => {
              let n4 = c(), o4 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              return s(n4, o4), s(n4, m4), l(g(b, {
                className: `footer footer-horizontal footer-center bg-primary text-primary-content p-10`,
                children: u(() => {
                  let n5 = c(), o5 = f(`aside`);
                  s(n5, o5);
                  let l2 = f(`svg`);
                  s(o5, l2), i(l2, `width`, `50`), i(l2, `height`, `50`), i(l2, `viewBox`, `0 0 24 24`), i(l2, `xmlns`, `http://www.w3.org/2000/svg`), i(l2, `fillRule`, `evenodd`), i(l2, `clipRule`, `evenodd`), e(l2, `inline-block fill-current`);
                  let u2 = f(`path`);
                  s(l2, u2), i(u2, `d`, `M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`);
                  let p2 = f(`p`);
                  s(o5, p2), e(p2, `font-bold`), s(p2, a(`ACME Industries Ltd.`)), s(p2, f(`br`)), s(p2, a(`Providing reliable tech since 1992`));
                  let m5 = f(`p`);
                  s(o5, m5), e(m5, `text-sm mt-3 mb-3`), s(m5, a(`Copyright \xA9 `));
                  let h2 = t(m5);
                  s(m5, h2), d(() => {
                    r(h2, (/* @__PURE__ */ new Date()).getFullYear());
                  }), s(m5, a(` - All right reserved`));
                  let g2 = f(`nav`);
                  s(n5, g2);
                  let _3 = f(`div`);
                  s(g2, _3), e(_3, `grid grid-flow-col gap-4`);
                  let v2 = f(`a`);
                  s(_3, v2);
                  let y2 = f(`svg`);
                  s(v2, y2), i(y2, `xmlns`, `http://www.w3.org/2000/svg`), i(y2, `width`, `24`), i(y2, `height`, `24`), i(y2, `viewBox`, `0 0 24 24`), e(y2, `fill-current`);
                  let b2 = f(`path`);
                  s(y2, b2), i(b2, `d`, `M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`);
                  let x3 = f(`a`);
                  s(_3, x3);
                  let S2 = f(`svg`);
                  s(x3, S2), i(S2, `xmlns`, `http://www.w3.org/2000/svg`), i(S2, `width`, `24`), i(S2, `height`, `24`), i(S2, `viewBox`, `0 0 24 24`), e(S2, `fill-current`);
                  let C2 = f(`path`);
                  s(S2, C2), i(C2, `d`, `M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`);
                  let w2 = f(`a`);
                  s(_3, w2);
                  let T2 = f(`svg`);
                  s(w2, T2), i(T2, `xmlns`, `http://www.w3.org/2000/svg`), i(T2, `width`, `24`), i(T2, `height`, `24`), i(T2, `viewBox`, `0 0 24 24`), e(T2, `fill-current`);
                  let E2 = f(`path`);
                  return s(T2, E2), i(E2, `d`, `M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`), {
                    vaporElement: n5
                  };
                })
              }), n4, o4, m4), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="inline-block fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p className="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p className="text-sm mt-3 mb-3">Copyright \xA9 {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Y, xe, Se);
          });
          let Z = f(`div`);
          s(o3, Z), e(Z, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let Ce = f(`h2`);
          s(Z, Ce), e(Ce, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s(Ce, a(`# Centered footer with social icons`));
          let we = p(`rue:component:start`), Te = p(`rue:component:end`);
          s(Z, we), s(Z, Te), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: O.value,
              onChange: (e2) => O.value = e2,
              className: `mb-3`
            }), Z, we, Te);
          });
          let Ee = p(`rue:slot:start`), De = p(`rue:slot:end`);
          s(Z, Ee), s(Z, De), d(() => {
            l(h(O.value === `preview` ? u(() => {
              let n4 = c(), o4 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              return s(n4, o4), s(n4, m4), l(g(b, {
                className: `p-10 bg-base-200 text-base-content rounded footer-horizontal footer-center`,
                children: u(() => {
                  let n5 = c(), o5 = f(`nav`);
                  s(n5, o5), e(o5, `grid grid-flow-col gap-4`);
                  let l2 = f(`button`);
                  s(o5, l2), e(l2, `link link-hover`), s(l2, a(`About us`));
                  let u2 = f(`button`);
                  s(o5, u2), e(u2, `link link-hover`), s(u2, a(`Contact`));
                  let p2 = f(`button`);
                  s(o5, p2), e(p2, `link link-hover`), s(p2, a(`Jobs`));
                  let m5 = f(`button`);
                  s(o5, m5), e(m5, `link link-hover`), s(m5, a(`Press kit`));
                  let h2 = f(`nav`);
                  s(n5, h2), e(h2, `grid grid-flow-col gap-4`);
                  let g2 = f(`button`);
                  s(h2, g2);
                  let _3 = f(`svg`);
                  s(g2, _3), i(_3, `xmlns`, `http://www.w3.org/2000/svg`), i(_3, `width`, `24`), i(_3, `height`, `24`), e(_3, `fill-current`);
                  let v2 = f(`path`);
                  s(_3, v2), i(v2, `d`, `M24 4.557c-.883.392-1.832 .656-2.828 .775 1.017-.609 1.798-1.574 2.165-2.724-.951 .564-2.005 .974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693 .188-1.452 .232-2.224 .084 .626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 .962-.695 1.797-1.562 2.457-2.549z`);
                  let y2 = f(`button`);
                  s(h2, y2);
                  let b2 = f(`svg`);
                  s(y2, b2), i(b2, `xmlns`, `http://www.w3.org/2000/svg`), i(b2, `width`, `24`), i(b2, `height`, `24`), e(b2, `fill-current`);
                  let x3 = f(`path`);
                  s(b2, x3), i(x3, `d`, `M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897 .266-4.356 2.62-4.385 8.816 .029 6.185 .484 8.549 4.385 8.816 3.6 .245 11.626 .246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`);
                  let S2 = f(`button`);
                  s(h2, S2);
                  let C2 = f(`svg`);
                  s(S2, C2), i(C2, `xmlns`, `http://www.w3.org/2000/svg`), i(C2, `width`, `24`), i(C2, `height`, `24`), e(C2, `fill-current`);
                  let w2 = f(`path`);
                  s(C2, w2), i(w2, `d`, `M9 8h-3v4h3v12h5v-12h3.642l .358-4h-4v-1.667c0-.955 .192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`);
                  let T2 = f(`aside`);
                  s(n5, T2);
                  let E2 = f(`p`);
                  s(T2, E2), e(E2, `text-sm mt-3 mb-3`), s(E2, a(`Copyright \xA9 `));
                  let D2 = t(E2);
                  return s(E2, D2), d(() => {
                    r(D2, (/* @__PURE__ */ new Date()).getFullYear());
                  }), s(E2, a(` - All right reserved by ACME Industries Ltd`)), {
                    vaporElement: n5
                  };
                })
              }), n4, o4, m4), {
                vaporElement: n4
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal footer-center">
  <nav className="grid grid-flow-col gap-4">
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav className="grid grid-flow-col gap-4">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
        <path d="M24 4.557c-.883.392-1.832 .656-2.828 .775 1.017-.609 1.798-1.574 2.165-2.724-.951 .564-2.005 .974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693 .188-1.452 .232-2.224 .084 .626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 .962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897 .266-4.356 2.62-4.385 8.816 .029 6.185 .484 8.549 4.385 8.816 3.6 .245 11.626 .246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l .358-4h-4v-1.667c0-.955 .192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </button>
  </nav>
  <aside>
    <p className="text-sm mt-3 mb-3">Copyright \xA9 {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</Footer>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Z, Ee, De);
          });
          let Q = f(`div`);
          s(o3, Q), e(Q, `component-preview not-prose text-base-content my-6 lg:my-12`);
          let $ = f(`h2`);
          s(Q, $), e($, `component-preview-title mt-2 mb-1 text-lg font-semibold`), s($, a(`# Two footer`));
          let Oe = p(`rue:component:start`), ke = p(`rue:component:end`);
          s(Q, Oe), s(Q, ke), d(() => {
            l(g(v, {
              style: `box`,
              items: [
                {
                  key: `preview`,
                  label: `\u9884\u89C8`
                },
                {
                  key: `code`,
                  label: `JSX\u4EE3\u7801`
                }
              ],
              activeKey: k.value,
              onChange: (e2) => k.value = e2,
              className: `mb-3`
            }), Q, Oe, ke);
          });
          let Ae = p(`rue:slot:start`), je = p(`rue:slot:end`);
          return s(Q, Ae), s(Q, je), d(() => {
            l(h(k.value === `preview` ? u(() => {
              let t2 = c(), n4 = f(`div`);
              s(t2, n4), e(n4, `w-full`);
              let r2 = p(`rue:component:start`), o4 = p(`rue:component:end`);
              s(n4, r2), s(n4, o4), l(g(b, {
                className: `footer sm:footer-horizontal bg-base-200 text-base-content p-10`,
                children: u(() => {
                  let t3 = c(), n5 = f(`nav`);
                  s(t3, n5);
                  let r3 = f(`h6`);
                  s(n5, r3), e(r3, `footer-title`), s(r3, a(`Services`));
                  let i2 = f(`a`);
                  s(n5, i2), e(i2, `link link-hover`), s(i2, a(`Branding`));
                  let o5 = f(`a`);
                  s(n5, o5), e(o5, `link link-hover`), s(o5, a(`Design`));
                  let l2 = f(`a`);
                  s(n5, l2), e(l2, `link link-hover`), s(l2, a(`Marketing`));
                  let u2 = f(`a`);
                  s(n5, u2), e(u2, `link link-hover`), s(u2, a(`Advertisement`));
                  let d3 = f(`nav`);
                  s(t3, d3);
                  let p2 = f(`h6`);
                  s(d3, p2), e(p2, `footer-title`), s(p2, a(`Company`));
                  let m5 = f(`a`);
                  s(d3, m5), e(m5, `link link-hover`), s(m5, a(`About us`));
                  let h2 = f(`a`);
                  s(d3, h2), e(h2, `link link-hover`), s(h2, a(`Contact`));
                  let g2 = f(`a`);
                  s(d3, g2), e(g2, `link link-hover`), s(g2, a(`Jobs`));
                  let _3 = f(`a`);
                  s(d3, _3), e(_3, `link link-hover`), s(_3, a(`Press kit`));
                  let v2 = f(`nav`);
                  s(t3, v2);
                  let y2 = f(`h6`);
                  s(v2, y2), e(y2, `footer-title`), s(y2, a(`Legal`));
                  let b2 = f(`a`);
                  s(v2, b2), e(b2, `link link-hover`), s(b2, a(`Terms of use`));
                  let x3 = f(`a`);
                  s(v2, x3), e(x3, `link link-hover`), s(x3, a(`Privacy policy`));
                  let S2 = f(`a`);
                  return s(v2, S2), e(S2, `link link-hover`), s(S2, a(`Cookie policy`)), {
                    vaporElement: t3
                  };
                })
              }), n4, r2, o4);
              let d2 = p(`rue:component:start`), m4 = p(`rue:component:end`);
              return s(n4, d2), s(n4, m4), l(g(b, {
                className: `footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4`,
                children: u(() => {
                  let t3 = c(), n5 = f(`aside`);
                  s(t3, n5), e(n5, `grid-flow-col items-center`);
                  let r3 = f(`svg`);
                  s(n5, r3), i(r3, `width`, `24`), i(r3, `height`, `24`), i(r3, `viewBox`, `0 0 24 24`), i(r3, `xmlns`, `http://www.w3.org/2000/svg`), i(r3, `fillRule`, `evenodd`), i(r3, `clipRule`, `evenodd`), e(r3, `fill-current`);
                  let o5 = f(`path`);
                  s(r3, o5), i(o5, `d`, `M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`);
                  let l2 = f(`p`);
                  s(n5, l2), e(l2, `text-sm mt-3 mb-3`), s(l2, a(`ACME Industries Ltd.`)), s(l2, f(`br`)), s(l2, a(`Providing reliable tech since 1992`));
                  let u2 = f(`nav`);
                  s(t3, u2), e(u2, `md:place-self-center md:justify-self-end`);
                  let d3 = f(`div`);
                  s(u2, d3), e(d3, `grid grid-flow-col gap-4`);
                  let p2 = f(`a`);
                  s(d3, p2);
                  let m5 = f(`svg`);
                  s(p2, m5), i(m5, `xmlns`, `http://www.w3.org/2000/svg`), i(m5, `width`, `24`), i(m5, `height`, `24`), i(m5, `viewBox`, `0 0 24 24`), e(m5, `fill-current`);
                  let h2 = f(`path`);
                  s(m5, h2), i(h2, `d`, `M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`);
                  let g2 = f(`a`);
                  s(d3, g2);
                  let _3 = f(`svg`);
                  s(g2, _3), i(_3, `xmlns`, `http://www.w3.org/2000/svg`), i(_3, `width`, `24`), i(_3, `height`, `24`), i(_3, `viewBox`, `0 0 24 24`), e(_3, `fill-current`);
                  let v2 = f(`path`);
                  s(_3, v2), i(v2, `d`, `M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`);
                  let y2 = f(`a`);
                  s(d3, y2);
                  let b2 = f(`svg`);
                  s(y2, b2), i(b2, `xmlns`, `http://www.w3.org/2000/svg`), i(b2, `width`, `24`), i(b2, `height`, `24`), i(b2, `viewBox`, `0 0 24 24`), e(b2, `fill-current`);
                  let x3 = f(`path`);
                  return s(b2, x3), i(x3, `d`, `M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`), {
                    vaporElement: t3
                  };
                })
              }), n4, d2, m4), {
                vaporElement: t2
              };
            }) : u(() => {
              let e2 = c(), t2 = p(`rue:component:start`), n4 = p(`rue:component:end`);
              return s(e2, t2), s(e2, n4), d(() => {
                l(g(y, {
                  className: `mt-2`,
                  lang: `tsx`,
                  code: `<div className="w-full">
<Footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</Footer>
<Footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p className="text-sm mt-3 mb-3">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</Footer>
</div>`
                }), e2, t2, n4);
              }), {
                vaporElement: e2
              };
            })), Q, Ae, je);
          }), {
            vaporElement: n3
          };
        })
      }), n2, o2, m2), {
        vaporElement: n2
      };
    });
  };
});
export {
  __tla,
  x as default
};

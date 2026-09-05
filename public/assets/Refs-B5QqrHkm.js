import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Lt as o,Mt as s,V as c,_n as l,fn as u,gn as d,hn as f,kt as p,nt as m,ot as h,q as g,wn as _,x as v,z as y}from"./rue-runtime-CwEGJ854.js";import{t as b}from"./Code-B3jCYMAr.js";import{r as x}from"./SidebarPlaygroundExample-EGR0CyDT.js";var S=l(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Refs 基础</h1>`),C=l(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),w=l(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),T=()=>{let l=p(`Refs:hook:0`),T=()=>{let e=l.current;console.info(e),e&&typeof e.focus==`function`&&e.focus()},E=e(`code`);return s(()=>g(r(x,()=>({children:[(e,t,r)=>v(e,r,()=>n(Object.assign(e=>{let t=m();return t.appendChild(S().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>v(e,r,()=>n(Object.assign(e=>{let t=m(),n=C().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),h(i,`role`,`tab`),_(()=>{a(i,`tab ${E.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{E.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),h(s,`role`,`tab`),_(()=>{a(s,`tab ${E.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{E.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,a)=>v(e,a,()=>n(Object.assign(e=>{let r=m(),a=w().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],p=s.parentNode,h=o.childNodes[1],g=h.parentNode;return r.appendChild(a),c(p,s,()=>{let e=E.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`;let n=f(`div`,t);return u(t,n),n.className=`card-body p-0`,i(n,b,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

const Refs: FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const focus = () => {
    console.log(inputRef.current);
    inputRef.current?.focus?.();
  };
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <input
          ref={inputRef}
          className="input input-bordered"
          placeholder="点击按钮自动聚焦"
        />
        <button className="btn btn-primary" onClick={focus}>
          聚焦
        </button>
      </div>
    </div>
  );
};

export default Refs;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),c(g,h,()=>{let e=E.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let n=f(`div`,e);n.className=`card bg-base-100 shadow`;let r=f(`div`,n);u(n,r),r.className=`card-body grid gap-4`;let i=f(`input`,r);u(r,i);let a=l;typeof a==`function`?a(i):a&&typeof a==`object`&&`current`in a&&(a.current=i),t(()=>{typeof a==`function`?a(null):a&&typeof a==`object`&&`current`in a&&(a.current=null)}),i.className=`input input-bordered`,i.setAttribute(`placeholder`,`点击按钮自动聚焦`);let o=f(`button`,r);u(r,o),o.className=`btn btn-primary`;let s=e=>{let t=T;typeof t==`function`&&t(e)};return o.addEventListener(`click`,s),t(()=>o.removeEventListener(`click`,s)),u(o,d(`聚焦`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]})),e=>y(()=>{})))};export{T as default};
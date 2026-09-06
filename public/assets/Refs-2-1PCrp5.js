import{Dn as e,E as t,Q as n,Qt as r,Vt as i,Wt as a,_n as o,_t as s,ct as c,et as l,gn as u,nt as d,pn as f,qt as p,rt as m,st as h,tn as g,vn as _,wn as v,xt as y}from"./rue-runtime-HIMg8Lz8.js";import{t as b}from"./Code-DpH7u0gk.js";import{r as x}from"./SidebarPlaygroundExample-BCPRe0hA.js";var S=_(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Refs 基础</h1>`),C=_(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),w=_(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),T=()=>{let _=a(`Refs:hook:0`),T=()=>{let e=_.current;console.info(e),e&&typeof e.focus==`function`&&e.focus()},E=g(`code`);return p(()=>c(m(x,()=>({children:[(e,n,r)=>t(e,r,()=>i(Object.assign(e=>{let t=s();return t.appendChild(S().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,a,o)=>t(e,o,()=>i(Object.assign(e=>{let t=s(),i=C().content.cloneNode(!0),a=i.firstChild,o=a.childNodes[0],c=a.childNodes[1];t.appendChild(i),y(o,`role`,`tab`),v(()=>{n(o,`tab ${E.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{E.value=`preview`};typeof t==`function`&&t(e)};o.addEventListener(`click`,l),r(()=>o.removeEventListener(`click`,l)),y(c,`role`,`tab`),v(()=>{n(c,`tab ${E.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{E.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),r(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r,a)=>t(n,a,()=>i(Object.assign(t=>{let n=s(),r=w().content.cloneNode(!0),a=r.firstChild,c=a.childNodes[0],l=c.parentNode,p=a.childNodes[1],m=p.parentNode;return n.appendChild(r),d(l,c,()=>{let e=E.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=u(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`;let n=u(`div`,t);return f(t,n),n.className=`card-body p-0`,h(n,b,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=o(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),d(m,p,()=>{let t=E.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let n=u(`div`,t);n.className=`card bg-base-100 shadow`;let r=u(`div`,n);f(n,r),r.className=`card-body grid gap-4`;let i=u(`input`,r);f(r,i);let a=_;typeof a==`function`?a(i):a&&typeof a==`object`&&`current`in a&&(a.current=i),e(()=>{typeof a==`function`?a(null):a&&typeof a==`object`&&`current`in a&&(a.current=null)}),i.className=`input input-bordered`,i.setAttribute(`placeholder`,`点击按钮自动聚焦`);let s=u(`button`,r);f(r,s),s.className=`btn btn-primary`;let c=e=>{let t=T;typeof t==`function`&&t(e)};return s.addEventListener(`click`,c),e(()=>s.removeEventListener(`click`,c)),f(s,o(`聚焦`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=o(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>l(()=>{})))};export{T as default};
import{F as e,P as t,Ut as n,V as r,Vt as i,Wt as a,et as o,fn as s,gn as c,hn as l,in as u,mn as d,mt as f,nt as p,sn as m,u as h,yn as g}from"./rue-runtime-BWbIfNT8.js";import{t as _}from"./Code-C5ZhIIr9.js";import{r as v}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var y=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Refs 基础</h1>`),b=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),x=g(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),S=(g,S,C)=>{let w=o(`Refs:hook:0`),T=()=>{let e=w.current;console.info(e),e&&typeof e.focus==`function`&&e.focus()},E=f(`code`);return p(()=>t(v,()=>({children:(t,o,f)=>{let p=()=>a(t=>{let i=d();i.appendChild(y().content.cloneNode(!0));let o=b().content.cloneNode(!0),f=o.firstChild,p=f.childNodes[0],g=f.childNodes[1];i.appendChild(o),p.setAttribute(`role`,`tab`);let v;u(()=>{let e=`tab ${E.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(v,t)||(v=t,p.setAttribute(`class`,t))}),m(h(t,p,`click`,()=>()=>{E.value=`preview`})),g.setAttribute(`role`,`tab`);let S;u(()=>{let e=`tab ${E.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,g.setAttribute(`class`,t))}),m(h(t,g,`click`,()=>()=>{E.value=`code`}));let C=x().content.cloneNode(!0),D=C.firstChild,O=D.childNodes[0],k=O.parentNode,A=D.childNodes[1],j=A.parentNode;i.appendChild(C),n(k,O,()=>{let t=E.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(t=>{let n=l(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let r=l(`div`,n);return s(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,_,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>r(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>r(e=>{let t=d();return[t.firstChild,t.lastChild]})}}),n(j,A,()=>{let e=E.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let t=l(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let n=l(`div`,t);s(t,n),n.setAttribute(`class`,`card-body grid gap-4`);let r=l(`input`,n);s(n,r);let i=w;typeof i==`function`?i(r):i&&typeof i==`object`&&`current`in i&&(i.current=r),m(()=>{typeof i==`function`?i(null):i&&typeof i==`object`&&`current`in i&&(i.current=null)}),r.setAttribute(`class`,`input input-bordered`),r.setAttribute(`placeholder`,`点击按钮自动聚焦`);let a=l(`button`,n);s(n,a),a.setAttribute(`class`,`btn btn-primary`);let o=e=>{let t=T;typeof t==`function`&&t(e)};return a.addEventListener(`click`,o),m(()=>a.removeEventListener(`click`,o)),s(a,c(`聚焦`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>r(e=>{let t=d();return[t.firstChild,t.lastChild]})}});let M=c(``),N=c(``);return i.insertBefore(M,i.firstChild),i.appendChild(N),[i.firstChild,i.lastChild]});return t==null?p():i(t,f,p)}})))};export{S as default};
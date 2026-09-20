import{F as e,P as t,Qt as n,Ut as r,V as i,Vt as a,Wt as o,fn as s,gn as c,hn as l,in as u,mn as d,mt as f,nt as p,sn as m,st as h,u as g,yn as _}from"./rue-runtime-BWbIfNT8.js";import{t as v}from"./Code-C5ZhIIr9.js";import{r as y}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var b=_(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">受控输入</h1>`),x=_(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),S=_(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),C=(_,C,w)=>{let[T,E]=h(`ControlledInputs:hook:0`,``),D=f(`code`);return p(()=>t(y,()=>({children:(t,f,p)=>{let h=()=>o(t=>{let a=d();a.appendChild(b().content.cloneNode(!0));let f=x().content.cloneNode(!0),p=f.firstChild,h=p.childNodes[0],_=p.childNodes[1];a.appendChild(f),h.setAttribute(`role`,`tab`);let y;u(()=>{let e=`tab ${D.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(y,t)||(y=t,h.setAttribute(`class`,t))}),m(g(t,h,`click`,()=>()=>{D.value=`preview`})),_.setAttribute(`role`,`tab`);let C;u(()=>{let e=`tab ${D.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,_.setAttribute(`class`,t))}),m(g(t,_,`click`,()=>()=>{D.value=`code`}));let w=S().content.cloneNode(!0),O=w.firstChild,k=O.childNodes[0],A=k.parentNode,j=O.childNodes[1],M=j.parentNode;a.appendChild(w),r(A,k,()=>{let t=D.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>o(t=>{let n=l(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let r=l(`div`,n);return s(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,v,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

const ControlledInputs: FC = () => {
  const [text, setText] = useState('');
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <input
          className="input input-bordered"
          value={text}
          onInput={(e: any) => setText((e.target as HTMLInputElement).value)}
          placeholder="输入试试"
        />
        <div>当前：{text}</div>
      </div>
    </div>
  );
};

export default ControlledInputs;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=d();return[t.firstChild,t.lastChild]})}}),r(M,j,()=>{let e=D.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let t=l(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let r=l(`div`,t);s(t,r),r.setAttribute(`class`,`card-body grid gap-4`);let i=l(`input`,r);s(r,i),i.setAttribute(`class`,`input input-bordered`);let a;u(()=>{let e=T.get(),t=e==null?``:String(e);Object.is(a,t)||(a=t,i.value=t)});let o=e=>{let t=e=>E(e.target.value);typeof t==`function`&&t(e)};i.addEventListener(`input`,o),m(()=>i.removeEventListener(`input`,o)),i.setAttribute(`placeholder`,`输入试试`);let d=l(`div`,r);s(r,d),s(d,c(`当前：`));let f=c(``);return s(d,f),n(f,()=>T.get()),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=d();return[t.firstChild,t.lastChild]})}});let N=c(``),P=c(``);return a.insertBefore(N,a.firstChild),a.appendChild(P),[a.firstChild,a.lastChild]});return t==null?h():a(t,p,h)}})))};export{C as default};
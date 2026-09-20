import{H as e,Qt as t,Ut as n,V as r,Vt as i,Wt as a,Y as o,et as s,fn as c,gn as l,hn as u,in as d,mn as f,sn as p,st as m,u as h,yn as g,yt as _}from"./rue-runtime-Cv6BZekS.js";import{t as v}from"./Code-BzFVdc3U.js";import{r as y}from"./SidebarPlaygroundExample-rFyhXfC_.js";var b=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">受控输入</h1>`),x=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),S=g(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),C=(g,C,w)=>{let[T,E]=s(`ControlledInputs:hook:0`,``),D=m(`code`);return o(()=>r(y,()=>({children:(r,o,s)=>{let m=()=>a(r=>{let i=f();i.appendChild(b().content.cloneNode(!0));let o=x().content.cloneNode(!0),s=o.firstChild,m=s.childNodes[0],g=s.childNodes[1];i.appendChild(o),m.setAttribute(`role`,`tab`);let y;d(()=>{let e=`tab ${D.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(y,t)||(y=t,m.setAttribute(`class`,t))}),p(h(r,m,`click`,()=>()=>{D.value=`preview`})),g.setAttribute(`role`,`tab`);let C;d(()=>{let e=`tab ${D.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,g.setAttribute(`class`,t))}),p(h(r,g,`click`,()=>()=>{D.value=`code`}));let w=S().content.cloneNode(!0),O=w.firstChild,k=O.childNodes[0],A=k.parentNode,j=O.childNodes[1],M=j.parentNode;i.appendChild(w),n(A,k,()=>{let t=D.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(t=>{let n=u(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let r=u(`div`,n);return c(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,v,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>_(e=>{let n=l(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=f();return[t.firstChild,t.lastChild]})}}),n(M,j,()=>{let e=D.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let n=u(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=u(`div`,n);c(n,r),r.setAttribute(`class`,`card-body grid gap-4`);let i=u(`input`,r);c(r,i),i.setAttribute(`class`,`input input-bordered`);let a;d(()=>{let e=T.get(),t=e==null?``:String(e);Object.is(a,t)||(a=t,i.value=t)});let o=e=>{let t=e=>E(e.target.value);typeof t==`function`&&t(e)};i.addEventListener(`input`,o),p(()=>i.removeEventListener(`input`,o)),i.setAttribute(`placeholder`,`输入试试`);let s=u(`div`,r);c(r,s),c(s,l(`当前：`));let f=l(``);return c(s,f),t(f,()=>T.get()),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>_(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=f();return[t.firstChild,t.lastChild]})}});let N=l(``),P=l(``);return i.insertBefore(N,i.firstChild),i.appendChild(P),[i.firstChild,i.lastChild]});return r==null?m():i(r,s,m)}})))};export{C as default};
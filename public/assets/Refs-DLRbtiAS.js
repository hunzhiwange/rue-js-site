import{H as e,Ut as t,V as n,Vt as r,Wt as i,Y as a,fn as o,gn as s,hn as c,in as l,mn as u,q as d,sn as f,st as p,u as m,yn as h,yt as g}from"./rue-runtime-Cv6BZekS.js";import{t as _}from"./Code-BzFVdc3U.js";import{r as v}from"./SidebarPlaygroundExample-rFyhXfC_.js";var y=h(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Refs 基础</h1>`),b=h(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),x=h(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),S=(h,S,C)=>{let w=d(`Refs:hook:0`),T=()=>{let e=w.current;console.info(e),e&&typeof e.focus==`function`&&e.focus()},E=p(`code`);return a(()=>n(v,()=>({children:(n,a,d)=>{let p=()=>i(n=>{let r=u();r.appendChild(y().content.cloneNode(!0));let a=b().content.cloneNode(!0),d=a.firstChild,p=d.childNodes[0],h=d.childNodes[1];r.appendChild(a),p.setAttribute(`role`,`tab`);let v;l(()=>{let e=`tab ${E.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(v,t)||(v=t,p.setAttribute(`class`,t))}),f(m(n,p,`click`,()=>()=>{E.value=`preview`})),h.setAttribute(`role`,`tab`);let S;l(()=>{let e=`tab ${E.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,h.setAttribute(`class`,t))}),f(m(n,h,`click`,()=>()=>{E.value=`code`}));let C=x().content.cloneNode(!0),D=C.firstChild,O=D.childNodes[0],k=O.parentNode,A=D.childNodes[1],j=A.parentNode;r.appendChild(C),t(k,O,()=>{let t=E.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>i(t=>{let n=c(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let r=c(`div`,n);return o(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,_,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>g(e=>{let n=s(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=u();return[t.firstChild,t.lastChild]})}}),t(j,A,()=>{let e=E.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>i(e=>{let t=c(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let n=c(`div`,t);o(t,n),n.setAttribute(`class`,`card-body grid gap-4`);let r=c(`input`,n);o(n,r);let i=w;typeof i==`function`?i(r):i&&typeof i==`object`&&`current`in i&&(i.current=r),f(()=>{typeof i==`function`?i(null):i&&typeof i==`object`&&`current`in i&&(i.current=null)}),r.setAttribute(`class`,`input input-bordered`),r.setAttribute(`placeholder`,`点击按钮自动聚焦`);let a=c(`button`,n);o(n,a),a.setAttribute(`class`,`btn btn-primary`);let l=e=>{let t=T;typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),f(()=>a.removeEventListener(`click`,l)),o(a,s(`聚焦`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>g(t=>{let n=s(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=u();return[t.firstChild,t.lastChild]})}});let M=s(``),N=s(``);return r.insertBefore(M,r.firstChild),r.appendChild(N),[r.firstChild,r.lastChild]});return n==null?p():r(n,d,p)}})))};export{S as default};
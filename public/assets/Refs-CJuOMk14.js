import{$ as e,Gt as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,i as p,l as m,ot as h,t as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _,t as v}from"./vapor-helpers-vapor-DkadWylb.js";import{t as y}from"./Code-B_4lzH85.js";import{t as b}from"./SidebarPlaygroundExample-CtM-WHq_.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>r(()=>{let e=_(`useRef:1:0`,()=>t());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>i(`code`))}}));return d(t=>{let r=a(),i=l(`rue:component:anchor`);return s(r,i),m(g(b,{children:d(()=>{let t=a(),r=e(`h1`,t);s(t,r),u(r,`text-5xl font-semibold mb-4 md:mb-4`),s(r,f(`Refs 基础`));let i=e(`div`,t);s(t,i),h(i,`role`,`tablist`),u(i,`tabs tabs-box`);let _=e(`button`,i);s(i,_),h(_,`role`,`tab`),c(()=>{u(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),n(_,`click`,()=>{C.value=`preview`}),s(_,f(`效果`));let b=e(`button`,i);s(i,b),h(b,`role`,`tab`),c(()=>{u(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),n(b,`click`,()=>{C.value=`code`}),s(b,f(`代码`));let w=e(`div`,t);s(t,w),u(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=l(`rue:slot:anchor`);s(w,T),c(()=>{let t=C.value===`code`?d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});o(()=>m(e,r,i))}),t}):``;o(()=>m(t,w,T))}),s(w,f(` `));let E=l(`rue:slot:anchor`);return s(w,E),c(()=>{let t=C.value===`preview`?d(()=>{let t=a(),r=e(`div`,t);s(t,r),u(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),u(i,`card-body grid gap-4`);let o=e(`input`,i);s(i,o);let c=v(o,()=>x);p(()=>{c()}),u(o,`input input-bordered`),h(o,`placeholder`,`点击按钮自动聚焦`);let l=e(`button`,i);return s(i,l),u(l,`btn btn-primary`),n(l,`click`,S),s(l,f(`聚焦`)),t}):``;o(()=>m(t,w,E))}),t})}),r,i),r})};export{x as default};
import{$ as e,Gt as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,et as d,l as f,ot as p,r as m,s as h,t as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,t as v}from"./vapor-helpers-vapor-CJFAWine.js";import{t as y}from"./Code-Ds9lKLk6.js";import{t as b}from"./SidebarPlaygroundExample-KML-rOvA.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>r(()=>{let e=_(`useRef:1:0`,()=>t());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>i(`code`))}}));return f(t=>{let r=a(),i=l(`rue:component:anchor`);return s(r,i),h(g(b,{children:f(()=>{let t=a(),r=e(`h1`,t);s(t,r),u(r,`text-5xl font-semibold mb-4 md:mb-4`),s(r,d(`Refs 基础`));let i=e(`div`,t);s(t,i),p(i,`role`,`tablist`),u(i,`tabs tabs-box`);let _=e(`button`,i);s(i,_),p(_,`role`,`tab`),c(()=>{u(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),n(_,`click`,()=>{C.value=`preview`}),s(_,d(`效果`));let b=e(`button`,i);s(i,b),p(b,`role`,`tab`),c(()=>{u(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),n(b,`click`,()=>{C.value=`code`}),s(b,d(`代码`));let w=e(`div`,t);s(t,w),u(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=l(`rue:slot:anchor`);s(w,T),c(()=>{let t=C.value===`code`?f(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});o(()=>h(e,r,i))}),t}):``;o(()=>h(t,w,T))}),s(w,d(` `));let E=l(`rue:slot:anchor`);return s(w,E),c(()=>{let t=C.value===`preview`?f(()=>{let t=a(),r=e(`div`,t);s(t,r),u(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),u(i,`card-body grid gap-4`);let o=e(`input`,i);s(i,o);let c=v(o,()=>x);m(()=>{c()}),u(o,`input input-bordered`),p(o,`placeholder`,`点击按钮自动聚焦`);let l=e(`button`,i);return s(i,l),u(l,`btn btn-primary`),n(l,`click`,S),s(l,d(`聚焦`)),t}):``;o(()=>h(t,w,E))}),t})}),r,i),r})};export{x as default};
import{$ as e,Ht as t,J as n,Kt as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,l as u,q as d,qt as f,r as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,t as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./Code-CZqShVUj.js";import{r as b}from"./SidebarPlaygroundExample-5H7RL-T7.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>f(()=>{let e=_(`useRef:1:0`,()=>r());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>i(`code`))}}));return u(r=>{let i=c(),f=o(`rue:component:anchor`);return n(i,f),m(g(b,{children:u(()=>{let r=c(),i=a(`h1`,r);n(r,i),h(i,`text-5xl font-semibold mb-4 md:mb-4`),n(i,e(`Refs 基础`));let f=a(`div`,r);n(r,f),l(f,`role`,`tablist`),h(f,`tabs tabs-box`);let _=a(`button`,f);n(f,_),l(_,`role`,`tab`),s(()=>{h(_,`tab ${C.value===`preview`?`tab-active`:``}`)}),d(_,`click`,()=>{C.value=`preview`}),n(_,e(`效果`));let b=a(`button`,f);n(f,b),l(b,`role`,`tab`),s(()=>{h(b,`tab ${C.value===`code`?`tab-active`:``}`)}),d(b,`click`,()=>{C.value=`code`}),n(b,e(`代码`));let w=a(`div`,r);n(r,w),h(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=o(`rue:slot:anchor`);n(w,T),s(()=>{let e=C.value===`code`?u(()=>{let e=c(),r=a(`div`,e);n(e,r),h(r,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let i=a(`div`,r);n(r,i),h(i,`card-body p-0`);let l=o(`rue:component:anchor`);return n(i,l),s(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});t(()=>m(e,i,l))}),e}):``;t(()=>m(e,w,T))}),n(w,e(` `));let E=o(`rue:slot:anchor`);return n(w,E),s(()=>{let r=C.value===`preview`?u(()=>{let t=c(),r=a(`div`,t);n(t,r),h(r,`card bg-base-100 shadow`);let i=a(`div`,r);n(r,i),h(i,`card-body grid gap-4`);let o=a(`input`,i);n(i,o);let s=v(o,()=>x);p(()=>{s()}),h(o,`input input-bordered`),l(o,`placeholder`,`点击按钮自动聚焦`);let u=a(`button`,i);return n(i,u),h(u,`btn btn-primary`),d(u,`click`,S),n(u,e(`聚焦`)),t}):``;t(()=>m(r,w,E))}),r})}),i,f),i})};export{x as default};
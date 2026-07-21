import{Cn as e,Ct as t,Sn as n,Tt as r,dt as i,ft as a,mt as o,ot as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,n as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,t as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{r as b}from"./SidebarPlaygroundExample-B78jsvoF.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>e(()=>{let e=_(`useRef:1:0`,()=>n());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>c(`code`))}}));return p(e=>{let n=a(),c=i(`rue:component:anchor`);return u(n,c),h(g(b,{children:p(()=>{let e=a(),n=l(`h1`,e);u(e,n),r(n,`text-5xl font-semibold mb-4 md:mb-4`),u(n,o(`Refs 基础`));let c=l(`div`,e);u(e,c),t(c,`role`,`tablist`),r(c,`tabs tabs-box`);let _=l(`button`,c);u(c,_),t(_,`role`,`tab`),d(()=>{r(_,`tab ${C.value===`preview`?`tab-active`:``}`)}),s(_,`click`,()=>{C.value=`preview`}),u(_,o(`效果`));let b=l(`button`,c);u(c,b),t(b,`role`,`tab`),d(()=>{r(b,`tab ${C.value===`code`?`tab-active`:``}`)}),s(b,`click`,()=>{C.value=`code`}),u(b,o(`代码`));let w=l(`div`,e);u(e,w),r(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=i(`rue:slot:anchor`);u(w,T),d(()=>{let e=C.value===`code`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let n=l(`div`,t);u(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return u(n,o),d(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});f(()=>h(e,n,o))}),e}):``;f(()=>h(e,w,T))}),u(w,o(` `));let E=i(`rue:slot:anchor`);return u(w,E),d(()=>{let e=C.value===`preview`?p(()=>{let e=a(),n=l(`div`,e);u(e,n),r(n,`card bg-base-100 shadow`);let i=l(`div`,n);u(n,i),r(i,`card-body grid gap-4`);let c=l(`input`,i);u(i,c);let d=v(c,()=>x);m(()=>{d()}),r(c,`input input-bordered`),t(c,`placeholder`,`点击按钮自动聚焦`);let f=l(`button`,i);return u(i,f),r(f,`btn btn-primary`),s(f,`click`,S),u(f,o(`聚焦`)),e}):``;f(()=>h(e,w,E))}),e})}),n,c),n})};export{x as default};
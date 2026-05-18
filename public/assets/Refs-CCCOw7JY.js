import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,i as d,l as f,mt as p,st as m,t as h,vt as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,t as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>u(()=>{let e=_(`useRef:1:0`,()=>p());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>m(`code`))}}));return c(u=>{let p=t(),m=e(`rue:component:anchor`);return a(p,m),f(h(b,{children:c(()=>{let u=t(),p=r(`h1`,u);a(u,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`Refs 基础`));let m=r(`div`,u);a(u,m),s(m,`role`,`tablist`),n(m,`tabs tabs-box`);let _=r(`button`,m);a(m,_),s(_,`role`,`tab`),g(()=>{n(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{C.value=`preview`}),a(_,o(`效果`));let b=r(`button`,m);a(m,b),s(b,`role`,`tab`),g(()=>{n(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(b,`click`,()=>{C.value=`code`}),a(b,o(`代码`));let w=r(`div`,u);a(u,w),n(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);a(w,T),g(()=>{let i=C.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),g(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});l(()=>f(e,s,c))}),i}):``;l(()=>f(i,w,T))}),a(w,o(` `));let E=e(`rue:slot:anchor`);return a(w,E),g(()=>{let e=C.value===`preview`?c(()=>{let e=t(),c=r(`div`,e);a(e,c),n(c,`card bg-base-100 shadow`);let l=r(`div`,c);a(c,l),n(l,`card-body grid gap-4`);let u=r(`input`,l);a(l,u);let f=v(u,()=>x);d(()=>{f()}),n(u,`input input-bordered`),s(u,`placeholder`,`点击按钮自动聚焦`);let p=r(`button`,l);return a(l,p),n(p,`btn btn-primary`),i(p,`click`,S),a(p,o(`聚焦`)),e}):``;l(()=>f(e,w,E))}),u})}),p,m),p})};export{x as default};
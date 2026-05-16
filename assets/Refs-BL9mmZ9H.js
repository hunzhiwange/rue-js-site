import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,i as u,l as d,mt as f,ot as p,pt as m,t as h,ut as g}from"./vapor-runtime-B3ypJaOM.js";import{a as _,t as v}from"./vapor-helpers-vapor-CER7Yupw.js";import{t as y}from"./Code-DOCCgQFa.js";import{t as b}from"./SidebarPlaygroundExample-DwVZAGT7.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>f(()=>{let e=_(`useRef:1:0`,()=>m());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>p(`code`))}}));return l(f=>{let p=t(),m=e(`rue:component:anchor`);return a(p,m),d(h(b,{children:l(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`Refs 基础`));let m=r(`div`,f);a(f,m),s(m,`role`,`tablist`),n(m,`tabs tabs-box`);let _=r(`button`,m);a(m,_),s(_,`role`,`tab`),c(()=>{n(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{C.value=`preview`}),a(_,o(`效果`));let b=r(`button`,m);a(m,b),s(b,`role`,`tab`),c(()=>{n(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(b,`click`,()=>{C.value=`code`}),a(b,o(`代码`));let w=r(`div`,f);a(f,w),n(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);a(w,T),c(()=>{let i=C.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});g(()=>d(e,s,l))}),i}):``;g(()=>d(i,w,T))}),a(w,o(` `));let E=e(`rue:slot:anchor`);return a(w,E),c(()=>{let e=C.value===`preview`?l(()=>{let e=t(),c=r(`div`,e);a(e,c),n(c,`card bg-base-100 shadow`);let l=r(`div`,c);a(c,l),n(l,`card-body grid gap-4`);let d=r(`input`,l);a(l,d);let f=v(d,()=>x);u(()=>{f()}),n(d,`input input-bordered`),s(d,`placeholder`,`点击按钮自动聚焦`);let p=r(`button`,l);return a(l,p),n(p,`btn btn-primary`),i(p,`click`,S),a(p,o(`聚焦`)),e}):``;g(()=>d(e,w,E))}),f})}),p,m),p})};export{x as default};
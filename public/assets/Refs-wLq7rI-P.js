import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,n as l,nt as u,o as d,rn as f,rt as p,t as m,tt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,t as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`useRef:1:0`,()=>f());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>t(`code`))}}));return s(t=>{let o=h(),f=a(`rue:component:anchor`);return n(o,f),d(m(b,{children:s(()=>{let t=h(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,p(`Refs 基础`));let f=u(`div`,t);n(t,f),c(f,`role`,`tablist`),i(f,`tabs tabs-box`);let _=u(`button`,f);n(f,_),c(_,`role`,`tab`),g(()=>{i(_,`tab ${C.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{C.value=`preview`}),n(_,p(`效果`));let b=u(`button`,f);n(f,b),c(b,`role`,`tab`),g(()=>{i(b,`tab ${C.value===`code`?`tab-active`:``}`)}),r(b,`click`,()=>{C.value=`code`}),n(b,p(`代码`));let w=u(`div`,t);n(t,w),i(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);n(w,T),g(()=>{let t=C.value===`code`?s(()=>{let t=h(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,w,T))}),n(w,p(` `));let E=a(`rue:slot:anchor`);return n(w,E),g(()=>{let t=C.value===`preview`?s(()=>{let e=h(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let a=u(`div`,t);n(t,a),i(a,`card-body grid gap-4`);let o=u(`input`,a);n(a,o);let s=v(o,()=>x);l(()=>{s()}),i(o,`input input-bordered`),c(o,`placeholder`,`点击按钮自动聚焦`);let d=u(`button`,a);return n(a,d),i(d,`btn btn-primary`),r(d,`click`,S),n(d,p(`聚焦`)),e}):``;e(()=>d(t,w,E))}),t})}),o,f),o})};export{x as default};
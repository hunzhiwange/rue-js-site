import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Yt as o,Z as s,ct as c,et as l,l as u,n as d,nt as f,o as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,t as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./Code-D5UqTwV6.js";import{r as b}from"./SidebarPlaygroundExample-D2vGHFCu.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>a(()=>{let e=_(`useRef:1:0`,()=>o());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>n(`code`))}}));return u(n=>{let a=l(),o=e(`rue:component:anchor`);return s(a,o),p(m(b,{children:u(()=>{let n=l(),a=h(`h1`,n);s(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),s(a,f(`Refs 基础`));let o=h(`div`,n);s(n,o),c(o,`role`,`tablist`),g(o,`tabs tabs-box`);let _=h(`button`,o);s(o,_),c(_,`role`,`tab`),t(()=>{g(_,`tab ${C.value===`preview`?`tab-active`:``}`)}),i(_,`click`,()=>{C.value=`preview`}),s(_,f(`效果`));let b=h(`button`,o);s(o,b),c(b,`role`,`tab`),t(()=>{g(b,`tab ${C.value===`code`?`tab-active`:``}`)}),i(b,`click`,()=>{C.value=`code`}),s(b,f(`代码`));let w=h(`div`,n);s(n,w),g(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);s(w,T),t(()=>{let n=C.value===`code`?u(()=>{let n=l(),i=h(`div`,n);s(n,i),g(i,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let a=h(`div`,i);s(i,a),g(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});r(()=>p(e,a,o))}),n}):``;r(()=>p(n,w,T))}),s(w,f(` `));let E=e(`rue:slot:anchor`);return s(w,E),t(()=>{let e=C.value===`preview`?u(()=>{let e=l(),t=h(`div`,e);s(e,t),g(t,`card bg-base-100 shadow`);let n=h(`div`,t);s(t,n),g(n,`card-body grid gap-4`);let r=h(`input`,n);s(n,r);let a=v(r,()=>x);d(()=>{a()}),g(r,`input input-bordered`),c(r,`placeholder`,`点击按钮自动聚焦`);let o=h(`button`,n);return s(n,o),g(o,`btn btn-primary`),i(o,`click`,S),s(o,f(`聚焦`)),e}):``;r(()=>p(e,w,E))}),n})}),a,o),a})};export{x as default};
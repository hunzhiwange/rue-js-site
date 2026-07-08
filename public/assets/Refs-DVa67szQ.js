import{Q as e,Vt as t,Xt as n,Z as r,an as i,dt as a,it as o,l as s,n as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,t as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./Code-BoXKy3gJ.js";import{r as b}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>d(()=>{let e=_(`useRef:1:0`,()=>i());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>n(`code`))}}));return s(n=>{let i=l(),d=g(`rue:component:anchor`);return e(i,d),u(m(b,{children:s(()=>{let n=l(),i=p(`h1`,n);e(n,i),f(i,`text-5xl font-semibold mb-4 md:mb-4`),e(i,o(`Refs 基础`));let d=p(`div`,n);e(n,d),a(d,`role`,`tablist`),f(d,`tabs tabs-box`);let _=p(`button`,d);e(d,_),a(_,`role`,`tab`),t(()=>{f(_,`tab ${C.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{C.value=`preview`}),e(_,o(`效果`));let b=p(`button`,d);e(d,b),a(b,`role`,`tab`),t(()=>{f(b,`tab ${C.value===`code`?`tab-active`:``}`)}),r(b,`click`,()=>{C.value=`code`}),e(b,o(`代码`));let w=p(`div`,n);e(n,w),f(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=g(`rue:slot:anchor`);e(w,T),t(()=>{let n=C.value===`code`?s(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,w,T))}),e(w,o(` `));let E=g(`rue:slot:anchor`);return e(w,E),t(()=>{let t=C.value===`preview`?s(()=>{let t=l(),n=p(`div`,t);e(t,n),f(n,`card bg-base-100 shadow`);let i=p(`div`,n);e(n,i),f(i,`card-body grid gap-4`);let s=p(`input`,i);e(i,s);let u=v(s,()=>x);c(()=>{u()}),f(s,`input input-bordered`),a(s,`placeholder`,`点击按钮自动聚焦`);let d=p(`button`,i);return e(i,d),f(d,`btn btn-primary`),r(d,`click`,S),e(d,o(`聚焦`)),t}):``;h(()=>u(t,w,E))}),n})}),i,d),i})};export{x as default};
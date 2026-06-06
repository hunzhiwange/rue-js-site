import{$ as e,B as t,Ct as n,Dt as r,G as i,H as a,U as o,W as s,Z as c,ht as l,l as u,r as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,t as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{t as b}from"./SidebarPlaygroundExample-CdMvdgT7.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>m(()=>{let e=_(`useRef:1:0`,()=>n());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>l(`code`))}}));return u(n=>{let l=o(),m=a(`rue:component:anchor`);return t(l,m),f(p(b,{children:u(()=>{let n=o(),l=s(`h1`,n);t(n,l),e(l,`text-5xl font-semibold mb-4 md:mb-4`),t(l,i(`Refs 基础`));let m=s(`div`,n);t(n,m),c(m,`role`,`tablist`),e(m,`tabs tabs-box`);let _=s(`button`,m);t(m,_),c(_,`role`,`tab`),r(()=>{e(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),g(_,`click`,()=>{C.value=`preview`}),t(_,i(`效果`));let b=s(`button`,m);t(m,b),c(b,`role`,`tab`),r(()=>{e(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),g(b,`click`,()=>{C.value=`code`}),t(b,i(`代码`));let w=s(`div`,n);t(n,w),e(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);t(w,T),r(()=>{let n=C.value===`code`?u(()=>{let n=o(),i=s(`div`,n);t(n,i),e(i,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let c=s(`div`,i);t(i,c),e(c,`card-body p-0`);let l=a(`rue:component:anchor`);return t(c,l),r(()=>{let e=p(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});h(()=>f(e,c,l))}),n}):``;h(()=>f(n,w,T))}),t(w,i(` `));let E=a(`rue:slot:anchor`);return t(w,E),r(()=>{let n=C.value===`preview`?u(()=>{let n=o(),r=s(`div`,n);t(n,r),e(r,`card bg-base-100 shadow`);let a=s(`div`,r);t(r,a),e(a,`card-body grid gap-4`);let l=s(`input`,a);t(a,l);let u=v(l,()=>x);d(()=>{u()}),e(l,`input input-bordered`),c(l,`placeholder`,`点击按钮自动聚焦`);let f=s(`button`,a);return t(a,f),e(f,`btn btn-primary`),g(f,`click`,S),t(f,i(`聚焦`)),n}):``;h(()=>f(n,w,E))}),n})}),l,m),l})};export{x as default};
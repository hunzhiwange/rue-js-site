import{$ as e,Ht as t,J as n,Kt as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,ot as f,qt as p,r as m,s as h,t as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,t as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./Code-5DOEyGxf.js";import{r as b}from"./SidebarPlaygroundExample-cASgDpH3.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`useRef:1:0`,()=>r());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>a(`code`))}}));return d(r=>{let a=i(),p=c(`rue:component:anchor`);return s(a,p),h(g(b,{children:d(()=>{let r=i(),a=e(`h1`,r);s(r,a),l(a,`text-5xl font-semibold mb-4 md:mb-4`),s(a,u(`Refs 基础`));let p=e(`div`,r);s(r,p),f(p,`role`,`tablist`),l(p,`tabs tabs-box`);let _=e(`button`,p);s(p,_),f(_,`role`,`tab`),o(()=>{l(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),n(_,`click`,()=>{C.value=`preview`}),s(_,u(`效果`));let b=e(`button`,p);s(p,b),f(b,`role`,`tab`),o(()=>{l(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),n(b,`click`,()=>{C.value=`code`}),s(b,u(`代码`));let w=e(`div`,r);s(r,w),l(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=c(`rue:slot:anchor`);s(w,T),o(()=>{let n=C.value===`code`?d(()=>{let n=i(),r=e(`div`,n);s(n,r),l(r,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let a=e(`div`,r);s(r,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});t(()=>h(e,a,u))}),n}):``;t(()=>h(n,w,T))}),s(w,u(` `));let E=c(`rue:slot:anchor`);return s(w,E),o(()=>{let r=C.value===`preview`?d(()=>{let t=i(),r=e(`div`,t);s(t,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);s(r,a),l(a,`card-body grid gap-4`);let o=e(`input`,a);s(a,o);let c=v(o,()=>x);m(()=>{c()}),l(o,`input input-bordered`),f(o,`placeholder`,`点击按钮自动聚焦`);let d=e(`button`,a);return s(a,d),l(d,`btn btn-primary`),n(d,`click`,S),s(d,u(`聚焦`)),t}):``;t(()=>h(r,w,E))}),r})}),a,p),a})};export{x as default};
import{$ as e,Et as t,G as n,H as r,K as i,Tt as a,V as o,W as s,_t as c,d as l,i as u,kt as d,l as f,q as p,t as m,tt as h,xt as g}from"./vapor-runtime-BAZOdMd8.js";import{a as _,t as v}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as y}from"./Code-DY4Ua5uc.js";import{t as b}from"./SidebarPlaygroundExample-B8LFNSBu.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>t(()=>{let e=_(`useRef:1:0`,()=>a());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>c(`code`))}}));return l(t=>{let a=n(),c=s(`rue:component:anchor`);return r(a,c),f(m(b,{children:l(()=>{let t=n(),a=i(`h1`,t);r(t,a),h(a,`text-5xl font-semibold mb-4 md:mb-4`),r(a,p(`Refs 基础`));let c=i(`div`,t);r(t,c),e(c,`role`,`tablist`),h(c,`tabs tabs-box`);let _=i(`button`,c);r(c,_),e(_,`role`,`tab`),d(()=>{h(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),o(_,`click`,()=>{C.value=`preview`}),r(_,p(`效果`));let b=i(`button`,c);r(c,b),e(b,`role`,`tab`),d(()=>{h(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),o(b,`click`,()=>{C.value=`code`}),r(b,p(`代码`));let w=i(`div`,t);r(t,w),h(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=s(`rue:slot:anchor`);r(w,T),d(()=>{let e=C.value===`code`?l(()=>{let e=n(),t=i(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let a=i(`div`,t);r(t,a),h(a,`card-body p-0`);let o=s(`rue:component:anchor`);return r(a,o),d(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});g(()=>f(e,a,o))}),e}):``;g(()=>f(e,w,T))}),r(w,p(` `));let E=s(`rue:slot:anchor`);return r(w,E),d(()=>{let t=C.value===`preview`?l(()=>{let t=n(),a=i(`div`,t);r(t,a),h(a,`card bg-base-100 shadow`);let s=i(`div`,a);r(a,s),h(s,`card-body grid gap-4`);let c=i(`input`,s);r(s,c);let l=v(c,()=>x);u(()=>{l()}),h(c,`input input-bordered`),e(c,`placeholder`,`点击按钮自动聚焦`);let d=i(`button`,s);return r(s,d),h(d,`btn btn-primary`),o(d,`click`,S),r(d,p(`聚焦`)),t}):``;g(()=>f(t,w,E))}),t})}),a,c),a})};export{x as default};
import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,gt as u,i as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,t as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./SidebarPlaygroundExample-DKa0aI1C.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>s(()=>{let e=_(`useRef:1:0`,()=>u());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>p(`code`))}}));return g(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(h(b,{children:g(()=>{let s=e(),u=n(`h1`);i(s,u),t(u,`text-5xl font-semibold mb-4 md:mb-4`),i(u,r(`Refs 基础`));let p=n(`div`);i(s,p),o(p,`role`,`tablist`),t(p,`tabs tabs-box`);let _=n(`button`);i(p,_),o(_,`role`,`tab`),c(()=>{t(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),f(_,`click`,()=>{C.value=`preview`}),i(_,r(`效果`));let b=n(`button`);i(p,b),o(b,`role`,`tab`),c(()=>{t(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),f(b,`click`,()=>{C.value=`code`}),i(b,r(`代码`));let w=n(`div`);i(s,w),t(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);i(w,T),c(()=>{let r=C.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let u=a(`rue:component:anchor`);return i(s,u),c(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`});m(()=>l(e,s,u))}),r}):``;m(()=>l(r,w,T))}),i(w,r(` `));let E=a(`rue:slot:anchor`);return i(w,E),c(()=>{let a=C.value===`preview`?g(()=>{let a=e(),s=n(`div`);i(a,s),t(s,`card bg-base-100 shadow`);let c=n(`div`);i(s,c),t(c,`card-body grid gap-4`);let l=n(`input`);i(c,l);let u=v(l,()=>x);d(()=>{u()}),t(l,`input input-bordered`),o(l,`placeholder`,`点击按钮自动聚焦`);let p=n(`button`);return i(c,p),t(p,`btn btn-primary`),f(p,`click`,S),i(p,r(`聚焦`)),a}):``;m(()=>l(a,w,E))}),s})}),s,u),s})};export{x as default};
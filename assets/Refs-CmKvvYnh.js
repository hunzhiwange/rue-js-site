import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,i as c,j as l,lt as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,t as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as v}from"./Code-C8wy38VS.js";import{t as y}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var b=()=>{let{inputRef:b,focus:x,activeTab:S}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`useRef:1:0`,()=>u());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:g(`ref:1:1`,()=>f(`code`))}}));return m(()=>{let u=a(),f=i(`rue:component:anchor`);return l(u,f),s(p(y,{children:m(()=>{let u=a(),f=t(`h1`);l(u,f),o(f,`text-5xl font-semibold mb-4 md:mb-4`),l(f,r(`Refs 基础`));let h=t(`div`);l(u,h),n(h,`role`,`tablist`),o(h,`tabs tabs-box`);let g=t(`button`);l(h,g),n(g,`role`,`tab`),d(()=>{o(g,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),e(g,`click`,()=>{S.value=`preview`}),l(g,r(`效果`));let y=t(`button`);l(h,y),n(y,`role`,`tab`),d(()=>{o(y,String(`tab ${S.value===`code`?`tab-active`:``}`))}),e(y,`click`,()=>{S.value=`code`}),l(y,r(`代码`));let C=t(`div`);l(u,C),o(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);l(C,w),d(()=>{s(S.value===`code`?m(()=>{let e=a(),n=t(`div`);l(e,n),o(n,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let r=t(`div`);l(n,r),o(r,`card-body p-0`);let c=i(`rue:component:anchor`);return l(r,c),d(()=>{s(p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

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

export default Refs;`}),r,c)}),e}):``,C,w)}),l(C,r(` `));let T=i(`rue:slot:anchor`);return l(C,T),d(()=>{s(S.value===`preview`?m(()=>{let i=a(),s=t(`div`);l(i,s),o(s,`card bg-base-100 shadow`);let u=t(`div`);l(s,u),o(u,`card-body grid gap-4`);let d=t(`input`);l(u,d);let f=_(d,()=>b);c(()=>{f()}),o(d,`input input-bordered`),n(d,`placeholder`,`点击按钮自动聚焦`);let p=t(`button`);return l(u,p),o(p,`btn btn-primary`),e(p,`click`,x),l(p,r(`聚焦`)),i}):``,C,T)}),u})}),u,f),u})};export{b as default};
import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as _}from"./Code-C8wy38VS.js";import{t as v}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var y=()=>{let{message:y,activeTab:b}=g(`useSetup:0:0`,()=>h(()=>({message:g(`ref:1:0`,()=>f(`Hello World!`)),activeTab:g(`ref:1:1`,()=>f(`preview`))})));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(v,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`你好，世界（移植自 Vue）`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let v=t(`button`);u(g,v),n(v,`role`,`tab`),d(()=>{s(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{b.value=`preview`}),u(v,r(`效果`));let x=t(`button`);u(g,x),n(x,`role`,`tab`),d(()=>{s(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),e(x,`click`,()=>{b.value=`code`}),u(x,r(`代码`));let S=t(`div`);u(f,S),s(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=a(`rue:slot:anchor`);u(S,C),d(()=>{l(b.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const HelloWorld: FC = () => {
  const message = ref('Hello World!');
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h1>{message.value}</h1>
      </div>
    </div>
  );
};

export default HelloWorld;`}),r,i)}),e}):``,S,C)}),u(S,r(` `));let w=a(`rue:slot:anchor`);return u(S,w),d(()=>{l(b.value===`preview`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow`);let r=t(`div`);u(n,r),s(r,`card-body`);let a=t(`h1`);u(r,a);let l=i(a);return u(a,l),d(()=>{c(l,y.value)}),e}):``,S,w)}),f})}),f,h),f})};export{y as default};
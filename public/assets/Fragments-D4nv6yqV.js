import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as g}from"./Code-BoXKy3gJ.js";import{r as _}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>l(()=>({activeTab:h(`ref:1:0`,()=>n(`code`))})));return o(n=>{let l=s(),h=m(`rue:component:anchor`);return e(l,h),c(f(_,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`Fragments`));let h=d(`div`,n);e(n,h),i(h,`role`,`tablist`),u(h,`tabs tabs-box`);let _=d(`button`,h);e(h,_),i(_,`role`,`tab`),t(()=>{u(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{v.value=`preview`}),e(_,a(`效果`));let y=d(`button`,h);e(h,y),i(y,`role`,`tab`),t(()=>{u(y,`tab ${v.value===`code`?`tab-active`:``}`)}),r(y,`click`,()=>{v.value=`code`}),e(y,a(`代码`));let b=d(`div`,n);e(n,b),u(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=m(`rue:slot:anchor`);e(b,x),t(()=>{let n=v.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,b,x))}),e(b,a(` `));let S=m(`rue:slot:anchor`);return e(b,S),t(()=>{let t=v.value===`preview`?o(()=>{let t=s(),n=d(`div`,t);e(t,n),u(n,`card bg-base-100 shadow`);let r=d(`div`,n);e(n,r),u(r,`card-body grid gap-2`),e(r,a(` `));let i=d(`span`,r);e(r,i),e(i,a(`片段 1`)),e(r,a(` `));let o=d(`span`,r);return e(r,o),e(o,a(`片段 2`)),e(r,a(` `)),t}):``;p(()=>c(t,b,S))}),n})}),l,h),l})};export{v as default};
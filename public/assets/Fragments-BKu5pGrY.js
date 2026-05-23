import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-BAZOdMd8.js";import{a as h}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as g}from"./Code-DY4Ua5uc.js";import{t as _}from"./SidebarPlaygroundExample-B8LFNSBu.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>t(()=>({activeTab:h(`ref:1:0`,()=>s(`code`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(_,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),p(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,d(`Fragments`));let h=i(`div`,t);r(t,h),e(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);r(h,_),e(_,`role`,`tab`),l(()=>{p(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),a(_,`click`,()=>{v.value=`preview`}),r(_,d(`效果`));let y=i(`button`,h);r(h,y),e(y,`role`,`tab`),l(()=>{p(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),a(y,`click`,()=>{v.value=`code`}),r(y,d(`代码`));let b=i(`div`,t);r(t,b),p(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=o(`rue:slot:anchor`);r(b,x),l(()=>{let e=v.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,t);r(t,a),p(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),l(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});m(()=>u(e,a,s))}),e}):``;m(()=>u(e,b,x))}),r(b,d(` `));let S=o(`rue:slot:anchor`);return r(b,S),l(()=>{let e=v.value===`preview`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow`);let a=i(`div`,t);r(t,a),p(a,`card-body grid gap-2`),r(a,d(` `));let o=i(`span`,a);r(a,o),r(o,d(`片段 1`)),r(a,d(` `));let s=i(`span`,a);return r(a,s),r(s,d(`片段 2`)),r(a,d(` `)),e}):``;m(()=>u(e,b,S))}),t})}),s,h),s})};export{v as default};
import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,ot as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{r as _}from"./SidebarPlaygroundExample-B78jsvoF.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>e(()=>({activeTab:h(`ref:1:0`,()=>s(`code`))})));return f(e=>{let s=i(),h=r(`rue:component:anchor`);return l(s,h),p(m(_,{children:f(()=>{let e=i(),s=c(`h1`,e);l(e,s),n(s,`text-5xl font-semibold mb-4 md:mb-4`),l(s,a(`Fragments`));let h=c(`div`,e);l(e,h),t(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=c(`button`,h);l(h,_),t(_,`role`,`tab`),u(()=>{n(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),o(_,`click`,()=>{v.value=`preview`}),l(_,a(`效果`));let y=c(`button`,h);l(h,y),t(y,`role`,`tab`),u(()=>{n(y,`tab ${v.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{v.value=`code`}),l(y,a(`代码`));let b=c(`div`,e);l(e,b),n(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=r(`rue:slot:anchor`);l(b,x),u(()=>{let e=v.value===`code`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow overflow-auto`);let a=c(`div`,t);l(t,a),n(a,`card-body p-0`);let o=r(`rue:component:anchor`);return l(a,o),u(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});d(()=>p(e,a,o))}),e}):``;d(()=>p(e,b,x))}),l(b,a(` `));let S=r(`rue:slot:anchor`);return l(b,S),u(()=>{let e=v.value===`preview`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow`);let r=c(`div`,t);l(t,r),n(r,`card-body grid gap-2`),l(r,a(` `));let o=c(`span`,r);l(r,o),l(o,a(`片段 1`)),l(r,a(` `));let s=c(`span`,r);return l(r,s),l(s,a(`片段 2`)),l(r,a(` `)),e}):``;d(()=>p(e,b,S))}),e})}),s,h),s})};export{v as default};
import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,ot as f,s as p,t as m}from"./vapor-runtime-DHPuOjqh.js";import{a as h}from"./vapor-helpers-vapor-CJFAWine.js";import{t as g}from"./Code-Ds9lKLk6.js";import{t as _}from"./SidebarPlaygroundExample-KML-rOvA.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>n(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return d(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),p(m(_,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`Fragments`));let h=e(`div`,n);o(n,h),f(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),f(_,`role`,`tab`),s(()=>{l(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),t(_,`click`,()=>{v.value=`preview`}),o(_,u(`效果`));let y=e(`button`,h);o(h,y),f(y,`role`,`tab`),s(()=>{l(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),t(y,`click`,()=>{v.value=`code`}),o(y,u(`代码`));let b=e(`div`,n);o(n,b),l(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=c(`rue:slot:anchor`);o(b,x),s(()=>{let t=v.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,b,x))}),o(b,u(` `));let S=c(`rue:slot:anchor`);return o(b,S),s(()=>{let t=v.value===`preview`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-2`),o(r,u(` `));let a=e(`span`,r);o(r,a),o(a,u(`片段 1`)),o(r,u(` `));let s=e(`span`,r);return o(r,s),o(s,u(`片段 2`)),o(r,u(` `)),t}):``;a(()=>p(t,b,S))}),n})}),r,h),r})};export{v as default};
import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m}from"./vapor-runtime-BuwLbCGk.js";import{a as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as g}from"./Code-DQxnq0in.js";import{t as _}from"./SidebarPlaygroundExample-BwOo72z2.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>u(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return c(u=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),d(p(_,{children:c(()=>{let u=t(),f=r(`h1`,u);a(u,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`Fragments`));let h=r(`div`,u);a(u,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),m(()=>{n(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{v.value=`preview`}),a(_,o(`效果`));let y=r(`button`,h);a(h,y),s(y,`role`,`tab`),m(()=>{n(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),i(y,`click`,()=>{v.value=`code`}),a(y,o(`代码`));let b=r(`div`,u);a(u,b),n(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);a(b,x),m(()=>{let i=v.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),m(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,b,x))}),a(b,o(` `));let S=e(`rue:slot:anchor`);return a(b,S),m(()=>{let e=v.value===`preview`?c(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let s=r(`div`,i);a(i,s),n(s,`card-body grid gap-2`),a(s,o(` `));let c=r(`span`,s);a(s,c),a(c,o(`片段 1`)),a(s,o(` `));let l=r(`span`,s);return a(s,l),a(l,o(`片段 2`)),a(s,o(` `)),e}):``;l(()=>d(e,b,S))}),u})}),f,h),f})};export{v as default};
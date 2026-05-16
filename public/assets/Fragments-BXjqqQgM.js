import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m}from"./vapor-runtime-B3ypJaOM.js";import{a as h}from"./vapor-helpers-vapor-CER7Yupw.js";import{t as g}from"./Code-DOCCgQFa.js";import{t as _}from"./SidebarPlaygroundExample-DwVZAGT7.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>d(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),u(p(_,{children:l(()=>{let d=t(),f=r(`h1`,d);a(d,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`Fragments`));let h=r(`div`,d);a(d,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),c(()=>{n(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{v.value=`preview`}),a(_,o(`效果`));let y=r(`button`,h);a(h,y),s(y,`role`,`tab`),c(()=>{n(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),i(y,`click`,()=>{v.value=`code`}),a(y,o(`代码`));let b=r(`div`,d);a(d,b),n(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);a(b,x),c(()=>{let i=v.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});m(()=>u(e,s,l))}),i}):``;m(()=>u(i,b,x))}),a(b,o(` `));let S=e(`rue:slot:anchor`);return a(b,S),c(()=>{let e=v.value===`preview`?l(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let s=r(`div`,i);a(i,s),n(s,`card-body grid gap-2`),a(s,o(` `));let c=r(`span`,s);a(s,c),a(c,o(`片段 1`)),a(s,o(` `));let l=r(`span`,s);return a(s,l),a(l,o(`片段 2`)),a(s,o(` `)),e}):``;m(()=>u(e,b,S))}),d})}),f,h),f})};export{v as default};
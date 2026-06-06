import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{t as _}from"./SidebarPlaygroundExample-CdMvdgT7.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>c(`code`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(_,{children:l(()=>{let c=a(),f=o(`h1`,c);t(c,f),e(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,r(`Fragments`));let h=o(`div`,c);t(c,h),s(h,`role`,`tablist`),e(h,`tabs tabs-box`);let _=o(`button`,h);t(h,_),s(_,`role`,`tab`),n(()=>{e(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),m(_,`click`,()=>{v.value=`preview`}),t(_,r(`效果`));let y=o(`button`,h);t(h,y),s(y,`role`,`tab`),n(()=>{e(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),m(y,`click`,()=>{v.value=`code`}),t(y,r(`代码`));let b=o(`div`,c);t(c,b),e(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=i(`rue:slot:anchor`);t(b,x),n(()=>{let r=v.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=d(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});p(()=>u(e,c,l))}),r}):``;p(()=>u(r,b,x))}),t(b,r(` `));let S=i(`rue:slot:anchor`);return t(b,S),n(()=>{let n=v.value===`preview`?l(()=>{let n=a(),i=o(`div`,n);t(n,i),e(i,`card bg-base-100 shadow`);let s=o(`div`,i);t(i,s),e(s,`card-body grid gap-2`),t(s,r(` `));let c=o(`span`,s);t(s,c),t(c,r(`片段 1`)),t(s,r(` `));let l=o(`span`,s);return t(s,l),t(l,r(`片段 2`)),t(s,r(` `)),n}):``;p(()=>u(n,b,S))}),c})}),f,h),f})};export{v as default};
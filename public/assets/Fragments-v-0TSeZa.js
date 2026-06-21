import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as g}from"./Code-4SUSUwRg.js";import{r as _}from"./SidebarPlaygroundExample-BEWYUWOl.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>o(()=>({activeTab:h(`ref:1:0`,()=>t(`code`))})));return s(t=>{let o=p(),h=a(`rue:component:anchor`);return n(o,h),u(f(_,{children:s(()=>{let t=p(),o=l(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,d(`Fragments`));let h=l(`div`,t);n(t,h),c(h,`role`,`tablist`),i(h,`tabs tabs-box`);let _=l(`button`,h);n(h,_),c(_,`role`,`tab`),m(()=>{i(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{v.value=`preview`}),n(_,d(`效果`));let y=l(`button`,h);n(h,y),c(y,`role`,`tab`),m(()=>{i(y,`tab ${v.value===`code`?`tab-active`:``}`)}),r(y,`click`,()=>{v.value=`code`}),n(y,d(`代码`));let b=l(`div`,t);n(t,b),i(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=a(`rue:slot:anchor`);n(b,x),m(()=>{let t=v.value===`code`?s(()=>{let t=p(),r=l(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=l(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),m(()=>{let t=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});e(()=>u(t,o,s))}),t}):``;e(()=>u(t,b,x))}),n(b,d(` `));let S=a(`rue:slot:anchor`);return n(b,S),m(()=>{let t=v.value===`preview`?s(()=>{let e=p(),t=l(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let r=l(`div`,t);n(t,r),i(r,`card-body grid gap-2`),n(r,d(` `));let a=l(`span`,r);n(r,a),n(a,d(`片段 1`)),n(r,d(` `));let o=l(`span`,r);return n(r,o),n(o,d(`片段 2`)),n(r,d(` `)),e}):``;e(()=>u(t,b,S))}),t})}),o,h),o})};export{v as default};
import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,j as u,lt as d,pt as f,t as p,u as m}from"./vapor-runtime-D3a-68js.js";import{a as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as g}from"./Code-2C2psoH3.js";import{t as _}from"./SidebarPlaygroundExample-DKa0aI1C.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>s(()=>({activeTab:h(`ref:1:0`,()=>d(`code`))})));return m(()=>{let s=e(),d=a(`rue:component:anchor`);return i(s,d),l(p(_,{children:m(()=>{let s=e(),d=n(`h1`);i(s,d),t(d,`text-5xl font-semibold mb-4 md:mb-4`),i(d,r(`Fragments`));let h=n(`div`);i(s,h),o(h,`role`,`tablist`),t(h,`tabs tabs-box`);let _=n(`button`);i(h,_),o(_,`role`,`tab`),c(()=>{t(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),u(_,`click`,()=>{v.value=`preview`}),i(_,r(`效果`));let y=n(`button`);i(h,y),o(y,`role`,`tab`),c(()=>{t(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),u(y,`click`,()=>{v.value=`code`}),i(y,r(`代码`));let b=n(`div`);i(s,b),t(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=a(`rue:slot:anchor`);i(b,x),c(()=>{let r=v.value===`code`?m(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let u=a(`rue:component:anchor`);return i(s,u),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});f(()=>l(e,s,u))}),r}):``;f(()=>l(r,b,x))}),i(b,r(` `));let S=a(`rue:slot:anchor`);return i(b,S),c(()=>{let a=v.value===`preview`?m(()=>{let a=e(),o=n(`div`);i(a,o),t(o,`card bg-base-100 shadow`);let s=n(`div`);i(o,s),t(s,`card-body grid gap-2`),i(s,r(` `));let c=n(`span`);i(s,c),i(c,r(`片段 1`)),i(s,r(` `));let l=n(`span`);return i(s,l),i(l,r(`片段 2`)),i(s,r(` `)),a}):``;f(()=>l(a,b,S))}),s})}),s,d),s})};export{v as default};
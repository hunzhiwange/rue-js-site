import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,nt as u,o as d,t as f,tt as p,ut as m}from"./vapor-runtime-CKrmRMZX.js";import{a as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as g}from"./Code-D5UqTwV6.js";import{r as _}from"./SidebarPlaygroundExample-D2vGHFCu.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>a(()=>({activeTab:h(`ref:1:0`,()=>n(`code`))})));return l(n=>{let a=c(),h=e(`rue:component:anchor`);return o(a,h),d(f(_,{children:l(()=>{let n=c(),a=p(`h1`,n);o(n,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,u(`Fragments`));let h=p(`div`,n);o(n,h),s(h,`role`,`tablist`),m(h,`tabs tabs-box`);let _=p(`button`,h);o(h,_),s(_,`role`,`tab`),t(()=>{m(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),i(_,`click`,()=>{v.value=`preview`}),o(_,u(`效果`));let y=p(`button`,h);o(h,y),s(y,`role`,`tab`),t(()=>{m(y,`tab ${v.value===`code`?`tab-active`:``}`)}),i(y,`click`,()=>{v.value=`code`}),o(y,u(`代码`));let b=p(`div`,n);o(n,b),m(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);o(b,x),t(()=>{let n=v.value===`code`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow overflow-auto`);let a=p(`div`,i);o(i,a),m(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Fragments: FC = () => (
  <div className="grid gap-2">
    <>
      <span>片段 1</span>
      <span>片段 2</span>
    </>
  </div>
);

export default Fragments;`});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,b,x))}),o(b,u(` `));let S=e(`rue:slot:anchor`);return o(b,S),t(()=>{let e=v.value===`preview`?l(()=>{let e=c(),t=p(`div`,e);o(e,t),m(t,`card bg-base-100 shadow`);let n=p(`div`,t);o(t,n),m(n,`card-body grid gap-2`),o(n,u(` `));let r=p(`span`,n);o(n,r),o(r,u(`片段 1`)),o(n,u(` `));let i=p(`span`,n);return o(n,i),o(i,u(`片段 2`)),o(n,u(` `)),e}):``;r(()=>d(e,b,S))}),n})}),a,h),a})};export{v as default};
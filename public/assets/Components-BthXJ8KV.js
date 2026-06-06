import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-ACs_OvwU.js";import{a as h}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as g}from"./Code-CliOXHNE.js";import{t as _}from"./SidebarPlaygroundExample-DXnPmR3z.js";var v=e=>c(t=>{let n=i(`div`,t);r(n,d(`你好，`));let a=o(`rue:slot:anchor`);return r(n,a),l(()=>{let t=e.name;m(()=>u(t,n,a))}),n}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>t(()=>({activeTab:h(`ref:1:0`,()=>s(`code`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(_,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),p(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,d(`组件与 Props 传递`));let h=i(`div`,t);r(t,h),e(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);r(h,_),e(_,`role`,`tab`),l(()=>{p(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),a(_,`click`,()=>{y.value=`preview`}),r(_,d(`效果`));let b=i(`button`,h);r(h,b),e(b,`role`,`tab`),l(()=>{p(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),a(b,`click`,()=>{y.value=`code`}),r(b,d(`代码`));let x=i(`div`,t);r(t,x),p(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=o(`rue:slot:anchor`);r(x,S),l(()=>{let e=y.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,t);r(t,a),p(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),l(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});m(()=>u(e,a,s))}),e}):``;m(()=>u(e,x,S))}),r(x,d(` `));let C=o(`rue:slot:anchor`);return r(x,C),l(()=>{let e=y.value===`preview`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow`);let a=i(`div`,t);r(t,a),p(a,`card-body grid gap-4`);let s=o(`rue:component:anchor`);r(a,s),u(f(v,{name:`Rue`}),a,s);let c=o(`rue:component:anchor`);return r(a,c),u(f(v,{name:`World`}),a,c),e}):``;m(()=>u(e,x,C))}),t})}),s,h),s})};export{y as default};
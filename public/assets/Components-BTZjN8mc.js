import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,t as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h}from"./vapor-helpers-vapor-DkadWylb.js";import{t as g}from"./Code-B_4lzH85.js";import{t as _}from"./SidebarPlaygroundExample-CtM-WHq_.js";var v=t=>u(n=>{let r=e(`div`,n);o(r,d(`你好，`));let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.name;a(()=>f(e,r,i))}),r}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>n(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return u(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),f(m(_,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`组件与 Props 传递`));let h=e(`div`,n);o(n,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),p(_,`role`,`tab`),s(()=>{l(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),t(_,`click`,()=>{y.value=`preview`}),o(_,d(`效果`));let b=e(`button`,h);o(h,b),p(b,`role`,`tab`),s(()=>{l(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),t(b,`click`,()=>{y.value=`code`}),o(b,d(`代码`));let x=e(`div`,n);o(n,x),l(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=c(`rue:slot:anchor`);o(x,S),s(()=>{let t=y.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,x,S))}),o(x,d(` `));let C=c(`rue:slot:anchor`);return o(x,C),s(()=>{let t=y.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-4`);let a=c(`rue:component:anchor`);o(r,a),f(m(v,{name:`Rue`}),r,a);let s=c(`rue:component:anchor`);return o(r,s),f(m(v,{name:`World`}),r,s),t}):``;a(()=>f(t,x,C))}),n})}),r,h),r})};export{y as default};
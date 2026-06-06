import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,ot as f,s as p,t as m}from"./vapor-runtime-DHPuOjqh.js";import{a as h}from"./vapor-helpers-vapor-CJFAWine.js";import{t as g}from"./Code-Ds9lKLk6.js";import{t as _}from"./SidebarPlaygroundExample-KML-rOvA.js";var v=t=>d(n=>{let r=e(`div`,n);o(r,u(`你好，`));let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.name;a(()=>p(e,r,i))}),r}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>n(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return d(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),p(m(_,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`组件与 Props 传递`));let h=e(`div`,n);o(n,h),f(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),f(_,`role`,`tab`),s(()=>{l(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),t(_,`click`,()=>{y.value=`preview`}),o(_,u(`效果`));let b=e(`button`,h);o(h,b),f(b,`role`,`tab`),s(()=>{l(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),t(b,`click`,()=>{y.value=`code`}),o(b,u(`代码`));let x=e(`div`,n);o(n,x),l(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=c(`rue:slot:anchor`);o(x,S),s(()=>{let t=y.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,x,S))}),o(x,u(` `));let C=c(`rue:slot:anchor`);return o(x,C),s(()=>{let t=y.value===`preview`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-4`);let a=c(`rue:component:anchor`);o(r,a),p(m(v,{name:`Rue`}),r,a);let s=c(`rue:component:anchor`);return o(r,s),p(m(v,{name:`World`}),r,s),t}):``;a(()=>p(t,x,C))}),n})}),r,h),r})};export{y as default};
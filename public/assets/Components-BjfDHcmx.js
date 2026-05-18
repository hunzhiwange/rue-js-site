import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m}from"./vapor-runtime-BuwLbCGk.js";import{a as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as g}from"./Code-DQxnq0in.js";import{t as _}from"./SidebarPlaygroundExample-BwOo72z2.js";var v=t=>c(n=>{let i=r(`div`,n);a(i,o(`你好，`));let s=e(`rue:slot:anchor`);return a(i,s),m(()=>{let e=t.name;l(()=>d(e,i,s))}),i}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>u(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return c(u=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),d(p(_,{children:c(()=>{let u=t(),f=r(`h1`,u);a(u,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`组件与 Props 传递`));let h=r(`div`,u);a(u,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),m(()=>{n(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{y.value=`preview`}),a(_,o(`效果`));let b=r(`button`,h);a(h,b),s(b,`role`,`tab`),m(()=>{n(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),i(b,`click`,()=>{y.value=`code`}),a(b,o(`代码`));let x=r(`div`,u);a(u,x),n(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=e(`rue:slot:anchor`);a(x,S),m(()=>{let i=y.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),m(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,x,S))}),a(x,o(` `));let C=e(`rue:slot:anchor`);return a(x,C),m(()=>{let i=y.value===`preview`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow`);let s=r(`div`,o);a(o,s),n(s,`card-body grid gap-4`);let c=e(`rue:component:anchor`);a(s,c),d(p(v,{name:`Rue`}),s,c);let l=e(`rue:component:anchor`);return a(s,l),d(p(v,{name:`World`}),s,l),i}):``;l(()=>d(i,x,C))}),u})}),f,h),f})};export{y as default};
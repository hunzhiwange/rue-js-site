import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m}from"./vapor-runtime-Dfq7aA8z.js";import{a as h}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as g}from"./Code-CLTo4rRM.js";import{t as _}from"./SidebarPlaygroundExample-DOFGFBd1.js";var v=t=>l(n=>{let i=r(`div`,n);a(i,o(`你好，`));let s=e(`rue:slot:anchor`);return a(i,s),c(()=>{let e=t.name;m(()=>u(e,i,s))}),i}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>d(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),u(p(_,{children:l(()=>{let d=t(),f=r(`h1`,d);a(d,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`组件与 Props 传递`));let h=r(`div`,d);a(d,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),c(()=>{n(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{y.value=`preview`}),a(_,o(`效果`));let b=r(`button`,h);a(h,b),s(b,`role`,`tab`),c(()=>{n(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),i(b,`click`,()=>{y.value=`code`}),a(b,o(`代码`));let x=r(`div`,d);a(d,x),n(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=e(`rue:slot:anchor`);a(x,S),c(()=>{let i=y.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});m(()=>u(e,s,l))}),i}):``;m(()=>u(i,x,S))}),a(x,o(` `));let C=e(`rue:slot:anchor`);return a(x,C),c(()=>{let i=y.value===`preview`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow`);let s=r(`div`,o);a(o,s),n(s,`card-body grid gap-4`);let c=e(`rue:component:anchor`);a(s,c),u(p(v,{name:`Rue`}),s,c);let l=e(`rue:component:anchor`);return a(s,l),u(p(v,{name:`World`}),s,l),i}):``;m(()=>u(i,x,C))}),d})}),f,h),f})};export{y as default};
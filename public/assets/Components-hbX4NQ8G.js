import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,qt as f,s as p,t as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as g}from"./Code-5DOEyGxf.js";import{r as _}from"./SidebarPlaygroundExample-cASgDpH3.js";var v=n=>u(r=>{let i=e(`div`,r);o(i,l(`你好，`));let c=s(`rue:slot:anchor`);return o(i,c),a(()=>{let e=n.name;t(()=>p(e,i,c))}),i}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>i(`code`))})));return u(i=>{let f=r(),h=s(`rue:component:anchor`);return o(f,h),p(m(_,{children:u(()=>{let i=r(),f=e(`h1`,i);o(i,f),c(f,`text-5xl font-semibold mb-4 md:mb-4`),o(f,l(`组件与 Props 传递`));let h=e(`div`,i);o(i,h),d(h,`role`,`tablist`),c(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),d(_,`role`,`tab`),a(()=>{c(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),n(_,`click`,()=>{y.value=`preview`}),o(_,l(`效果`));let b=e(`button`,h);o(h,b),d(b,`role`,`tab`),a(()=>{c(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),n(b,`click`,()=>{y.value=`code`}),o(b,l(`代码`));let x=e(`div`,i);o(i,x),c(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=s(`rue:slot:anchor`);o(x,S),a(()=>{let n=y.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});t(()=>p(e,l,u))}),n}):``;t(()=>p(n,x,S))}),o(x,l(` `));let C=s(`rue:slot:anchor`);return o(x,C),a(()=>{let n=y.value===`preview`?u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`card bg-base-100 shadow`);let i=e(`div`,n);o(n,i),c(i,`card-body grid gap-4`);let a=s(`rue:component:anchor`);o(i,a),p(m(v,{name:`Rue`}),i,a);let l=s(`rue:component:anchor`);return o(i,l),p(m(v,{name:`World`}),i,l),t}):``;t(()=>p(n,x,C))}),i})}),f,h),f})};export{y as default};
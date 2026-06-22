import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as g}from"./Code-C5NjdoiC.js";import{r as _}from"./SidebarPlaygroundExample-DpItFif-.js";var v=n=>o(r=>{let i=d(`div`,r);e(i,a(`你好，`));let o=m(`rue:slot:anchor`);return e(i,o),t(()=>{let e=n.name;p(()=>c(e,i,o))}),i}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>l(()=>({activeTab:h(`ref:1:0`,()=>n(`code`))})));return o(n=>{let l=s(),h=m(`rue:component:anchor`);return e(l,h),c(f(_,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`组件与 Props 传递`));let h=d(`div`,n);e(n,h),i(h,`role`,`tablist`),u(h,`tabs tabs-box`);let _=d(`button`,h);e(h,_),i(_,`role`,`tab`),t(()=>{u(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{y.value=`preview`}),e(_,a(`效果`));let b=d(`button`,h);e(h,b),i(b,`role`,`tab`),t(()=>{u(b,`tab ${y.value===`code`?`tab-active`:``}`)}),r(b,`click`,()=>{y.value=`code`}),e(b,a(`代码`));let x=d(`div`,n);e(n,x),u(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=m(`rue:slot:anchor`);e(x,S),t(()=>{let n=y.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,x,S))}),e(x,a(` `));let C=m(`rue:slot:anchor`);return e(x,C),t(()=>{let t=y.value===`preview`?o(()=>{let t=s(),n=d(`div`,t);e(t,n),u(n,`card bg-base-100 shadow`);let r=d(`div`,n);e(n,r),u(r,`card-body grid gap-4`);let i=m(`rue:component:anchor`);e(r,i),c(f(v,{name:`Rue`}),r,i);let a=m(`rue:component:anchor`);return e(r,a),c(f(v,{name:`World`}),r,a),t}):``;p(()=>c(t,x,C))}),n})}),l,h),l})};export{y as default};
import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{t as _}from"./SidebarPlaygroundExample-CdMvdgT7.js";var v=e=>l(a=>{let s=o(`div`,a);t(s,r(`你好，`));let c=i(`rue:slot:anchor`);return t(s,c),n(()=>{let t=e.name;p(()=>u(t,s,c))}),s}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>c(`code`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(_,{children:l(()=>{let c=a(),f=o(`h1`,c);t(c,f),e(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,r(`组件与 Props 传递`));let h=o(`div`,c);t(c,h),s(h,`role`,`tablist`),e(h,`tabs tabs-box`);let _=o(`button`,h);t(h,_),s(_,`role`,`tab`),n(()=>{e(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),m(_,`click`,()=>{y.value=`preview`}),t(_,r(`效果`));let b=o(`button`,h);t(h,b),s(b,`role`,`tab`),n(()=>{e(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),m(b,`click`,()=>{y.value=`code`}),t(b,r(`代码`));let x=o(`div`,c);t(c,x),e(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=i(`rue:slot:anchor`);t(x,S),n(()=>{let r=y.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=d(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});p(()=>u(e,c,l))}),r}):``;p(()=>u(r,x,S))}),t(x,r(` `));let C=i(`rue:slot:anchor`);return t(x,C),n(()=>{let n=y.value===`preview`?l(()=>{let n=a(),r=o(`div`,n);t(n,r),e(r,`card bg-base-100 shadow`);let s=o(`div`,r);t(r,s),e(s,`card-body grid gap-4`);let c=i(`rue:component:anchor`);t(s,c),u(d(v,{name:`Rue`}),s,c);let l=i(`rue:component:anchor`);return t(s,l),u(d(v,{name:`World`}),s,l),n}):``;p(()=>u(n,x,C))}),c})}),f,h),f})};export{y as default};
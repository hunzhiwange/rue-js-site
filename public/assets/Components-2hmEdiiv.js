import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,st as d,t as f,tt as p,zt as m}from"./vapor-runtime-CXIalONM.js";import{a as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as g}from"./Code-BIscIyEp.js";import{r as _}from"./SidebarPlaygroundExample-CEz1fABX.js";var v=e=>c(a=>{let o=s(`div`,a);i(o,p(`你好，`));let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let t=e.name;r(()=>u(t,o,c))}),o}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>o(()=>({activeTab:h(`ref:1:0`,()=>m(`code`))})));return c(o=>{let m=e(),h=t(`rue:component:anchor`);return i(m,h),u(f(_,{children:c(()=>{let o=e(),m=s(`h1`,o);i(o,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,p(`组件与 Props 传递`));let h=s(`div`,o);i(o,h),d(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=s(`button`,h);i(h,_),d(_,`role`,`tab`),n(()=>{l(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),a(_,`click`,()=>{y.value=`preview`}),i(_,p(`效果`));let b=s(`button`,h);i(h,b),d(b,`role`,`tab`),n(()=>{l(b,`tab ${y.value===`code`?`tab-active`:``}`)}),a(b,`click`,()=>{y.value=`code`}),i(b,p(`代码`));let x=s(`div`,o);i(o,x),l(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=t(`rue:slot:anchor`);i(x,S),n(()=>{let a=y.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,x,S))}),i(x,p(` `));let C=t(`rue:slot:anchor`);return i(x,C),n(()=>{let n=y.value===`preview`?c(()=>{let n=e(),r=s(`div`,n);i(n,r),l(r,`card bg-base-100 shadow`);let a=s(`div`,r);i(r,a),l(a,`card-body grid gap-4`);let o=t(`rue:component:anchor`);i(a,o),u(f(v,{name:`Rue`}),a,o);let c=t(`rue:component:anchor`);return i(a,c),u(f(v,{name:`World`}),a,c),n}):``;r(()=>u(n,x,C))}),o})}),m,h),m})};export{y as default};
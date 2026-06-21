import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as g}from"./Code-4SUSUwRg.js";import{r as _}from"./SidebarPlaygroundExample-BEWYUWOl.js";var v=t=>s(r=>{let i=l(`div`,r);n(i,d(`你好，`));let o=a(`rue:slot:anchor`);return n(i,o),m(()=>{let n=t.name;e(()=>u(n,i,o))}),i}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>o(()=>({activeTab:h(`ref:1:0`,()=>t(`code`))})));return s(t=>{let o=p(),h=a(`rue:component:anchor`);return n(o,h),u(f(_,{children:s(()=>{let t=p(),o=l(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,d(`组件与 Props 传递`));let h=l(`div`,t);n(t,h),c(h,`role`,`tablist`),i(h,`tabs tabs-box`);let _=l(`button`,h);n(h,_),c(_,`role`,`tab`),m(()=>{i(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{y.value=`preview`}),n(_,d(`效果`));let b=l(`button`,h);n(h,b),c(b,`role`,`tab`),m(()=>{i(b,`tab ${y.value===`code`?`tab-active`:``}`)}),r(b,`click`,()=>{y.value=`code`}),n(b,d(`代码`));let x=l(`div`,t);n(t,x),i(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=a(`rue:slot:anchor`);n(x,S),m(()=>{let t=y.value===`code`?s(()=>{let t=p(),r=l(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=l(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),m(()=>{let t=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});e(()=>u(t,o,s))}),t}):``;e(()=>u(t,x,S))}),n(x,d(` `));let C=a(`rue:slot:anchor`);return n(x,C),m(()=>{let t=y.value===`preview`?s(()=>{let e=p(),t=l(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let r=l(`div`,t);n(t,r),i(r,`card-body grid gap-4`);let o=a(`rue:component:anchor`);n(r,o),u(f(v,{name:`Rue`}),r,o);let s=a(`rue:component:anchor`);return n(r,s),u(f(v,{name:`World`}),r,s),e}):``;e(()=>u(t,x,C))}),t})}),o,h),o})};export{y as default};
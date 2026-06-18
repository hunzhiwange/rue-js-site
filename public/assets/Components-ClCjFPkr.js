import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,q as u,qt as d,s as f,st as p,t as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as g}from"./Code-CZqShVUj.js";import{r as _}from"./SidebarPlaygroundExample-5H7RL-T7.js";var v=r=>l(s=>{let c=i(`div`,s);n(c,e(`你好，`));let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.name;t(()=>f(e,c,l))}),c}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>d(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return l(r=>{let d=s(),h=a(`rue:component:anchor`);return n(d,h),f(m(_,{children:l(()=>{let r=s(),d=i(`h1`,r);n(r,d),p(d,`text-5xl font-semibold mb-4 md:mb-4`),n(d,e(`组件与 Props 传递`));let h=i(`div`,r);n(r,h),c(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);n(h,_),c(_,`role`,`tab`),o(()=>{p(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),u(_,`click`,()=>{y.value=`preview`}),n(_,e(`效果`));let b=i(`button`,h);n(h,b),c(b,`role`,`tab`),o(()=>{p(b,`tab ${y.value===`code`?`tab-active`:``}`)}),u(b,`click`,()=>{y.value=`code`}),n(b,e(`代码`));let x=i(`div`,r);n(r,x),p(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=a(`rue:slot:anchor`);n(x,S),o(()=>{let e=y.value===`code`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),p(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});t(()=>f(e,c,l))}),e}):``;t(()=>f(e,x,S))}),n(x,e(` `));let C=a(`rue:slot:anchor`);return n(x,C),o(()=>{let e=y.value===`preview`?l(()=>{let e=s(),t=i(`div`,e);n(e,t),p(t,`card bg-base-100 shadow`);let r=i(`div`,t);n(t,r),p(r,`card-body grid gap-4`);let o=a(`rue:component:anchor`);n(r,o),f(m(v,{name:`Rue`}),r,o);let c=a(`rue:component:anchor`);return n(r,c),f(m(v,{name:`World`}),r,c),e}):``;t(()=>f(e,x,C))}),r})}),d,h),d})};export{y as default};
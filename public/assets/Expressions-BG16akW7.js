import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>r(`code`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(y,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`表达式与插值`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=i(`button`,_);n(_,y),c(y,`role`,`tab`),o(()=>{h(y,`tab ${S.value===`preview`?`tab-active`:``}`)}),f(y,`click`,()=>{S.value=`preview`}),n(y,e(`效果`));let C=i(`button`,_);n(_,C),c(C,`role`,`tab`),o(()=>{h(C,`tab ${S.value===`code`?`tab-active`:``}`)}),f(C,`click`,()=>{S.value=`code`}),n(C,e(`代码`));let w=i(`div`,r);n(r,w),h(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);n(w,T),o(()=>{let e=S.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),h(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const n = 7;
const user = { name: 'Alice', age: 20 };

const Expressions: FC = () => (
  <div className="grid gap-2">
    <div>{1 + 2}</div>
    <div>{\`hello \${user.name}\`}</div>
    <div>{n > 5 ? '大于5' : '不大于5'}</div>
    <div>{['A', 'B'].join(',')}</div>
  </div>
);

export default Expressions;`});t(()=>m(e,c,l))}),e}):``;t(()=>m(e,w,T))}),n(w,e(` `));let E=a(`rue:slot:anchor`);return n(w,E),o(()=>{let e=S.value===`preview`?u(()=>{let e=s(),t=i(`div`,e);n(e,t),h(t,`card bg-base-100 shadow`);let r=i(`div`,t);n(t,r),h(r,`card-body grid gap-2`);let a=i(`div`,r);n(r,a);let c=l(a);n(a,c),o(()=>{d(c,3)});let u=i(`div`,r);n(r,u);let f=l(u);n(u,f),o(()=>{d(f,`hello ${x.name}`)});let p=i(`div`,r);n(r,p);let m=l(p);n(p,m),o(()=>{d(m,b>5?`大于5`:`不大于5`)});let g=i(`div`,r);n(r,g);let _=l(g);return n(g,_),o(()=>{d(_,[`A`,`B`].join(`,`))}),e}):``;t(()=>m(e,w,E))}),r})}),p,_),p})};export{S as default};
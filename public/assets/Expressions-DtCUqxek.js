import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>i(`code`))})));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(y,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`表达式与插值`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{S.value=`preview`}),o(y,l(`效果`));let C=e(`button`,_);o(_,C),f(C,`role`,`tab`),a(()=>{c(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),n(C,`click`,()=>{S.value=`code`}),o(C,l(`代码`));let w=e(`div`,i);o(i,w),c(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=s(`rue:slot:anchor`);o(w,T),a(()=>{let n=S.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,w,T))}),o(w,l(` `));let E=s(`rue:slot:anchor`);return o(w,E),a(()=>{let n=S.value===`preview`?u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`card bg-base-100 shadow`);let i=e(`div`,n);o(n,i),c(i,`card-body grid gap-2`);let s=e(`div`,i);o(i,s);let l=g(s);o(s,l),a(()=>{d(l,3)});let u=e(`div`,i);o(i,u);let f=g(u);o(u,f),a(()=>{d(f,`hello ${x.name}`)});let p=e(`div`,i);o(i,p);let m=g(p);o(p,m),a(()=>{d(m,b>5?`大于5`:`不大于5`)});let h=e(`div`,i);o(i,h);let _=g(h);return o(h,_),a(()=>{d(_,[`A`,`B`].join(`,`))}),t}):``;t(()=>m(n,w,E))}),i})}),p,_),p})};export{S as default};
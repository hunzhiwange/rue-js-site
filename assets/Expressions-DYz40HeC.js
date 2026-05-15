import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Bp8DIxJg.js";import{a as _}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as v}from"./Code-D55WiaDx.js";import{t as y}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>f(()=>({activeTab:_(`ref:1:0`,()=>p(`code`))})));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),d(m(y,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`表达式与插值`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),l(()=>{n(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{S.value=`preview`}),a(y,s(`效果`));let C=r(`button`,_);a(_,C),c(C,`role`,`tab`),l(()=>{n(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),i(C,`click`,()=>{S.value=`code`}),a(C,s(`代码`));let w=r(`div`,f);a(f,w),n(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);a(w,T),l(()=>{let i=S.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,w,T))}),a(w,s(` `));let E=e(`rue:slot:anchor`);return a(w,E),l(()=>{let e=S.value===`preview`?u(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let s=r(`div`,i);a(i,s),n(s,`card-body grid gap-2`);let c=r(`div`,s);a(s,c);let u=g(c);a(c,u),l(()=>{o(u,3)});let d=r(`div`,s);a(s,d);let f=g(d);a(d,f),l(()=>{o(f,`hello ${x.name}`)});let p=r(`div`,s);a(s,p);let m=g(p);a(p,m),l(()=>{o(m,b>5?`大于5`:`不大于5`)});let h=r(`div`,s);a(s,h);let _=g(h);return a(h,_),l(()=>{o(_,[`A`,`B`].join(`,`))}),e}):``;h(()=>d(e,w,E))}),f})}),p,_),p})};export{S as default};
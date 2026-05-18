import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as v}from"./Code-DQxnq0in.js";import{t as y}from"./SidebarPlaygroundExample-BwOo72z2.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>d(()=>({activeTab:_(`ref:1:0`,()=>p(`code`))})));return l(d=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),f(m(y,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`表达式与插值`));let _=r(`div`,d);a(d,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),h(()=>{n(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{S.value=`preview`}),a(y,s(`效果`));let C=r(`button`,_);a(_,C),c(C,`role`,`tab`),h(()=>{n(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),i(C,`click`,()=>{S.value=`code`}),a(C,s(`代码`));let w=r(`div`,d);a(d,w),n(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);a(w,T),h(()=>{let i=S.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,w,T))}),a(w,s(` `));let E=e(`rue:slot:anchor`);return a(w,E),h(()=>{let e=S.value===`preview`?l(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let s=r(`div`,i);a(i,s),n(s,`card-body grid gap-2`);let c=r(`div`,s);a(s,c);let l=g(c);a(c,l),h(()=>{o(l,3)});let u=r(`div`,s);a(s,u);let d=g(u);a(u,d),h(()=>{o(d,`hello ${x.name}`)});let f=r(`div`,s);a(s,f);let p=g(f);a(f,p),h(()=>{o(p,b>5?`大于5`:`不大于5`)});let m=r(`div`,s);a(s,m);let _=g(m);return a(m,_),h(()=>{o(_,[`A`,`B`].join(`,`))}),e}):``;u(()=>f(e,w,E))}),d})}),p,_),p})};export{S as default};
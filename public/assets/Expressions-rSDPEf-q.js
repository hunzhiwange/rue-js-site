import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,t as h,tt as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _}from"./vapor-helpers-vapor-DkadWylb.js";import{t as v}from"./Code-B_4lzH85.js";import{t as y}from"./SidebarPlaygroundExample-CtM-WHq_.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>n(()=>({activeTab:_(`ref:1:0`,()=>r(`code`))})));return u(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),f(h(y,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`表达式与插值`));let _=e(`div`,n);o(n,_),m(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),m(y,`role`,`tab`),s(()=>{l(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{S.value=`preview`}),o(y,d(`效果`));let C=e(`button`,_);o(_,C),m(C,`role`,`tab`),s(()=>{l(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),t(C,`click`,()=>{S.value=`code`}),o(C,d(`代码`));let w=e(`div`,n);o(n,w),l(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=c(`rue:slot:anchor`);o(w,T),s(()=>{let t=S.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,w,T))}),o(w,d(` `));let E=c(`rue:slot:anchor`);return o(w,E),s(()=>{let t=S.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-2`);let a=e(`div`,r);o(r,a);let c=g(a);o(a,c),s(()=>{p(c,3)});let u=e(`div`,r);o(r,u);let d=g(u);o(u,d),s(()=>{p(d,`hello ${x.name}`)});let f=e(`div`,r);o(r,f);let m=g(f);o(f,m),s(()=>{p(m,b>5?`大于5`:`不大于5`)});let h=e(`div`,r);o(r,h);let _=g(h);return o(h,_),s(()=>{p(_,[`A`,`B`].join(`,`))}),t}):``;a(()=>f(t,w,E))}),n})}),r,_),r})};export{S as default};
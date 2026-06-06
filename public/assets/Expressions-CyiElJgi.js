import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _}from"./vapor-helpers-vapor-CJFAWine.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./SidebarPlaygroundExample-KML-rOvA.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>n(()=>({activeTab:_(`ref:1:0`,()=>r(`code`))})));return d(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),m(h(y,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`表达式与插值`));let _=e(`div`,n);o(n,_),p(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{S.value=`preview`}),o(y,u(`效果`));let C=e(`button`,_);o(_,C),p(C,`role`,`tab`),s(()=>{l(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),t(C,`click`,()=>{S.value=`code`}),o(C,u(`代码`));let w=e(`div`,n);o(n,w),l(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=c(`rue:slot:anchor`);o(w,T),s(()=>{let t=S.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});a(()=>m(e,r,u))}),t}):``;a(()=>m(t,w,T))}),o(w,u(` `));let E=c(`rue:slot:anchor`);return o(w,E),s(()=>{let t=S.value===`preview`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-2`);let a=e(`div`,r);o(r,a);let c=g(a);o(a,c),s(()=>{f(c,3)});let u=e(`div`,r);o(r,u);let d=g(u);o(u,d),s(()=>{f(d,`hello ${x.name}`)});let p=e(`div`,r);o(r,p);let m=g(p);o(p,m),s(()=>{f(m,b>5?`大于5`:`不大于5`)});let h=e(`div`,r);o(r,h);let _=g(h);return o(h,_),s(()=>{f(_,[`A`,`B`].join(`,`))}),t}):``;a(()=>m(t,w,E))}),n})}),r,_),r})};export{S as default};
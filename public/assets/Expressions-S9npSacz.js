import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>a(()=>({activeTab:_(`ref:1:0`,()=>n(`code`))})));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(y,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`表达式与插值`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let y=h(`button`,_);o(_,y),s(y,`role`,`tab`),t(()=>{g(y,`tab ${S.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{S.value=`preview`}),o(y,d(`效果`));let C=h(`button`,_);o(_,C),s(C,`role`,`tab`),t(()=>{g(C,`tab ${S.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{S.value=`code`}),o(C,d(`代码`));let w=h(`div`,n);o(n,w),g(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);o(w,T),t(()=>{let n=S.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow overflow-auto`);let a=h(`div`,i);o(i,a),g(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,w,T))}),o(w,d(` `));let E=e(`rue:slot:anchor`);return o(w,E),t(()=>{let e=S.value===`preview`?u(()=>{let e=c(),n=h(`div`,e);o(e,n),g(n,`card bg-base-100 shadow`);let r=h(`div`,n);o(n,r),g(r,`card-body grid gap-2`);let i=h(`div`,r);o(r,i);let a=p(i);o(i,a),t(()=>{l(a,3)});let s=h(`div`,r);o(r,s);let u=p(s);o(s,u),t(()=>{l(u,`hello ${x.name}`)});let d=h(`div`,r);o(r,d);let f=p(d);o(d,f),t(()=>{l(f,b>5?`大于5`:`不大于5`)});let m=h(`div`,r);o(r,m);let _=p(m);return o(m,_),t(()=>{l(_,[`A`,`B`].join(`,`))}),e}):``;r(()=>f(e,w,E))}),n})}),a,_),a})};export{S as default};
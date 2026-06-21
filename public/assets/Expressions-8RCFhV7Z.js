import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>t(`code`))})));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(y,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`表达式与插值`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let y=u(`button`,_);n(_,y),l(y,`role`,`tab`),g(()=>{i(y,`tab ${S.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{S.value=`preview`}),n(y,f(`效果`));let C=u(`button`,_);n(_,C),l(C,`role`,`tab`),g(()=>{i(C,`tab ${S.value===`code`?`tab-active`:``}`)}),r(C,`click`,()=>{S.value=`code`}),n(C,f(`代码`));let w=u(`div`,t);n(t,w),i(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);n(w,T),g(()=>{let t=S.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,w,T))}),n(w,f(` `));let E=a(`rue:slot:anchor`);return n(w,E),g(()=>{let t=S.value===`preview`?c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let r=u(`div`,t);n(t,r),i(r,`card-body grid gap-2`);let a=u(`div`,r);n(r,a);let o=s(a);n(a,o),g(()=>{h(o,3)});let c=u(`div`,r);n(r,c);let l=s(c);n(c,l),g(()=>{h(l,`hello ${x.name}`)});let d=u(`div`,r);n(r,d);let f=s(d);n(d,f),g(()=>{h(f,b>5?`大于5`:`不大于5`)});let p=u(`div`,r);n(r,p);let _=s(p);return n(p,_),g(()=>{h(_,[`A`,`B`].join(`,`))}),e}):``;e(()=>d(t,w,E))}),t})}),o,_),o})};export{S as default};
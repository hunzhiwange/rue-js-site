import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-BoXKy3gJ.js";import{r as y}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>d(()=>({activeTab:_(`ref:1:0`,()=>n(`code`))})));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(y,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`表达式与插值`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let y=p(`button`,_);e(_,y),o(y,`role`,`tab`),t(()=>{f(y,`tab ${S.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{S.value=`preview`}),e(y,s(`效果`));let C=p(`button`,_);e(_,C),o(C,`role`,`tab`),t(()=>{f(C,`tab ${S.value===`code`?`tab-active`:``}`)}),r(C,`click`,()=>{S.value=`code`}),e(C,s(`代码`));let w=p(`div`,n);e(n,w),f(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=g(`rue:slot:anchor`);e(w,T),t(()=>{let n=S.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,w,T))}),e(w,s(` `));let E=g(`rue:slot:anchor`);return e(w,E),t(()=>{let n=S.value===`preview`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow`);let o=p(`div`,r);e(r,o),f(o,`card-body grid gap-2`);let s=p(`div`,o);e(o,s);let c=i(s);e(s,c),t(()=>{a(c,3)});let u=p(`div`,o);e(o,u);let d=i(u);e(u,d),t(()=>{a(d,`hello ${x.name}`)});let m=p(`div`,o);e(o,m);let h=i(m);e(m,h),t(()=>{a(h,b>5?`大于5`:`不大于5`)});let g=p(`div`,o);e(o,g);let _=i(g);return e(g,_),t(()=>{a(_,[`A`,`B`].join(`,`))}),n}):``;h(()=>u(n,w,E))}),n})}),d,_),d})};export{S as default};
import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>m(()=>({activeTab:_(`ref:1:0`,()=>u(`code`))})));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(y,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`表达式与插值`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let y=s(`button`,_);t(_,y),c(y,`role`,`tab`),n(()=>{e(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),g(y,`click`,()=>{S.value=`preview`}),t(y,r(`效果`));let C=s(`button`,_);t(_,C),c(C,`role`,`tab`),n(()=>{e(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),g(C,`click`,()=>{S.value=`code`}),t(C,r(`代码`));let w=s(`div`,u);t(u,w),e(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=i(`rue:slot:anchor`);t(w,T),n(()=>{let r=S.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});h(()=>f(e,c,l))}),r}):``;h(()=>f(r,w,T))}),t(w,r(` `));let E=i(`rue:slot:anchor`);return t(w,E),n(()=>{let r=S.value===`preview`?d(()=>{let r=o(),i=s(`div`,r);t(r,i),e(i,`card bg-base-100 shadow`);let c=s(`div`,i);t(i,c),e(c,`card-body grid gap-2`);let u=s(`div`,c);t(c,u);let d=a(u);t(u,d),n(()=>{l(d,3)});let f=s(`div`,c);t(c,f);let p=a(f);t(f,p),n(()=>{l(p,`hello ${x.name}`)});let m=s(`div`,c);t(c,m);let h=a(m);t(m,h),n(()=>{l(h,b>5?`大于5`:`不大于5`)});let g=s(`div`,c);t(c,g);let _=a(g);return t(g,_),n(()=>{l(_,[`A`,`B`].join(`,`))}),r}):``;h(()=>f(r,w,E))}),u})}),m,_),m})};export{S as default};
import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>g(`code`))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(y,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`表达式与插值`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let y=s(`button`,_);i(_,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${S.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{S.value=`preview`}),i(y,h(`效果`));let C=s(`button`,_);i(_,C),p(C,`role`,`tab`),n(()=>{u(C,`tab ${S.value===`code`?`tab-active`:``}`)}),a(C,`click`,()=>{S.value=`code`}),i(C,h(`代码`));let w=s(`div`,o);i(o,w),u(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=t(`rue:slot:anchor`);i(w,T),n(()=>{let a=S.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,w,T))}),i(w,h(` `));let E=t(`rue:slot:anchor`);return i(w,E),n(()=>{let t=S.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let a=s(`div`,r);i(r,a),u(a,`card-body grid gap-2`);let o=s(`div`,a);i(a,o);let l=d(o);i(o,l),n(()=>{c(l,3)});let f=s(`div`,a);i(a,f);let p=d(f);i(f,p),n(()=>{c(p,`hello ${x.name}`)});let m=s(`div`,a);i(a,m);let h=d(m);i(m,h),n(()=>{c(h,b>5?`大于5`:`不大于5`)});let g=s(`div`,a);i(a,g);let _=d(g);return i(g,_),n(()=>{c(_,[`A`,`B`].join(`,`))}),t}):``;r(()=>f(t,w,E))}),o})}),g,_),g})};export{S as default};
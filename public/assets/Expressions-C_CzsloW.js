import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-EUvELKQT.js";import{a as _}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as v}from"./Code-BdVklNCb.js";import{t as y}from"./SidebarPlaygroundExample-1AA0CIwm.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>t(()=>({activeTab:_(`ref:1:0`,()=>c(`code`))})));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(y,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`表达式与插值`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=a(`button`,_);r(_,y),e(y,`role`,`tab`),u(()=>{h(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),o(y,`click`,()=>{S.value=`preview`}),r(y,f(`效果`));let C=a(`button`,_);r(_,C),e(C,`role`,`tab`),u(()=>{h(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),o(C,`click`,()=>{S.value=`code`}),r(C,f(`代码`));let w=a(`div`,t);r(t,w),h(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=s(`rue:slot:anchor`);r(w,T),u(()=>{let e=S.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});g(()=>d(e,i,o))}),e}):``;g(()=>d(e,w,T))}),r(w,f(` `));let E=s(`rue:slot:anchor`);return r(w,E),u(()=>{let e=S.value===`preview`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow`);let o=a(`div`,t);r(t,o),h(o,`card-body grid gap-2`);let s=a(`div`,o);r(o,s);let c=i(s);r(s,c),u(()=>{p(c,3)});let l=a(`div`,o);r(o,l);let d=i(l);r(l,d),u(()=>{p(d,`hello ${x.name}`)});let f=a(`div`,o);r(o,f);let m=i(f);r(f,m),u(()=>{p(m,b>5?`大于5`:`不大于5`)});let g=a(`div`,o);r(o,g);let _=i(g);return r(g,_),u(()=>{p(_,[`A`,`B`].join(`,`))}),e}):``;g(()=>d(e,w,E))}),t})}),c,_),c})};export{S as default};
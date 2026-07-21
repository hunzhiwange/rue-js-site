import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";var b={name:`Alice`,age:20},x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>e(()=>({activeTab:_(`ref:1:0`,()=>l(`code`))})));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(y,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`表达式与插值`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let y=u(`button`,_);d(_,y),t(y,`role`,`tab`),f(()=>{r(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),c(y,`click`,()=>{x.value=`preview`}),d(y,s(`效果`));let S=u(`button`,_);d(_,S),t(S,`role`,`tab`),f(()=>{r(S,`tab ${x.value===`code`?`tab-active`:``}`)}),c(S,`click`,()=>{x.value=`code`}),d(S,s(`代码`));let C=u(`div`,e);d(e,C),r(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);d(C,w),f(()=>{let e=x.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});p(()=>h(e,n,o))}),e}):``;p(()=>h(e,C,w))}),d(C,s(` `));let T=i(`rue:slot:anchor`);return d(C,T),f(()=>{let e=x.value===`preview`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow`);let i=u(`div`,t);d(t,i),r(i,`card-body grid gap-2`);let s=u(`div`,i);d(i,s);let c=o(s);d(s,c),f(()=>{n(c,3)});let l=u(`div`,i);d(i,l);let p=o(l);d(l,p),f(()=>{n(p,`hello ${b.name}`)});let m=u(`div`,i);d(i,m);let h=o(m);d(m,h),f(()=>{n(h,`大于5`)});let g=u(`div`,i);d(i,g);let _=o(g);return d(g,_),f(()=>{n(_,[`A`,`B`].join(`,`))}),e}):``;p(()=>h(e,C,T))}),e})}),l,_),l})};export{x as default};
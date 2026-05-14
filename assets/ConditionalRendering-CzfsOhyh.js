import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as v}from"./Code-CLTo4rRM.js";import{t as y}from"./SidebarPlaygroundExample-DOFGFBd1.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>f(()=>({activeTab:_(`ref:1:0`,()=>p(`code`))})));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),d(m(y,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`条件渲染`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),l(()=>{n(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{x.value=`preview`}),a(y,s(`效果`));let S=r(`button`,_);a(_,S),c(S,`role`,`tab`),l(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,s(`代码`));let C=r(`div`,f);a(f,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),l(()=>{let i=x.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const showA = true;
const showB = false;

const ConditionalRendering: FC = () => (
  <div className="grid gap-2">
    <div>{showA ? 'A 显示（?:）' : 'A 隐藏'}</div>
    <div>--[{showB && 'B 显示（&&）'}]--</div>
    <div />
    <div></div>
    <div>--[{null}]--</div>
    <div>--[{false}]--</div>
    <div>--[{undefined}]--</div>
    <div>--[{true}]--</div>
    <div>--[{1}]--</div>
    <div>--[{0}]--</div>
  </div>
);

export default ConditionalRendering;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,C,w))}),a(C,s(` `));let T=e(`rue:slot:anchor`);return a(C,T),l(()=>{let e=x.value===`preview`?u(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let c=r(`div`,i);a(i,c),n(c,`card-body grid gap-2`);let u=r(`div`,c);a(c,u);let d=g(u);a(u,d),l(()=>{o(d,`A 显示（?:）`)});let f=r(`div`,c);a(c,f),a(f,s(`--[`));let p=g(f);a(f,p),l(()=>{o(p,b)}),a(f,s(`]--`)),a(c,r(`div`,c)),a(c,r(`div`,c));let m=r(`div`,c);a(c,m),a(m,s(`--[`));let h=g(m);a(m,h),o(h,``),a(m,s(`]--`));let _=r(`div`,c);a(c,_),a(_,s(`--[`));let v=g(_);a(_,v),o(v,``),a(_,s(`]--`));let y=r(`div`,c);a(c,y),a(y,s(`--[`));let x=g(y);a(y,x),o(x,``),a(y,s(`]--`));let S=r(`div`,c);a(c,S),a(S,s(`--[`));let C=g(S);a(S,C),o(C,``),a(S,s(`]--`));let w=r(`div`,c);a(c,w),a(w,s(`--[`));let T=g(w);a(w,T),o(T,`1`),a(w,s(`]--`));let E=r(`div`,c);a(c,E),a(E,s(`--[`));let D=g(E);return a(E,D),o(D,`0`),a(E,s(`]--`)),e}):``;h(()=>d(e,C,T))}),f})}),p,_),p})};export{x as default};
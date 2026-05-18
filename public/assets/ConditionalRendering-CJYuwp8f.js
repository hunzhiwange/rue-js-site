import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as v}from"./Code-DQxnq0in.js";import{t as y}from"./SidebarPlaygroundExample-BwOo72z2.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>d(()=>({activeTab:_(`ref:1:0`,()=>p(`code`))})));return l(d=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),f(m(y,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`条件渲染`));let _=r(`div`,d);a(d,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),h(()=>{n(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{x.value=`preview`}),a(y,s(`效果`));let S=r(`button`,_);a(_,S),c(S,`role`,`tab`),h(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,s(`代码`));let C=r(`div`,d);a(d,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),h(()=>{let i=x.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,C,w))}),a(C,s(` `));let T=e(`rue:slot:anchor`);return a(C,T),h(()=>{let e=x.value===`preview`?l(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let c=r(`div`,i);a(i,c),n(c,`card-body grid gap-2`);let l=r(`div`,c);a(c,l);let u=g(l);a(l,u),h(()=>{o(u,`A 显示（?:）`)});let d=r(`div`,c);a(c,d),a(d,s(`--[`));let f=g(d);a(d,f),h(()=>{o(f,b)}),a(d,s(`]--`)),a(c,r(`div`,c)),a(c,r(`div`,c));let p=r(`div`,c);a(c,p),a(p,s(`--[`));let m=g(p);a(p,m),o(m,``),a(p,s(`]--`));let _=r(`div`,c);a(c,_),a(_,s(`--[`));let v=g(_);a(_,v),o(v,``),a(_,s(`]--`));let y=r(`div`,c);a(c,y),a(y,s(`--[`));let x=g(y);a(y,x),o(x,``),a(y,s(`]--`));let S=r(`div`,c);a(c,S),a(S,s(`--[`));let C=g(S);a(S,C),o(C,``),a(S,s(`]--`));let w=r(`div`,c);a(c,w),a(w,s(`--[`));let T=g(w);a(w,T),o(T,`1`),a(w,s(`]--`));let E=r(`div`,c);a(c,E),a(E,s(`--[`));let D=g(E);return a(E,D),o(D,`0`),a(E,s(`]--`)),e}):``;u(()=>f(e,C,T))}),d})}),p,_),p})};export{x as default};
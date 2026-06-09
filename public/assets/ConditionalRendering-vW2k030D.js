import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>i(`code`))})));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(y,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`条件渲染`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{x.value=`preview`}),o(y,l(`效果`));let S=e(`button`,_);o(_,S),f(S,`role`,`tab`),a(()=>{c(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{x.value=`code`}),o(S,l(`代码`));let C=e(`div`,i);o(i,C),c(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=s(`rue:slot:anchor`);o(C,w),a(()=>{let n=x.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,C,w))}),o(C,l(` `));let T=s(`rue:slot:anchor`);return o(C,T),a(()=>{let n=x.value===`preview`?u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`card bg-base-100 shadow`);let i=e(`div`,n);o(n,i),c(i,`card-body grid gap-2`);let s=e(`div`,i);o(i,s);let u=g(s);o(s,u),a(()=>{d(u,`A 显示（?:）`)});let f=e(`div`,i);o(i,f),o(f,l(`--[`));let p=g(f);o(f,p),a(()=>{d(p,b)}),o(f,l(`]--`)),o(i,e(`div`,i)),o(i,e(`div`,i));let m=e(`div`,i);o(i,m),o(m,l(`--[`));let h=g(m);o(m,h),d(h,``),o(m,l(`]--`));let _=e(`div`,i);o(i,_),o(_,l(`--[`));let v=g(_);o(_,v),d(v,``),o(_,l(`]--`));let y=e(`div`,i);o(i,y),o(y,l(`--[`));let x=g(y);o(y,x),d(x,``),o(y,l(`]--`));let S=e(`div`,i);o(i,S),o(S,l(`--[`));let C=g(S);o(S,C),d(C,``),o(S,l(`]--`));let w=e(`div`,i);o(i,w),o(w,l(`--[`));let T=g(w);o(w,T),d(T,`1`),o(w,l(`]--`));let E=e(`div`,i);o(i,E),o(E,l(`--[`));let D=g(E);return o(E,D),d(D,`0`),o(E,l(`]--`)),t}):``;t(()=>m(n,C,T))}),i})}),p,_),p})};export{x as default};
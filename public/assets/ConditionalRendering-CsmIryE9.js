import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>r(`code`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(y,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`条件渲染`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=i(`button`,_);n(_,y),c(y,`role`,`tab`),o(()=>{h(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),f(y,`click`,()=>{x.value=`preview`}),n(y,e(`效果`));let S=i(`button`,_);n(_,S),c(S,`role`,`tab`),o(()=>{h(S,`tab ${x.value===`code`?`tab-active`:``}`)}),f(S,`click`,()=>{x.value=`code`}),n(S,e(`代码`));let C=i(`div`,r);n(r,C),h(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),o(()=>{let e=x.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),h(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});t(()=>m(e,c,l))}),e}):``;t(()=>m(e,C,w))}),n(C,e(` `));let T=a(`rue:slot:anchor`);return n(C,T),o(()=>{let r=x.value===`preview`?u(()=>{let t=s(),r=i(`div`,t);n(t,r),h(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),h(a,`card-body grid gap-2`);let c=i(`div`,a);n(a,c);let u=l(c);n(c,u),o(()=>{d(u,`A 显示（?:）`)});let f=i(`div`,a);n(a,f),n(f,e(`--[`));let p=l(f);n(f,p),o(()=>{d(p,b)}),n(f,e(`]--`)),n(a,i(`div`,a)),n(a,i(`div`,a));let m=i(`div`,a);n(a,m),n(m,e(`--[`));let g=l(m);n(m,g),d(g,``),n(m,e(`]--`));let _=i(`div`,a);n(a,_),n(_,e(`--[`));let v=l(_);n(_,v),d(v,``),n(_,e(`]--`));let y=i(`div`,a);n(a,y),n(y,e(`--[`));let x=l(y);n(y,x),d(x,``),n(y,e(`]--`));let S=i(`div`,a);n(a,S),n(S,e(`--[`));let C=l(S);n(S,C),d(C,``),n(S,e(`]--`));let w=i(`div`,a);n(a,w),n(w,e(`--[`));let T=l(w);n(w,T),d(T,`1`),n(w,e(`]--`));let E=i(`div`,a);n(a,E),n(E,e(`--[`));let D=l(E);return n(E,D),d(D,`0`),n(E,e(`]--`)),t}):``;t(()=>m(r,C,T))}),r})}),p,_),p})};export{x as default};
import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>e(()=>({activeTab:_(`ref:1:0`,()=>l(`code`))})));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(y,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`条件渲染`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let y=u(`button`,_);d(_,y),t(y,`role`,`tab`),f(()=>{r(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),c(y,`click`,()=>{x.value=`preview`}),d(y,s(`效果`));let S=u(`button`,_);d(_,S),t(S,`role`,`tab`),f(()=>{r(S,`tab ${x.value===`code`?`tab-active`:``}`)}),c(S,`click`,()=>{x.value=`code`}),d(S,s(`代码`));let C=u(`div`,e);d(e,C),r(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);d(C,w),f(()=>{let e=x.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});p(()=>h(e,n,o))}),e}):``;p(()=>h(e,C,w))}),d(C,s(` `));let T=i(`rue:slot:anchor`);return d(C,T),f(()=>{let e=x.value===`preview`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow`);let i=u(`div`,t);d(t,i),r(i,`card-body grid gap-2`);let c=u(`div`,i);d(i,c);let l=o(c);d(c,l),f(()=>{n(l,`A 显示（?:）`)});let p=u(`div`,i);d(i,p),d(p,s(`--[`));let m=o(p);d(p,m),f(()=>{n(m,b)}),d(p,s(`]--`)),d(i,u(`div`,i)),d(i,u(`div`,i));let h=u(`div`,i);d(i,h),d(h,s(`--[`));let g=o(h);d(h,g),n(g,``),d(h,s(`]--`));let _=u(`div`,i);d(i,_),d(_,s(`--[`));let v=o(_);d(_,v),n(v,``),d(_,s(`]--`));let y=u(`div`,i);d(i,y),d(y,s(`--[`));let x=o(y);d(y,x),n(x,``),d(y,s(`]--`));let S=u(`div`,i);d(i,S),d(S,s(`--[`));let C=o(S);d(S,C),n(C,``),d(S,s(`]--`));let w=u(`div`,i);d(i,w),d(w,s(`--[`));let T=o(w);d(w,T),n(T,`1`),d(w,s(`]--`));let E=u(`div`,i);d(i,E),d(E,s(`--[`));let D=o(E);return d(E,D),n(D,`0`),d(E,s(`]--`)),e}):``;p(()=>h(e,C,T))}),e})}),l,_),l})};export{x as default};
import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as v}from"./Code-CliOXHNE.js";import{t as y}from"./SidebarPlaygroundExample-DXnPmR3z.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>t(()=>({activeTab:_(`ref:1:0`,()=>c(`code`))})));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(y,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`条件渲染`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=a(`button`,_);r(_,y),e(y,`role`,`tab`),u(()=>{h(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),o(y,`click`,()=>{x.value=`preview`}),r(y,f(`效果`));let S=a(`button`,_);r(_,S),e(S,`role`,`tab`),u(()=>{h(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),o(S,`click`,()=>{x.value=`code`}),r(S,f(`代码`));let C=a(`div`,t);r(t,C),h(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=s(`rue:slot:anchor`);r(C,w),u(()=>{let e=x.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});g(()=>d(e,i,o))}),e}):``;g(()=>d(e,C,w))}),r(C,f(` `));let T=s(`rue:slot:anchor`);return r(C,T),u(()=>{let e=x.value===`preview`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow`);let o=a(`div`,t);r(t,o),h(o,`card-body grid gap-2`);let s=a(`div`,o);r(o,s);let c=i(s);r(s,c),u(()=>{p(c,`A 显示（?:）`)});let l=a(`div`,o);r(o,l),r(l,f(`--[`));let d=i(l);r(l,d),u(()=>{p(d,b)}),r(l,f(`]--`)),r(o,a(`div`,o)),r(o,a(`div`,o));let m=a(`div`,o);r(o,m),r(m,f(`--[`));let g=i(m);r(m,g),p(g,``),r(m,f(`]--`));let _=a(`div`,o);r(o,_),r(_,f(`--[`));let v=i(_);r(_,v),p(v,``),r(_,f(`]--`));let y=a(`div`,o);r(o,y),r(y,f(`--[`));let x=i(y);r(y,x),p(x,``),r(y,f(`]--`));let S=a(`div`,o);r(o,S),r(S,f(`--[`));let C=i(S);r(S,C),p(C,``),r(S,f(`]--`));let w=a(`div`,o);r(o,w),r(w,f(`--[`));let T=i(w);r(w,T),p(T,`1`),r(w,f(`]--`));let E=a(`div`,o);r(o,E),r(E,f(`--[`));let D=i(E);return r(E,D),p(D,`0`),r(E,f(`]--`)),e}):``;g(()=>d(e,C,T))}),t})}),c,_),c})};export{x as default};
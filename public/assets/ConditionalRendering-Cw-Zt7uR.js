import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>t(`code`))})));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(y,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`条件渲染`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let y=u(`button`,_);n(_,y),l(y,`role`,`tab`),g(()=>{i(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{x.value=`preview`}),n(y,f(`效果`));let S=u(`button`,_);n(_,S),l(S,`role`,`tab`),g(()=>{i(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),n(S,f(`代码`));let C=u(`div`,t);n(t,C),i(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),g(()=>{let t=x.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,C,w))}),n(C,f(` `));let T=a(`rue:slot:anchor`);return n(C,T),g(()=>{let t=x.value===`preview`?c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let r=u(`div`,t);n(t,r),i(r,`card-body grid gap-2`);let a=u(`div`,r);n(r,a);let o=s(a);n(a,o),g(()=>{h(o,`A 显示（?:）`)});let c=u(`div`,r);n(r,c),n(c,f(`--[`));let l=s(c);n(c,l),g(()=>{h(l,b)}),n(c,f(`]--`)),n(r,u(`div`,r)),n(r,u(`div`,r));let d=u(`div`,r);n(r,d),n(d,f(`--[`));let p=s(d);n(d,p),h(p,``),n(d,f(`]--`));let _=u(`div`,r);n(r,_),n(_,f(`--[`));let v=s(_);n(_,v),h(v,``),n(_,f(`]--`));let y=u(`div`,r);n(r,y),n(y,f(`--[`));let x=s(y);n(y,x),h(x,``),n(y,f(`]--`));let S=u(`div`,r);n(r,S),n(S,f(`--[`));let C=s(S);n(S,C),h(C,``),n(S,f(`]--`));let w=u(`div`,r);n(r,w),n(w,f(`--[`));let T=s(w);n(w,T),h(T,`1`),n(w,f(`]--`));let E=u(`div`,r);n(r,E),n(E,f(`--[`));let D=s(E);return n(E,D),h(D,`0`),n(E,f(`]--`)),e}):``;e(()=>d(t,C,T))}),t})}),o,_),o})};export{x as default};
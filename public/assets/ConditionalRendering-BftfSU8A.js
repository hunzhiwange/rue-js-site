import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>a(()=>({activeTab:_(`ref:1:0`,()=>n(`code`))})));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(y,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`条件渲染`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let y=h(`button`,_);o(_,y),s(y,`role`,`tab`),t(()=>{g(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{x.value=`preview`}),o(y,d(`效果`));let S=h(`button`,_);o(_,S),s(S,`role`,`tab`),t(()=>{g(S,`tab ${x.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{x.value=`code`}),o(S,d(`代码`));let C=h(`div`,n);o(n,C),g(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);o(C,w),t(()=>{let n=x.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow overflow-auto`);let a=h(`div`,i);o(i,a),g(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,C,w))}),o(C,d(` `));let T=e(`rue:slot:anchor`);return o(C,T),t(()=>{let e=x.value===`preview`?u(()=>{let e=c(),n=h(`div`,e);o(e,n),g(n,`card bg-base-100 shadow`);let r=h(`div`,n);o(n,r),g(r,`card-body grid gap-2`);let i=h(`div`,r);o(r,i);let a=p(i);o(i,a),t(()=>{l(a,`A 显示（?:）`)});let s=h(`div`,r);o(r,s),o(s,d(`--[`));let u=p(s);o(s,u),t(()=>{l(u,b)}),o(s,d(`]--`)),o(r,h(`div`,r)),o(r,h(`div`,r));let f=h(`div`,r);o(r,f),o(f,d(`--[`));let m=p(f);o(f,m),l(m,``),o(f,d(`]--`));let _=h(`div`,r);o(r,_),o(_,d(`--[`));let v=p(_);o(_,v),l(v,``),o(_,d(`]--`));let y=h(`div`,r);o(r,y),o(y,d(`--[`));let x=p(y);o(y,x),l(x,``),o(y,d(`]--`));let S=h(`div`,r);o(r,S),o(S,d(`--[`));let C=p(S);o(S,C),l(C,``),o(S,d(`]--`));let w=h(`div`,r);o(r,w),o(w,d(`--[`));let T=p(w);o(w,T),l(T,`1`),o(w,d(`]--`));let E=h(`div`,r);o(r,E),o(E,d(`--[`));let D=p(E);return o(E,D),l(D,`0`),o(E,d(`]--`)),e}):``;r(()=>f(e,C,T))}),n})}),a,_),a})};export{x as default};
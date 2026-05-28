import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,t as h,tt as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _}from"./vapor-helpers-vapor-DkadWylb.js";import{t as v}from"./Code-B_4lzH85.js";import{t as y}from"./SidebarPlaygroundExample-CtM-WHq_.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>n(()=>({activeTab:_(`ref:1:0`,()=>r(`code`))})));return u(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),f(h(y,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`条件渲染`));let _=e(`div`,n);o(n,_),m(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),m(y,`role`,`tab`),s(()=>{l(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{x.value=`preview`}),o(y,d(`效果`));let S=e(`button`,_);o(_,S),m(S,`role`,`tab`),s(()=>{l(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{x.value=`code`}),o(S,d(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=x.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,C,w))}),o(C,d(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let t=x.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-2`);let a=e(`div`,r);o(r,a);let c=g(a);o(a,c),s(()=>{p(c,`A 显示（?:）`)});let u=e(`div`,r);o(r,u),o(u,d(`--[`));let f=g(u);o(u,f),s(()=>{p(f,b)}),o(u,d(`]--`)),o(r,e(`div`,r)),o(r,e(`div`,r));let m=e(`div`,r);o(r,m),o(m,d(`--[`));let h=g(m);o(m,h),p(h,``),o(m,d(`]--`));let _=e(`div`,r);o(r,_),o(_,d(`--[`));let v=g(_);o(_,v),p(v,``),o(_,d(`]--`));let y=e(`div`,r);o(r,y),o(y,d(`--[`));let x=g(y);o(y,x),p(x,``),o(y,d(`]--`));let S=e(`div`,r);o(r,S),o(S,d(`--[`));let C=g(S);o(S,C),p(C,``),o(S,d(`]--`));let w=e(`div`,r);o(r,w),o(w,d(`--[`));let T=g(w);o(w,T),p(T,`1`),o(w,d(`]--`));let E=e(`div`,r);o(r,E),o(E,d(`--[`));let D=g(E);return o(E,D),p(D,`0`),o(E,d(`]--`)),t}):``;a(()=>f(t,C,T))}),n})}),r,_),r})};export{x as default};
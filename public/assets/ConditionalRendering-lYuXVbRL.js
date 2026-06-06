import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _}from"./vapor-helpers-vapor-CJFAWine.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./SidebarPlaygroundExample-KML-rOvA.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>n(()=>({activeTab:_(`ref:1:0`,()=>r(`code`))})));return d(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),m(h(y,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`条件渲染`));let _=e(`div`,n);o(n,_),p(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{x.value=`preview`}),o(y,u(`效果`));let S=e(`button`,_);o(_,S),p(S,`role`,`tab`),s(()=>{l(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{x.value=`code`}),o(S,u(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=x.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});a(()=>m(e,r,u))}),t}):``;a(()=>m(t,C,w))}),o(C,u(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let t=x.value===`preview`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-2`);let a=e(`div`,r);o(r,a);let c=g(a);o(a,c),s(()=>{f(c,`A 显示（?:）`)});let d=e(`div`,r);o(r,d),o(d,u(`--[`));let p=g(d);o(d,p),s(()=>{f(p,b)}),o(d,u(`]--`)),o(r,e(`div`,r)),o(r,e(`div`,r));let m=e(`div`,r);o(r,m),o(m,u(`--[`));let h=g(m);o(m,h),f(h,``),o(m,u(`]--`));let _=e(`div`,r);o(r,_),o(_,u(`--[`));let v=g(_);o(_,v),f(v,``),o(_,u(`]--`));let y=e(`div`,r);o(r,y),o(y,u(`--[`));let x=g(y);o(y,x),f(x,``),o(y,u(`]--`));let S=e(`div`,r);o(r,S),o(S,u(`--[`));let C=g(S);o(S,C),f(C,``),o(S,u(`]--`));let w=e(`div`,r);o(r,w),o(w,u(`--[`));let T=g(w);o(w,T),f(T,`1`),o(w,u(`]--`));let E=e(`div`,r);o(r,E),o(E,u(`--[`));let D=g(E);return o(E,D),f(D,`0`),o(E,u(`]--`)),t}):``;a(()=>m(t,C,T))}),n})}),r,_),r})};export{x as default};
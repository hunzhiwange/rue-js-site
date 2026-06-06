import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>m(()=>({activeTab:_(`ref:1:0`,()=>u(`code`))})));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(y,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`条件渲染`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let y=s(`button`,_);t(_,y),c(y,`role`,`tab`),n(()=>{e(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),g(y,`click`,()=>{x.value=`preview`}),t(y,r(`效果`));let S=s(`button`,_);t(_,S),c(S,`role`,`tab`),n(()=>{e(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),g(S,`click`,()=>{x.value=`code`}),t(S,r(`代码`));let C=s(`div`,u);t(u,C),e(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);t(C,w),n(()=>{let r=x.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});h(()=>f(e,c,l))}),r}):``;h(()=>f(r,C,w))}),t(C,r(` `));let T=i(`rue:slot:anchor`);return t(C,T),n(()=>{let i=x.value===`preview`?d(()=>{let i=o(),c=s(`div`,i);t(i,c),e(c,`card bg-base-100 shadow`);let u=s(`div`,c);t(c,u),e(u,`card-body grid gap-2`);let d=s(`div`,u);t(u,d);let f=a(d);t(d,f),n(()=>{l(f,`A 显示（?:）`)});let p=s(`div`,u);t(u,p),t(p,r(`--[`));let m=a(p);t(p,m),n(()=>{l(m,b)}),t(p,r(`]--`)),t(u,s(`div`,u)),t(u,s(`div`,u));let h=s(`div`,u);t(u,h),t(h,r(`--[`));let g=a(h);t(h,g),l(g,``),t(h,r(`]--`));let _=s(`div`,u);t(u,_),t(_,r(`--[`));let v=a(_);t(_,v),l(v,``),t(_,r(`]--`));let y=s(`div`,u);t(u,y),t(y,r(`--[`));let x=a(y);t(y,x),l(x,``),t(y,r(`]--`));let S=s(`div`,u);t(u,S),t(S,r(`--[`));let C=a(S);t(S,C),l(C,``),t(S,r(`]--`));let w=s(`div`,u);t(u,w),t(w,r(`--[`));let T=a(w);t(w,T),l(T,`1`),t(w,r(`]--`));let E=s(`div`,u);t(u,E),t(E,r(`--[`));let D=a(E);return t(E,D),l(D,`0`),t(E,r(`]--`)),i}):``;h(()=>f(i,C,T))}),u})}),m,_),m})};export{x as default};
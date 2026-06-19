import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>g(`code`))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(y,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`条件渲染`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let y=s(`button`,_);i(_,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{x.value=`preview`}),i(y,h(`效果`));let S=s(`button`,_);i(_,S),p(S,`role`,`tab`),n(()=>{u(S,`tab ${x.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{x.value=`code`}),i(S,h(`代码`));let C=s(`div`,o);i(o,C),u(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=t(`rue:slot:anchor`);i(C,w),n(()=>{let a=x.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,C,w))}),i(C,h(` `));let T=t(`rue:slot:anchor`);return i(C,T),n(()=>{let t=x.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let a=s(`div`,r);i(r,a),u(a,`card-body grid gap-2`);let o=s(`div`,a);i(a,o);let l=d(o);i(o,l),n(()=>{c(l,`A 显示（?:）`)});let f=s(`div`,a);i(a,f),i(f,h(`--[`));let p=d(f);i(f,p),n(()=>{c(p,b)}),i(f,h(`]--`)),i(a,s(`div`,a)),i(a,s(`div`,a));let m=s(`div`,a);i(a,m),i(m,h(`--[`));let g=d(m);i(m,g),c(g,``),i(m,h(`]--`));let _=s(`div`,a);i(a,_),i(_,h(`--[`));let v=d(_);i(_,v),c(v,``),i(_,h(`]--`));let y=s(`div`,a);i(a,y),i(y,h(`--[`));let x=d(y);i(y,x),c(x,``),i(y,h(`]--`));let S=s(`div`,a);i(a,S),i(S,h(`--[`));let C=d(S);i(S,C),c(C,``),i(S,h(`]--`));let w=s(`div`,a);i(a,w),i(w,h(`--[`));let T=d(w);i(w,T),c(T,`1`),i(w,h(`]--`));let E=s(`div`,a);i(a,E),i(E,h(`--[`));let D=d(E);return i(E,D),c(D,`0`),i(E,h(`]--`)),t}):``;r(()=>f(t,C,T))}),o})}),g,_),g})};export{x as default};
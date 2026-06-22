import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-C5NjdoiC.js";import{r as y}from"./SidebarPlaygroundExample-DpItFif-.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>d(()=>({activeTab:_(`ref:1:0`,()=>n(`code`))})));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(y,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`条件渲染`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let y=p(`button`,_);e(_,y),o(y,`role`,`tab`),t(()=>{f(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{x.value=`preview`}),e(y,s(`效果`));let S=p(`button`,_);e(_,S),o(S,`role`,`tab`),t(()=>{f(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),e(S,s(`代码`));let C=p(`div`,n);e(n,C),f(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=g(`rue:slot:anchor`);e(C,w),t(()=>{let n=x.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,C,w))}),e(C,s(` `));let T=g(`rue:slot:anchor`);return e(C,T),t(()=>{let n=x.value===`preview`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow`);let o=p(`div`,r);e(r,o),f(o,`card-body grid gap-2`);let c=p(`div`,o);e(o,c);let u=i(c);e(c,u),t(()=>{a(u,`A 显示（?:）`)});let d=p(`div`,o);e(o,d),e(d,s(`--[`));let m=i(d);e(d,m),t(()=>{a(m,b)}),e(d,s(`]--`)),e(o,p(`div`,o)),e(o,p(`div`,o));let h=p(`div`,o);e(o,h),e(h,s(`--[`));let g=i(h);e(h,g),a(g,``),e(h,s(`]--`));let _=p(`div`,o);e(o,_),e(_,s(`--[`));let v=i(_);e(_,v),a(v,``),e(_,s(`]--`));let y=p(`div`,o);e(o,y),e(y,s(`--[`));let x=i(y);e(y,x),a(x,``),e(y,s(`]--`));let S=p(`div`,o);e(o,S),e(S,s(`--[`));let C=i(S);e(S,C),a(C,``),e(S,s(`]--`));let w=p(`div`,o);e(o,w),e(w,s(`--[`));let T=i(w);e(w,T),a(T,`1`),e(w,s(`]--`));let E=p(`div`,o);e(o,E),e(E,s(`--[`));let D=i(E);return e(E,D),a(D,`0`),e(E,s(`]--`)),n}):``;h(()=>u(n,C,T))}),n})}),d,_),d})};export{x as default};
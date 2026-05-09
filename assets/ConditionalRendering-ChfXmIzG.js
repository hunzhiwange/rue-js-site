import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as _}from"./Code-B1JFTu6m.js";import{t as v}from"./SidebarPlaygroundExample-DlK8mtjC.js";var y=!1,b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>h(()=>({activeTab:g(`ref:1:0`,()=>f(`code`))})));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(v,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`条件渲染`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let v=t(`button`);u(g,v),n(v,`role`,`tab`),d(()=>{s(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{b.value=`preview`}),u(v,r(`效果`));let x=t(`button`);u(g,x),n(x,`role`,`tab`),d(()=>{s(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),e(x,`click`,()=>{b.value=`code`}),u(x,r(`代码`));let S=t(`div`);u(f,S),s(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=a(`rue:slot:anchor`);u(S,C),d(()=>{l(b.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`}),r,i)}),e}):``,S,C)}),u(S,r(` `));let w=a(`rue:slot:anchor`);return u(S,w),d(()=>{l(b.value===`preview`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow`);let a=t(`div`);u(n,a),s(a,`card-body grid gap-2`);let l=t(`div`);u(a,l);let f=i(l);u(l,f),d(()=>{c(f,`A 显示（?:）`)});let p=t(`div`);u(a,p),u(p,r(`--[`));let m=i(p);u(p,m),d(()=>{c(m,y)}),u(p,r(`]--`)),u(a,t(`div`)),u(a,t(`div`));let h=t(`div`);u(a,h),u(h,r(`--[`));let g=i(h);u(h,g),c(g,``),u(h,r(`]--`));let _=t(`div`);u(a,_),u(_,r(`--[`));let v=i(_);u(_,v),c(v,``),u(_,r(`]--`));let b=t(`div`);u(a,b),u(b,r(`--[`));let x=i(b);u(b,x),c(x,``),u(b,r(`]--`));let S=t(`div`);u(a,S),u(S,r(`--[`));let C=i(S);u(S,C),c(C,``),u(S,r(`]--`));let w=t(`div`);u(a,w),u(w,r(`--[`));let T=i(w);u(w,T),c(T,`1`),u(w,r(`]--`));let E=t(`div`);u(a,E),u(E,r(`--[`));let D=i(E);return u(E,D),c(D,`0`),u(E,r(`]--`)),e}):``,S,w)}),f})}),f,h),f})};export{b as default};
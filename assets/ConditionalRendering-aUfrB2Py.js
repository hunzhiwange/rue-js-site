import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./Code-2C2psoH3.js";import{t as y}from"./SidebarPlaygroundExample-DKa0aI1C.js";var b=!1,x=()=>{let{activeTab:x}=_(`useSetup:0:0`,()=>l(()=>({activeTab:_(`ref:1:0`,()=>p(`code`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(y,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`条件渲染`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let y=n(`button`);i(_,y),s(y,`role`,`tab`),u(()=>{t(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),f(y,`click`,()=>{x.value=`preview`}),i(y,r(`效果`));let S=n(`button`);i(_,S),s(S,`role`,`tab`),u(()=>{t(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),f(S,`click`,()=>{x.value=`code`}),i(S,r(`代码`));let C=n(`div`);i(l,C),t(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);i(C,w),u(()=>{let r=x.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default ConditionalRendering;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,C,w))}),i(C,r(` `));let T=a(`rue:slot:anchor`);return i(C,T),u(()=>{let a=x.value===`preview`?g(()=>{let a=e(),s=n(`div`);i(a,s),t(s,`card bg-base-100 shadow`);let l=n(`div`);i(s,l),t(l,`card-body grid gap-2`);let d=n(`div`);i(l,d);let f=o(d);i(d,f),u(()=>{c(f,`A 显示（?:）`)});let p=n(`div`);i(l,p),i(p,r(`--[`));let m=o(p);i(p,m),u(()=>{c(m,b)}),i(p,r(`]--`)),i(l,n(`div`)),i(l,n(`div`));let h=n(`div`);i(l,h),i(h,r(`--[`));let g=o(h);i(h,g),c(g,``),i(h,r(`]--`));let _=n(`div`);i(l,_),i(_,r(`--[`));let v=o(_);i(_,v),c(v,``),i(_,r(`]--`));let y=n(`div`);i(l,y),i(y,r(`--[`));let x=o(y);i(y,x),c(x,``),i(y,r(`]--`));let S=n(`div`);i(l,S),i(S,r(`--[`));let C=o(S);i(S,C),c(C,``),i(S,r(`]--`));let w=n(`div`);i(l,w),i(w,r(`--[`));let T=o(w);i(w,T),c(T,`1`),i(w,r(`]--`));let E=n(`div`);i(l,E),i(E,r(`--[`));let D=o(E);return i(E,D),c(D,`0`),i(E,r(`]--`)),a}):``;m(()=>d(a,C,T))}),l})}),l,p),l})};export{x as default};
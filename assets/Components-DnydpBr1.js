import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,j as u,lt as d,pt as f,t as p,u as m}from"./vapor-runtime-D3a-68js.js";import{a as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as g}from"./Code-2C2psoH3.js";import{t as _}from"./SidebarPlaygroundExample-DKa0aI1C.js";var v=e=>m(()=>{let t=n(`div`);i(t,r(`你好，`));let o=a(`rue:slot:anchor`);return i(t,o),c(()=>{let n=e.name;f(()=>l(n,t,o))}),t}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>s(()=>({activeTab:h(`ref:1:0`,()=>d(`code`))})));return m(()=>{let s=e(),d=a(`rue:component:anchor`);return i(s,d),l(p(_,{children:m(()=>{let s=e(),d=n(`h1`);i(s,d),t(d,`text-5xl font-semibold mb-4 md:mb-4`),i(d,r(`组件与 Props 传递`));let h=n(`div`);i(s,h),o(h,`role`,`tablist`),t(h,`tabs tabs-box`);let _=n(`button`);i(h,_),o(_,`role`,`tab`),c(()=>{t(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),u(_,`click`,()=>{y.value=`preview`}),i(_,r(`效果`));let b=n(`button`);i(h,b),o(b,`role`,`tab`),c(()=>{t(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),u(b,`click`,()=>{y.value=`code`}),i(b,r(`代码`));let x=n(`div`);i(s,x),t(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=a(`rue:slot:anchor`);i(x,S),c(()=>{let r=y.value===`code`?m(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let u=a(`rue:component:anchor`);return i(s,u),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});f(()=>l(e,s,u))}),r}):``;f(()=>l(r,x,S))}),i(x,r(` `));let C=a(`rue:slot:anchor`);return i(x,C),c(()=>{let r=y.value===`preview`?m(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow`);let s=n(`div`);i(o,s),t(s,`card-body grid gap-4`);let c=a(`rue:component:anchor`);i(s,c),l(p(v,{name:`Rue`}),s,c);let u=a(`rue:component:anchor`);return i(s,u),l(p(v,{name:`World`}),s,u),r}):``;f(()=>l(r,x,C))}),s})}),s,d),s})};export{y as default};
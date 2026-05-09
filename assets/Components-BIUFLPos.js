import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,j as c,pt as l,rt as u,t as d,u as f,ut as p}from"./vapor-runtime-CKndxKFn.js";import{a as m}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as h}from"./Code-B1JFTu6m.js";import{t as g}from"./SidebarPlaygroundExample-DlK8mtjC.js";var _=e=>f(()=>{let n=t(`div`);c(n,r(`你好，`));let a=i(`rue:slot:anchor`);return c(n,a),l(()=>{let t=e.name;s(t,n,a)}),n}),v=()=>{let{activeTab:v}=m(`useSetup:0:0`,()=>p(()=>({activeTab:m(`ref:1:0`,()=>u(`code`))})));return f(()=>{let u=a(),p=i(`rue:component:anchor`);return c(u,p),s(d(g,{children:f(()=>{let u=a(),p=t(`h1`);c(u,p),o(p,`text-5xl font-semibold mb-4 md:mb-4`),c(p,r(`组件与 Props 传递`));let m=t(`div`);c(u,m),n(m,`role`,`tablist`),o(m,`tabs tabs-box`);let g=t(`button`);c(m,g),n(g,`role`,`tab`),l(()=>{o(g,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),e(g,`click`,()=>{v.value=`preview`}),c(g,r(`效果`));let y=t(`button`);c(m,y),n(y,`role`,`tab`),l(()=>{o(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),e(y,`click`,()=>{v.value=`code`}),c(y,r(`代码`));let b=t(`div`);c(u,b),o(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=i(`rue:slot:anchor`);c(b,x),l(()=>{s(v.value===`code`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);c(n,r),o(r,`card-body p-0`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(d(h,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`}),r,u)}),e}):``,b,x)}),c(b,r(` `));let S=i(`rue:slot:anchor`);return c(b,S),l(()=>{s(v.value===`preview`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow`);let r=t(`div`);c(n,r),o(r,`card-body grid gap-4`);let l=i(`rue:component:anchor`);c(r,l),s(d(_,{name:`Rue`}),r,l);let u=i(`rue:component:anchor`);return c(r,u),s(d(_,{name:`World`}),r,u),e}):``,b,S)}),u})}),u,p),u})};export{v as default};
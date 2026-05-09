import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,j as c,pt as l,q as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-BZZbPG7x.js";import{a as h}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as g}from"./Code-C8wy38VS.js";import{t as _}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var v=e=>p(()=>{let n=t(`span`);o(n,`px-2 py-1 rounded-md`),l(()=>{u(n,{backgroundColor:e.color??`#eee`})});let r=i(`rue:slot:anchor`);return c(n,r),l(()=>{let t=e.label;s(t,n,r)}),n}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>m(()=>({activeTab:h(`ref:1:0`,()=>d(`code`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return c(d,m),s(f(_,{children:p(()=>{let d=a(),m=t(`h1`);c(d,m),o(m,`text-5xl font-semibold mb-4 md:mb-4`),c(m,r(`属性、className、style 与 Props`));let h=t(`div`);c(d,h),n(h,`role`,`tablist`),o(h,`tabs tabs-box`);let _=t(`button`);c(h,_),n(_,`role`,`tab`),l(()=>{o(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),e(_,`click`,()=>{y.value=`preview`}),c(_,r(`效果`));let b=t(`button`);c(h,b),n(b,`role`,`tab`),l(()=>{o(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),e(b,`click`,()=>{y.value=`code`}),c(b,r(`代码`));let x=t(`div`);c(d,x),o(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=i(`rue:slot:anchor`);c(x,S),l(()=>{s(y.value===`code`?p(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);c(n,r),o(r,`card-body p-0`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Badge: FC<{ label: string; color?: string }> = (props) => (
  <span className="px-2 py-1 rounded-md" style={{ backgroundColor: props.color ?? '#eee' }}>
    {props.label}
  </span>
);

const AttributesAndProps: FC = () => (
  <div className="grid gap-4">
    <div id="box" className="border p-2">className 与 id</div>
    <div style={{ color: 'tomato', fontWeight: 'bold' }}>内联样式对象</div>
    <Badge label="默认" />
    <Badge label="自定义色" color="#cde" />
  </div>
);

export default AttributesAndProps;`}),r,u)}),e}):``,x,S)}),c(x,r(` `));let C=i(`rue:slot:anchor`);return c(x,C),l(()=>{s(y.value===`preview`?p(()=>{let e=a(),l=t(`div`);c(e,l),o(l,`card bg-base-100 shadow`);let d=t(`div`);c(l,d),o(d,`card-body grid gap-4`);let p=t(`div`);c(d,p),n(p,`id`,`box`),o(p,`border p-2`),c(p,r(`className 与 id`));let m=t(`div`);c(d,m),u(m,{color:`tomato`,fontWeight:`bold`}),c(m,r(`内联样式对象`));let h=i(`rue:component:anchor`);c(d,h),s(f(v,{label:`默认`}),d,h);let g=i(`rue:component:anchor`);return c(d,g),s(f(v,{label:`自定义色`,color:`#cde`}),d,g),e}):``,x,C)}),d})}),d,m),d})};export{y as default};
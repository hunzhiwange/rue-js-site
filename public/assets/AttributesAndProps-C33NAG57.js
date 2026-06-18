import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,dt as l,l as u,q as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./Code-CZqShVUj.js";import{r as v}from"./SidebarPlaygroundExample-5H7RL-T7.js";var y=e=>u(r=>{let s=i(`span`,r);m(s,`px-2 py-1 rounded-md`),o(()=>{l(s,{backgroundColor:e.color??`#eee`})});let c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.label;t(()=>p(n,s,c))}),s}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>f(()=>({activeTab:g(`ref:1:0`,()=>r(`code`))})));return u(r=>{let f=s(),g=a(`rue:component:anchor`);return n(f,g),p(h(v,{children:u(()=>{let r=s(),f=i(`h1`,r);n(r,f),m(f,`text-5xl font-semibold mb-4 md:mb-4`),n(f,e(`属性、className、style 与 Props`));let g=i(`div`,r);n(r,g),c(g,`role`,`tablist`),m(g,`tabs tabs-box`);let v=i(`button`,g);n(g,v),c(v,`role`,`tab`),o(()=>{m(v,`tab ${b.value===`preview`?`tab-active`:``}`)}),d(v,`click`,()=>{b.value=`preview`}),n(v,e(`效果`));let x=i(`button`,g);n(g,x),c(x,`role`,`tab`),o(()=>{m(x,`tab ${b.value===`code`?`tab-active`:``}`)}),d(x,`click`,()=>{b.value=`code`}),n(x,e(`代码`));let S=i(`div`,r);n(r,S),m(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=a(`rue:slot:anchor`);n(S,C),o(()=>{let e=b.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),m(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),m(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});t(()=>p(e,c,l))}),e}):``;t(()=>p(e,S,C))}),n(S,e(` `));let w=a(`rue:slot:anchor`);return n(S,w),o(()=>{let r=b.value===`preview`?u(()=>{let t=s(),r=i(`div`,t);n(t,r),m(r,`card bg-base-100 shadow`);let o=i(`div`,r);n(r,o),m(o,`card-body grid gap-4`);let u=i(`div`,o);n(o,u),c(u,`id`,`box`),m(u,`border p-2`),n(u,e(`className 与 id`));let d=i(`div`,o);n(o,d),l(d,{color:`tomato`,fontWeight:`bold`}),n(d,e(`内联样式对象`));let f=a(`rue:component:anchor`);n(o,f),p(h(y,{label:`默认`}),o,f);let g=a(`rue:component:anchor`);return n(o,g),p(h(y,{label:`自定义色`,color:`#cde`}),o,g),t}):``;t(()=>p(r,S,w))}),r})}),f,g),f})};export{b as default};
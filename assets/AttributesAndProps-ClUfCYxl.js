import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,X as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h}from"./vapor-runtime-Dfq7aA8z.js";import{a as g}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as _}from"./Code-CLTo4rRM.js";import{t as v}from"./SidebarPlaygroundExample-DOFGFBd1.js";var y=t=>u(i=>{let o=r(`span`,i);n(o,`px-2 py-1 rounded-md`),l(()=>{c(o,{backgroundColor:t.color??`#eee`})});let s=e(`rue:slot:anchor`);return a(o,s),l(()=>{let e=t.label;h(()=>d(e,o,s))}),o}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>f(()=>({activeTab:g(`ref:1:0`,()=>p(`code`))})));return u(f=>{let p=t(),g=e(`rue:component:anchor`);return a(p,g),d(m(v,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`属性、className、style 与 Props`));let g=r(`div`,f);a(f,g),s(g,`role`,`tablist`),n(g,`tabs tabs-box`);let v=r(`button`,g);a(g,v),s(v,`role`,`tab`),l(()=>{n(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{b.value=`preview`}),a(v,o(`效果`));let x=r(`button`,g);a(g,x),s(x,`role`,`tab`),l(()=>{n(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),i(x,`click`,()=>{b.value=`code`}),a(x,o(`代码`));let S=r(`div`,f);a(f,S),n(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=e(`rue:slot:anchor`);a(S,C),l(()=>{let i=b.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,S,C))}),a(S,o(` `));let w=e(`rue:slot:anchor`);return a(S,w),l(()=>{let i=b.value===`preview`?u(()=>{let i=t(),l=r(`div`,i);a(i,l),n(l,`card bg-base-100 shadow`);let u=r(`div`,l);a(l,u),n(u,`card-body grid gap-4`);let f=r(`div`,u);a(u,f),s(f,`id`,`box`),n(f,`border p-2`),a(f,o(`className 与 id`));let p=r(`div`,u);a(u,p),c(p,{color:`tomato`,fontWeight:`bold`}),a(p,o(`内联样式对象`));let h=e(`rue:component:anchor`);a(u,h),d(m(y,{label:`默认`}),u,h);let g=e(`rue:component:anchor`);return a(u,g),d(m(y,{label:`自定义色`,color:`#cde`}),u,g),i}):``;h(()=>d(i,S,w))}),f})}),p,g),p})};export{b as default};
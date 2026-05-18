import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,X as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as _}from"./Code-DQxnq0in.js";import{t as v}from"./SidebarPlaygroundExample-BwOo72z2.js";var y=t=>l(i=>{let o=r(`span`,i);n(o,`px-2 py-1 rounded-md`),h(()=>{c(o,{backgroundColor:t.color??`#eee`})});let s=e(`rue:slot:anchor`);return a(o,s),h(()=>{let e=t.label;u(()=>f(e,o,s))}),o}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>d(()=>({activeTab:g(`ref:1:0`,()=>p(`code`))})));return l(d=>{let p=t(),g=e(`rue:component:anchor`);return a(p,g),f(m(v,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`属性、className、style 与 Props`));let g=r(`div`,d);a(d,g),s(g,`role`,`tablist`),n(g,`tabs tabs-box`);let v=r(`button`,g);a(g,v),s(v,`role`,`tab`),h(()=>{n(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{b.value=`preview`}),a(v,o(`效果`));let x=r(`button`,g);a(g,x),s(x,`role`,`tab`),h(()=>{n(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),i(x,`click`,()=>{b.value=`code`}),a(x,o(`代码`));let S=r(`div`,d);a(d,S),n(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=e(`rue:slot:anchor`);a(S,C),h(()=>{let i=b.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,S,C))}),a(S,o(` `));let w=e(`rue:slot:anchor`);return a(S,w),h(()=>{let i=b.value===`preview`?l(()=>{let i=t(),l=r(`div`,i);a(i,l),n(l,`card bg-base-100 shadow`);let u=r(`div`,l);a(l,u),n(u,`card-body grid gap-4`);let d=r(`div`,u);a(u,d),s(d,`id`,`box`),n(d,`border p-2`),a(d,o(`className 与 id`));let p=r(`div`,u);a(u,p),c(p,{color:`tomato`,fontWeight:`bold`}),a(p,o(`内联样式对象`));let h=e(`rue:component:anchor`);a(u,h),f(m(y,{label:`默认`}),u,h);let g=e(`rue:component:anchor`);return a(u,g),f(m(y,{label:`自定义色`,color:`#cde`}),u,g),i}):``;u(()=>f(i,S,w))}),d})}),p,g),p})};export{b as default};
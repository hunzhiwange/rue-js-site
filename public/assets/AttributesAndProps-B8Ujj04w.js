import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,ft as d,l as f,ot as p,s as m,t as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g}from"./vapor-helpers-vapor-CJFAWine.js";import{t as _}from"./Code-Ds9lKLk6.js";import{t as v}from"./SidebarPlaygroundExample-KML-rOvA.js";var y=t=>f(n=>{let r=e(`span`,n);l(r,`px-2 py-1 rounded-md`),s(()=>{d(r,{backgroundColor:t.color??`#eee`})});let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.label;a(()=>m(e,r,i))}),r}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>n(()=>({activeTab:g(`ref:1:0`,()=>r(`code`))})));return f(n=>{let r=i(),g=c(`rue:component:anchor`);return o(r,g),m(h(v,{children:f(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`属性、className、style 与 Props`));let g=e(`div`,n);o(n,g),p(g,`role`,`tablist`),l(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),p(v,`role`,`tab`),s(()=>{l(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{b.value=`preview`}),o(v,u(`效果`));let x=e(`button`,g);o(g,x),p(x,`role`,`tab`),s(()=>{l(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),t(x,`click`,()=>{b.value=`code`}),o(x,u(`代码`));let S=e(`div`,n);o(n,S),l(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=c(`rue:slot:anchor`);o(S,C),s(()=>{let t=b.value===`code`?f(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});a(()=>m(e,r,u))}),t}):``;a(()=>m(t,S,C))}),o(S,u(` `));let w=c(`rue:slot:anchor`);return o(S,w),s(()=>{let t=b.value===`preview`?f(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-4`);let a=e(`div`,r);o(r,a),p(a,`id`,`box`),l(a,`border p-2`),o(a,u(`className 与 id`));let s=e(`div`,r);o(r,s),d(s,{color:`tomato`,fontWeight:`bold`}),o(s,u(`内联样式对象`));let f=c(`rue:component:anchor`);o(r,f),m(h(y,{label:`默认`}),r,f);let g=c(`rue:component:anchor`);return o(r,g),m(h(y,{label:`自定义色`,color:`#cde`}),r,g),t}):``;a(()=>m(t,S,w))}),n})}),r,g),r})};export{b as default};
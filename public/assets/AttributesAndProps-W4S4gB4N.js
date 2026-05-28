import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,ft as f,l as p,ot as m,t as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g}from"./vapor-helpers-vapor-DkadWylb.js";import{t as _}from"./Code-B_4lzH85.js";import{t as v}from"./SidebarPlaygroundExample-CtM-WHq_.js";var y=t=>u(n=>{let r=e(`span`,n);l(r,`px-2 py-1 rounded-md`),s(()=>{f(r,{backgroundColor:t.color??`#eee`})});let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.label;a(()=>p(e,r,i))}),r}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>n(()=>({activeTab:g(`ref:1:0`,()=>r(`code`))})));return u(n=>{let r=i(),g=c(`rue:component:anchor`);return o(r,g),p(h(v,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`属性、className、style 与 Props`));let g=e(`div`,n);o(n,g),m(g,`role`,`tablist`),l(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),m(v,`role`,`tab`),s(()=>{l(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{b.value=`preview`}),o(v,d(`效果`));let x=e(`button`,g);o(g,x),m(x,`role`,`tab`),s(()=>{l(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),t(x,`click`,()=>{b.value=`code`}),o(x,d(`代码`));let S=e(`div`,n);o(n,S),l(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=c(`rue:slot:anchor`);o(S,C),s(()=>{let t=b.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,S,C))}),o(S,d(` `));let w=c(`rue:slot:anchor`);return o(S,w),s(()=>{let t=b.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-4`);let a=e(`div`,r);o(r,a),m(a,`id`,`box`),l(a,`border p-2`),o(a,d(`className 与 id`));let s=e(`div`,r);o(r,s),f(s,{color:`tomato`,fontWeight:`bold`}),o(s,d(`内联样式对象`));let u=c(`rue:component:anchor`);o(r,u),p(h(y,{label:`默认`}),r,u);let g=c(`rue:component:anchor`);return o(r,g),p(h(y,{label:`自定义色`,color:`#cde`}),r,g),t}):``;a(()=>p(t,S,w))}),n})}),r,g),r})};export{b as default};
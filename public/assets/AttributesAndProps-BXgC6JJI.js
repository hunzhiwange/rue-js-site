import{At as e,Cn as t,Ct as n,Tt as r,dt as i,ft as a,mt as o,ot as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as _}from"./Code-DhoWkRkB.js";import{r as v}from"./SidebarPlaygroundExample-B78jsvoF.js";var y=t=>p(n=>{let a=l(`span`,n);r(a,`px-2 py-1 rounded-md`),d(()=>{let n={backgroundColor:t.color??`#eee`};e(a,n)});let o=i(`rue:slot:anchor`);return u(a,o),d(()=>{let e=t.label;f(()=>m(e,a,o))}),a}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>t(()=>({activeTab:g(`ref:1:0`,()=>c(`code`))})));return p(t=>{let c=a(),g=i(`rue:component:anchor`);return u(c,g),m(h(v,{children:p(()=>{let t=a(),c=l(`h1`,t);u(t,c),r(c,`text-5xl font-semibold mb-4 md:mb-4`),u(c,o(`属性、className、style 与 Props`));let g=l(`div`,t);u(t,g),n(g,`role`,`tablist`),r(g,`tabs tabs-box`);let v=l(`button`,g);u(g,v),n(v,`role`,`tab`),d(()=>{r(v,`tab ${b.value===`preview`?`tab-active`:``}`)}),s(v,`click`,()=>{b.value=`preview`}),u(v,o(`效果`));let x=l(`button`,g);u(g,x),n(x,`role`,`tab`),d(()=>{r(x,`tab ${b.value===`code`?`tab-active`:``}`)}),s(x,`click`,()=>{b.value=`code`}),u(x,o(`代码`));let S=l(`div`,t);u(t,S),r(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=i(`rue:slot:anchor`);u(S,C),d(()=>{let e=b.value===`code`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=l(`div`,t);u(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return u(n,o),d(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});f(()=>m(e,n,o))}),e}):``;f(()=>m(e,S,C))}),u(S,o(` `));let w=i(`rue:slot:anchor`);return u(S,w),d(()=>{let t=b.value===`preview`?p(()=>{let t=a(),s=l(`div`,t);u(t,s),r(s,`card bg-base-100 shadow`);let c=l(`div`,s);u(s,c),r(c,`card-body grid gap-4`);let d=l(`div`,c);u(c,d),n(d,`id`,`box`),r(d,`border p-2`),u(d,o(`className 与 id`));let f=l(`div`,c);u(c,f),e(f,{color:`tomato`,fontWeight:`bold`}),u(f,o(`内联样式对象`));let p=i(`rue:component:anchor`);u(c,p),m(h(y,{label:`默认`}),c,p);let g=i(`rue:component:anchor`);return u(c,g),m(h(y,{label:`自定义色`,color:`#cde`}),c,g),t}):``;f(()=>m(t,S,w))}),t})}),c,g),c})};export{b as default};
import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,at as c,d as l,kt as u,l as d,q as f,t as p,tt as m,xt as h}from"./vapor-runtime-BAZOdMd8.js";import{a as g}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as _}from"./Code-DY4Ua5uc.js";import{t as v}from"./SidebarPlaygroundExample-B8LFNSBu.js";var y=e=>l(t=>{let n=i(`span`,t);m(n,`px-2 py-1 rounded-md`),u(()=>{c(n,{backgroundColor:e.color??`#eee`})});let a=o(`rue:slot:anchor`);return r(n,a),u(()=>{let t=e.label;h(()=>d(t,n,a))}),n}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>t(()=>({activeTab:g(`ref:1:0`,()=>s(`code`))})));return l(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),d(p(v,{children:l(()=>{let t=n(),s=i(`h1`,t);r(t,s),m(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,f(`属性、className、style 与 Props`));let g=i(`div`,t);r(t,g),e(g,`role`,`tablist`),m(g,`tabs tabs-box`);let v=i(`button`,g);r(g,v),e(v,`role`,`tab`),u(()=>{m(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),a(v,`click`,()=>{b.value=`preview`}),r(v,f(`效果`));let x=i(`button`,g);r(g,x),e(x,`role`,`tab`),u(()=>{m(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),a(x,`click`,()=>{b.value=`code`}),r(x,f(`代码`));let S=i(`div`,t);r(t,S),m(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=o(`rue:slot:anchor`);r(S,C),u(()=>{let e=b.value===`code`?l(()=>{let e=n(),t=i(`div`,e);r(e,t),m(t,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,t);r(t,a),m(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),u(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});h(()=>d(e,a,s))}),e}):``;h(()=>d(e,S,C))}),r(S,f(` `));let w=o(`rue:slot:anchor`);return r(S,w),u(()=>{let t=b.value===`preview`?l(()=>{let t=n(),a=i(`div`,t);r(t,a),m(a,`card bg-base-100 shadow`);let s=i(`div`,a);r(a,s),m(s,`card-body grid gap-4`);let l=i(`div`,s);r(s,l),e(l,`id`,`box`),m(l,`border p-2`),r(l,f(`className 与 id`));let u=i(`div`,s);r(s,u),c(u,{color:`tomato`,fontWeight:`bold`}),r(u,f(`内联样式对象`));let h=o(`rue:component:anchor`);r(s,h),d(p(y,{label:`默认`}),s,h);let g=o(`rue:component:anchor`);return r(s,g),d(p(y,{label:`自定义色`,color:`#cde`}),s,g),t}):``;h(()=>d(t,S,w))}),t})}),s,g),s})};export{b as default};
import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m,vt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as _}from"./Code-C5NjdoiC.js";import{r as v}from"./SidebarPlaygroundExample-DpItFif-.js";var y=n=>o(r=>{let i=d(`span`,r);u(i,`px-2 py-1 rounded-md`),t(()=>{h(i,{backgroundColor:n.color??`#eee`})});let a=m(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.label;p(()=>c(e,i,a))}),i}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>l(()=>({activeTab:g(`ref:1:0`,()=>n(`code`))})));return o(n=>{let l=s(),g=m(`rue:component:anchor`);return e(l,g),c(f(v,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`属性、className、style 与 Props`));let g=d(`div`,n);e(n,g),i(g,`role`,`tablist`),u(g,`tabs tabs-box`);let v=d(`button`,g);e(g,v),i(v,`role`,`tab`),t(()=>{u(v,`tab ${b.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{b.value=`preview`}),e(v,a(`效果`));let x=d(`button`,g);e(g,x),i(x,`role`,`tab`),t(()=>{u(x,`tab ${b.value===`code`?`tab-active`:``}`)}),r(x,`click`,()=>{b.value=`code`}),e(x,a(`代码`));let S=d(`div`,n);e(n,S),u(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=m(`rue:slot:anchor`);e(S,C),t(()=>{let n=b.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,S,C))}),e(S,a(` `));let w=m(`rue:slot:anchor`);return e(S,w),t(()=>{let t=b.value===`preview`?o(()=>{let t=s(),n=d(`div`,t);e(t,n),u(n,`card bg-base-100 shadow`);let r=d(`div`,n);e(n,r),u(r,`card-body grid gap-4`);let o=d(`div`,r);e(r,o),i(o,`id`,`box`),u(o,`border p-2`),e(o,a(`className 与 id`));let l=d(`div`,r);e(r,l),h(l,{color:`tomato`,fontWeight:`bold`}),e(l,a(`内联样式对象`));let p=m(`rue:component:anchor`);e(r,p),c(f(y,{label:`默认`}),r,p);let g=m(`rue:component:anchor`);return e(r,g),c(f(y,{label:`自定义色`,color:`#cde`}),r,g),t}):``;p(()=>c(t,S,w))}),n})}),l,g),l})};export{b as default};
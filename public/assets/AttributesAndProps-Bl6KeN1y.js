import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,mt as u,nt as d,o as f,t as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as _}from"./Code-D5UqTwV6.js";import{r as v}from"./SidebarPlaygroundExample-D2vGHFCu.js";var y=n=>l(i=>{let a=m(`span`,i);h(a,`px-2 py-1 rounded-md`),t(()=>{u(a,{backgroundColor:n.color??`#eee`})});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.label;r(()=>f(e,a,s))}),a}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>a(()=>({activeTab:g(`ref:1:0`,()=>n(`code`))})));return l(n=>{let a=c(),g=e(`rue:component:anchor`);return o(a,g),f(p(v,{children:l(()=>{let n=c(),a=m(`h1`,n);o(n,a),h(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`属性、className、style 与 Props`));let g=m(`div`,n);o(n,g),s(g,`role`,`tablist`),h(g,`tabs tabs-box`);let v=m(`button`,g);o(g,v),s(v,`role`,`tab`),t(()=>{h(v,`tab ${b.value===`preview`?`tab-active`:``}`)}),i(v,`click`,()=>{b.value=`preview`}),o(v,d(`效果`));let x=m(`button`,g);o(g,x),s(x,`role`,`tab`),t(()=>{h(x,`tab ${b.value===`code`?`tab-active`:``}`)}),i(x,`click`,()=>{b.value=`code`}),o(x,d(`代码`));let S=m(`div`,n);o(n,S),h(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=e(`rue:slot:anchor`);o(S,C),t(()=>{let n=b.value===`code`?l(()=>{let n=c(),i=m(`div`,n);o(n,i),h(i,`card bg-base-100 shadow overflow-auto`);let a=m(`div`,i);o(i,a),h(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,S,C))}),o(S,d(` `));let w=e(`rue:slot:anchor`);return o(S,w),t(()=>{let t=b.value===`preview`?l(()=>{let t=c(),n=m(`div`,t);o(t,n),h(n,`card bg-base-100 shadow`);let r=m(`div`,n);o(n,r),h(r,`card-body grid gap-4`);let i=m(`div`,r);o(r,i),s(i,`id`,`box`),h(i,`border p-2`),o(i,d(`className 与 id`));let a=m(`div`,r);o(r,a),u(a,{color:`tomato`,fontWeight:`bold`}),o(a,d(`内联样式对象`));let l=e(`rue:component:anchor`);o(r,l),f(p(y,{label:`默认`}),r,l);let g=e(`rue:component:anchor`);return o(r,g),f(p(y,{label:`自定义色`,color:`#cde`}),r,g),t}):``;r(()=>f(t,S,w))}),n})}),a,g),a})};export{b as default};
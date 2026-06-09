import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,ft as u,l as d,ot as f,qt as p,s as m,t as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./Code-5DOEyGxf.js";import{r as v}from"./SidebarPlaygroundExample-cASgDpH3.js";var y=n=>d(r=>{let i=e(`span`,r);c(i,`px-2 py-1 rounded-md`),a(()=>{u(i,{backgroundColor:n.color??`#eee`})});let l=s(`rue:slot:anchor`);return o(i,l),a(()=>{let e=n.label;t(()=>m(e,i,l))}),i}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>p(()=>({activeTab:g(`ref:1:0`,()=>i(`code`))})));return d(i=>{let p=r(),g=s(`rue:component:anchor`);return o(p,g),m(h(v,{children:d(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`属性、className、style 与 Props`));let g=e(`div`,i);o(i,g),f(g,`role`,`tablist`),c(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),f(v,`role`,`tab`),a(()=>{c(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),n(v,`click`,()=>{b.value=`preview`}),o(v,l(`效果`));let x=e(`button`,g);o(g,x),f(x,`role`,`tab`),a(()=>{c(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),n(x,`click`,()=>{b.value=`code`}),o(x,l(`代码`));let S=e(`div`,i);o(i,S),c(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=s(`rue:slot:anchor`);o(S,C),a(()=>{let n=b.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,S,C))}),o(S,l(` `));let w=s(`rue:slot:anchor`);return o(S,w),a(()=>{let n=b.value===`preview`?d(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`card bg-base-100 shadow`);let i=e(`div`,n);o(n,i),c(i,`card-body grid gap-4`);let a=e(`div`,i);o(i,a),f(a,`id`,`box`),c(a,`border p-2`),o(a,l(`className 与 id`));let d=e(`div`,i);o(i,d),u(d,{color:`tomato`,fontWeight:`bold`}),o(d,l(`内联样式对象`));let p=s(`rue:component:anchor`);o(i,p),m(h(y,{label:`默认`}),i,p);let g=s(`rue:component:anchor`);return o(i,g),m(h(y,{label:`自定义色`,color:`#cde`}),i,g),t}):``;t(()=>m(n,S,w))}),i})}),p,g),p})};export{b as default};
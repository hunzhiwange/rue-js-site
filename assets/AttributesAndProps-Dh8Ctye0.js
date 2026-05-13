import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,Y as s,_t as c,bt as l,c as u,j as d,lt as f,pt as p,t as m,u as h}from"./vapor-runtime-D3a-68js.js";import{a as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as _}from"./Code-2C2psoH3.js";import{t as v}from"./SidebarPlaygroundExample-DKa0aI1C.js";var y=e=>h(()=>{let r=n(`span`);t(r,`px-2 py-1 rounded-md`),l(()=>{s(r,{backgroundColor:e.color??`#eee`})});let o=a(`rue:slot:anchor`);return i(r,o),l(()=>{let t=e.label;p(()=>u(t,r,o))}),r}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>c(()=>({activeTab:g(`ref:1:0`,()=>f(`code`))})));return h(()=>{let c=e(),f=a(`rue:component:anchor`);return i(c,f),u(m(v,{children:h(()=>{let c=e(),f=n(`h1`);i(c,f),t(f,`text-5xl font-semibold mb-4 md:mb-4`),i(f,r(`属性、className、style 与 Props`));let g=n(`div`);i(c,g),o(g,`role`,`tablist`),t(g,`tabs tabs-box`);let v=n(`button`);i(g,v),o(v,`role`,`tab`),l(()=>{t(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),d(v,`click`,()=>{b.value=`preview`}),i(v,r(`效果`));let x=n(`button`);i(g,x),o(x,`role`,`tab`),l(()=>{t(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),d(x,`click`,()=>{b.value=`code`}),i(x,r(`代码`));let S=n(`div`);i(c,S),t(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=a(`rue:slot:anchor`);i(S,C),l(()=>{let r=b.value===`code`?h(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),l(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});p(()=>u(e,s,c))}),r}):``;p(()=>u(r,S,C))}),i(S,r(` `));let w=a(`rue:slot:anchor`);return i(S,w),l(()=>{let c=b.value===`preview`?h(()=>{let c=e(),l=n(`div`);i(c,l),t(l,`card bg-base-100 shadow`);let d=n(`div`);i(l,d),t(d,`card-body grid gap-4`);let f=n(`div`);i(d,f),o(f,`id`,`box`),t(f,`border p-2`),i(f,r(`className 与 id`));let p=n(`div`);i(d,p),s(p,{color:`tomato`,fontWeight:`bold`}),i(p,r(`内联样式对象`));let h=a(`rue:component:anchor`);i(d,h),u(m(y,{label:`默认`}),d,h);let g=a(`rue:component:anchor`);return i(d,g),u(m(y,{label:`自定义色`,color:`#cde`}),d,g),c}):``;p(()=>u(c,S,w))}),c})}),c,f),c})};export{b as default};
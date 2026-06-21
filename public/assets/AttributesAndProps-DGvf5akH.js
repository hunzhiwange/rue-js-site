import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,gt as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as _}from"./Code-4SUSUwRg.js";import{r as v}from"./SidebarPlaygroundExample-BEWYUWOl.js";var y=t=>c(r=>{let s=u(`span`,r);i(s,`px-2 py-1 rounded-md`),h(()=>{o(s,{backgroundColor:t.color??`#eee`})});let c=a(`rue:slot:anchor`);return n(s,c),h(()=>{let n=t.label;e(()=>d(n,s,c))}),s}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>s(()=>({activeTab:g(`ref:1:0`,()=>t(`code`))})));return c(t=>{let s=m(),g=a(`rue:component:anchor`);return n(s,g),d(p(v,{children:c(()=>{let t=m(),s=u(`h1`,t);n(t,s),i(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,f(`属性、className、style 与 Props`));let g=u(`div`,t);n(t,g),l(g,`role`,`tablist`),i(g,`tabs tabs-box`);let v=u(`button`,g);n(g,v),l(v,`role`,`tab`),h(()=>{i(v,`tab ${b.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{b.value=`preview`}),n(v,f(`效果`));let x=u(`button`,g);n(g,x),l(x,`role`,`tab`),h(()=>{i(x,`tab ${b.value===`code`?`tab-active`:``}`)}),r(x,`click`,()=>{b.value=`code`}),n(x,f(`代码`));let S=u(`div`,t);n(t,S),i(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=a(`rue:slot:anchor`);n(S,C),h(()=>{let t=b.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),h(()=>{let t=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,S,C))}),n(S,f(` `));let w=a(`rue:slot:anchor`);return n(S,w),h(()=>{let t=b.value===`preview`?c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let r=u(`div`,t);n(t,r),i(r,`card-body grid gap-4`);let s=u(`div`,r);n(r,s),l(s,`id`,`box`),i(s,`border p-2`),n(s,f(`className 与 id`));let c=u(`div`,r);n(r,c),o(c,{color:`tomato`,fontWeight:`bold`}),n(c,f(`内联样式对象`));let h=a(`rue:component:anchor`);n(r,h),d(p(y,{label:`默认`}),r,h);let g=a(`rue:component:anchor`);return n(r,g),d(p(y,{label:`自定义色`,color:`#cde`}),r,g),e}):``;e(()=>d(t,S,w))}),t})}),s,g),s})};export{b as default};
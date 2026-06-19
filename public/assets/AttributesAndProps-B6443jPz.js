import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,pt as d,st as f,t as p,tt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as _}from"./Code-BIscIyEp.js";import{r as v}from"./SidebarPlaygroundExample-CEz1fABX.js";var y=e=>c(a=>{let o=s(`span`,a);l(o,`px-2 py-1 rounded-md`),n(()=>{d(o,{backgroundColor:e.color??`#eee`})});let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let t=e.label;r(()=>u(t,o,c))}),o}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>o(()=>({activeTab:g(`ref:1:0`,()=>h(`code`))})));return c(o=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),u(p(v,{children:c(()=>{let o=e(),h=s(`h1`,o);i(o,h),l(h,`text-5xl font-semibold mb-4 md:mb-4`),i(h,m(`属性、className、style 与 Props`));let g=s(`div`,o);i(o,g),f(g,`role`,`tablist`),l(g,`tabs tabs-box`);let v=s(`button`,g);i(g,v),f(v,`role`,`tab`),n(()=>{l(v,`tab ${b.value===`preview`?`tab-active`:``}`)}),a(v,`click`,()=>{b.value=`preview`}),i(v,m(`效果`));let x=s(`button`,g);i(g,x),f(x,`role`,`tab`),n(()=>{l(x,`tab ${b.value===`code`?`tab-active`:``}`)}),a(x,`click`,()=>{b.value=`code`}),i(x,m(`代码`));let S=s(`div`,o);i(o,S),l(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=t(`rue:slot:anchor`);i(S,C),n(()=>{let a=b.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,S,C))}),i(S,m(` `));let w=t(`rue:slot:anchor`);return i(S,w),n(()=>{let n=b.value===`preview`?c(()=>{let n=e(),r=s(`div`,n);i(n,r),l(r,`card bg-base-100 shadow`);let a=s(`div`,r);i(r,a),l(a,`card-body grid gap-4`);let o=s(`div`,a);i(a,o),f(o,`id`,`box`),l(o,`border p-2`),i(o,m(`className 与 id`));let c=s(`div`,a);i(a,c),d(c,{color:`tomato`,fontWeight:`bold`}),i(c,m(`内联样式对象`));let h=t(`rue:component:anchor`);i(a,h),u(p(y,{label:`默认`}),a,h);let g=t(`rue:component:anchor`);return i(a,g),u(p(y,{label:`自定义色`,color:`#cde`}),a,g),n}):``;r(()=>u(n,S,w))}),o})}),h,g),h})};export{b as default};
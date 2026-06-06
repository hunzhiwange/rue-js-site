import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,rt as u,s as d,t as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./Code-BCLFq1E3.js";import{t as v}from"./SidebarPlaygroundExample-CdMvdgT7.js";var y=r=>l(a=>{let s=o(`span`,a);e(s,`px-2 py-1 rounded-md`),n(()=>{u(s,{backgroundColor:r.color??`#eee`})});let c=i(`rue:slot:anchor`);return t(s,c),n(()=>{let e=r.label;m(()=>d(e,s,c))}),s}),b=()=>{let{activeTab:b}=g(`useSetup:0:0`,()=>p(()=>({activeTab:g(`ref:1:0`,()=>c(`code`))})));return l(c=>{let p=a(),g=i(`rue:component:anchor`);return t(p,g),d(f(v,{children:l(()=>{let c=a(),p=o(`h1`,c);t(c,p),e(p,`text-5xl font-semibold mb-4 md:mb-4`),t(p,r(`属性、className、style 与 Props`));let g=o(`div`,c);t(c,g),s(g,`role`,`tablist`),e(g,`tabs tabs-box`);let v=o(`button`,g);t(g,v),s(v,`role`,`tab`),n(()=>{e(v,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),h(v,`click`,()=>{b.value=`preview`}),t(v,r(`效果`));let x=o(`button`,g);t(g,x),s(x,`role`,`tab`),n(()=>{e(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),h(x,`click`,()=>{b.value=`code`}),t(x,r(`代码`));let S=o(`div`,c);t(c,S),e(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=i(`rue:slot:anchor`);t(S,C),n(()=>{let r=b.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default AttributesAndProps;`});m(()=>d(e,c,l))}),r}):``;m(()=>d(r,S,C))}),t(S,r(` `));let w=i(`rue:slot:anchor`);return t(S,w),n(()=>{let n=b.value===`preview`?l(()=>{let n=a(),c=o(`div`,n);t(n,c),e(c,`card bg-base-100 shadow`);let l=o(`div`,c);t(c,l),e(l,`card-body grid gap-4`);let p=o(`div`,l);t(l,p),s(p,`id`,`box`),e(p,`border p-2`),t(p,r(`className 与 id`));let m=o(`div`,l);t(l,m),u(m,{color:`tomato`,fontWeight:`bold`}),t(m,r(`内联样式对象`));let h=i(`rue:component:anchor`);t(l,h),d(f(y,{label:`默认`}),l,h);let g=i(`rue:component:anchor`);return t(l,g),d(f(y,{label:`自定义色`,color:`#cde`}),l,g),n}):``;m(()=>d(n,S,w))}),c})}),p,g),p})};export{b as default};
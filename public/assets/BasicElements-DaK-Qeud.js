import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,ot as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{r as _}from"./SidebarPlaygroundExample-B78jsvoF.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>e(()=>({activeTab:h(`ref:1:0`,()=>s(`code`))})));return f(e=>{let s=i(),h=r(`rue:component:anchor`);return l(s,h),p(m(_,{children:f(()=>{let e=i(),s=c(`h1`,e);l(e,s),n(s,`text-5xl font-semibold mb-4 md:mb-4`),l(s,a(`基础元素与自闭合标签`));let h=c(`div`,e);l(e,h),t(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=c(`button`,h);l(h,_),t(_,`role`,`tab`),u(()=>{n(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),o(_,`click`,()=>{v.value=`preview`}),l(_,a(`效果`));let y=c(`button`,h);l(h,y),t(y,`role`,`tab`),u(()=>{n(y,`tab ${v.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{v.value=`code`}),l(y,a(`代码`));let b=c(`div`,e);l(e,b),n(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=r(`rue:slot:anchor`);l(b,x),u(()=>{let e=v.value===`code`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow overflow-auto`);let a=c(`div`,t);l(t,a),n(a,`card-body p-0`);let o=r(`rue:component:anchor`);return l(a,o),u(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const BasicElements: FC = () => (
  <div className="card bg-base-100 shadow">
    <div className="card-body">
      <div>div 元素</div>
      <span>span 元素</span>
      <br />
      <img src="https://placehold.co/600x400" alt="占位图" />
      <input className="input input-bordered" placeholder="自闭合 input" />
      <p>支持文本、嵌套与自闭合形式</p>
    </div>
  </div>
);

export default BasicElements;`});d(()=>p(e,a,o))}),e}):``;d(()=>p(e,b,x))}),l(b,a(` `));let S=r(`rue:slot:anchor`);return l(b,S),u(()=>{let e=v.value===`preview`?f(()=>{let e=i(),r=c(`div`,e);l(e,r),n(r,`card bg-base-100 shadow`);let o=c(`div`,r);l(r,o),n(o,`card-body`);let s=c(`div`,o);l(o,s),l(s,a(`div 元素`));let u=c(`span`,o);l(o,u),l(u,a(`span 元素`)),l(o,c(`br`,o));let d=c(`img`,o);l(o,d),t(d,`src`,`https://placehold.co/600x400`),t(d,`alt`,`占位图`);let f=c(`input`,o);l(o,f),n(f,`input input-bordered`),t(f,`placeholder`,`自闭合 input`);let p=c(`p`,o);return l(o,p),l(p,a(`支持文本、嵌套与自闭合形式`)),e}):``;d(()=>p(e,b,S))}),e})}),s,h),s})};export{v as default};
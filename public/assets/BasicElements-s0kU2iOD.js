import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-ACs_OvwU.js";import{a as h}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as g}from"./Code-CliOXHNE.js";import{t as _}from"./SidebarPlaygroundExample-DXnPmR3z.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>t(()=>({activeTab:h(`ref:1:0`,()=>s(`code`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(_,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),p(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,d(`基础元素与自闭合标签`));let h=i(`div`,t);r(t,h),e(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);r(h,_),e(_,`role`,`tab`),l(()=>{p(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),a(_,`click`,()=>{v.value=`preview`}),r(_,d(`效果`));let y=i(`button`,h);r(h,y),e(y,`role`,`tab`),l(()=>{p(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),a(y,`click`,()=>{v.value=`code`}),r(y,d(`代码`));let b=i(`div`,t);r(t,b),p(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=o(`rue:slot:anchor`);r(b,x),l(()=>{let e=v.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,t);r(t,a),p(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),l(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});m(()=>u(e,a,s))}),e}):``;m(()=>u(e,b,x))}),r(b,d(` `));let S=o(`rue:slot:anchor`);return r(b,S),l(()=>{let t=v.value===`preview`?c(()=>{let t=n(),a=i(`div`,t);r(t,a),p(a,`card bg-base-100 shadow`);let o=i(`div`,a);r(a,o),p(o,`card-body`);let s=i(`div`,o);r(o,s),r(s,d(`div 元素`));let c=i(`span`,o);r(o,c),r(c,d(`span 元素`)),r(o,i(`br`,o));let l=i(`img`,o);r(o,l),e(l,`src`,`https://placehold.co/600x400`),e(l,`alt`,`占位图`);let u=i(`input`,o);r(o,u),p(u,`input input-bordered`),e(u,`placeholder`,`自闭合 input`);let f=i(`p`,o);return r(o,f),r(f,d(`支持文本、嵌套与自闭合形式`)),t}):``;m(()=>u(t,b,S))}),t})}),s,h),s})};export{v as default};
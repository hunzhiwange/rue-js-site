import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as g}from"./Code-BoXKy3gJ.js";import{r as _}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>l(()=>({activeTab:h(`ref:1:0`,()=>n(`code`))})));return o(n=>{let l=s(),h=m(`rue:component:anchor`);return e(l,h),c(f(_,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`基础元素与自闭合标签`));let h=d(`div`,n);e(n,h),i(h,`role`,`tablist`),u(h,`tabs tabs-box`);let _=d(`button`,h);e(h,_),i(_,`role`,`tab`),t(()=>{u(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{v.value=`preview`}),e(_,a(`效果`));let y=d(`button`,h);e(h,y),i(y,`role`,`tab`),t(()=>{u(y,`tab ${v.value===`code`?`tab-active`:``}`)}),r(y,`click`,()=>{v.value=`code`}),e(y,a(`代码`));let b=d(`div`,n);e(n,b),u(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=m(`rue:slot:anchor`);e(b,x),t(()=>{let n=v.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,b,x))}),e(b,a(` `));let S=m(`rue:slot:anchor`);return e(b,S),t(()=>{let t=v.value===`preview`?o(()=>{let t=s(),n=d(`div`,t);e(t,n),u(n,`card bg-base-100 shadow`);let r=d(`div`,n);e(n,r),u(r,`card-body`);let o=d(`div`,r);e(r,o),e(o,a(`div 元素`));let c=d(`span`,r);e(r,c),e(c,a(`span 元素`)),e(r,d(`br`,r));let l=d(`img`,r);e(r,l),i(l,`src`,`https://placehold.co/600x400`),i(l,`alt`,`占位图`);let f=d(`input`,r);e(r,f),u(f,`input input-bordered`),i(f,`placeholder`,`自闭合 input`);let p=d(`p`,r);return e(r,p),e(p,a(`支持文本、嵌套与自闭合形式`)),t}):``;p(()=>c(t,b,S))}),n})}),l,h),l})};export{v as default};
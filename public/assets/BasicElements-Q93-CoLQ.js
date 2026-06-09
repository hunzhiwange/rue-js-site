import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,qt as f,s as p,t as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as g}from"./Code-5DOEyGxf.js";import{r as _}from"./SidebarPlaygroundExample-cASgDpH3.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>i(`code`))})));return u(i=>{let f=r(),h=s(`rue:component:anchor`);return o(f,h),p(m(_,{children:u(()=>{let i=r(),f=e(`h1`,i);o(i,f),c(f,`text-5xl font-semibold mb-4 md:mb-4`),o(f,l(`基础元素与自闭合标签`));let h=e(`div`,i);o(i,h),d(h,`role`,`tablist`),c(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),d(_,`role`,`tab`),a(()=>{c(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),n(_,`click`,()=>{v.value=`preview`}),o(_,l(`效果`));let y=e(`button`,h);o(h,y),d(y,`role`,`tab`),a(()=>{c(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),n(y,`click`,()=>{v.value=`code`}),o(y,l(`代码`));let b=e(`div`,i);o(i,b),c(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=s(`rue:slot:anchor`);o(b,x),a(()=>{let n=v.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});t(()=>p(e,l,u))}),n}):``;t(()=>p(n,b,x))}),o(b,l(` `));let S=s(`rue:slot:anchor`);return o(b,S),a(()=>{let n=v.value===`preview`?u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`card bg-base-100 shadow`);let i=e(`div`,n);o(n,i),c(i,`card-body`);let a=e(`div`,i);o(i,a),o(a,l(`div 元素`));let s=e(`span`,i);o(i,s),o(s,l(`span 元素`)),o(i,e(`br`,i));let u=e(`img`,i);o(i,u),d(u,`src`,`https://placehold.co/600x400`),d(u,`alt`,`占位图`);let f=e(`input`,i);o(i,f),c(f,`input input-bordered`),d(f,`placeholder`,`自闭合 input`);let p=e(`p`,i);return o(i,p),o(p,l(`支持文本、嵌套与自闭合形式`)),t}):``;t(()=>p(n,b,S))}),i})}),f,h),f})};export{v as default};
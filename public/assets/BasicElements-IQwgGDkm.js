import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,q as u,qt as d,s as f,st as p,t as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as g}from"./Code-CZqShVUj.js";import{r as _}from"./SidebarPlaygroundExample-5H7RL-T7.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>d(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return l(r=>{let d=s(),h=a(`rue:component:anchor`);return n(d,h),f(m(_,{children:l(()=>{let r=s(),d=i(`h1`,r);n(r,d),p(d,`text-5xl font-semibold mb-4 md:mb-4`),n(d,e(`基础元素与自闭合标签`));let h=i(`div`,r);n(r,h),c(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);n(h,_),c(_,`role`,`tab`),o(()=>{p(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),u(_,`click`,()=>{v.value=`preview`}),n(_,e(`效果`));let y=i(`button`,h);n(h,y),c(y,`role`,`tab`),o(()=>{p(y,`tab ${v.value===`code`?`tab-active`:``}`)}),u(y,`click`,()=>{v.value=`code`}),n(y,e(`代码`));let b=i(`div`,r);n(r,b),p(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=a(`rue:slot:anchor`);n(b,x),o(()=>{let e=v.value===`code`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),p(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});t(()=>f(e,c,l))}),e}):``;t(()=>f(e,b,x))}),n(b,e(` `));let S=a(`rue:slot:anchor`);return n(b,S),o(()=>{let r=v.value===`preview`?l(()=>{let t=s(),r=i(`div`,t);n(t,r),p(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),p(a,`card-body`);let o=i(`div`,a);n(a,o),n(o,e(`div 元素`));let l=i(`span`,a);n(a,l),n(l,e(`span 元素`)),n(a,i(`br`,a));let u=i(`img`,a);n(a,u),c(u,`src`,`https://placehold.co/600x400`),c(u,`alt`,`占位图`);let d=i(`input`,a);n(a,d),p(d,`input input-bordered`),c(d,`placeholder`,`自闭合 input`);let f=i(`p`,a);return n(a,f),n(f,e(`支持文本、嵌套与自闭合形式`)),t}):``;t(()=>f(r,b,S))}),r})}),d,h),d})};export{v as default};
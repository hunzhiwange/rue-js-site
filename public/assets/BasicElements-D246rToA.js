import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m}from"./vapor-runtime-BuwLbCGk.js";import{a as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as g}from"./Code-DQxnq0in.js";import{t as _}from"./SidebarPlaygroundExample-BwOo72z2.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>u(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return c(u=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),d(p(_,{children:c(()=>{let u=t(),f=r(`h1`,u);a(u,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`基础元素与自闭合标签`));let h=r(`div`,u);a(u,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),m(()=>{n(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{v.value=`preview`}),a(_,o(`效果`));let y=r(`button`,h);a(h,y),s(y,`role`,`tab`),m(()=>{n(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),i(y,`click`,()=>{v.value=`code`}),a(y,o(`代码`));let b=r(`div`,u);a(u,b),n(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);a(b,x),m(()=>{let i=v.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),m(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,b,x))}),a(b,o(` `));let S=e(`rue:slot:anchor`);return a(b,S),m(()=>{let e=v.value===`preview`?c(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let c=r(`div`,i);a(i,c),n(c,`card-body`);let l=r(`div`,c);a(c,l),a(l,o(`div 元素`));let u=r(`span`,c);a(c,u),a(u,o(`span 元素`)),a(c,r(`br`,c));let d=r(`img`,c);a(c,d),s(d,`src`,`https://placehold.co/600x400`),s(d,`alt`,`占位图`);let f=r(`input`,c);a(c,f),n(f,`input input-bordered`),s(f,`placeholder`,`自闭合 input`);let p=r(`p`,c);return a(c,p),a(p,o(`支持文本、嵌套与自闭合形式`)),e}):``;l(()=>d(e,b,S))}),u})}),f,h),f})};export{v as default};
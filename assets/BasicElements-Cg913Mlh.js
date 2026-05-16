import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m}from"./vapor-runtime-B3ypJaOM.js";import{a as h}from"./vapor-helpers-vapor-CER7Yupw.js";import{t as g}from"./Code-DOCCgQFa.js";import{t as _}from"./SidebarPlaygroundExample-DwVZAGT7.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>d(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),u(p(_,{children:l(()=>{let d=t(),f=r(`h1`,d);a(d,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`基础元素与自闭合标签`));let h=r(`div`,d);a(d,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),c(()=>{n(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{v.value=`preview`}),a(_,o(`效果`));let y=r(`button`,h);a(h,y),s(y,`role`,`tab`),c(()=>{n(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),i(y,`click`,()=>{v.value=`code`}),a(y,o(`代码`));let b=r(`div`,d);a(d,b),n(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);a(b,x),c(()=>{let i=v.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});m(()=>u(e,s,l))}),i}):``;m(()=>u(i,b,x))}),a(b,o(` `));let S=e(`rue:slot:anchor`);return a(b,S),c(()=>{let e=v.value===`preview`?l(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let c=r(`div`,i);a(i,c),n(c,`card-body`);let l=r(`div`,c);a(c,l),a(l,o(`div 元素`));let u=r(`span`,c);a(c,u),a(u,o(`span 元素`)),a(c,r(`br`,c));let d=r(`img`,c);a(c,d),s(d,`src`,`https://placehold.co/600x400`),s(d,`alt`,`占位图`);let f=r(`input`,c);a(c,f),n(f,`input input-bordered`),s(f,`placeholder`,`自闭合 input`);let p=r(`p`,c);return a(c,p),a(p,o(`支持文本、嵌套与自闭合形式`)),e}):``;m(()=>u(e,b,S))}),d})}),f,h),f})};export{v as default};
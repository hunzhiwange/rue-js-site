import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,st as d,t as f,tt as p,zt as m}from"./vapor-runtime-CXIalONM.js";import{a as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as g}from"./Code-BIscIyEp.js";import{r as _}from"./SidebarPlaygroundExample-CEz1fABX.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>o(()=>({activeTab:h(`ref:1:0`,()=>m(`code`))})));return c(o=>{let m=e(),h=t(`rue:component:anchor`);return i(m,h),u(f(_,{children:c(()=>{let o=e(),m=s(`h1`,o);i(o,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,p(`基础元素与自闭合标签`));let h=s(`div`,o);i(o,h),d(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=s(`button`,h);i(h,_),d(_,`role`,`tab`),n(()=>{l(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),a(_,`click`,()=>{v.value=`preview`}),i(_,p(`效果`));let y=s(`button`,h);i(h,y),d(y,`role`,`tab`),n(()=>{l(y,`tab ${v.value===`code`?`tab-active`:``}`)}),a(y,`click`,()=>{v.value=`code`}),i(y,p(`代码`));let b=s(`div`,o);i(o,b),l(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=t(`rue:slot:anchor`);i(b,x),n(()=>{let a=v.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,b,x))}),i(b,p(` `));let S=t(`rue:slot:anchor`);return i(b,S),n(()=>{let t=v.value===`preview`?c(()=>{let t=e(),n=s(`div`,t);i(t,n),l(n,`card bg-base-100 shadow`);let r=s(`div`,n);i(n,r),l(r,`card-body`);let a=s(`div`,r);i(r,a),i(a,p(`div 元素`));let o=s(`span`,r);i(r,o),i(o,p(`span 元素`)),i(r,s(`br`,r));let c=s(`img`,r);i(r,c),d(c,`src`,`https://placehold.co/600x400`),d(c,`alt`,`占位图`);let u=s(`input`,r);i(r,u),l(u,`input input-bordered`),d(u,`placeholder`,`自闭合 input`);let f=s(`p`,r);return i(r,f),i(f,p(`支持文本、嵌套与自闭合形式`)),t}):``;r(()=>u(t,b,S))}),o})}),m,h),m})};export{v as default};
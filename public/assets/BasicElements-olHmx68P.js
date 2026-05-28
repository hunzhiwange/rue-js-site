import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,t as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h}from"./vapor-helpers-vapor-DkadWylb.js";import{t as g}from"./Code-B_4lzH85.js";import{t as _}from"./SidebarPlaygroundExample-CtM-WHq_.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>n(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return u(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),f(m(_,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`基础元素与自闭合标签`));let h=e(`div`,n);o(n,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),p(_,`role`,`tab`),s(()=>{l(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),t(_,`click`,()=>{v.value=`preview`}),o(_,d(`效果`));let y=e(`button`,h);o(h,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),t(y,`click`,()=>{v.value=`code`}),o(y,d(`代码`));let b=e(`div`,n);o(n,b),l(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=c(`rue:slot:anchor`);o(b,x),s(()=>{let t=v.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,b,x))}),o(b,d(` `));let S=c(`rue:slot:anchor`);return o(b,S),s(()=>{let t=v.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body`);let a=e(`div`,r);o(r,a),o(a,d(`div 元素`));let s=e(`span`,r);o(r,s),o(s,d(`span 元素`)),o(r,e(`br`,r));let c=e(`img`,r);o(r,c),p(c,`src`,`https://placehold.co/600x400`),p(c,`alt`,`占位图`);let u=e(`input`,r);o(r,u),l(u,`input input-bordered`),p(u,`placeholder`,`自闭合 input`);let f=e(`p`,r);return o(r,f),o(f,d(`支持文本、嵌套与自闭合形式`)),t}):``;a(()=>f(t,b,S))}),n})}),r,h),r})};export{v as default};
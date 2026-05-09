import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,j as c,pt as l,rt as u,t as d,u as f,ut as p}from"./vapor-runtime-BZZbPG7x.js";import{a as m}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as h}from"./Code-C8wy38VS.js";import{t as g}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var _=()=>{let{activeTab:_}=m(`useSetup:0:0`,()=>p(()=>({activeTab:m(`ref:1:0`,()=>u(`code`))})));return f(()=>{let u=a(),p=i(`rue:component:anchor`);return c(u,p),s(d(g,{children:f(()=>{let u=a(),p=t(`h1`);c(u,p),o(p,`text-5xl font-semibold mb-4 md:mb-4`),c(p,r(`基础元素与自闭合标签`));let m=t(`div`);c(u,m),n(m,`role`,`tablist`),o(m,`tabs tabs-box`);let g=t(`button`);c(m,g),n(g,`role`,`tab`),l(()=>{o(g,String(`tab ${_.value===`preview`?`tab-active`:``}`))}),e(g,`click`,()=>{_.value=`preview`}),c(g,r(`效果`));let v=t(`button`);c(m,v),n(v,`role`,`tab`),l(()=>{o(v,String(`tab ${_.value===`code`?`tab-active`:``}`))}),e(v,`click`,()=>{_.value=`code`}),c(v,r(`代码`));let y=t(`div`);c(u,y),o(y,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=i(`rue:slot:anchor`);c(y,b),l(()=>{s(_.value===`code`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);c(n,r),o(r,`card-body p-0`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(d(h,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`}),r,u)}),e}):``,y,b)}),c(y,r(` `));let x=i(`rue:slot:anchor`);return c(y,x),l(()=>{s(_.value===`preview`?f(()=>{let e=a(),i=t(`div`);c(e,i),o(i,`card bg-base-100 shadow`);let s=t(`div`);c(i,s),o(s,`card-body`);let l=t(`div`);c(s,l),c(l,r(`div 元素`));let u=t(`span`);c(s,u),c(u,r(`span 元素`)),c(s,t(`br`));let d=t(`img`);c(s,d),n(d,`src`,`https://placehold.co/600x400`),n(d,`alt`,`占位图`);let f=t(`input`);c(s,f),o(f,`input input-bordered`),n(f,`placeholder`,`自闭合 input`);let p=t(`p`);return c(s,p),c(p,r(`支持文本、嵌套与自闭合形式`)),e}):``,y,x)}),u})}),u,p),u})};export{_ as default};
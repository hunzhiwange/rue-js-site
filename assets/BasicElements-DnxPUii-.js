import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,j as u,lt as d,pt as f,t as p,u as m}from"./vapor-runtime-D3a-68js.js";import{a as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as g}from"./Code-2C2psoH3.js";import{t as _}from"./SidebarPlaygroundExample-DKa0aI1C.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>s(()=>({activeTab:h(`ref:1:0`,()=>d(`code`))})));return m(()=>{let s=e(),d=a(`rue:component:anchor`);return i(s,d),l(p(_,{children:m(()=>{let s=e(),d=n(`h1`);i(s,d),t(d,`text-5xl font-semibold mb-4 md:mb-4`),i(d,r(`基础元素与自闭合标签`));let h=n(`div`);i(s,h),o(h,`role`,`tablist`),t(h,`tabs tabs-box`);let _=n(`button`);i(h,_),o(_,`role`,`tab`),c(()=>{t(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),u(_,`click`,()=>{v.value=`preview`}),i(_,r(`效果`));let y=n(`button`);i(h,y),o(y,`role`,`tab`),c(()=>{t(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),u(y,`click`,()=>{v.value=`code`}),i(y,r(`代码`));let b=n(`div`);i(s,b),t(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=a(`rue:slot:anchor`);i(b,x),c(()=>{let r=v.value===`code`?m(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let u=a(`rue:component:anchor`);return i(s,u),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});f(()=>l(e,s,u))}),r}):``;f(()=>l(r,b,x))}),i(b,r(` `));let S=a(`rue:slot:anchor`);return i(b,S),c(()=>{let a=v.value===`preview`?m(()=>{let a=e(),s=n(`div`);i(a,s),t(s,`card bg-base-100 shadow`);let c=n(`div`);i(s,c),t(c,`card-body`);let l=n(`div`);i(c,l),i(l,r(`div 元素`));let u=n(`span`);i(c,u),i(u,r(`span 元素`)),i(c,n(`br`));let d=n(`img`);i(c,d),o(d,`src`,`https://placehold.co/600x400`),o(d,`alt`,`占位图`);let f=n(`input`);i(c,f),t(f,`input input-bordered`),o(f,`placeholder`,`自闭合 input`);let p=n(`p`);return i(c,p),i(p,r(`支持文本、嵌套与自闭合形式`)),a}):``;f(()=>l(a,b,S))}),s})}),s,d),s})};export{v as default};
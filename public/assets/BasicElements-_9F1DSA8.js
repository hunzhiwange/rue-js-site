import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,nt as u,o as d,t as f,tt as p,ut as m}from"./vapor-runtime-CKrmRMZX.js";import{a as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as g}from"./Code-D5UqTwV6.js";import{r as _}from"./SidebarPlaygroundExample-D2vGHFCu.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>a(()=>({activeTab:h(`ref:1:0`,()=>n(`code`))})));return l(n=>{let a=c(),h=e(`rue:component:anchor`);return o(a,h),d(f(_,{children:l(()=>{let n=c(),a=p(`h1`,n);o(n,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,u(`基础元素与自闭合标签`));let h=p(`div`,n);o(n,h),s(h,`role`,`tablist`),m(h,`tabs tabs-box`);let _=p(`button`,h);o(h,_),s(_,`role`,`tab`),t(()=>{m(_,`tab ${v.value===`preview`?`tab-active`:``}`)}),i(_,`click`,()=>{v.value=`preview`}),o(_,u(`效果`));let y=p(`button`,h);o(h,y),s(y,`role`,`tab`),t(()=>{m(y,`tab ${v.value===`code`?`tab-active`:``}`)}),i(y,`click`,()=>{v.value=`code`}),o(y,u(`代码`));let b=p(`div`,n);o(n,b),m(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);o(b,x),t(()=>{let n=v.value===`code`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow overflow-auto`);let a=p(`div`,i);o(i,a),m(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,b,x))}),o(b,u(` `));let S=e(`rue:slot:anchor`);return o(b,S),t(()=>{let e=v.value===`preview`?l(()=>{let e=c(),t=p(`div`,e);o(e,t),m(t,`card bg-base-100 shadow`);let n=p(`div`,t);o(t,n),m(n,`card-body`);let r=p(`div`,n);o(n,r),o(r,u(`div 元素`));let i=p(`span`,n);o(n,i),o(i,u(`span 元素`)),o(n,p(`br`,n));let a=p(`img`,n);o(n,a),s(a,`src`,`https://placehold.co/600x400`),s(a,`alt`,`占位图`);let l=p(`input`,n);o(n,l),m(l,`input input-bordered`),s(l,`placeholder`,`自闭合 input`);let d=p(`p`,n);return o(n,d),o(d,u(`支持文本、嵌套与自闭合形式`)),e}):``;r(()=>d(e,b,S))}),n})}),a,h),a})};export{v as default};
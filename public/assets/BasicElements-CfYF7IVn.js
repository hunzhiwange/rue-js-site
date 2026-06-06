import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{t as _}from"./SidebarPlaygroundExample-CdMvdgT7.js";var v=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>c(`code`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(_,{children:l(()=>{let c=a(),f=o(`h1`,c);t(c,f),e(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,r(`基础元素与自闭合标签`));let h=o(`div`,c);t(c,h),s(h,`role`,`tablist`),e(h,`tabs tabs-box`);let _=o(`button`,h);t(h,_),s(_,`role`,`tab`),n(()=>{e(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),m(_,`click`,()=>{v.value=`preview`}),t(_,r(`效果`));let y=o(`button`,h);t(h,y),s(y,`role`,`tab`),n(()=>{e(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),m(y,`click`,()=>{v.value=`code`}),t(y,r(`代码`));let b=o(`div`,c);t(c,b),e(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=i(`rue:slot:anchor`);t(b,x),n(()=>{let r=v.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=d(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default BasicElements;`});p(()=>u(e,c,l))}),r}):``;p(()=>u(r,b,x))}),t(b,r(` `));let S=i(`rue:slot:anchor`);return t(b,S),n(()=>{let n=v.value===`preview`?l(()=>{let n=a(),i=o(`div`,n);t(n,i),e(i,`card bg-base-100 shadow`);let c=o(`div`,i);t(i,c),e(c,`card-body`);let l=o(`div`,c);t(c,l),t(l,r(`div 元素`));let u=o(`span`,c);t(c,u),t(u,r(`span 元素`)),t(c,o(`br`,c));let d=o(`img`,c);t(c,d),s(d,`src`,`https://placehold.co/600x400`),s(d,`alt`,`占位图`);let f=o(`input`,c);t(c,f),e(f,`input input-bordered`),s(f,`placeholder`,`自闭合 input`);let p=o(`p`,c);return t(c,p),t(p,r(`支持文本、嵌套与自闭合形式`)),n}):``;p(()=>u(n,b,S))}),c})}),f,h),f})};export{v as default};
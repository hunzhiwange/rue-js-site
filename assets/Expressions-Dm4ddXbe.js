import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as _}from"./Code-C8wy38VS.js";import{t as v}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var y=7,b={name:`Alice`,age:20},x=()=>{let{activeTab:x}=g(`useSetup:0:0`,()=>h(()=>({activeTab:g(`ref:1:0`,()=>f(`code`))})));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(v,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`表达式与插值`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let v=t(`button`);u(g,v),n(v,`role`,`tab`),d(()=>{s(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{x.value=`preview`}),u(v,r(`效果`));let S=t(`button`);u(g,S),n(S,`role`,`tab`),d(()=>{s(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),e(S,`click`,()=>{x.value=`code`}),u(S,r(`代码`));let C=t(`div`);u(f,C),s(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);u(C,w),d(()=>{l(x.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const n = 7;
const user = { name: 'Alice', age: 20 };

const Expressions: FC = () => (
  <div className="grid gap-2">
    <div>{1 + 2}</div>
    <div>{\`hello \${user.name}\`}</div>
    <div>{n > 5 ? '大于5' : '不大于5'}</div>
    <div>{['A', 'B'].join(',')}</div>
  </div>
);

export default Expressions;`}),r,i)}),e}):``,C,w)}),u(C,r(` `));let T=a(`rue:slot:anchor`);return u(C,T),d(()=>{l(x.value===`preview`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow`);let r=t(`div`);u(n,r),s(r,`card-body grid gap-2`);let a=t(`div`);u(r,a);let l=i(a);u(a,l),d(()=>{c(l,3)});let f=t(`div`);u(r,f);let p=i(f);u(f,p),d(()=>{c(p,`hello ${b.name}`)});let m=t(`div`);u(r,m);let h=i(m);u(m,h),d(()=>{c(h,y>5?`大于5`:`不大于5`)});let g=t(`div`);u(r,g);let _=i(g);return u(g,_),d(()=>{c(_,[`A`,`B`].join(`,`))}),e}):``,C,T)}),f})}),f,h),f})};export{x as default};
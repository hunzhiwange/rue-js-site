import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./Code-2C2psoH3.js";import{t as y}from"./SidebarPlaygroundExample-DKa0aI1C.js";var b=7,x={name:`Alice`,age:20},S=()=>{let{activeTab:S}=_(`useSetup:0:0`,()=>l(()=>({activeTab:_(`ref:1:0`,()=>p(`code`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(y,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`表达式与插值`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let y=n(`button`);i(_,y),s(y,`role`,`tab`),u(()=>{t(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),f(y,`click`,()=>{S.value=`preview`}),i(y,r(`效果`));let C=n(`button`);i(_,C),s(C,`role`,`tab`),u(()=>{t(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),f(C,`click`,()=>{S.value=`code`}),i(C,r(`代码`));let w=n(`div`);i(l,w),t(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);i(w,T),u(()=>{let r=S.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Expressions;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,w,T))}),i(w,r(` `));let E=a(`rue:slot:anchor`);return i(w,E),u(()=>{let r=S.value===`preview`?g(()=>{let r=e(),a=n(`div`);i(r,a),t(a,`card bg-base-100 shadow`);let s=n(`div`);i(a,s),t(s,`card-body grid gap-2`);let l=n(`div`);i(s,l);let d=o(l);i(l,d),u(()=>{c(d,3)});let f=n(`div`);i(s,f);let p=o(f);i(f,p),u(()=>{c(p,`hello ${x.name}`)});let m=n(`div`);i(s,m);let h=o(m);i(m,h),u(()=>{c(h,b>5?`大于5`:`不大于5`)});let g=n(`div`);i(s,g);let _=o(g);return i(g,_),u(()=>{c(_,[`A`,`B`].join(`,`))}),r}):``;m(()=>d(r,w,E))}),l})}),l,p),l})};export{S as default};
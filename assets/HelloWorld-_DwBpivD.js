import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as v}from"./Code-CLTo4rRM.js";import{t as y}from"./SidebarPlaygroundExample-DOFGFBd1.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>f(()=>({message:_(`ref:1:0`,()=>p(`Hello World!`)),activeTab:_(`ref:1:1`,()=>p(`preview`))})));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),d(m(y,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`你好，世界（移植自 Vue）`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),l(()=>{n(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{x.value=`preview`}),a(y,s(`效果`));let S=r(`button`,_);a(_,S),c(S,`role`,`tab`),l(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,s(`代码`));let C=r(`div`,f);a(f,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),l(()=>{let i=x.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const HelloWorld: FC = () => {
  const message = ref('Hello World!');
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h1>{message.value}</h1>
      </div>
    </div>
  );
};

export default HelloWorld;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,C,w))}),a(C,s(` `));let T=e(`rue:slot:anchor`);return a(C,T),l(()=>{let e=x.value===`preview`?u(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let s=r(`div`,i);a(i,s),n(s,`card-body`);let c=r(`h1`,s);a(s,c);let u=g(c);return a(c,u),l(()=>{o(u,b.value)}),e}):``;h(()=>d(e,C,T))}),f})}),p,_),p})};export{b as default};
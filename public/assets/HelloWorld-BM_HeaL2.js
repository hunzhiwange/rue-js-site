import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as v}from"./Code-DQxnq0in.js";import{t as y}from"./SidebarPlaygroundExample-BwOo72z2.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>d(()=>({message:_(`ref:1:0`,()=>p(`Hello World!`)),activeTab:_(`ref:1:1`,()=>p(`preview`))})));return l(d=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),f(m(y,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`你好，世界（移植自 Vue）`));let _=r(`div`,d);a(d,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),h(()=>{n(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{x.value=`preview`}),a(y,s(`效果`));let S=r(`button`,_);a(_,S),c(S,`role`,`tab`),h(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,s(`代码`));let C=r(`div`,d);a(d,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),h(()=>{let i=x.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,C,w))}),a(C,s(` `));let T=e(`rue:slot:anchor`);return a(C,T),h(()=>{let e=x.value===`preview`?l(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`card bg-base-100 shadow`);let s=r(`div`,i);a(i,s),n(s,`card-body`);let c=r(`h1`,s);a(s,c);let l=g(c);return a(c,l),h(()=>{o(l,b.value)}),e}):``;u(()=>f(e,C,T))}),d})}),p,_),p})};export{b as default};
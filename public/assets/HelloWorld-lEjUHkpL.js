import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,t as h,tt as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _}from"./vapor-helpers-vapor-DkadWylb.js";import{t as v}from"./Code-B_4lzH85.js";import{t as y}from"./SidebarPlaygroundExample-CtM-WHq_.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>n(()=>({message:_(`ref:1:0`,()=>r(`Hello World!`)),activeTab:_(`ref:1:1`,()=>r(`preview`))})));return u(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),f(h(y,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`你好，世界（移植自 Vue）`));let _=e(`div`,n);o(n,_),m(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),m(y,`role`,`tab`),s(()=>{l(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{x.value=`preview`}),o(y,d(`效果`));let S=e(`button`,_);o(_,S),m(S,`role`,`tab`),s(()=>{l(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{x.value=`code`}),o(S,d(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=x.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,C,w))}),o(C,d(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let t=x.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body`);let a=e(`h1`,r);o(r,a);let c=g(a);return o(a,c),s(()=>{p(c,b.value)}),t}):``;a(()=>f(t,C,T))}),n})}),r,_),r})};export{b as default};
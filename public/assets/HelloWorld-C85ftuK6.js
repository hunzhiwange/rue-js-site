import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>p(()=>({message:_(`ref:1:0`,()=>r(`Hello World!`)),activeTab:_(`ref:1:1`,()=>r(`preview`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(y,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`你好，世界（移植自 Vue）`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=i(`button`,_);n(_,y),c(y,`role`,`tab`),o(()=>{h(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),f(y,`click`,()=>{x.value=`preview`}),n(y,e(`效果`));let S=i(`button`,_);n(_,S),c(S,`role`,`tab`),o(()=>{h(S,`tab ${x.value===`code`?`tab-active`:``}`)}),f(S,`click`,()=>{x.value=`code`}),n(S,e(`代码`));let C=i(`div`,r);n(r,C),h(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),o(()=>{let e=x.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),h(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});t(()=>m(e,c,l))}),e}):``;t(()=>m(e,C,w))}),n(C,e(` `));let T=a(`rue:slot:anchor`);return n(C,T),o(()=>{let e=x.value===`preview`?u(()=>{let e=s(),t=i(`div`,e);n(e,t),h(t,`card bg-base-100 shadow`);let r=i(`div`,t);n(t,r),h(r,`card-body`);let a=i(`h1`,r);n(r,a);let c=l(a);return n(a,c),o(()=>{d(c,b.value)}),e}):``;t(()=>m(e,C,T))}),r})}),p,_),p})};export{b as default};
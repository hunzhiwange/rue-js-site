import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>p(()=>({message:_(`ref:1:0`,()=>i(`Hello World!`)),activeTab:_(`ref:1:1`,()=>i(`preview`))})));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(y,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`你好，世界（移植自 Vue）`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{x.value=`preview`}),o(y,l(`效果`));let S=e(`button`,_);o(_,S),f(S,`role`,`tab`),a(()=>{c(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{x.value=`code`}),o(S,l(`代码`));let C=e(`div`,i);o(i,C),c(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=s(`rue:slot:anchor`);o(C,w),a(()=>{let n=x.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,C,w))}),o(C,l(` `));let T=s(`rue:slot:anchor`);return o(C,T),a(()=>{let n=x.value===`preview`?u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`card bg-base-100 shadow`);let i=e(`div`,n);o(n,i),c(i,`card-body`);let s=e(`h1`,i);o(i,s);let l=g(s);return o(s,l),a(()=>{d(l,b.value)}),t}):``;t(()=>m(n,C,T))}),i})}),p,_),p})};export{b as default};
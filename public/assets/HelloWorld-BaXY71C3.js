import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>a(()=>({message:_(`ref:1:0`,()=>n(`Hello World!`)),activeTab:_(`ref:1:1`,()=>n(`preview`))})));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(y,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`你好，世界（移植自 Vue）`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let y=h(`button`,_);o(_,y),s(y,`role`,`tab`),t(()=>{g(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{x.value=`preview`}),o(y,d(`效果`));let S=h(`button`,_);o(_,S),s(S,`role`,`tab`),t(()=>{g(S,`tab ${x.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{x.value=`code`}),o(S,d(`代码`));let C=h(`div`,n);o(n,C),g(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);o(C,w),t(()=>{let n=x.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow overflow-auto`);let a=h(`div`,i);o(i,a),g(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,C,w))}),o(C,d(` `));let T=e(`rue:slot:anchor`);return o(C,T),t(()=>{let e=x.value===`preview`?u(()=>{let e=c(),n=h(`div`,e);o(e,n),g(n,`card bg-base-100 shadow`);let r=h(`div`,n);o(n,r),g(r,`card-body`);let i=h(`h1`,r);o(r,i);let a=p(i);return o(i,a),t(()=>{l(a,b.value)}),e}):``;r(()=>f(e,C,T))}),n})}),a,_),a})};export{b as default};
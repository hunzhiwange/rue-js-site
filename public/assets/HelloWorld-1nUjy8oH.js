import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as v}from"./Code-CliOXHNE.js";import{t as y}from"./SidebarPlaygroundExample-DXnPmR3z.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>t(()=>({message:_(`ref:1:0`,()=>c(`Hello World!`)),activeTab:_(`ref:1:1`,()=>c(`preview`))})));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(y,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`你好，世界（移植自 Vue）`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=a(`button`,_);r(_,y),e(y,`role`,`tab`),u(()=>{h(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),o(y,`click`,()=>{x.value=`preview`}),r(y,f(`效果`));let S=a(`button`,_);r(_,S),e(S,`role`,`tab`),u(()=>{h(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),o(S,`click`,()=>{x.value=`code`}),r(S,f(`代码`));let C=a(`div`,t);r(t,C),h(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=s(`rue:slot:anchor`);r(C,w),u(()=>{let e=x.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});g(()=>d(e,i,o))}),e}):``;g(()=>d(e,C,w))}),r(C,f(` `));let T=s(`rue:slot:anchor`);return r(C,T),u(()=>{let e=x.value===`preview`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow`);let o=a(`div`,t);r(t,o),h(o,`card-body`);let s=a(`h1`,o);r(o,s);let c=i(s);return r(s,c),u(()=>{p(c,b.value)}),e}):``;g(()=>d(e,C,T))}),t})}),c,_),c})};export{b as default};
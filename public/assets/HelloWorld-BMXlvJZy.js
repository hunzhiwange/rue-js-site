import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>o(()=>({message:_(`ref:1:0`,()=>t(`Hello World!`)),activeTab:_(`ref:1:1`,()=>t(`preview`))})));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(y,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`你好，世界（移植自 Vue）`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let y=u(`button`,_);n(_,y),l(y,`role`,`tab`),g(()=>{i(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{x.value=`preview`}),n(y,f(`效果`));let S=u(`button`,_);n(_,S),l(S,`role`,`tab`),g(()=>{i(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),n(S,f(`代码`));let C=u(`div`,t);n(t,C),i(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),g(()=>{let t=x.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,C,w))}),n(C,f(` `));let T=a(`rue:slot:anchor`);return n(C,T),g(()=>{let t=x.value===`preview`?c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let r=u(`div`,t);n(t,r),i(r,`card-body`);let a=u(`h1`,r);n(r,a);let o=s(a);return n(a,o),g(()=>{h(o,b.value)}),e}):``;e(()=>d(t,C,T))}),t})}),o,_),o})};export{b as default};
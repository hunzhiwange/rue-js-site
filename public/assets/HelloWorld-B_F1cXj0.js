import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-C5NjdoiC.js";import{r as y}from"./SidebarPlaygroundExample-DpItFif-.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>d(()=>({message:_(`ref:1:0`,()=>n(`Hello World!`)),activeTab:_(`ref:1:1`,()=>n(`preview`))})));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(y,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`你好，世界（移植自 Vue）`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let y=p(`button`,_);e(_,y),o(y,`role`,`tab`),t(()=>{f(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{x.value=`preview`}),e(y,s(`效果`));let S=p(`button`,_);e(_,S),o(S,`role`,`tab`),t(()=>{f(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),e(S,s(`代码`));let C=p(`div`,n);e(n,C),f(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=g(`rue:slot:anchor`);e(C,w),t(()=>{let n=x.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,C,w))}),e(C,s(` `));let T=g(`rue:slot:anchor`);return e(C,T),t(()=>{let n=x.value===`preview`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow`);let o=p(`div`,r);e(r,o),f(o,`card-body`);let s=p(`h1`,o);e(o,s);let c=i(s);return e(s,c),t(()=>{a(c,b.value)}),n}):``;h(()=>u(n,C,T))}),n})}),d,_),d})};export{b as default};
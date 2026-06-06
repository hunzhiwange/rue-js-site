import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>m(()=>({message:_(`ref:1:0`,()=>u(`Hello World!`)),activeTab:_(`ref:1:1`,()=>u(`preview`))})));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(y,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`你好，世界（移植自 Vue）`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let y=s(`button`,_);t(_,y),c(y,`role`,`tab`),n(()=>{e(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),g(y,`click`,()=>{x.value=`preview`}),t(y,r(`效果`));let S=s(`button`,_);t(_,S),c(S,`role`,`tab`),n(()=>{e(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),g(S,`click`,()=>{x.value=`code`}),t(S,r(`代码`));let C=s(`div`,u);t(u,C),e(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);t(C,w),n(()=>{let r=x.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});h(()=>f(e,c,l))}),r}):``;h(()=>f(r,C,w))}),t(C,r(` `));let T=i(`rue:slot:anchor`);return t(C,T),n(()=>{let r=x.value===`preview`?d(()=>{let r=o(),i=s(`div`,r);t(r,i),e(i,`card bg-base-100 shadow`);let c=s(`div`,i);t(i,c),e(c,`card-body`);let u=s(`h1`,c);t(c,u);let d=a(u);return t(u,d),n(()=>{l(d,b.value)}),r}):``;h(()=>f(r,C,T))}),u})}),m,_),m})};export{b as default};
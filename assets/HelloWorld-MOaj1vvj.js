import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./Code-2C2psoH3.js";import{t as y}from"./SidebarPlaygroundExample-DKa0aI1C.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>l(()=>({message:_(`ref:1:0`,()=>p(`Hello World!`)),activeTab:_(`ref:1:1`,()=>p(`preview`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(y,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`你好，世界（移植自 Vue）`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let y=n(`button`);i(_,y),s(y,`role`,`tab`),u(()=>{t(y,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),f(y,`click`,()=>{x.value=`preview`}),i(y,r(`效果`));let S=n(`button`);i(_,S),s(S,`role`,`tab`),u(()=>{t(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),f(S,`click`,()=>{x.value=`code`}),i(S,r(`代码`));let C=n(`div`);i(l,C),t(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);i(C,w),u(()=>{let r=x.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,C,w))}),i(C,r(` `));let T=a(`rue:slot:anchor`);return i(C,T),u(()=>{let r=x.value===`preview`?g(()=>{let r=e(),a=n(`div`);i(r,a),t(a,`card bg-base-100 shadow`);let s=n(`div`);i(a,s),t(s,`card-body`);let l=n(`h1`);i(s,l);let d=o(l);return i(l,d),u(()=>{c(d,b.value)}),r}):``;m(()=>d(r,C,T))}),l})}),l,p),l})};export{b as default};
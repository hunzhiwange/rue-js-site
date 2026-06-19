import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";var b=()=>{let{message:b,activeTab:x}=_(`useSetup:0:0`,()=>o(()=>({message:_(`ref:1:0`,()=>g(`Hello World!`)),activeTab:_(`ref:1:1`,()=>g(`preview`))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(y,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`你好，世界（移植自 Vue）`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let y=s(`button`,_);i(_,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${x.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{x.value=`preview`}),i(y,h(`效果`));let S=s(`button`,_);i(_,S),p(S,`role`,`tab`),n(()=>{u(S,`tab ${x.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{x.value=`code`}),i(S,h(`代码`));let C=s(`div`,o);i(o,C),u(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=t(`rue:slot:anchor`);i(C,w),n(()=>{let a=x.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HelloWorld;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,C,w))}),i(C,h(` `));let T=t(`rue:slot:anchor`);return i(C,T),n(()=>{let t=x.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let a=s(`div`,r);i(r,a),u(a,`card-body`);let o=s(`h1`,a);i(a,o);let l=d(o);return i(o,l),n(()=>{c(l,b.value)}),t}):``;r(()=>f(t,C,T))}),o})}),g,_),g})};export{b as default};
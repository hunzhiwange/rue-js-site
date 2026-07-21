import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{r as b}from"./SidebarPlaygroundExample-B78jsvoF.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>e(()=>({activeTab:v(`ref:1:0`,()=>u(`code`)),title:v(`ref:1:1`,()=>u(`Rue 文本指令`)),status:v(`ref:1:2`,()=>u(`等待同步`))})));return h(e=>{let u=a(),v=i(`rue:component:anchor`);return f(u,v),g(_(b,{children:h(()=>{let e=a(),u=d(`h1`,e);f(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),f(u,c(`v-text / r-text`));let v=d(`div`,e);f(e,v),t(v,`role`,`tablist`),r(v,`tabs tabs-box`);let b=d(`button`,v);f(v,b),t(b,`role`,`tab`),p(()=>{r(b,`tab ${x.value===`preview`?`tab-active`:``}`)}),l(b,`click`,()=>{x.value=`preview`}),f(b,c(`效果`));let w=d(`button`,v);f(v,w),t(w,`role`,`tab`),p(()=>{r(w,`tab ${x.value===`code`?`tab-active`:``}`)}),l(w,`click`,()=>{x.value=`code`}),f(w,c(`代码`));let T=d(`div`,e);f(e,T),r(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);f(T,E),p(()=>{let e=x.value===`code`?h(()=>{let e=a(),t=d(`div`,e);f(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=d(`div`,t);f(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return f(n,o),p(()=>{let e=_(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VTextAndRText: FC = () => {
  const title = ref('Rue 文本指令');
  const status = ref('等待同步');

  return (
    <div className="grid gap-4">
      <input className="input input-bordered" value={title.value} onInput={event => {
        title.value = (event.target as HTMLInputElement).value;
      }} />
      <button className="btn btn-sm" onClick={() => {
        status.value = '已同步：' + title.value;
      }}>
        同步状态
      </button>

      <h2 v-text="title.value" className="text-xl font-semibold"></h2>
      <p r-text={status.value} className="alert alert-info"></p>
    </div>
  );
};

export default VTextAndRText;`});m(()=>g(e,n,o))}),e}):``;m(()=>g(e,T,E))}),f(T,c(` `));let D=i(`rue:slot:anchor`);return f(T,D),p(()=>{let e=x.value===`preview`?h(()=>{let e=a(),t=d(`div`,e);f(e,t),r(t,`card bg-base-100 shadow`);let i=d(`div`,t);f(t,i),r(i,`card-body grid gap-6`);let u=d(`section`,i);f(i,u),r(u,`space-y-3`);let m=d(`div`,u);f(u,m),r(m,`flex flex-wrap items-center gap-3`);let h=d(`input`,m);f(m,h),r(h,`input input-bordered`),p(()=>{s(h,S.value)}),l(h,`input`,e=>{S.value=e.target.value});let g=d(`button`,m);f(m,g),r(g,`btn btn-sm`),l(g,`click`,()=>{C.value=`已同步：`+S.value}),f(g,c(`同步状态`));let _=d(`div`,u);f(u,_),r(_,`rounded-box border border-base-300 p-4 grid gap-3`);let v=d(`h2`,_);f(_,v),r(v,`text-xl font-semibold`);let y=o(v);f(v,y),p(()=>{n(y,S.value)});let b=d(`p`,_);f(_,b),r(b,`alert alert-info`);let x=o(b);return f(b,x),p(()=>{n(x,C.value)}),e}):``;m(()=>g(e,T,D))}),e})}),u,v),u})};export{x as default};
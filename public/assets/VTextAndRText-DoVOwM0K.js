import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>s(()=>({activeTab:v(`ref:1:0`,()=>t(`code`)),title:v(`ref:1:1`,()=>t(`Rue 文本指令`)),status:v(`ref:1:2`,()=>t(`等待同步`))})));return l(t=>{let s=h(),v=o(`rue:component:anchor`);return n(s,v),f(m(b,{children:l(()=>{let t=h(),s=d(`h1`,t);n(t,s),a(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,p(`v-text / r-text`));let v=d(`div`,t);n(t,v),u(v,`role`,`tablist`),a(v,`tabs tabs-box`);let b=d(`button`,v);n(v,b),u(b,`role`,`tab`),_(()=>{a(b,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(b,`click`,()=>{x.value=`preview`}),n(b,p(`效果`));let w=d(`button`,v);n(v,w),u(w,`role`,`tab`),_(()=>{a(w,`tab ${x.value===`code`?`tab-active`:``}`)}),r(w,`click`,()=>{x.value=`code`}),n(w,p(`代码`));let T=d(`div`,t);n(t,T),a(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=o(`rue:slot:anchor`);n(T,E),_(()=>{let t=x.value===`code`?l(()=>{let t=h(),r=d(`div`,t);n(t,r),a(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);n(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return n(i,s),_(()=>{let t=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});e(()=>f(t,i,s))}),t}):``;e(()=>f(t,T,E))}),n(T,p(` `));let D=o(`rue:slot:anchor`);return n(T,D),_(()=>{let t=x.value===`preview`?l(()=>{let e=h(),t=d(`div`,e);n(e,t),a(t,`card bg-base-100 shadow`);let o=d(`div`,t);n(t,o),a(o,`card-body grid gap-6`);let s=d(`section`,o);n(o,s),a(s,`space-y-3`);let l=d(`div`,s);n(s,l),a(l,`flex flex-wrap items-center gap-3`);let u=d(`input`,l);n(l,u),a(u,`input input-bordered`),_(()=>{i(u,S.value)}),r(u,`input`,e=>{S.value=e.target.value});let f=d(`button`,l);n(l,f),a(f,`btn btn-sm`),r(f,`click`,()=>{C.value=`已同步：`+S.value}),n(f,p(`同步状态`));let m=d(`div`,s);n(s,m),a(m,`rounded-box border border-base-300 p-4 grid gap-3`);let v=d(`h2`,m);n(m,v),a(v,`text-xl font-semibold`);let y=c(v);n(v,y),_(()=>{g(y,S.value)});let b=d(`p`,m);n(m,b),a(b,`alert alert-info`);let x=c(b);return n(b,x),_(()=>{g(x,C.value)}),e}):``;e(()=>f(t,T,D))}),t})}),s,v),s})};export{x as default};
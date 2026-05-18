import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,d as u,dt as d,ht as f,l as p,st as m,t as h,vt as g,z as _}from"./vapor-runtime-BuwLbCGk.js";import{a as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>f(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),title:v(`ref:1:1`,()=>m(`Rue 文本指令`)),status:v(`ref:1:2`,()=>m(`等待同步`))})));return u(f=>{let m=t(),v=e(`rue:component:anchor`);return a(m,v),p(h(b,{children:u(()=>{let f=t(),m=r(`h1`,f);a(f,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-text / r-text`));let v=r(`div`,f);a(f,v),c(v,`role`,`tablist`),n(v,`tabs tabs-box`);let b=r(`button`,v);a(v,b),c(b,`role`,`tab`),g(()=>{n(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(b,`click`,()=>{x.value=`preview`}),a(b,s(`效果`));let w=r(`button`,v);a(v,w),c(w,`role`,`tab`),g(()=>{n(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(w,`click`,()=>{x.value=`code`}),a(w,s(`代码`));let T=r(`div`,f);a(f,T),n(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);a(T,E),g(()=>{let i=x.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),g(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});d(()=>p(e,s,c))}),i}):``;d(()=>p(i,T,E))}),a(T,s(` `));let D=e(`rue:slot:anchor`);return a(T,D),g(()=>{let e=x.value===`preview`?u(()=>{let e=t(),c=r(`div`,e);a(e,c),n(c,`card bg-base-100 shadow`);let u=r(`div`,c);a(c,u),n(u,`card-body grid gap-6`);let d=r(`section`,u);a(u,d),n(d,`space-y-3`);let f=r(`div`,d);a(d,f),n(f,`flex flex-wrap items-center gap-3`);let p=r(`input`,f);a(f,p),n(p,`input input-bordered`),g(()=>{l(p,S.value)}),i(p,`input`,e=>{S.value=e.target.value});let m=r(`button`,f);a(f,m),n(m,`btn btn-sm`),i(m,`click`,()=>{C.value=`已同步：`+S.value}),a(m,s(`同步状态`));let h=r(`div`,d);a(d,h),n(h,`rounded-box border border-base-300 p-4 grid gap-3`);let v=r(`h2`,h);a(h,v),n(v,`text-xl font-semibold`);let y=_(v);a(v,y),g(()=>{o(y,S.value)});let b=r(`p`,h);a(h,b),n(b,`alert alert-info`);let x=_(b);return a(b,x),g(()=>{o(x,C.value)}),e}):``;d(()=>p(e,T,D))}),f})}),m,v),m})};export{x as default};
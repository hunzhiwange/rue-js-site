import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,ot as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-ACs_OvwU.js";import{a as v}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as y}from"./Code-CliOXHNE.js";import{t as b}from"./SidebarPlaygroundExample-DXnPmR3z.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>t(()=>({activeTab:v(`ref:1:0`,()=>c(`code`)),title:v(`ref:1:1`,()=>c(`Rue 文本指令`)),status:v(`ref:1:2`,()=>c(`等待同步`))})));return l(t=>{let c=n(),v=s(`rue:component:anchor`);return r(c,v),d(h(b,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),g(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,p(`v-text / r-text`));let v=a(`div`,t);r(t,v),e(v,`role`,`tablist`),g(v,`tabs tabs-box`);let b=a(`button`,v);r(v,b),e(b,`role`,`tab`),u(()=>{g(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),o(b,`click`,()=>{x.value=`preview`}),r(b,p(`效果`));let w=a(`button`,v);r(v,w),e(w,`role`,`tab`),u(()=>{g(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),o(w,`click`,()=>{x.value=`code`}),r(w,p(`代码`));let T=a(`div`,t);r(t,T),g(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);r(T,E),u(()=>{let e=x.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),g(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});_(()=>d(e,i,o))}),e}):``;_(()=>d(e,T,E))}),r(T,p(` `));let D=s(`rue:slot:anchor`);return r(T,D),u(()=>{let e=x.value===`preview`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow`);let s=a(`div`,t);r(t,s),g(s,`card-body grid gap-6`);let c=a(`section`,s);r(s,c),g(c,`space-y-3`);let l=a(`div`,c);r(c,l),g(l,`flex flex-wrap items-center gap-3`);let d=a(`input`,l);r(l,d),g(d,`input input-bordered`),u(()=>{f(d,S.value)}),o(d,`input`,e=>{S.value=e.target.value});let h=a(`button`,l);r(l,h),g(h,`btn btn-sm`),o(h,`click`,()=>{C.value=`已同步：`+S.value}),r(h,p(`同步状态`));let _=a(`div`,c);r(c,_),g(_,`rounded-box border border-base-300 p-4 grid gap-3`);let v=a(`h2`,_);r(_,v),g(v,`text-xl font-semibold`);let y=i(v);r(v,y),u(()=>{m(y,S.value)});let b=a(`p`,_);r(_,b),g(b,`alert alert-info`);let x=i(b);return r(b,x),u(()=>{m(x,C.value)}),e}):``;_(()=>d(e,T,D))}),t})}),c,v),c})};export{x as default};
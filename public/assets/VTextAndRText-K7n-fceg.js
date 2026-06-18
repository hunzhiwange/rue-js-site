import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./Code-CZqShVUj.js";import{r as b}from"./SidebarPlaygroundExample-5H7RL-T7.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>m(()=>({activeTab:v(`ref:1:0`,()=>r(`code`)),title:v(`ref:1:1`,()=>r(`Rue 文本指令`)),status:v(`ref:1:2`,()=>r(`等待同步`))})));return d(r=>{let m=s(),v=a(`rue:component:anchor`);return n(m,v),h(_(b,{children:d(()=>{let r=s(),m=i(`h1`,r);n(r,m),g(m,`text-5xl font-semibold mb-4 md:mb-4`),n(m,e(`v-text / r-text`));let v=i(`div`,r);n(r,v),c(v,`role`,`tablist`),g(v,`tabs tabs-box`);let b=i(`button`,v);n(v,b),c(b,`role`,`tab`),o(()=>{g(b,`tab ${x.value===`preview`?`tab-active`:``}`)}),p(b,`click`,()=>{x.value=`preview`}),n(b,e(`效果`));let w=i(`button`,v);n(v,w),c(w,`role`,`tab`),o(()=>{g(w,`tab ${x.value===`code`?`tab-active`:``}`)}),p(w,`click`,()=>{x.value=`code`}),n(w,e(`代码`));let T=i(`div`,r);n(r,T),g(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);n(T,E),o(()=>{let e=x.value===`code`?d(()=>{let e=s(),r=i(`div`,e);n(e,r),g(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),g(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=_(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});t(()=>h(e,c,l))}),e}):``;t(()=>h(e,T,E))}),n(T,e(` `));let D=a(`rue:slot:anchor`);return n(T,D),o(()=>{let r=x.value===`preview`?d(()=>{let t=s(),r=i(`div`,t);n(t,r),g(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),g(a,`card-body grid gap-6`);let c=i(`section`,a);n(a,c),g(c,`space-y-3`);let d=i(`div`,c);n(c,d),g(d,`flex flex-wrap items-center gap-3`);let m=i(`input`,d);n(d,m),g(m,`input input-bordered`),o(()=>{u(m,S.value)}),p(m,`input`,e=>{S.value=e.target.value});let h=i(`button`,d);n(d,h),g(h,`btn btn-sm`),p(h,`click`,()=>{C.value=`已同步：`+S.value}),n(h,e(`同步状态`));let _=i(`div`,c);n(c,_),g(_,`rounded-box border border-base-300 p-4 grid gap-3`);let v=i(`h2`,_);n(_,v),g(v,`text-xl font-semibold`);let y=l(v);n(v,y),o(()=>{f(y,S.value)});let b=i(`p`,_);n(_,b),g(b,`alert alert-info`);let x=l(b);return n(b,x),o(()=>{f(x,C.value)}),t}):``;t(()=>h(r,T,D))}),r})}),m,v),m})};export{x as default};
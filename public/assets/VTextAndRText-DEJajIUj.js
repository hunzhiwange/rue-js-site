import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,pt as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./Code-5DOEyGxf.js";import{r as b}from"./SidebarPlaygroundExample-cASgDpH3.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>m(()=>({activeTab:v(`ref:1:0`,()=>i(`code`)),title:v(`ref:1:1`,()=>i(`Rue 文本指令`)),status:v(`ref:1:2`,()=>i(`等待同步`))})));return u(i=>{let m=r(),v=s(`rue:component:anchor`);return o(m,v),h(g(b,{children:u(()=>{let i=r(),m=e(`h1`,i);o(i,m),c(m,`text-5xl font-semibold mb-4 md:mb-4`),o(m,l(`v-text / r-text`));let v=e(`div`,i);o(i,v),f(v,`role`,`tablist`),c(v,`tabs tabs-box`);let b=e(`button`,v);o(v,b),f(b,`role`,`tab`),a(()=>{c(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),n(b,`click`,()=>{x.value=`preview`}),o(b,l(`效果`));let w=e(`button`,v);o(v,w),f(w,`role`,`tab`),a(()=>{c(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),n(w,`click`,()=>{x.value=`code`}),o(w,l(`代码`));let T=e(`div`,i);o(i,T),c(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);o(T,E),a(()=>{let n=x.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});t(()=>h(e,l,u))}),n}):``;t(()=>h(n,T,E))}),o(T,l(` `));let D=s(`rue:slot:anchor`);return o(T,D),a(()=>{let i=x.value===`preview`?u(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),c(s,`card-body grid gap-6`);let u=e(`section`,s);o(s,u),c(u,`space-y-3`);let f=e(`div`,u);o(u,f),c(f,`flex flex-wrap items-center gap-3`);let m=e(`input`,f);o(f,m),c(m,`input input-bordered`),a(()=>{p(m,S.value)}),n(m,`input`,e=>{S.value=e.target.value});let h=e(`button`,f);o(f,h),c(h,`btn btn-sm`),n(h,`click`,()=>{C.value=`已同步：`+S.value}),o(h,l(`同步状态`));let g=e(`div`,u);o(u,g),c(g,`rounded-box border border-base-300 p-4 grid gap-3`);let v=e(`h2`,g);o(g,v),c(v,`text-xl font-semibold`);let y=_(v);o(v,y),a(()=>{d(y,S.value)});let b=e(`p`,g);o(g,b),c(b,`alert alert-info`);let x=_(b);return o(b,x),a(()=>{d(x,C.value)}),t}):``;t(()=>h(i,T,D))}),i})}),m,v),m})};export{x as default};
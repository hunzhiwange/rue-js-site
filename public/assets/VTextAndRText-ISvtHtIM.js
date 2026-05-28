import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,pt as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v}from"./vapor-helpers-vapor-DkadWylb.js";import{t as y}from"./Code-B_4lzH85.js";import{t as b}from"./SidebarPlaygroundExample-CtM-WHq_.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>n(()=>({activeTab:v(`ref:1:0`,()=>r(`code`)),title:v(`ref:1:1`,()=>r(`Rue 文本指令`)),status:v(`ref:1:2`,()=>r(`等待同步`))})));return u(n=>{let r=i(),v=c(`rue:component:anchor`);return o(r,v),f(g(b,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`v-text / r-text`));let v=e(`div`,n);o(n,v),m(v,`role`,`tablist`),l(v,`tabs tabs-box`);let b=e(`button`,v);o(v,b),m(b,`role`,`tab`),s(()=>{l(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(b,`click`,()=>{x.value=`preview`}),o(b,d(`效果`));let w=e(`button`,v);o(v,w),m(w,`role`,`tab`),s(()=>{l(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(w,`click`,()=>{x.value=`code`}),o(w,d(`代码`));let T=e(`div`,n);o(n,T),l(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=c(`rue:slot:anchor`);o(T,E),s(()=>{let t=x.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,T,E))}),o(T,d(` `));let D=c(`rue:slot:anchor`);return o(T,D),s(()=>{let n=x.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-6`);let c=e(`section`,a);o(a,c),l(c,`space-y-3`);let u=e(`div`,c);o(c,u),l(u,`flex flex-wrap items-center gap-3`);let f=e(`input`,u);o(u,f),l(f,`input input-bordered`),s(()=>{h(f,S.value)}),t(f,`input`,e=>{S.value=e.target.value});let m=e(`button`,u);o(u,m),l(m,`btn btn-sm`),t(m,`click`,()=>{C.value=`已同步：`+S.value}),o(m,d(`同步状态`));let g=e(`div`,c);o(c,g),l(g,`rounded-box border border-base-300 p-4 grid gap-3`);let v=e(`h2`,g);o(g,v),l(v,`text-xl font-semibold`);let y=_(v);o(v,y),s(()=>{p(y,S.value)});let b=e(`p`,g);o(g,b),l(b,`alert alert-info`);let x=_(b);return o(b,x),s(()=>{p(x,C.value)}),n}):``;a(()=>f(n,T,D))}),n})}),r,v),r})};export{x as default};
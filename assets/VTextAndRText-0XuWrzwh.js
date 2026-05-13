import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,X as c,Z as l,_t as u,bt as d,c as f,j as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./SidebarPlaygroundExample-DKa0aI1C.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>u(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),title:v(`ref:1:1`,()=>m(`Rue 文本指令`)),status:v(`ref:1:2`,()=>m(`等待同步`))})));return _(()=>{let u=e(),m=a(`rue:component:anchor`);return i(u,m),f(g(b,{children:_(()=>{let u=e(),m=n(`h1`);i(u,m),t(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,r(`v-text / r-text`));let v=n(`div`);i(u,v),s(v,`role`,`tablist`),t(v,`tabs tabs-box`);let b=n(`button`);i(v,b),s(b,`role`,`tab`),d(()=>{t(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),p(b,`click`,()=>{x.value=`preview`}),i(b,r(`效果`));let w=n(`button`);i(v,w),s(w,`role`,`tab`),d(()=>{t(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),p(w,`click`,()=>{x.value=`code`}),i(w,r(`代码`));let T=n(`div`);i(u,T),t(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);i(T,E),d(()=>{let r=x.value===`code`?_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});h(()=>f(e,s,c))}),r}):``;h(()=>f(r,T,E))}),i(T,r(` `));let D=a(`rue:slot:anchor`);return i(T,D),d(()=>{let a=x.value===`preview`?_(()=>{let a=e(),s=n(`div`);i(a,s),t(s,`card bg-base-100 shadow`);let u=n(`div`);i(s,u),t(u,`card-body grid gap-6`);let f=n(`section`);i(u,f),t(f,`space-y-3`);let m=n(`div`);i(f,m),t(m,`flex flex-wrap items-center gap-3`);let h=n(`input`);i(m,h),t(h,`input input-bordered`),d(()=>{c(h,S.value)}),p(h,`input`,e=>{S.value=e.target.value});let g=n(`button`);i(m,g),t(g,`btn btn-sm`),p(g,`click`,()=>{C.value=`已同步：`+S.value}),i(g,r(`同步状态`));let _=n(`div`);i(f,_),t(_,`rounded-box border border-base-300 p-4 grid gap-3`);let v=n(`h2`);i(_,v),t(v,`text-xl font-semibold`);let y=o(v);i(v,y),d(()=>{l(y,S.value)});let b=n(`p`);i(_,b),t(b,`alert alert-info`);let x=o(b);return i(b,x),d(()=>{l(x,C.value)}),a}):``;h(()=>f(a,T,D))}),u})}),u,m),u})};export{x as default};
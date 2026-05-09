import{A as e,F as t,H as n,I as r,J as i,L as a,N as o,P as s,W as c,Y as l,c as u,j as d,pt as f,rt as p,t as m,u as h,ut as g}from"./vapor-runtime-CKndxKFn.js";import{a as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as v}from"./Code-B1JFTu6m.js";import{t as y}from"./SidebarPlaygroundExample-DlK8mtjC.js";var b=()=>{let{activeTab:b,title:x,status:S}=_(`useSetup:0:0`,()=>g(()=>({activeTab:_(`ref:1:0`,()=>p(`code`)),title:_(`ref:1:1`,()=>p(`Rue 文本指令`)),status:_(`ref:1:2`,()=>p(`等待同步`))})));return h(()=>{let p=s(),g=o(`rue:component:anchor`);return d(p,g),u(m(y,{children:h(()=>{let p=s(),g=t(`h1`);d(p,g),c(g,`text-5xl font-semibold mb-4 md:mb-4`),d(g,r(`v-text / r-text`));let _=t(`div`);d(p,_),n(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=t(`button`);d(_,y),n(y,`role`,`tab`),f(()=>{c(y,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),e(y,`click`,()=>{b.value=`preview`}),d(y,r(`效果`));let C=t(`button`);d(_,C),n(C,`role`,`tab`),f(()=>{c(C,String(`tab ${b.value===`code`?`tab-active`:``}`))}),e(C,`click`,()=>{b.value=`code`}),d(C,r(`代码`));let w=t(`div`);d(p,w),c(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=o(`rue:slot:anchor`);d(w,T),f(()=>{u(b.value===`code`?h(()=>{let e=s(),n=t(`div`);d(e,n),c(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);d(n,r),c(r,`card-body p-0`);let i=o(`rue:component:anchor`);return d(r,i),f(()=>{u(m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`}),r,i)}),e}):``,w,T)}),d(w,r(` `));let E=o(`rue:slot:anchor`);return d(w,E),f(()=>{u(b.value===`preview`?h(()=>{let n=s(),o=t(`div`);d(n,o),c(o,`card bg-base-100 shadow`);let u=t(`div`);d(o,u),c(u,`card-body grid gap-6`);let p=t(`section`);d(u,p),c(p,`space-y-3`);let m=t(`div`);d(p,m),c(m,`flex flex-wrap items-center gap-3`);let h=t(`input`);d(m,h),c(h,`input input-bordered`),f(()=>{i(h,x.value)}),e(h,`input`,e=>{x.value=e.target.value});let g=t(`button`);d(m,g),c(g,`btn btn-sm`),e(g,`click`,()=>{S.value=`已同步：`+x.value}),d(g,r(`同步状态`));let _=t(`div`);d(p,_),c(_,`rounded-box border border-base-300 p-4 grid gap-3`);let v=t(`h2`);d(_,v),c(v,`text-xl font-semibold`);let y=a(v);d(v,y),f(()=>{l(y,x.value)});let b=t(`p`);d(_,b),c(b,`alert alert-info`);let C=a(b);return d(b,C),f(()=>{l(C,S.value)}),n}):``,w,E)}),p})}),p,g),p})};export{b as default};
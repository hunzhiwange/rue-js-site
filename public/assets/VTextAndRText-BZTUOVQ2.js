import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,it as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{t as b}from"./SidebarPlaygroundExample-CdMvdgT7.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>h(()=>({activeTab:v(`ref:1:0`,()=>u(`code`)),title:v(`ref:1:1`,()=>u(`Rue 文本指令`)),status:v(`ref:1:2`,()=>u(`等待同步`))})));return f(u=>{let h=o(),v=i(`rue:component:anchor`);return t(h,v),p(m(b,{children:f(()=>{let u=o(),h=s(`h1`,u);t(u,h),e(h,`text-5xl font-semibold mb-4 md:mb-4`),t(h,r(`v-text / r-text`));let v=s(`div`,u);t(u,v),c(v,`role`,`tablist`),e(v,`tabs tabs-box`);let b=s(`button`,v);t(v,b),c(b,`role`,`tab`),n(()=>{e(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),_(b,`click`,()=>{x.value=`preview`}),t(b,r(`效果`));let w=s(`button`,v);t(v,w),c(w,`role`,`tab`),n(()=>{e(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),_(w,`click`,()=>{x.value=`code`}),t(w,r(`代码`));let T=s(`div`,u);t(u,T),e(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);t(T,E),n(()=>{let r=x.value===`code`?f(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});g(()=>p(e,c,l))}),r}):``;g(()=>p(r,T,E))}),t(T,r(` `));let D=i(`rue:slot:anchor`);return t(T,D),n(()=>{let i=x.value===`preview`?f(()=>{let i=o(),c=s(`div`,i);t(i,c),e(c,`card bg-base-100 shadow`);let u=s(`div`,c);t(c,u),e(u,`card-body grid gap-6`);let f=s(`section`,u);t(u,f),e(f,`space-y-3`);let p=s(`div`,f);t(f,p),e(p,`flex flex-wrap items-center gap-3`);let m=s(`input`,p);t(p,m),e(m,`input input-bordered`),n(()=>{d(m,S.value)}),_(m,`input`,e=>{S.value=e.target.value});let h=s(`button`,p);t(p,h),e(h,`btn btn-sm`),_(h,`click`,()=>{C.value=`已同步：`+S.value}),t(h,r(`同步状态`));let g=s(`div`,f);t(f,g),e(g,`rounded-box border border-base-300 p-4 grid gap-3`);let v=s(`h2`,g);t(g,v),e(v,`text-xl font-semibold`);let y=a(v);t(v,y),n(()=>{l(y,S.value)});let b=s(`p`,g);t(g,b),e(b,`alert alert-info`);let x=a(b);return t(b,x),n(()=>{l(x,C.value)}),i}):``;g(()=>p(i,T,D))}),u})}),h,v),h})};export{x as default};